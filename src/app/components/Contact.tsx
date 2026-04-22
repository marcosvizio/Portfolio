"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../lib/translations";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type AboutProps = {
  onOpenModal: () => void;
};

const Contact = forwardRef<HTMLElement, AboutProps>(
  ({ onOpenModal }, ref) => {
    const { lang } = useLanguage();
    const t = translations[lang as keyof typeof translations];
    return (
      <section id="contact" ref={ref} className="h-screen max-w-3xl mx-auto py-20 text-center flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl text-center font-bold">{t.contactTitle}</h2>

        <p className="text-gray-400 mt-4">
          {t.contactSubtitle}
        </p>
        <p className="text-gray-400 mt-4">
          {t.contactSubtitle2}
        </p>
        <p className="text-gray-400 mt-4">
          {t.contactSubtitle3}
        </p>
        <p className="text-gray-400 mt-4">
          {t.contactSubtitle4}
        </p>


        <div className="flex gap-4 mt-6">
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/marcos-vizio/"
            target="_blank"
            className="px-5 py-2 border border-zinc-700 rounded-xl text-lg text-zinc-300 hover:text-black hover:bg-white hover:border-white transition"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/marcosvizio"
            target="_blank"
            className="px-5 py-2 border border-zinc-700 rounded-xl text-lg text-zinc-300 hover:text-black hover:bg-white hover:border-white transition"
          >
            <FaGithub />
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