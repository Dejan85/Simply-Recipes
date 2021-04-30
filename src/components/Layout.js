import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "normalize.css";
import "../assets/css/main.css";

const Layout = props => {
  const { children } = props;
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
