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

  const stats = [
    { value: "IFTS N°18", label: t.aboutStatDegree },
    { value: "5+", label: t.aboutStatProjects },
    { value: "Full Stack", label: t.aboutStatFocus },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 md:py-32 px-6 max-w-5xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-cyan-300/80">
          {t.aboutEyebrow}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3">{t.aboutTitle}</h2>
      </motion.div>

      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 md:p-10"
        >
          <p className="text-lg text-zinc-200 font-medium">
            {lang === "en"
              ? "Hi, I'm Marcos — a Full Stack Web Developer."
              : "Hola, soy Marcos — Desarrollador Web Full Stack."}
          </p>

          <p className="text-zinc-400 mt-4 leading-relaxed">{t.aboutDescription1}</p>
          <p className="text-zinc-400 mt-3 leading-relaxed">{t.aboutDescription2}</p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenModal}
            className="btn-gradient mt-7 px-6 py-3 rounded-full text-sm cursor-pointer"
          >
            {t.aboutButton}
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card glass-card-hover rounded-2xl p-6"
            >
              <p className="text-2xl font-bold text-gradient">{stat.value}</p>
              <p className="text-zinc-400 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";
export default About;
