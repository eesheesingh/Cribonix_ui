import React from 'react';
import { homeImg, logo } from '../../assets';

const Services = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="row-span-1 rounded-xl border-2 border-slate-400/10 p-8 bg-[#f7f7f7]">
        <img src={homeImg} alt="Placeholder" className="w-full h-80 object-cover rounded-t-xl" />
        <div className="mt-8 text-lg">
          <h2 className="text-2xl font-bold">
          Google & Youtube
          Ads
          </h2>
          <p className="mt-4">Boost visibility and engagement with our expertly crafted Google and YouTube ads. Elevate your online presence and drive impactful results.</p>
        </div>
      </div>
      <div className="row-span-1 sm:col-span-2 rounded-xl border-2 border-slate-400/10 p-8 bg-[#f7f7f7]">
        <img src={homeImg} alt="Placeholder" className="w-full h-80 object-cover rounded-t-xl" />
        <div className="mt-8 text-lg">
          <h2 className="text-2xl font-bold">Facebook and Instagram Ads</h2>
          <p className="mt-4">Elevate your brand with targeted Facebook and Instagram ads. Amplify reach, engagement, and conversions unlock the power of social media advertising.</p>
        </div>
      </div>
      <div className="row-span-1 sm:col-span-2 rounded-xl border-2 border-slate-400/10 p-8 bg-[#f7f7f7]">
        <img src={homeImg} alt="Placeholder" className="w-full h-80 object-cover rounded-t-xl" />
        <div className="mt-8 text-lg">
          <h2 className="text-2xl font-bold">Social Media
          Management</h2>
          <p className="mt-4">Elevate your brand's online presence with strategic planning, engaging content, and audience growth. Discover the power of effective social media management.</p>
        </div>
      </div>
      <div className="row-span-1 rounded-xl border-2 border-slate-400/10 p-8 bg-[#f7f7f7]">
        <img src={homeImg} alt="Placeholder" className="w-full h-80 object-cover rounded-t-xl" />
        <div className="mt-8 text-lg">
          <h2 className="text-2xl font-bold">Influencer Marketing</h2>
          <p className="mt-4">This is a brief description of the fourth service offered. It emphasizes the key benefits and outcomes.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
