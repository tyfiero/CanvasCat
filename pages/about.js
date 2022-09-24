import React from "react";
import ImageSection from "../components/layout/ImageSection";
import { motion, useReducedMotion } from "framer-motion";
import DualSection from "../components/layout/DualSection";
import TextSection from "../components/layout/TextSection";

function About() {
  const prefersReducedMotion = useReducedMotion();
  const photoAnimate = {
    offscreen: { scale: prefersReducedMotion ? 1 : 0.6, opacity: 0 },
    onscreen: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 1.5 },
    },
  };
  const headingAnimate = {
    offscreen: { x: prefersReducedMotion ? 0 : -300, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 1.5 },
    },
  };
  const textAnimate = {
    offscreen: {
      x: prefersReducedMotion ? 0 : -300,
      opacity: 0,
      scale: prefersReducedMotion ? 1 : 0.2,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", bounce: 0.2, duration: 1.5, delay: 0.2 },
    },
  };
  const thirdAnimate = {
    offscreen: {
      x: prefersReducedMotion ? 0 : -300,
      opacity: 0,
      scale: prefersReducedMotion ? 1 : 0.2,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", bounce: 0.2, duration: 1.5, delay: 0.4 },
    },
  };
  return (
    <div className="page-container">
      <h2 className="text-left heading-lg fade-effect-quick">About</h2>
      <DualSection centerText>
        <TextSection>
          <motion.h2
            variants={headingAnimate}
            className={"font-bold heading-md "}
          >
            AI is kinda cool huh?
          </motion.h2>
          <motion.div variants={textAnimate} className="text-box">
            <p className="font-bold">
              This started off as a larger project called ideaisland, but that
              project never really panned out. I didn&apos;t want all that work
              to go to waste, so I put some of the fun bits here to be shared!
              <br />
              <br />
            </p>
          </motion.div>

          <motion.div
            variants={thirdAnimate}
            className="flex items-center content-center justify-center w-full gap-2 sm:mt-5 sm:scale-90"
          >
            Built with 💖 by Ty
          </motion.div>
        </TextSection>
        <motion.div
          className="md:w-1/3 sm:w-full h-[23em] md:mb-12"
          variants={photoAnimate}
        >
          <ImageSection src="/bmc-g.webp" alt="Image of bmc logo" />
        </motion.div>
      </DualSection>
    </div>
  );
}

export default About;
