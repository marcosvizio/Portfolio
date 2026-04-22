"use client";

import { motion } from "framer-motion";
import { forwardRef } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../lib/translations";

type AboutProps = {
  onOpenModal: () => void;
};

const About = forwardRef<HTMLElement, AboutProps>(({ onOpenModal }, ref) => {
  const { lang } = useLanguage();
  const t = translations[lang as keyof typeof translations];

  return (
    <section
      id="about"
      ref={ref}
      className="h-screen py-32 max-w-3xl mx-auto flex flex-col items-center justify-center text-center"
    >
      <h2 className="text-4xl mb-6 font-bold">{t.aboutTitle}</h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.p className="mt-4 text-gray-400">
          {lang === "en" ? "Hi, I'm Marcos — a Full Stack Web Developer." : "Hola, soy Marcos — Desarrollador Web Full Stack."}
        </motion.p>

        <motion.p className="text-gray-400 mt-2">{t.aboutDescription1}</motion.p>
        <motion.p className="text-gray-400 mt-2">{t.aboutDescription2}</motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenModal}
          className="mt-6 px-6 py-3 border border-zinc-700 text-zinc-300 rounded-xl hover:bg-white hover:text-black hover:border-white transition cursor-pointer"
        >
          {t.aboutButton}
        </motion.button>
      </motion.div>
    </section>
  );
});

About.displayName = "About";
export default About;
