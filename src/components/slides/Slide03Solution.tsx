import SlideLayout from "../SlideLayout";
import { useState } from "react";
import { Workflow, BarChart3, Server, ArrowLeftRight, Activity, Landmark, CheckCircle, Info } from "lucide-react";

const solutions = [
  {
    icon: Workflow,
    tabLabel: "Fragmented → Unified",
    title: "End-to-End Renewable Infrastructure Execution",
    problem: {
      heading: "Fragmented Project Delivery",
      text: "Solar EPCs, consultants, and carbon brokers operate separately. 70%+ of projects require 3–5 vendors, causing 6–9 month delays and cost overruns.",
    },
    solution: {
      heading: "EcoGridia Solution",
      bullets: [
        "Single orchestration layer for feasibility, vendor selection, permitting & installation",
        "IRA + state incentive identification automated at project start",
        "Post-installation performance tracking built-in",
      ],
    },
    impact: {
      heading: "Impact",
      text: "Reduced delays, lower implementation risk, and predictable project delivery at scale.",
    },
    transforms: [
      { from: "6–9mo delays", to: "Predictable delivery" },
      { from: "3–5 vendors", to: "One platform" },
      { from: "Manual permitting", to: "Automated workflow" },
      { from: "Siloed teams", to: "Unified execution" },
    ],
    tagline: "One global system for energy, carbon, and money",
  },
  {
    icon: BarChart3,
    tabLabel: "Manual → Automated",
    title: "Unified ESG & Carbon Operating System",
    problem: {
      heading: "No Automated Carbon Tracking",
      text: "60% of mid-market firms lack automated carbon tracking. 10,000+ US companies face climate disclosure expectations with no unified tooling.",
    },
    solution: {
      heading: "EcoGridia Solution",
      bullets: [
        "Scope 1, 2 & 3 emissions tracked in real time across all sites",
        "Automated compliance reporting — SEC-ready, CSRD-aligned",
        "Audit-ready documentation trail with portfolio-level dashboards",
      ],
    },
    impact: {
      heading: "Impact",
      text: "Continuous visibility into emissions and dramatically simplified compliance management.",
    },
    transforms: [
      { from: "Manual ESG reporting", to: "Automated pipelines" },
      { from: "10–20 vendors", to: "One SaaS platform" },
      { from: "Lagging data", to: "Real-time dashboards" },
      { from: "Legal exposure", to: "Audit-ready records" },
    ],
    tagline: "One platform for sustainability — from data to disclosure",
  },
  {
    icon: Server,
    tabLabel: "Reactive → Strategic",
    title: "Data Center Renewable Procurement & Strategy",
    problem: {
      heading: "Complex Renewable Procurement",
      text: "Hyperscalers committed to RE100 face highly complex REC and PPA procurement. DC electricity demand set to double with no structured planning tools.",
    },
    solution: {
      heading: "EcoGridia Solution",
      bullets: [
        "Renewable gap analysis vs. actual energy consumption",
        "REC portfolio management with registry integration",
        "Long-term carbon-free sourcing roadmap (24/7 CFE path)",
      ],
    },
    impact: {
      heading: "Impact",
      text: "Structured pathway toward 100% renewable operations with measurable, reportable impact.",
    },
    transforms: [
      { from: "Reactive procurement", to: "Strategic planning" },
      { from: "Renewable gap", to: "100% CFE roadmap" },
      { from: "Manual REC tracking", to: "Automated registry" },
      { from: "ESG scrutiny", to: "Verified compliance" },
    ],
    tagline: "From renewable gap to verifiable 100% clean energy",
  },
  {
    icon: ArrowLeftRight,
    tabLabel: "Unused RECs → Revenue",
    title: "Integrated REC & Carbon Marketplace",
    problem: {
      heading: "Unmonetized Renewable Assets",
      text: "US REC market is $1–2B annually. Thousands of small installations don't actively trade RECs — leaving 10–20% renewable revenue on the table.",
    },
    solution: {
      heading: "EcoGridia Solution",
      bullets: [
        "Automated REC eligibility tracking and buyer-seller matching",
        "Certificate lifecycle management with retirement verification",
        "Transparent pricing with transaction documentation",
      ],
    },
    impact: {
      heading: "Impact",
      text: "Full monetization of renewable energy assets and simplified carbon procurement for buyers.",
    },
    transforms: [
      { from: "Unused RECs", to: "Productive revenue" },
      { from: "Manual matching", to: "Automated marketplace" },
      { from: "Opaque pricing", to: "Transparent trading" },
      { from: "Missed funding", to: "Maximized ROI" },
    ],
    tagline: "Every renewable asset monetized — nothing left on the table",
  },
  {
    icon: Activity,
    tabLabel: "Blind Spots → Intelligence",
    title: "Real-Time Monitoring & Optimization Layer",
    problem: {
      heading: "No Real-Time Energy Visibility",
      text: "20–30% of installed solar underperforms without monitoring. 50% of mid-market firms lack real-time analytics — failures go unnoticed for months.",
    },
    solution: {
      heading: "EcoGridia Solution",
      bullets: [
        "Live generation and consumption tracking across all sites",
        "Underperformance alerts and predictive maintenance signals",
        "Portfolio benchmarking and efficiency optimization recommendations",
      ],
    },
    impact: {
      heading: "Impact",
      text: "Improved system efficiency, reduced downtime, and maximized energy yield across the portfolio.",
    },
    transforms: [
      { from: "20–30% underperformance", to: "Optimized output" },
      { from: "Unnoticed failures", to: "Instant alerts" },
      { from: "Poor ROI measurement", to: "Live benchmarking" },
      { from: "Reactive maintenance", to: "Predictive signals" },
    ],
    tagline: "Every watt monitored — every underperformance caught",
  },
  {
    icon: Landmark,
    tabLabel: "Complexity → Access",
    title: "Structured Capital & Incentive Navigation",
    problem: {
      heading: "Inaccessible Funding Landscape",
      text: "IRA credits, state incentives, and structured financing exist but remain inaccessible. Most mid-market firms miss out due to complexity and lack of tooling.",
    },
    solution: {
      heading: "EcoGridia Solution",
      bullets: [
        "Federal IRA credit mapping and state-level incentive identification",
        "Structured financing pathways with documentation automation",
        "Grant and credit alignment tracking throughout project lifecycle",
      ],
    },
    impact: {
      heading: "Impact",
      text: "Improved project viability, faster renewable adoption, and access to funding previously out of reach.",
    },
    transforms: [
      { from: "Inaccessible incentives", to: "Automated mapping" },
      { from: "Complex financing", to: "Structured pathways" },
      { from: "Missed credits", to: "Maximized funding" },
      { from: "Manual documentation", to: "Automated records" },
    ],
    tagline: "Every available dollar captured — from IRA to state grants",
  },
];

const Slide03Solution = () => {
  const [selected, setSelected] = useState(0);
  const s = solutions[selected];
  const Icon = s.icon;

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
        <div className="relative z-10 text-center mb-4 animate-fade-in">
          <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[13px] font-bold tracking-widest uppercase mb-2">
            The Solution
          </span>
          <h2 className="text-[40px] font-extrabold text-foreground leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            EcoGridia Solves Each Problem <span className="text-primary">Directly</span>
          </h2>
          <p className="text-[15px] text-muted-foreground mt-1">
            Infrastructure SaaS aligned with the problem — no mismatch, no red flags
          </p>
          <p className="text-[13px] text-primary mt-1 flex items-center justify-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-primary inline-block" />
            Click a solution to explore details
          </p>
        </div>

        {/* Tab bar */}
        <div className="relative z-10 flex items-center gap-2 mb-6 flex-wrap justify-center">
          {solutions.map((sol, i) => {
            const SIcon = sol.icon;
            const isActive = selected === i;
            return (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[15px] font-semibold border-2 transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-lg"
                    : "bg-white text-foreground border-border/40 hover:border-primary/40 hover:text-primary"
                }`}
              >
                <SIcon className="w-4 h-4" />
                {sol.tabLabel}
              </button>
            );
          })}
        </div>

        {/* 3-column panel */}
        <div className="relative z-10 w-full max-w-[1600px] grid grid-cols-3 gap-4" key={selected}>

          {/* LEFT — Problem */}
          <div className="rounded-2xl border-2 border-amber-200 bg-amber-50/80 p-7 flex flex-col animate-fade-in">
            <span className="text-[12px] font-black text-amber-600 uppercase tracking-widest mb-3">Problem</span>
            <h4 className="text-[20px] font-bold text-amber-900 mb-3 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {s.problem.heading}
            </h4>
            <p className="text-[16px] text-amber-800 leading-relaxed">{s.problem.text}</p>
          </div>

          {/* CENTER — Solution */}
          <div className="rounded-2xl border-2 border-primary bg-primary p-7 flex flex-col animate-fade-in" style={{ animationDelay: "0.08s" }}>
            <span className="text-[12px] font-black text-primary-foreground/80 uppercase tracking-widest mb-3">EcoGridia Solution</span>
            <h4 className="text-[20px] font-bold text-primary-foreground mb-4 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {s.title}
            </h4>
            <div className="space-y-3">
              {s.solution.bullets.map((b, bi) => (
                <div key={bi} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${0.1 + bi * 0.06}s` }}>
                  <CheckCircle className="w-5 h-5 text-primary-foreground/90 shrink-0 mt-0.5" />
                  <span className="text-[15px] text-primary-foreground leading-snug">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Impact */}
          <div className="rounded-2xl border-2 border-eco-teal/30 bg-eco-teal/5 p-7 flex flex-col animate-fade-in" style={{ animationDelay: "0.16s" }}>
            <span className="text-[12px] font-black text-eco-teal uppercase tracking-widest mb-3">Impact</span>
            <h4 className="text-[20px] font-bold text-foreground mb-3 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {s.impact.heading}
            </h4>
            <p className="text-[16px] text-foreground/80 leading-relaxed">{s.impact.text}</p>
            <button className="mt-4 flex items-center gap-1.5 text-[14px] text-eco-teal font-semibold hover:underline">
              <Info className="w-4 h-4" /> Learn more
            </button>
          </div>
        </div>

        {/* Transformation pills row */}
        <div className="relative z-10 flex items-center gap-3 mt-4 flex-wrap justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          {s.transforms.map((t, i) => (
            <div key={i} className="flex flex-col items-center px-5 py-2.5 rounded-xl border border-border/40 bg-white shadow-sm text-center">
              <span className="text-[13px] text-muted-foreground line-through">{t.from}</span>
              <span className="text-[13px] text-muted-foreground">↓</span>
              <span className="text-[14px] font-bold text-primary">{t.to}</span>
            </div>
          ))}
        </div>

        {/* Tagline pill */}
        <div className="relative z-10 mt-3 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-primary/20 bg-primary/5 shadow-sm">
            <Icon className="w-4 h-4 text-primary" />
            <span className="text-[15px] font-semibold text-primary">{s.tagline}</span>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default Slide03Solution;
