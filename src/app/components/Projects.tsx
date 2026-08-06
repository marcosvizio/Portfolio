"use client";

import { motion } from "framer-motion";
import { SiPhp } from "react-icons/si";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../lib/translations";

type TechAsset = {
  image?: string;
  Icon?: React.ComponentType<{ size?: number; className?: string }>;
};

const TECH_ASSETS: Record<string, TechAsset> = {
  "WordPress": { image: "/wordpress_blue_logo.png" },
  "WooCommerce": { image: "/woocommerce_logo.png" },
  "Elementor": { image: "/elementor_logo.png" },
  "ACF": {},
  "PHP": { Icon: SiPhp },
  "CPT": {},
  "Meta Pixel": { image: "/meta_logo.png" },
  "Google Analytics": { image: "/google_logo.png" },
  "MS Clarity": { image: "/clarity_logo.png" },
  "Zapier": { image: "/zapier_logo.png" },
  "Brevo": { image: "/brevo_logo.png" },
  "Next.js": { image: "/nextjs_logo.png" },
  "React": { image: "/react_logo.png" },
  "TypeScript": { image: "/typescript_logo.png" },
  "OpenAI API": { image: "/openai_logo.png" },
  "Node.js": { image: "/nodejs_logo.png" },
  "Express.js": { image: "/expressjs_logo.png" },
  "JWT": { image: "/jwt_logo.png" },
  "Passport.js": { image: "/passport_logo.png" },
  "SQL Server": { image: "/sqlserver_logo.png" },
  "Nodemailer": { image: "/nodemailer_logo.webp" },
  "MongoDB": { image: "/mongodb_logo.png" },
  "Handlebars": { image: "/handlebars_logo.webp" },
};

function TechPill({ name }: { name: string }) {
  const asset = TECH_ASSETS[name];
  return (
    <span className="flex items-center gap-1.5 pl-1.5 pr-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-200">
      {asset?.image ? (
        <img src={asset.image} alt={name} className="w-4 h-4 object-contain rounded-sm" />
      ) : asset?.Icon ? (
        <asset.Icon size={14} className="text-zinc-300" />
      ) : (
        <span className="w-4 h-4 flex items-center justify-center rounded-sm bg-linear-to-br from-cyan-400/30 to-violet-500/30 text-[8px] font-bold">
          {name.slice(0, 2).toUpperCase()}
        </span>
      )}
      {name}
    </span>
  );
}

export default function Projects({ ref }: any) {
  const { lang } = useLanguage();
  const t = translations[lang as keyof typeof translations];

  const projects = [
    {
      title: t.project6Title,
      descriptions: [t.project6Description, t.project6Description2],
      link: "https://cabarco.org",
      techs: ["WordPress", "Elementor", "WooCommerce", "ACF", "PHP", "CPT"],
    },
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
    <section id="projects" ref={ref} className="relative py-28 md:py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-cyan-300/80">
          {t.projectsEyebrow}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3">{t.projectsTitle}</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -4 }}
            className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col gap-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.08 }}
            viewport={{ once: true }}
          >
            <div className="h-1 w-14 rounded-full bg-linear-to-r from-cyan-400 to-violet-500" />

            <h3 className="text-xl font-semibold">{project.title}</h3>

            {project.descriptions.map((desc, j) => (
              <p key={j} className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
            ))}

            {project.links && (
              <ul className="text-zinc-400 text-sm space-y-1">
                {project.links.map((l) => (
                  <li key={l.url}>
                    • <a href={l.url} className="text-cyan-300 hover:text-cyan-200 hover:underline" target="_blank" rel="noopener noreferrer">{l.label}</a>
                  </li>
                ))}
              </ul>
            )}

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-300 hover:text-cyan-200 transition-colors w-fit"
            >
              {lang === "en" ? "Visit live site" : "Ver sitio en vivo"}
              <FaArrowUpRightFromSquare size={11} />
            </a>

            <div className="flex flex-wrap gap-2 mt-1">
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
