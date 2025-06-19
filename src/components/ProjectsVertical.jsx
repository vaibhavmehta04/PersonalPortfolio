import React, { useEffect, useRef } from "react";
import projects from "../data/projectData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectsVertical = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  }, []);

  return (
    <section className="w-full bg-black text-white py-24 px-6 font-sans">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold uppercase mb-16 text-center">
          Projects
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-[#1c1c1c] rounded-2xl shadow-lg overflow-hidden flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#2e2e2e] text-xs rounded-full uppercase tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primaryGreen hover:opacity-90 text-black px-4 py-2 rounded font-bold text-sm"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primaryPurple hover:opacity-90 text-white px-4 py-2 rounded font-bold text-sm"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsVertical;