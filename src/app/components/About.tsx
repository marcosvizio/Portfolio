"use client";

import { motion } from "framer-motion";
import { forwardRef } from "react";

type AboutProps = {
  onOpenModal: () => void;
};

const About = forwardRef<HTMLElement, AboutProps>(
  ({ onOpenModal }, ref) => {
    return (
      <section
        id="about"
        ref={ref}
        className="h-screen py-32 max-w-3xl mx-auto flex flex-col items-center justify-center text-center"
      >
        <h2 className="text-4xl mb-6 font-bold">About me</h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.p className="mt-4 text-gray-400">
            Hi, I'm Marcos — a Full Stack Web Developer.
          </motion.p>

          <motion.p className="text-gray-400">
            I specialize in building scalable web applications using modern technologies like React, Node.js, and both SQL and NoSQL databases.
          </motion.p>

          <motion.p className="text-gray-400">
            I have hands-on experience developing real-world projects, including task management systems, AI-powered lead qualification tools, and web platforms with authentication, file uploads, and automated workflows.
          </motion.p>

          <motion.p className="text-gray-400">
            I graduated as a Systems Analyst from IFTS N°18, where I developed a strong foundation in database management, software architecture, and information security.
          </motion.p>

          <motion.p className="text-gray-400">
            In addition to my academic background, I’ve worked on freelance projects and continuously improve my skills through hands-on development.
          </motion.p>

          <button
            onClick={onOpenModal}
            className="mt-6 px-6 py-3 border border-white text-white rounded-xl hover:bg-white hover:text-black transition cursor-pointer"
          >
            Get in touch
          </button>
        </motion.div>
      </section>
    );
  }
);

export default About;