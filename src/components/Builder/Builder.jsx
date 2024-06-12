import React from "react";
import { boxImg, builderBg, dashboardImg, midSectionImg } from "../../assets";

const Builder = () => {
  return (
    <div className="flex flex-col md:flex-row md:w-screen gap-2 md:min-h-[100px]">
      <div className="flex flex-col bg-[#F1F1F1] rounded-3xl p-12 z-10 w-full md:w-1/2 grid place-items-center">
        <div className="flex items-center justify-center flex-col">
          <h1 className="font-bold text-2xl md:text-4xl mb-4">
            Get the Edge with Our Seamless Connection Features
          </h1>
          <p className="text-[#797979] mb-8 md:text-base text-sm text-left">
            Our powerful features are designed to create seamless connections between influencers and brands. With true transparency, you can share accurate performance metrics and with instant access, you can connect directly without any intermediaries.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <img className="md:w-20 w-12 h-9 md:h-auto" src={boxImg} alt="" />
              <div className="flex flex-col justify-evenly">
                <h1 className="text-base md:text-lg">True Transparency</h1>
                <p className="text-[#797979] text-xs md:text-base">
                  Share your performance data with 100% accuracy, ensuring trust in every collaboration.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <img className="md:w-20 w-12 h-9 md:h-auto" src={boxImg} alt="" />
              <div className="flex flex-col justify-evenly">
                <h1 className="text-base md:text-lg">Instant Access</h1>
                <p className="text-[#797979] text-xs md:text-base">
                  Connect directly with brands or influencers, fostering genuine and effective partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden mt-4 flex flex-col relative w-[96vw] ml-[-3rem]">
          <img className="z-20 w-[95%] mx-auto" src={dashboardImg} alt="" />
          <img className="absolute top-[35%] z-10 mx-auto rounded-b-[20px]" src={builderBg} alt="" />
        </div>
      </div>

      <div className="w-full hidden md:block md:w-2/3 z-20">
        <img
          className="w-full max-w-[870px] ml-auto md:mt-0 mt-8 md:mb-0 mb-8"
          src={midSectionImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Builder;
