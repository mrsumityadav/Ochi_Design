import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div data-scroll data-scroll-speed="-0.2" className="py-[7vw] rounded-t-2xl bg-[#004D43] mt-[20vw] relative z-[2]">
      <div className="border-y-2 border-[#4D837C] flex gap-20 whitespace-nowrap overflow-hidden">
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-105%" }} transition={{ ease: "linear", duration: 10, repeat: Infinity }} className="text-[27vw] inline font-[grotesk] mb-[3vw] text-white uppercase leading-[18vw]">
          We are Ochi
        </motion.h1>
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-105%" }} transition={{ ease: "linear", duration: 10, repeat: Infinity }} className="text-[27vw] inline font-[grotesk] mb-[3vw] text-white uppercase leading-[18vw]">
          We are Ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
