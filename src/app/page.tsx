import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#121212]">
      {/* Scroll-Linked Canvas Animation Sequence & Parallax Overlays */}
      <ScrollyCanvas />

      {/* Projects Grid Case Studies Section */}
      <div className="relative bg-[#121212] border-t border-white/5">
        <Projects />
      </div>
      
      {/* Sleek Minimalist Footer */}
      <footer className="w-full border-t border-white/5 bg-[#0a0a0a] py-8 text-center z-20 relative">
        <p className="font-mono text-[10px] tracking-[0.25em] text-white/25 uppercase">
          © {new Date().getFullYear()} NASHIF ALI // DESIGNED & DEVELOPED
        </p>
      </footer>
    </main>
  );
}
