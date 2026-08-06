"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { translations } from "../../lib/translations";
import { useLanguage } from "../../context/LanguageContext";

export default function Navbar({ active }: { active: string }) {
    const { lang, setLang } = useLanguage();
    const t = translations[lang as keyof typeof translations];

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const links = [
        { id: "about", label: t.navbarAbout },
        { id: "skills", label: t.navbarSkills },
        { id: "projects", label: t.navbarProjects },
        { id: "contact", label: t.navbarContact },
    ];

    const scrollToSection = (id: string) => {
        setMenuOpen(false);
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled ? "glass-card border-x-0 border-t-0 py-4" : "border-b border-transparent py-6"
            }`}
        >
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
                <button
                    onClick={() => scrollToSection("hero")}
                    className="text-xl font-bold tracking-tight cursor-pointer"
                >
                    <span className="text-gradient">&lt;MV/&gt;</span>
                </button>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-1 text-sm">
                    {links.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className={`relative cursor-pointer px-4 py-2 rounded-full transition-colors duration-300 font-medium ${
                                active === link.id
                                    ? "text-white"
                                    : "text-zinc-400 hover:text-white"
                            }`}
                        >
                            {active === link.id && (
                                <motion.span
                                    layoutId="nav-active-pill"
                                    className="absolute inset-0 rounded-full -z-10"
                                    style={{ backgroundImage: "linear-gradient(120deg, rgba(34,211,238,0.18), rgba(139,92,246,0.18))", border: "1px solid rgba(139,92,246,0.4)" }}
                                    transition={{ type: "spring", duration: 0.5 }}
                                />
                            )}
                            {link.label}
                        </button>
                    ))}
                    <button
                        onClick={() => setLang(lang === "en" ? "es" : "en")}
                        className="ml-3 px-3 py-1.5 rounded-full border border-zinc-700 text-zinc-300 hover:border-cyan-400/60 hover:text-white transition-colors text-xs font-semibold cursor-pointer"
                    >
                        {lang === "en" ? "ES" : "EN"}
                    </button>
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setMenuOpen((v) => !v)}
                    className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2"
                    aria-label="Toggle menu"
                >
                    <motion.span
                        animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
                        className="w-6 h-0.5 bg-white rounded-full block"
                    />
                    <motion.span
                        animate={{ opacity: menuOpen ? 0 : 1 }}
                        className="w-6 h-0.5 bg-white rounded-full block"
                    />
                    <motion.span
                        animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
                        className="w-6 h-0.5 bg-white rounded-full block"
                    />
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden glass-card border-x-0 border-b-0"
                    >
                        <div className="flex flex-col px-6 py-4 gap-2">
                            {links.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className={`text-left px-4 py-3 rounded-xl transition-colors font-medium ${
                                        active === link.id
                                            ? "bg-white/5 text-white"
                                            : "text-zinc-400 hover:text-white"
                                    }`}
                                >
                                    {link.label}
                                </button>
                            ))}
                            <button
                                onClick={() => setLang(lang === "en" ? "es" : "en")}
                                className="mt-2 px-4 py-2 rounded-full border border-zinc-700 text-zinc-300 hover:border-cyan-400/60 hover:text-white transition-colors text-xs font-semibold cursor-pointer w-fit"
                            >
                                {lang === "en" ? "ES" : "EN"}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
