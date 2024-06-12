import React, { useState } from "react";
import { logo } from "../../assets";
import { Link } from "react-router-dom";
import ContactForm from "../Contact/Contact";

const Footer = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleContactClick = () => {
    setIsContactFormOpen(true);
  };

  const handleCloseContactForm = () => {
    setIsContactFormOpen(false);
  };

  return (
    <div className="flex flex-col items-center md:w-screen w-full md:ml-[-7rem] bg-[#F8F9FB] md:py-12 py-6">
      <img className="w-36 mx-auto" src={logo} alt="" />
      <ul className="flex md:space-x-12 space-x-4 py-4">
        <li className="text-[#556987]">About</li>
        <li className="text-[#556987]">Features</li>
        <li className="text-[#556987]">Blog</li>
        <li className="text-[#556987] cursor-pointer" onClick={handleContactClick}>Help</li>
        <Link onClick={scrollToTop} to="/privacy-policy">
          <li className="text-[#556987]">Privacy Policy</li>
        </Link>
      </ul>
      <hr className="w-full md:my-8 my-4 bg-gray-700" />
      <p className="text-[#8896AB]">© 2021 Copartner. All rights reserved.</p>

      {isContactFormOpen && <ContactForm onClose={handleCloseContactForm} />}
    </div>
  );
};

export default Footer;
