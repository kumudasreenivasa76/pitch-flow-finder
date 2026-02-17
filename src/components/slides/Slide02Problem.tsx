import SlideLayout from "../SlideLayout";
import { useState } from "react";
import { DollarSign, FileCheck, Blocks, Server, Coins, Activity, AlertTriangle } from "lucide-react";

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
    problem: "Margin compression, grid strain, and CFO pressure to reduce operating expenses.",
  },
  {
    num: "02",
    icon: FileCheck,
    title: "ESG & SEC Climate Compliance Pressure",
    stat: "10,000+",
    statLabel: "US companies impacted",
    bullets: [
      "10,000+ US companies impacted by climate disclosure expectations",
      "3,000+ public companies preparing for SEC reporting",
      "60% of mid-market firms lack automated carbon tracking systems",
    ],
    problem: "Legal exposure, investor scrutiny, and supply chain pressure from larger enterprises.",
  },
  {
    num: "03",
    icon: Blocks,
    title: "Fragmented Renewable & Carbon Ecosystem",
    stat: "6–9 mo",
    statLabel: "avg project delay",
    bullets: [
      "Solar EPCs, consultants, carbon brokers operate separately",
      "70% of commercial solar projects require coordination across 3–5 vendors",
      "Average project delay: 6–9 months",
    ],
    problem: "Cost overruns, underperformance, and project abandonment.",
  },
  {
    num: "04",
    icon: Server,
    title: "Data Center Renewable Procurement Complexity",
    stat: "2x",
    statLabel: "DC demand doubling",
    bullets: [
      "Hyperscalers committed to 100% renewable energy (RE100 targets)",
      "Data center electricity demand expected to double in certain regions",
      "Renewable PPAs and REC procurement highly complex",
    ],
    problem: "Renewable gap vs net-zero commitments, reputation risk, and increasing ESG reporting scrutiny.",
  },
  {
    num: "05",
    icon: Coins,
    title: "Unmonetized Renewable Assets (REC Leakage)",
    stat: "$1–2B",
    statLabel: "US REC market/yr",
    bullets: [
      "US REC market size: $1–2B annually",
      "Thousands of small installations do not actively trade RECs",
      "10–20% potential renewable revenue often unused",
    ],
    problem: "Reduced ROI, poor financial visibility, and missed sustainability funding opportunity.",
  },
  {
    num: "06",
    icon: Activity,
    title: "Lack of Real-Time Energy Intelligence",
    stat: "20–30%",
    statLabel: "solar underperformance",
    bullets: [
      "20–30% of installed solar underperforms without monitoring",
      "50% of mid-market firms lack real-time energy analytics",
      "Data center uptime & optimization critical to SLAs",
    ],
    problem: "Lost savings, equipment failure unnoticed, and poor sustainability ROI measurement.",
  },
];

const Slide02Problem = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <SlideLayout>
      <div className="flex flex-col h-full px-20 py-12">
        {/* Header */}
        <div className="shrink-0 mb-6">
          <div className="flex items-center gap-4 mb-2 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
            <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center">
              <AlertTriangle className="w-7 h-7 text-destructive" />
            </div>
            <h2 className="text-[52px] font-extrabold text-foreground leading-none">
              The Structural Market <span className="text-destructive">Failure</span>
            </h2>
          </div>
          <p
            className="text-[22px] text-muted-foreground ml-[72px] opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            Six systemic failures blocking the clean energy transition — US focus
          </p>
        </div>

        {/* Problem cards — 3×2 grid */}
        <div className="grid grid-cols-3 grid-rows-2 gap-5 flex-1 min-h-0 mb-6">
          {problems.map((p, i) => {
            const isOpen = expanded === i;
            const Icon = p.icon;
            return (
              <button
                key={i}
                onClick={() => setExpanded(isOpen ? null : i)}
                className={`group text-left rounded-2xl border-2 p-5 transition-all duration-300 flex flex-col overflow-hidden opacity-0 animate-slide-up ${
                  isOpen
                    ? "bg-primary/[0.06] border-primary/40 shadow-xl shadow-primary/10"
                    : "bg-card/80 border-border/40 hover:border-primary/30 hover:shadow-lg"
                }`}
                style={{ animationDelay: `${0.15 + i * 0.07}s`, animationFillMode: "forwards" }}
              >
                {/* Top row: number + icon | stat */}
                <div className="flex items-center justify-between mb-3 shrink-0">
                  <div className="flex items-center gap-3">
                    <span className={`text-[14px] font-bold px-2.5 py-1 rounded-lg transition-colors duration-300 ${
                      isOpen ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                    }`}>
                      {p.num}
                    </span>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                      isOpen ? "bg-primary/15 text-primary" : "bg-secondary text-muted-foreground"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className={`text-[26px] font-extrabold leading-none transition-colors duration-300 ${
                      isOpen ? "text-primary" : "text-foreground"
                    }`}>
                      {p.stat}
                    </div>
                    <div className="text-[12px] text-muted-foreground uppercase tracking-wider mt-1">
                      {p.statLabel}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[18px] font-bold text-foreground mb-2 leading-snug shrink-0">{p.title}</h3>

                {/* Collapsed: show problem summary */}
                {!isOpen && (
                  <p className="text-[15px] text-destructive/80 italic mt-auto leading-snug line-clamp-2">
                    ⚠ {p.problem}
                  </p>
                )}

                {/* Expanded: show bullets + problem */}
                {isOpen && (
                  <div className="mt-1 animate-fade-in flex flex-col flex-1 overflow-y-auto min-h-0">
                    <ul className="space-y-1.5">
                      {p.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-2 text-[14px] text-foreground/80 leading-snug">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-[7px] shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-2.5 border-t border-destructive/15">
                      <p className="text-[13px] text-destructive font-semibold leading-snug">
                        ⚠ {p.problem}
                      </p>
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Bottom stats banner */}
        <div
          className="shrink-0 flex justify-center gap-14 py-4 bg-destructive/5 border border-destructive/10 rounded-2xl opacity-0 animate-fade-in"
          style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
        >
          {[
            { value: "15–25%", label: "Energy Cost Surge" },
            { value: "10K+", label: "Companies Impacted" },
            { value: "$1–2B", label: "REC Market/yr" },
            { value: "6–9 mo", label: "Avg Project Delay" },
            { value: "20–30%", label: "Solar Underperformance" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-[28px] font-extrabold text-destructive">{s.value}</div>
              <div className="text-[14px] text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide02Problem;
