"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[rgba(245,179,45,0.54)] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#f6b32d] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">Why Fruition Innovix</h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="max-w-[920px] text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        E-commerce, digital marketing, and website development expertise for
        brands that want measurable momentum.
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="max-w-[820px] text-[18px] leading-8 text-gray-300 mb-10 mt-[10px] text-center"
      >
        We support startups, SMEs, and enterprises with online business
        strategy, marketplace operations, campaigns, and creative production.
      </motion.div>
    </div>
  );
};
