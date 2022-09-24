import React from "react";
import CanvasUnit from "./canvasUnit";
import TextareaAutosize from "react-textarea-autosize";
import HelpAccordion from "./Accordion";
import {
  FaChartPie,
  FaCoins,
  FaEdit,
  FaFunnelDollar,
  FaPeopleArrows,
} from "react-icons/fa";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useRecoilState } from "recoil";
import { sendAllState, sendAllTypeState } from "./states";
import { BiLayout } from "react-icons/bi";
import EditUnit from "./editUnit";
import { UserContext } from "../firebase/context";
import { BsBoxSeam, BsBuilding, BsCash, BsPeopleFill } from "react-icons/bs";
import { TbActivity, TbDiamond } from "react-icons/tb";

function BusinessCanvas(props) {
  //   const [credits, setCredits] = React.useState(0);
  const [sendAll, setSendAll] = useRecoilState(sendAllState);
  const [sendAllType, setSendAllType] = useRecoilState(sendAllTypeState);
  const { aiCredits } = React.useContext(UserContext);

  const [layout, setLayout] = React.useState("Edit");
  const [context1, setContext1] = React.useState("");
  const [context2, setContext2] = React.useState("");
  const [context3, setContext3] = React.useState("");
  const [context4, setContext4] = React.useState("");
  const [context, setContext] = React.useState(
    "I run a business that helps entrepreneurs come up with new business ideas. It is a web application that uses a set of tools to create innovative new business ideas for people."
  );

  let contextSentence =
    "I run a " +
    context4 +
    " business that helps " +
    context1 +
    ", it is " +
    context2 +
    ". The key benefits are " +
    context3 +
    ".";
  const [editContext, setEditContext] = React.useState(false);
  const identity = [
    {
      title: "Name",
      content: (
        <>
          <EditUnit
            kind="Names"
            type="identity"
            description={
              "What is a creative, unique brand name for my business?"
            }
            qContext={contextSentence}
          />
        </>
      ),
    },
    {
      title: "Slogan",
      content: (
        <>
          <EditUnit
            kind="Slogan"
            type="identity"
            description={"What catchy, memorable slogan will my business have?"}
            qContext={contextSentence}
          />
        </>
      ),
    },
    {
      title: "Vision",
      content: (
        <>
          <EditUnit
            kind="Vision"
            type="identity"
            description={"What is the vision for the future of my business?"}
            qContext={contextSentence}
          />
        </>
      ),
    },
    {
      title: "Elevator Pitch",
      content: (
        <>
          <EditUnit
            kind="Elevator"
            type="identity"
            description={"How do I succinctly describe my business to others?"}
            qContext={contextSentence}
          />
        </>
      ),
    },
  ];

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

  const swot = [
    {
      title: "Strengths",
      content: (
        <EditUnit
          kind="Strengths"
          type="swot"
          description={"What are the strengths of my business?"}
          qContext={contextSentence}
        />
      ),
    },
    {
      title: "Weaknesses",
      content: (
        <EditUnit
          kind="Weaknesses"
          type="swot"
          description={"What are the weaknesses of my business?"}
          qContext={contextSentence}
        />
      ),
    },
    {
      title: "Opportunities",
      content: (
        <EditUnit
          kind="Opportunities"
          type="swot"
          description={"What are the opportunities for my business?"}
          qContext={contextSentence}
        />
      ),
    },
    {
      title: "Threats",
      content: (
        <EditUnit
          kind="Threats"
          type="swot"
          description={"What are the macro threats to my business?"}
          qContext={contextSentence}
        />
      ),
    },
  ];
  return (
    <>
      <div className=" w-full min-w-[25em] flex flex-col items-center  ">
        <h4 className="text-xl text-t-bd dark:text-blues-100 fre">
          Canvas Builder
        </h4>

        <div className="relative flex flex-col items-center justify-center w-full">
          {/* <p className="my-4 transition whitespace-wrap hover:underline ">
            {contextSentence}
          </p> */}

          <div className="relative flex flex-col items-center w-3/4 p-2 pt-5 mb-2 shadow-md bg-clear-bl1 rounded-xl">
            <p className="absolute font-bold left-1 top-1">Context for AI</p>
            <div className="flex flex-wrap justify-center w-full gap-2">
              <div className="flex flex-col items-center min-w-[9em] w-fit">
                <p>Industry</p>

                <TextareaAutosize
                  className="w-full  min-h-[2em] h-auto my-1 textarea-tw"
                  value={context4}
                  onChange={(e) => setContext4(e.target.value)}
                  placeholder="Sales"
                />
              </div>

              <div className="flex flex-col items-center">
                <p>Niche/target customers</p>

                <TextareaAutosize
                  className="w-full min-w-[9em] h-auto my-1 textarea-tw"
                  value={context1}
                  onChange={(e) => setContext1(e.target.value)}
                  placeholder="Salespeople and ..."
                />
              </div>

              <div className="flex flex-col items-center">
                <p>Product/service description</p>

                <TextareaAutosize
                  className="w-full min-w-[9em] h-auto my-1 textarea-tw"
                  value={context2}
                  onChange={(e) => setContext2(e.target.value)}
                  placeholder="An app that ..."
                />
              </div>
              <div className="flex flex-col items-center">
                <p>Key benefits</p>

                <TextareaAutosize
                  className="w-full min-w-[9em] h-auto my-1 textarea-tw"
                  value={context3}
                  onChange={(e) => setContext3(e.target.value)}
                  placeholder="gets more leads, ... "
                />
              </div>
            </div>

            {/* <TextareaAutosize
              className="w-full min-w-[90%] h-auto my-1 textarea-tw"
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder="..."
            />
            <button
              className=" px-2 nun text-base py-1 card__btn_next  flex items-center justify-center md:hover:scale-105 md:transition-transform md:active:scale-95 fade-effect cursor-pointer !shadow-clear-pd3 md:hover:shadow-xl  drop-shadow-xl !bg-gradient-to-br from-white via-t-pl  to-t-pm !shadow-2xl gap-2"
              onClick={() => {
                setEditContext(!editContext);
              }}
            >
              <FaCheck />
              Done
            </button> */}
          </div>

          {/* // <div */}
          {/* //   className="relative w-3/4 h-auto p-1 my-1 cursor-pointer ring-2 rounded-xl"
            //   onClick={() => setEditContext(true)}
            // >
            //   <p className="font-bold">Context:</p>
            //   <p className="my-4 transition whitespace-wrap hover:underline ">
            //     {contextSentence}
            //   </p>
            //   <button
            //     className="absolute top-0 right-0 px-2 nun text-xs py-[1px] card__btn_next  flex items-center justify-center md:hover:scale-105 md:transition-transform md:active:scale-95 fade-effect cursor-pointer !shadow-clear-pd3 md:hover:shadow-xl m-1 drop-shadow-xl !bg-gradient-to-br from-white via-t-pl  to-t-pm !shadow-2xl gap-2 "
            //     onClick={() => {
            //       setEditContext(!editContext);
            //     }}
            //   >
            //     <FaEdit className="text-sm" />
            //     <p className="text-sm font-bold">Edit</p>
            //   </button>
            // </div> */}
        </div>

        <Tabs
          className="md:w-[97%] md:h-[98%] "
          selectedTabClassName="!bg-clear-bl4 !w-[10em]  !border-t-bl !text-white !text-lg "
          //   disabledTabClassName=" !hidden"
          forceRenderTabPanel={true}
        >
          <TabList className="flex gap-1 !mb-0 ml-2">
            <Tab className="bg-clear-pl3 !w-[10em] rounded-t-lg px-3 py-1 text-t-pd border-4 border-b-0 border-clear-pd2 dark:text-pinks-50 text-base transition duration-500 cursor-pointer">
              <h2 className="font-bold nun !m-0">Canvas</h2>
            </Tab>
            <Tab className="bg-clear-pl3 !w-[10em] rounded-t-lg px-3 py-1 text-t-pd border-4 border-b-0 border-clear-pd2 dark:text-pinks-50 text-base transition duration-500 cursor-pointer">
              <h2 className="font-bold nun !m-0">Identity</h2>
            </Tab>
            <Tab className="bg-clear-pl3 !w-[10em] rounded-t-lg px-3 py-1 text-t-pd border-4 border-b-0 border-clear-pd2 dark:text-pinks-50 text-base transition duration-500 cursor-pointer">
              <h2 className="font-bold nun !m-0">SWOT</h2>
            </Tab>
          </TabList>

          <TabPanel selectedClassName=" !block" className="hidden ">
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
                          description={
                            "What will you need to accomplish your goals?"
                          }
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
                        description={
                          "What is your niche? Who are your customers?"
                        }
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
          </TabPanel>
          <TabPanel selectedClassName=" !block" className="hidden ">
            <div className="flex flex-col items-center justify-center w-full h-full gap-0 rounded-tl-none glass-box fade-effect-quick">
              <button
                className=" px-2 nun text-base py-0 card__btn_next  flex items-center justify-center md:hover:scale-105  md:active:scale-95 fade-effect cursor-pointer !shadow-clear-pd3 md:hover:shadow-xl m-1 drop-shadow-xl !bg-gradient-to-br from-white via-t-pl  to-t-pm !shadow-2xl  transition duration-500"
                onClick={() => {
                  setSendAllType("identity");
                  setSendAll(!sendAll);
                }}
              >
                <div className="flex items-center gap-3 ">
                  <p className=" text-t-pd dark:text-t-pd">
                    Ask AI to fill all identity sections
                  </p>
                  <div className="flex items-center gap-1 ">
                    <p className="text-lg font-bold text-slate-500 dark:text-slate-500">
                      4
                    </p>
                    <FaCoins className="scale-90" />
                  </div>
                </div>
              </button>
              <HelpAccordion
                items={identity}
                initialActiveItemIndex={0}
                closeOtherItemsOnClick
              />
            </div>
          </TabPanel>
          <TabPanel selectedClassName=" !block" className="hidden ">
            <div className="flex flex-col items-center justify-center w-full h-full gap-0 rounded-tl-none glass-box fade-effect-quick">
              <button
                className=" px-2 nun text-base py-0 card__btn_next  flex items-center justify-center md:hover:scale-105  md:active:scale-95 fade-effect cursor-pointer !shadow-clear-pd3 md:hover:shadow-xl m-1 drop-shadow-xl !bg-gradient-to-br from-white via-t-pl  to-t-pm !shadow-2xl  transition duration-500"
                onClick={() => {
                  setSendAllType("swot");
                  setSendAll(!sendAll);
                }}
              >
                <div className="flex items-center gap-3 ">
                  <p className=" text-t-pd dark:text-t-pd">
                    Ask AI to fill all SWOT sections
                  </p>
                  <div className="flex items-center gap-1 ">
                    <p className="text-lg font-bold text-slate-500 dark:text-slate-500">
                      4
                    </p>
                    <FaCoins className="scale-90" />
                  </div>
                </div>
              </button>
              <HelpAccordion
                items={swot}
                initialActiveItemIndex={0}
                closeOtherItemsOnClick
              />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}

export default BusinessCanvas;
