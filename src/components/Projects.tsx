"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

// Custom GitHub icon to avoid brand icon resolution issues in modern Lucide packages
const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  liveLink: string;
  githubLink: string;
  gradient: string;
}

const projects: Project[] = [
  {
    title: "Jordan Luxe Perfumes",
    category: "E-COMMERCE GROWTH & CRO",
    description: "Scaled monthly recurring revenue for a luxury fragrance brand by 3.2x. Optimized Shopify cart funnel paths and ran high-converting Meta Ads campaigns.",
    tags: ["Paid Media", "Shopify CRO", "A/B Testing", "Meta Ads"],
    liveLink: "#",
    githubLink: "#",
    gradient: "from-violet-600/20 to-fuchsia-600/20",
  },
  {
    title: "Liquid Business",
    category: "B2B SaaS ACQUISITION",
    description: "Designed a multi-channel inbound strategy combining localized SEO models and LinkedIn automation scripts to capture high-value corporate accounts.",
    tags: ["B2B Strategy", "Lead Gen", "Cold Email", "Web Analytics"],
    liveLink: "#",
    githubLink: "#",
    gradient: "from-blue-600/20 to-cyan-600/20",
  },
  {
    title: "Translation Localization",
    category: "MULTILINGUAL SEO STRATEGY",
    description: "Engineered international content marketing hubs and structured schema markups, scaling organic search impressions by 180% across 5 countries.",
    tags: ["SEO Optimization", "Content Hubs", "Schema Markup", "SEM"],
    liveLink: "#",
    githubLink: "#",
    gradient: "from-emerald-600/20 to-teal-600/20",
  },
  {
    title: "Growth Architecture",
    category: "PERSONAL BRAND CAMPAIGNS",
    description: "Formulated PR, authority positioning strategies, and editorial placements for consultants, yielding a 65% increase in high-intent inbound inquiries.",
    tags: ["PR & Outreach", "Brand Position", "Social Strategy", "Copywriting"],
    liveLink: "#",
    githubLink: "#",
    gradient: "from-amber-600/20 to-rose-600/20",
  },
];

export default function Projects() {
  return (
    <section className="relative z-20 bg-[#121212] px-6 md:px-16 py-24 md:py-32 w-full max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20">
        <div className="max-w-xl">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs tracking-widest text-violet-400 uppercase block mb-3"
          >
            {"// CASE STUDIES"}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Selected Marketing Campaigns.
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm md:text-base font-light text-gray-400 max-w-md mt-4 md:mt-0 leading-relaxed"
        >
          A selection of campaigns that combine data analytics, performance engineering, and conversion rate optimization to scale brand equity.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col justify-between p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-violet-500/50 hover:shadow-[0_0_35px_rgba(139,92,246,0.12)] hover:-translate-y-1"
          >
            {/* Ambient Background Gradient (Visible on Hover) */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-3xl`} />
            
            <div>
              {/* Category & Links Header */}
              <div className="flex justify-between items-center mb-6">
                <span className="font-mono text-[10px] tracking-[0.2em] text-white/40 group-hover:text-white/60 transition-colors">
                  {project.category}
                </span>
                <div className="flex space-x-3 pointer-events-auto">
                  <a
                    href={project.githubLink}
                    className="p-1.5 rounded-full border border-white/10 bg-black/20 text-white/50 hover:text-white hover:border-white/30 transition-all"
                    title="View Strategy"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveLink}
                    className="p-1.5 rounded-full border border-white/10 bg-black/20 text-white/50 hover:text-white hover:border-white/30 transition-all"
                    title="Live Site"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-violet-300 transition-colors mb-3 flex items-center">
                {project.title}
                <motion.span className="inline-block ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 text-violet-400" />
                </motion.span>
              </h3>
              
              <p className="text-sm font-light text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed mb-8">
                {project.description}
              </p>
            </div>

            {/* Tech Tags Footer */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] tracking-wider text-white/60 bg-white/5 px-2.5 py-1 rounded-md border border-white/5 group-hover:border-white/10 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Info / Contact Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-24 md:mt-32 p-8 md:p-12 rounded-3xl border border-white/5 bg-gradient-to-r from-white/[0.02] to-violet-500/[0.02] backdrop-blur-sm flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8"
      >
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Let&apos;s create something together.</h3>
          <p className="text-sm font-light text-gray-400 max-w-md leading-relaxed">
            I am always open to exploring growth strategy partnerships, performance consulting roles, and scaling luxury or SaaS brands.
          </p>
        </div>
        <a
          href="mailto:contact@nashifali.com"
          className="relative inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-violet-400 hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:-translate-y-0.5"
        >
          Get In Touch
        </a>
      </motion.div>
    </section>
  );
}
