import express from "express";
import compression from "compression";
import { renderPage } from "vike/server";
import { root } from "./root.js";
import cookieParser from "cookie-parser";
import { JSW_KEY, NODE_ENV, PORT } from "./config.js";
import jwt, { JwtPayload } from "jsonwebtoken";

const app = express();
app.disable("x-powered-by");

app.use(compression());

const isProduction = NODE_ENV === "production";

if (isProduction) {
  const sirv = (await import("sirv")).default;
  app.use(sirv(`${root}/dist/client`));
} else {
  const vite = await import("vite");
  const viteDevMiddleware = (
    await vite.createServer({
      root,
      server: { middlewareMode: true },
    })
  ).middlewares;
  app.use(viteDevMiddleware);
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use((req: any, _res, next) => {
  const { access_token } = req.cookies;

  if (access_token) {
    jwt.verify(
      access_token,
      JSW_KEY as string,
      (err: jwt.VerifyErrors | null, user: string | JwtPayload | undefined) => {
        req.user = user;
        next();
      }
    );
  } else {
    req.user = null;
    next();
  }
});
app.get("*", async (req: any, res, next) => {
  const pageContextInit = {
    urlOriginal: req.originalUrl,
    headersOriginal: req.headers,
    user: req.user,
  };
  const pageContext = await renderPage(pageContextInit);

  if (pageContext.errorWhileRendering) {
  }
  const { httpResponse, headersOriginal } = pageContext;

  if (!httpResponse) return next();

  const { statusCode, headers, earlyHints } = httpResponse;

  if (res.writeEarlyHints)
    res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) });

  headers.forEach(([name, value]) => res.setHeader(name, value));
  res.setHeader("user-agent", (headersOriginal["user-agent"] as string) ?? "");

  res.status(statusCode);

  httpResponse.pipe(res);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
