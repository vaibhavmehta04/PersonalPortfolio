import React, { useEffect, useRef, useState } from "react";
import projects from "../data/projectData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectsHorizontal = () => {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const scrollWrapperRef = useRef(null);
  const scrollTitleRef = useRef(null);
  const triggerRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const scroll = scrollRef.current;
    const scrollWrapper = scrollWrapperRef.current;
    const trigger = triggerRef.current;

    // Main horizontal scroll
    gsap.to(scroll, {
      x: () => -(scroll.scrollWidth - scrollWrapper.offsetWidth),
      ease: "none",
      scrollTrigger: {
        trigger: trigger,
        start: "top top",
        end: () => `+=${(scroll.scrollWidth - scrollWrapper.offsetWidth) * 2}`,
        pin: scrollWrapper,
        scrub: 1,
        anticipatePin: 1
      }
    });

    // Scroll in fade animation
    gsap.fromTo(
      scroll,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          once: true,
        },
      }
    );

    // Scrolling heading animation
    gsap.to(scrollTitleRef.current, {
      xPercent: -50,
      repeat: -1,
      ease: "linear",
      duration: 20
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden bg-black text-white font-sans"
    >
      {/* Scrolling Heading */}
      <div className="w-full overflow-hidden pt-20 pb-8">
        <div
          id="projects" 
          ref={scrollTitleRef}
          className="inline-block whitespace-nowrap text-[3.5rem] sm:text-[6rem] lg:text-[7rem] font-display font-extrabold uppercase text-primaryPurple tracking-[0.04em] opacity-30"
        >
          Selected Projects &nbsp; Selected Projects &nbsp; Selected Projects &nbsp; Selected Projects
        </div>
      </div>

      {/* Trigger Marker */}
      <div ref={triggerRef} className="h-[1px]" />

      {/* Scrollable Projects Section */}
      <div
        ref={scrollWrapperRef}
        className="relative overflow-hidden bg-gradient-to-b from-black/80 to-black/90 border-y border-gray-700 shadow-inner py-8"
      >
        {/* Edge Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex gap-20 px-6 py-6 w-max items-center pl-[80px]"
          style={{ flexDirection: "row" }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group w-[480px] min-w-[480px] bg-gradient-to-br from-[#1c1c1c] to-[#111] border border-gray-700/70 shadow-[0_0_30px_#000]/20 backdrop-blur-md rounded-2xl overflow-hidden flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:border-primaryPurple cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-400 text-xs leading-snug">{project.description}</p>
                <div className="flex flex-wrap gap-1 text-[10px] mt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#2e2e2e]/80 px-2 py-1 rounded-full uppercase border border-gray-600 tracking-wide font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 mt-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primaryGreen hover:brightness-110 text-black px-3 py-1 rounded-md font-bold text-xs transition-all shadow-md"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primaryPurple hover:brightness-110 text-white px-3 py-1 rounded-md font-bold text-xs transition-all shadow-md"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-md flex justify-center items-center z-50">
          <div className="relative bg-[#1c1c1c]/90 backdrop-blur-md text-white w-11/12 md:w-2/3 lg:w-1/2 max-h-[80vh] overflow-y-auto p-8 rounded-xl shadow-2xl border border-gray-700">
            <button
              className="absolute top-4 right-4 text-white text-xl hover:text-primaryPurple"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>
            <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <p className="text-gray-300 mb-4 leading-relaxed">
              {selectedProject.longDescription || "Detailed info about the project goes here."}
            </p>
            <div className="flex flex-wrap gap-2 text-xs mb-6">
              {selectedProject.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-[#2e2e2e]/80 px-3 py-1 rounded-full uppercase border border-gray-600 tracking-wide font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={selectedProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primaryGreen hover:brightness-110 text-black px-4 py-2 rounded font-bold text-sm"
              >
                View Live
              </a>
              <a
                href={selectedProject.code}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primaryPurple hover:brightness-110 text-white px-4 py-2 rounded font-bold text-sm"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsHorizontal;
