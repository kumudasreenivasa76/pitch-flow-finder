import SlideLayout from "../SlideLayout";
import { Zap, Leaf, BarChart3, GraduationCap, HeartPulse, DollarSign, Users, AlertTriangle } from "lucide-react";
import ecosystemImg from "@/assets/ecosystem-white-bg.png";

const capabilityCards = [
  {
    icon: Zap,
    title: "Optimize Energy",
    layer: "VoltIQ™ Layer",
    layerColor: "text-emerald-600",
    items: ["AI-driven consumption forecasting", "Real-time monitoring & digital twin", "10–20% energy cost reduction", "Demand response participation"],
  },
  {
    icon: Leaf,
    title: "Enable Renewables",
    layer: "GridLink™ Layer",
    layerColor: "text-emerald-600",
    items: ["PPA / VPPA structuring", "On-site solar feasibility & dev", "REC procurement & management", "Incentive & grant optimization"],
  },
  {
    icon: BarChart3,
    title: "Monetize Sustainability",
    layer: "CarbonMatch™ Layer",
    layerColor: "text-rose-500",
    items: ["Carbon credit participation", "REC resale & tracking", "ESG compliance automation", "Sustainability reporting dashboards"],
  },
];

const segmentCards = [
  {
    icon: GraduationCap,
    title: "School / University",
    items: ["15% energy savings", "$51K–$149K annual savings", "100–300 tons CO₂ reduced", "New sustainability revenue"],
  },
  {
    icon: HeartPulse,
    title: "Hospital",
    items: ["20% peak load optimization", "Reduced backup power risk", "Improved resilience", "Lower operational carbon"],
  },
];

const bottomCards = [
  {
    icon: DollarSign,
    title: "Financial Transform",
    highlight: "Cost-center",
    highlightStrike: true,
    items: ["Measurable savings", "Monetizable energy assets", "Recurring SaaS optimization", "Compliance automation"],
  },
  {
    icon: Users,
    title: "Participation Model",
    items: ["Renewable procurement programs", "Carbon markets", "Demand response programs", "Energy efficiency incentives", "Grant-based decarbonization"],
  },
];

const problemPoints = [
  "15–25% rising energy costs",
  "Increasing ESG requirements",
  "Limited capital for renewables",
  "Budget pressure on institutions",
  "Aging infrastructure",
];

const SlideGreenCampus = () => {
  return (
    <SlideLayout>
      <div className="relative w-full h-full flex flex-col bg-white overflow-hidden">
        {/* Grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.5,
          }}
        />

        <div className="relative z-10 flex flex-col items-center h-full px-14 pt-6 pb-4">
          {/* Centered header */}
          <div className="text-center shrink-0 mb-4">
            <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[12px] font-bold tracking-widest uppercase mb-2">
              Institutional SaaS
            </span>
            <h2 className="text-[34px] font-extrabold text-foreground leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Intelligent <span className="text-primary">Green Campuses</span>
            </h2>
            <p className="text-[13px] text-muted-foreground leading-relaxed mt-1 mb-3">
              AI-driven energy optimization, renewable procurement & carbon monetization — delivered as SaaS.
            </p>
            <div className="w-[280px] h-[180px] rounded-2xl overflow-hidden border border-border/30 bg-white shadow-sm mx-auto">
              <img src={ecosystemImg} alt="Green Campus" className="w-full h-full object-contain" style={{ mixBlendMode: "multiply" }} />
            </div>
          </div>

          {/* Main content grid */}
          <div className="w-full flex flex-col gap-3 flex-1 min-h-0 justify-center">
            {/* 3 capability cards */}
            <div className="grid grid-cols-3 gap-3">
              {capabilityCards.map((card) => (
                <div key={card.title} className="rounded-xl border border-border/40 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <card.icon className="w-4 h-4 text-primary" />
                    <span className="text-[13px] font-bold text-foreground">{card.title}</span>
                  </div>
                  <div className={`text-[10px] font-semibold ${card.layerColor} mb-2`}>{card.layer}</div>
                  <ul className="space-y-1">
                    {card.items.map((item) => (
                      <li key={item} className="text-[11px] text-muted-foreground flex items-start gap-1.5">
                        <span className="text-primary mt-0.5">+</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* 2 segment + 2 bottom in a 4-col row */}
            <div className="grid grid-cols-4 gap-3">
              {segmentCards.map((card) => (
                <div key={card.title} className="rounded-xl border border-border/40 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <card.icon className="w-4 h-4 text-primary" />
                    <span className="text-[13px] font-bold text-foreground">{card.title}</span>
                  </div>
                  <ul className="space-y-1">
                    {card.items.map((item) => (
                      <li key={item} className="text-[11px] text-muted-foreground flex items-start gap-1.5">
                        <span className="text-primary mt-0.5">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {bottomCards.map((card) => (
                <div key={card.title} className="rounded-xl border border-border/40 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <card.icon className="w-4 h-4 text-primary" />
                    <span className="text-[12px] font-bold text-foreground uppercase tracking-wider">{card.title}</span>
                  </div>
                  {"highlightStrike" in card && card.highlightStrike && (
                    <div className="text-[11px] text-rose-500 font-semibold line-through mb-1">Cost-center</div>
                  )}
                  <ul className="space-y-1">
                    {card.items.map((item) => (
                      <li key={item} className="text-[11px] text-muted-foreground flex items-start gap-1.5">
                        <span className="text-primary mt-0.5">○</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom problem bar */}
          <div className="w-full mt-auto shrink-0 rounded-xl bg-primary/5 border border-primary/20 px-6 py-3 flex items-center gap-6">
            <div className="flex items-center gap-2 shrink-0">
              <AlertTriangle className="w-4 h-4 text-rose-500" />
              <span className="text-[12px] font-bold text-foreground uppercase tracking-wider">The Problem</span>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-1">
              {problemPoints.map((p) => (
                <span key={p} className="text-[11px] text-muted-foreground flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" /> {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default SlideGreenCampus;
