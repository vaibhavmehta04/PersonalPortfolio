import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ScrollRow = ({ speed = 40, size = "w-12 h-12 opacity-70" }) => {
  const rowRef = useRef(null);

  useEffect(() => {
    gsap.to(rowRef.current, {
      x: "-50%",
      duration: speed,
      ease: "linear",
      repeat: -1,
    });
  }, [speed]);

  const icons = ["💎", "🛠️", "🎨", "⚙️", "🧠", "📦", "🖥️", "📱", "🌐"];

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={rowRef}
        className="flex gap-8 whitespace-nowrap w-max"
      >
        {[...icons, ...icons].map((icon, index) => (
          <div
            key={index}
            className={`flex items-center justify-center ${size} text-white text-3xl`}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollRow;
