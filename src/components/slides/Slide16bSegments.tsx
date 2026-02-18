import { useState } from "react";
import SlideLayout from "../SlideLayout";

const segments = [
  {
    id: "dc",
    label: "Data Centers",
    color: "text-primary",
    borderColor: "border-primary",
    bgColor: "bg-primary/5",
    activeBg: "bg-primary",
    revenue: "$44.8M",
    customers: "675",
    tag: "Core Revenue Engine",
    tagColor: "bg-primary/10 text-primary",
    metrics: [
      { label: "ARPU", value: "$66,350" },
      { label: "Gross Margin", value: "84%" },
      { label: "Gross Profit / Year", value: "$55,734" },
      { label: "Churn", value: "15%" },
      { label: "Customer Lifetime", value: "6.7 years" },
      { label: "LTV", value: "$371,560" },
      { label: "CAC (5x)", value: "$74,300" },
      { label: "Payback", value: "~16 months" },
    ],
    bullets: ["High-value recurring clients", "Predictable retention", "Strong 5x LTV:CAC", "Enterprise-grade economics"],
    highlight: "This segment drives valuation.",
  },
  {
    id: "edu",
    label: "Education",
    color: "text-eco-teal",
    borderColor: "border-eco-teal",
    bgColor: "bg-eco-teal/5",
    activeBg: "bg-eco-teal",
    revenue: "~$19M",
    customers: "380",
    tag: "Schools / Universities",
    tagColor: "bg-eco-teal/10 text-eco-teal",
    metrics: [
      { label: "ARPU", value: "~$50,000" },
      { label: "Gross Margin", value: "84%" },
      { label: "Gross Profit / Year", value: "~$42,000" },
      { label: "Churn", value: "20%" },
      { label: "Customer Lifetime", value: "5 years" },
      { label: "LTV", value: "~$210,000" },
      { label: "CAC (5x)", value: "~$42,000" },
      { label: "Payback", value: "~1 year" },
    ],
    bullets: ["Moderate ticket size", "Strong recurring potential", "Slightly higher churn", "Good but less sticky than DC"],
    highlight: "Site mgmt + carbon credits + projects + consulting.",
  },
  {
    id: "sme",
    label: "SME SaaS",
    color: "text-eco-emerald",
    borderColor: "border-eco-emerald",
    bgColor: "bg-eco-emerald/5",
    activeBg: "bg-eco-emerald",
    revenue: "$1.6M",
    customers: "310",
    tag: "Corporate SaaS",
    tagColor: "bg-eco-emerald/10 text-eco-emerald",
    metrics: [
      { label: "ARPU", value: "~$5,000" },
      { label: "Gross Margin", value: "84%" },
      { label: "Gross Profit / Year", value: "~$4,200" },
      { label: "Churn", value: "25%" },
      { label: "Customer Lifetime", value: "4 years" },
      { label: "LTV", value: "~$16,800" },
      { label: "CAC (5x)", value: "~$3,300" },
      { label: "Payback", value: "< 1 year" },
    ],
    bullets: ["Lower revenue per seat", "Easier acquisition", "Higher churn", "Good for volume scaling"],
    highlight: "Not primary valuation driver — supports ecosystem flywheel.",
  },
  {
    id: "proc",
    label: "Procurement",
    color: "text-amber-600",
    borderColor: "border-amber-500",
    bgColor: "bg-amber-50",
    activeBg: "bg-amber-500",
    revenue: "$120K–$250K",
    customers: "per project",
    tag: "Project Stakeholders",
    tagColor: "bg-amber-100 text-amber-700",
    metrics: [
      { label: "Avg Revenue / Project", value: "$120K–$250K" },
      { label: "Blended Margin", value: "60–75%" },
      { label: "Recurrence", value: "Low–Moderate" },
      { label: "CAC", value: "$80K–$150K" },
      { label: "LTV", value: "Project + follow-on" },
      { label: "LTV:CAC", value: "3x–5x" },
    ],
    bullets: ["High-ticket but lumpy", "Strategic for ARPU lift", "Not pure SaaS", "Supports ecosystem flywheel"],
    highlight: "PPA · VPPA · On-site development · REC services.",
  },
  {
    id: "vendor",
    label: "Vendors",
    color: "text-violet-600",
    borderColor: "border-violet-500",
    bgColor: "bg-violet-50",
    activeBg: "bg-violet-500",
    revenue: "Marketplace",
    customers: "Platform flywheel",
    tag: "Marketplace Vendors",
    tagColor: "bg-violet-100 text-violet-700",
    metrics: [
      { label: "ARPU", value: "~$9,000" },
      { label: "Gross Margin", value: "85%" },
      { label: "Churn", value: "18–22%" },
      { label: "LTV", value: "~$34,000" },
      { label: "CAC", value: "~$7,000" },
      { label: "LTV:CAC", value: "~5x" },
    ],
    bullets: ["Platform flywheel effect", "Improves capital efficiency", "Adds valuation multiple lift", "Vendor SaaS + take rate"],
    highlight: "Marketplace take rate drives compounding network value.",
  },
];

const summaryRows = [
  { segment: "Data Centers", arpu: "$66K", ltv: "$371K", cac: "$74K", ratio: "5x", risk: "Low" },
  { segment: "Education", arpu: "$50K", ltv: "$210K", cac: "$42K", ratio: "5x", risk: "Medium" },
  { segment: "SME SaaS", arpu: "$5K", ltv: "$16.8K", cac: "$3.3K", ratio: "5x", risk: "Med-High" },
  { segment: "Procurement", arpu: "$150K+", ltv: "Variable", cac: "$100K", ratio: "3–5x", risk: "Higher" },
  { segment: "Vendors", arpu: "$9K", ltv: "$34K", cac: "$7K", ratio: "5x", risk: "Medium" },
];

const Slide16bSegments = () => {
  const [active, setActive] = useState(0);
  const seg = segments[active];

  return (
    <SlideLayout>
      <div className="flex flex-col h-full px-16 py-10 bg-white">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-4xl font-bold text-foreground">
              Unit Economics by <span className="text-primary">Segment</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-1">FY29 Baseline — 5x LTV:CAC Target Across All Segments</p>
          </div>
        </div>

        <div className="flex gap-6 flex-1 min-h-0">
          {/* Left: Tab nav + detail */}
          <div className="flex flex-col gap-4 w-[620px]">
            {/* Tabs */}
            <div className="flex gap-2 flex-wrap">
              {segments.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setActive(i)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all ${
                    active === i
                      ? `${s.activeBg} text-white ${s.borderColor}`
                      : `bg-white ${s.color} ${s.borderColor} hover:opacity-80`
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            {/* Detail card */}
            <div className={`flex-1 rounded-2xl border-2 ${seg.borderColor} ${seg.bgColor} p-6 flex flex-col`}>
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${seg.tagColor}`}>{seg.tag}</span>
                <span className="text-sm text-muted-foreground">FY29 Revenue: <strong className={seg.color}>{seg.revenue}</strong></span>
                {seg.customers !== "per project" && seg.customers !== "Platform flywheel" && (
                  <span className="text-sm text-muted-foreground">Customers: <strong className="text-foreground">{seg.customers}</strong></span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-x-8 gap-y-3 flex-1">
                {seg.metrics.map((m) => (
                  <div key={m.label} className="flex justify-between items-center border-b border-border/50 pb-2">
                    <span className="text-sm text-muted-foreground">{m.label}</span>
                    <span className={`text-sm font-bold ${seg.color}`}>{m.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-border/40">
                <p className="text-sm font-semibold text-muted-foreground italic mb-2">{seg.highlight}</p>
                <div className="flex flex-wrap gap-2">
                  {seg.bullets.map((b) => (
                    <span key={b} className={`text-xs px-2 py-1 rounded-md font-medium ${seg.tagColor}`}>{b}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Summary table */}
          <div className="flex-1 flex flex-col">
            <h3 className="text-lg font-bold text-foreground mb-3">Summary — All Segments</h3>
            <div className="flex-1 bg-card rounded-2xl border border-border overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50 border-b border-border">
                    <th className="text-left px-4 py-3 font-semibold text-muted-foreground">Segment</th>
                    <th className="text-right px-4 py-3 font-semibold text-muted-foreground">ARPU</th>
                    <th className="text-right px-4 py-3 font-semibold text-muted-foreground">LTV</th>
                    <th className="text-right px-4 py-3 font-semibold text-muted-foreground">CAC</th>
                    <th className="text-right px-4 py-3 font-semibold text-muted-foreground">LTV:CAC</th>
                    <th className="text-right px-4 py-3 font-semibold text-muted-foreground">Risk</th>
                  </tr>
                </thead>
                <tbody>
                  {summaryRows.map((r, i) => (
                    <tr
                      key={r.segment}
                      className={`border-b border-border last:border-0 cursor-pointer transition-colors ${active === i ? "bg-primary/5" : "hover:bg-muted/30"}`}
                      onClick={() => setActive(i)}
                    >
                      <td className="px-4 py-3 font-semibold text-foreground">{r.segment}</td>
                      <td className="px-4 py-3 text-right text-foreground">{r.arpu}</td>
                      <td className="px-4 py-3 text-right font-bold text-primary">{r.ltv}</td>
                      <td className="px-4 py-3 text-right text-foreground">{r.cac}</td>
                      <td className="px-4 py-3 text-right font-bold text-eco-emerald">{r.ratio}</td>
                      <td className="px-4 py-3 text-right">
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          r.risk === "Low" ? "bg-primary/10 text-primary" :
                          r.risk === "Medium" ? "bg-eco-teal/10 text-eco-teal" :
                          r.risk === "Med-High" ? "bg-amber-100 text-amber-700" :
                          "bg-red-100 text-red-600"
                        }`}>{r.risk}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom stats */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { label: "Blended LTV:CAC", value: "5x" },
                { label: "Top Segment LTV", value: "$371K" },
                { label: "Fastest Payback", value: "< 1 year" },
              ].map((m) => (
                <div key={m.label} className="bg-primary/5 rounded-xl p-4 text-center">
                  <div className="text-2xl font-black text-primary">{m.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide16bSegments;
