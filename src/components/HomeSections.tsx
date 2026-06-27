"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Award, Zap, TrendingUp, Cpu } from "lucide-react";
import Link from "next/link";

interface ProjectPreview {
  title: string;
  category: string;
  year: string;
  imgUrl: string;
  link: string;
  color: string;
}

const previewProjects: ProjectPreview[] = [
  {
    title: "Jordan Luxe Perfumes",
    category: "E-Commerce CRO & Ads Strategy",
    year: "2026",
    imgUrl: "from-purple-900 to-indigo-900",
    link: "/portfolio",
    color: "bg-purple-950/20",
  },
  {
    title: "Liquid B2B SaaS",
    category: "Paid Acquisition Funnels",
    year: "2025",
    imgUrl: "from-blue-900 to-cyan-900",
    link: "/portfolio",
    color: "bg-blue-950/20",
  },
  {
    title: "Global Translation SEO",
    category: "International Growth Strategy",
    year: "2025",
    imgUrl: "from-emerald-900 to-teal-900",
    link: "/portfolio",
    color: "bg-emerald-950/20",
  },
];

interface Expertise {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

const expertises: Expertise[] = [
  {
    title: "Performance Marketing",
    description: "Architecting scale channels on Meta and Google with data-driven funnel optimization.",
    icon: <Award className="w-6 h-6 text-violet-400" />,
    tags: ["Paid Ads", "CRO", "Funnel Mapping"],
  },
  {
    title: "Web Development",
    description: "Developing modern Next.js apps, headless architectures, and high-converting WordPress nodes.",
    icon: <Cpu className="w-6 h-6 text-violet-400" />,
    tags: ["React/Next.js", "WordPress", "Animation"],
  },
  {
    title: "SEO Strategy",
    description: "Constructing localized, technical search frameworks that index high-volume search metrics.",
    icon: <TrendingUp className="w-6 h-6 text-violet-400" />,
    tags: ["Technical SEO", "Multilingual", "Content Hubs"],
  },
  {
    title: "Brand Growth",
    description: "Fusing PR positioning and data validation to design authoritative brand footprints.",
    icon: <Zap className="w-6 h-6 text-violet-400" />,
    tags: ["Positioning", "Outreach", "Marketing Strategy"],
  },
];

export function SelectedWorksPreview() {
  return (
    <section className="bg-[#121212] px-6 md:px-16 py-24 w-full border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <span className="font-mono text-xs tracking-widest text-violet-400 uppercase block mb-3">
              {"// PORTFOLIO PREVIEW"}
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              Selected Creations
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="group flex items-center space-x-2 font-mono text-xs text-white/50 hover:text-white transition-colors mt-4 md:mt-0 interactive"
          >
            <span>View All Works</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col interactive"
            >
              <Link href={project.link} className="block overflow-hidden rounded-2xl aspect-[4/3] bg-gradient-to-br border border-white/10 relative">
                {/* Visual placeholder for portfolio card */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.imgUrl} opacity-40 group-hover:scale-105 transition-transform duration-700 ease-out`} />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors duration-500">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
                    View Case Study
                  </span>
                </div>
              </Link>
              
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-light mt-1">
                    {project.category}
                  </p>
                </div>
                <span className="font-mono text-xs text-white/30">{project.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ExpertiseSnapshot() {
  return (
    <section className="bg-[#0e0e0e] px-6 md:px-16 py-24 w-full relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-16">
          <span className="font-mono text-xs tracking-widest text-violet-400 uppercase block mb-3">
            {"// SKILLS SNAPSHOT"}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Core Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertises.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              // Floating animation: translate Y slightly differently to create stagger depth
              className={`group flex flex-col justify-between p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-violet-500/30 hover:bg-white/[0.04]`}
              style={{ y: i % 2 === 0 ? -10 : 10 }}
            >
              <div>
                <div className="mb-6 p-3 bg-white/5 border border-white/5 rounded-xl w-fit group-hover:scale-110 transition-transform duration-500">
                  {exp.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                  {exp.title}
                </h3>
                <p className="text-xs font-light text-gray-400 leading-relaxed mb-6">
                  {exp.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] tracking-wider text-white/50 bg-white/5 px-2 py-0.5 rounded border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedCaseStudies() {
  return (
    <section className="bg-[#121212] px-6 md:px-16 py-24 w-full relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-16">
          <span className="font-mono text-xs tracking-widest text-violet-400 uppercase block mb-3">
            {"// EDITORIAL FEATURE"}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            High-Impact Insights
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl border border-white/10 overflow-hidden bg-gradient-to-r from-violet-950/20 to-fuchsia-950/20 p-8 md:p-16 flex flex-col justify-between aspect-[21/9] min-h-[300px]"
        >
          <div className="max-w-xl">
            <span className="font-mono text-[10px] tracking-[0.2em] text-violet-400 uppercase mb-3 block">
              FEATURED STUDY // 2026
            </span>
            <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-4 leading-tight tracking-tight">
              Scaling Jordan Luxe Perfumes to a 3.2x Revenue Multiple
            </h3>
            <p className="text-xs md:text-sm font-light text-gray-400 leading-relaxed mb-8">
              A comprehensive execution involving technical conversion rate optimization (Shopify checkout), localized Search Engine Optimization (SEO), and dynamic audience targeting logic on Meta/Google Ads networks.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black font-semibold text-xs hover:bg-violet-400 hover:text-white transition-all interactive"
            >
              Read Full Strategy
            </Link>
            <div className="flex space-x-6 text-white/30 font-mono text-[10px] tracking-wider hidden sm:flex">
              <span>SEO</span>
              <span>•</span>
              <span>PAID ADS</span>
              <span>•</span>
              <span>CRO</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function CTAFooter() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#0a0a0a] py-16 px-6 md:px-16 text-center z-20 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-left md:text-left">
        <div className="max-w-md">
          <Link href="/" className="font-mono text-xs tracking-[0.3em] font-extrabold text-white uppercase block mb-3">
            NASHIF ALI
          </Link>
          <p className="text-xs font-light text-gray-500 leading-relaxed">
            A premium portfolio fusing conversion-driven performance marketing with clean interactive user interfaces.
          </p>
        </div>

        <div className="flex flex-col md:items-end gap-3 text-left md:text-right">
          <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/30 block">
            Navigation Link Options
          </span>
          <div className="flex flex-wrap gap-4 text-xs font-mono text-white/50">
            <Link href="/" className="hover:text-violet-400 transition-colors interactive">Home</Link>
            <Link href="/about" className="hover:text-violet-400 transition-colors interactive">About</Link>
            <Link href="/services" className="hover:text-violet-400 transition-colors interactive">Services</Link>
            <Link href="/portfolio" className="hover:text-violet-400 transition-colors interactive">Portfolio</Link>
            <Link href="/contact" className="hover:text-violet-400 transition-colors interactive">Contact</Link>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-mono text-[9px] tracking-[0.2em] text-white/20 uppercase">
          © {new Date().getFullYear()} NASHIF ALI // DESIGNED & DEVELOPED
        </p>
        <div className="flex space-x-6 text-[10px] font-mono text-white/30">
          <a href="https://linkedin.com" className="hover:text-white transition-colors interactive">LINKEDIN</a>
          <a href="https://github.com" className="hover:text-white transition-colors interactive">GITHUB</a>
          <a href="https://instagram.com" className="hover:text-white transition-colors interactive">INSTAGRAM</a>
        </div>
      </div>
    </footer>
  );
}
