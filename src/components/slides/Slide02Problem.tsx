import SlideLayout from "../SlideLayout";
import { useState } from "react";
import { Server, Wind, Gauge, Globe2, FileCheck, Landmark, AlertTriangle } from "lucide-react";

const problems = [
  {
    num: "01",
    icon: Server,
    title: "Energy-Intensive Infrastructure Is Expanding Rapidly",
    stat: "150 TWh",
    statLabel: "EU DC demand by 2030",
    bullets: [
      "Datacenters consume 3–5% of global electricity",
      "EU datacenter demand expected to exceed 150 TWh annually by 2030",
      "UK datacenters consume ~2–3% of national electricity",
      "AI compute demand growing 20–30% annually",
      "Universities are among the largest public-sector energy users (20–200 GWh/campus)",
      "Commercial buildings account for ~30–35% of EU energy consumption",
    ],
    problem: "Energy demand across datacenters, campuses, and enterprises is accelerating faster than grid decarbonization and carbon optimization systems.",
  },
  {
    num: "02",
    icon: Wind,
    title: "Renewable Curtailment & Grid Constraints Persist",
    stat: "£1B+",
    statLabel: "UK wind curtailment/yr",
    bullets: [
      "Renewable curtailment in Europe ranges 10–30% during peak production",
      "UK wind curtailment costs exceed £1B annually",
      "Grid congestion limits renewable dispatch in Germany, Ireland, and the Netherlands",
      "EU transmission bottlenecks restrict full renewable utilization",
      "Millions of sq meters of rooftop space on schools & universities remain unused",
    ],
    problem: "Installed renewable capacity exists, but infrastructure demand is not dynamically aligned with generation patterns.",
  },
  {
    num: "03",
    icon: Gauge,
    title: "Operational Inefficiency Remains Structural",
    stat: "1.4–1.7",
    statLabel: "avg global PUE",
    bullets: [
      "Cooling represents 30–50% of datacenter facility energy",
      "AI increases rack density 3–5x over traditional workloads",
      "Even 0.2 PUE improvement = multi-million £ savings at hyperscale",
      "HVAC represents 30–60% of campus & enterprise building energy",
      "Legacy BMS systems operate in silos with limited predictive optimization",
    ],
    problem: "Energy systems are optimized for uptime and compliance — not carbon efficiency or real-time optimization.",
  },
  {
    num: "04",
    icon: Globe2,
    title: "Carbon Markets Are Fragmented Across Jurisdictions",
    stat: "$50B",
    statLabel: "voluntary market by 2030",
    bullets: [
      "Voluntary carbon market projected to reach $50B globally by 2030",
      "EU ETS carbon price volatility fluctuates significantly year-to-year",
      "REC and I-REC markets vary widely by geography",
      "Credit pricing can vary 3x–10x by region",
      "Verification fragmentation (Verra, Gold Standard, ACR, etc.)",
    ],
    problem: "Carbon procurement is financially fragmented and disconnected from real-time infrastructure emissions.",
  },
  {
    num: "05",
    icon: FileCheck,
    title: "Regulatory Pressure Is Increasing Across Europe & UK",
    stat: "50,000+",
    statLabel: "companies under CSRD",
    bullets: [
      "CSRD affects ~50,000 companies across the EU",
      "Double materiality reporting now mandatory",
      "UK SECR requires carbon reporting for qualifying companies",
      "ESOS audits required every 4 years",
      "Large enterprises spend £50k–£500k annually on ESG consulting",
    ],
    problem: "Compliance is expanding rapidly while remaining manual, consultant-driven, and operationally disconnected.",
  },
  {
    num: "06",
    icon: Landmark,
    title: "Capital Gap in Distributed Renewable Infrastructure",
    stat: "$4T+",
    statLabel: "investment gap by 2030",
    bullets: [
      "Global clean energy investment gap estimated at $4T+ by 2030",
      "UK and EU face significant grid upgrade funding requirements",
      "Universities & schools lack structured financing for rooftop solar",
      "Datacenters spend millions on energy but rarely invest in distributed renewables",
      "Small renewable developers face capital access barriers",
    ],
    problem: "Carbon spending flows into credit markets and intermediaries rather than directly into distributed renewable infrastructure.",
  },
];

const Slide02Problem = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <SlideLayout>
      <div className="flex flex-col h-full px-16 py-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-1 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
          <div className="w-11 h-11 rounded-xl bg-destructive/10 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-destructive" />
          </div>
          <h2 className="text-[44px] font-extrabold text-foreground leading-tight">
            The Structural Market <span className="text-destructive">Failure</span>
          </h2>
        </div>
        <p
          className="text-lg text-muted-foreground mb-6 ml-[60px] opacity-0 animate-fade-in"
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          Six systemic failures blocking the clean energy transition — UK/EU focus
        </p>

        {/* Problem cards */}
        <div className="grid grid-cols-3 gap-3.5 flex-1 mb-5">
          {problems.map((p, i) => {
            const isOpen = expanded === i;
            return (
              <button
                key={i}
                onClick={() => setExpanded(isOpen ? null : i)}
                className={`group text-left rounded-2xl border p-4 transition-all duration-300 flex flex-col overflow-hidden opacity-0 animate-slide-up ${
                  isOpen
                    ? "bg-primary/[0.06] border-primary/40 shadow-xl shadow-primary/10 -translate-y-0.5"
                    : "bg-card/80 border-border/50 hover:border-primary/20 hover:shadow-md"
                }`}
                style={{ animationDelay: `${0.15 + i * 0.07}s`, animationFillMode: "forwards" }}
              >
                {/* Top: number + icon + stat */}
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-md transition-colors duration-300 ${
                      isOpen ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                    }`}>
                      {p.num}
                    </span>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                      isOpen ? "bg-primary/15 text-primary" : "bg-secondary text-muted-foreground"
                    }`}>
                      <p.icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className={`text-xl font-extrabold leading-none transition-colors duration-300 ${
                      isOpen ? "text-primary" : "text-foreground"
                    }`}>
                      {p.stat}
                    </div>
                    <div className="text-[9px] text-muted-foreground uppercase tracking-wider mt-0.5 max-w-[120px] text-right">
                      {p.statLabel}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[13px] font-bold text-foreground mb-1 leading-snug">{p.title}</h3>

                {/* Collapsed state */}
                {!isOpen && (
                  <p className="text-[11px] text-destructive/80 italic mt-auto leading-snug line-clamp-2">
                    ⚠ {p.problem}
                  </p>
                )}

                {/* Expanded state */}
                {isOpen && (
                  <div className="mt-1 animate-fade-in flex flex-col flex-1">
                    <ul className="space-y-1">
                      {p.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-1.5 text-[11px] text-foreground/80 leading-snug">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-2 border-t border-destructive/15">
                      <p className="text-[10px] text-destructive font-semibold leading-snug">
                        ⚠ {p.problem}
                      </p>
                    </div>
                  </div>
                )}

                {/* Expand indicator */}
                <div className="flex justify-center mt-2">
                  <div className={`w-6 h-0.5 rounded-full transition-colors duration-300 ${
                    isOpen ? "bg-primary" : "bg-border"
                  }`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom stats banner */}
        <div
          className="flex justify-center gap-10 py-3.5 bg-destructive/5 border border-destructive/10 rounded-2xl opacity-0 animate-fade-in"
          style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
        >
          {[
            { value: "150 TWh", label: "EU DC Demand 2030" },
            { value: "£1B+", label: "Curtailment Cost/yr" },
            { value: "$50B", label: "Carbon Market 2030" },
            { value: "50,000+", label: "CSRD Companies" },
            { value: "$4T+", label: "Investment Gap" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-extrabold text-destructive">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide02Problem;
