import React, { useState, useContext } from "react";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import { FaChartLine, FaRandom, FaRegUser, FaRobot } from "react-icons/fa";
import { useAuth } from "../../firebase/AuthContext";
import { UserContext } from "../../firebase/context";
import toast from "react-hot-toast";
import { BiLayout } from "react-icons/bi";
import Navbar from "./navbar";
function Layout({ children }) {
  const { currentUser, logout } = useAuth();
  const { aiCredits } = useContext(UserContext);

  return (
    <div className="relative wrapped-iframe">
      <div className="fixed top-0 left-0 overflow-hidden scale-75 opacity-75 blobs">
        <div className="svg-blob1 "></div>
        <div className="svg-blob2 "></div>
        <div className="svg-blob3 "></div>
        <div className="svg-blob4 "></div>
        <div className="svg-blob5 "></div>
      </div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
