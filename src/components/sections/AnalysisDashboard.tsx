import { Play, Pause, Shield, AlertTriangle, CheckCircle, BarChart3, Upload, Cloud, Eye, Cpu, ShieldCheck, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";

const API_BASE = import.meta.env.VITE_API_URL || 'https://shrey5723-deep-fake-project.hf.space';

type AnalysisMode = 'cloud' | 'local' | 'gradcam' | 'master';

interface AnalysisResult {
  confidence_score: number;
  deepfake_score?: number;
  verdict_title?: string;
  visual_evidence?: string[];
  audio_evidence?: string[];
  fact_check_analysis?: string;
  video_url?: string;
  breakdown?: {
    api: number;
    heatmap: number;
    neural: number;
  };
}

const AnalysisDashboard = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [mode, setMode] = useState<AnalysisMode>('cloud');
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setResult(null);
      setError(null);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedFile) return;

    setIsAnalyzing(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("mode", mode);

    try {
      const endpoint = mode === 'master'
        ? `${API_BASE}/analyze_ensemble`
        : `${API_BASE}/analyze`;

      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();

      // Cache busting for video URL
      if (data.video_url) {
        data.video_url = `${data.video_url}?t=${new Date().getTime()}`;
      }

      setResult(data);
    } catch (err) {
      console.error("Analysis failed:", err);
      setError(err instanceof Error ? err.message : "Connection failed. Is the backend running?");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetAnalysis = () => {
    setResult(null);
    setSelectedFile(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const isFake = result ? result.confidence_score > 50 : false;
  const trustScore = result ? (100 - result.confidence_score) : 0;

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-deep/50 to-background" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Live Analysis</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Analysis Dashboard
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Upload a video for real-time deepfake forensic analysis.
          </p>
        </div>

        {/* Main Dashboard */}
        <div className="max-w-6xl mx-auto">
          <div className="glass-card glow-border p-6 rounded-2xl">

            {/* Upload & Mode Selection - Show when no result */}
            {!result && !isAnalyzing && (
              <div className="space-y-8">
                {/* Mode Selection */}
                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => setMode('cloud')}
                    className={`flex flex-col items-center gap-2 px-6 py-4 rounded-xl border-2 transition-all ${mode === 'cloud'
                      ? 'bg-primary/20 border-primary text-primary'
                      : 'border-muted hover:border-primary/50'
                      }`}
                  >
                    <Cloud className="w-6 h-6" />
                    <span className="text-sm font-medium">Cloud</span>
                  </button>

                  <button
                    onClick={() => setMode('local')}
                    className={`flex flex-col items-center gap-2 px-6 py-4 rounded-xl border-2 transition-all ${mode === 'local'
                      ? 'bg-primary/20 border-primary text-primary'
                      : 'border-muted hover:border-primary/50'
                      }`}
                  >
                    <Cpu className="w-6 h-6" />
                    <span className="text-sm font-medium">Neural</span>
                  </button>

                  <button
                    onClick={() => setMode('gradcam')}
                    className={`flex flex-col items-center gap-2 px-6 py-4 rounded-xl border-2 transition-all ${mode === 'gradcam'
                      ? 'bg-primary/20 border-primary text-primary'
                      : 'border-muted hover:border-primary/50'
                      }`}
                  >
                    <Eye className="w-6 h-6" />
                    <span className="text-sm font-medium">Heatmap</span>
                  </button>

                  <button
                    onClick={() => setMode('master')}
                    className={`flex flex-col items-center gap-2 px-8 py-4 rounded-xl border-2 transition-all ${mode === 'master'
                      ? 'bg-primary/20 border-primary text-primary'
                      : 'border-primary/50 hover:border-primary'
                      }`}
                  >
                    <ShieldCheck className="w-6 h-6" />
                    <span className="text-sm font-bold">Master Scan</span>
                  </button>
                </div>

                {/* File Upload */}
                <div className="flex flex-col items-center gap-6">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="video/*"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="video-upload"
                  />
                  <label
                    htmlFor="video-upload"
                    className="flex items-center gap-3 px-8 py-4 border-2 border-dashed border-primary/50 rounded-xl cursor-pointer hover:bg-primary/5 transition-all"
                  >
                    <Upload className="w-6 h-6 text-primary" />
                    <span className="text-foreground font-medium">
                      {selectedFile ? selectedFile.name : "Select Video File"}
                    </span>
                  </label>

                  {selectedFile && (
                    <Button
                      onClick={handleAnalyze}
                      size="lg"
                      className="px-12"
                    >
                      Start Analysis
                    </Button>
                  )}

                  {error && (
                    <div className="flex items-center gap-2 text-destructive">
                      <AlertTriangle className="w-5 h-5" />
                      <span>{error}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Loading State */}
            {isAnalyzing && (
              <div className="flex flex-col items-center justify-center py-20 gap-6">
                <Loader2 className="w-16 h-16 text-primary animate-spin" />
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Analyzing Video...</h3>
                  <p className="text-muted-foreground">This may take a minute for longer videos.</p>
                </div>
              </div>
            )}

            {/* Results Display */}
            {result && (
              <div className="grid lg:grid-cols-5 gap-6">
                {/* Video Player - 3 cols */}
                <div className="lg:col-span-3 rounded-xl bg-background/50 overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-border/50">
                    <span className="text-sm text-muted-foreground font-mono">
                      {selectedFile?.name || "video.mp4"}
                    </span>
                    <div className={`text-xs font-bold ${isFake ? 'text-destructive' : 'text-green-500'}`}>
                      {isFake ? 'MANIPULATED' : 'AUTHENTIC'}
                    </div>
                  </div>

                  <div className="relative aspect-video bg-navy-deep flex items-center justify-center">
                    {result.video_url ? (
                      <video
                        key={result.video_url}
                        src={result.video_url}
                        controls
                        autoPlay
                        loop
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="text-muted-foreground text-sm">
                        No video output for this mode
                      </div>
                    )}
                  </div>
                </div>

                {/* Analysis Panel - 2 cols */}
                <div className="lg:col-span-2 rounded-xl bg-background/50 p-6">
                  {/* Verdict */}
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${isFake
                      ? 'bg-destructive/10 border border-destructive/30'
                      : 'bg-green-500/10 border border-green-500/30'
                      }`}>
                      {isFake
                        ? <AlertTriangle className="w-4 h-4 text-destructive" />
                        : <CheckCircle className="w-4 h-4 text-green-500" />
                      }
                      <span className={`font-semibold ${isFake ? 'text-destructive' : 'text-green-500'}`}>
                        {isFake ? 'MANIPULATED' : 'AUTHENTIC'}
                      </span>
                    </div>
                  </div>

                  {/* Confidence Score */}
                  <div className="relative mx-auto w-40 h-40 mb-6">
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
                        stroke={isFake ? "hsl(var(--destructive))" : "hsl(142, 76%, 36%)"}
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={`${(isFake ? result.confidence_score : (100 - result.confidence_score)) * 2.83}, 283`}
                        className="transition-all duration-1000"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className={`text-4xl font-display font-bold ${isFake ? 'text-destructive' : 'text-green-500'}`}>
                        {isFake ? result.confidence_score : (100 - result.confidence_score)}%
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {isFake ? 'Fake Probability' : 'Authenticity'}
                      </span>
                    </div>
                  </div>

                  {/* Visual Evidence */}
                  {result.visual_evidence && result.visual_evidence.length > 0 && (
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Eye className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">Forensic Evidence</span>
                      </div>
                      <div className="bg-muted/30 rounded-lg p-3 space-y-2">
                        {result.visual_evidence.map((evidence, idx) => {
                          // Transform scores when authentic (100 - score)
                          let displayEvidence = evidence;
                          if (!isFake) {
                            // Match patterns like "15.62%" or "2%" and subtract from 100
                            displayEvidence = evidence.replace(/(\d+\.?\d*)%/g, (match, num) => {
                              const converted = (100 - parseFloat(num)).toFixed(2).replace(/\.00$/, '');
                              return `${converted}%`;
                            });
                            // Also update labels for clarity
                            displayEvidence = displayEvidence
                              .replace('Threat Level', 'Trust Level')
                              .replace('Confidence', 'Authenticity');
                          }
                          return (
                            <div key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-0.5">•</span>
                              <span>{displayEvidence}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {result.breakdown && (
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <BarChart3 className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">Model Breakdown</span>
                      </div>

                      {[
                        { name: "Cloud", score: result.breakdown.api },
                        { name: "Heatmap", score: result.breakdown.heatmap },
                        { name: "Neural", score: result.breakdown.neural },
                      ].map((model, index) => {
                        const rawScore = model.score;
                        const displayScore = isFake ? rawScore : (100 - rawScore);
                        const formattedScore = Number.isInteger(displayScore) ? displayScore : Number(displayScore.toFixed(2));

                        return (
                          <div key={index} className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">{model.name}</span>
                              <span className="text-foreground font-medium">{formattedScore}%</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-primary to-glow-secondary rounded-full transition-all duration-1000"
                                style={{ width: `${formattedScore}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Audio Evidence */}
                  {result.audio_evidence && result.audio_evidence.length > 0 && result.audio_evidence[0] !== "Ensemble Analysis" && (
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Play className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">Audio/Lip-Sync Analysis</span>
                      </div>
                      <div className="bg-muted/30 rounded-lg p-3 space-y-2">
                        {result.audio_evidence.map((evidence, idx) => (
                          <div key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-0.5">🔊</span>
                            <span>{evidence}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Fact Check */}
                  {result.fact_check_analysis && result.fact_check_analysis !== "Cross-verification complete." && (
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">Fact Check</span>
                      </div>
                      <div className="bg-muted/30 rounded-lg p-3">
                        <p className="text-xs text-muted-foreground">{result.fact_check_analysis}</p>
                      </div>
                    </div>
                  )}

                  {/* New Analysis Button */}
                  <div className="pt-4 border-t border-border/50">
                    <Button variant="outline" size="sm" className="w-full" onClick={resetAnalysis}>
                      New Analysis
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalysisDashboard;
