import React from "react";

import Navbar from "./navbar";
import Footer from "./footer";
function Layout({ children }) {

  return (
    <div className="relative flex flex-col justify-between h-[100vh]">
      <div className="fixed top-0 left-0 overflow-hidden scale-75 opacity-75 blobs">
        <div className="svg-blob1 "></div>
        <div className="svg-blob2 "></div>
        <div className="svg-blob3 "></div>
        <div className="svg-blob4 "></div>
        <div className="svg-blob5 "></div>
      </div>
      <div>
        <Navbar />
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
