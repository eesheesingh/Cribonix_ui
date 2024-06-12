import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { article1, article2, article3, user1, user2, user3 } from "../../assets";
import { blogs } from "../constants/data";

const Suggestion = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const truncateText = (text, length) => {
    if (!text) return ''; // Add error handling
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  const handleBlogClick = (id) => {
    scrollToTop();
    setTimeout(() => {
      navigate(`/blog/${id}`);
    }, 300); // Adding a delay to ensure smooth scrolling before navigating
  };

  return (
    <div className="w-full flex flex-col items-center">
      <motion.button
        className="px-12 py-4 bg-[#00ACFF1A] text-[#00ACFF] rounded-full mx-auto font-bold mt-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Blog
      </motion.button>
      <motion.h1
        className="text-3xl md:text-4xl text-center font-bold md:mx-96 md:my-8 my-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        Most popular articles
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 md:gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        {blogs.map((blog, index) => (
          <motion.div 
            key={index} 
            className="bg-white rounded-3xl p-4 hover:bg-[#f7f7f7] md:shadow-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg" 
            onClick={() => handleBlogClick(blog.id)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
          >
            <img
              className="mb-4 md:h-60 h-40 w-full rounded-md"
              src={blog.blogImg}
              alt={`Blog ${index + 1}`}
            />
            <div className="flex flex-col md:gap-4 gap-2">
              <h1 className="font-bold text-base md:text-xl">
                {truncateText(blog.title, 50)}
              </h1>
              <p
                className="text-[#5F6D7E] font-semibold text-xs md:text-base overflow-hidden"
                style={{ height: '8rem' }}
              >
                {truncateText(blog.content1 || blog.content, 200)} {/* Ensure the correct content property is used */}
              </p>
            </div>
            <div className="flex justify-between md:mt-8 mt-4 items-center">
              <div className="flex items-center">
                <img
                  className="md:w-10 w-8 md:h-10 h-8 mr-2"
                  src={index === 0 ? user1 : index === 1 ? user2 : user3}
                  alt=""
                />
                <div className="flex flex-col md:text-base text-xs">
                  <p>{index === 0 ? "Andrew Miller" : index === 1 ? "David Munsan" : "Andrew Meller"}</p>
                  <p className="text-[#5F6D7E]">{index === 0 ? "CEO" : index === 1 ? "UX" : "UI"}</p>
                </div>
              </div>
              <p className="text-[#5F6D7E] md:text-base text-xs">25 Apr</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Suggestion;
