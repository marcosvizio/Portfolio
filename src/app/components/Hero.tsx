"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../lib/translations";

export default function Hero() {
    const { lang } = useLanguage();
    const t = translations[lang as keyof typeof translations];

    return (
    <section className="h-screen flex flex-col items-center justify-center text-center overflow-hidden">

        {/* Fondo Animado Hero Section*/}
        <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-black via-zinc-900 to-black bg-[length:200%_200%]" />

        {/* Contenido Hero Section */}
        <div className="z-100">
            <div className="flex justify-center">
                <motion.img
                    src="/foto_marcos.jpg"
                    alt="Marcos"
                    className="w-60 h-60 rounded-full object-cover mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }}
                />
            </div>
            <motion.h1
                className="text-5xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Marcos Vizio
            </motion.h1>

            <motion.p
                className="mt-4 text-lg text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                {t.heroSubtitle}
            </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-10" />

    </section>
  );
}