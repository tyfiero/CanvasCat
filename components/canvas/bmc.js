import React from "react";
import {
  FaChartPie,
  FaCoins,
  FaEdit,
  FaFunnelDollar,
  FaPeopleArrows,
} from "react-icons/fa";
import { BsBoxSeam, BsBuilding, BsCash, BsPeopleFill } from "react-icons/bs";
import { TbActivity, TbDiamond } from "react-icons/tb";
import { BiLayout } from "react-icons/bi";
import CanvasUnit from "./canvasUnit";
import { UserContext } from "../../firebase/context";
import Link from "next/link";
import HelpAccordion from "../Accordion";
import EditUnit from "./editUnit";

function BMC({ layout, setLayout, contextSentence, }) {
  const { aiCredits } = React.useContext(UserContext);

  return (
    <div className="relative flex flex-col items-center w-full h-full gap-0 rounded-tl-none fade-effect-quick ">
      <section className="flex flex-col w-full h-full border-2 rounded-lg border-slate-700 dark:border-white ">
        <div className="flex min-h-[40em] md:flex-row sm:flex-col">
          <div className="border-2 border-slate-700 dark:border-white md:w-1/5 sm:w-full min-h-[20em]">
            <CanvasUnit
              icon={<BsBuilding />}
              title="Key Partners"
              kind="partners"
              type="canvas"
              description={
                "Who are the people or businesses that will help you?"
              }
              qContext={contextSentence}
            />
          </div>
          <div className="border-2 border-slate-700 dark:border-white md:w-1/5 sm:w-full min-h-[20em] h-full">
            <div className="border-2 border-slate-700 dark:border-white md:h-1/2 sm:h-full min-h-[20em]">
              <CanvasUnit
                icon={<TbActivity />}
                title="Key Activities"
                kind="activities"
                type="canvas"
                description={
                  "What are the essential activities of your business? What does your business do for people?"
                }
                qContext={contextSentence}
              />
            </div>
            <div className="border-2 border-slate-700 dark:border-white md:h-1/2 sm:h-full min-h-[20em]">
              <CanvasUnit
                icon={<BsBoxSeam />}
                title="Key Resources"
                kind="resources"
                type="canvas"
                description={"What will you need to accomplish your goals?"}
                qContext={contextSentence}
              />
            </div>
          </div>
          <div className="border-2 border-slate-700 dark:border-white md:w-1/5 sm:w-full min-h-[20em]">
            <CanvasUnit
              icon={<TbDiamond />}
              title="Value Propositions"
              kind="value"
              type="canvas"
              description={
                "What makes you different? Why should someone buy your product or service?"
              }
              qContext={contextSentence}
            />
          </div>
          <div className="border-2 border-slate-700 dark:border-white md:w-1/5 sm:w-full min-h-[20em] h-full">
            <div className="border-2 border-slate-700 dark:border-white md:h-1/2 sm:h-full min-h-[20em]">
              <CanvasUnit
                icon={<BsPeopleFill />}
                title="Customer Relationships"
                kind="relationships"
                type="canvas"
                description={
                  "What relationships do you have with your customers? How will your customers interact with you?"
                }
                qContext={contextSentence}
              />
            </div>
            <div className="border-2 border-slate-700 dark:border-white md:h-1/2 sm:h-full min-h-[20em]">
              <CanvasUnit
                title="Customer Channels"
                icon={<FaPeopleArrows />}
                kind="channels"
                type="canvas"
                description={
                  "Where will you find your customers? What channels will you use to reach them?"
                }
                qContext={contextSentence}
              />
            </div>
          </div>
          <div className="border-2 border-slate-700 dark:border-white md:w-1/5 sm:w-full min-h-[20em]">
            <CanvasUnit
              icon={<FaChartPie />}
              title="Customer Segments"
              kind="segments"
              type="canvas"
              description={"What is your niche? Who are your customers?"}
              qContext={contextSentence}
            />
          </div>
        </div>

        <div className="flex min-h-[20em] md:flex-row sm:flex-col">
          <div className="border-2 border-slate-700 dark:border-white md:w-1/2 sm:w-full min-h-[20em]">
            <CanvasUnit
              icon={<BsCash />}
              title="Cost Structure"
              kind="cost"
              type="canvas"
              description={
                "How much will it cost to run your business? What unexpected expenses can you forsee? What are your top costs?"
              }
              qContext={contextSentence}
            />
          </div>
          <div className="border-2 border-slate-700 dark:border-white md:w-1/2 sm:w-full min-h-[20em]">
            <CanvasUnit
              icon={<FaFunnelDollar />}
              title="Revenue Streams"
              kind="revenue"
              type="canvas"
              description={
                "How will you generate revenue? What will you charge? Will you have a free tier?"
              }
              qContext={contextSentence}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default BMC;
