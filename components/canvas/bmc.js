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

function BMC({ layout, setLayout, contextSentence }) {
  const { aiCredits } = React.useContext(UserContext);
  

  const items = [
    {
      title: "Key Partners",
      content: (
        <EditUnit
          kind="Key Partners"
          type="canvas"
          description={"Who are the people or businesses that will help you?"}
          qContext={contextSentence}
        />
      ),
    },
    {
      title: "Key Activities",
      content: (
        <EditUnit
          kind="Key Activities"
          type="canvas"
          description={
            "What are the essential activities of your business? What does your business do for people?"
          }
          qContext={contextSentence}
        />
      ),
    },
    {
      title: "Key Resources",
      content: (
        <EditUnit
          kind="Key Resources"
          type="canvas"
          description={"What will you need to accomplish your goals?"}
          qContext={contextSentence}
        />
      ),
    },
    {
      title: "Value Propositions",
      content: (
        <EditUnit
          kind="Value Propositions"
          type="canvas"
          description={
            "What makes you different? Why should someone buy your product or service?"
          }
          qContext={contextSentence}
        />
      ),
    },
    {
      title: "Customer Relationships",
      content: (
        <>
          <EditUnit
            kind="Customer Relationships"
            type="canvas"
            description={
              "What relationships do you have with your customers? How will your customers interact with you?"
            }
            qContext={contextSentence}
          />
        </>
      ),
    },
    {
      title: "Customer Segments",
      content: (
        <>
          <EditUnit
            kind="Customer Segments"
            type="canvas"
            description={"What is your niche? Who are your customers?"}
            qContext={contextSentence}
          />
        </>
      ),
    },
    {
      title: "Channels",
      content: (
        <>
          <EditUnit
            kind="Channels"
            type="canvas"
            description={
              "Where will you find your customers? What channels will you use to reach them?"
            }
            qContext={contextSentence}
          />
        </>
      ),
    },
    {
      title: "Cost Structure",
      content: (
        <>
          <EditUnit
            kind="Cost Structure"
            type="canvas"
            description={
              "How much will it cost to run your business? What unexpected expenses can you forsee? What are your top costs?"
            }
            qContext={contextSentence}
          />
        </>
      ),
    },
    {
      title: "Revenue Streams",
      content: (
        <>
          <EditUnit
            kind="Revenue Streams"
            type="canvas"
            description={
              "How will you generate revenue? What will you charge? Will you have a free tier?"
            }
            qContext={contextSentence}
          />
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center w-full h-full gap-0 rounded-tl-none glass-box relative fade-effect-quick min-h-[10em]">
      <button
        className={
          "absolute top-1 right-1  " +
          (layout === "canvas" ? "button2" : "button")
        }
        onClick={() => {
          if (layout !== "Canvas") {
            setLayout("Canvas");
          } else {
            setLayout("Edit");
          }
        }}
      >
        {layout === "Canvas" ? <BiLayout /> : <FaEdit />} {layout} View
      </button>
      <button
        className=" px-2 nun text-base py-0 card__btn_next  flex items-center justify-center md:hover:scale-105  md:active:scale-95 fade-effect cursor-pointer !shadow-clear-pd3 md:hover:shadow-xl m-1 drop-shadow-xl !bg-gradient-to-br from-white via-t-pl  to-t-pm !shadow-2xl  transition duration-500"
        onClick={() => {
          setSendAllType("canvas");
          setSendAll(!sendAll);
        }}
      >
        <div className="flex items-center gap-3 ">
          <p className=" text-t-pd dark:text-t-pd">
            Ask AI to fill all canvas sections
          </p>
          <div className="flex items-center gap-1 ">
            <p className="text-lg font-bold text-slate-500 dark:text-slate-500">
              9
            </p>
            <FaCoins className="scale-90" />
          </div>
        </div>
      </button>
      <div className="flex flex-col justify-start gap-0">
        <div className="flex items-center gap-2">
          <p className="pt-1 text-lg font-bold text-left text-t-pd">
            {aiCredits}
          </p>
          <FaCoins className="scale-125 text-t-pd" />
        </div>

        <Link href={"/buy-credits"}>
          <button className="flex transition cursor-pointer md:active:scale-95 fade-effect w-fit">
            <p className=" text-t-pd md:hover:text-t-bd dark:text-t-pd !mb-0 underline text-xs">
              Get More Credits
            </p>
          </button>
        </Link>
      </div>
      {layout === "Canvas" ? (
        <section className="flex flex-col w-full border-2 rounded-lg border-slate-700 dark:border-white bg-white/80">
          <div className="flex min-h-[40em] md:flex-row sm:flex-col">
            <div className="border-2 border-slate-700 dark:border-white lg:w-1/5 sm:w-full min-h-[20em]">
              <CanvasUnit
                icon={<BsBuilding />}
                title="Key Partners"
                kind="Key Partners"
                type="canvas"
                description={
                  "Who are the people or businesses that will help you?"
                }
                qContext={contextSentence}
              />
            </div>
            <div className="border-2 border-slate-700 dark:border-white lg:w-1/5 sm:w-full min-h-[20em]">
              <div className="border-2 border-slate-700 dark:border-white lg:h-1/2 sm:h-full min-h-[20em]">
                <CanvasUnit
                  icon={<TbActivity />}
                  title="Key Activities"
                  kind="Key Activities"
                  type="canvas"
                  description={
                    "What are the essential activities of your business? What does your business do for people?"
                  }
                  qContext={contextSentence}
                />
              </div>
              <div className="border-2 border-slate-700 dark:border-white lg:h-1/2 sm:h-full min-h-[20em]">
                <CanvasUnit
                  icon={<BsBoxSeam />}
                  title="Key Resources"
                  kind="Key Resources"
                  type="canvas"
                  description={"What will you need to accomplish your goals?"}
                  qContext={contextSentence}
                />
              </div>
            </div>
            <div className="border-2 border-slate-700 dark:border-white lg:w-1/5 sm:w-full min-h-[20em]">
              <CanvasUnit
                icon={<TbDiamond />}
                title="Value Propositions"
                kind="Value Propositions"
                type="canvas"
                description={
                  "What makes you different? Why should someone buy your product or service?"
                }
                qContext={contextSentence}
              />
            </div>
            <div className="border-2 border-slate-700 dark:border-white lg:w-1/5 sm:w-full min-h-[20em]">
              <div className="border-2 border-slate-700 dark:border-white lg:h-1/2 sm:h-full min-h-[20em]">
                <CanvasUnit
                  icon={<BsPeopleFill />}
                  title="Customer Relationships"
                  kind="Customer Relationships"
                  type="canvas"
                  description={
                    "What relationships do you have with your customers? How will your customers interact with you?"
                  }
                  qContext={contextSentence}
                />
              </div>
              <div className="border-2 border-slate-700 dark:border-white lg:h-1/2 sm:h-full min-h-[20em]">
                <CanvasUnit
                  title="Customer Channels"
                  icon={<FaPeopleArrows />}
                  kind="Channels"
                  type="canvas"
                  description={
                    "Where will you find your customers? What channels will you use to reach them?"
                  }
                  qContext={contextSentence}
                />
              </div>
            </div>
            <div className="border-2 border-slate-700 dark:border-white lg:w-1/5 sm:w-full min-h-[20em]">
              <CanvasUnit
                icon={<FaChartPie />}
                title="Customer Segments"
                kind="Customer Segments"
                type="canvas"
                description={"What is your niche? Who are your customers?"}
                qContext={contextSentence}
              />
            </div>
          </div>

          <div className="flex min-h-[20em] md:flex-row sm:flex-col">
            <div className="border-2 border-slate-700 dark:border-white lg:w-1/2 sm:w-full min-h-[20em]">
              <CanvasUnit
                icon={<BsCash />}
                title="Cost Structure"
                kind="Cost Structure"
                type="canvas"
                description={
                  "How much will it cost to run your business? What unexpected expenses can you forsee? What are your top costs?"
                }
                qContext={contextSentence}
              />
            </div>
            <div className="border-2 border-slate-700 dark:border-white lg:w-1/2 sm:w-full min-h-[20em]">
              <CanvasUnit
                icon={<FaFunnelDollar />}
                title="Revenue Streams"
                kind="Revenue Streams"
                type="canvas"
                description={
                  "How will you generate revenue? What will you charge? Will you have a free tier?"
                }
                qContext={contextSentence}
              />
            </div>
          </div>
        </section>
      ) : (
        <HelpAccordion
          items={items}
          initialActiveItemIndex={0}
          closeOtherItemsOnClick
        />
      )}
    </div>
  );
}

export default BMC;
