import React, { useEffect } from "react";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";
import ScrollTop from "./UI/ScrollTop";
import { useHref } from "react-router-dom";
import scrollTop from "utils/scrollTop";

const Layout = ({ children }) => {
  const href = useHref();

  useEffect(() => {
    scrollTop();
  }, [href]);

  return (
    <div className="min-h-screen w-full grid grid-rows-[auto,1fr,auto]">
      <Navbar />
      <div className="px-4 md:px-16 py-4">{children}</div>
      <Footer />
      <ScrollTop />
    </div>
  );
};

export default Layout;
