"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../lib/translations";

export default function Hero() {
    const { lang } = useLanguage();
    const t = translations[lang as keyof typeof translations];

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden px-6">

        {/* Fondo: grid + blobs de acento */}
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-grid mask-[radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]" />
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-lg h-128 rounded-full bg-cyan-500/20 blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-md h-112 rounded-full bg-violet-500/25 blur-3xl animate-blob-slow" />

        {/* Contenido */}
        <div className="relative z-10 flex flex-col items-center">
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative mb-6"
            >
                <div className="absolute -inset-1 rounded-full bg-linear-to-r from-cyan-400 to-violet-500 opacity-70 blur-md" />
                <img
                    src="/foto_marcos.jpg"
                    alt="Marcos Vizio"
                    className="relative w-44 h-44 md:w-56 md:h-56 rounded-full object-cover border-2 border-white/10"
                />
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-cyan-300/80 mb-3"
            >
                {t.heroGreeting}
            </motion.p>

            <motion.h1
                className="text-5xl md:text-7xl font-extrabold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                Marcos <span className="text-gradient">Vizio</span>
            </motion.h1>

            <motion.p
                className="mt-5 text-base md:text-lg text-zinc-400 max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                {t.heroSubtitle}
            </motion.p>

            <motion.div
                className="mt-9 flex flex-wrap items-center justify-center gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
            >
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection("projects")}
                    className="btn-gradient px-7 py-3 rounded-full text-sm cursor-pointer"
                >
                    {t.heroCTAProjects}
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection("contact")}
                    className="px-7 py-3 rounded-full text-sm font-semibold border border-zinc-700 text-zinc-200 hover:border-white/60 hover:bg-white/5 transition cursor-pointer"
                >
                    {t.heroCTAContact}
                </motion.button>
            </motion.div>
        </div>

        {/* Indicador de scroll */}
        <motion.button
            onClick={() => scrollToSection("about")}
            aria-label="Scroll down"
            className="absolute bottom-10 z-10 cursor-pointer text-zinc-500 hover:text-white transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 4v16m0 0l-6-6m6 6l6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </motion.button>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-b from-transparent to-black z-1" />

    </section>
  );
}
