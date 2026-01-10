import { Monitor, Server, Cloud, Eye, Brain, Scale, ShieldCheck } from "lucide-react";

const ArchitectureSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background to-navy-deep" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Under The Hood</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            System Architecture
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A distributed, GPU-accelerated pipeline built for enterprise scale.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-8 rounded-2xl">
            {/* Layers */}
            <div className="space-y-8">
              {/* Frontend Layer */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Monitor className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent data-flow" />
                <div className="glass-card px-6 py-3 rounded-xl border border-primary/20">
                  <span className="text-sm font-medium">React Frontend</span>
                  <span className="text-xs text-muted-foreground block">Next.js + Tailwind</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-primary/20" />
              </div>

              {/* Backend Aggregator */}
              <div className="flex items-center justify-center gap-4">
                <div className="glass-card px-8 py-4 rounded-xl border border-primary/30 glow-border">
                  <div className="flex items-center gap-3">
                    <Server className="w-6 h-6 text-primary" />
                    <div>
                      <span className="text-sm font-medium">Backend Aggregator</span>
                      <span className="text-xs text-muted-foreground block">FastAPI + AsyncIO</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrows to engines */}
              <div className="flex justify-center gap-8">
                <div className="w-px h-8 bg-gradient-to-b from-blue-500/50 to-blue-500/20 -rotate-45 origin-top" />
                <div className="w-px h-12 bg-gradient-to-b from-purple-500/50 to-purple-500/20" />
                <div className="w-px h-8 bg-gradient-to-b from-emerald-500/50 to-emerald-500/20 rotate-45 origin-top" />
              </div>

              {/* AI Engines */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="glass-card p-4 rounded-xl border border-blue-500/30 text-center group hover:border-blue-500/50 transition-colors">
                  <Cloud className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <span className="text-sm font-medium block">Cloud Reasoning</span>
                  <span className="text-xs text-muted-foreground">Gemini API</span>
                  <div className="mt-2 h-1 bg-blue-500/20 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-blue-500 animate-pulse" />
                  </div>
                </div>

                <div className="glass-card p-4 rounded-xl border border-purple-500/30 text-center group hover:border-purple-500/50 transition-colors">
                  <Eye className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <span className="text-sm font-medium block">Visual Cortex</span>
                  <span className="text-xs text-muted-foreground">CNN + CUDA</span>
                  <div className="mt-2 h-1 bg-purple-500/20 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-purple-500 animate-pulse animation-delay-200" />
                  </div>
                </div>

                <div className="glass-card p-4 rounded-xl border border-emerald-500/30 text-center group hover:border-emerald-500/50 transition-colors">
                  <Brain className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                  <span className="text-sm font-medium block">Neural Core</span>
                  <span className="text-xs text-muted-foreground">ViT + PyTorch</span>
                  <div className="mt-2 h-1 bg-emerald-500/20 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-emerald-500 animate-pulse animation-delay-400" />
                  </div>
                </div>
              </div>

              {/* Arrows merge */}
              <div className="flex justify-center gap-8">
                <div className="w-px h-8 bg-gradient-to-b from-blue-500/20 to-primary/50 rotate-45 origin-top" />
                <div className="w-px h-12 bg-gradient-to-b from-purple-500/20 to-primary/50" />
                <div className="w-px h-8 bg-gradient-to-b from-emerald-500/20 to-primary/50 -rotate-45 origin-top" />
              </div>

              {/* Consensus */}
              <div className="flex items-center justify-center gap-4">
                <div className="glass-card px-8 py-4 rounded-xl border border-primary/30 glow-border">
                  <div className="flex items-center gap-3">
                    <Scale className="w-6 h-6 text-primary" />
                    <div>
                      <span className="text-sm font-medium">Weighted Consensus</span>
                      <span className="text-xs text-muted-foreground block">Ensemble Algorithm</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Final Arrow */}
              <div className="flex justify-center">
                <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-primary" />
              </div>

              {/* Output */}
              <div className="flex items-center justify-center">
                <div className="relative glass-card px-10 py-5 rounded-2xl border border-primary/50 pulse-glow">
                  <div className="flex items-center gap-4">
                    <ShieldCheck className="w-10 h-10 text-primary" />
                    <div>
                      <span className="font-display text-xl font-bold block">Trust Score</span>
                      <span className="text-sm text-muted-foreground">Verified & Explainable</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
