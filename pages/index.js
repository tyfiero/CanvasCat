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
  const [toolArray, setToolArray] = useState([
    {
      title: "Innovation AI",
      description:
        "Use the power of artificial intelligence to make ideas for you.",
      icon: <FaRobot className="scale-200" />,
      path: "/ai",
    },
    {
      title: "Cards",
      description: "Combinatorial inspiration with random words and images.",
      icon: <FaRandom className="scale-200" />,
      path: "/cards",
    },
  ]);

  return (
    <div className="wrapped-iframe">
      {/* <div className="absolute flex top-1 left-1"> */}
      {/* <button
          className="z-50 flex items-center justify-center w-10 h-10 text-white transition rounded-full bg-sky-400 hover:scale-110 active:scale-90"
          onClick={() => {
            if (tool < 3) {
              setTool(tool + 1);
            } else {
              setTool(0);
            }
          }}
        >
          <FaSync />
        </button> */}
      {/* </div> */}
      <div className="flex justify-center w-full mt-5">
        <p className="text-3xl text-t-bd">
          Welcome to <span className="fre logo">BMC Generator!</span>!
        </p>
      </div>
      <div
        className="px-2 pb-5 
    h-full !border-0 mb-1   m-2 !mr-8 relative rounded-xl wrapped-iframe flex flex-col justify-center items-center fade-effect-quick"
      >
        <p className="text-xl font-bold text-t-bd">Tools:</p>
        <div className="flex flex-wrap items-center justify-center gap-3 w-[80%]">
          {toolArray.map((tool, index) => {
            return (
              <ToolDiv
                key={index}
                title={tool.title}
                description={tool.description}
                path={tool.path}
                icon={tool.icon}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ToolDiv(props) {
  return (
    <Link href={props.path}>
      <div className="flex flex-col items-center justify-center w-[15em] h-[16em] rounded-2xl p-5 bg-gradient-to-t from-white/90 via-sky-200/50 hover:scale-105 transition hover:ring-4 ring-2 ring-t-bl duration-500 cursor-pointer">
        <div className="flex flex-col items-center justify-between gap-2">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-t-bl flex items-center justify-center !text-white rounded-full">
              {props.icon}
            </div>
            <div className="text-xl font-bold text-center text-t-bd fre">
              {props.title}
            </div>
          </div>
          <div className="text-center">{props.description}</div>
        </div>
      </div>
    </Link>
  );
}
