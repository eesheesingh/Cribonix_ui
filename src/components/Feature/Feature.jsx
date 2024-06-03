import React from "react";
import { icon1, icon2, icon3 } from "../../assets";

const Feature = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="text-center p-4">
        <button className="px-12 py-4 bg-[#00ACFF1A] text-[#00ACFF] rounded-full mx-auto font-bold">
          Features
        </button>
        <h1 className="text-2xl md:text-4xl text-center font-bold mx-4 my-4 md:my-8">
        Explore Our Dynamic Features and <br/>  supercharge Your success
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
        <div className="group flex flex-col hover:bg-[#F9F9F9] md:p-8 p-4 rounded-3xl hover:scale-105 transition duration-300 items-center">
          <img className="w-48 md:w-[22rem]" src={icon1} alt="" />
          <div className="flex flex-col text-center">
            <h1 className="font-bold text-xl md:text-[22px]">Accurate Metrics</h1>
            <p className="text-[#797979] text-xs md:text-xl md:my-5 my-2">Get precise and accurate data on influencer reach, impressions and engagement numbers. </p>
          </div>
        </div>
        <div className="group flex flex-col hover:bg-[#F9F9F9] md:p-8 p-4 rounded-3xl hover:scale-105 transition duration-300 items-center">
          <img className="w-48 md:w-80" src={icon2} alt="" />
          <div className="flex flex-col text-center">
            <h1 className="font-bold text-xl md:text-[22px]">Direct Connections</h1>
            <p className="text-[#797979] text-xs md:text-xl md:my-5 my-2">Easily connect with Influencers or brands for seamless collaboration without intermediaries.</p>
          </div>
        </div>
        <div className="group flex flex-col hover:bg-[#F9F9F9] md:p-8 p-4 rounded-3xl hover:scale-105 transition duration-300 items-center">
          <img className="w-48 md:w-96" src={icon3} alt="" />
          <div className="flex flex-col text-center">
            <h1 className="font-bold text-xl md:text-[22px]">Real-Time Insights</h1>
            <p className="text-[#797979] text-xs md:text-xl md:my-5 my-2">Monitor campaign performance live to optimise strategies and maximise impact.</p>
          </div>
        </div>
        <div className="group flex flex-col hover:bg-[#F9F9F9] md:p-8 p-4 rounded-3xl hover:scale-105 transition duration-300 items-center">
          <img className="w-48 md:w-96" src={icon3} alt="" />
          <div className="flex flex-col text-center">
            <h1 className="font-bold text-xl md:text-[22px]">Smart Matching</h1>
            <p className="text-[#797979] text-xs md:text-xl md:my-5 my-2">Use our advanced algorithms to find the ideal match based on your niche, audience and campaign goals.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
