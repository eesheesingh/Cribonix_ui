import React from "react";
import { icon1, icon2, icon3 } from "../../assets";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Feature = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const featureVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const imageClasses = "w-48 h-48 md:w-80 md:h-auto object-contain";

  return (
    <div className="w-full flex flex-col">
      <div className="text-center">
        <button className="px-12 py-4 bg-[#00ACFF1A] text-[#00ACFF] rounded-full mx-auto font-bold">
          Features
        </button>
        <h1 className="text-2xl md:text-4xl text-center font-bold mx-4 my-4 md:my-8 md:mb-2">
          Explore Our Dynamic Features and <br /> supercharge Your success
        </h1>
      </div>
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          className="group flex flex-col hover:bg-[#F9F9F9] md:p-8 p-4 rounded-3xl hover:scale-105 transition duration-300 items-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={featureVariants}
          transition={{ duration: 0.8 }}
        >
          <img className={imageClasses} src={icon1} alt="Accurate Metrics" />
          <div className="flex flex-col text-center">
            <h1 className="font-bold text-xl md:text-[22px]">Accurate Metrics</h1>
            <p className="text-[#797979] text-xs md:text-xl md:my-5 my-2">
              Get precise and accurate data on influencer reach, impressions and engagement numbers.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="group flex flex-col hover:bg-[#F9F9F9] md:p-8 p-4 rounded-3xl hover:scale-105 transition duration-300 items-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={featureVariants}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <img className={imageClasses} src={icon2} alt="Smart Matching" />
          <div className="flex flex-col text-center">
            <h1 className="font-bold text-xl md:text-[22px]">Smart Matching</h1>
            <p className="text-[#797979] text-xs md:text-xl md:my-5 my-2">
              Easily connect with Influencers or brands for seamless collaboration without intermediaries.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="group flex flex-col hover:bg-[#F9F9F9] md:p-8 p-4 rounded-3xl hover:scale-105 transition duration-300 items-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={featureVariants}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img className={imageClasses} src={icon3} alt="Real-Time Insights" />
          <div className="flex flex-col text-center">
            <h1 className="font-bold text-xl md:text-[22px]">Real-Time Insights</h1>
            <p className="text-[#797979] text-xs md:text-xl md:my-5 my-2">
              Monitor campaign performance live to optimise strategies and maximise impact.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Feature;
