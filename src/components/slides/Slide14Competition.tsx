import SlideLayout from "../SlideLayout";
import { Check, Minus, X } from "lucide-react";

const features = [
  "End-to-End Platform",
  "AI Forecasting",
  "Digital Twins",
  "Marketplace",
  "Community Participation",
  "ESG / Compliance",
  "Multi-Jurisdiction",
  "Energy Tokenization",
  "Vendor Management",
  "Impact Calculator",
  "Settlement Layer",
  "API / Integrations",
];

const competitors = [
  { name: "EcoGridia", scores: [2,2,2,2,2,2,2,2,2,2,2,2], highlight: true },
  { name: "Aurora Solar", scores: [1,1,1,0,0,1,0,0,1,1,0,1], highlight: false },
  { name: "Arcadia", scores: [1,0,0,1,1,1,1,0,0,0,1,1], highlight: false },
  { name: "LevelTen", scores: [0,0,0,2,0,1,1,0,0,0,1,1], highlight: false },
  { name: "Omnidian", scores: [1,1,1,0,0,0,0,0,1,0,0,0], highlight: false },
];

const ScoreIcon = ({ score }: { score: number }) => {
  if (score === 2) return <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center"><Check className="w-4 h-4 text-primary" /></div>;
  if (score === 1) return <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center"><Minus className="w-4 h-4 text-muted-foreground" /></div>;
  return <div className="w-7 h-7 rounded-full bg-destructive/10 flex items-center justify-center"><X className="w-3.5 h-3.5 text-destructive/60" /></div>;
};

const Slide14Competition = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-16 py-14">
      <div className="flex items-center gap-4 mb-2 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
        <div className="section-line" />
        <h2 className="text-[44px] font-extrabold text-foreground leading-none">
          Competitive <span className="gradient-text">Comparison</span>
        </h2>
      </div>
      <p className="text-[20px] text-muted-foreground mb-6 ml-[60px] opacity-0 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
        The only full-stack platform for distributed clean energy
      </p>

      <div className="flex-1 rounded-2xl border border-border/40 bg-card overflow-hidden opacity-0 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b-2 border-border">
              <th className="py-4 px-5 text-[14px] font-bold text-muted-foreground uppercase tracking-wider w-[220px]">Feature</th>
              {competitors.map((c) => (
                <th key={c.name} className={`py-4 px-3 text-[14px] font-bold text-center uppercase tracking-wider ${c.highlight ? "text-primary bg-primary/[0.03]" : "text-foreground"}`}>
                  {c.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((f, fi) => (
              <tr key={f} className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                <td className="py-3 px-5 text-[14px] font-medium text-foreground">{f}</td>
                {competitors.map((c) => (
                  <td key={c.name} className={`py-3 px-3 text-center ${c.highlight ? "bg-primary/[0.02]" : ""}`}>
                    <div className="flex justify-center">
                      <ScoreIcon score={c.scores[fi]} />
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-border">
              <td className="py-4 px-5 text-[14px] font-bold text-foreground">Total Score</td>
              {competitors.map((c) => {
                const total = c.scores.reduce((a, b) => a + b, 0);
                return (
                  <td key={c.name} className={`py-4 px-3 text-center ${c.highlight ? "bg-primary/[0.03]" : ""}`}>
                    <span className={`text-[22px] font-extrabold ${c.highlight ? "gradient-text" : "text-foreground/70"}`}>{total}/24</span>
                  </td>
                );
              })}
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Legend */}
      <div className="flex gap-8 mt-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
        {[
          { icon: <Check className="w-3.5 h-3.5 text-primary" />, label: "Full Coverage", bg: "bg-primary/15" },
          { icon: <Minus className="w-3.5 h-3.5 text-muted-foreground" />, label: "Partial", bg: "bg-muted" },
          { icon: <X className="w-3 h-3 text-destructive/60" />, label: "None", bg: "bg-destructive/10" },
        ].map((l) => (
          <div key={l.label} className="flex items-center gap-2">
            <div className={`w-6 h-6 rounded-full ${l.bg} flex items-center justify-center`}>{l.icon}</div>
            <span className="text-[13px] text-muted-foreground">{l.label}</span>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default Slide14Competition;
