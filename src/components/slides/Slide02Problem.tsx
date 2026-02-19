import SlideLayout from "../SlideLayout";
import { useState } from "react";
import { DollarSign, FileCheck, Blocks, Server, Coins, Activity, ChevronRight, X } from "lucide-react";

const problems = [
  {
    num: "01",
    icon: DollarSign,
    title: "Rising & Volatile Energy Costs",
    stat: "15–25%",
    statLabel: "US price increase (3yr)",
    preview: "US commercial electricity prices increased ~15–25% in the past 3 years",
    bullets: [
      "US commercial electricity prices increased ~15–25% in the past 3 years",
      "Industrial facilities spend $500K–$5M annually on electricity",
      "Data centers consume 4–5% of total US electricity (projected 8–10% by 2030)",
      "AI workloads increase power demand by 2–3x",
    ],
    impact: ["Margin compression", "Grid strain", "CFO pressure to reduce OpEx"],
  },
  {
    num: "02",
    icon: FileCheck,
    title: "ESG & SEC Compliance Pressure",
    stat: "10K+",
    statLabel: "US companies impacted",
    preview: "10,000+ US companies impacted by climate disclosure expectations",
    bullets: [
      "10,000+ US companies impacted by climate disclosure expectations",
      "3,000+ public companies preparing for SEC reporting",
      "60% of mid-market firms lack automated carbon tracking",
    ],
    impact: ["Legal exposure", "Investor scrutiny", "Supply chain pressure"],
  },
  {
    num: "03",
    icon: Blocks,
    title: "Fragmented Renewable Ecosystem",
    stat: "6–9 mo",
    statLabel: "avg project delay",
    preview: "Solar EPCs, consultants, carbon brokers operate in silos across 3–5 vendors",
    bullets: [
      "Solar EPCs, consultants, carbon brokers operate separately",
      "70% of projects require coordination across 3–5 vendors",
      "Average project delay: 6–9 months",
    ],
    impact: ["Cost overruns", "Underperformance", "Project abandonment"],
  },
  {
    num: "04",
    icon: Server,
    title: "DC Renewable Procurement",
    stat: "2x",
    statLabel: "DC demand doubling",
    preview: "Hyperscalers committed to 100% renewable energy (RE100), demand set to double",
    bullets: [
      "Hyperscalers committed to 100% renewable energy (RE100)",
      "Data center electricity demand expected to double regionally",
      "Renewable PPAs and REC procurement highly complex",
    ],
    impact: ["Renewable gap", "Reputation risk", "ESG scrutiny"],
  },
  {
    num: "05",
    icon: Coins,
    title: "Unmonetized RECs (Leakage)",
    stat: "$1–2B",
    statLabel: "US REC market/yr",
    preview: "Thousands of small installations don't actively trade RECs — 10–20% revenue unused",
    bullets: [
      "US REC market size: $1–2B annually",
      "Thousands of small installations don't actively trade RECs",
      "10–20% potential renewable revenue often unused",
    ],
    impact: ["Reduced ROI", "Poor visibility", "Missed funding"],
  },
  {
    num: "06",
    icon: Activity,
    title: "No Real-Time Energy Intelligence",
    stat: "20–30%",
    statLabel: "solar underperformance",
    preview: "20–30% of installed solar underperforms without monitoring or analytics",
    bullets: [
      "20–30% of installed solar underperforms without monitoring",
      "50% of mid-market firms lack real-time energy analytics",
      "Data center uptime & optimization critical to SLAs",
    ],
    impact: ["Lost savings", "Unnoticed failures", "Poor ROI measurement"],
  },
];

const stats = [
  { value: "$500K–$5M", label: "annual electricity spend per facility" },
  { value: "10K+", label: "US companies facing ESG disclosure" },
  { value: "6–9mo", label: "average renewable project delay" },
];

const Slide02Problem = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const active = selected !== null ? problems[selected] : null;

  return (
    <SlideLayout>
      <div className="relative w-full h-full flex flex-col items-center justify-center bg-white overflow-hidden px-14 pt-8 pb-5">

        {/* Subtle grid background */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.5,
          }}
        />

        {/* Header */}
        <div className="relative z-10 text-center mb-5 animate-fade-in">
          <span className="inline-block px-4 py-1 rounded-full border border-amber-300 bg-amber-50 text-amber-700 text-[13px] font-bold tracking-widest uppercase mb-2">
            The Problem
          </span>
          <h2 className="text-[40px] font-extrabold text-foreground leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            The US Energy Market Is <span className="text-destructive">Broken</span>
          </h2>
          <p className="text-[15px] text-muted-foreground mt-1">
            Fragmented systems, rising costs, and no unified infrastructure
          </p>
        </div>

        {/* 3×2 Card Grid */}
        <div className="relative z-10 grid grid-cols-3 gap-5 w-full max-w-[1520px] mx-auto">
          {problems.map((prob, i) => {
            const Icon = prob.icon;
            return (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white border-2 border-border/40 hover:border-primary/40 hover:shadow-xl shadow-sm text-left transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${0.05 + i * 0.06}s`, animationFillMode: "forwards", opacity: 0 }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
                  <Icon className="w-5 h-5 text-amber-600 group-hover:text-primary transition-colors" />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-[20px] font-bold text-foreground leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {prob.title}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                  </div>
                  <p className="text-[14px] text-muted-foreground leading-snug line-clamp-2">{prob.preview}</p>
                  <span className="mt-2 inline-block text-[13px] font-semibold text-primary group-hover:underline">
                    Click for details
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Stats bar */}
        <div className="relative z-10 flex items-center justify-center gap-6 mt-8 animate-fade-in" style={{ animationDelay: "0.5s", animationFillMode: "forwards", opacity: 0 }}>
          {stats.map((s, i) => (
            <div key={i} className="flex items-center gap-3 px-7 py-3.5 rounded-full border-2 border-border/40 bg-white shadow-sm">
              <span className="text-[26px] font-black text-primary" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{s.value}</span>
              <span className="text-[15px] text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Detail modal overlay */}
        {active && (
          <div
            className="absolute inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelected(null)}
          >
            <div
              className="relative w-[680px] bg-white rounded-3xl shadow-2xl border border-border/30 p-10 animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 rounded-xl hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>

              {/* Modal header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  {(() => { const Icon = active.icon; return <Icon className="w-7 h-7 text-primary" />; })()}
                </div>
                <div>
                  <span className="text-[13px] text-muted-foreground font-mono">Problem {active.num} of 06</span>
                  <h3 className="text-[28px] font-extrabold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {active.title}
                  </h3>
                </div>
                <div className="ml-auto text-right shrink-0">
                  <div className="text-[38px] font-black text-primary leading-none">{active.stat}</div>
                  <div className="text-[12px] text-muted-foreground uppercase tracking-wider mt-1">{active.statLabel}</div>
                </div>
              </div>

              {/* Bullets */}
              <div className="space-y-3 mb-6">
                {active.bullets.map((b, bi) => (
                  <div key={bi} className="flex items-start gap-3 p-3.5 rounded-xl bg-muted/40 border border-border/20">
                    <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-[13px] font-bold flex items-center justify-center shrink-0">{bi + 1}</span>
                    <span className="text-[16px] text-foreground leading-snug">{b}</span>
                  </div>
                ))}
              </div>

              {/* Impact */}
              <div className="p-4 rounded-2xl bg-destructive/5 border border-destructive/15">
                <span className="text-[13px] font-bold text-destructive uppercase tracking-wider">⚠ Business Impact</span>
                <div className="flex gap-2.5 mt-2.5 flex-wrap">
                  {active.impact.map((imp, ii) => (
                    <span key={ii} className="px-4 py-2 rounded-lg bg-destructive/10 text-destructive text-[14px] font-semibold">{imp}</span>
                  ))}
                </div>
              </div>

              {/* Nav dots */}
              <div className="flex items-center justify-center gap-2 mt-6">
                {problems.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSelected(i)}
                    className={`rounded-full transition-all ${i === selected ? "w-6 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-muted-foreground/25 hover:bg-muted-foreground/50"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </SlideLayout>
  );
};

export default Slide02Problem;
