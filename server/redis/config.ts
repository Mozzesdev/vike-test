import { createClient } from "redis";
import { REDIS_PASSWORD } from "../config.js";

const redis = await createClient({
  password: REDIS_PASSWORD,
  socket: {
    host: "",
    port: 10075,
  },
})
  .on("connect", () => {
    console.log("Conexión establecida con Redis");
  })
  .on("error", async (err) => {
    console.log("Redis Client Error", err);
    await redis.quit();
  })
  .connect();

export default redis;
