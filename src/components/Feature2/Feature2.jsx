import React from 'react';
import { motion } from 'framer-motion';
import { zestify, zestifyImg } from '../../assets';

const Feature2 = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <button className="px-8 py-4 bg-[#00ACFF1A] text-[#00ACFF] rounded-full font-bold md:my-6">
          How it Works
        </button>
        <h1 className="text-2xl md:text-4xl font-bold my-6">
          Supercharge Your Success <br/> with Seamless Influencer-Brand Connections 
        </h1>
      </motion.div>
      <motion.div 
        className="w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <img className="w-full md:block hidden" src={zestifyImg} alt="" />
        <img className="md:hidden w-60 mx-auto" src={zestify} alt="" />
      </motion.div>
    </div>
  );
};

export default Feature2;
