import React from "react";
import CanvasUnit from "./canvasUnit";

function Identity({ contextSentence }) {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col w-full h-full border-2 rounded-lg border-slate-700">
        <div className="flex w-full sm:flex-col md:flex-row border-x-2 border-slate-700 h-1/2 ">
          <div className="border-2 border-slate-700 dark:border-white lg:w-1/2 sm:w-full min-h-[20em] bg-violet-200 ">
            <CanvasUnit
              title="Business Name"
              kind="names"
              type="identity"
              description={
                "What is a creative, unique brand name for my business?"
              }
              qContext={contextSentence}
            />
          </div>
          <div className="border-2 border-slate-700 dark:border-white lg:w-1/2 sm:w-full min-h-[20em] bg-green-200">
            <CanvasUnit
              title="Slogan"
              kind="slogan"
              type="identity"
              description={
                "What catchy, memorable slogan will my business have?"
              }
              qContext={contextSentence}
            />
          </div>
        </div>
        <div className="flex w-full border-x-2 border-slate-700 h-1/2 sm:flex-col md:flex-row">
          <div className="border-2 border-slate-700 dark:border-white lg:w-1/2 sm:w-full min-h-[20em] bg-pink-200">
            <CanvasUnit
              title="Vision"
              kind="vision"
              type="identity"
              description={"What is the vision for the future of my business?"}
              qContext={contextSentence}
            />
          </div>
          <div className="border-2 border-slate-700 dark:border-white lg:w-1/2 sm:w-full min-h-[20em] bg-blue-200">
            <CanvasUnit
              title="Elevator Pitch"
              kind="pitch"
              type="identity"
              description={
                "How do I succinctly describe my business to others?"
              }
              qContext={contextSentence}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Identity;
