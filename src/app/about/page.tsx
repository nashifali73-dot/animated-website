"use client";

import { motion } from "framer-motion";
import { CTAFooter } from "@/components/HomeSections";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2023",
    title: "Started Digital Marketing Journey",
    description: "Ventured into digital acquisition, studying algorithm dynamics, data attribution, and copywriting foundations.",
  },
  {
    year: "2024",
    title: "Performance Marketing Projects",
    description: "Executed high-ROI campaigns on Meta/Google Ads, refining tracking pixels and conversion rates for scaling brands.",
  },
  {
    year: "2025",
    title: "Agency Building",
    description: "Co-founded a growth collective, automating client lead acquisition and deploying technical SEO frameworks internationally.",
  },
  {
    year: "2026",
    title: "Building Premium Brands",
    description: "Fusing clean React/Next.js frontend development with creative direction and advanced growth strategies.",
  },
];

const skills = [
  "Meta Ads",
  "Google Ads",
  "SEO",
  "Brand Strategy",
  "Web Development",
  "AI Automation",
  "Performance Marketing",
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[#121212] text-white pt-32 overflow-x-hidden">
      {/* Hero Section */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto py-16 md:py-24">
        <span className="font-mono text-xs tracking-widest text-violet-400 uppercase block mb-4">
          {"// PROFILE"}
        </span>
        <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-16 leading-none">
          Nashif Ali
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
            Digital Strategist + Creative Builder
          </span>
        </h1>

        {/* Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left: Portrait Area / Ambient Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="aspect-[4/5] rounded-3xl border border-white/10 bg-gradient-to-tr from-violet-950/20 via-indigo-950/10 to-fuchsia-950/20 relative overflow-hidden flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_60%)]" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase">
              NA // GROWTH ARCHITECT
            </span>
          </motion.div>

          {/* Right: Story */}
          <div className="flex flex-col space-y-6 text-gray-300 font-light leading-relaxed text-sm md:text-base">
            <p>
              I bridge the gap between heavy technical execution and premium aesthetic brand design. My approach is centered around one metric: **sustainable, scalable growth**.
            </p>
            <p>
              With extensive experience spanning from performance marketing and data attribution model mapping to advanced next-generation web architectures, I build platforms that do not just look beautiful, but convert attention into capital.
            </p>
            <p>
              I leverage data science, search engines SEO optimization, paid acquisition setups, and highly responsive code to engineer authoritative brand positions and unlock scale potentials.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-[#0e0e0e] border-y border-white/5 py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-20">
            <span className="font-mono text-xs tracking-widest text-violet-400 uppercase block mb-3">
              {"// HISTORY"}
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              My Timeline
            </h2>
          </div>

          <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-16">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-6 md:pl-10"
              >
                {/* Timeline Dot centered on border axis */}
                <div className="absolute left-0 -translate-x-1/2 top-1.5 w-4 h-4 rounded-full bg-violet-500 border-4 border-[#0e0e0e] accent-glow" />
                
                <span className="font-mono text-xs text-violet-400 font-bold block mb-2">
                  {item.year}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm font-light text-gray-400 max-w-2xl leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto py-24">
        <div className="max-w-xl mb-16">
          <span className="font-mono text-xs tracking-widest text-violet-400 uppercase block mb-3">
            {"// EXPERTISE"}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-6 rounded-xl border border-white/5 bg-white/[0.01] hover:border-violet-500/30 hover:bg-white/[0.03] transition-all duration-300 text-center font-mono text-xs tracking-wider uppercase text-white/70 hover:text-white flex items-center justify-center interactive"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Personal Philosophy Section */}
      <section className="bg-[#0e0e0e] border-t border-white/5 px-6 md:px-16 py-32 text-center relative z-20">
        <div className="max-w-4xl mx-auto">
          <span className="font-mono text-xs tracking-widest text-violet-400 uppercase block mb-8">
            {"// PHILOSOPHY"}
          </span>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl md:text-4xl font-extrabold text-white leading-relaxed tracking-tight"
          >
            &ldquo;Simplify the user journey, structure the data points, and configure the funnel path until conversion becomes inevitable.&rdquo;
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <CTAFooter />
    </main>
  );
}
