import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

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
