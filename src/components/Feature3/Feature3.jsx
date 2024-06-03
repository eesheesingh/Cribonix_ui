import React from "react";
import { check, feature3img } from "../../assets";

const Feature3 = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <button className="px-12 py-4 bg-[#00ACFF1A] text-[#00ACFF] rounded-full mx-auto font-bold my-8">
        Why Us?
      </button>
      <h1 className="text-2xl md:text-4xl text-center font-bold md:my-8">
        Powerful features to boost <br /> your productivity
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-16 gap-4">
        <div className="flex-1 md:p-0 px-8 pb-8 pt-3 text-left md:text-center">
          <h1 className="md:text-4xl text-xl text-left font-semibold md:mb-8 mb-3">
          Get Started
          </h1>
          <p className="text-[#5F6D7E] md:mb-8 mb-3 md:text-base text-sm text-left">
          Whether you're an influencer looking to monetise your content and grow your brand or a business aiming to boost your marketing efforts through authentic influencer partnerships, ……. is your go-to platform.
          </p>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center md:text-base text-sm text-[#5F6D7E]">
              <img src={check} alt="Check" className="w-5 h-5 mr-2" />
              Register: Sign up as an influencer or brand and complete your profile.
            </li>
            <li className="flex text-left items-start md:text-base text-sm text-[#5F6D7E]">
              <img src={check} alt="Check" className="w-5 h-5 mr-2 mt-1" />
              Discover: Influencers get discovered by brands and brands can search for influencers using our advanced filters.

            </li>
            <li className="flex items-center md:text-base text-sm text-[#5F6D7E]">
              <img src={check} alt="Check" className="w-5 h-5 mr-2" />
              Collaborate: Connect directly, negotiate terms and collaborate on campaigns.

            </li>
            <li className="flex items-center md:text-base text-sm text-[#5F6D7E]">
              <img src={check} alt="Check" className="w-5 h-5 mr-2" />
              Track: Use our analytics tools to track campaign performance and gain insights.
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <img src={feature3img} alt="Feature" />
        </div>
      </div>
    </div>
  );
};

export default Feature3;
