import SlideLayout from "../SlideLayout";
import { useState } from "react";
import {
  DollarSign, FileCheck, Blocks, Server, Coins, Activity,
  AlertTriangle, ChevronRight, CheckCircle2, Zap, TrendingUp,
} from "lucide-react";
import {
  LineChart, Line, ResponsiveContainer, Tooltip, Area, AreaChart,
} from "recharts";

/* ─── Data ────────────────────────────────────────────────────── */
const energyTrend = [
  { y: "2020", v: 10 }, { y: "2021", v: 11.5 }, { y: "2022", v: 13.2 },
  { y: "2023", v: 15.8 }, { y: "2024", v: 17.4 }, { y: "2025", v: 19.1 },
];
const dcConsumption = [
  { y: "2020", v: 3.2 }, { y: "2021", v: 3.8 }, { y: "2022", v: 4.1 },
  { y: "2023", v: 4.5 }, { y: "2025", v: 6.0 }, { y: "2030", v: 9.2 },
];
const aiDemand = [
  { y: "2021", v: 1 }, { y: "2022", v: 1.4 }, { y: "2023", v: 1.9 },
  { y: "2024", v: 2.3 }, { y: "2025", v: 2.7 }, { y: "2026", v: 3 },
];
const complianceTrend = [
  { y: "2021", v: 3 }, { y: "2022", v: 5 }, { y: "2023", v: 7.5 },
  { y: "2024", v: 9 }, { y: "2025", v: 10 },
];
const vendorDelay = [
  { y: "2020", v: 4 }, { y: "2021", v: 5 }, { y: "2022", v: 6 },
  { y: "2023", v: 7 }, { y: "2024", v: 8.5 }, { y: "2025", v: 9 },
];
const recGrowth = [
  { y: "2020", v: 0.6 }, { y: "2021", v: 0.9 }, { y: "2022", v: 1.1 },
  { y: "2023", v: 1.4 }, { y: "2024", v: 1.7 }, { y: "2025", v: 2.0 },
];
const intelligenceTrend = [
  { y: "2020", v: 5 }, { y: "2021", v: 8 }, { y: "2022", v: 12 },
  { y: "2023", v: 18 }, { y: "2024", v: 23 }, { y: "2025", v: 29 },
];

const problems = [
  {
    num: "01", icon: DollarSign, title: "Rising & Volatile Energy Costs",
    stat: "15–25%", statLabel: "US price increase (3yr)",
    kpis: [
      { label: "US Energy Inflation", value: "15–25%", sub: "3-Year Trend", data: energyTrend, color: "#10b981" },
      { label: "AI Demand Growth",    value: "2–3x",   sub: "Workload multiplier", data: aiDemand, color: "#14b8a6" },
      { label: "DC Energy Share",     value: "4–5%",   sub: "↑ 8–10% by 2030",   data: dcConsumption, color: "#6ee7b7" },
    ],
    bullets: [
      "US commercial electricity prices increased ~15–25% in the past 3 years",
      "Industrial facilities spend $500K–$5M annually on electricity",
      "Data centers consume 4–5% of total US electricity (projected 8–10% by 2030)",
    ],
    chart1: { label: "3-Year Trend", value: "↑ 22%", data: energyTrend },
    chart2: { label: "DC Power Consumption", value: "↑ 8–8%", data: dcConsumption },
    ai: "AI forecast indicates 18.2% additional energy volatility over next 24 months for high-density AI data centers.",
    impact: ["Gross margin erosion up to 4–8%", "CapEx expansion pressure", "CFO risk exposure", "AI infrastructure cost volatility"],
  },
  {
    num: "02", icon: FileCheck, title: "ESG & SEC Compliance Pressure",
    stat: "10K+", statLabel: "US companies impacted",
    kpis: [
      { label: "Companies Impacted",  value: "10K+",  sub: "Climate disclosure", data: complianceTrend, color: "#10b981" },
      { label: "Public Reporters",    value: "3,000+",sub: "SEC preparation",    data: complianceTrend, color: "#14b8a6" },
      { label: "Lack Automation",     value: "60%",   sub: "No carbon tracking", data: complianceTrend, color: "#6ee7b7" },
    ],
    bullets: [
      "10,000+ US companies impacted by climate disclosure expectations",
      "3,000+ public companies preparing for SEC reporting",
      "60% of mid-market firms lack automated carbon tracking",
    ],
    chart1: { label: "Compliance Pressure", value: "↑ 3x", data: complianceTrend },
    chart2: { label: "Reporting Readiness Gap", value: "60%", data: complianceTrend },
    ai: "AI analysis shows 67% of companies will face material ESG restatements without automated compliance tooling by 2026.",
    impact: ["Legal exposure & fines", "Investor scrutiny", "Supply chain pressure", "Reputation risk"],
  },
  {
    num: "03", icon: Blocks, title: "Fragmented Renewable Ecosystem",
    stat: "6–9 mo", statLabel: "avg project delay",
    kpis: [
      { label: "Vendor Coordination", value: "3–5x",  sub: "Avg vendors per project", data: vendorDelay, color: "#10b981" },
      { label: "Projects Delayed",    value: "70%",   sub: "Multi-vendor friction",   data: vendorDelay, color: "#14b8a6" },
      { label: "Avg Delay",           value: "6–9mo", sub: "Time to completion",      data: vendorDelay, color: "#6ee7b7" },
    ],
    bullets: [
      "Solar EPCs, consultants, carbon brokers operate in silos",
      "70% of projects require coordination across 3–5 vendors",
      "Average project delay: 6–9 months from fragmentation",
    ],
    chart1: { label: "Vendor Fragmentation", value: "↑ 9mo", data: vendorDelay },
    chart2: { label: "Project Abandonment Risk", value: "↑ 35%", data: vendorDelay },
    ai: "AI modelling shows unified procurement reduces delivery timelines by 4.2 months and cuts cost overruns by 28%.",
    impact: ["Cost overruns", "Project abandonment", "SLA violations", "Lost ROI windows"],
  },
  {
    num: "04", icon: Server, title: "DC Renewable Procurement",
    stat: "2x", statLabel: "DC demand doubling",
    kpis: [
      { label: "RE100 Commitments",   value: "100%",  sub: "Hyperscaler targets", data: dcConsumption, color: "#10b981" },
      { label: "Demand Doubling",     value: "2x",    sub: "Regional DC growth",  data: dcConsumption, color: "#14b8a6" },
      { label: "PPA Complexity",      value: "High",  sub: "Procurement friction", data: dcConsumption, color: "#6ee7b7" },
    ],
    bullets: [
      "Hyperscalers committed to 100% renewable energy (RE100)",
      "Data center electricity demand expected to double regionally",
      "Renewable PPAs and REC procurement highly complex & fragmented",
    ],
    chart1: { label: "DC Power Demand", value: "↑ 2x", data: dcConsumption },
    chart2: { label: "Renewable Gap", value: "↑ 45%", data: energyTrend },
    ai: "AI predicts a 2.8x surge in enterprise DC renewable procurement requests by Q4 2026 outpacing supply.",
    impact: ["Renewable gap vs targets", "Reputation risk", "ESG scrutiny", "Grid reliability strain"],
  },
  {
    num: "05", icon: Coins, title: "Unmonetized RECs (Leakage)",
    stat: "$1–2B", statLabel: "US REC market/yr",
    kpis: [
      { label: "REC Market Size",     value: "$1–2B",  sub: "US annual market", data: recGrowth, color: "#10b981" },
      { label: "Untapped RECs",       value: "10–20%", sub: "Revenue unused",   data: recGrowth, color: "#14b8a6" },
      { label: "Installations",       value: "1000s",  sub: "Not actively trading", data: recGrowth, color: "#6ee7b7" },
    ],
    bullets: [
      "US REC market size: $1–2B annually with consistent growth",
      "Thousands of small installations don't actively trade RECs",
      "10–20% potential renewable revenue often left uncaptured",
    ],
    chart1: { label: "REC Market Growth", value: "↑ $2B", data: recGrowth },
    chart2: { label: "Revenue Leakage", value: "15%", data: recGrowth },
    ai: "AI-driven REC optimization captures 14–19% additional revenue from existing installations with zero new CapEx.",
    impact: ["Reduced ROI on assets", "Poor visibility", "Missed funding cycles", "Capital inefficiency"],
  },
  {
    num: "06", icon: Activity, title: "No Real-Time Energy Intelligence",
    stat: "20–30%", statLabel: "solar underperformance",
    kpis: [
      { label: "Solar Underperform",  value: "20–30%", sub: "Without monitoring",   data: intelligenceTrend, color: "#10b981" },
      { label: "Lack Analytics",      value: "50%",    sub: "Mid-market firms",     data: intelligenceTrend, color: "#14b8a6" },
      { label: "SLA Risk",            value: "High",   sub: "DC uptime critical",   data: intelligenceTrend, color: "#6ee7b7" },
    ],
    bullets: [
      "20–30% of installed solar underperforms without real-time monitoring",
      "50% of mid-market firms lack real-time energy analytics",
      "Data center uptime & optimization critical to SLA commitments",
    ],
    chart1: { label: "Monitoring Gap", value: "↑ 30%", data: intelligenceTrend },
    chart2: { label: "ROI Degradation", value: "↑ 24%", data: intelligenceTrend },
    ai: "AI monitoring detects degradation 6.3x faster than manual audits, recovering $180K average annual savings per MW.",
    impact: ["Lost savings potential", "Unnoticed failures", "Poor ROI measurement", "SLA breach risk"],
  },
];

/* ─── Mini sparkline ──────────────────────────────────────────── */
const Spark = ({ data, color }: { data: { y: string; v: number }[]; color: string }) => (
  <ResponsiveContainer width="100%" height={40}>
    <AreaChart data={data} margin={{ top: 2, right: 2, bottom: 2, left: 2 }}>
      <defs>
        <linearGradient id={`g${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%"  stopColor={color} stopOpacity={0.35} />
          <stop offset="95%" stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
      <Area type="monotone" dataKey="v" stroke={color} strokeWidth={1.5}
        fill={`url(#g${color.replace("#", "")})`} dot={false} />
    </AreaChart>
  </ResponsiveContainer>
);

/* ─── Mini line chart with axes labels ───────────────────────── */
const MiniChart = ({ data, color = "#10b981" }: { data: { y: string; v: number }[]; color?: string }) => (
  <ResponsiveContainer width="100%" height={80}>
    <LineChart data={data} margin={{ top: 4, right: 4, bottom: 4, left: 4 }}>
      <Line type="monotone" dataKey="v" stroke={color} strokeWidth={2} dot={false} />
    </LineChart>
  </ResponsiveContainer>
);

/* ─── Slide ───────────────────────────────────────────────────── */
const Slide02Problem = () => {
  const [selected, setSelected] = useState<number>(0);
  const p = problems[selected];
  const Icon = p.icon;

  return (
    <SlideLayout>
      <div className="flex h-full bg-[hsl(160,20%,5%)] text-[hsl(0,0%,95%)]">

        {/* ── LEFT SIDEBAR ─────────────────────────────────── */}
        <div className="w-[300px] shrink-0 flex flex-col border-r border-[hsl(160,15%,15%)]"
          style={{ background: "hsl(160,20%,6%)" }}>

          {/* Sidebar header */}
          <div className="px-6 py-5 border-b border-[hsl(160,15%,13%)] shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[hsl(160,84%,39%)]/20 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-[hsl(160,84%,50%)]" />
              </div>
              <div>
                <p className="text-[13px] font-black tracking-widest text-[hsl(160,84%,50%)] uppercase" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Market Failures</p>
                <p className="text-[11px] text-[hsl(160,10%,50%)]">Systemic US Pain Points</p>
              </div>
            </div>
          </div>

          {/* Problem list */}
          <div className="flex-1 overflow-hidden flex flex-col justify-center gap-0.5 px-3 py-3">
            {problems.map((prob, i) => {
              const PIcon = prob.icon;
              const isActive = selected === i;
              return (
                <button key={i} onClick={() => setSelected(i)}
                  className={`flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-all duration-200 group ${
                    isActive
                      ? "bg-[hsl(160,84%,39%)]/15 border border-[hsl(160,84%,39%)]/30"
                      : "hover:bg-[hsl(160,15%,10%)] border border-transparent"
                  }`}>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                    isActive ? "bg-[hsl(160,84%,39%)] text-white" : "bg-[hsl(160,15%,12%)] text-[hsl(160,10%,55%)]"
                  }`}>
                    <PIcon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-[12px] font-bold leading-tight ${isActive ? "text-[hsl(160,84%,60%)]" : "text-[hsl(0,0%,80%)]"}`}>
                      {prob.title}
                    </p>
                    <p className="text-[10px] text-[hsl(160,10%,45%)] mt-0.5">{prob.statLabel}</p>
                  </div>
                  <span className={`text-[13px] font-extrabold shrink-0 ${isActive ? "text-[hsl(160,84%,50%)]" : "text-[hsl(0,0%,55%)]"}`}>
                    {prob.stat}
                  </span>
                  <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-all ${isActive ? "text-[hsl(160,84%,50%)] translate-x-0.5" : "text-[hsl(0,0%,25%)]"}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* ── RIGHT MAIN ───────────────────────────────────── */}
        <div className="flex-1 flex flex-col overflow-hidden" key={selected}>

          {/* Top header bar */}
          <div className="flex items-center justify-between px-8 py-4 border-b border-[hsl(160,15%,12%)] shrink-0">
            <h2 className="text-[22px] font-black text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{p.title}</h2>
            <div className="flex items-center gap-4">
              <span className="text-[11px] text-[hsl(160,10%,50%)]">↺ Updated just now</span>
              <span className="flex items-center gap-1.5 text-[11px] font-semibold text-[hsl(160,84%,50%)] bg-[hsl(160,84%,39%)]/10 border border-[hsl(160,84%,39%)]/30 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[hsl(160,84%,50%)] animate-pulse" />
                Live
              </span>
            </div>
          </div>

          {/* KPI Cards row */}
          <div className="flex gap-4 px-8 py-4 shrink-0">
            {p.kpis.map((kpi, ki) => (
              <div key={ki} className="flex-1 rounded-xl border border-[hsl(160,15%,13%)] p-4 flex flex-col"
                style={{ background: "hsl(160,20%,7%)" }}>
                <div className="flex items-start justify-between mb-1">
                  <p className="text-[10px] text-[hsl(160,10%,50%)] uppercase tracking-wider">{kpi.label}</p>
                  <TrendingUp className="w-3 h-3 text-[hsl(160,84%,50%)]/50" />
                </div>
                <p className="text-[22px] font-black text-white leading-none mb-0.5" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{kpi.value}</p>
                <Spark data={kpi.data} color={kpi.color} />
                <p className="text-[9px] text-[hsl(160,10%,40%)] mt-0.5">{kpi.sub}</p>
              </div>
            ))}
          </div>

          {/* Detail card */}
          <div className="mx-8 rounded-xl border border-[hsl(160,15%,13%)] flex-1 overflow-hidden flex flex-col"
            style={{ background: "hsl(160,20%,7%)" }}>
            {/* Card header */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-[hsl(160,15%,12%)]">
              <div className="w-9 h-9 rounded-lg bg-[hsl(160,84%,39%)]/20 flex items-center justify-center">
                <Icon className="w-5 h-5 text-[hsl(160,84%,50%)]" />
              </div>
              <div>
                <p className="text-[10px] text-[hsl(160,10%,45%)] font-mono">Problem {p.num} of 06</p>
                <h3 className="text-[16px] font-black text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{p.title}</h3>
              </div>
            </div>

            {/* Body — bullets + charts */}
            <div className="flex flex-1 overflow-hidden">
              {/* Bullets */}
              <div className="flex-1 px-6 py-4">
                <p className="text-[9px] font-bold text-[hsl(160,10%,45%)] uppercase tracking-widest mb-3 flex items-center gap-2">
                  Key Data Points
                  <span className="flex gap-1">{[0,1,2].map(d=><span key={d} className={`w-1.5 h-1.5 rounded-full ${d===0?"bg-[hsl(160,84%,50%)]":"bg-[hsl(160,15%,20%)]"}`}/>)}</span>
                </p>
                <div className="space-y-2">
                  {p.bullets.map((b, bi) => (
                    <div key={bi} className="flex items-start gap-3 p-3 rounded-lg border border-[hsl(160,15%,12%)]"
                      style={{ background: "hsl(160,15%,9%)" }}>
                      <CheckCircle2 className="w-4 h-4 text-[hsl(160,84%,50%)] shrink-0 mt-0.5" />
                      <span className="text-[12px] text-[hsl(0,0%,80%)] leading-snug">{b}</span>
                    </div>
                  ))}
                </div>

                {/* AI insight */}
                <div className="mt-3 p-3 rounded-lg border border-[hsl(160,84%,39%)]/20 flex items-start gap-3"
                  style={{ background: "hsl(160,30%,8%)" }}>
                  <div className="w-7 h-7 rounded-full bg-[hsl(160,84%,39%)]/15 border border-[hsl(160,84%,39%)]/30 flex items-center justify-center shrink-0">
                    <Zap className="w-3.5 h-3.5 text-[hsl(160,84%,50%)]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold text-[hsl(160,84%,50%)]" style={{ fontFamily: "Space Grotesk, sans-serif" }}>VoltIQ™</span>
                      <span className="text-[9px] bg-[hsl(160,15%,15%)] text-[hsl(160,10%,55%)] px-1.5 py-0.5 rounded font-mono">AI</span>
                    </div>
                    <p className="text-[11px] text-[hsl(0,0%,70%)] leading-relaxed">{p.ai}</p>
                  </div>
                </div>
              </div>

              {/* Mini charts column */}
              <div className="w-[220px] shrink-0 border-l border-[hsl(160,15%,12%)] px-4 py-4 flex flex-col gap-3">
                <div className="rounded-lg border border-[hsl(160,15%,13%)] p-3" style={{ background: "hsl(160,15%,9%)" }}>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-[9px] text-[hsl(160,10%,50%)]">{p.chart1.label}</p>
                    <span className="text-[10px] font-bold text-[hsl(160,84%,50%)]">{p.chart1.value}</span>
                  </div>
                  <MiniChart data={p.chart1.data} />
                </div>
                <div className="rounded-lg border border-[hsl(160,15%,13%)] p-3" style={{ background: "hsl(160,15%,9%)" }}>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-[9px] text-[hsl(160,10%,50%)]">{p.chart2.label}</p>
                    <span className="text-[10px] font-bold text-[hsl(160,84%,50%)]">{p.chart2.value}</span>
                  </div>
                  <MiniChart data={p.chart2.data} color="#14b8a6" />
                </div>
              </div>
            </div>
          </div>

          {/* Business impact bar */}
          <div className="mx-8 mt-3 mb-4 rounded-xl border border-[hsl(0,62%,30%)]/40 px-6 py-3 shrink-0"
            style={{ background: "hsl(0,30%,8%)" }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[9px] font-black text-[hsl(0,84%,60%)] uppercase tracking-widest">Business Impact</span>
              <span className="flex gap-1">{[0,1,2].map(d=><span key={d} className="w-1.5 h-1.5 rounded-full bg-[hsl(0,84%,60%)]" />)}</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {p.impact.map((imp, ii) => (
                <div key={ii} className="flex items-center gap-2 p-2 rounded-lg border border-[hsl(0,62%,25%)]/30"
                  style={{ background: "hsl(0,20%,10%)" }}>
                  <div className="w-4 h-4 rounded bg-[hsl(0,84%,40%)]/30 flex items-center justify-center shrink-0">
                    <span className="text-[8px] font-bold text-[hsl(0,84%,60%)]">{String.fromCharCode(65+ii)}</span>
                  </div>
                  <span className="text-[10px] text-[hsl(0,0%,70%)]">{imp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide02Problem;
