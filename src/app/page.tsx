"use client";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import ContactModal from "./components/ContactModal";

export default function Home() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const aboutInView = useInView(aboutRef, { margin: "-50% 0px -50% 0px" });
  const projectsInView = useInView(projectsRef, { margin: "-50% 0px -50% 0px" });
  const contactInView = useInView(contactRef, { margin: "-50% 0px -50% 0px" });

  const openModal = () => {setIsOpen(true);};

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-zinc-50 font-sans dark:bg-black">
      {/* Navbar Section */}
      <Navbar
        active={
          aboutInView
            ? "about"
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
      {/* Projects Section */}
      <Projects ref={projectsRef}/>
      {/* Contact Section */}
      <Contact ref={contactRef} onOpenModal={openModal}/>
      {/* Contact Modal */}
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />

    </div>
  );
}
