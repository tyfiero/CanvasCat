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
              <h3 className="heading-md">
                This was made to help you build fully developed business
                concepts with ease.
              </h3>
              Creating a complete business concept is tough. There’s the high
              level branding; such as a catchy name, slogan, and company vision.
              But there is also the more technical biz dev stuff like deciding
              on marketing channels and determining cost structure.
              <p>
                These areas are incredibly important to describe in detail. The
                catch is, they require a knowledge of several different business
                areas. It takes time and effort to build that knowledge base,
                and this time and effort takes you away from doing what you want
                most; networking and building your actual business. Enter,
                Canvascat.
              </p>
              <p>
                Canvascat needs just four short descriptions (industry, target
                customers, product/service info and key benefits) to build your
                entire business model canvas, business identity and a full SWOT
                analysis to get you started up the right way. All with a click.
              </p>
              <p>
                Use Canvascat to:
                <ul>
                  <li>Give you an initial business concept</li>
                  <li>Refine and mature an existing concept</li>
                  <li>Perform a SWOT analysis </li>
                  <li>Create your elevator pitch </li>
                  <li>
                    Help you build a vision of the future of your business
                  </li>
                </ul>
                <p>
                  And so much more. Simply click the “Create” tab at the top of
                  the screen to get started, and build the purrrrfect business
                  for you😉
                </p>
              </p>
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
          <ImageSection src="/kitty-sm.webp" alt="Image of kitty" />
        </motion.div>
      </DualSection>
    </div>
  );
}

export default About;
