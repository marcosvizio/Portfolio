"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center overflow-hidden">

        {/* Fondo Animado Hero Section*/}
        <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-black via-zinc-900 to-black bg-[length:200%_200%]" />

        {/* Contenido Hero Section */}
        <div className="z-100">
            <motion.img
                src="/foto_marcos.jpg"
                alt="Marcos"
                className="w-80 h-80 rounded-full object-cover mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
            />

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
                Full Stack Developer
            </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-10" />

    </section>
  );
}