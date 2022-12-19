import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/common/footer/Footer";
import Header from "../components/common/header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
