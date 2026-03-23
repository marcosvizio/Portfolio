"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";

type AboutProps = {
  onOpenModal: () => void;
};

const Contact = forwardRef<HTMLElement, AboutProps>(
  ({ onOpenModal }, ref) => {
    return (
      <section id="contact" ref={ref} className="h-screen max-w-3xl mx-auto py-20 text-center flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl text-center font-bold">Let’s work together</h2>

        <p className="text-gray-400 mt-4">
          Have a project in mind or looking for a developer? I’d love to hear about it.
        </p>
        <p className="text-gray-400 mt-4">
          I’m always open to new opportunities where I can contribute, learn, and grow — whether it's building a full web application, improving an existing product, or collaborating as part of a team.
        </p>
        <p className="text-gray-400 mt-4">
          If you’re looking for someone who is proactive, detail-oriented, and passionate about development, feel free to reach out. I’ll get back to you as soon as possible.
        </p>
        <p className="text-gray-400 mt-4">
          Let’s create something great together!
        </p>


        <div className="flex gap-4 mt-6">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/marcos-vizio/"
            target="_blank"
            className="px-5 py-2 border border-zinc-700 rounded-xl text-sm text-zinc-300 hover:text-black hover:bg-white hover:border-white transition"
          >
            LinkedIn
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/marcosvizio"
            target="_blank"
            className="px-5 py-2 border border-zinc-700 rounded-xl text-sm text-zinc-300 hover:text-black hover:bg-white hover:border-white transition"
          >
            GitHub
          </motion.a>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenModal}
          className="mt-6 px-6 py-3 border border-zinc-700 text-zinc-300 rounded-xl hover:bg-white hover:text-black hover:border-white transition cursor-pointer"
        >
          Contact Me
        </motion.button>

      </section>
    );
  }
);

export default Contact;