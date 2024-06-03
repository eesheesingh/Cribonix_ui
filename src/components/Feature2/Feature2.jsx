import React from 'react';
import { zestify, zestifyImg } from '../../assets';

const Feature2 = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-center">
        <button className="px-8 py-4 bg-[#00ACFF1A] text-[#00ACFF] rounded-full font-bold md:my-6">
          How it Works
        </button>
        <h1 className="text-2xl md:text-4xl font-bold my-6">
        Supercharge Your Success <br/>  with Seamless Influencer-Brand Connections 
        </h1>
      </div>
      <div className="w-full">
        <img className="w-full md:block hidden" src={zestifyImg} alt="" />
        <img className="md:hidden w-60 mx-auto" src={zestify} alt="" />
      </div>
    </div>
  );
};

export default Feature2;
