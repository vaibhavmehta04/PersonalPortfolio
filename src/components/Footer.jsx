import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="relative bg-black text-white px-6 py-10 font-sans border-t border-gray-800">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold">Vaibhav Mehta</h3>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Right Side Icons */}
        <div className="flex gap-6 text-lg">
          <a
            href="mehtapiyu11@gmail.com"
            className="hover:text-primaryGreen transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/vaibhavmehta04"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primaryPurple transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/vaibhav-mehta-497900254/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-primaryGreen hover:bg-opacity-90 text-black p-3 rounded-full shadow-lg transition-all z-50"
          aria-label="Scroll to Top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
