"use client";

import { translations } from "../../lib/translations";
import { useLanguage } from "../../context/LanguageContext";

export default function Navbar({ active }: { active: string }) {
    const base = "transition-colors duration-300";
    const activeStyle = "text-blue-500 font-bold";
    const inactiveStyle = "text-white";

    const { lang, setLang } = useLanguage();
    const t = translations[lang as keyof typeof translations];

    const scrollToSection = (id: any) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <nav className="fixed top-0 w-full flex justify-between items-center p-8 z-50">
            <h1 className="text-xl font-semibold">&lt;MV/&gt;</h1>

            <div className="space-x-6 text-base flex items-center">
                <button className={`cursor-pointer hover:text-gray-400 hover:font-bold ${base} ${active === "about" ? activeStyle : inactiveStyle}`} onClick={() => scrollToSection("about")}>
                    {t.navbarAbout}
                </button>
                <button className={`cursor-pointer hover:text-gray-400 hover:font-bold ${base} ${active === "projects" ? activeStyle : inactiveStyle}`} onClick={() => scrollToSection("projects")}>
                    {t.navbarProjects}
                </button>
                <button className={`cursor-pointer hover:text-gray-400 hover:font-bold ${base} ${active === "contact" ? activeStyle : inactiveStyle}`} onClick={() => scrollToSection("contact")}>
                    {t.navbarContact}
                </button>
                <button
                    onClick={() => setLang(lang === "en" ? "es" : "en")}
                    className="ml-2 px-3 py-1 rounded-full border border-zinc-600 text-zinc-300 hover:border-white hover:text-white transition text-sm font-semibold cursor-pointer"
                >
                    {lang === "en" ? "ES" : "EN"}
                </button>
            </div>
        </nav>
    );
}
