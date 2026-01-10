import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import AnalysisDashboard from "@/components/AnalysisDashboard";
import ArchitectureSection from "@/components/ArchitectureSection";
import TechStackSection from "@/components/TechStackSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

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
