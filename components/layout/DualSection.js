import React from "react";
import { motion } from "framer-motion";
function DualSection({
  children,
  invert = false,
  cn = "",
  centerText = false,
}) {
  return (
    <motion.section
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.5 }}
      className={
        "flex justify-center sm:gap-5 md:gap-10  sm:flex-col  sm:items-center px-3 " +
        (invert ? "md:flex-row-reverse " : "md:flex-row ") +
        (centerText ? " md:items-center " : " md:items-start ") +
        cn
      }
    >
      {children}
    </motion.section>
  );
}

export default DualSection;
