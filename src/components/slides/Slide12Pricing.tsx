import { useState } from "react";
import SlideLayout from "../SlideLayout";
import { Brain, Zap, Wind, Leaf, FileCheck, DollarSign, GraduationCap, Building2, Wrench, TreePine, Users2 } from "lucide-react";

const streams = [
  { id: "voltiq", icon: Brain, color: "#2563eb", name: "VoltIQ™", sub: "Infrastructure Intelligence SaaS", badge: "Recurring",
    rows: [
      { label: "VoltIQ Starter — Small facilities / schools", value: "$8,400 /yr" },
      { label: "VoltIQ Professional — Mid-size enterprises", value: "$28,800 /yr" },
      { label: "VoltIQ Enterprise — Data centers / hyperscale", value: "$72,000 /yr" },
    ], note: "75–85% margin • Sticky platform • Primary recurring engine" },
  { id: "baseline", icon: FileCheck, color: "#16a34a", name: "BaselinePro™", sub: "Audit (One-Time)", badge: "Land & Expand",
    rows: [
      { label: "BaselinePro Audit", value: "$22K → $42K" },
      { label: "Use case: Energy baseline + ESG readiness", value: "" },
      { label: "Drives SaaS conversion funnel", value: "💡" },
    ], note: "Land-and-expand entry product" },
  { id: "wattwise", icon: Zap, color: "#7c3aed", name: "WattWise™ AI", sub: "Optimization (Performance Share)", badge: "Outcome-based",
    rows: [
      { label: "Pricing Model", value: "20% of verified savings" },
      { label: "Avg Client Savings", value: "$55K → $105K" },
      { label: "EcoGridia Take per Client", value: "$11K → $21K" },
    ], note: "No hardware risk • Outcome-based • Very VC-attractive" },
  { id: "gridlink", icon: Wind, color: "#0891b2", name: "GridLink™", sub: "Renewable Procurement", badge: "Transaction",
    rows: [
      { label: "PPA Structuring Commission", value: "8%" },
      { label: "Avg PPA Contract (UAE)", value: "$500K → $1M" },
      { label: "VPPA Advisory Commission", value: "6%" },
      { label: "Avg VPPA Contract (UAE)", value: "$800K → $1.8M" },
    ], note: "Scales with volume — zero asset ownership" },
  { id: "recmatrix", icon: Leaf, color: "#ea580c", name: "RECMatrix™", sub: "Carbon Marketplace", badge: "Platform",
    rows: [
      { label: "REC Markup", value: "8%" },
      { label: "Avg I-REC Spend / Client", value: "$26K → $72K" },
      { label: "Revenue per Client", value: "$2.1K → $5.8K" },
    ], note: "Recurring compliance need • Marketplace moat • Scales with regulation" },
  { id: "solarforge", icon: DollarSign, color: "#db2777", name: "SolarForge™", sub: "On-Site Projects", badge: "Asset-Light",
    rows: [
      { label: "Dev Fee", value: "12%" },
      { label: "Avg Project (UAE)", value: "$381K → $851K" },
      { label: "Revenue per Project", value: "$46K → $102K" },
    ], note: "Partner-funded • No capex burden • High ticket size" },
  { id: "education", icon: GraduationCap, color: "#ca8a04", name: "Education & SME", sub: "Platform (Wedge)", badge: "Beachhead",
    rows: [
      { label: "SME SaaS", value: "$640 → $960 /yr" },
      { label: "Site Management", value: "$2,200 → $4,200 /yr" },
      { label: "ESG Audit", value: "$600 → $1,100" },
      { label: "Consulting", value: "$26K → $45K" },
    ], note: "Beachhead market • Faster sales cycles • Pipeline builder" },
];

const stakeholders = [
  { id: "schools", icon: GraduationCap, color: "#16a34a", name: "Schools & Universities", sub: "Beachhead Market",
    acv: "$2.5K–$5K", margin: "~75%", strategy: "Fast sales cycles • UAE university mandates • Pipeline builder into enterprise",
    rows: [
      { product: "VoltIQ Starter", pricing: "$640–$960 /yr", type: "Recurring" },
      { product: "Site Management", pricing: "$2,200–$4,200 /yr", type: "Recurring" },
      { product: "ESG Audit", pricing: "$600–$1,100", type: "One-time" },
      { product: "Carbon Credits (I-REC)", pricing: "Market pass-through + margin", type: "Transaction" },
      { product: "Consulting", pricing: "$26K–$45K", type: "Services" },
    ] },
  { id: "enterprise", icon: Building2, color: "#2563eb", name: "Enterprises & Data Centers", sub: "Core Revenue Engine",
    acv: "$20K–$85K+", margin: "75–85%", strategy: "Land with audit • Expand to SaaS • Monetize UAE procurement • Capture I-REC layer",
    rows: [
      { product: "BaselinePro Audit", pricing: "$22K–$42K", type: "One-time" },
      { product: "VoltIQ Professional", pricing: "$29K /yr", type: "Recurring" },
      { product: "VoltIQ Enterprise", pricing: "$72K /yr", type: "Recurring" },
      { product: "WattWise AI", pricing: "20% of savings", type: "Performance" },
      { product: "GridLink PPA", pricing: "8% commission", type: "Transaction" },
      { product: "VPPA Advisory", pricing: "6% commission", type: "Transaction" },
      { product: "RECMatrix", pricing: "8% markup", type: "Transaction" },
    ] },
  { id: "vendors", icon: Wrench, color: "#7c3aed", name: "Vendors / EPC Partners", sub: "Marketplace Supply Side",
    acv: "$2K–$5K /yr", margin: "~70%", strategy: "Build supply liquidity • Enable project execution • Increase platform stickiness",
    rows: [
      { product: "Vendor Platform Fee", pricing: "~10% SaaS take", type: "Recurring" },
      { product: "Marketplace Fee", pricing: "2% per transaction", type: "Transaction" },
      { product: "Avg Vendor Transaction", pricing: "$8K → $26K", type: "GMV driver" },
    ] },
  { id: "landowners", icon: TreePine, color: "#ea580c", name: "Landowners / Project Hosts", sub: "Project Origination Layer",
    acv: "$46K–$102K /project", margin: "70%+", strategy: "No asset ownership • Partner-funded builds in UAE • High-margin facilitation",
    rows: [
      { product: "SolarForge Dev Fee", pricing: "12% of project value", type: "Transaction" },
      { product: "Avg Project Value (UAE)", pricing: "$381K → $851K", type: "High-ticket" },
    ] },
  { id: "consumers", icon: Users2, color: "#ca8a04", name: "Climate Subscribers", sub: "Future Expansion Layer",
    acv: "~$80 /yr", margin: "—", strategy: "Brand layer • UAE data flywheel • Not core revenue",
    rows: [
      { product: "Consumer Subscription", pricing: "~$6.40 /month (~$80/yr)", type: "Recurring" },
    ] },
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
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)", backgroundSize: "60px 60px", opacity: 0.5 }} />
        <div className="relative z-10 flex flex-col items-center w-full">
          <div className="text-center mb-4 animate-fade-in">
            <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[13px] font-bold tracking-widest uppercase mb-2">Pricing Model</span>
            <h2 className="text-[40px] font-extrabold text-foreground leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Multi-Stream · High-Margin · <span className="text-primary">Asset-Light</span>
            </h2>
            <p className="text-[15px] text-muted-foreground mt-1">Diversified monetization across products and stakeholder segments</p>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="flex items-center bg-muted/50 rounded-full p-1 border border-border/40">
                <button onClick={() => setView("product")} className={`px-5 py-2 rounded-full text-[14px] font-bold transition-all duration-200 ${view === "product" ? "bg-primary text-white shadow-md" : "text-muted-foreground hover:text-foreground"}`}>By Product</button>
                <button onClick={() => setView("stakeholder")} className={`px-5 py-2 rounded-full text-[14px] font-bold transition-all duration-200 ${view === "stakeholder" ? "bg-primary text-white shadow-md" : "text-muted-foreground hover:text-foreground"}`}>By Stakeholder</button>
              </div>
            </div>
          </div>

          {view === "product" && (
            <div className="flex gap-5 w-full animate-fade-in">
              <div className="flex flex-col gap-1.5 w-[250px] shrink-0 overflow-y-auto">
                {streams.map((s) => {
                  const Icon = s.icon; const isActive = s.id === activeStream;
                  return (
                    <button key={s.id} onClick={() => setActiveStream(s.id)} className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl border-2 text-left transition-all duration-200"
                      style={{ borderColor: isActive ? s.color : "#e5e7eb", background: isActive ? `${s.color}10` : "rgba(255,255,255,0.8)", boxShadow: isActive ? `0 0 0 1px ${s.color}20, 0 4px 12px ${s.color}15` : "none" }}>
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: isActive ? `${s.color}20` : "#f3f4f6" }}><Icon className="w-4 h-4" style={{ color: s.color }} /></div>
                      <div className="flex-1 min-w-0"><div className="text-[13px] font-extrabold text-foreground leading-none">{s.name}</div><div className="text-[10px] text-muted-foreground truncate">{s.sub}</div></div>
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full shrink-0" style={{ background: `${s.color}15`, color: s.color }}>{s.badge}</span>
                    </button>
                  );
                })}
              </div>
              <div className="flex-1 bg-white/90 rounded-2xl border-2 p-6 flex flex-col animate-fade-in" style={{ borderColor: selectedStream.color, borderTopWidth: "4px" }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow" style={{ background: `${selectedStream.color}15`, border: `2px solid ${selectedStream.color}30` }}><selectedStream.icon className="w-6 h-6" style={{ color: selectedStream.color }} /></div>
                  <div><h3 className="text-[26px] font-extrabold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{selectedStream.name}</h3><span className="text-[13px] text-muted-foreground">{selectedStream.sub}</span></div>
                </div>
                <div className="flex flex-col gap-2">
                  {selectedStream.rows.map((r, i) => (
                    <div key={i} className="flex items-center justify-between px-5 py-3 rounded-xl" style={{ background: i % 2 === 0 ? `${selectedStream.color}07` : "transparent", border: `1px solid ${selectedStream.color}15` }}>
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
              <div className="w-[200px] shrink-0 flex flex-col gap-3">
                <div className="bg-white/90 rounded-2xl border border-border/40 p-4 flex-1">
                  <h4 className="text-[13px] font-extrabold text-foreground mb-3 uppercase tracking-wide">Revenue Mix</h4>
                  {[{ label: "SaaS (Recurring)", pct: 90, color: "#2563eb" },{ label: "Transaction", pct: 70, color: "#7c3aed" },{ label: "Performance", pct: 55, color: "#16a34a" },{ label: "Advisory", pct: 35, color: "#db2777" }].map((s, i) => (
                    <div key={i} className="mb-2.5"><div className="flex justify-between items-center mb-1"><span className="text-[11px] text-foreground/80">{s.label}</span></div><div className="h-1.5 rounded-full bg-muted overflow-hidden"><div className="h-full rounded-full" style={{ background: s.color, width: `${s.pct}%` }} /></div></div>
                  ))}
                </div>
                {[{ label: "Blended Margin", value: "70–85%", color: "#16a34a" },{ label: "LTV : CAC", value: "5×", color: "#2563eb" },{ label: "Payback", value: "6–12 mo", color: "#7c3aed" }].map((k, i) => (
                  <div key={i} className="bg-white/90 rounded-2xl border p-3 text-center" style={{ borderColor: `${k.color}30`, borderTopWidth: "3px", borderTopColor: k.color }}>
                    <div className="text-[22px] font-extrabold" style={{ color: k.color }}>{k.value}</div><div className="text-[11px] text-muted-foreground">{k.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {view === "stakeholder" && (
            <div className="flex gap-5 w-full animate-fade-in">
              <div className="flex flex-col gap-1.5 w-[250px] shrink-0">
                {stakeholders.map((s) => {
                  const Icon = s.icon; const isActive = s.id === activeStakeholder;
                  return (
                    <button key={s.id} onClick={() => setActiveStakeholder(s.id)} className="flex items-center gap-2.5 px-3 py-3 rounded-xl border-2 text-left transition-all duration-200"
                      style={{ borderColor: isActive ? s.color : "#e5e7eb", background: isActive ? `${s.color}10` : "rgba(255,255,255,0.8)", boxShadow: isActive ? `0 0 0 1px ${s.color}20, 0 4px 12px ${s.color}15` : "none" }}>
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: isActive ? `${s.color}20` : "#f3f4f6" }}><Icon className="w-4 h-4" style={{ color: s.color }} /></div>
                      <div className="flex-1 min-w-0"><div className="text-[13px] font-extrabold text-foreground leading-none">{s.name}</div><div className="text-[10px] text-muted-foreground">{s.sub}</div></div>
                    </button>
                  );
                })}
              </div>
              <div className="flex-1 bg-white/90 rounded-2xl border-2 p-6 flex flex-col animate-fade-in" style={{ borderColor: selectedStakeholder.color, borderTopWidth: "4px" }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow" style={{ background: `${selectedStakeholder.color}15`, border: `2px solid ${selectedStakeholder.color}30` }}><selectedStakeholder.icon className="w-6 h-6" style={{ color: selectedStakeholder.color }} /></div>
                  <div className="flex-1"><h3 className="text-[26px] font-extrabold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{selectedStakeholder.name}</h3><span className="text-[13px] text-muted-foreground">{selectedStakeholder.sub}</span></div>
                </div>
                <div className="flex gap-3 mb-3 flex-wrap">
                  <span className="px-3 py-1.5 rounded-lg text-[12px] font-bold" style={{ background: `${selectedStakeholder.color}10`, color: selectedStakeholder.color }}>ACV: {selectedStakeholder.acv}</span>
                  <span className="px-3 py-1.5 rounded-lg text-[12px] font-bold" style={{ background: `${selectedStakeholder.color}10`, color: selectedStakeholder.color }}>Margin: {selectedStakeholder.margin}</span>
                </div>
                <p className="text-[13px] text-muted-foreground mb-3 italic">{selectedStakeholder.strategy}</p>
                <div className="flex flex-col gap-1.5">
                  {selectedStakeholder.rows.map((r, i) => {
                    const badge = typeBadgeColor[r.type] || { bg: "#f3f4f6", text: "#374151" };
                    return (
                      <div key={i} className="flex items-center justify-between px-4 py-2.5 rounded-lg" style={{ background: i % 2 === 0 ? `${selectedStakeholder.color}05` : "transparent", border: `1px solid ${selectedStakeholder.color}12` }}>
                        <span className="text-[14px] text-foreground font-medium">{r.product}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-[14px] font-bold" style={{ color: selectedStakeholder.color }}>{r.pricing}</span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: badge.bg, color: badge.text }}>{r.type}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide12Pricing;
