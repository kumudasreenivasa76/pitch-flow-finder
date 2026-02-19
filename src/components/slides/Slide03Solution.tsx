import SlideLayout from "../SlideLayout";
import { useState } from "react";
import { Building2, Users, Globe, ShieldCheck, FileText, Layers, CheckCircle, Info } from "lucide-react";

const solutions = [
  {
    tab: "Unused → Productive",
    icon: Building2,
    problem: {
      label: "PROBLEM",
      text: "40B+ m² of rooftops and on-site space suitable for clean energy. 70%+ remains unutilized due to fragmentation and lack of tooling.",
    },
    solution: {
      label: "ECOGRIDIA SOLUTION",
      bullets: [
        "Digitizes rooftops, commercial buildings, and data centers into software-managed energy assets",
        "Creates a system of record for distributed clean energy infrastructure",
      ],
    },
    impact: {
      label: "IMPACT",
      text: "Physical capacity transforms into productive, monetizable assets.",
    },
    transforms: [
      { before: "40B+ m² unutilized", after: "Productive energy assets" },
      { before: "6-18 month sales cycles", after: "Pre-sold infrastructure" },
      { before: "80%+ manual reporting", after: "Automated pipelines" },
      { before: "Fragmented silos", after: "One SaaS platform" },
    ],
  },
  {
    tab: "Speculative → Pre-Sold",
    icon: Users,
    problem: {
      label: "PROBLEM",
      text: "Renewable projects rely on speculative demand with 6–18 month sales cycles and no guaranteed offtake agreements.",
    },
    solution: {
      label: "ECOGRIDIA SOLUTION",
      bullets: [
        "Pre-sold project pipeline via enterprise procurement commitments",
        "Marketplace matching buyers and sellers before construction begins",
      ],
    },
    impact: {
      label: "IMPACT",
      text: "Capital efficiency improves as projects launch with committed demand.",
    },
    transforms: [
      { before: "Speculative demand", after: "Committed offtake" },
      { before: "18-month cycles", after: "90-day close" },
      { before: "Manual matching", after: "AI-driven pairing" },
      { before: "High cancellation risk", after: "Pre-sold pipelines" },
    ],
  },
  {
    tab: "No Access → Global",
    icon: Globe,
    problem: {
      label: "PROBLEM",
      text: "Small and mid-size enterprises have no pathway to access global renewable markets, RECs, or carbon credit programs.",
    },
    solution: {
      label: "ECOGRIDIA SOLUTION",
      bullets: [
        "Global REC marketplace with automated eligibility and lifecycle tracking",
        "Carbon credit origination and retirement verification for any business size",
      ],
    },
    impact: {
      label: "IMPACT",
      text: "Every enterprise gains access to global renewable energy markets.",
    },
    transforms: [
      { before: "Enterprise-only access", after: "SMB-ready platform" },
      { before: "Manual REC tracking", after: "Automated lifecycle" },
      { before: "Opaque pricing", after: "Transparent marketplace" },
      { before: "Geographic limits", after: "Global reach" },
    ],
  },
  {
    tab: "Greenwashing → Verified",
    icon: ShieldCheck,
    problem: {
      label: "PROBLEM",
      text: "ESG claims are unverifiable and inconsistent. 60%+ of corporate sustainability reports contain material inaccuracies.",
    },
    solution: {
      label: "ECOGRIDIA SOLUTION",
      bullets: [
        "Scope 1, 2, and 3 emissions tracking with audit-ready documentation",
        "SEC-compliant automated reporting with real-time carbon dashboards",
      ],
    },
    impact: {
      label: "IMPACT",
      text: "Verified, auditable sustainability data eliminates greenwashing exposure.",
    },
    transforms: [
      { before: "Self-reported data", after: "Verified metrics" },
      { before: "Manual compliance", after: "Automated SEC filing" },
      { before: "Greenwashing risk", after: "Audit-ready trails" },
      { before: "Annual reports", after: "Real-time dashboards" },
    ],
  },
  {
    tab: "Manual → Automated",
    icon: FileText,
    problem: {
      label: "PROBLEM",
      text: "80%+ of energy and carbon reporting is done manually via spreadsheets, creating errors and compliance exposure.",
    },
    solution: {
      label: "ECOGRIDIA SOLUTION",
      bullets: [
        "End-to-end workflow automation from data ingestion to compliance filing",
        "AI-powered anomaly detection and predictive maintenance signals",
      ],
    },
    impact: {
      label: "IMPACT",
      text: "Teams reclaim 100+ hours/month with zero-touch compliance pipelines.",
    },
    transforms: [
      { before: "Spreadsheet chaos", after: "Automated workflows" },
      { before: "100+ manual hours", after: "Zero-touch reporting" },
      { before: "Reactive alerts", after: "Predictive maintenance" },
      { before: "Siloed data", after: "Unified dashboards" },
    ],
  },
  {
    tab: "Silos → One Platform",
    icon: Layers,
    problem: {
      label: "PROBLEM",
      text: "Energy management, ESG reporting, and carbon markets operate in disconnected silos with incompatible tools.",
    },
    solution: {
      label: "ECOGRIDIA SOLUTION",
      bullets: [
        "Single platform spanning infrastructure execution, compliance, and carbon markets",
        "API integrations across the entire renewable energy ecosystem",
      ],
    },
    impact: {
      label: "IMPACT",
      text: "One login replaces 5+ disconnected tools across the energy value chain.",
    },
    transforms: [
      { before: "5+ disconnected tools", after: "One platform" },
      { before: "Duplicate data entry", after: "Single source of truth" },
      { before: "API fragmentation", after: "Native integrations" },
      { before: "Vendor lock-in", after: "Open ecosystem" },
    ],
  },
];

const Slide03Solution = () => {
  const [selected, setSelected] = useState(0);
  const s = solutions[selected];

  return (
    <SlideLayout>
      <div
        className="absolute inset-0 flex flex-col items-center justify-center px-24 py-10"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {/* Top label */}
        <p
          className="text-[18px] font-bold tracking-widest uppercase text-primary mb-3"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          THE SOLUTION
        </p>

        {/* Main title */}
        <h2 className="text-[52px] font-extrabold text-foreground leading-tight text-center mb-3">
          EcoGridia Unlocks the <span className="text-foreground">$3T+</span> Distributed Clean Energy Opportunity
        </h2>

        {/* Subtitle */}
        <p className="text-[20px] text-muted-foreground text-center mb-2">
          Infrastructure SaaS aligned with the problem — no mismatch, no red flags
        </p>

        {/* Hint */}
        <div className="flex items-center gap-2 mb-7">
          <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block" />
          <span className="text-[16px] text-primary font-medium">Click a solution to explore details</span>
        </div>

        {/* Tab pills */}
        <div className="flex gap-3 mb-7 flex-wrap justify-center">
          {solutions.map((sol, i) => {
            const Icon = sol.icon;
            const isActive = selected === i;
            return (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[16px] font-semibold border-2 transition-all duration-200 ${
                  isActive
                    ? "bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-200"
                    : "bg-background border-border text-foreground hover:border-primary/40 hover:bg-primary/5"
                }`}
              >
                <Icon style={{ width: 16, height: 16 }} />
                {sol.tab}
              </button>
            );
          })}
        </div>

        {/* Three-column cards */}
        <div className="w-full grid grid-cols-3 gap-5 mb-5" key={selected}>
          {/* Problem card */}
          <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-7 flex flex-col gap-3">
            <p className="text-[13px] font-black tracking-widest text-amber-600 uppercase">
              {s.problem.label}
            </p>
            <p className="text-[18px] text-foreground leading-snug">{s.problem.text}</p>
          </div>

          {/* Solution card (orange, prominent) */}
          <div className="rounded-2xl bg-orange-500 p-7 flex flex-col gap-4 shadow-xl shadow-orange-200">
            <p className="text-[13px] font-black tracking-widest text-orange-100 uppercase">
              {s.solution.label}
            </p>
            <div className="flex flex-col gap-3">
              {s.solution.bullets.map((b, bi) => (
                <div key={bi} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-white shrink-0 mt-0.5" />
                  <p className="text-[17px] text-white leading-snug font-medium">{b}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Impact card */}
          <div className="rounded-2xl border-2 border-primary/25 bg-primary/5 p-7 flex flex-col gap-3">
            <p className="text-[13px] font-black tracking-widest text-primary uppercase">
              {s.impact.label}
            </p>
            <p className="text-[18px] text-foreground leading-snug">{s.impact.text}</p>
            <div className="flex items-center gap-2 mt-1">
              <Info className="w-4 h-4 text-primary" />
              <span className="text-[15px] text-primary font-semibold">Learn more</span>
            </div>
          </div>
        </div>

        {/* Transformation row */}
        <div className="w-full grid grid-cols-4 gap-4 mb-5">
          {s.transforms.map((t, ti) => (
            <div
              key={ti}
              className="rounded-xl border border-border bg-background px-5 py-4 flex flex-col items-center gap-1 text-center"
            >
              <span className="text-[15px] text-muted-foreground line-through">{t.before}</span>
              <span className="text-[22px] text-muted-foreground">→</span>
              <span className="text-[16px] text-primary font-bold">{t.after}</span>
            </div>
          ))}
        </div>

        {/* Bottom badge */}
        <div className="flex items-center gap-3 border-2 border-primary/30 rounded-full px-8 py-3" style={{ background: "hsl(160 84% 39% / 0.08)" }}>
          <Layers className="w-5 h-5 text-primary" />
          <span className="text-[17px] font-bold text-primary">One global system for energy, carbon, and money</span>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide03Solution;
