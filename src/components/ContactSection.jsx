import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="w-full bg-black text-white py-24 px-6 font-sans flex justify-center items-center">
      <div className="w-full max-w-[1200px] bg-white/5 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-xl p-12 flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Left Side Call to Action + Socials */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-4xl sm:text-5xl font-extrabold uppercase mb-6">
            Let's Connect
          </h2>
          <p className="text-gray-300 text-base leading-relaxed mb-6">
            Whether you have a project idea, an opportunity, or just want to say hi — feel free to get in touch.
          </p>
          <div className="flex flex-col gap-4 text-sm">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-primaryGreen text-xl" />
              <a
                href="mehtapiyu11@gmail.com"
                className="hover:text-primaryGreen transition duration-200"
              >
                mehtapiyu11@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaGithub className="text-primaryPurple text-xl" />
              <a
                href="https://github.com/vaibhavmehta04"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primaryPurple transition duration-200"
              >
                github.com/vaibhavmehta04
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaLinkedin className="text-blue-500 text-xl" />
              <a
                href="https://www.linkedin.com/in/vaibhav-mehta-497900254/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition duration-200"
              >
                linkedin.com/in/vaibhav-mehta
              </a>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <form className="md:w-1/2 w-full flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-black/30 border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primaryGreen"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-black/30 border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primaryGreen"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="bg-black/30 border border-gray-700 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primaryGreen"
          ></textarea>
          <button
            type="submit"
            className="bg-primaryGreen text-black font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;