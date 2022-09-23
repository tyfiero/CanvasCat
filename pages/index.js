import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaChartLine, FaRandom, FaRobot } from "react-icons/fa";
import { react, useState } from "react";
// import { software, industries, impactVerbs } from "../components/ListsAll";
// import Loader from "../components/Loader";
// import Cards from "../components/Cards";
// import MrrCalculator from "../components/MrrCalc";
// import GPTtool from "../components/GPT3";
// import LogIn from "../components/LogIn";

export default function Home() {
  const [tool, setTool] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  
  return (
    <div className="wrapped-iframe">
      <div
        className="px-2 pb-5 
    h-full !border-0 mb-1   m-2 !mr-8 relative rounded-xl wrapped-iframe flex flex-col justify-center items-center fade-effect-quick"
      >
       
      </div>
    </div>
  );
}
