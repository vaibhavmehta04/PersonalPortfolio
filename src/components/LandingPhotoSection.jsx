import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const LandingPhotoSection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    gsap.to(scrollRef.current, {
      xPercent: -50,
      repeat: -1,
      duration: 15,
      ease: "linear",
    });
  }, []);

  return (
    <section className="relative w-full h-screen bg-[#f1f1f1] overflow-hidden">
      {/* Navbar */}
      <nav className="w-full px-8 py-6 flex justify-between items-center text-black font-medium z-10 relative">
        <div className="text-xl font-bold">Vaibhav</div>
        <ul className="flex gap-6 text-sm uppercase tracking-wide">
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Projects</li>
          <li className="hover:underline cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Background scrolling name */}
      <div className="absolute top-1/2 left-0 w-full overflow-hidden whitespace-nowrap -translate-y-1/2 z-0 pointer-events-none">
        <div
          ref={scrollRef}
          className="text-[10rem] sm:text-[13rem] md:text-[15rem] font-bold uppercase opacity-10 text-black inline-block whitespace-nowrap"
        >
          Vaibhav Mehta &nbsp; Vaibhav Mehta &nbsp; Vaibhav Mehta &nbsp; Vaibhav Mehta
        </div>
      </div>

      {/* Foreground content */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
        {/* Only image touching bottom */}
        <div className="w-[240px] sm:w-[300px] md:w-[360px] h-[320px] sm:h-[400px] md:h-[480px] bg-white border-4 border-black shadow-lg overflow-hidden">
          <img
            src="/me.png"
            alt="Vaibhav Mehta"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingPhotoSection;
