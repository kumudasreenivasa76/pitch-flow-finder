import SlideLayout from "../SlideLayout";
import { TrendingUp, RefreshCw, Shield, Globe, Zap, Brain, Wind, Leaf, FileCheck, DollarSign } from "lucide-react";

const highlights = [
  { icon: TrendingUp, value: "80%+", label: "Avg Gross Margin" },
  { icon: RefreshCw, value: "Recurring", label: "Revenue Type" },
  { icon: Shield, value: "Zero", label: "Hardware Risk" },
  { icon: Globe, value: "Enabled", label: "Global Scale" },
];

const streams = [
  {
    icon: Zap,
    color: "#16a34a",
    borderColor: "#16a34a",
    name: "GridForge™",
    sub: "Infrastructure Orchestration",
    type: "Recurring + Fee",
    typeColor: "#16a34a",
    typeBg: "#dcfce7",
    margin: "~80%",
    drivers: ["BaselinePro™ audits ($27k→$50k)", "Project orchestration fee (12%)", "Site management SaaS"],
  },
  {
    icon: Brain,
    color: "#2563eb",
    borderColor: "#2563eb",
    name: "VoltIQ™",
    sub: "Energy Intelligence OS",
    type: "SaaS + Savings Share",
    typeColor: "#2563eb",
    typeBg: "#dbeafe",
    margin: "~85–90%",
    drivers: ["Starter: $11k→$17k", "Professional: $35k→$58k", "WattWise AI: 20% of savings"],
  },
  {
    icon: Wind,
    color: "#7c3aed",
    borderColor: "#7c3aed",
    name: "GridLink™",
    sub: "Renewable Procurement",
    type: "Transaction",
    typeColor: "#7c3aed",
    typeBg: "#ede9fe",
    margin: "~70–80%",
    drivers: ["PPA commission: 8%", "VPPA advisory: 6%", "PPA: $635k→$1.2M"],
  },
  {
    icon: Leaf,
    color: "#ea580c",
    borderColor: "#ea580c",
    name: "RECMatrix™",
    sub: "Carbon Marketplace",
    type: "Transaction + Platform",
    typeColor: "#ea580c",
    typeBg: "#ffedd5",
    margin: "~75–85%",
    drivers: ["8% REC markup", "Carbon credit spreads", "55%→85% attach rate"],
  },
  {
    icon: FileCheck,
    color: "#ca8a04",
    borderColor: "#ca8a04",
    name: "CarbonOS™",
    sub: "Compliance & ESG AI",
    type: "Recurring SaaS",
    typeColor: "#ca8a04",
    typeBg: "#fef9c3",
    margin: "~85%",
    drivers: ["CarbonLedger™ & ComplySphere™", "AuditTrail360™", "ESG audits: $760→$1,330"],
  },
  {
    icon: DollarSign,
    color: "#16a34a",
    borderColor: "#16a34a",
    name: "CapitalFlow™",
    sub: "Structured Finance",
    type: "Fee-Based",
    typeColor: "#db2777",
    typeBg: "#fce7f3",
    margin: "~70–75%",
    drivers: ["Tax credit optimization", "Financing facilitation", "Incentive navigation"],
  },
];

const Slide11Business = () => (
  <SlideLayout>
    <div
      className="w-full h-full overflow-hidden relative"
      style={{ background: "#ffffff" }}
    >
      {/* Graph-paper grid — matches reference photo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #c7d2d8 1px, transparent 1px), linear-gradient(to bottom, #c7d2d8 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.35,
        }}
      />
      {/* Subtle top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 pointer-events-none" style={{ background: "linear-gradient(90deg, #16a34a, #2563eb, #7c3aed)" }} />

      <div className="relative z-10 flex flex-col h-full px-14 pt-8 pb-5">

        {/* Header */}
        <div className="text-center mb-4 animate-fade-in">
          <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[13px] font-bold tracking-widest uppercase mb-2">
            Revenue Streams
          </span>
          <h2 className="text-[40px] font-extrabold text-foreground leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            High-Margin, Recurring, <span className="text-primary">Global</span>
          </h2>
          <p className="text-[15px] text-muted-foreground mt-1">
            EcoGridia monetizes clean energy across infrastructure, intelligence, markets, partners, and capital — without owning hardware.
          </p>
        </div>

        {/* Highlights row */}
        <div className="flex justify-center gap-3 mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border-2 bg-white/80 shadow-sm"
                style={{ borderColor: "#e2e8f0" }}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "#f0fdf4" }}>
                  <Icon className="w-4 h-4" style={{ color: "#16a34a" }} />
                </div>
                <div>
                  <div className="text-[18px] font-extrabold text-foreground leading-none">{h.value}</div>
                  <div className="text-[11px] text-muted-foreground">{h.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Revenue streams grid */}
        <div className="grid grid-cols-3 gap-3 flex-1">
          {streams.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="bg-white/90 rounded-xl p-4 flex flex-col gap-1.5 shadow-sm animate-fade-in hover:shadow-md transition-all"
                style={{
                  borderTop: `3px solid ${s.borderColor}`,
                  animationDelay: `${0.12 + i * 0.07}s`,
                  animationFillMode: "forwards",
                  opacity: 0,
                }}
              >
                <div className="flex items-center gap-2.5 mb-1">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shadow-sm"
                    style={{ background: `${s.color}15`, border: `1.5px solid ${s.color}30` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: s.color }} />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-extrabold text-foreground leading-none" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {s.name}
                    </h3>
                    <p className="text-[11px] text-muted-foreground">{s.sub}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[11px] font-bold"
                    style={{ background: s.typeBg, color: s.typeColor }}
                  >
                    {s.type}
                  </span>
                  <span className="text-[16px] font-extrabold" style={{ color: s.color }}>{s.margin}</span>
                </div>

                <div className="mt-1 flex flex-col gap-0.5">
                  {s.drivers.map((d, j) => (
                    <div key={j} className="flex items-start gap-1.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: s.color }} />
                      <span className="text-[12px] text-foreground/80">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="mt-4 rounded-2xl flex items-center justify-around py-3 px-8 animate-fade-in"
          style={{
            background: "linear-gradient(90deg, #14532d 0%, #166534 50%, #14532d 100%)",
            animationDelay: "0.6s",
            animationFillMode: "forwards",
            opacity: 0,
          }}
        >
          <div className="text-center">
            <div className="text-[22px] font-extrabold text-white">76–89%</div>
            <div className="text-[11px] text-green-200">Gross Margins</div>
          </div>
          <div className="w-px h-8 bg-white/20" />
          <div className="text-center">
            <div className="text-[22px] font-extrabold text-white">6 Streams</div>
            <div className="text-[11px] text-green-200">Diversified</div>
          </div>
          <div className="w-px h-8 bg-white/20" />
          <div className="text-center">
            <div className="text-[22px] font-extrabold text-white">Zero</div>
            <div className="text-[11px] text-green-200">Hardware Risk</div>
          </div>
          <div className="w-px h-8 bg-white/20" />
          <div className="text-[14px] font-bold text-white italic max-w-[350px]">
            "EcoGridia captures value at every layer without carrying hardware risk"
          </div>
        </div>

      </div>
    </div>
  </SlideLayout>
);

export default Slide11Business;
