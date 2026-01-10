const techStack = [
  { name: "Google Cloud", category: "Infrastructure" },
  { name: "Gemini", category: "AI Model" },
  { name: "Vertex AI", category: "ML Platform" },
  { name: "FastAPI", category: "Backend" },
  { name: "Next.js", category: "Frontend" },
  { name: "PyTorch", category: "ML Framework" },
  { name: "CUDA", category: "GPU Acceleration" },
  { name: "PostgreSQL", category: "Database" },
];

const TechStackSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep to-background" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Built With</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4">
            Enterprise-Grade Tech Stack
          </h2>
        </div>

        {/* Tech Grid */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="glass-card px-6 py-4 rounded-xl border border-border/50 hover:border-primary/30 transition-all group hover:scale-105"
            >
              <div className="text-sm font-medium group-hover:text-primary transition-colors">
                {tech.name}
              </div>
              <div className="text-xs text-muted-foreground">{tech.category}</div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex justify-center gap-8 flex-wrap">
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-sm">99.9% Uptime SLA</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-sm">SOC 2 Compliant</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-sm">GDPR Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
