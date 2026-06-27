import ScrollyCanvas from "@/components/ScrollyCanvas";
import {
  SelectedWorksPreview,
  ExpertiseSnapshot,
  FeaturedCaseStudies,
  CTAFooter,
} from "@/components/HomeSections";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#121212]">
      {/* Scroll-Linked Canvas Animation Sequence & Parallax Overlays */}
      <ScrollyCanvas />

      {/* Section 1: Selected Works Preview */}
      <SelectedWorksPreview />

      {/* Section 2: Expertise Snapshot */}
      <ExpertiseSnapshot />

      {/* Section 3: Featured Case Studies */}
      <FeaturedCaseStudies />
      
      {/* Section 4: CTA Footer */}
      <CTAFooter />
    </main>
  );
}
