import Link from "next/link";
import React from "react";
import { FaChartLine, FaDollarSign, FaRobot } from "react-icons/fa";

function Tools() {
  const [toolArray, setToolArray] = React.useState([
    {
      title: "AI Ideas",
      description: "AI idea generator",
      icon: <FaRobot className="scale-200" />,
      path: "/tools/ai-ideas",
    },
    {
      title: "MRR Calculator",
      description: "Calculate your MRR",
      icon: <FaChartLine className="scale-200" />,
      path: "/tools/mrr",
    },
    {
      title: "Pricing",
      description: "Pricing tool",
      icon: <FaDollarSign className="scale-200" />,
      path: "/tools/pricing-tool",
    },
  ]);

  return (
    <div className="page-container">
      <h1 className="mb-8 text-4xl font-bold text-t-bd">Tools:</h1>
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
  );
}

function ToolDiv(props) {
  return (
    <Link href={props.path}>
      <div className="flex flex-col items-center justify-center w-[15em] h-[16em] rounded-2xl p-5 bg-gradient-to-t from-white/90 via-orange-200/50 hover:scale-105 transition hover:ring-4 ring-2 ring-t-bl duration-500 cursor-pointer">
        <div className="flex flex-col items-center justify-between gap-2">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-t-bl flex items-center justify-center !text-white rounded-full">
              {props.icon}
            </div>
            <div className="text-2xl font-bold text-center text-t-bd fre">
              {props.title}
            </div>
          </div>
          <div className="text-center">{props.description}</div>
        </div>
      </div>
    </Link>
  );
}

export default Tools;
