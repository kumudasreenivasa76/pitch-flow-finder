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
      className="w-full h-full overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f0fdf4 0%, #f8fafc 40%, #eff6ff 100%)",
        backgroundImage: `
          linear-gradient(135deg, #f0fdf4 0%, #f8fafc 40%, #eff6ff 100%),
          linear-gradient(to right, #e2e8f0 1px, transparent 1px),
          linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
        `,
        backgroundSize: "100% 100%, 60px 60px, 60px 60px",
      }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.45,
        }}
      />

      <div className="relative z-10 flex flex-col h-full px-16 pt-10 pb-6">

        {/* Header */}
        <div className="text-center mb-6 animate-fade-in">
          <span className="text-[22px] font-bold tracking-widest uppercase" style={{ color: "#16a34a" }}>
            BUSINESS MODEL
          </span>
          <h2 className="text-[56px] font-extrabold text-foreground leading-tight mt-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            High-Margin, Recurring, Global
          </h2>
          <p className="text-[22px] text-muted-foreground mt-1">
            EcoGridia monetizes clean energy across infrastructure, intelligence, markets, partners, and capital — without owning hardware.
          </p>
        </div>

        {/* Highlights row */}
        <div className="flex justify-center gap-4 mb-7 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-3 px-7 py-3 rounded-full border-2 bg-white/80 shadow-sm"
                style={{ borderColor: "#e2e8f0" }}
              >
                <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "#f0fdf4" }}>
                  <Icon className="w-5 h-5" style={{ color: "#16a34a" }} />
                </div>
                <div>
                  <div className="text-[22px] font-extrabold text-foreground leading-none">{h.value}</div>
                  <div className="text-[14px] text-muted-foreground">{h.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Revenue streams grid */}
        <div className="grid grid-cols-3 gap-4 flex-1">
          {streams.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="bg-white/90 rounded-2xl p-6 flex flex-col gap-2 shadow-sm animate-fade-in hover:shadow-md transition-all"
                style={{
                  borderTop: `4px solid ${s.borderColor}`,
                  animationDelay: `${0.12 + i * 0.07}s`,
                  animationFillMode: "forwards",
                  opacity: 0,
                }}
              >
                {/* Icon + name */}
                <div className="flex items-center gap-3 mb-1">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shadow-sm"
                    style={{ background: `${s.color}15`, border: `1.5px solid ${s.color}30` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: s.color }} />
                  </div>
                  <div>
                    <h3 className="text-[20px] font-extrabold text-foreground leading-none" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {s.name}
                    </h3>
                    <p className="text-[13px] text-muted-foreground">{s.sub}</p>
                  </div>
                </div>

                {/* Type badge */}
                <div className="flex items-center justify-between">
                  <span
                    className="px-3 py-1 rounded-full text-[13px] font-bold"
                    style={{ background: s.typeBg, color: s.typeColor }}
                  >
                    {s.type}
                  </span>
                  <span className="text-[20px] font-extrabold" style={{ color: s.color }}>{s.margin}</span>
                </div>

                {/* Drivers */}
                <div className="mt-1 flex flex-col gap-1">
                  {s.drivers.map((d, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: s.color }} />
                      <span className="text-[14px] text-foreground/80">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-5 rounded-2xl flex items-center justify-around py-4 px-10 animate-fade-in"
          style={{
            background: "linear-gradient(90deg, #14532d 0%, #166534 50%, #14532d 100%)",
            animationDelay: "0.6s",
            animationFillMode: "forwards",
            opacity: 0,
          }}
        >
          <div className="text-center">
            <div className="text-[32px] font-extrabold text-white">76–89%</div>
            <div className="text-[15px] text-green-200">Gross Margins</div>
          </div>
          <div className="w-px h-10 bg-white/20" />
          <div className="text-center">
            <div className="text-[32px] font-extrabold text-white">6 Streams</div>
            <div className="text-[15px] text-green-200">Diversified</div>
          </div>
          <div className="w-px h-10 bg-white/20" />
          <div className="text-center">
            <div className="text-[32px] font-extrabold text-white">Zero</div>
            <div className="text-[15px] text-green-200">Hardware Risk</div>
          </div>
          <div className="w-px h-10 bg-white/20" />
          <div className="text-[18px] font-bold text-white italic">
            "EcoGridia captures value at every layer without carrying hardware risk"
          </div>
        </div>

      </div>
    </div>
  </SlideLayout>
);

export default Slide11Business;
