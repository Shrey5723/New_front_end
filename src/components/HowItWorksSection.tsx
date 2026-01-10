import { Upload, Cpu, Scale, ShieldCheck, Cloud, Eye, Brain } from "lucide-react";

const engines = [
  {
    icon: Cloud,
    name: "Cloud Reasoning",
    tech: "Gemini",
    description: "Semantic & contextual analysis",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Eye,
    name: "Visual Cortex",
    tech: "CNN + Grad-CAM",
    description: "Pixel-level facial artifacts",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Brain,
    name: "Neural Core",
    tech: "Vision Transformer",
    description: "Temporal & structural analysis",
    color: "from-emerald-500 to-teal-500",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] translate-x-1/2 rounded-full bg-primary/10 blur-[150px]" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] -translate-x-1/2 rounded-full bg-secondary/10 blur-[100px]" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">The Process</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            How TRINETRA Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A sophisticated pipeline that combines multiple AI perspectives for unmatched accuracy.
          </p>
        </div>

        {/* Pipeline Visualization */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection Lines */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block" />
          
          {/* Steps */}
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Step 1: Upload */}
            <div className="text-center group">
              <div className="relative mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
                <Upload className="w-8 h-8 text-primary" />
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">1</div>
              </div>
              <h4 className="font-display font-semibold mb-2">Upload Video</h4>
              <p className="text-sm text-muted-foreground">Any format, any length</p>
            </div>

            {/* Step 2: AI Engines */}
            <div className="lg:col-span-3">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
                  <Cpu className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">Parallel AI Analysis</span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                {engines.map((engine, index) => (
                  <div
                    key={index}
                    className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300"
                  >
                    {/* Animated Ring */}
                    <div className="relative mx-auto w-16 h-16 mb-4">
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${engine.color} opacity-20 blur-md group-hover:opacity-40 transition-opacity`} />
                      <div className="relative w-full h-full rounded-full bg-card border border-border flex items-center justify-center">
                        <engine.icon className="w-7 h-7 text-foreground" />
                      </div>
                      {/* Pulse Ring */}
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${engine.color} opacity-0 group-hover:opacity-30 animate-ping`} />
                    </div>
                    
                    <h4 className="font-display font-semibold mb-1">{engine.name}</h4>
                    <p className="text-xs text-primary mb-2">{engine.tech}</p>
                    <p className="text-sm text-muted-foreground">{engine.description}</p>
                  </div>
                ))}
              </div>

              {/* Data Flow Arrows */}
              <div className="flex justify-center mt-6 gap-2">
                <div className="h-8 w-px bg-gradient-to-b from-primary/50 to-transparent" />
                <div className="h-8 w-px bg-gradient-to-b from-secondary/50 to-transparent" />
                <div className="h-8 w-px bg-gradient-to-b from-emerald-500/50 to-transparent" />
              </div>
            </div>

            {/* Step 3: Consensus */}
            <div className="text-center group">
              <div className="relative mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center mb-4 group-hover:shadow-glow-lg transition-shadow">
                <Scale className="w-8 h-8 text-primary" />
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">3</div>
              </div>
              <h4 className="font-display font-semibold mb-2">Consensus</h4>
              <p className="text-sm text-muted-foreground">Weighted algorithm</p>
            </div>
          </div>

          {/* Final Output */}
          <div className="mt-12 flex justify-center">
            <div className="glass-card glow-border px-8 py-6 flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center pulse-glow">
                <ShieldCheck className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-left">
                <h4 className="font-display text-2xl font-bold">Trust Score</h4>
                <p className="text-muted-foreground">Explainable, weighted, verifiable</p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-display font-bold text-gradient">94.7%</div>
                <div className="text-sm text-primary">Authentic</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
