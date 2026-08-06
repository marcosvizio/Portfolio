"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { SiPhp } from "react-icons/si";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../lib/translations";

type Skill = {
  name: string;
  image?: string;
  Icon?: React.ComponentType<{ size?: number; className?: string }>;
};

function SkillIcon({ skill }: { skill: Skill }) {
  if (skill.image) {
    return (
      <img
        src={skill.image}
        alt={skill.name}
        className="w-6 h-6 object-contain rounded-sm"
      />
    );
  }
  if (skill.Icon) {
    const Icon = skill.Icon;
    return <Icon size={22} className="text-zinc-200" />;
  }
  return (
    <span className="w-6 h-6 flex items-center justify-center rounded-md bg-linear-to-br from-cyan-400/30 to-violet-500/30 text-[10px] font-bold text-white">
      {skill.name.slice(0, 2).toUpperCase()}
    </span>
  );
}

export default forwardRef<HTMLElement>(function Skills(_props, ref) {
  const { lang } = useLanguage();
  const t = translations[lang as keyof typeof translations];

  const categories: { title: string; items: Skill[] }[] = [
    {
      title: t.skillsCatFrontend,
      items: [
        { name: "Next.js", image: "/nextjs_logo.png" },
        { name: "React", image: "/react_logo.png" },
        { name: "TypeScript", image: "/typescript_logo.png" },
      ],
    },
    {
      title: t.skillsCatBackend,
      items: [
        { name: "Node.js", image: "/nodejs_logo.png" },
        { name: "Express.js", image: "/expressjs_logo.png" },
        { name: "PHP", Icon: SiPhp },
        { name: "OpenAI API", image: "/openai_logo.png" },
      ],
    },
    {
      title: t.skillsCatDatabases,
      items: [
        { name: "MongoDB", image: "/mongodb_logo.png" },
        { name: "SQL Server", image: "/sqlserver_logo.png" },
      ],
    },
    {
      title: t.skillsCatCms,
      items: [
        { name: "WordPress", image: "/wordpress_blue_logo.png" },
        { name: "WooCommerce", image: "/woocommerce_logo.png" },
        { name: "Elementor", image: "/elementor_logo.png" },
        { name: "ACF" },
      ],
    },
    {
      title: t.skillsCatAuth,
      items: [
        { name: "JWT", image: "/jwt_logo.png" },
        { name: "Passport.js", image: "/passport_logo.png" },
        { name: "Nodemailer", image: "/nodemailer_logo.webp" },
        { name: "Handlebars", image: "/handlebars_logo.webp" },
      ],
    },
    {
      title: t.skillsCatMarketing,
      items: [
        { name: "Zapier", image: "/zapier_logo.png" },
        { name: "Brevo", image: "/brevo_logo.png" },
        { name: "Meta Pixel", image: "/meta_logo.png" },
        { name: "Google Analytics", image: "/google_logo.png" },
        { name: "MS Clarity", image: "/clarity_logo.png" },
      ],
    },
  ];

  return (
    <section id="skills" ref={ref} className="relative py-28 md:py-32 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-cyan-300/80">
          {t.skillsEyebrow}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3">{t.skillsTitle}</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            viewport={{ once: true }}
            className="glass-card glass-card-hover rounded-2xl p-6"
          >
            <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wide mb-4">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {cat.items.map((skill) => (
                <span
                  key={skill.name}
                  className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-200 hover:border-cyan-400/50 transition-colors"
                >
                  <SkillIcon skill={skill} />
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
});
