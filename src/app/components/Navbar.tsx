"use client";

export default function Navbar({ active }: { active: string }) {
    /* Logica para iluminacion de navbar segun section*/
    const base = "transition-colors duration-300";
    const activeStyle = "text-blue-500 font-bold";
    const inactiveStyle = "text-white";

    /* Logica para animacion del scroll */
    const scrollToSection = (id:any) => {
        const element = document.getElementById(id);

        element?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <nav className="fixed top-0 w-full flex justify-between items-center p-8 z-50">
            <h1 className="text-xl font-semibold">&lt;MV/&gt;</h1>

            <div className="space-x-6 text-base">
                <button className={`cursor-pointer hover:text-gray-400 hover:font-bold ${base} ${active === "about" ? activeStyle : inactiveStyle}`} onClick={() => scrollToSection("about")}>
                    About
                </button>
                <button className={`cursor-pointer hover:text-gray-400 hover:font-bold ${base} ${active === "projects" ? activeStyle : inactiveStyle}`} onClick={() => scrollToSection("projects")}>
                    Projects
                </button>
                <button className={`cursor-pointer hover:text-gray-400 hover:font-bold ${base} ${active === "contact" ? activeStyle : inactiveStyle}`} onClick={() => scrollToSection("contact")}>
                    Contact
                </button>
            </div>
        </nav>
    );
}