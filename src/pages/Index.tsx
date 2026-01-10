import { Navbar, Footer } from "@/components/common";
import {
  HeroSection,
  ProblemSection,
  HowItWorksSection,
  FeaturesSection,
  AnalysisDashboard,
  ArchitectureSection,
  TechStackSection,
  CTASection,
} from "@/components/sections";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <section id="how-it-works">
          <HowItWorksSection />
        </section>
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="demo">
          <AnalysisDashboard />
        </section>
        <section id="architecture">
          <ArchitectureSection />
        </section>
        <TechStackSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
