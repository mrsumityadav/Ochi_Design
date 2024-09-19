import React, { useEffect, useState } from "react";

function Ready() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      var angel = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angel - 180);
    });
  });

  return (
    <div className="w-full bg-[#CDEA68] py-[8vw] relative">
      <div className="text-[14vw] leading-[11vw] text-center">
        <h1 className="font-[grotesk]">READY</h1>
        <h1 className="font-[grotesk]">TO START</h1>
        <h1 className="font-[grotesk]">THE PROJECT?</h1>
      </div>
      <div className="text-center">
        <div
          className="uppercase bg-[#212121] text-white text-[1vw] 
      px-[1.5vw] py-[1vw] w-fit rounded-full mx-auto mt-[2vw]"
        >
          Start The Project
        </div>
        <h5 className="my-[1vw]">OR</h5>
        <div
          className="uppercase text-[#212121] text-[1vw] 
      px-[1.5vw] py-[1vw] w-fit rounded-full border border-[#212121] mx-auto"
        >
          hello@ochi.design
        </div>
      </div>

      <div className="absolute top-1/2 w-fit flex gap-[2vw] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[13vw] h-[13vw] flex items-center justify-center bg-white rounded-full">
          <div className="w-2/3 h-2/3 bg-[#212121] rounded-full relative">
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
              className="line w-full absolute top-1/2 left-1/2"
            >
              <div className="dot w-[1.5vw] h-[1.5vw] bg-white rounded-full"></div>
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[1.5vw]">
              PLAY
            </h1>
          </div>
        </div>
        <div className="w-[13vw] h-[13vw] flex items-center justify-center bg-white rounded-full">
          <div className="w-2/3 h-2/3 bg-[#212121] rounded-full relative">
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
              className="line w-full absolute top-1/2 left-1/2"
            >
              <div className="dot w-[1.5vw] h-[1.5vw] bg-white rounded-full"></div>
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[1.5vw]">
              PLAY
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ready;
