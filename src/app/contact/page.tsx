"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CTAFooter } from "@/components/HomeSections";
import { Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", projectType: "", budget: "", message: "" });
    }, 4000);
  };

  const handleFocus = (field: string) => setFocusedField(field);
  const handleBlur = () => setFocusedField(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="relative min-h-screen bg-[#121212] text-white pt-32 overflow-x-hidden">
      {/* Hero Section */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto py-16 md:py-20">
        <span className="font-mono text-xs tracking-widest text-violet-400 uppercase block mb-4">
          {"// ACQUISITION & ENQUIRY"}
        </span>
        <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-none mb-12">
          Let&apos;s Build
          <br />
          Something Great.
        </h1>
      </section>

      {/* Split Layout */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <span className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase block mb-4">
                CONTACT METRICS
              </span>
              <div className="space-y-4 text-sm md:text-base font-light text-gray-300">
                <p className="flex flex-col">
                  <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest mb-0.5">Direct Line</span>
                  <a href="mailto:contact@nashifali.com" className="hover:text-violet-400 transition-colors w-fit interactive">
                    contact@nashifali.com
                  </a>
                </p>
                <p className="flex flex-col">
                  <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest mb-0.5">Telephone</span>
                  <a href="tel:+910000000000" className="hover:text-violet-400 transition-colors w-fit interactive">
                    +91 (000) 000-0000
                  </a>
                </p>
                <p className="flex flex-col">
                  <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest mb-0.5">Location Coordinates</span>
                  <span className="text-gray-300">Kerala, India</span>
                </p>
              </div>
            </div>

            <div>
              <span className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase block mb-4">
                SOCIAL FOOTPRINTS
              </span>
              <div className="flex flex-col space-y-2 text-xs font-mono text-white/50">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors w-fit flex items-center space-x-1 interactive">
                  <span>LINKEDIN</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors w-fit flex items-center space-x-1 interactive">
                  <span>INSTAGRAM</span>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors w-fit flex items-center space-x-1 interactive">
                  <span>GITHUB</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Animated Form */}
          <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-md relative overflow-hidden">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="h-14 w-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  <span className="text-emerald-400 font-bold text-lg">✓</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Dispatched</h3>
                <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
                  Thank you, your parameters have been submitted. I will respond to your marketing request shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name field */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus("name")}
                    onBlur={handleBlur}
                    className={`w-full pt-6 pb-2 px-5 bg-black/30 border rounded-xl text-xs md:text-sm text-white placeholder-transparent focus:outline-none transition-all duration-300 ${
                      focusedField === "name"
                        ? "border-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                        : "border-white/10"
                    }`}
                  />
                  <label
                    htmlFor="name"
                    className={`absolute left-5 top-4 text-xs md:text-sm pointer-events-none transition-all duration-300 origin-left ${
                      focusedField === "name" || formData.name
                        ? "-translate-y-2.5 scale-75 text-violet-400"
                        : "text-white/40"
                    }`}
                  >
                    Your Name
                  </label>
                </div>

                {/* Email field */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus("email")}
                    onBlur={handleBlur}
                    className={`w-full pt-6 pb-2 px-5 bg-black/30 border rounded-xl text-xs md:text-sm text-white placeholder-transparent focus:outline-none transition-all duration-300 ${
                      focusedField === "email"
                        ? "border-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                        : "border-white/10"
                    }`}
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-5 top-4 text-xs md:text-sm pointer-events-none transition-all duration-300 origin-left ${
                      focusedField === "email" || formData.email
                        ? "-translate-y-2.5 scale-75 text-violet-400"
                        : "text-white/40"
                    }`}
                  >
                    Email Address
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Project Type Selection */}
                  <div className="relative">
                    <select
                      name="projectType"
                      id="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      onFocus={() => handleFocus("projectType")}
                      onBlur={handleBlur}
                      className={`w-full px-5 py-4 bg-black/30 border rounded-xl text-xs md:text-sm text-white focus:outline-none transition-all duration-300 appearance-none ${
                        focusedField === "projectType"
                          ? "border-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                          : "border-white/10"
                      }`}
                    >
                      <option value="" disabled className="bg-[#121212] text-white/40">Select Project Type</option>
                      <option value="ecommerce" className="bg-[#121212]">E-Commerce CRO & SEO</option>
                      <option value="leadgen" className="bg-[#121212]">Performance Marketing Campaign</option>
                      <option value="webdev" className="bg-[#121212]">Full Website Development</option>
                      <option value="brand" className="bg-[#121212]">Brand Authority Strategy</option>
                    </select>
                  </div>

                  {/* Budget selection */}
                  <div className="relative">
                    <select
                      name="budget"
                      id="budget"
                      required
                      value={formData.budget}
                      onChange={handleChange}
                      onFocus={() => handleFocus("budget")}
                      onBlur={handleBlur}
                      className={`w-full px-5 py-4 bg-black/30 border rounded-xl text-xs md:text-sm text-white focus:outline-none transition-all duration-300 appearance-none ${
                        focusedField === "budget"
                          ? "border-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                          : "border-white/10"
                      }`}
                    >
                      <option value="" disabled className="bg-[#121212] text-white/40">Select Budget Range</option>
                      <option value="3k-5k" className="bg-[#121212]">$3,000 - $5,000</option>
                      <option value="5k-10k" className="bg-[#121212]">$5,000 - $10,000</option>
                      <option value="10k-25k" className="bg-[#121212]">$10,000 - $25,000</option>
                      <option value="25k+" className="bg-[#121212]">$25,000+</option>
                    </select>
                  </div>
                </div>

                {/* Message field */}
                <div className="relative">
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus("message")}
                    onBlur={handleBlur}
                    className={`w-full pt-6 pb-2 px-5 bg-black/30 border rounded-xl text-xs md:text-sm text-white placeholder-transparent focus:outline-none transition-all duration-300 resize-none ${
                      focusedField === "message"
                        ? "border-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                        : "border-white/10"
                    }`}
                  />
                  <label
                    htmlFor="message"
                    className={`absolute left-5 top-4 text-xs md:text-sm pointer-events-none transition-all duration-300 origin-left ${
                      focusedField === "message" || formData.message
                        ? "-translate-y-2.5 scale-75 text-violet-400"
                        : "text-white/40"
                    }`}
                  >
                    Briefly describe your marketing objective...
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-white text-black hover:bg-violet-400 hover:text-white transition-all font-semibold text-xs tracking-widest uppercase flex items-center justify-center space-x-2 shadow-[0_4px_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(139,92,246,0.25)] interactive"
                >
                  <span>Initiate Strategy</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <CTAFooter />
    </main>
  );
}
