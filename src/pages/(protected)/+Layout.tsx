import { ReactNode } from "react";
import Sidebar from "../../components/Sidebar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Sidebar />
      <main className="pb-10 overflow-hidden w-full mx-auto">
        {children}
      </main>
    </>
  );
};

export default Layout;
