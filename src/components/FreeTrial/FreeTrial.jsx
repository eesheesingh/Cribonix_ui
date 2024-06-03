import React from "react";
import { dashboardImg, homeImg } from "../../assets";

const FreeTrial = () => {
  return (
    <div className="w-full flex flex-col md:flex-row rounded-3xl freeTrial-bg">
      <div className="flex-1 flex flex-col items-center px-6 md:px-8 py-8 md:py-28">
        <div className="flex flex-col md:gap-8 gap-4 my-auto text-white">
          <h1 className="text-3xl md:text-5xl font-bold">
          Kickstart Your Influencer Journey Today !
                    </h1>
          <p className="text-base md:text-xl">
          Submit your email now to unlock a world of opportunities and connect with top brands 
          </p>
          <div className="flex md:flex-row flex-col items-center gap-4 md:gap-8">
            <input
              className="rounded-full px-6 py-3 bg-[#ffffff47] text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white focus:border-transparent w-full md:w-1/2"
              type="text"
              placeholder="Your email here..."
            />
            <button className="px-8 py-4 bg-[#fff] text-[#00ACFF] rounded-full mr-auto font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 md:flex hidden justify-center items-center mb-8 md:mb-0">
        <img className="w-full max-w-[530px]" src={dashboardImg} alt="" />
      </div>
    </div>
  );
};

export default FreeTrial;
