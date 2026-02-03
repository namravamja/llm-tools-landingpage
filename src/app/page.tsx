import { GlassmorphismNav } from "@/src/components/layout/glassmorphism-nav"
import { HeroSection } from "@/src/components/sections/hero-section"
import { ProblemSolutionSection } from "@/src/components/sections/problem-solution-section"
import Aurora from "@/src/components/animations/Aurora"
import { FeaturesSection } from "@/src/components/sections/features-section"
import { AITeamSection } from "@/src/components/sections/ai-team-section"
import { TestimonialsSection } from "@/src/components/sections/testimonials-section"
import { ROICalculatorSection } from "@/src/components/sections/roi-calculator-section"
import { CTASection } from "@/src/components/sections/cta-section"
import { Footer } from "@/src/components/layout/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 w-full h-full">
          <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
        </div>
        <div className="relative z-10">
          <GlassmorphismNav />
          <HeroSection />
          <ProblemSolutionSection />
          <FeaturesSection />
          <AITeamSection />
          <TestimonialsSection />
          <ROICalculatorSection />
          <CTASection />
          <Footer />
        </div>
      </main>
    </div>
  )
}
