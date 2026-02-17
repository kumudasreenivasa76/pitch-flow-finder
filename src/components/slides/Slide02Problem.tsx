import SlideLayout from "../SlideLayout";
import { useState } from "react";
import { Zap, Server, FileCheck, Landmark, Network, BarChart3, AlertTriangle } from "lucide-react";

const problems = [
  {
    num: "01",
    icon: Zap,
    title: "Renewable Energy Is Underutilized",
    stat: "40%+",
    statLabel: "capacity curtailed",
    bullets: [
      "40%+ of installed renewable capacity is curtailed",
      "Solar peaks misaligned with demand",
      "Wind disconnected from storage",
      "No real-time demand matching",
    ],
    quote: "Clean energy exists. It just isn't orchestrated.",
  },
  {
    num: "02",
    icon: Server,
    title: "Datacenters Are Carbon-Blind",
    stat: "3–5%",
    statLabel: "of global electricity",
    bullets: [
      "Carbon per workload — unknown",
      "Carbon per AI training job — unknown",
      "Carbon per Kubernetes cluster — unknown",
      "They measure kWh per facility, not gCO₂ per compute unit",
    ],
    quote: "AI runs 24/7 — even when grids are dirtiest.",
  },
  {
    num: "03",
    icon: BarChart3,
    title: "Procurement Is Financial, Not Operational",
    stat: "0%",
    statLabel: "hourly matching",
    bullets: [
      "Sign VPPAs, buy RECs, purchase offsets",
      "Don't match renewables hourly (24/7 CFE)",
      "Don't integrate storage into scheduling",
      "Don't shift workloads based on carbon forecasts",
    ],
    quote: "Offsets compensate emissions. They don't reduce them.",
  },
  {
    num: "04",
    icon: FileCheck,
    title: "Compliance Is Reactive & Manual",
    stat: "90%",
    statLabel: "still use Excel",
    bullets: [
      "CSRD, SEC Climate Disclosure, SECR, CDP",
      "Executed via Excel & consultants",
      "Static annual reports, no real-time data",
      "No compliance intelligence layer",
    ],
    quote: "No real-time compliance intelligence.",
  },
  {
    num: "05",
    icon: Landmark,
    title: "Capital Doesn't Flow to Infrastructure",
    stat: "100M+",
    statLabel: "rooftops untapped",
    bullets: [
      "Schools and SMEs excluded from markets",
      "Renewable developers underfunded",
      "Datacenters buy generic credits instead of assets",
      "Carbon money flows to intermediaries, not infra",
    ],
    quote: "Capital flows to middlemen, not to rooftops.",
  },
  {
    num: "06",
    icon: Network,
    title: "No Unified Carbon Control Plane",
    stat: "5+",
    statLabel: "disconnected tools",
    bullets: [
      "Carbon accounting tools",
      "Grid data APIs & offset marketplaces",
      "Energy optimization firms & compliance consultants",
      "None connect into one operational loop",
    ],
    quote: "The stack is fragmented. No single system exists.",
  },
];

const Slide02Problem = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <SlideLayout>
      <div className="flex flex-col h-full px-16 py-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-2 opacity-0 animate-fade-in">
          <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-destructive" />
          </div>
          <h2 className="text-5xl font-extrabold text-foreground">
            The Structural Market <span className="text-destructive">Failure</span>
          </h2>
        </div>
        <p
          className="text-xl text-muted-foreground mb-8 ml-16 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          Six systemic failures blocking the $3T+ clean energy transition
        </p>

        {/* Problem cards grid */}
        <div className="grid grid-cols-3 gap-4 flex-1 mb-6">
          {problems.map((p, i) => {
            const isOpen = expanded === i;
            return (
              <button
                key={i}
                onClick={() => setExpanded(isOpen ? null : i)}
                className={`group text-left rounded-2xl border p-5 transition-all duration-300 flex flex-col opacity-0 animate-slide-up ${
                  isOpen
                    ? "bg-primary/[0.06] border-primary/40 shadow-xl shadow-primary/10 -translate-y-1"
                    : "bg-card/80 border-border/50 hover:border-primary/20 hover:shadow-md"
                }`}
                style={{ animationDelay: `${0.15 + i * 0.08}s`, animationFillMode: "forwards" }}
              >
                {/* Top row: number + stat */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className={`text-sm font-bold px-2 py-0.5 rounded-md transition-colors duration-300 ${
                      isOpen ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                    }`}>
                      {p.num}
                    </span>
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                      isOpen ? "bg-primary/15 text-primary" : "bg-secondary text-muted-foreground"
                    }`}>
                      <p.icon className="w-5 h-5" />
                    </div>
                  </div>
                  {/* Stat badge */}
                  <div className="text-right">
                    <div className={`text-2xl font-extrabold leading-none transition-colors duration-300 ${
                      isOpen ? "text-primary" : "text-foreground"
                    }`}>
                      {p.stat}
                    </div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">
                      {p.statLabel}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-foreground mb-1.5 leading-snug">{p.title}</h3>

                {/* Collapsed: show quote */}
                {!isOpen && (
                  <p className="text-xs text-muted-foreground italic mt-auto leading-relaxed">
                    "{p.quote}"
                  </p>
                )}

                {/* Expanded: bullet points */}
                {isOpen && (
                  <div className="mt-1 animate-fade-in">
                    <ul className="space-y-1.5">
                      {p.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-2 text-xs text-foreground/80 leading-snug">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <p className="text-[11px] text-primary font-semibold italic mt-3 border-t border-primary/20 pt-2">
                      "{p.quote}"
                    </p>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Bottom stats banner */}
        <div
          className="flex justify-center gap-12 py-4 bg-destructive/5 border border-destructive/10 rounded-2xl opacity-0 animate-fade-in"
          style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
        >
          {[
            { value: "$3T+", label: "Market at Stake" },
            { value: "40%+", label: "Capacity Wasted" },
            { value: "100M+", label: "Rooftops Untapped" },
            { value: "4B+", label: "People Excluded" },
            { value: "90%", label: "Manual Compliance" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold text-destructive">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide02Problem;
