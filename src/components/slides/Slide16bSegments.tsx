import { useState } from "react";
import SlideLayout from "../SlideLayout";

const segments = [
  {
    id: "dc",
    label: "Data Centers",
    abbr: "DC",
    color: "text-primary",
    borderColor: "border-primary",
    bgColor: "bg-primary/5",
    activeBg: "bg-primary",
    pillBg: "bg-primary/10 text-primary",
    revenue: "$32.4M",
    customers: "420",
    tag: "Core Revenue Engine — UAE & KSA",
    metrics: [
      { label: "ARPU", value: "$77,100" },
      { label: "Gross Margin", value: "82%" },
      { label: "Gross Profit/yr", value: "$63,200" },
      { label: "Churn", value: "14%" },
      { label: "Lifetime", value: "7.1 yrs" },
      { label: "LTV", value: "$451,000" },
      { label: "CAC (5x)", value: "$90,000" },
      { label: "Payback", value: "~14 mo" },
    ],
    bullets: ["High-value recurring", "Predictable retention", "5x LTV:CAC", "Enterprise-grade"],
    highlight: "Drives valuation.",
    ltv: 451000,
    cac: 90000,
    risk: "Low",
    riskColor: "bg-primary/10 text-primary",
  },
  {
    id: "edu",
    label: "Education",
    abbr: "EDU",
    color: "text-eco-teal",
    borderColor: "border-eco-teal",
    bgColor: "bg-eco-teal/5",
    activeBg: "bg-eco-teal",
    pillBg: "bg-eco-teal/10 text-eco-teal",
    revenue: "~$12M",
    customers: "240",
    tag: "Schools / Universities — UAE & KSA",
    metrics: [
      { label: "ARPU", value: "~$42,000" },
      { label: "Gross Margin", value: "80%" },
      { label: "Gross Profit/yr", value: "~$33,600" },
      { label: "Churn", value: "18%" },
      { label: "Lifetime", value: "5.5 yrs" },
      { label: "LTV", value: "~$186,000" },
      { label: "CAC (5x)", value: "~$37,000" },
      { label: "Payback", value: "~1 yr" },
    ],
    bullets: ["Moderate ticket", "Strong recurring", "Higher churn", "Good stickiness"],
    highlight: "Site mgmt · Carbon · Consulting.",
    ltv: 186000,
    cac: 37000,
    risk: "Medium",
    riskColor: "bg-eco-teal/10 text-eco-teal",
  },
  {
    id: "sme",
    label: "SME SaaS",
    abbr: "SME",
    color: "text-eco-emerald",
    borderColor: "border-eco-emerald",
    bgColor: "bg-eco-emerald/5",
    activeBg: "bg-eco-emerald",
    pillBg: "bg-eco-emerald/10 text-eco-emerald",
    revenue: "$1.1M",
    customers: "210",
    tag: "Corporate SaaS — GCC",
    metrics: [
      { label: "ARPU", value: "~$4,200" },
      { label: "Gross Margin", value: "82%" },
      { label: "Gross Profit/yr", value: "~$3,440" },
      { label: "Churn", value: "22%" },
      { label: "Lifetime", value: "4.5 yrs" },
      { label: "LTV", value: "~$15,500" },
      { label: "CAC (5x)", value: "~$3,100" },
      { label: "Payback", value: "< 1 yr" },
    ],
    bullets: ["Lower revenue/seat", "Easy acquisition", "Higher churn", "Volume scaling"],
    highlight: "Supports ecosystem flywheel.",
    ltv: 15500,
    cac: 3100,
    risk: "Med-High",
    riskColor: "bg-amber-100 text-amber-700",
  },
  {
    id: "proc",
    label: "Procurement",
    abbr: "PROC",
    color: "text-amber-600",
    borderColor: "border-amber-500",
    bgColor: "bg-amber-50",
    activeBg: "bg-amber-500",
    pillBg: "bg-amber-100 text-amber-700",
    revenue: "$100K–$200K",
    customers: "per project",
    tag: "Project Stakeholders — GCC",
    metrics: [
      { label: "Rev / Project", value: "$100K–$200K" },
      { label: "Blended Margin", value: "58–72%" },
      { label: "Recurrence", value: "Low–Moderate" },
      { label: "CAC", value: "$65K–$120K" },
      { label: "LTV", value: "Project + follow-on" },
      { label: "LTV:CAC", value: "3x–5x" },
    ],
    bullets: ["High-ticket lumpy", "ARPU lift driver", "Not pure SaaS", "Flywheel support"],
    highlight: "PPA · VPPA · On-site · REC.",
    ltv: 150000,
    cac: 85000,
    risk: "Higher",
    riskColor: "bg-red-100 text-red-600",
  },
  {
    id: "vendor",
    label: "Vendors",
    abbr: "VND",
    color: "text-violet-600",
    borderColor: "border-violet-500",
    bgColor: "bg-violet-50",
    activeBg: "bg-violet-500",
    pillBg: "bg-violet-100 text-violet-700",
    revenue: "Marketplace",
    customers: "Platform flywheel",
    tag: "Marketplace Vendors — GCC",
    metrics: [
      { label: "ARPU", value: "~$7,500" },
      { label: "Gross Margin", value: "83%" },
      { label: "Churn", value: "20–24%" },
      { label: "LTV", value: "~$28,000" },
      { label: "CAC", value: "~$5,600" },
      { label: "LTV:CAC", value: "~5x" },
    ],
    bullets: ["Flywheel effect", "Capital efficiency", "Valuation lift", "Take rate"],
    highlight: "Marketplace take rate drives network value.",
    ltv: 28000,
    cac: 5600,
    risk: "Medium",
    riskColor: "bg-violet-100 text-violet-700",
  },
];

const summaryRows = [
  { segment: "Data Centers", arpu: "$77K", ltv: "$451K", cac: "$90K", ratio: "5x", risk: "Low", riskColor: "bg-primary/10 text-primary" },
  { segment: "Education", arpu: "$42K", ltv: "$186K", cac: "$37K", ratio: "5x", risk: "Medium", riskColor: "bg-eco-teal/10 text-eco-teal" },
  { segment: "SME SaaS", arpu: "$4.2K", ltv: "$15.5K", cac: "$3.1K", ratio: "5x", risk: "Med-High", riskColor: "bg-amber-100 text-amber-700" },
  { segment: "Procurement", arpu: "$120K+", ltv: "Variable", cac: "$85K", ratio: "3–5x", risk: "Higher", riskColor: "bg-red-100 text-red-600" },
  { segment: "Vendors", arpu: "$7.5K", ltv: "$28K", cac: "$5.6K", ratio: "5x", risk: "Medium", riskColor: "bg-violet-100 text-violet-700" },
];

const Slide16bSegments = () => {
  const [active, setActive] = useState(0);
  const seg = segments[active];

  return (
    <SlideLayout>
      <div className="relative w-full h-full flex flex-col items-center justify-center bg-white overflow-hidden px-14 pt-8 pb-5">
        {/* Grid background */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
            backgroundSize: "60px 60px", opacity: 0.5,
          }}
        />

        <div className="relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-4 animate-fade-in">
          <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[13px] font-bold tracking-widest uppercase mb-2">Segment Economics</span>
          <h2 className="text-[40px] font-extrabold text-foreground leading-tight tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Unit Economics by <span className="text-primary">Stakeholder Segment</span>
          </h2>
          <p className="text-[15px] text-muted-foreground mt-1">FY30 Baseline — UAE & Saudi Arabia — 5x LTV:CAC Target</p>
          {/* KPI chips */}
          <div className="flex justify-center gap-3 mt-3">
            {[
              { label: "Blended LTV:CAC", value: "5x" },
              { label: "Top LTV", value: "$451K" },
              { label: "Best Payback", value: "< 1 yr" },
            ].map((k) => (
              <div key={k.label} className="bg-primary/5 border border-primary/20 rounded-xl px-4 py-2 text-center">
                <div className="text-xl font-black text-primary">{k.value}</div>
                <div className="text-[10px] text-muted-foreground leading-tight">{k.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Body: 3-column dashboard */}
        <div className="flex gap-5">

          {/* LEFT: segment tabs (vertical) */}
          <div className="flex flex-col gap-2 w-[180px] flex-shrink-0">
            {segments.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${
                  active === i
                    ? `${s.activeBg} text-white ${s.borderColor} shadow-md`
                    : `bg-white ${s.color} ${s.borderColor} hover:opacity-80`
                }`}
              >
                <div className="text-xs font-bold uppercase tracking-wide opacity-70">{s.abbr}</div>
                <div className="text-sm font-semibold leading-tight mt-0.5">{s.label}</div>
                <div className={`text-xs mt-1 font-bold ${active === i ? "text-white/80" : s.color}`}>{s.revenue}</div>
              </button>
            ))}
          </div>

          {/* CENTER: detail card - broken into smaller sections */}
          <div className="flex-1 flex flex-col gap-2 min-w-0">
            {/* Card header */}
            <div className={`rounded-xl border ${seg.borderColor} ${seg.bgColor} px-4 py-2 flex items-center gap-3`}>
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${seg.pillBg}`}>{seg.tag}</span>
              {seg.customers !== "per project" && seg.customers !== "Platform flywheel" && (
                <span className="text-xs text-muted-foreground">
                  Customers: <strong className="text-foreground">{seg.customers}</strong>
                </span>
              )}
              <span className={`ml-auto text-xs font-semibold px-2 py-1 rounded-full ${seg.riskColor}`}>
                Risk: {seg.risk}
              </span>
            </div>

            {/* Metrics in small rectangular cards - pairs */}
            <div className="grid grid-cols-2 gap-1.5">
              {seg.metrics.map((m) => (
                <div key={m.label} className={`rounded-lg border ${seg.borderColor}/30 bg-white px-3 py-1.5 flex items-center justify-between`}>
                  <span className="text-[11px] text-muted-foreground font-medium">{m.label}</span>
                  <span className={`text-[15px] font-black ${seg.color}`}>{m.value}</span>
                </div>
              ))}
            </div>

            {/* LTV vs CAC bar */}
            {seg.id !== "proc" && (
              <div className={`rounded-xl border ${seg.borderColor}/30 bg-white px-4 py-2.5`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wide">LTV vs CAC</span>
                  <span className={`text-xs font-bold ${seg.color}`}>5x ratio</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${seg.activeBg}`}
                    style={{ width: `${Math.min((seg.ltv / (seg.ltv + seg.cac)) * 100, 100)}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
                  <span>CAC: {summaryRows[active]?.cac}</span>
                  <span>LTV: {summaryRows[active]?.ltv}</span>
                </div>
              </div>
            )}

            {/* Bullets */}
            <div className={`rounded-xl border ${seg.borderColor}/30 bg-white px-4 py-2.5`}>
              <p className="text-xs italic text-muted-foreground mb-1.5 font-semibold">{seg.highlight}</p>
              <div className="flex flex-wrap gap-1.5">
                {seg.bullets.map((b) => (
                  <span key={b} className={`text-[10px] px-2 py-1 rounded-md font-semibold ${seg.pillBg}`}>{b}</span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: summary table */}
          <div className="w-[400px] flex-shrink-0 flex flex-col">
            <div className="text-sm font-bold text-foreground mb-2">All Segments — Comparison</div>
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-muted/60 border-b border-border">
                    <th className="text-left px-3 py-2.5 font-semibold text-muted-foreground">Segment</th>
                    <th className="text-right px-3 py-2.5 font-semibold text-muted-foreground">ARPU</th>
                    <th className="text-right px-3 py-2.5 font-semibold text-muted-foreground">LTV</th>
                    <th className="text-right px-3 py-2.5 font-semibold text-muted-foreground">CAC</th>
                    <th className="text-right px-3 py-2.5 font-semibold text-muted-foreground">Ratio</th>
                    <th className="text-right px-3 py-2.5 font-semibold text-muted-foreground">Risk</th>
                  </tr>
                </thead>
                <tbody>
                  {summaryRows.map((r, i) => (
                    <tr
                      key={r.segment}
                      onClick={() => setActive(i)}
                      className={`border-b border-border last:border-0 cursor-pointer transition-colors ${
                        active === i ? "bg-primary/5 font-semibold" : "hover:bg-muted/30"
                      }`}
                    >
                      <td className="px-3 py-2.5">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${segments[i].activeBg}`} />
                          <span className="text-foreground font-semibold">{r.segment}</span>
                        </div>
                      </td>
                      <td className="px-3 py-2.5 text-right text-foreground">{r.arpu}</td>
                      <td className="px-3 py-2.5 text-right font-bold text-primary">{r.ltv}</td>
                      <td className="px-3 py-2.5 text-right text-foreground">{r.cac}</td>
                      <td className="px-3 py-2.5 text-right font-black text-eco-emerald">{r.ratio}</td>
                      <td className="px-3 py-2.5 text-right">
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${r.riskColor}`}>{r.risk}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Segment revenue bars */}
            <div className="mt-3">
              <div className="text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">FY30 Revenue — UAE & KSA</div>
              {[
                { label: "Data Centers", value: 32.4, pct: 100, color: "bg-primary" },
                { label: "Education", value: 12.0, pct: 37, color: "bg-eco-teal" },
                { label: "SME SaaS", value: 1.1, pct: 3, color: "bg-eco-emerald" },
                { label: "Procurement", value: 2.0, pct: 6, color: "bg-amber-500" },
                { label: "Vendors", value: 0.8, pct: 2, color: "bg-violet-500" },
              ].map((r) => (
                <div key={r.label} className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] text-muted-foreground w-24 text-right flex-shrink-0">{r.label}</span>
                  <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${r.color}`} style={{ width: `${r.pct}%` }} />
                  </div>
                  <span className="text-[10px] font-bold text-foreground w-10 flex-shrink-0">${r.value}M</span>
                </div>
              ))}
            </div>
          </div>

        </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide16bSegments;
