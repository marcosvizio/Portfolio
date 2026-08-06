"use client";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import ContactModal from "./components/ContactModal";

export default function Home() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const aboutInView = useInView(aboutRef, { margin: "-50% 0px -50% 0px" });
  const skillsInView = useInView(skillsRef, { margin: "-50% 0px -50% 0px" });
  const projectsInView = useInView(projectsRef, { margin: "-50% 0px -50% 0px" });
  const contactInView = useInView(contactRef, { margin: "-50% 0px -50% 0px" });

  const openModal = () => {setIsOpen(true);};

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black font-sans">
      {/* Navbar Section */}
      <Navbar
        active={
          aboutInView
            ? "about"
            : skillsInView
            ? "skills"
            : projectsInView
            ? "projects"
            : contactInView
            ? "contact"
            : ""
        }
      />
      {/* Hero Section */}
      <Hero/>
      {/* About Section */}
      <About ref={aboutRef} onOpenModal={openModal}/>
      {/* Skills Section */}
      <Skills ref={skillsRef}/>
      {/* Projects Section */}
      <Projects ref={projectsRef}/>
      {/* Contact Section */}
      <Contact ref={contactRef} onOpenModal={openModal}/>
      {/* Contact Modal */}
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />

    </div>
  );
}
