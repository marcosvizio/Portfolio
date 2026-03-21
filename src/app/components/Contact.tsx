"use client";

import { forwardRef } from "react";

type AboutProps = {
  onOpenModal: () => void;
};

const Contact = forwardRef<HTMLElement, AboutProps>(
  ({ onOpenModal }, ref) => {
    return (
      <section id="contact" ref={ref} className="h-screen py-20 text-center flex flex-col items-center justify-center text-center">
      <h2 className="text-4xl text-center font-bold">Let’s work together</h2>

      <p className="text-gray-400 mt-4">
        Have a project in mind or looking for a developer? Feel free to reach out.
      </p>

      <div className="mt-8 space-y-2">
        <p><a href="https://www.linkedin.com/in/marcos-vizio/" className="text-blue-500 hover:underline" target="_blank">LinkedIn</a></p>
        <p><a href="https://github.com/marcosvizio" className="text-blue-500 hover:underline" target="_blank">GitHub</a></p>
      </div>

      <button
        onClick={onOpenModal}
        className="mt-6 px-6 py-3 border border-white text-white rounded-xl hover:bg-white hover:text-black transition cursor-pointer"
      >
        Contact Me
      </button>
    </section>
    );
  }
);

export default Contact;