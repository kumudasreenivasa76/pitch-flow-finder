import SlideLayout from "../SlideLayout";
import { useState } from "react";
import { DollarSign, FileCheck, Blocks, Server, Coins, Activity, AlertTriangle, ChevronRight } from "lucide-react";

const problems = [
  {
    num: "01",
    icon: DollarSign,
    title: "Rising & Volatile Energy Costs",
    stat: "15–25%",
    statLabel: "US price increase (3yr)",
    bullets: [
      "US commercial electricity prices increased ~15–25% in the past 3 years",
      "Industrial facilities spend $500K–$5M annually on electricity",
      "Data centers consume 4–5% of total US electricity (projected 8–10% by 2030)",
      "AI workloads increase power demand by 2–3x",
    ],
    impact: ["Margin compression", "Grid strain", "CFO pressure to reduce OpEx"],
    color: "from-red-500/10 to-orange-500/5",
  },
  {
    num: "02",
    icon: FileCheck,
    title: "ESG & SEC Compliance Pressure",
    stat: "10K+",
    statLabel: "US companies impacted",
    bullets: [
      "10,000+ US companies impacted by climate disclosure expectations",
      "3,000+ public companies preparing for SEC reporting",
      "60% of mid-market firms lack automated carbon tracking",
    ],
    impact: ["Legal exposure", "Investor scrutiny", "Supply chain pressure"],
    color: "from-amber-500/10 to-yellow-500/5",
  },
  {
    num: "03",
    icon: Blocks,
    title: "Fragmented Renewable Ecosystem",
    stat: "6–9 mo",
    statLabel: "avg project delay",
    bullets: [
      "Solar EPCs, consultants, carbon brokers operate separately",
      "70% of projects require coordination across 3–5 vendors",
      "Average project delay: 6–9 months",
    ],
    impact: ["Cost overruns", "Underperformance", "Project abandonment"],
    color: "from-violet-500/10 to-purple-500/5",
  },
  {
    num: "04",
    icon: Server,
    title: "DC Renewable Procurement",
    stat: "2x",
    statLabel: "DC demand doubling",
    bullets: [
      "Hyperscalers committed to 100% renewable energy (RE100)",
      "Data center electricity demand expected to double regionally",
      "Renewable PPAs and REC procurement highly complex",
    ],
    impact: ["Renewable gap", "Reputation risk", "ESG scrutiny"],
    color: "from-blue-500/10 to-cyan-500/5",
  },
  {
    num: "05",
    icon: Coins,
    title: "Unmonetized RECs (Leakage)",
    stat: "$1–2B",
    statLabel: "US REC market/yr",
    bullets: [
      "US REC market size: $1–2B annually",
      "Thousands of small installations don't actively trade RECs",
      "10–20% potential renewable revenue often unused",
    ],
    impact: ["Reduced ROI", "Poor visibility", "Missed funding"],
    color: "from-emerald-500/10 to-green-500/5",
  },
  {
    num: "06",
    icon: Activity,
    title: "No Real-Time Energy Intelligence",
    stat: "20–30%",
    statLabel: "solar underperformance",
    bullets: [
      "20–30% of installed solar underperforms without monitoring",
      "50% of mid-market firms lack real-time energy analytics",
      "Data center uptime & optimization critical to SLAs",
    ],
    impact: ["Lost savings", "Unnoticed failures", "Poor ROI measurement"],
    color: "from-rose-500/10 to-pink-500/5",
  },
];

const Slide02Problem = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <SlideLayout>
      <div className="flex h-full">
        {/* Left panel — problem list */}
        <div className="w-[520px] shrink-0 flex flex-col px-10 py-10 border-r border-border/30">
          <div className="shrink-0 mb-6">
            <div className="flex items-center gap-3 mb-2 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
              <div className="w-12 h-12 rounded-2xl bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h2 className="text-[36px] font-extrabold text-foreground leading-none">
                  Market <span className="text-destructive">Failure</span>
                </h2>
                <p className="text-[16px] text-muted-foreground mt-1">6 systemic failures — US focus</p>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-2.5 min-h-0">
            {problems.map((p, i) => {
              const Icon = p.icon;
              const isActive = selected === i;
              return (
                <button
                  key={i}
                  onClick={() => setSelected(isActive ? null : i)}
                  className={`flex items-center gap-4 px-4 py-3.5 rounded-xl border text-left transition-all duration-300 opacity-0 animate-fade-in ${
                    isActive
                      ? "bg-primary/[0.08] border-primary/40 shadow-lg shadow-primary/5"
                      : "bg-card/60 border-border/30 hover:bg-card hover:border-primary/20 hover:shadow-md"
                  }`}
                  style={{ animationDelay: `${0.1 + i * 0.06}s`, animationFillMode: "forwards" }}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isActive ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[15px] font-bold text-foreground leading-tight truncate">{p.title}</p>
                    <p className="text-[12px] text-muted-foreground mt-0.5">{p.statLabel}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className={`text-[22px] font-extrabold transition-colors ${isActive ? "text-primary" : "text-foreground"}`}>
                      {p.stat}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform duration-300 text-muted-foreground ${isActive ? "rotate-90 text-primary" : ""}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right panel — detail view */}
        <div className="flex-1 flex flex-col px-12 py-10">
          {selected === null ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
              <div className="w-24 h-24 rounded-3xl bg-destructive/5 flex items-center justify-center mb-6">
                <AlertTriangle className="w-12 h-12 text-destructive/30" />
              </div>
              <h3 className="text-[28px] font-bold text-foreground mb-3">Select a problem to explore</h3>
              <p className="text-[18px] text-muted-foreground max-w-[500px]">
                Click any of the 6 market failures on the left to see the full breakdown, data points, and business impact.
              </p>

              {/* Stats preview */}
              <div className="grid grid-cols-3 gap-6 mt-10 w-full max-w-[700px]">
                {[
                  { value: "15–25%", label: "Energy Cost Surge" },
                  { value: "10K+", label: "Companies Impacted" },
                  { value: "$1–2B", label: "REC Market/yr" },
                  { value: "6–9 mo", label: "Avg Project Delay" },
                  { value: "2x", label: "DC Demand Doubling" },
                  { value: "20–30%", label: "Solar Underperformance" },
                ].map((s) => (
                  <div key={s.label} className="text-center p-4 rounded-xl bg-destructive/[0.03] border border-destructive/10">
                    <div className="text-[24px] font-extrabold text-destructive">{s.value}</div>
                    <div className="text-[13px] text-muted-foreground mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            (() => {
              const p = problems[selected];
              const Icon = p.icon;
              return (
                <div className="flex-1 flex flex-col animate-fade-in" key={selected}>
                  {/* Detail header */}
                  <div className={`rounded-2xl bg-gradient-to-br ${p.color} border border-border/20 p-8 mb-6 shrink-0`}>
                    <div className="flex items-center gap-5 mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
                        <Icon className="w-8 h-8" />
                      </div>
                      <div>
                        <span className="text-[14px] text-muted-foreground font-mono">Problem {p.num} of 06</span>
                        <h3 className="text-[32px] font-extrabold text-foreground leading-tight">{p.title}</h3>
                      </div>
                      <div className="ml-auto text-right">
                        <div className="text-[44px] font-black text-primary leading-none">{p.stat}</div>
                        <div className="text-[14px] text-muted-foreground uppercase tracking-wide mt-1">{p.statLabel}</div>
                      </div>
                    </div>
                  </div>

                  {/* Data points */}
                  <div className="flex-1 min-h-0">
                    <h4 className="text-[16px] font-bold text-muted-foreground uppercase tracking-wider mb-4">Key Data Points</h4>
                    <div className="space-y-3 mb-6">
                      {p.bullets.map((b, bi) => (
                        <div
                          key={bi}
                          className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/30 opacity-0 animate-fade-in"
                          style={{ animationDelay: `${bi * 0.08}s`, animationFillMode: "forwards" }}
                        >
                          <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary text-[14px] font-bold flex items-center justify-center shrink-0">
                            {bi + 1}
                          </span>
                          <span className="text-[16px] text-foreground leading-relaxed">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact bar */}
                  <div className="shrink-0 p-5 rounded-xl bg-destructive/5 border border-destructive/15">
                    <span className="text-[13px] font-bold text-destructive uppercase tracking-wider">⚠ Impact</span>
                    <div className="flex gap-3 mt-3">
                      {p.impact.map((imp, ii) => (
                        <span key={ii} className="px-4 py-2 rounded-lg bg-destructive/10 text-destructive text-[14px] font-semibold">
                          {imp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Navigation dots */}
                  <div className="flex items-center justify-center gap-2 mt-5">
                    {problems.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setSelected(i)}
                        className={`rounded-full transition-all ${i === selected ? "w-8 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-muted-foreground/20 hover:bg-muted-foreground/40"}`}
                      />
                    ))}
                  </div>
                </div>
              );
            })()
          )}
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide02Problem;
