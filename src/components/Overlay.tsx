"use client";

import { MotionValue, motion, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
  isLoaded: boolean;
}

export default function Overlay({ scrollYProgress, isLoaded }: OverlayProps) {
  // Mapping scroll progress to opacity and vertical translation for Section 1 (0% to 15%)
  const opacity1 = useTransform(scrollYProgress, [0, 0.08, 0.15], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.08, 0.15], [0, 0, -40]);

  // Mapping for Section 2 (15% to 45% - peak at 30%)
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.45], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.45], [40, 0, 0, -40]);

  // Mapping for Section 3 (45% to 75% - peak at 60%)
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.75], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.75], [40, 0, 0, -40]);

  // Hide scroll indicator once the user scrolls past 5%
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const scrollIndicatorY = useTransform(scrollYProgress, [0, 0.05], [0, 10]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 select-none flex flex-col justify-between px-6 md:px-16 py-12">
      {/* Top Header/Nav Mock */}
      <motion.div 
        initial={{ opacity: 0, y: -15 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full flex justify-between items-center"
      >
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-white/50">
          NASHIF ALI // PORTFOLIO
        </span>
        <span className="font-mono text-xs tracking-wider text-violet-400 bg-violet-950/20 px-3 py-1 rounded-full border border-violet-500/10">
          AVAILABLE FOR PROJECTS
        </span>
      </motion.div>

      {/* Narratives Container */}
      <div className="relative flex-grow flex items-center justify-center">
        {/* Section 1: Center (0% Scroll) */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute flex flex-col items-center text-center max-w-2xl px-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="text-4xl md:text-7xl font-extrabold tracking-tight mb-4"
          >
            <span className="text-white">NASHIF ALI.</span>
            <br />
            <span className="text-gradient">GROWTH MARKETER.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
            className="text-sm md:text-base font-light text-gray-400 tracking-wide max-w-lg leading-relaxed"
          >
            Scaling luxury e-commerce brands and B2B SaaS companies through performance marketing, localized SEO, and high-converting acquisition funnels.
          </motion.p>
        </motion.div>

        {/* Section 2: Left-aligned (30% Scroll) */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute left-0 md:left-12 flex flex-col items-start text-left max-w-xl px-4"
        >
          <span className="font-mono text-xs tracking-widest text-violet-400 uppercase mb-3">
            {"// PERFORMANCE ENGINE"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white leading-tight">
            I drive organic growth & acquisition.
          </h2>
          <p className="text-sm md:text-base font-light text-gray-400 leading-relaxed">
            Growth isn&apos;t just about vanity metrics; it&apos;s about building sustainable revenue streams. I design custom conversion loops, scale paid acquisition channels, and optimize the customer lifecycle.
          </p>
        </motion.div>

        {/* Section 3: Right-aligned (60% Scroll) */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute right-0 md:right-12 flex flex-col items-end text-right max-w-xl px-4"
        >
          <span className="font-mono text-xs tracking-widest text-violet-400 uppercase mb-3">
            {"// STRATEGIC VISION"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white leading-tight">
            Fusing data analytics with creative campaigns.
          </h2>
          <p className="text-sm md:text-base font-light text-gray-400 leading-relaxed">
            Bridging the gap between tracking pixels and aesthetic brand communication. I specialize in optimizing conversion rate optimization (CRO) for shopify storefronts, B2B lead capture systems, and search visibility.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        style={{ opacity: scrollIndicatorOpacity, y: scrollIndicatorY }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
        className="w-full flex flex-col items-center justify-center"
      >
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30 mb-2">
          Scroll to begin
        </span>
        <div className="w-[20px] h-[34px] rounded-full border border-white/20 flex justify-center p-1.5">
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-1.5 rounded-full bg-violet-400"
          />
        </div>
      </motion.div>
    </div>
  );
}
