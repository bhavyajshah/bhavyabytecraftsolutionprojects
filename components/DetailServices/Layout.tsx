
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center pt-4 w-full text-white bg-blend-normal max-md:max-w-full">
      <main className="w-full max-w-[1340px]">{children}</main>
    </div>
  );
};

export default Layout;
