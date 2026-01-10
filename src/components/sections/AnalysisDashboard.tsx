import { Play, Pause, Shield, AlertTriangle, CheckCircle, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const modelResults = [
  { name: "Cloud Reasoning", confidence: 96.2, status: "authentic" },
  { name: "Visual Cortex", confidence: 91.8, status: "authentic" },
  { name: "Neural Core", confidence: 94.3, status: "authentic" },
];

const AnalysisDashboard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [trustScore, setTrustScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrustScore(prev => {
        if (prev >= 94.1) return 94.1;
        return prev + 1.5;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-deep/50 to-background" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Live Experience</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Analysis Dashboard
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Real-time forensic analysis with complete transparency.
          </p>
        </div>

        {/* Dashboard */}
        <div className="max-w-6xl mx-auto">
          <div className="glass-card glow-border p-2 rounded-2xl">
            <div className="grid lg:grid-cols-5 gap-2">
              {/* Video Player - 3 cols */}
              <div className="lg:col-span-3 rounded-xl bg-background/50 overflow-hidden">
                {/* Video Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-border/50">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-sm text-muted-foreground font-mono">sample_video.mp4</span>
                  <div className="text-xs text-primary">ANALYZING</div>
                </div>

                {/* Video Area */}
                <div className="relative aspect-video bg-navy-deep">
                  {/* Scanning Effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="scan-line" />
                  </div>

                  {/* Face Grid Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-48 h-64 border-2 border-primary/50 rounded-lg">
                      {/* Corner Markers */}
                      <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-primary" />
                      <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-primary" />
                      <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-primary" />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-primary" />
                      
                      {/* Grid Lines */}
                      <div className="absolute inset-4 grid grid-cols-3 grid-rows-4 gap-px opacity-30">
                        {Array.from({ length: 12 }).map((_, i) => (
                          <div key={i} className="border border-primary/30" />
                        ))}
                      </div>

                      {/* Status */}
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <span className="text-xs text-primary font-mono">FACE_DETECTED: 1</span>
                      </div>
                    </div>
                  </div>

                  {/* Heatmap Overlay Preview */}
                  <div className="absolute bottom-4 left-4 w-24 h-16 rounded border border-primary/30 bg-gradient-to-tr from-green-500/30 via-yellow-500/30 to-red-500/30 flex items-center justify-center">
                    <span className="text-[10px] text-foreground/70 font-mono">GRAD-CAM</span>
                  </div>
                </div>

                {/* Video Controls */}
                <div className="px-4 py-3 border-t border-border/50">
                  <div className="flex items-center gap-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="text-primary"
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </Button>
                    <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">00:42 / 01:24</span>
                  </div>
                </div>
              </div>

              {/* Analysis Panel - 2 cols */}
              <div className="lg:col-span-2 rounded-xl bg-background/50 p-6">
                {/* Verdict */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-green-500 font-semibold">AUTHENTIC</span>
                  </div>
                </div>

                {/* Trust Score Meter */}
                <div className="relative mx-auto w-40 h-40 mb-6">
                  {/* Background Ring */}
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      className="text-muted"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${trustScore * 2.83}, 283`}
                      className="transition-all duration-300"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--glow-secondary))" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Score Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-display font-bold text-gradient">
                      {trustScore.toFixed(1)}%
                    </span>
                    <span className="text-xs text-muted-foreground">Trust Score</span>
                  </div>
                </div>

                {/* Model Breakdown */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Model Breakdown</span>
                  </div>
                  
                  {modelResults.map((model, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{model.name}</span>
                        <span className="text-foreground font-medium">{model.confidence}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-glow-secondary rounded-full transition-all duration-1000"
                          style={{ width: `${model.confidence}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="mt-6 pt-6 border-t border-border/50">
                  <Button variant="outline" size="sm" className="w-full">
                    View Full Report
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalysisDashboard;
