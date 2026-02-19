import { useState } from "react";
import SlideLayout from "../SlideLayout";
import { Brain, Zap, Wind, Leaf, FileCheck, DollarSign, GraduationCap, Building2, Wrench, TreePine, Users2 } from "lucide-react";

/* ═══ VIEW 1: BY PRODUCT STREAM ═══ */
const streams = [
  {
    id: "voltiq", icon: Brain, color: "#2563eb",
    name: "VoltIQ™", sub: "Infrastructure Intelligence SaaS", badge: "Recurring",
    rows: [
      { label: "VoltIQ Starter — Small facilities / schools", value: "$11,340 /yr" },
      { label: "VoltIQ Professional — Mid-size enterprises", value: "$35,280 /yr" },
      { label: "VoltIQ Enterprise — Data centers / hyperscale", value: "$81,900 /yr" },
    ],
    note: "75–85% margin • Sticky platform • Primary recurring engine",
  },
  {
    id: "baseline", icon: FileCheck, color: "#16a34a",
    name: "BaselinePro™", sub: "Audit (One-Time)", badge: "Land & Expand",
    rows: [
      { label: "BaselinePro Audit", value: "$27,720 → $50,400" },
      { label: "Use case: Energy baseline + ESG readiness", value: "" },
      { label: "Drives SaaS conversion funnel", value: "💡" },
    ],
    note: "Land-and-expand entry product",
  },
  {
    id: "wattwise", icon: Zap, color: "#7c3aed",
    name: "WattWise™ AI", sub: "Optimization (Performance Share)", badge: "Outcome-based",
    rows: [
      { label: "Pricing Model", value: "20% of verified savings" },
      { label: "Avg Client Savings", value: "$69k → $126k" },
      { label: "EcoGridia Take per Client", value: "$13.8k → $25.2k" },
    ],
    note: "No hardware risk • Outcome-based • Very VC-attractive",
  },
  {
    id: "gridlink", icon: Wind, color: "#0891b2",
    name: "GridLink™", sub: "Renewable Procurement", badge: "Transaction",
    rows: [
      { label: "PPA Structuring Commission", value: "8%" },
      { label: "Avg PPA Contract", value: "$630k → $1.2M" },
      { label: "VPPA Advisory Commission", value: "6%" },
      { label: "Avg VPPA Contract", value: "$1.0M → $2.14M" },
    ],
    note: "Scales with volume — zero asset ownership",
  },
  {
    id: "recmatrix", icon: Leaf, color: "#ea580c",
    name: "RECMatrix™", sub: "Carbon Marketplace", badge: "Platform",
    rows: [
      { label: "REC Markup", value: "8%" },
      { label: "Avg REC Spend / Client", value: "$32,760 → $88,200" },
      { label: "Revenue per Client", value: "$2.6k → $7k" },
    ],
    note: "Recurring compliance need • Marketplace moat • Scales with regulation",
  },
  {
    id: "solarforge", icon: DollarSign, color: "#db2777",
    name: "SolarForge™", sub: "On-Site Projects", badge: "Asset-Light",
    rows: [
      { label: "Dev Fee", value: "12%" },
      { label: "Avg Project", value: "$441k → $1.0M" },
      { label: "Revenue per Project", value: "$53k → $120k" },
    ],
    note: "Partner-funded • No capex burden • High ticket size",
  },
  {
    id: "education", icon: GraduationCap, color: "#ca8a04",
    name: "Education & SME", sub: "Platform (Wedge)", badge: "Beachhead",
    rows: [
      { label: "SME SaaS", value: "$819 → $1,159 /yr" },
      { label: "Site Management", value: "$2,772 → $5,040 /yr" },
      { label: "ESG Audit", value: "$756 → $1,323" },
      { label: "Consulting", value: "$32,760 → $55,440" },
    ],
    note: "Beachhead market • Faster sales cycles • Pipeline builder",
  },
];

/* ═══ VIEW 2: BY STAKEHOLDER ═══ */
const stakeholders = [
  {
    id: "schools", icon: GraduationCap, color: "#16a34a",
    name: "Schools & Universities", sub: "Beachhead Market",
    acv: "$3k–$6k", margin: "~75%", strategy: "Fast sales cycles • High volume • Pipeline builder into enterprise",
    rows: [
      { product: "VoltIQ Starter", pricing: "$819–$1,159 /yr", type: "Recurring" },
      { product: "Site Management", pricing: "$2,772–$5,040 /yr", type: "Recurring" },
      { product: "ESG Audit", pricing: "$756–$1,323", type: "One-time" },
      { product: "Carbon Credits", pricing: "Market pass-through + margin", type: "Transaction" },
      { product: "Consulting", pricing: "$32.8k–$55.4k", type: "Services" },
    ],
  },
  {
    id: "enterprise", icon: Building2, color: "#2563eb",
    name: "Enterprises & Data Centers", sub: "Core Revenue Engine",
    acv: "$25k–$100k+", margin: "75–85%", strategy: "Land with audit • Expand to SaaS • Monetize procurement • Capture carbon layer",
    rows: [
      { product: "BaselinePro Audit", pricing: "$27.7k–$50.4k", type: "One-time" },
      { product: "VoltIQ Professional", pricing: "$35.3k /yr", type: "Recurring" },
      { product: "VoltIQ Enterprise", pricing: "$81.9k /yr", type: "Recurring" },
      { product: "WattWise AI", pricing: "20% of savings", type: "Performance" },
      { product: "GridLink PPA", pricing: "8% commission", type: "Transaction" },
      { product: "VPPA Advisory", pricing: "6% commission", type: "Transaction" },
      { product: "RECMatrix", pricing: "8% markup", type: "Transaction" },
    ],
  },
  {
    id: "vendors", icon: Wrench, color: "#7c3aed",
    name: "Vendors / EPC Partners", sub: "Marketplace Supply Side",
    acv: "$2k–$5k /yr", margin: "~70%", strategy: "Build supply liquidity • Enable project execution • Increase platform stickiness",
    rows: [
      { product: "Vendor Platform Fee", pricing: "~10% SaaS take", type: "Recurring" },
      { product: "Marketplace Fee", pricing: "2% per transaction", type: "Transaction" },
      { product: "Avg Vendor Transaction", pricing: "$10k → $32k", type: "GMV driver" },
    ],
  },
  {
    id: "landowners", icon: TreePine, color: "#ea580c",
    name: "Landowners / Project Hosts", sub: "Project Origination Layer",
    acv: "$53k–$120k /project", margin: "70%+", strategy: "No asset ownership • Partner-funded builds • High-margin facilitation",
    rows: [
      { product: "SolarForge Dev Fee", pricing: "12% of project value", type: "Transaction" },
      { product: "Avg Project Value", pricing: "$441k → $1.0M", type: "High-ticket" },
    ],
  },
  {
    id: "consumers", icon: Users2, color: "#ca8a04",
    name: "Climate Subscribers", sub: "Future Expansion Layer",
    acv: "~$96 /yr", margin: "—", strategy: "Brand layer • Data flywheel • Not core revenue",
    rows: [
      { product: "Consumer Subscription", pricing: "~$8 /month (~$96/yr)", type: "Recurring" },
    ],
  },
];

const typeBadgeColor: Record<string, { bg: string; text: string }> = {
  "Recurring": { bg: "#dbeafe", text: "#2563eb" },
  "One-time": { bg: "#dcfce7", text: "#16a34a" },
  "Transaction": { bg: "#ede9fe", text: "#7c3aed" },
  "Performance": { bg: "#fce7f3", text: "#db2777" },
  "Services": { bg: "#fef9c3", text: "#ca8a04" },
  "GMV driver": { bg: "#ffedd5", text: "#ea580c" },
  "High-ticket": { bg: "#ffedd5", text: "#ea580c" },
};

const Slide12Pricing = () => {
  const [view, setView] = useState<"product" | "stakeholder">("product");
  const [activeStream, setActiveStream] = useState("voltiq");
  const [activeStakeholder, setActiveStakeholder] = useState("schools");

  const selectedStream = streams.find((s) => s.id === activeStream)!;
  const selectedStakeholder = stakeholders.find((s) => s.id === activeStakeholder)!;

  return (
    <SlideLayout>
      <div className="relative w-full h-full flex flex-col items-center justify-center bg-white overflow-hidden px-14 pt-8 pb-5">
        {/* Graph-paper grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
            backgroundSize: "60px 60px", opacity: 0.5,
          }}
        />

        <div className="relative z-10 flex flex-col items-center w-full">
          {/* Header — centered like Slide 3 */}
          <div className="text-center mb-4 animate-fade-in">
            <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[13px] font-bold tracking-widest uppercase mb-2">Pricing Model</span>
            <h2 className="text-[40px] font-extrabold text-foreground leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Multi-Stream · High-Margin · <span className="text-primary">Asset-Light</span>
            </h2>
            <p className="text-[15px] text-muted-foreground mt-1">
              Diversified monetization across products and stakeholder segments
            </p>

            {/* Toggle */}
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="flex items-center bg-muted/50 rounded-full p-1 border border-border/40">
                <button
                  onClick={() => setView("product")}
                  className={`px-5 py-2 rounded-full text-[14px] font-bold transition-all duration-200 ${view === "product" ? "bg-primary text-white shadow-md" : "text-muted-foreground hover:text-foreground"}`}
                >
                  By Product
                </button>
                <button
                  onClick={() => setView("stakeholder")}
                  className={`px-5 py-2 rounded-full text-[14px] font-bold transition-all duration-200 ${view === "stakeholder" ? "bg-primary text-white shadow-md" : "text-muted-foreground hover:text-foreground"}`}
                >
                  By Stakeholder
                </button>
              </div>
            </div>
          </div>

          {/* ═══ PRODUCT VIEW ═══ */}
          {view === "product" && (
            <div className="flex gap-5 flex-1 min-h-0 animate-fade-in">
              {/* Left sidebar */}
              <div className="flex flex-col gap-1.5 w-[250px] shrink-0 overflow-y-auto">
                {streams.map((s) => {
                  const Icon = s.icon;
                  const isActive = s.id === activeStream;
                  return (
                    <button key={s.id} onClick={() => setActiveStream(s.id)}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl border-2 text-left transition-all duration-200"
                      style={{
                        borderColor: isActive ? s.color : "#e5e7eb",
                        background: isActive ? `${s.color}10` : "rgba(255,255,255,0.8)",
                        boxShadow: isActive ? `0 0 0 1px ${s.color}20, 0 4px 12px ${s.color}15` : "none",
                      }}
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: isActive ? `${s.color}20` : "#f3f4f6" }}>
                        <Icon className="w-4 h-4" style={{ color: s.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[13px] font-extrabold text-foreground leading-none">{s.name}</div>
                        <div className="text-[10px] text-muted-foreground truncate">{s.sub}</div>
                      </div>
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full shrink-0"
                        style={{ background: `${s.color}15`, color: s.color }}>{s.badge}</span>
                    </button>
                  );
                })}
              </div>

              {/* Center detail */}
              <div className="flex-1 bg-white/90 rounded-2xl border-2 p-6 flex flex-col animate-fade-in"
                style={{ borderColor: selectedStream.color, borderTopWidth: "4px" }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow"
                    style={{ background: `${selectedStream.color}15`, border: `2px solid ${selectedStream.color}30` }}>
                    <selectedStream.icon className="w-6 h-6" style={{ color: selectedStream.color }} />
                  </div>
                  <div>
                    <h3 className="text-[26px] font-extrabold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {selectedStream.name}
                    </h3>
                    <span className="text-[13px] text-muted-foreground">{selectedStream.sub}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  {selectedStream.rows.map((r, i) => (
                    <div key={i} className="flex items-center justify-between px-5 py-3 rounded-xl"
                      style={{ background: i % 2 === 0 ? `${selectedStream.color}07` : "transparent", border: `1px solid ${selectedStream.color}15` }}>
                      <span className="text-[15px] text-foreground/80">{r.label}</span>
                      {r.value && <span className="text-[16px] font-extrabold" style={{ color: selectedStream.color }}>{r.value}</span>}
                    </div>
                  ))}
                </div>
                <div className="mt-4 px-5 py-3 rounded-xl flex items-center gap-2" style={{ background: `${selectedStream.color}10` }}>
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: selectedStream.color }} />
                  <span className="text-[14px] font-semibold italic" style={{ color: selectedStream.color }}>{selectedStream.note}</span>
                </div>
              </div>

              {/* Right KPIs */}
              <div className="w-[200px] shrink-0 flex flex-col gap-3">
                <div className="bg-white/90 rounded-2xl border border-border/40 p-4 flex-1">
                  <h4 className="text-[13px] font-extrabold text-foreground mb-3 uppercase tracking-wide">Revenue Mix</h4>
                  {[
                    { label: "SaaS (Recurring)", pct: 90, color: "#2563eb" },
                    { label: "Transaction", pct: 70, color: "#7c3aed" },
                    { label: "Performance", pct: 55, color: "#16a34a" },
                    { label: "Advisory", pct: 35, color: "#db2777" },
                  ].map((s, i) => (
                    <div key={i} className="mb-2.5">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[11px] text-foreground/80">{s.label}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                        <div className="h-full rounded-full" style={{ background: s.color, width: `${s.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                {[
                  { label: "Blended Margin", value: "70–85%", color: "#16a34a" },
                  { label: "LTV : CAC", value: "5×", color: "#2563eb" },
                  { label: "Payback", value: "6–12 mo", color: "#7c3aed" },
                ].map((k, i) => (
                  <div key={i} className="bg-white/90 rounded-2xl border p-3 text-center"
                    style={{ borderColor: `${k.color}30`, borderTopWidth: "3px", borderTopColor: k.color }}>
                    <div className="text-[22px] font-extrabold" style={{ color: k.color }}>{k.value}</div>
                    <div className="text-[11px] text-muted-foreground">{k.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ═══ STAKEHOLDER VIEW ═══ */}
          {view === "stakeholder" && (
            <div className="flex gap-5 flex-1 min-h-0 animate-fade-in">
              {/* Left sidebar */}
              <div className="flex flex-col gap-1.5 w-[250px] shrink-0">
                {stakeholders.map((s) => {
                  const Icon = s.icon;
                  const isActive = s.id === activeStakeholder;
                  return (
                    <button key={s.id} onClick={() => setActiveStakeholder(s.id)}
                      className="flex items-center gap-2.5 px-3 py-3 rounded-xl border-2 text-left transition-all duration-200"
                      style={{
                        borderColor: isActive ? s.color : "#e5e7eb",
                        background: isActive ? `${s.color}10` : "rgba(255,255,255,0.8)",
                        boxShadow: isActive ? `0 0 0 1px ${s.color}20, 0 4px 12px ${s.color}15` : "none",
                      }}
                    >
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: isActive ? `${s.color}20` : "#f3f4f6" }}>
                        <Icon className="w-4 h-4" style={{ color: s.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[13px] font-extrabold text-foreground leading-none">{s.name}</div>
                        <div className="text-[10px] text-muted-foreground">{s.sub}</div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Center detail */}
              <div className="flex-1 bg-white/90 rounded-2xl border-2 p-6 flex flex-col animate-fade-in"
                style={{ borderColor: selectedStakeholder.color, borderTopWidth: "4px" }}>
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow"
                    style={{ background: `${selectedStakeholder.color}15`, border: `2px solid ${selectedStakeholder.color}30` }}>
                    <selectedStakeholder.icon className="w-6 h-6" style={{ color: selectedStakeholder.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[26px] font-extrabold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {selectedStakeholder.name}
                    </h3>
                    <span className="text-[13px] text-muted-foreground">{selectedStakeholder.sub}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-[28px] font-black" style={{ color: selectedStakeholder.color }}>{selectedStakeholder.acv}</div>
                    <div className="text-[11px] text-muted-foreground uppercase tracking-wider">Typical ACV</div>
                  </div>
                </div>

                {/* Pricing table */}
                <div className="flex-1 overflow-y-auto">
                  {/* Table header */}
                  <div className="grid grid-cols-[1fr_180px_110px] gap-2 px-4 py-2 mb-1">
                    <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Product</span>
                    <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Pricing</span>
                    <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Type</span>
                  </div>
                  {selectedStakeholder.rows.map((r, i) => {
                    const badge = typeBadgeColor[r.type] || { bg: "#f3f4f6", text: "#6b7280" };
                    return (
                      <div key={i} className="grid grid-cols-[1fr_180px_110px] gap-2 items-center px-4 py-3 rounded-xl mb-1"
                        style={{ background: i % 2 === 0 ? `${selectedStakeholder.color}06` : "transparent", border: `1px solid ${selectedStakeholder.color}12` }}>
                        <span className="text-[15px] font-semibold text-foreground">{r.product}</span>
                        <span className="text-[15px] font-extrabold" style={{ color: selectedStakeholder.color }}>{r.pricing}</span>
                        <span className="text-[11px] font-bold px-2.5 py-1 rounded-full text-center"
                          style={{ background: badge.bg, color: badge.text }}>{r.type}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Strategy note */}
                <div className="mt-4 px-5 py-3 rounded-xl flex items-center gap-2" style={{ background: `${selectedStakeholder.color}10` }}>
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: selectedStakeholder.color }} />
                  <span className="text-[14px] font-semibold italic" style={{ color: selectedStakeholder.color }}>
                    {selectedStakeholder.strategy}
                  </span>
                </div>
              </div>

              {/* Right — ACV summary */}
              <div className="w-[220px] shrink-0 flex flex-col gap-3">
                <div className="bg-white/90 rounded-2xl border border-border/40 p-4">
                  <h4 className="text-[13px] font-extrabold text-foreground mb-3 uppercase tracking-wide">Blended ACV</h4>
                  {[
                    { seg: "Education / SME", acv: "$4k–$6k", color: "#16a34a" },
                    { seg: "Vendors", acv: "$3k–$5k", color: "#7c3aed" },
                    { seg: "Enterprise", acv: "$20k–$40k+", color: "#2563eb" },
                    { seg: "Data Centers", acv: "$40k–$100k+", color: "#0891b2" },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-border/20 last:border-0">
                      <span className="text-[12px] text-foreground/80">{s.seg}</span>
                      <span className="text-[13px] font-extrabold" style={{ color: s.color }}>{s.acv}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white/90 rounded-2xl border border-border/40 p-4">
                  <h4 className="text-[13px] font-extrabold text-foreground mb-3 uppercase tracking-wide">Platform Economics</h4>
                  {[
                    { label: "Blended Margin", value: "70–75%" },
                    { label: "Revenue Type", value: "Recurring + Txn" },
                    { label: "Hardware Risk", value: "Zero" },
                    { label: "Payback", value: "6–12 months" },
                    { label: "Motion", value: "Land → Expand" },
                  ].map((k, i) => (
                    <div key={i} className="flex items-center justify-between py-1.5 border-b border-border/20 last:border-0">
                      <span className="text-[11px] text-muted-foreground">{k.label}</span>
                      <span className="text-[12px] font-bold text-foreground">{k.value}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-primary/5 rounded-2xl border border-primary/20 p-4 text-center">
                  <div className="text-[11px] text-muted-foreground mb-1">Gross Margin</div>
                  <div className="text-[28px] font-black text-primary">70–85%</div>
                </div>
              </div>
            </div>
          )}

          {/* Bottom bar */}
          <div className="mt-4 rounded-2xl flex items-center justify-around py-3 px-10 animate-fade-in"
            style={{ background: "linear-gradient(90deg, #14532d 0%, #166534 50%, #14532d 100%)", animationDelay: "0.3s", animationFillMode: "forwards", opacity: 0 }}>
            <div className="text-center">
              <div className="text-[24px] font-extrabold text-white">7 Streams</div>
              <div className="text-[12px] text-green-200">Diversified Revenue</div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-center">
              <div className="text-[24px] font-extrabold text-white">5 Segments</div>
              <div className="text-[12px] text-green-200">Multi-sided Platform</div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-center">
              <div className="text-[24px] font-extrabold text-white">70–85%</div>
              <div className="text-[12px] text-green-200">Gross Margins</div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-[14px] font-bold text-white italic max-w-[420px]">
              "EcoGridia monetizes energy intelligence, procurement, and carbon markets through a high-margin, asset-light platform model."
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide12Pricing;
