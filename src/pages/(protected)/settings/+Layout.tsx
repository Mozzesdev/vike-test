import { ReactNode } from "react";
import { usePageContext } from "../../../../hooks/usePageContext";

const Layout = ({ children }: { children: ReactNode }) => {
  const { config }: any = usePageContext();
  return (
    <>
      <section className="py-6 bg-[#111111] text-neutral-200 font-inter-medium mb-7 px-10 max-sm:px-4 border-b border-[#2d2d2d]">
        <h1 className="text-3xl">{config.title}</h1>
        <nav>
          <ul></ul>
        </nav>
      </section>
      {children}
    </>
  );
};

export default Layout;
