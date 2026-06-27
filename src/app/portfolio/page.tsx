"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CTAFooter } from "@/components/HomeSections";
import { X, ArrowUpRight } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  objective: string;
  result: string;
  techStack: string;
  gradient: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "01",
    title: "TropicAds Agency Scale-up",
    industry: "Adtech & Lead Generation",
    objective: "Establish a scalable inbound system targeting mid-market Shopify brands in the US.",
    result: "Generated 180+ qualified inbound leads in 60 days, yielding a 4.1x return on ad spend (ROAS).",
    techStack: "Meta Ads, CRM Workflows, Direct Response Copywriting",
    gradient: "from-purple-900 to-indigo-900",
  },
  {
    id: "02",
    title: "Perfume Brand Launch",
    industry: "E-Commerce & Cosmetics",
    objective: "Construct and run a conversion funnel for the new Jordan Luxe product launch.",
    result: "Scaled e-commerce monthly revenue by 320% within 3 months, sustaining a 3.8x purchase ROAS.",
    techStack: "Shopify CRO, Meta Ads, Klaviyo Email Automation",
    gradient: "from-rose-900 to-amber-900",
  },
  {
    id: "03",
    title: "Snapchat Campaign UAE",
    industry: "Direct-to-Consumer Retail",
    objective: "Scale young adult user acquisition for a lifestyle brand across the UAE.",
    result: "Reduced customer acquisition cost (CAC) by 42% while generating 2M+ video impressions.",
    techStack: "Snap Ads, Web Analytics, Creative Localization",
    gradient: "from-yellow-900 to-amber-950",
  },
  {
    id: "04",
    title: "Meta Ads Lead Generation Campaign",
    industry: "Professional Consulting",
    objective: "Configure a low-friction lead generation pipeline capturing high-net-worth real estate buyers.",
    result: "Lowered lead acquisition cost from $45 to $14, capturing 1,200+ high-intent leads in 45 days.",
    techStack: "Meta Lead Forms, Zapier Integrations, CRM Orchestration",
    gradient: "from-blue-900 to-cyan-900",
  },
  {
    id: "05",
    title: "Website Development Projects",
    industry: "Tech & Corporate Branding",
    objective: "Build high-speed landing nodes and headless frontends to improve checkout conversion rates.",
    result: "Boosted page loading speed by 70%, resulting in a 24% uplift in overall conversion rate.",
    techStack: "Next.js, Tailwind CSS, Framer Motion, Headless CMS",
    gradient: "from-teal-900 to-emerald-950",
  },
  {
    id: "06",
    title: "Client Case Studies",
    industry: "Coaching & B2B SaaS",
    objective: "Consult and build organic search pathways and local maps footprints.",
    result: "Ranked #1 for target organic terms in Kerala, expanding maps impressions by 250%.",
    techStack: "GMB Optimization, Content Hubs, Technical SEO Audit",
    gradient: "from-violet-950 to-indigo-950",
  },
];

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  return (
    <main className="relative min-h-screen bg-[#121212] text-white pt-32 overflow-x-hidden">
      {/* Hero Section */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto py-16 md:py-24">
        <span className="font-mono text-xs tracking-widest text-violet-400 uppercase block mb-4">
          {"// DIGITAL WORK"}
        </span>
        <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-none">
          Selected Work
        </h1>
        <p className="text-sm md:text-lg font-light text-gray-400 max-w-2xl leading-relaxed">
          Explore case studies and performance marketing reports from e-commerce launches, lead generation runs, and search engines SEO campaigns.
        </p>
      </section>

      {/* Grid Gallery */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedProject(project)}
              className="group p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden relative flex flex-col justify-between aspect-[4/3] cursor-pointer hover:border-violet-500/50 hover:shadow-[0_0_35px_rgba(139,92,246,0.12)] transition-all duration-500 interactive"
            >
              {/* Dynamic Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none blur-3xl`} />
              
              <div className="relative z-10 flex justify-between items-center mb-6">
                <span className="font-mono text-[10px] tracking-[0.2em] text-white/40">
                  {project.industry}
                </span>
                <span className="font-mono text-xs text-white/20 group-hover:text-violet-400 transition-colors">
                  {project.id}
                </span>
              </div>

              <div className="relative z-10 mt-auto">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors flex items-center">
                  {project.title}
                  <motion.span className="inline-block ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-violet-400" />
                  </motion.span>
                </h3>
                <p className="text-xs font-light text-gray-400 group-hover:text-gray-350 transition-colors leading-relaxed line-clamp-2">
                  {project.objective}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Full Screen Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl px-6 py-12"
          >
            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#18181b] border border-white/10 p-8 md:p-12 rounded-3xl w-full max-w-2xl relative shadow-[0_25px_60px_rgba(0,0,0,0.8)] max-h-[85vh] overflow-y-auto"
            >
              {/* Corner Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full border border-white/10 hover:bg-white/5 text-white/50 hover:text-white transition-colors interactive"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <span className="font-mono text-xs tracking-widest text-violet-400 uppercase block mb-3">
                {selectedProject.industry}
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-8 pr-12 leading-tight">
                {selectedProject.title}
              </h2>

              <div className="space-y-6 text-xs md:text-sm">
                <div>
                  <h4 className="font-mono tracking-wider text-white/40 uppercase mb-2">The Objective</h4>
                  <p className="font-light text-gray-300 leading-relaxed">{selectedProject.objective}</p>
                </div>
                
                <div className="border-t border-white/5 pt-6">
                  <h4 className="font-mono tracking-wider text-white/40 uppercase mb-2">The Result</h4>
                  <p className="font-light text-emerald-400 font-medium leading-relaxed">{selectedProject.result}</p>
                </div>

                <div className="border-t border-white/5 pt-6">
                  <h4 className="font-mono tracking-wider text-white/40 uppercase mb-2">Strategy & Tech Stack</h4>
                  <p className="font-mono text-violet-300 leading-relaxed text-[11px]">{selectedProject.techStack}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <CTAFooter />
    </main>
  );
}
