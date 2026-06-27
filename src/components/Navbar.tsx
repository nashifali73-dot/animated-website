"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, x: "-50%" }}
        animate={{ y: 0, x: "-50%" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "center" }}
        className={`fixed left-1/2 z-40 w-[90%] md:w-[85%] max-w-4xl transition-all duration-500 ${
          scrolled
            ? "top-4 bg-[#121212]/60 border border-white/10 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.6)] py-2.5 px-6 rounded-full"
            : "top-8 bg-transparent border border-white/5 py-4 px-8 rounded-2xl"
        } backdrop-blur-lg flex items-center justify-between`}
      >
        {/* Logo */}
        <Link href="/" className="font-mono text-xs tracking-[0.3em] font-extrabold text-white interactive">
          NA<span className="text-violet-400">.</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 relative">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-4 py-2 font-mono text-[11px] tracking-widest uppercase transition-colors duration-300 interactive ${
                  isActive ? "text-white" : "text-white/50 hover:text-white/80"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-white/5 border border-white/10 rounded-full z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1 text-white/70 hover:text-white transition-colors interactive"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.header>

      {/* Mobile Slide-Down Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-30 bg-[#121212]/95 backdrop-blur-xl flex flex-col justify-center px-8"
          >
            <nav className="flex flex-col space-y-6 text-left">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <motion.div
                    key={item.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Link
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`font-mono text-xl tracking-[0.2em] uppercase font-light block ${
                        isActive ? "text-violet-400 font-medium" : "text-white/60"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
