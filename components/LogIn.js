import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import SignIn from "../firebase/SignIn";
import Signup from "../firebase/SignUp";

import { useAuth } from "../firebase/AuthContext";
import { UserContext } from "../firebase/context";
import GPTtool from "./GPT3";

function LogIn({ children }) {
  const [mode, setMode] = useState("default");
  const [randomizeAll, setRandomizeAll] = useState(false);
  const { currentUser, logout } = useAuth();
  // const [error, setError] = useState("");
  useEffect(() => {
    if (currentUser) {
      setMode("approved");
    } else {
      setMode("default");
    }
  }, [currentUser]);

  return (
    <div
      className="px-2 pb-5 
              h-full !border-0 mb-1   m-2 !mr-8 relative rounded-xl wrapped-iframe flex flex-col justify-center items-center fade-effect-quick"
    >
      {/* <div className="absolute sm:-right-5 md:-right-1 flex justify-between gap-2 px-1 transition duration-500 border-b-2 border-l-2 opacity-100 sm:-top-1 md:-top-1 rounded-bl-md border-indigo-400 rounded-tr-md group-hover:opacity-100 bg-indigo-300/20 sm:scale-[85%]">
        <button
          data-tip
          data-for="random-all"
          className="flex items-center justify-center w-10 gap-4 p-2 px-2 m-1 text-white bg-indigo-600 cursor-pointer rounded-3xl drop-shadow-xl md:hover:scale-105 md:transition-transform md:active:scale-95"
          onClick={() => setRandomizeAll(!randomizeAll)}
        >
          <FaDice className="text-xl" />
          {/* <ToolTip
                    text="Randomize all selected"
                    id="random-all"
                    w=" !w-[15em]"
                    place="left"
                  /> */}
      {/* </button> */}
      {mode === "signIn" && <SignIn />}
      {mode === "signUp" && <Signup setMode={setMode} />}
      {mode === "approved" && <>{children}</>}
      {(mode === "signIn" || mode === "signUp") && (
        <button
          className="flex items-center gap-2 px-4 py-2 mt-2 text-black transition text-md rounded-xl hover:scale-110 fade-effect-quick"
          onClick={() => setMode("default")}
        >
          <FaArrowLeft /> Back
        </button>
      )}
      {mode !== "default" && <div className="flex flex-col"></div>}
      {mode === "default" && (
        <div className="flex flex-col gap-2">
          <button
            className="px-4 py-2 text-xl text-white transition bg-t-bl rounded-xl hover:scale-110 hover:ring-4 ring-t-bd"
            onClick={() => setMode("signUp")}
          >
            Sign up
          </button>
          <button
            className="px-4 py-2 text-xl text-black transition bg-t-pl rounded-xl hover:scale-110 hover:ring-4 ring-t-pd"
            onClick={() => setMode("signIn")}
          >
            Sign in
          </button>
        </div>
      )}

      {/* <Loader show className="" /> */}
    </div>
  );
}

export default LogIn;
