import SlideLayout from "../SlideLayout";
import { useState } from "react";
import {
  Building2, Users, Zap, CheckCircle2, Server,
  ChevronRight, X,
} from "lucide-react";

const models = [
  {
    num: "01",
    icon: Building2,
    badge: "Full Ownership",
    title: "Enterprise Project Ownership",
    subtitle: "Direct Asset Control",
    preview: "Organization fully owns the renewable energy asset — solar farm, rooftop solar, microgrid, or hybrid storage",
    stat: "Max ROI",
    statLabel: "Full asset control",
    who: ["Corporations", "Universities", "Hospitals", "Data Centers", "Government Agencies"],
    what: "The organization fully owns the renewable energy asset — solar farm, rooftop solar, microgrid, or hybrid storage system.",
    provides: [
      "Land identification & feasibility",
      "3D energy modeling",
      "EPC vendor selection & management",
      "Power generation optimization",
      "REC & carbon credit certification",
      "ESG reporting dashboard",
      "Audit & compliance documentation",
    ],
    benefits: ["Maximum ROI", "Full control over energy", "Direct carbon reduction", "Long-term asset appreciation"],
    accent: "#059669",
  },
  {
    num: "02",
    icon: Users,
    badge: "Fractional Ownership",
    title: "Shared Projects",
    subtitle: "Community / Consortium Model",
    preview: "Multiple stakeholders co-invest in a single renewable project — schools, communities, SMEs share costs & benefits",
    stat: "50–80%",
    statLabel: "Lower upfront cost",
    who: ["Schools", "Housing Communities", "SMEs", "Nonprofits", "Startup Clusters"],
    what: "Multiple stakeholders co-invest in a single renewable project. 10 schools can jointly fund a 5MW solar farm; a housing community invests in shared rooftop solar.",
    provides: [
      "Capital structuring",
      "Legal agreements",
      "Power allocation logic",
      "Revenue share model",
      "REC distribution",
      "Carbon credit allocation",
    ],
    benefits: ["Lower upfront cost", "Risk distributed across parties", "Access clean energy without owning land", "Ideal for emerging markets"],
    accent: "#7c3aed",
  },
  {
    num: "03",
    icon: Zap,
    badge: "Zero CapEx",
    title: "Bulk Energy Procurement",
    subtitle: "PPA Model",
    preview: "Purchase renewable power via PPA, Virtual PPA, or REC-only model — no infrastructure ownership needed",
    stat: "$0",
    statLabel: "Zero capital expenditure",
    who: ["Large Enterprises", "Data Centers", "Manufacturing Units", "Logistics Companies"],
    what: "Organizations purchase renewable power via Power Purchase Agreements (PPA), Virtual PPA (vPPA), or REC-only model — no infrastructure ownership needed.",
    provides: [
      "Supplier matchmaking",
      "PPA structuring",
      "Tariff negotiation",
      "Carbon offset forecasting",
      "Scope 2 emissions reporting",
      "ESG dashboard integration",
    ],
    benefits: ["Zero CapEx", "Immediate ESG impact", "Scalable procurement", "Flexible contract duration"],
    accent: "#0891b2",
  },
];

const stats = [
  { value: "3", label: "strategic participation pathways" },
  { value: "100%", label: "platform coverage across all models" },
  { value: "Zero", label: "hardware risk for EcoGridia" },
];

const dcFeatures = [
  "Onsite Solar + Storage",
  "Offsite Solar Farm Investment",
  "Virtual PPA",
  "Carbon-neutral reporting",
  "AI-driven energy optimization",
  "Real-time PUE & carbon intensity tracking",
];

const Slide09Models = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const active = selected !== null ? models[selected] : null;

  return (
    <SlideLayout>
      <div className="relative w-full h-full flex flex-col items-center justify-center bg-white overflow-hidden px-14 pt-8 pb-5">

        {/* Grid background */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.5,
          }}
        />

        {/* Header */}
        <div className="relative z-10 text-center mb-5 animate-fade-in">
          <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[13px] font-bold tracking-widest uppercase mb-2">
            Participation Models
          </span>
          <h2 className="text-[40px] font-extrabold text-foreground leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Three Pathways to <span className="text-primary">Clean Energy</span>
          </h2>
          <p className="text-[15px] text-muted-foreground mt-1">
            Own, share, or procure — every organization finds its fit
          </p>
        </div>

        {/* 3-column card grid */}
        <div className="relative z-10 grid grid-cols-3 gap-5 w-full max-w-[1520px]">
          {models.map((mod, i) => {
            const Icon = mod.icon;
            return (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className="flex flex-col gap-4 p-6 rounded-2xl bg-white border-2 border-border/40 hover:border-primary/40 hover:shadow-xl shadow-sm text-left transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${0.05 + i * 0.08}s`, animationFillMode: "forwards", opacity: 0 }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
                    <Icon className="w-5 h-5 text-primary transition-colors" />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-primary/20 bg-primary/5 text-primary">
                        {mod.badge}
                      </span>
                      <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 ml-auto" />
                    </div>
                    <h3 className="text-[20px] font-bold text-foreground leading-tight mt-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {mod.title}
                    </h3>
                    <p className="text-[12px] text-muted-foreground mt-0.5">{mod.subtitle}</p>
                  </div>
                </div>

                <p className="text-[14px] text-muted-foreground leading-snug line-clamp-2">{mod.preview}</p>

                {/* Who tags */}
                <div className="flex flex-wrap gap-1.5">
                  {mod.who.slice(0, 3).map((w) => (
                    <span key={w} className="text-[10px] font-semibold px-2 py-0.5 rounded-full border border-border/50 bg-muted/30 text-muted-foreground">
                      {w}
                    </span>
                  ))}
                  {mod.who.length > 3 && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full border border-border/50 bg-muted/30 text-muted-foreground">
                      +{mod.who.length - 3} more
                    </span>
                  )}
                </div>

                <span className="text-[13px] font-semibold text-primary group-hover:underline">
                  Click for details
                </span>
              </button>
            );
          })}
        </div>

        {/* Data Center path bar */}
        <div className="relative z-10 flex items-center gap-4 mt-6 px-7 py-3.5 rounded-full border-2 border-border/40 bg-white shadow-sm animate-fade-in"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards", opacity: 0 }}>
          <Server className="w-5 h-5 text-eco-teal shrink-0" />
          <span className="text-[13px] font-bold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Data Center Path:</span>
          {dcFeatures.map((f, i) => (
            <span key={i} className="text-[12px] text-muted-foreground flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-eco-teal shrink-0" />
              {f}
            </span>
          ))}
        </div>

        {/* Stats bar */}
        <div className="relative z-10 flex items-center gap-6 mt-5 animate-fade-in" style={{ animationDelay: "0.5s", animationFillMode: "forwards", opacity: 0 }}>
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
              className="relative w-[720px] bg-white rounded-3xl shadow-2xl border border-border/30 p-10 animate-fade-in"
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
                  <span className="text-[13px] text-muted-foreground font-mono">Model {active.num} of 03</span>
                  <h3 className="text-[28px] font-extrabold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {active.title}
                  </h3>
                </div>
                <div className="ml-auto text-right shrink-0">
                  <div className="text-[38px] font-black text-primary leading-none">{active.stat}</div>
                  <div className="text-[12px] text-muted-foreground uppercase tracking-wider mt-1">{active.statLabel}</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-[15px] text-foreground/80 leading-relaxed mb-5 p-4 rounded-xl bg-muted/30 border border-border/20">
                {active.what}
              </p>

              {/* Two columns: Provides + Benefits */}
              <div className="grid grid-cols-2 gap-5 mb-6">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-3">EcoGridia Provides</p>
                  <div className="space-y-2">
                    {active.provides.map((p, i) => (
                      <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-muted/40 border border-border/20">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-[13px] text-foreground">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Key Benefits</p>
                  <div className="space-y-2">
                    {active.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-primary/5 border border-primary/15">
                        <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary text-[13px] font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                        <span className="text-[14px] font-semibold text-primary">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Who tags */}
              <div className="p-4 rounded-2xl bg-primary/5 border border-primary/15">
                <span className="text-[13px] font-bold text-primary uppercase tracking-wider">👥 Ideal For</span>
                <div className="flex gap-2 mt-2.5 flex-wrap">
                  {active.who.map((w, i) => (
                    <span key={i} className="px-4 py-2 rounded-lg bg-white border border-primary/20 text-foreground text-[14px] font-semibold">{w}</span>
                  ))}
                </div>
              </div>

              {/* Nav dots */}
              <div className="flex items-center justify-center gap-2 mt-6">
                {models.map((_, i) => (
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

export default Slide09Models;
