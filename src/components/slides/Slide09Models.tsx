import SlideLayout from "../SlideLayout";
import { useState } from "react";
import {
  Building2, Users, Zap, CheckCircle2, Server,
  Layers, BarChart3, Globe, ChevronDown, ChevronUp,
} from "lucide-react";

/* ─── Model data ─── */
const models = [
  {
    id: 0,
    icon: Building2,
    badge: "Full Ownership",
    badgeColor: "#059669",
    title: "Enterprise Project Ownership",
    subtitle: "Direct Asset Control",
    tagline: "Full Ownership Model",
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
    accent: { bg: "rgba(5,150,105,0.06)", border: "rgba(5,150,105,0.25)", glow: "rgba(5,150,105,0.12)", text: "#059669", tag: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  },
  {
    id: 1,
    icon: Users,
    badge: "Fractional Ownership",
    badgeColor: "#7c3aed",
    title: "Shared Projects",
    subtitle: "Community / Consortium Model",
    tagline: "Distributed Investment",
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
    accent: { bg: "rgba(124,58,237,0.05)", border: "rgba(124,58,237,0.22)", glow: "rgba(124,58,237,0.10)", text: "#7c3aed", tag: "bg-violet-50 text-violet-700 border-violet-200" },
  },
  {
    id: 2,
    icon: Zap,
    badge: "Zero CapEx",
    badgeColor: "#0891b2",
    title: "Bulk Energy Procurement",
    subtitle: "PPA Model",
    tagline: "Pre-Purchase Clean Energy at Scale",
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
    accent: { bg: "rgba(8,145,178,0.05)", border: "rgba(8,145,178,0.22)", glow: "rgba(8,145,178,0.10)", text: "#0891b2", tag: "bg-cyan-50 text-cyan-700 border-cyan-200" },
  },
];

const layers = [
  { icon: Globe, name: "Green Infrastructure Layer", role: "Project planning, vendor onboarding, site development" },
  { icon: BarChart3, name: "Green Intelligence Layer", role: "Dashboard, energy analytics, AI forecasting" },
  { icon: Layers, name: "Green Markets Layer", role: "REC trading, carbon credit marketplace, enterprise ESG reporting" },
];

const dcFeatures = [
  "Onsite Solar + Storage",
  "Offsite Solar Farm Investment",
  "Virtual PPA",
  "Carbon-neutral reporting",
  "AI-driven energy optimization",
  "Real-time PUE & carbon intensity tracking",
];

/* ─── Component ─── */
const Slide09Models = () => {
  const [selected, setSelected] = useState<number>(0);
  const m = models[selected];

  return (
    <SlideLayout>
      <div
        className="flex h-full overflow-hidden"
        style={{ background: "linear-gradient(145deg, #f8fffe 0%, #f0faf7 40%, #f5f9ff 100%)" }}
      >
        {/* ── LEFT: model selector ── */}
        <div
          className="w-[420px] shrink-0 flex flex-col justify-center gap-4 px-10 py-10"
          style={{ borderRight: "1px solid hsl(160,20%,92%)" }}
        >
          {/* Title */}
          <div className="mb-2">
            <h2 className="text-[28px] font-extrabold text-foreground leading-tight">
              Participation <span className="text-primary">Models</span>
            </h2>
            <p className="text-[12px] text-muted-foreground mt-1 leading-snug">
              Three strategic pathways to join the clean energy economy
            </p>
          </div>

          {/* Model buttons */}
          {models.map((mod, i) => {
            const isActive = selected === i;
            const Icon = mod.icon;
            return (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className="text-left rounded-2xl p-5 transition-all duration-200 flex items-start gap-4"
                style={{
                  background: isActive ? mod.accent.bg : "rgba(255,255,255,0.7)",
                  border: `1.5px solid ${isActive ? mod.accent.border : "rgba(0,0,0,0.07)"}`,
                  boxShadow: isActive ? `0 4px 20px ${mod.accent.glow}` : "0 2px 8px rgba(0,0,0,0.04)",
                  transform: isActive ? "translateX(4px)" : undefined,
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: isActive ? mod.accent.border : "rgba(0,0,0,0.05)" }}
                >
                  <Icon className="w-5 h-5" style={{ color: isActive ? mod.accent.text : "rgba(0,0,0,0.35)" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span
                      className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border"
                      style={{ color: mod.accent.text, borderColor: mod.accent.border, background: mod.accent.bg }}
                    >
                      {mod.badge}
                    </span>
                  </div>
                  <p className="text-[14px] font-bold text-foreground leading-tight">{mod.title}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{mod.subtitle}</p>
                </div>
              </button>
            );
          })}

          {/* Data Center special block */}
          <div
            className="mt-2 rounded-2xl p-4"
            style={{ background: "rgba(8,145,178,0.04)", border: "1px solid rgba(8,145,178,0.18)" }}
          >
            <div className="flex items-center gap-2 mb-2.5">
              <Server className="w-4 h-4" style={{ color: "#0891b2" }} />
              <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#0891b2" }}>Data Center Path</span>
            </div>
            <div className="flex flex-col gap-1">
              {dcFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#0891b2" }} />
                  <span className="text-[10px] font-semibold text-foreground/70">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT: detail panel ── */}
        <div className="flex-1 flex flex-col justify-between py-10 px-10 overflow-hidden">
          {/* Model detail */}
          <div
            key={m.id}
            className="flex-1 flex flex-col gap-5 animate-fade-in"
          >
            {/* Header */}
            <div
              className="rounded-2xl p-6"
              style={{ background: m.accent.bg, border: `1.5px solid ${m.accent.border}` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: m.accent.border }}
                >
                  <m.icon className="w-6 h-6" style={{ color: m.accent.text }} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{m.tagline}</p>
                  <h3 className="text-[22px] font-extrabold" style={{ color: m.accent.text }}>{m.title}</h3>
                </div>
              </div>
              <p className="text-[13px] text-foreground/75 leading-relaxed">{m.what}</p>
              {/* Who it's for */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {m.who.map((w) => (
                  <span
                    key={w}
                    className="text-[10px] font-semibold px-2.5 py-1 rounded-full border"
                    style={{ color: m.accent.text, borderColor: m.accent.border, background: "rgba(255,255,255,0.7)" }}
                  >
                    {w}
                  </span>
                ))}
              </div>
            </div>

            {/* Two-col: provides + benefits */}
            <div className="grid grid-cols-2 gap-5 flex-1">
              {/* EcoGridia Provides */}
              <div className="rounded-2xl p-5 bg-white border border-border/40">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">EcoGridia Provides</p>
                <div className="flex flex-col gap-1.5">
                  {m.provides.map((p, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: m.accent.text }} />
                      <span className="text-[12px] font-medium text-foreground/80">{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div
                className="rounded-2xl p-5"
                style={{ background: m.accent.bg, border: `1px solid ${m.accent.border}` }}
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Key Benefits</p>
                <div className="flex flex-col gap-2.5">
                  {m.benefits.map((b, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/70"
                      style={{ border: `1px solid ${m.accent.border}` }}
                    >
                      <span className="text-[16px]">✔</span>
                      <span className="text-[13px] font-bold" style={{ color: m.accent.text }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Architecture connection bar */}
          <div
            className="mt-5 rounded-2xl p-4"
            style={{ background: "rgba(16,185,129,0.04)", border: "1px solid rgba(16,185,129,0.18)" }}
          >
            <p className="text-[9px] font-bold uppercase tracking-widest text-primary mb-2.5">How This Connects to EcoGridia's 3-Layer Architecture</p>
            <div className="grid grid-cols-3 gap-3">
              {layers.map((l, i) => {
                const Icon = l.icon;
                return (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-foreground leading-tight">{l.name}</p>
                      <p className="text-[9px] text-muted-foreground leading-snug mt-0.5">{l.role}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide09Models;
