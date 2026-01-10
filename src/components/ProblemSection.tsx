import { AlertTriangle, Eye, Layers, Shield } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Hyper-Realistic Deepfakes",
    description: "AI-generated videos are now indistinguishable from reality, threatening trust in digital media.",
    stat: "500%",
    statLabel: "increase since 2023",
  },
  {
    icon: Eye,
    title: "Audio-Visual Mismatch",
    description: "Sophisticated attacks sync fake audio with manipulated video, bypassing simple detection.",
    stat: "72%",
    statLabel: "of fakes use audio sync",
  },
  {
    icon: Layers,
    title: "Single-Model Failure",
    description: "Individual AI detectors can be fooled by adversarial attacks designed to exploit their weaknesses.",
    stat: "34%",
    statLabel: "false negative rate",
  },
];

const ProblemSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-navy-deep" />
      
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-destructive/10 blur-[120px]" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">The Problem</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Why TRINETRA Exists
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            The digital deception landscape has evolved. Traditional detection methods can't keep up.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="glass-card glow-border p-8 group hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-destructive/10 border border-destructive/30 flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-shadow">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{problem.description}</p>

              {/* Stat */}
              <div className="pt-6 border-t border-border/50">
                <div className="text-2xl font-display font-bold text-destructive">{problem.stat}</div>
                <div className="text-sm text-muted-foreground">{problem.statLabel}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Solution Statement */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl glass-card border border-primary/30">
            <Shield className="w-8 h-8 text-primary" />
            <div className="text-left">
              <p className="font-display text-lg font-semibold text-foreground">
                "Single models fail. Consensus doesn't."
              </p>
              <p className="text-sm text-muted-foreground">TRINETRA's Multi-Model Approach</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
