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
  },
];

const Slide02Problem = () => {
  const [selected, setSelected] = useState<number>(0);
  const p = problems[selected];
  const Icon = p.icon;

  return (
    <SlideLayout>
      <div className="flex h-full">
        {/* Left sidebar */}
        <div className="w-[580px] shrink-0 flex flex-col bg-card/40 border-r border-border/30">
          {/* Header */}
          <div className="px-10 pt-8 pb-5 shrink-0 border-b border-border/20">
            <div className="flex items-center gap-4 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
              <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-7 h-7 text-destructive" />
              </div>
              <div>
                <h2 className="text-[40px] font-extrabold text-foreground leading-none">
                  Market <span className="text-destructive">Failure</span>
                </h2>
                <p className="text-[18px] text-muted-foreground mt-1">6 systemic US market failures</p>
              </div>
            </div>
          </div>

          {/* Problem list */}
          <div className="flex-1 flex flex-col justify-center gap-1.5 px-5 py-3">
            {problems.map((prob, i) => {
              const PIcon = prob.icon;
              const isActive = selected === i;
              return (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  className={`flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-300 opacity-0 animate-fade-in ${
                    isActive
                      ? "bg-primary/10 border-2 border-primary/30 shadow-lg shadow-primary/5"
                      : "bg-transparent border-2 border-transparent hover:bg-card hover:border-border/30"
                  }`}
                  style={{ animationDelay: `${0.08 + i * 0.05}s`, animationFillMode: "forwards" }}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isActive ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" : "bg-secondary text-muted-foreground"
                  }`}>
                    <PIcon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-[18px] font-bold leading-tight transition-colors ${isActive ? "text-primary" : "text-foreground"}`}>
                      {prob.title}
                    </p>
                    <p className="text-[14px] text-muted-foreground mt-0.5">{prob.statLabel}</p>
                  </div>
                  <span className={`text-[26px] font-extrabold shrink-0 transition-colors ${isActive ? "text-primary" : "text-foreground/70"}`}>
                    {prob.stat}
                  </span>
                  <ChevronRight className={`w-5 h-5 shrink-0 transition-all duration-300 ${isActive ? "text-primary translate-x-1" : "text-muted-foreground/40"}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right detail panel */}
        <div className="flex-1 flex items-center justify-center px-12 pb-16 overflow-hidden" key={selected}>
          <div className="w-full max-w-[1100px]">
            {/* Header with stat */}
            <div className="animate-fade-in">
              <div className="flex items-center gap-4">
                <div className="w-[56px] h-[56px] rounded-2xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
                  <Icon className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <span className="text-[13px] text-muted-foreground font-mono">Problem {p.num} of 06</span>
                  <h3 className="text-[30px] font-extrabold text-foreground leading-tight">{p.title}</h3>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-[42px] font-black text-primary leading-none">{p.stat}</div>
                  <div className="text-[13px] text-muted-foreground uppercase tracking-wider mt-1">{p.statLabel}</div>
                </div>
              </div>
            </div>

            {/* Data points */}
            <div className="mt-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h4 className="text-[13px] font-bold text-muted-foreground uppercase tracking-widest mb-3">Key Data Points</h4>
              <div className="space-y-2.5">
                {p.bullets.map((b, bi) => (
                  <div
                    key={bi}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-card border border-border/30 hover:border-primary/20 hover:shadow-md transition-all duration-300 opacity-0 animate-fade-in"
                    style={{ animationDelay: `${0.15 + bi * 0.08}s`, animationFillMode: "forwards" }}
                  >
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary text-[14px] font-bold flex items-center justify-center shrink-0">
                      {bi + 1}
                    </span>
                    <span className="text-[15px] text-foreground leading-snug">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact bar - sits right below data points */}
            <div className="mt-5 p-4 rounded-2xl bg-destructive/[0.04] border border-destructive/15 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <span className="text-[13px] font-bold text-destructive uppercase tracking-wider">⚠ Business Impact</span>
              <div className="flex gap-2.5 mt-2.5 flex-wrap">
                {p.impact.map((imp, ii) => (
                  <span key={ii} className="px-4 py-2 rounded-lg bg-destructive/10 text-destructive text-[14px] font-semibold">
                    {imp}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide02Problem;
