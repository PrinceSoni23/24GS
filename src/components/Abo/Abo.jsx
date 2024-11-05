"use client";
import React from "react";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <div className="w-full h-auto flex flex-col lg:flex-row items-center justify-center gap-x-9 px-4 md:px-8">
      {/* Video Section */}
      <video
        loop
        autoPlay
        muted
        src="https://cdn.cuberto.com/cb/home/summary/1.mp4?3"
        className="block w-full md:w-2/3 lg:w-1/3 mb-6 lg:mb-0 mt-24"
      ></video>

      {/* Text and Button Section */}
      <div className="space-y-6 md:space-y-9 text-lg md:text-xl lg:text-2xl font-normal text-center lg:text-left mt-4 lg:mt-0">
        <p className="leading-relaxed mt-10 ">
          24 Global Solution is an IT Solutions{" "}
          <br className="hidden md:block" />
          agency focused on branding, UI/UX <br className="hidden md:block" />
          design, repair, and customer support <br className="hidden md:block" />
          to help you boost your business.
        </p>

        <motion.div
          initial="initial"
          whileHover="hovered"
          transition={{ duration: 0.3 }}
          className="relative flex flex-col whitespace-nowrap rounded-full text-lg md:text-xl lg:text-2xl text-center border border-black overflow-hidden hover:cursor-pointer mx-auto lg:mx-0"
          style={{ width: "fit-content" }}
        >
          <motion.div
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%", opacity: 0 },
            }}
            transition={{ duration: 0.3 }}
            className="relative rounded-full py-4 md:py-6 lg:py-9 px-6 bg-white text-stone-900 border-none"
          >
            24 Global Solution
          </motion.div>
          <motion.div
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{ duration: 0.3, type: "tween", ease: "easeIn" }}
            className="absolute inset-0 rounded-full py-4 md:py-6 lg:py-9 px-6 bg-stone-950 text-white border-none"
          >
            24 Global Solution
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Service;
