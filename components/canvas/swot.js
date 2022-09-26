import React from "react";
import EditUnit from "./editUnit";
import HelpAccordion from "../Accordion";
function SWOT({ contextSentence }) {
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
    <div className="w-full h-full">
      <div className="flex flex-col w-full h-full border-2 border-slate-700">
        <div className="flex w-full border-2 border-slate-700 h-1/2">
          <div className="w-1/2 border-2 border-slate-700">Strengths</div>
          <div className="w-1/2 border-2 border-slate-700">Weaknesses</div>
        </div>
        <div className="flex w-full border-2 border-slate-700 h-1/2">
          <div className="w-1/2 border-2 border-slate-700">Opportunities</div>
          <div className="w-1/2 border-2 border-slate-700">Threats</div>
        </div>
      </div>
      <HelpAccordion
        items={swot}
        initialActiveItemIndex={0}
        closeOtherItemsOnClick
      />
    </div>
  );
}

export default SWOT;
