"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../lib/translations";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type ContactProps = {
  onOpenModal: () => void;
};

const Contact = forwardRef<HTMLElement, ContactProps>(
  ({ onOpenModal }, ref) => {
    const { lang } = useLanguage();
    const t = translations[lang as keyof typeof translations];
    return (
      <section id="contact" ref={ref} className="relative py-28 md:py-32 px-6">
        <div className="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
          <div className="w-xl h-144 rounded-full bg-violet-500/10 blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-10 md:p-14 max-w-3xl mx-auto text-center"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-cyan-300/80">
            {t.contactEyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">{t.contactTitle}</h2>

          <p className="text-zinc-400 mt-6">{t.contactSubtitle}</p>
          <p className="text-zinc-400 mt-4">{t.contactSubtitle2}</p>
          <p className="text-zinc-400 mt-4">{t.contactSubtitle3}</p>
          <p className="text-zinc-400 mt-4">{t.contactSubtitle4}</p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenModal}
            className="btn-gradient mt-8 px-7 py-3 rounded-full text-sm cursor-pointer"
          >
            {t.contactCTA}
          </motion.button>

          <div className="flex gap-4 mt-8 justify-center">
            <motion.a
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/marcos-vizio/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-zinc-700 text-lg text-zinc-300 hover:text-cyan-300 hover:border-cyan-400/60 transition-colors"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/marcosvizio"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-zinc-700 text-lg text-zinc-300 hover:text-cyan-300 hover:border-cyan-400/60 transition-colors"
            >
              <FaGithub />
            </motion.a>
          </div>
        </motion.div>

        <p className="text-center text-zinc-500 text-xs mt-10">
          © {new Date().getFullYear()} Marcos Vizio
        </p>
      </section>
    );
  }
);

Contact.displayName = "Contact";
export default Contact;
