import Image from "next/image";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

function ImageSection({ src, alt }) {
  const prefersReducedMotion = useReducedMotion();

  const imgAnimate = {
    offscreen: { scale: prefersReducedMotion ? 1 : 0.6, opacity: 0 },
    onscreen: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 1.5 },
    },
  };
  return (
    <motion.div
      variants={imgAnimate}
      className="md:w-full md:h-[425px] sm:w-4/5 sm:h-[311px] relative  rounded-xl  md:mt-11 "
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        sizes="100%"
        objectFit="cover"
        className="object-cover rounded-xl "
      />
    </motion.div>
  );
}

export default ImageSection;
