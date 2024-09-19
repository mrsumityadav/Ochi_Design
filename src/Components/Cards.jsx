import React from "react";

function Cards() {
  return (
    <div className="w-full my-[5vw]">
      <div className="cards flex px-[4vw] gap-[1vw] justify-between">
        <div className="w-1/2 bg-[#004D43] h-[25vw] rounded-[0.5vw] flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            className="w-[10vw]"
            alt=""
          />
        </div>
        <div className="w-1/2 flex items-center justify-between gap-[0.5vw]">
          <div className="w-1/2 bg-[#212121] h-[25vw] rounded-[0.5vw] flex items-center justify-center">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              className="w-[8vw]"
            />
          </div>
          <div className="w-1/2 bg-[#212121] h-[25vw] rounded-[0.5vw] flex items-center justify-center">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              className="w-[7vw]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
