import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { FaCoins, FaPrint } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useRecoilState } from "recoil";
import { sendAllState, sendAllTypeState, responsesState } from "../states";
import EditUnit from "./editUnit";
import { UserContext } from "../../firebase/context";
import HelpAccordion from "../Accordion";
import BMC from "./bmc";
import SWOT from "./swot";
import Identity from "./identity";
import html2canvas from "html2canvas";

var debounce = require("lodash.debounce");
var set = require("lodash.set");

function BusinessCanvas(props) {
  const [sendAll, setSendAll] = useRecoilState(sendAllState);
  const [responses, setResponses] = useRecoilState(responsesState);
  // console.log(responses);
  const [sendAllType, setSendAllType] = useRecoilState(sendAllTypeState);
  const { aiCredits } = React.useContext(UserContext);
  const [editContext, setEditContext] = React.useState(false);
  const printRef = React.useRef();

  const [context1, setContext1] = React.useState("");
  const [context2, setContext2] = React.useState("");
  const [context3, setContext3] = React.useState("");
  const [context4, setContext4] = React.useState("");
  const [context, setContext] = React.useState(
    "I run a business that helps entrepreneurs come up with new business ideas. It is a web application that uses a set of tools to create innovative new business ideas for people."
  );
  const saveLoading = React.useRef(false);

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
  // const handleDownloadImage = async () => {
  //   const element = printRef.current;
  //   const canvas = await html2canvas(element);

  //   const data = canvas.toDataURL("image/jpg");
  //   const link = document.createElement("a");

  //   if (typeof link.download === "string") {
  //     link.href = data;
  //     link.download = "image.jpg";

  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //     window.print();
  //   } else {
  //     window.print();
  //     window.open(data);
  //   }
  // };
  return (
    <>
      <div className="flex flex-col items-center w-full canvas-print ">
        <Tabs
          className="sm:w-[97%] md:h-[98%] "
          selectedTabClassName="!bg-clear-bl4 !w-[10em]  !border-t-bl !text-orange-700 !text-lg "
          forceRenderTabPanel={true}
        >
          <TabList className="flex gap-1 !mb-0 ml-2 grow-effect print-nav sm:scale-90 md:scale-100">
            <Tab className="bg-clear-pl3 !w-[10em] rounded-t-lg px-3 py-1 text-t-pd border-4 border-b-0 border-clear-pd2 dark:text-pinks-50 text-base transition duration-500 cursor-pointer">
              <h2 className="font-bold russo !m-0">1. Context</h2>
            </Tab>
            <Tab className="bg-clear-pl3 !w-[10em] rounded-t-lg px-3 py-1 text-t-pd border-4 border-b-0 border-clear-pd2 dark:text-pinks-50 text-base transition duration-500 cursor-pointer">
              <h2 className="font-bold russo !m-0">2. Canvas</h2>
            </Tab>
            <Tab className="bg-clear-pl3 !w-[10em] rounded-t-lg px-3 py-1 text-t-pd border-4 border-b-0 border-clear-pd2 dark:text-pinks-50 text-base transition duration-500 cursor-pointer">
              <h2 className="font-bold russo !m-0">2. Identity</h2>
            </Tab>
            <Tab className="bg-clear-pl3 !w-[10em] rounded-t-lg px-3 py-1 text-t-pd border-4 border-b-0 border-clear-pd2 dark:text-pinks-50 text-base transition duration-500 cursor-pointer">
              <h2 className="font-bold russo !m-0">4. SWOT</h2>
            </Tab>
          </TabList>
          <TabPanel selectedClassName=" grow-effect !block" className="hidden ">
            <div className="flex flex-col items-center justify-center w-full h-full gap-0 rounded-tl-none glass-box !bg-white/30 fade-effect-quick ">
              <div className="relative flex flex-col items-center justify-center w-full mb-20">
                <div className="relative flex flex-col items-center w-3/4 p-2 pt-5 my-5 rounded-xl">
                  <h2 className="heading-md">Context for AI</h2>
                </div>
                <div className="flex flex-col items-center justify-center gap-10 py-5 shadow-xl sm:px-5 lg:px-20 lg:w-1/2 sm:w-full rounded-xl bg-white/80">
                  <div className="flex items-center justify-between w-full sm:gap-1 lg:gap-10 lg:flex-row sm:flex-col">
                    <p className="text-left heading-sm">Industry</p>

                    <TextareaAutosize
                      className="w-full md:max-w-[25em] sm:max-w-full h-auto my-1 textarea-tw"
                      value={context4}
                      onChange={(e) => {
                        setContext4(e.target.value);
                      }}
                      onBlur={(e) => {
                        let obj = JSON.parse(JSON.stringify(responses));
                        obj.context.industry = e.target.value;
                        setResponses(obj);
                      }}
                      placeholder="Sales"
                    />
                  </div>

                  <div className="flex items-center justify-between w-full sm:gap-1 lg:gap-10 lg:flex-row sm:flex-col">
                    <p className="text-left heading-sm">
                      Niche/target customers
                    </p>

                    <TextareaAutosize
                      className="w-full md:max-w-[25em] sm:max-w-full  h-auto my-1 textarea-tw"
                      value={context1}
                      onChange={(e) => {
                        setContext1(e.target.value);
                      }}
                      onBlur={(e) => {
                        let obj = JSON.parse(JSON.stringify(responses));
                        obj.context.niche = e.target.value;
                        setResponses(obj);
                      }}
                      placeholder="Salespeople and ..."
                    />
                  </div>

                  <div className="flex items-center justify-between w-full sm:gap-1 lg:gap-10 lg:flex-row sm:flex-col">
                    {" "}
                    <p className="text-left heading-sm">
                      Product/service description
                    </p>
                    <TextareaAutosize
                      className="w-full md:max-w-[25em] sm:max-w-full   h-auto my-1 textarea-tw"
                      value={context2}
                      onChange={(e) => {
                        setContext2(e.target.value);
                      }}
                      onBlur={(e) => {
                        let obj = JSON.parse(JSON.stringify(responses));
                        obj.context.product = e.target.value;
                        setResponses(obj);
                      }}
                      placeholder="An app that ..."
                    />
                  </div>
                  <div className="flex items-center justify-between w-full sm:gap-1 lg:gap-10 lg:flex-row sm:flex-col">
                    {" "}
                    <p className="text-left heading-sm">Key benefits</p>
                    <TextareaAutosize
                      className="w-full md:max-w-[25em] sm:max-w-full  h-auto my-1 textarea-tw"
                      value={context3}
                      onChange={(e) => {
                        setContext3(e.target.value);
                      }}
                      onBlur={(e) => {
                        let obj = JSON.parse(JSON.stringify(responses));
                        obj.context.benefits = e.target.value;
                        setResponses(obj);
                      }}
                      placeholder="gets more leads, ... "
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel selectedClassName="  !block " className="hidden glass-box">
            <div className="flex items-center justify-between w-full my-2">
              <button
                className="button !py-0 print-nav"
                onClick={() => {
                  setSendAllType("canvas");
                  setSendAll(!sendAll);
                }}
              >
                <div className="flex items-center gap-3 ">
                  <p className="font-bold text-teal-800">Fill All Sections</p>
                  <div className="flex items-center gap-1 ">
                    <p className="text-lg font-bold text-teal-800 ">9</p>
                    <FaCoins className="scale-90 " />
                  </div>
                </div>
              </button>
              <h2 className="heading-sm !m-0 sm:hidden">
                Business Model Canvas
              </h2>
              <button
                className="button2 print-nav"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    // handleDownloadImage();
                    window.print();
                  }
                }}
              >
                <FaPrint />
              </button>
            </div>

            <div className="w-full h-full bg-white/80" ref={printRef}>
              <BMC print={print} contextSentence={contextSentence} />
            </div>
          </TabPanel>
          <TabPanel selectedClassName=" !block" className="hidden ">
            <div className="flex flex-col items-center justify-center w-full h-full gap-0 rounded-tl-none glass-box fade-effect-quick">
              <div className="flex items-start w-full">
                <button
                  className=" button !py-0 my-2"
                  onClick={() => {
                    setSendAllType("identity");
                    setSendAll(!sendAll);
                  }}
                >
                  <div className="flex items-center gap-3 ">
                    <p className="text-teal-800 ">Fill All Sections</p>
                    <div className="flex items-center gap-1 ">
                      <p className="text-lg font-bold text-teal-800">4</p>
                      <FaCoins className="scale-90" />
                    </div>
                  </div>
                </button>
              </div>
              <Identity contextSentence={contextSentence} />
            </div>
          </TabPanel>
          <TabPanel selectedClassName=" !block" className="hidden ">
            <div className="flex flex-col items-center justify-center w-full h-full gap-0 rounded-tl-none glass-box fade-effect-quick">
              <div className="flex items-start w-full">
                <button
                  className=" button !py-0 my-2"
                  onClick={() => {
                    setSendAllType("swot");
                    setSendAll(!sendAll);
                  }}
                >
                  <div className="flex items-center gap-3 ">
                    <p className="text-teal-800 ">Fill All Sections</p>
                    <div className="flex items-center gap-1 ">
                      <p className="text-lg font-bold text-teal-800">4</p>
                      <FaCoins className="scale-90" />
                    </div>
                  </div>
                </button>
              </div>
              <SWOT contextSentence={contextSentence} />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}

export default BusinessCanvas;
