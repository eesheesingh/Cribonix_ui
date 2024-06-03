import React, { useEffect, useState } from "react";
import { close, logo } from "../../assets";
import style from "../../style";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`flex justify-between items-center p-3 fixed transition-all duration-300 ${
        scrolled
          ? "top-0 bg-white text-black shadow-xl"
          : `md:top-4 top-2 ${style.scrolledNavbar} text-white`
      } left-0 w-full z-50 md:px-[7.5rem]`}
    >
      <div className="font-bold">
        <button className="flex items-center" onClick={() => scrollToSection("hero")}>
          <img className="w-36" src={logo} alt="" />
        </button>
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
          className={`focus:outline-none ${scrolled ? "text-black" : "text-white"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <ul className={`hidden md:flex space-x-24 px-20 py-4 rounded-full ${scrolled ? "text-black" : "text-white"}`}>
        <button onClick={() => scrollToSection("hero")}>Home</button>
        <button onClick={() => scrollToSection("feature")}>Feature</button>
        <button onClick={() => scrollToSection("builder")}>About</button>
        <button onClick={() => scrollToSection("blog")}>Blog</button>
      </ul>
      {isMobileMenuOpen && (
        <ul className="flex h-screen flex-col items-center fixed inset-0 bg-white text-black z-50 gap-8 pt-36 md:hidden">
          <li className="absolute top-5 right-5">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-black p-2 rounded-full"
              aria-label="Close menu"
            >
              <img className="w-10" src={close} alt="" />
            </button>
          </li>
          <button
            className="p-4 text-xl"
            onClick={() => {
              setIsMobileMenuOpen(false);
              scrollToSection("hero");
            }}
          >
            Home
          </button>
          <button
            className="p-4 text-xl"
            onClick={() => {
              setIsMobileMenuOpen(false);
              scrollToSection("feature");
            }}
          >
            Feature
          </button>
          <button
            className="p-4  text-xl"
            onClick={() => {
              setIsMobileMenuOpen(false);
              scrollToSection("builder");
            }}
          >
            About
          </button>
          <button
            className="p-4 text-xl"
            onClick={() => {
              setIsMobileMenuOpen(false);
              scrollToSection("blog");
            }}
          >
            Blog
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
