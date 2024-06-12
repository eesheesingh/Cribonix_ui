import React from "react";
import { dashboardImg, video } from "../../assets";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="w-full">
      <div ref={ref} className="flex flex-col md:flex-row items-center">
        <motion.div
          className="flex-1 flex flex-col gap-4 p-4 md:p-0"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={heroVariants}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl md:text-black text-white font-bold mr-8">
            CollabCove: Empowering Influencers, Amplifying Brands
          </h1>
          <p className="md:text-[#797979] text-[#ffffffac] text-sm md:text-base mr-8">
            Boost your social media power. Easily partner with big brands. Maximise your earnings and impact today.
          </p>
          <div className="flex flex-row md:gap-4 gap-2">
            <button className="md:px-12 px-6 py-2 bg-[#00ACFF] text-white text-xs md:text-base rounded-full md:w-auto">
              Get Started
            </button>
            {/* <button className="md:px-6 px-4 py-2 bg-[#F4F4F4] rounded-full flex gap-2 text-xs md:text-base items-center justify-center md:w-auto">
              Watch Video <img className="w-6 md:w-12" src={video} alt="" />
            </button> */}
          </div>
        </motion.div>
        <motion.div
          className="flex-1 p-4 md:p-0"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={imageVariants}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img src={dashboardImg} alt="home" className="w-full" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
