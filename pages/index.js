import { react, useState } from "react";

import ImageSection from "../components/layout/ImageSection";
import { motion, useReducedMotion } from "framer-motion";
import DualSection from "../components/layout/DualSection";
import TextSection from "../components/layout/TextSection";
import Link from "next/link";
import { FaArrowRight, FaSadTear } from "react-icons/fa";
export default function Home() {
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
      <DualSection centerText>
        <TextSection>
          <motion.h2
            variants={headingAnimate}
            className={"font-bold heading-md "}
          >
            AI Generated Business Model Canvas
          </motion.h2>
          <motion.div variants={textAnimate} className="text-box ">
            <p className="font-bold">
              Generate a business model canvas with just one click. Simply input
              what some context about your business, and GPT-3 will spit out a
              full BMC ready for your next pitch!
              <br />
              <br />
              First five generations are free, and each successive generation is
              dirt cheap!
            </p>
          </motion.div>

          <motion.div
            variants={thirdAnimate}
            className="flex flex-col items-center content-center justify-center w-full gap-2 sm:mt-5 sm:scale-90 md:mt-10"
          >
            <h3 className="w-full heading-sm">
              {" "}
              Tryna have some fun with an AI today??
            </h3>
            <div className="flex gap-3">
              <Link href={"/bummer"}>
                <a className="button">
                  Nah fam <FaSadTear />
                </a>
              </Link>
              <Link href={"/create"}>
                <a className="button2">
                  Ah Hell Yeah! <FaArrowRight />
                </a>
              </Link>
            </div>
          </motion.div>
        </TextSection>
        <motion.div
          className="md:w-1/3 sm:w-full h-[23em] md:mb-12"
          variants={photoAnimate}
        >
          <ImageSection src="/kitty.webp" alt="Image of CanvasCat" />
        </motion.div>
      </DualSection>
    </div>
  );
}
