"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../lib/translations";

const TECH_COLORS: Record<string, string> = {
  "WordPress":    "bg-blue-900 text-blue-200",
  "WooCommerce":  "bg-purple-900 text-purple-200",
  "Elementor":    "bg-pink-900 text-pink-200",
  "Meta Pixel":   "bg-blue-800 text-blue-100",
  "Google Analytics": "bg-yellow-900 text-yellow-200",
  "MS Clarity":   "bg-cyan-900 text-cyan-200",
  "Zapier":       "bg-orange-900 text-orange-200",
  "Brevo":        "bg-emerald-900 text-emerald-200",
  "Next.js":      "bg-zinc-800 text-zinc-100",
  "React":        "bg-sky-900 text-sky-200",
  "TypeScript":   "bg-blue-700 text-blue-100",
  "OpenAI API":   "bg-green-900 text-green-200",
  "Node.js":      "bg-green-800 text-green-100",
  "Express.js":   "bg-zinc-700 text-zinc-100",
  "JWT":          "bg-rose-900 text-rose-200",
  "Passport.js":  "bg-indigo-900 text-indigo-200",
  "SQL Server":   "bg-red-900 text-red-200",
  "Nodemailer":   "bg-teal-900 text-teal-200",
  "MongoDB":      "bg-green-700 text-green-100",
  "Handlebars":   "bg-amber-900 text-amber-200",
};

function TechPill({ name }: { name: string }) {
  const color = TECH_COLORS[name] ?? "bg-zinc-700 text-zinc-200";
  return (
    <span className={`text-xs font-medium px-3 py-1 rounded-full ${color}`}>
      {name}
    </span>
  );
}

export default function Projects({ ref }: any) {
  const { lang } = useLanguage();
  const t = translations[lang as keyof typeof translations];

  const projects = [
    {
      title: t.project1Title,
      descriptions: [t.project1Description, t.project1Description2],
      link: "https://stekya.com",
      techs: ["WordPress", "WooCommerce", "Elementor"],
    },
    {
      title: t.project2Title,
      descriptions: [t.project2Description, t.project2Description2],
      link: "https://mdbmia.com",
      links: [
        { label: "Design Build System", url: "https://mdbmia.com/design-build-system/" },
        { label: "Condo Renovation", url: "https://mdbmia.com/condo-renovation/" },
        { label: "Development", url: "https://mdbmia.com/development/" },
        { label: "Custom Closets", url: "https://mdbmia.com/custom-closets/" },
      ],
      techs: ["WordPress", "Elementor", "Meta Pixel", "Google Analytics", "MS Clarity", "Zapier", "Brevo"],
    },
    {
      title: t.project3Title,
      descriptions: [t.project3Description, t.project3Description2, t.project3Description3],
      link: "https://quiz-form-ejxnpegod-mrcocois-projects.vercel.app/",
      techs: ["Next.js", "React", "TypeScript", "Node.js", "OpenAI API"],
    },
    {
      title: t.project4Title,
      descriptions: [t.project4Description, t.project4Description2],
      link: "https://github.com/marcosvizio/SmarTask",
      techs: ["Node.js", "Express.js", "JWT", "Passport.js", "SQL Server", "Nodemailer"],
    },
    {
      title: t.project5Title,
      descriptions: [t.project5Description, t.project5Description2, t.project5Description3],
      link: "https://double-k-audiciones.onrender.com/",
      techs: ["Node.js", "Express.js", "MongoDB", "Nodemailer", "Handlebars"],
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-32 px-6">
      <h2 className="text-4xl text-center font-bold mb-16">{t.projectsTitle}</h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="p-6 border border-zinc-700 rounded-xl flex flex-col gap-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>

            {project.descriptions.map((desc, j) => (
              <p key={j} className="text-gray-400 text-sm">{desc}</p>
            ))}

            {project.links && (
              <ul className="text-gray-400 text-sm space-y-1">
                {project.links.map((l) => (
                  <li key={l.url}>
                    • <a href={l.url} className="text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer">{l.label}</a>
                  </li>
                ))}
              </ul>
            )}

            <p className="text-gray-400 text-sm">
              {lang === "en" ? "Live Site:" : "Sitio:"}{" "}
              <a href={project.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                {lang === "en" ? "Click Here" : "Ver aquí"}
              </a>
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
              {project.techs.map((tech) => (
                <TechPill key={tech} name={tech} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
