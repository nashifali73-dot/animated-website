"use client";

import { motion } from "framer-motion";
import { CTAFooter } from "@/components/HomeSections";
import { ShieldCheck, Compass, Code, Layout, Cpu } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  bulletPoints: string[];
}

const servicesList: Service[] = [
  {
    id: "01",
    title: "Performance Marketing",
    description: "Executing high-ROI paid media strategies designed to scale conversions and acquisition channels.",
    icon: <ShieldCheck className="w-8 h-8 text-violet-400" />,
    bulletPoints: ["Meta Ads Management", "Google Ads Architecture", "Lead Generation Funnels", "Conversion Optimization"],
  },
  {
    id: "02",
    title: "SEO Growth",
    description: "Constructing localized and international organic search pathways that unlock high search impression volumes.",
    icon: <Compass className="w-8 h-8 text-violet-400" />,
    bulletPoints: ["Technical Website SEO Audits", "Local Google Business SEO", "Structured Schema Markup", "Content Engine Strategy"],
  },
  {
    id: "03",
    title: "Web Development",
    description: "Building fast, high-performance landing pages and scalable content systems focused on UI design and conversions.",
    icon: <Code className="w-8 h-8 text-violet-400" />,
    bulletPoints: ["Next.js React Implementations", "Headless/Custom WordPress Nodes", "Conversion Rate Optimization (CRO)", "High-Fidelity Interaction Motion"],
  },
  {
    id: "04",
    title: "Branding & Positioning",
    description: "Developing executive authority positioning structures and digital brand systems that establish market share.",
    icon: <Layout className="w-8 h-8 text-violet-400" />,
    bulletPoints: ["Brand Identity Frameworks", "PR & Outreach Strategy", "Consultant Authority Models", "Copywriting Directives"],
  },
  {
    id: "05",
    title: "Marketing Automation",
    description: "Configuring CRM systems, workflows, and automated email cycles to minimize friction and save hours of manual labor.",
    icon: <Cpu className="w-8 h-8 text-violet-400" />,
    bulletPoints: ["AI Content/Lead Workflows", "CRM Hubspot/Salesforce Integration", "Klaviyo Email Automation", "Lifecycle Retention Funnels"],
  },
];

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-[#121212] text-white pt-32 overflow-x-hidden">
      {/* Hero Section */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto py-16 md:py-24">
        <span className="font-mono text-xs tracking-widest text-violet-400 uppercase block mb-4">
          {"// CORE CAPABILITIES"}
        </span>
        <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-none">
          What I Build
        </h1>
        <p className="text-sm md:text-lg font-light text-gray-400 max-w-2xl leading-relaxed">
          I configure and scale digital assets, aligning performance engineering with creative strategy to drive measurable business outcomes.
        </p>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden relative flex flex-col justify-between hover:border-violet-500/50 hover:shadow-[0_0_35px_rgba(139,92,246,0.12)] hover:-translate-y-1 transition-all duration-500 interactive"
            >
              {/* Card Header */}
              <div>
                <div className="flex justify-between items-center mb-8">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <span className="font-mono text-xs text-white/20 group-hover:text-white/40 transition-colors">
                    {service.id}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-violet-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-xs md:text-sm font-light text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2 border-t border-white/5 pt-6 mt-auto">
                {service.bulletPoints.map((point) => (
                  <li key={point} className="flex items-center space-x-2.5 font-mono text-[10px] text-white/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <CTAFooter />
    </main>
  );
}
