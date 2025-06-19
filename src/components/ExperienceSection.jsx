import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: "Hackathon Participant",
    org: "Various National & College Events",
    duration: "Jul 2023 – Present",
    points: [
      "Participated in multiple national and collegiate hackathons",
      "Excelled in rapid prototyping, debugging, and agile collaboration",
      "Improved technical versatility by 60%"
    ]
  },
  {
    title: "Social Media & Events Lead",
    org: "Anmol Aasheyein NGO",
    duration: "Sep 2024 – Dec 2024",
    points: [
      "Led digital outreach and marketing campaigns",
      "Increased social media engagement by 30%",
      "Boosted event participation by 25%"
    ]
  },
  {
    title: "Member – GDSC, DSA Department",
    org: "Google Developer Student Club",
    duration: "Nov 2024 – Present",
    points: [
      "Attended over 5 technical workshops and coding contests",
      "Improved competitive coding accuracy by 40%",
      "Engaged in group problem solving and mock interviews"
    ]
  },
  {
    title: "Backend Developer",
    org: "Twitter Clone Project",
    duration: "Apr 2025 – May 2025",
    points: [
      "Developed backend using Node.js, Express, MongoDB, and JWT",
      "Built secure user authentication, tweet systems, and RESTful APIs"
    ]
  }
];

const ExperienceSection = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
            toggleActions: "play reverse play reverse"
          }
        }
      );
    });
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-b from-[#3d2c54] via-[#1a1a1a] to-black text-white py-24 px-6 font-sans overflow-hidden">

      <div className="max-w-[1440px] mx-auto">
        {/* Heading */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold uppercase text-center mb-20 tracking-tight z-20 relative">
          <span className="text-white">My </span>
          <span className="text-primaryPurple">Experience</span>
        </h2>

        {/* Shorter vertical timeline line */}
        <div className="absolute top-48 bottom-12 left-1/2 w-1 bg-gradient-to-b from-primaryPurple via-gray-700 to-primaryGreen/70 transform -translate-x-1/2 z-0" />

        <div className="flex flex-col gap-16 relative z-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`relative w-full md:w-1/2 px-6 py-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl transition-all duration-300 ${
                index % 2 === 0 ? "ml-auto" : "mr-auto"
              } hover:shadow-purple-500/20 hover:border-primaryPurple`}
            >
              {/* Timeline dot */}
              <div
                className="absolute w-4 h-4 bg-primaryGreen rounded-full border-2 border-black animate-pulse"
                style={{
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: index % 2 === 0 ? "-1.25rem" : "calc(100% + 0.5rem)"
                }}
              />

              <h3 className="text-xl sm:text-2xl font-bold mb-1 text-white">{exp.title}</h3>
              <p className="text-sm text-gray-300 mb-2">{exp.org}</p>
              <span className="text-xs text-gray-400 italic block mb-4">{exp.duration}</span>
              <ul className="list-disc list-inside text-sm text-gray-200 space-y-1">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
