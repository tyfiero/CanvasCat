import React from "react";
import EditUnit from "./editUnit";
import HelpAccordion from "../Accordion";
import CanvasUnit from "./canvasUnit";
function SWOT({ contextSentence }) {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col w-full h-full border-2 rounded-lg border-slate-700">
        <div className="flex w-full border-x-2 border-slate-700 h-1/2 sm:flex-col md:flex-row">
          <div className="border-2 border-slate-700 dark:border-white lg:w-1/2 sm:w-full min-h-[20em] bg-teal-200 ">
            <CanvasUnit
              title={"Strengths"}
              kind="strengths"
              type="swot"
              description={"What are the strengths of my business?"}
              qContext={contextSentence}
            />
          </div>
          <div className="border-2 border-slate-700 dark:border-white lg:w-1/2 sm:w-full min-h-[20em] bg-rose-200">
            <CanvasUnit
              title="Weaknesses"
              kind="weaknesses"
              type="swot"
              description={"What are the weaknesses of my business?"}
              qContext={contextSentence}
            />
          </div>
        </div>
        <div className="flex w-full border-x-2 border-slate-700 h-1/2 sm:flex-col md:flex-row">
          <div className="border-2 border-slate-700 dark:border-white lg:w-1/2 sm:w-full min-h-[20em] bg-sky-200">
            <CanvasUnit
              title="Opportunities"
              kind="opportunities"
              type="swot"
              description={"What are the opportunities for my business?"}
              qContext={contextSentence}
            />
          </div>
          <div className="border-2 border-slate-700 dark:border-white lg:w-1/2 sm:w-full min-h-[20em] bg-orange-200">
            <CanvasUnit
              title="Threats"
              kind="threats"
              type="swot"
              description={"What are the macro threats to my business?"}
              qContext={contextSentence}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SWOT;
