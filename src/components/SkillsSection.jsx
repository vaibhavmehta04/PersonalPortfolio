import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categorizedSkills = [
  {
    title: "Languages & Frameworks",
    items: [
      { name: "C/C++", color: "bg-blue-800 text-white" },
      { name: "Python", color: "bg-yellow-300 text-black" },
      { name: "Java", color: "bg-red-600 text-white" },
      { name: "JavaScript", color: "bg-[#F7DF1E] text-black" },
      { name: "React.js", color: "bg-[#61DBFB] text-black" },
      { name: "Node.js", color: "bg-green-600 text-white" },
      { name: "Express.js", color: "bg-gray-800 text-white" },
    ]
  },
  {
    title: "Databases & Cloud",
    items: [
      { name: "MySQL", color: "bg-blue-600 text-white" },
      { name: "PostgreSQL", color: "bg-indigo-700 text-white" },
      { name: "MongoDB", color: "bg-[#47A248] text-white" },
      { name: "Firebase", color: "bg-[#FFCA28] text-black" }
    ]
  },
  {
    title: "Tools & Technologies",
    items: [
      { name: "GSAP", color: "bg-[#88CE02] text-black" },
      { name: "Three.js", color: "bg-black text-white" },
      { name: "JWT", color: "bg-purple-800 text-white" },
      { name: "Git", color: "bg-[#F05032] text-white" },
      { name: "GitHub", color: "bg-gray-900 text-white" },
      { name: "GitLab", color: "bg-orange-600 text-white" },
      { name: "Postman", color: "bg-orange-400 text-white" },
      { name: "REST APIs", color: "bg-teal-500 text-white" },
      { name: "VS Code", color: "bg-blue-500 text-white" }
    ]
  },
  {
    title: "Course Work",
    items: [
      { name: "DSA", color: "bg-[#1e293b] text-white" },
      { name: "System Design", color: "bg-[#334155] text-white" },
      { name: "DBMS", color: "bg-[#475569] text-white" },
      { name: "OOP", color: "bg-[#64748b] text-white" },
      { name: "Web Tech", color: "bg-[#0f172a] text-white" },
      { name: "OS", color: "bg-[#1e40af] text-white" },
      { name: "CN (TCP/IP)", color: "bg-[#4c1d95] text-white" },
      { name: "Software Dev", color: "bg-[#3b0764] text-white" }
    ]
  }
];

const SkillsSection = () => {
  const skillRefs = useRef([]);

  useEffect(() => {
    skillRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          // delay: index * 0.05
        }
      );
    });
  }, []);

  return (
    <section id="skills" className="w-full bg-black text-white py-24 px-6 font-sans">
      <div className="max-w-[1440px] mx-auto text-center">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold uppercase tracking-[0.06em] leading-[1.1] mb-16">
          <span className="text-primaryPurple">Skills</span> & <span className="text-primaryGreen">Technologies</span>
        </h2>

        <div className="flex flex-col gap-12">
          {categorizedSkills.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-xl font-bold mb-4 text-left sm:text-center text-gray-300 uppercase tracking-wide">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {category.items.map((skill, index) => (
                  <span
                    key={`${catIndex}-${index}`}
                    ref={(el) => (skillRefs.current[catIndex * 100 + index] = el)}
                    className={`px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide shadow-md hover:scale-105 transition-transform duration-300 ${skill.color}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
