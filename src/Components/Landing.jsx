import { motion } from "framer-motion";
import React from "react";

const Landing = () => {
  return (
    <div data-scroll data-scroll-speed="-0.6" className="mt-[12vw]">
      <div className="px-[3.5vw]">
        {["We create", "Eye Opening", "Presentations"].map((item, idx) => (
          <div key={idx} className="overflow-hidden flex items-center">
            {idx === 1 && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "8vw" }}
                transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                className="mt-[0.8vw] mr-[1vw] h-[5.3vw] rounded-md  bg-[url(https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg)] bg-cover bg-center"
              ></motion.div>
            )}
            <h1 className="text-[8.5vw] text-[#212121] font-[grotesk] leading-[7vw] uppercase">
              {item}
            </h1>
          </div>
        ))}
      </div>
      <div className="px-[3.5vw] border-t border-[#B2B2B2] mt-[8vw] py-3 flex items-center justify-between">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((elem, idx) => (
          <h3 key={idx} className="text-[1.1vw]">
            {elem}
          </h3>
        ))}
        <a href="#" className="flex items-center gap-2">
          <a
            className="text-[1vw] px-4 py-1 border uppercase border-black rounded-full"
            href="#"
          >
            Start the project
          </a>
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-[1vw] border border-black">
            ↟
          </div>
        </a>
      </div>
    </div>
  );
};

export default Landing;