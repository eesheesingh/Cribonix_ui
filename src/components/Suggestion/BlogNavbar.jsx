import React, { useEffect, useState } from "react";
import { logo } from "../../assets";
import style from "../../style";
import { MdArrowLeft } from "react-icons/md";


const BlogNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex justify-between items-center p-3 fixed transition-all duration-300 ${
        scrolled
          ? "top-0 bg-white text-black shadow-xl"
          : `md:top-4 top-2 ${style.scrolledNavbar} text-white`
      } left-0 w-full z-50 md:px-[7.5rem]`}
    >
      <div className="font-bold">
        <button className="flex items-center" onClick={() => window.location.href = '/'}>
          <img className="w-28 md:w-36" src={logo} alt="Logo" />
        </button>
      </div>
      <button
        onClick={() => window.location.href = '/'}
        className={`md:block px-4 py-2 rounded-full ${
          scrolled ? "text-black hover:bg-[#000] hover:text-[#fff] transition-all duration-300" : "text-[#000] hover:bg-[#000] hover:text-[#fff] transition-all duration-300"
        }`}
      ><span className="flex flex-row items-center justify-center">
        <span className="text-2xl">
        <MdArrowLeft />
        </span>
        Go Back Home
        </span>
      </button>
    </nav>
  );
};

export default BlogNavbar;
