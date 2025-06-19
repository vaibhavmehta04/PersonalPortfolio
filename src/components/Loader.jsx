import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const Loader = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to("#loader", {
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          onComplete: () => {
            setIsVisible(false);
            setTimeout(() => {
              onFinish();
            }, 300); // smooth buffer
          },
        });
      },
    });

    tl.fromTo(
      "#loader-name",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
    )
      .fromTo(
        "#loader-tagline",
        { opacity: 0 },
        { opacity: 1, duration: 0.8, delay: 0.2 },
        "-=0.6"
      )
      .to("#loader-name", {
        opacity: 0,
        duration: 0.4,
        delay: 0.4,
      })
      .to("#loader-tagline", {
        opacity: 0,
        duration: 0.4,
        delay: 0.1,
      });
  }, [onFinish]);

  if (!isVisible) return null;

  return (
    <div
      id="loader"
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
    >
      <div className="bg-white/10 border border-gray-700 backdrop-blur-lg rounded-xl p-10 flex flex-col items-center gap-6 text-center">
        <div className="w-12 h-12 border-4 border-primaryGreen border-t-transparent rounded-full animate-spin"></div>

        <h1
          id="loader-name"
          className="text-white text-3xl sm:text-5xl font-extrabold tracking-wider"
        >
          VAIBHAV MEHTA
        </h1>

        <p
          id="loader-tagline"
          className="text-gray-400 text-sm sm:text-base tracking-widest"
        >
          Crafting Digital Experiences
        </p>
      </div>
    </div>
  );
};

export default Loader;
