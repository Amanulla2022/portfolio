import React from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

const Layout = ({ children }) => {
  return (
    <div className="flex gap-8 bg-teal-400 pt-16">
      <SideBar />
      <div className="flex flex-col gap-4 w-full">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
