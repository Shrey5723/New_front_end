import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-navy-deep" />

      {/* Glowing Orbs */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] -translate-y-1/2 rounded-full bg-primary/10 blur-[150px] animate-glow-pulse" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] -translate-y-1/2 rounded-full bg-secondary/10 blur-[120px] animate-glow-pulse animation-delay-400" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 mb-8 pulse-glow">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-10 h-10 text-primary"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {/* Third Eye Symbol */}
            <circle cx="12" cy="12" r="3" className="fill-primary/30" />
            <ellipse cx="12" cy="12" rx="9" ry="5" />
            <circle cx="12" cy="12" r="1.5" className="fill-primary" />
          </svg>
        </div>

        {/* Headline */}
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
          <span className="text-foreground">Truth needs more than</span>
          <br />
          <span className="text-gradient">one perspective.</span>
        </h2>

        {/* Subtext */}
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Join the fight against digital deception. Experience multi-model AI forensics today.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="xl">
            Try TRINETRA
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Trust Note */}
        <p className="mt-8 text-sm text-muted-foreground">
          No credit card required • Free tier available • Enterprise plans
        </p>
      </div>
    </section>
  );
};

export default CTASection;
