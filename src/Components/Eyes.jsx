import React, { useEffect, useState } from "react";

const Eyes = () => {
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
    <div data-scroll data-scroll-speed="-0.5" className="w-full h-screen bg-white relative z-[2]">
      <div className="w-full h-full flex items-center justify-center relative bg-cover bg-center
      bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg)] ">
        <div className="absolute w-fit flex gap-[2vw]">
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
    </div>
  );
};

export default Eyes;
