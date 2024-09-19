import React from "react";

function Feature() {
  var featureData = [
    {
      title: "Cardboard Spaceship",
      img: "https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png",
      button: ["branded template", "sales deck", "social media templates"],
    },
    {
      title: "AH2 & Matt Horn",
      img: "https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png",
      button: ["Pitch desk"],
    },
    {
      title: "FYDE",
      img: "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png",
      button: ["audit copywriting", "sales deck", "slides design"],
    },
    {
      title: "Vise",
      img: "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg",
      button: ["Agency", "Company Presentation"],
    },
    {
      title: "Trawa",
      img: "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg",
      button: ["Brand Identity", "Design Research", "Investor Deck"],
    },
    {
      title: "Premium Blend",
      img: "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png",
      button: ["Branded Template"],
    },
  ];

  return (
    <div className="py-[5vw] z-[3] relative bg-white">
      <h1 className="text-[5vw] px-[4vw]">Featured projects</h1>
      <div className="line border-b border-[#B2B2B2] my-[2vw]"></div>

      <div className="features flex px-[4vw] gap-[1vw] flex-wrap items-center justify-between">
        {featureData.map((item, idx) => (
          <div className="feature cursor-pointer flex flex-col gap-[1vw] w-[49.4%] relative mt-[1vw]">
            <h1
              className={`absolute font-[grotesk] hidden
                ${
                  idx % 2 === 1 ? "left-0" : "left-full"
                } uppercase text-[8vw] pointer-events-none 
                text-[#CDEA68] top-1/2 z-[9] whitespace-nowrap -translate-x-1/2 -translate-y-1/2`}
            >
              {item.title}
            </h1>
            <h1 className="uppercase heading flex items-center gap-[1vw]">
              <span className="inline-block w-3 h-3 rounded-full bg-[#212121]"></span>
              {item.title}
            </h1>
            <div className="group w-full">
              <div className="w-full h-full group-hover:scale-[0.98] duration-300 overflow-hidden rounded-md">
                <img
                  className="group-hover:scale-[1.1] duration-300 w-full h-full object-cover"
                  src={item.img}
                  alt=""
                />
              </div>
            </div>

            <div className="flex gap-[1vw]">
              {item.button.map((dets) => (
                <button className="w-fit text-[0.9vw] px-[1vw] py-[0.5vw] rounded-full border border-[#212121] uppercase">
                  {dets}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        className="uppercase my-[5vw] bg-black text-white text-[0.9vw] px-[1.5vw] py-[0.8vw] w-fit 
      rounded-full border border-[#212121] mx-auto"
      >
        View All case studies
      </div>
    </div>
  );
}

export default Feature;
