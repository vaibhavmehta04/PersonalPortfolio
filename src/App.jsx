import React, { useState } from "react";
import Loader from "./components/Loader";

import Hero from "./components/Hero";
import LandingPhotoSection from "./components/LandingPhotoSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsVertical from "./components/ProjectsVertical";
import ProjectsHorizontal from "./components/ProjectsHorizontal";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const App = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="font-sans bg-neutral text-neutral-content">
      {!loaded && <Loader onFinish={() => setLoaded(true)} />}

      {loaded && (
        <div className="opacity-0 animate-fade-in">
          {/* <LandingPhotoSection /> */}
          <Hero />
          <SkillsSection />
          <ProjectsHorizontal />
          <ExperienceSection />
          <EducationSection />
          <ContactSection />
          <Footer />
        </div>
      )}
    </main>
  );
};

export default App;
