import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { FaCoins } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useRecoilState } from "recoil";
import { sendAllState, sendAllTypeState } from "../states";
import EditUnit from "./editUnit";
import { UserContext } from "../../firebase/context";
import HelpAccordion from "../Accordion";
import BMC from "./bmc";
import SWOT from "./swot";

function BusinessCanvas(props) {
  //   const [credits, setCredits] = React.useState(0);
  const [sendAll, setSendAll] = useRecoilState(sendAllState);
  const [sendAllType, setSendAllType] = useRecoilState(sendAllTypeState);
  const { aiCredits } = React.useContext(UserContext);
  const [editContext, setEditContext] = React.useState(false);

  const [layout, setLayout] = React.useState("Canvas");
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
          </div>
        </div>

        <Tabs
          className="md:w-[97%] md:h-[98%] "
          selectedTabClassName="!bg-clear-bl4 !w-[10em]  !border-t-bl !text-white !text-lg "
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
            <BMC
              layout={layout}
              setLayout={setLayout}
              contextSentence={contextSentence}
            />
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
              <SWOT contextSentence={contextSentence} />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}

export default BusinessCanvas;
