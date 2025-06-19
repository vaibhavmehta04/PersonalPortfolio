import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    degree: "B.Tech (Computer Science & Engineering)",
    institution: "Maharaja Surajmal Institute of Technology",
    duration: "2023 – 2027",
    details: ["CGPA: 8.66 (Pursuing)"]
  },
  {
    degree: "Class 12ᵗʰ – CBSE (Science)",
    institution: "Sri Venkateshwara International School",
    duration: "2021 – 2023",
    details: ["Percentage: 95%"]
  },
  {
    degree: "Class 10ᵗʰ – CBSE",
    institution: "Sri Venkateshwara International School",
    duration: "2019 – 2021",
    details: ["Percentage: 95%"]
  }
];

const EducationSection = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-[#2a1f3d]/30 to-black text-white py-24 px-6 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center gap-16">
        {/* Left side heading */}
        <div className="md:w-1/4 w-full text-left">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold uppercase leading-tight tracking-tight">
            <span className="text-white">My </span>
            <span className="text-primaryGreen">Education</span>
          </h2>
        </div>

        {/* Right side cards */}
        <div className="md:w-3/4 w-full">
          <div className="flex gap-6 overflow-x-auto md:overflow-x-visible snap-x md:grid md:grid-cols-3">
            {education.map((edu, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="min-w-[250px] md:min-w-0 md:w-auto snap-start aspect-square bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl shadow-md p-6 flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-primaryPurple"
              >
                <div>
                  <h3 className="text-lg font-bold mb-1 text-white">{edu.degree}</h3>
                  <p className="text-sm text-gray-300 mb-1">{edu.institution}</p>
                  <span className="text-xs text-gray-400 italic block mb-3">
                    {edu.duration}
                  </span>
                </div>
                <ul className="list-disc list-inside text-sm text-gray-200 space-y-1">
                  {edu.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
