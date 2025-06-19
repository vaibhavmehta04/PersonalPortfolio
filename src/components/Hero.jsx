import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const scrollNameRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );

    gsap.to(scrollNameRef.current, {
      xPercent: -50,
      repeat: -1,
      ease: "linear",
      duration: 30,
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-black text-white overflow-hidden font-sans"
    >
      {/* Scrolling Name in Background */}
      <div className="absolute top-[30%] left-0 w-full text-[7rem] sm:text-[11rem] font-extrabold tracking-tight uppercase opacity-5 whitespace-nowrap text-white pointer-events-none z-0">
        <div ref={scrollNameRef} className="inline-block w-full">
          Vaibhav Mehta &nbsp; Vaibhav Mehta &nbsp; Vaibhav Mehta &nbsp; Vaibhav Mehta
        </div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 py-16">
        {/* Navbar */}
        <div className="flex justify-between items-center text-sm text-gray-400 uppercase tracking-wide pb-8">
          <div className="flex items-center gap-4">
  <div className="text-white font-bold text-base">VAIBHAV MEHTA</div>
  <a
    href="/vaibhav_CV5.pdf"
    download
    className="bg-primaryPurple text-white px-3 py-1 rounded-md text-xs font-semibold hover:bg-opacity-80 transition"
  >
    Resume
  </a>
</div>

          <div className="space-x-6 hidden sm:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          {/* Left: Image */}
          {/* Left: Circular Image */}
<div className="flex justify-center md:justify-start">
<img
  src="/me.jpg"
  alt="Vaibhav Mehta"
  className="w-[280px] h-[280px] object-cover object-[center_-90px] rounded-full shadow-lg border-4 border-primaryPurple"
/>

</div>

          {/* Right: Headings */}
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-right uppercase leading-[1.1]">
              Crafting <span className="text-primaryPurple">Digital -</span>
            </h1>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase text-left">
              Narratives
            </h1>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase text-left text-primaryGreen">
              With Artistic
            </h1>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-right uppercase text-primaryGreen">
              Precision <span className="text-white">//</span>
            </h1>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-16">
          {/* Experience */}
          <div className="bg-[#1c1c1c] p-8 rounded-2xl shadow-inner max-w-md">
            <div className="text-5xl sm:text-6xl font-black text-white tracking-tight">
              1 <span className="text-primaryPurple">YEAR</span>
              <span className="text-primaryGreen text-4xl align-top pl-1">+</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base pt-4 leading-relaxed">
              I'm a full-stack web developer passionate about building visually striking, fast, and interactive digital experiences. I specialize in React, GSAP, and Three.js on the frontend, backed by solid skills in Node.js, Express, and MongoDB.
            </p>
          </div>

          {/* Testimonial */}
          <div className="bg-[#121212] p-8 rounded-2xl shadow-inner self-end md:ml-auto">
            <div className="text-primaryPurple text-2xl mb-3">★★★★★</div>
            <p className="text-white text-lg sm:text-xl font-medium leading-snug">
              Vaibhav’s ability to merge beautiful interfaces with solid backend architecture is rare. From concept to deployment, he handled everything with skill, speed, and passion.
            </p>
            <p className="mt-4 text-gray-400 text-sm">– clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
