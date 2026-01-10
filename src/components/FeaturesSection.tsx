import { 
  Layers, 
  Zap, 
  Eye, 
  BarChart3, 
  Terminal, 
  Box 
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Multi-Model Ensemble",
    description: "Three specialized AI engines working in parallel, combining their unique perspectives for superior detection.",
  },
  {
    icon: Zap,
    title: "Real-Time Inference",
    description: "GPU-accelerated processing delivers results in seconds, not minutes. Analyze videos on-the-fly.",
  },
  {
    icon: Eye,
    title: "Explainable AI",
    description: "Grad-CAM heatmaps show exactly where anomalies were detected. See what the AI sees.",
  },
  {
    icon: BarChart3,
    title: "Probabilistic Trust Score",
    description: "Not just 'fake' or 'real' — get nuanced confidence levels with full model breakdown.",
  },
  {
    icon: Terminal,
    title: "Debug & Audit Logs",
    description: "Complete transparency with detailed inference logs for every analysis step.",
  },
  {
    icon: Box,
    title: "Modular Architecture",
    description: "Designed for scale. Add new models, swap engines, or deploy on any infrastructure.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-background to-background" />

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-glow opacity-50" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Capabilities</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Core Features
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Built for forensic-grade analysis with enterprise reliability.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card glow-border p-8 group hover:scale-[1.03] transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                {/* Glow on hover */}
                <div className="absolute inset-0 w-14 h-14 rounded-xl bg-primary/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
