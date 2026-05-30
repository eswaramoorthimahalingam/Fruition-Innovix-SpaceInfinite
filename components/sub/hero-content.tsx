"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  HeroGlobe,
} from "@/components/sub/hero-globe";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-between gap-10 px-6 sm:px-10 lg:px-20 mt-32 lg:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex-1 min-w-0 flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[rgba(245,179,45,0.54)] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#f6b32d] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Where Innovation Meets Strategy
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-[660px] w-auto h-auto"
        >
          <span>
            Fruition Innovix helps brands{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-sky-400">
              create, innovate, and optimize
            </span>{" "}
            online growth.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-300 my-5 max-w-[640px]"
        >
          A one-stop partner for e-commerce marketing, digital marketing,
          website design and development, graphics, videos, and product
          photography.
        </motion.p>

        <motion.a
          href="/services"
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Explore services
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full lg:w-[min(46vw,640px)] h-full flex flex-none justify-center items-center lg:justify-end"
      >
        <HeroGlobe />
      </motion.div>
    </motion.div>
  );
};
