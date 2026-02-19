import { useState } from "react";
import SlideLayout from "../SlideLayout";
import { Brain, Zap, Wind, Leaf, FileCheck, DollarSign } from "lucide-react";

const streams = [
  {
    id: "voltiq",
    icon: Brain,
    color: "#2563eb",
    typeBg: "#dbeafe",
    typeColor: "#2563eb",
    name: "VoltIQ™",
    sub: "Energy Intelligence",
    type: "SaaS",
    badge: "Recurring",
    badgeBg: "#dbeafe",
    badgeColor: "#2563eb",
    rows: [
      { label: "Starter — SMEs / Small Facilities", value: "$11,430 → $17,145 /yr" },
      { label: "Professional — Mid-size Enterprises", value: "$35,560 → $58,420 /yr" },
      { label: "Enterprise — Large / Data Centers", value: "$82,550 → $139,700 /yr" },
      { label: "WattWise™ AI Savings Share", value: "20% of verified savings" },
    ],
    note: "Avg savings/client: $69k–$127k",
  },
  {
    id: "gridforge",
    icon: Zap,
    color: "#16a34a",
    typeBg: "#dcfce7",
    typeColor: "#16a34a",
    name: "GridForge™",
    sub: "Infrastructure Execution",
    type: "One-Time + %",
    badge: "Fee-Based",
    badgeBg: "#dcfce7",
    badgeColor: "#16a34a",
    rows: [
      { label: "BaselinePro™ Audit", value: "$27,940 → $50,800" },
      { label: "Project Management Fee", value: "12% of project value" },
      { label: "Avg Project Size", value: "$108k → $222k" },
      { label: "Site Management SaaS", value: "$2,794 → $5,080 /yr" },
    ],
    note: "Capital-light, implementation-rich",
  },
  {
    id: "gridlink",
    icon: Wind,
    color: "#7c3aed",
    typeBg: "#ede9fe",
    typeColor: "#7c3aed",
    name: "GridLink™",
    sub: "Renewable Procurement",
    type: "Transaction",
    badge: "Transactional",
    badgeBg: "#ede9fe",
    badgeColor: "#7c3aed",
    rows: [
      { label: "PPA Structuring Commission", value: "8%" },
      { label: "Avg PPA Contract", value: "$635k → $1.2M" },
      { label: "VPPA Advisory Commission", value: "6%" },
      { label: "Avg VPPA Contract", value: "$1.0M → $2.2M" },
    ],
    note: "Scales with volume — zero asset ownership",
  },
  {
    id: "recmatrix",
    icon: Leaf,
    color: "#ea580c",
    typeBg: "#ffedd5",
    typeColor: "#ea580c",
    name: "RECMatrix™",
    sub: "Carbon Marketplace",
    type: "Markup + Spread",
    badge: "Platform",
    badgeBg: "#ffedd5",
    badgeColor: "#ea580c",
    rows: [
      { label: "REC Markup", value: "8%" },
      { label: "Avg REC Spend / Client", value: "$33k → $89k" },
      { label: "Client Adoption Rate", value: "55% → 85%" },
      { label: "Carbon Credit Spreads", value: "Portfolio managed" },
    ],
    note: "Margin-rich, platform-based",
  },
  {
    id: "carbonos",
    icon: FileCheck,
    color: "#ca8a04",
    typeBg: "#fef9c3",
    typeColor: "#ca8a04",
    name: "CarbonOS™",
    sub: "Compliance & ESG AI",
    type: "Recurring SaaS",
    badge: "Recurring",
    badgeBg: "#fef9c3",
    badgeColor: "#ca8a04",
    rows: [
      { label: "ESG Audit", value: "$760 → $1,330" },
      { label: "Enterprise Carbon SaaS", value: "Bundled w/ VoltIQ Enterprise" },
      { label: "Carbon Accounting + Reporting", value: "Subscription" },
      { label: "Products: CarbonLedger™ · ComplySphere™ · AuditTrail360™", value: "" },
    ],
    note: "Strong recurring compliance revenue",
  },
  {
    id: "capitalflow",
    icon: DollarSign,
    color: "#db2777",
    typeBg: "#fce7f3",
    typeColor: "#db2777",
    name: "CapitalFlow™",
    sub: "Structured Finance",
    type: "Advisory Fees",
    badge: "Optional",
    badgeBg: "#fce7f3",
    badgeColor: "#db2777",
    rows: [
      { label: "Incentive Optimization", value: "% of incentive captured" },
      { label: "Financing Matchmaking", value: "Advisory fee" },
      { label: "Tax Credit Structuring", value: "Success-based" },
      { label: "Margin Profile", value: "~70–75%" },
    ],
    note: "No balance sheet risk",
  },
];

const summary = [
  { label: "SaaS (Recurring)", pct: "High", color: "#2563eb" },
  { label: "Transaction-Based", pct: "Med-High", color: "#7c3aed" },
  { label: "Performance-Based", pct: "Scalable", color: "#16a34a" },
  { label: "Advisory", pct: "Selective", color: "#db2777" },
];

const Slide12Pricing = () => {
  const [active, setActive] = useState("voltiq");
  const selected = streams.find((s) => s.id === active)!;

  return (
    <SlideLayout>
      <div className="w-full h-full overflow-hidden relative" style={{ background: "#ffffff" }}>
        {/* Graph-paper grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #c7d2d8 1px, transparent 1px), linear-gradient(to bottom, #c7d2d8 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.35,
          }}
        />
        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-1 pointer-events-none"
          style={{ background: "linear-gradient(90deg, #16a34a, #2563eb, #7c3aed, #db2777)" }}
        />

        <div className="relative z-10 flex flex-col h-full px-14 pt-9 pb-5">
          {/* Header */}
          <div className="text-center mb-5 animate-fade-in">
            <span className="text-[20px] font-bold tracking-widest uppercase" style={{ color: "#16a34a" }}>
              ECOGRIDIA PRICING MODEL
            </span>
            <h2 className="text-[46px] font-extrabold text-foreground leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Multi-Layer Monetization
            </h2>
            <p className="text-[18px] text-muted-foreground">
              Across Infrastructure, Intelligence & Carbon
            </p>
          </div>

          {/* Main dashboard */}
          <div className="flex gap-5 flex-1 min-h-0">
            {/* Left sidebar — stream tabs */}
            <div className="flex flex-col gap-2 w-[260px] shrink-0">
              {streams.map((s) => {
                const Icon = s.icon;
                const isActive = s.id === active;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActive(s.id)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border-2 text-left transition-all duration-200"
                    style={{
                      borderColor: isActive ? s.color : "#e5e7eb",
                      background: isActive ? `${s.color}10` : "rgba(255,255,255,0.8)",
                      boxShadow: isActive ? `0 0 0 1px ${s.color}20, 0 4px 12px ${s.color}15` : "none",
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: isActive ? `${s.color}20` : "#f3f4f6" }}
                    >
                      <Icon className="w-4 h-4" style={{ color: s.color }} />
                    </div>
                    <div>
                      <div className="text-[15px] font-extrabold text-foreground leading-none">{s.name}</div>
                      <div className="text-[12px] text-muted-foreground">{s.sub}</div>
                    </div>
                    <div className="ml-auto">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full" style={{ background: s.badgeBg, color: s.badgeColor }}>
                        {s.badge}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Center — detail card */}
            <div
              className="flex-1 bg-white/90 rounded-2xl border-2 p-7 flex flex-col animate-fade-in"
              style={{ borderColor: selected.color, borderTopWidth: "4px" }}
            >
              {/* Card header */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shadow"
                  style={{ background: `${selected.color}15`, border: `2px solid ${selected.color}30` }}
                >
                  <selected.icon className="w-7 h-7" style={{ color: selected.color }} />
                </div>
                <div>
                  <h3 className="text-[28px] font-extrabold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {selected.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-[14px] text-muted-foreground">{selected.sub}</span>
                    <span className="px-3 py-0.5 rounded-full text-[13px] font-bold" style={{ background: selected.typeBg, color: selected.typeColor }}>
                      {selected.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* Pricing rows */}
              <div className="flex flex-col gap-2 flex-1">
                {selected.rows.map((r, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between px-5 py-3 rounded-xl"
                    style={{ background: i % 2 === 0 ? `${selected.color}07` : "transparent", border: `1px solid ${selected.color}15` }}
                  >
                    <span className="text-[16px] text-foreground/80">{r.label}</span>
                    {r.value && (
                      <span className="text-[17px] font-extrabold" style={{ color: selected.color }}>{r.value}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Note */}
              <div className="mt-4 px-5 py-3 rounded-xl flex items-center gap-2" style={{ background: `${selected.color}10` }}>
                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: selected.color }} />
                <span className="text-[15px] font-semibold italic" style={{ color: selected.color }}>{selected.note}</span>
              </div>
            </div>

            {/* Right — summary panel */}
            <div className="w-[220px] shrink-0 flex flex-col gap-4">
              <div className="bg-white/90 rounded-2xl border border-gray-200 p-5 flex-1">
                <h4 className="text-[15px] font-extrabold text-foreground mb-4 uppercase tracking-wide">Revenue Mix</h4>
                <div className="flex flex-col gap-3">
                  {summary.map((s, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[13px] text-foreground/80">{s.label}</span>
                        <span className="text-[13px] font-bold" style={{ color: s.color }}>{s.pct}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            background: s.color,
                            width: s.pct === "High" ? "90%" : s.pct === "Med-High" ? "70%" : s.pct === "Scalable" ? "55%" : "35%",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* KPIs */}
              {[
                { label: "Blended Margin", value: "76–89%", color: "#16a34a" },
                { label: "LTV : CAC", value: "5×", color: "#2563eb" },
                { label: "Payback Period", value: "16 mo", color: "#7c3aed" },
              ].map((k, i) => (
                <div
                  key={i}
                  className="bg-white/90 rounded-2xl border p-4 text-center"
                  style={{ borderColor: `${k.color}30`, borderTopWidth: "3px", borderTopColor: k.color }}
                >
                  <div className="text-[26px] font-extrabold" style={{ color: k.color }}>{k.value}</div>
                  <div className="text-[13px] text-muted-foreground">{k.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="mt-4 rounded-2xl flex items-center justify-around py-3 px-10 animate-fade-in"
            style={{ background: "linear-gradient(90deg, #14532d 0%, #166534 50%, #14532d 100%)", animationDelay: "0.4s", animationFillMode: "forwards", opacity: 0 }}
          >
            <div className="text-center">
              <div className="text-[26px] font-extrabold text-white">6 Streams</div>
              <div className="text-[13px] text-green-200">Diversified Revenue</div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-center">
              <div className="text-[26px] font-extrabold text-white">76–89%</div>
              <div className="text-[13px] text-green-200">Gross Margins</div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-center">
              <div className="text-[26px] font-extrabold text-white">Zero</div>
              <div className="text-[13px] text-green-200">Hardware Risk</div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-[16px] font-bold text-white italic">
              "EcoGridia captures margin at every layer of the clean energy stack"
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide12Pricing;
