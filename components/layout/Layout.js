import React, { useState, useContext } from "react";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import { FaChartLine, FaRandom, FaRegUser, FaRobot } from "react-icons/fa";
import { useAuth } from "../../firebase/AuthContext";
import { UserContext } from "../../firebase/context";
import toast from "react-hot-toast";
import { BiLayout } from "react-icons/bi";
function Layout({ children }) {
  const [isOpen, setOpen] = useState(false);
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

      <div className="absolute top-0 left-0 z-50 scale-75">
        <Hamburger
          className="hamburger"
          toggled={isOpen}
          toggle={() => {
            setOpen(!isOpen);
          }}
          // size={25}
          easing="ease-in"
          color="#fff"
          label="Show menu"
          rounded
        />
      </div>
      {isOpen && (
        <>
          <div
            className="fixed top-0 right-0 z-10 w-[70%] h-[100vh]  fade-effect-fast  !overflow-hidden"
            onClick={() => {
              setOpen(false);
            }}
          ></div>
          <div className="fixed top-0 left-0 z-10 md:w-[30%] sm:w-[50%] h-[100vh] bg-gradient-to-b from-white/90 dark:from-black/90 via-sky-100/90 dark:via-sky-900/90 to-clear-bl3 dark:to-sky-700/90 fade-effect-fast  !overflow-hidden shadow-2xl drop-shadow-2xl">
            <ul className="z-20 flex items-left mt-4 md:gap-10 sm:gap-4 flex-col  fade-effect-quick absolute  left-0 right-0 ml-auto mr-auto w-[80%]  text-2xl">
              <li>
                <div className="flex items-center justify-center w-full gap-2 md:mb-10 sm:mb-5 transition md:scale-100 sm:scale-[90%] md:mt-0 sm:mt-5">
                  <img
                    src="/bulb.svg"
                    alt="logo"
                    className="h-[2.2em] "
                  />

                  <h4 className="z-50 pt-4 m-0 logo fre">BMC Generator</h4>
                </div>
              </li>
              <li>
                {/*        
        <div className="absolute top-0 z-50 left-[40em] fade-effect-quick">
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <div className="flex items-center gap-4"> */}
                <Link href="/ai">
                  <a
                    className="flex items-center group md:scale-100 sm:scale-[80%]"
                    onClick={() => setOpen(false)}
                  >
                    <FaRobot className="transition duration-500 text-sky-400 group-hover:text-sky-800" />
                    <span className="ml-2 transition nun group-hover:text-sky-800 ">
                      AI
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/ai/canvas">
                  <a
                    className="flex items-center group md:scale-100 sm:scale-[80%]"
                    onClick={() => setOpen(false)}
                  >
                    <BiLayout className="transition duration-500 text-sky-400 group-hover:text-sky-800" />
                    <span className="ml-2 transition nun group-hover:text-sky-800 ">
                      Canvas Builder
                    </span>
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/mrr">
                  <a
                    className="flex items-center group md:scale-100 sm:scale-[80%]"
                    onClick={() => setOpen(false)}
                  >
                    <FaChartLine className="transition duration-500 text-sky-400 group-hover:text-sky-800" />
                    <span className="ml-2 transition nun group-hover:text-sky-800 sm:hidden md:block">
                      MRR Calculator
                    </span>
                    <span className="ml-2 transition nun group-hover:text-sky-800 sm:block md:hidden">
                      MRR Calc
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/account">
                  <a
                    className="flex items-center group md:scale-100 sm:scale-[80%]"
                    onClick={() => setOpen(false)}
                  >
                    <FaRegUser className="transition duration-500 text-sky-400 group-hover:text-sky-800" />
                    <span className="ml-2 transition nun group-hover:text-sky-800 ">
                      Account
                    </span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          {/* </div>
          </div> */}
          {/* </div> */}
        </>
      )}
      <div>{children}</div>
    </div>
  );
}

export default Layout;
