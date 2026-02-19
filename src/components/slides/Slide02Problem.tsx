import SlideLayout from "../SlideLayout";
import { useState } from "react";
import {
  DollarSign, FileCheck, Blocks, Server, Coins, Activity,
  AlertTriangle, ChevronRight, CheckCircle2, Zap, TrendingUp,
} from "lucide-react";
import { AreaChart, Area, LineChart, Line, ResponsiveContainer } from "recharts";

/* ─── Trend data ─────────────────────────────────────────────── */
const energyTrend    = [{ v:10},{ v:11.5},{ v:13.2},{ v:15.8},{ v:17.4},{ v:19.1}];
const dcConsumption  = [{ v:3.2},{ v:3.8},{ v:4.1},{ v:4.5},{ v:6.0},{ v:9.2}];
const aiDemand       = [{ v:1},{ v:1.4},{ v:1.9},{ v:2.3},{ v:2.7},{ v:3}];
const complianceTrend= [{ v:3},{ v:5},{ v:7.5},{ v:9},{ v:10}];
const vendorDelay    = [{ v:4},{ v:5},{ v:6},{ v:7},{ v:8.5},{ v:9}];
const recGrowth      = [{ v:0.6},{ v:0.9},{ v:1.1},{ v:1.4},{ v:1.7},{ v:2.0}];
const intelligenceTrend=[{ v:5},{ v:8},{ v:12},{ v:18},{ v:23},{ v:29}];

const problems = [
  {
    num:"01", icon:DollarSign, title:"Rising & Volatile Energy Costs",
    stat:"15–25%", statLabel:"US price increase (3yr)",
    kpis:[
      { label:"US Energy Inflation", value:"15–25%", sub:"3-Year Trend",      data:energyTrend },
      { label:"AI Demand Growth",    value:"2–3x",   sub:"Workload multiplier",data:aiDemand },
      { label:"DC Energy Share",     value:"4–5%",   sub:"↑ 8–10% by 2030",   data:dcConsumption },
    ],
    bullets:[
      "US commercial electricity prices increased ~15–25% in the past 3 years",
      "Industrial facilities spend $500K–$5M annually on electricity",
      "Data centers consume 4–5% of total US electricity (projected 8–10% by 2030)",
    ],
    chart1:{ label:"3-Year Trend",      value:"↑ 22%", data:energyTrend },
    chart2:{ label:"DC Power Demand",   value:"↑ 8%",  data:dcConsumption },
    ai:"AI forecast indicates 18.2% additional energy volatility over next 24 months for high-density AI data centers.",
    impact:["Margin compression","Grid strain","CFO pressure to reduce OpEx","AI cost volatility"],
  },
  {
    num:"02", icon:FileCheck, title:"ESG & SEC Compliance Pressure",
    stat:"10K+", statLabel:"US companies impacted",
    kpis:[
      { label:"Companies Impacted", value:"10K+",  sub:"Climate disclosure",  data:complianceTrend },
      { label:"Public Reporters",   value:"3,000+",sub:"SEC preparation",     data:complianceTrend },
      { label:"Lack Automation",    value:"60%",   sub:"No carbon tracking",  data:complianceTrend },
    ],
    bullets:[
      "10,000+ US companies impacted by climate disclosure expectations",
      "3,000+ public companies preparing for SEC reporting",
      "60% of mid-market firms lack automated carbon tracking",
    ],
    chart1:{ label:"Compliance Growth", value:"↑ 3x", data:complianceTrend },
    chart2:{ label:"Readiness Gap",     value:"60%",  data:complianceTrend },
    ai:"AI analysis shows 67% of companies will face material ESG restatements without automated compliance tooling by 2026.",
    impact:["Legal exposure","Investor scrutiny","Supply chain pressure","Reputation risk"],
  },
  {
    num:"03", icon:Blocks, title:"Fragmented Renewable Ecosystem",
    stat:"6–9 mo", statLabel:"avg project delay",
    kpis:[
      { label:"Vendors per Project", value:"3–5",   sub:"Avg coordination load", data:vendorDelay },
      { label:"Projects Delayed",    value:"70%",   sub:"Multi-vendor friction",  data:vendorDelay },
      { label:"Avg Delay",           value:"6–9mo", sub:"Time to completion",     data:vendorDelay },
    ],
    bullets:[
      "Solar EPCs, consultants, carbon brokers operate in silos",
      "70% of projects require coordination across 3–5 vendors",
      "Average project delay: 6–9 months from fragmentation",
    ],
    chart1:{ label:"Vendor Fragmentation", value:"↑ 9mo", data:vendorDelay },
    chart2:{ label:"Abandonment Risk",     value:"↑ 35%", data:vendorDelay },
    ai:"AI modelling shows unified procurement reduces delivery timelines by 4.2 months and cuts cost overruns by 28%.",
    impact:["Cost overruns","Project abandonment","SLA violations","Lost ROI windows"],
  },
  {
    num:"04", icon:Server, title:"DC Renewable Procurement",
    stat:"2x", statLabel:"DC demand doubling",
    kpis:[
      { label:"RE100 Commitments", value:"100%", sub:"Hyperscaler targets",  data:dcConsumption },
      { label:"Demand Doubling",   value:"2x",   sub:"Regional DC growth",   data:dcConsumption },
      { label:"PPA Complexity",    value:"High", sub:"Procurement friction",  data:energyTrend },
    ],
    bullets:[
      "Hyperscalers committed to 100% renewable energy (RE100)",
      "Data center electricity demand expected to double regionally",
      "Renewable PPAs and REC procurement highly complex & fragmented",
    ],
    chart1:{ label:"DC Power Demand",  value:"↑ 2x", data:dcConsumption },
    chart2:{ label:"Renewable Gap",    value:"↑ 45%",data:energyTrend },
    ai:"AI predicts a 2.8x surge in enterprise DC renewable procurement requests by Q4 2026 outpacing supply.",
    impact:["Renewable gap vs targets","Reputation risk","ESG scrutiny","Grid reliability strain"],
  },
  {
    num:"05", icon:Coins, title:"Unmonetized RECs (Leakage)",
    stat:"$1–2B", statLabel:"US REC market/yr",
    kpis:[
      { label:"REC Market Size",  value:"$1–2B",  sub:"US annual market",    data:recGrowth },
      { label:"Untapped RECs",    value:"10–20%", sub:"Revenue unused",      data:recGrowth },
      { label:"Installations",    value:"1000s",  sub:"Not actively trading",data:recGrowth },
    ],
    bullets:[
      "US REC market size: $1–2B annually with consistent growth",
      "Thousands of small installations don't actively trade RECs",
      "10–20% potential renewable revenue often left uncaptured",
    ],
    chart1:{ label:"REC Market Growth", value:"↑ $2B", data:recGrowth },
    chart2:{ label:"Revenue Leakage",   value:"15%",   data:recGrowth },
    ai:"AI-driven REC optimization captures 14–19% additional revenue from existing installations with zero new CapEx.",
    impact:["Reduced ROI on assets","Poor visibility","Missed funding cycles","Capital inefficiency"],
  },
  {
    num:"06", icon:Activity, title:"No Real-Time Energy Intelligence",
    stat:"20–30%", statLabel:"solar underperformance",
    kpis:[
      { label:"Solar Underperform", value:"20–30%", sub:"Without monitoring",  data:intelligenceTrend },
      { label:"Lack Analytics",     value:"50%",    sub:"Mid-market firms",    data:intelligenceTrend },
      { label:"SLA Risk",           value:"High",   sub:"DC uptime critical",  data:intelligenceTrend },
    ],
    bullets:[
      "20–30% of installed solar underperforms without real-time monitoring",
      "50% of mid-market firms lack real-time energy analytics",
      "Data center uptime & optimization critical to SLA commitments",
    ],
    chart1:{ label:"Monitoring Gap",    value:"↑ 30%", data:intelligenceTrend },
    chart2:{ label:"ROI Degradation",   value:"↑ 24%", data:intelligenceTrend },
    ai:"AI monitoring detects degradation 6.3x faster than manual audits, recovering $180K average annual savings per MW.",
    impact:["Lost savings potential","Unnoticed failures","Poor ROI measurement","SLA breach risk"],
  },
];

/* ─── Sparkline ──────────────────────────────────────────────── */
const Spark = ({ data }: { data: { v: number }[] }) => (
  <ResponsiveContainer width="100%" height={36}>
    <AreaChart data={data} margin={{ top: 2, right: 2, bottom: 2, left: 2 }}>
      <defs>
        <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%"  stopColor="hsl(160,84%,39%)" stopOpacity={0.25} />
          <stop offset="95%" stopColor="hsl(160,84%,39%)" stopOpacity={0} />
        </linearGradient>
      </defs>
      <Area type="monotone" dataKey="v" stroke="hsl(160,84%,39%)" strokeWidth={1.5} fill="url(#sg)" dot={false} />
    </AreaChart>
  </ResponsiveContainer>
);

/* ─── Mini line chart ────────────────────────────────────────── */
const MiniLine = ({ data, color = "hsl(160,84%,39%)" }: { data: { v: number }[]; color?: string }) => (
  <ResponsiveContainer width="100%" height={64}>
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
      <div className="flex h-full">

        {/* ── LEFT SIDEBAR (identical to Slide03) ─────────── */}
        <div className="w-[520px] shrink-0 flex flex-col bg-card/40 border-r border-border/30">
          {/* Header */}
          <div className="px-10 pt-8 pb-5 shrink-0 border-b border-border/20">
            <div className="flex items-center gap-4 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
              <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-7 h-7 text-destructive" />
              </div>
              <div>
                <h2 className="text-[38px] font-extrabold text-foreground leading-none">
                  Market <span className="text-destructive">Failure</span>
                </h2>
                <p className="text-[16px] text-muted-foreground mt-1">6 systemic US market failures</p>
              </div>
            </div>
          </div>

          {/* Problem list */}
          <div className="flex-1 flex flex-col justify-center gap-1.5 px-5 py-3">
            {problems.map((prob, i) => {
              const PIcon = prob.icon;
              const isActive = selected === i;
              return (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  className={`flex items-center gap-4 px-5 py-3.5 rounded-2xl text-left transition-all duration-300 opacity-0 animate-fade-in ${
                    isActive
                      ? "bg-primary/10 border-2 border-primary/30 shadow-lg shadow-primary/5"
                      : "bg-transparent border-2 border-transparent hover:bg-card hover:border-border/30"
                  }`}
                  style={{ animationDelay: `${0.08 + i * 0.05}s`, animationFillMode: "forwards" }}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isActive ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" : "bg-secondary text-muted-foreground"
                  }`}>
                    <PIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-[15px] font-bold leading-tight transition-colors ${isActive ? "text-primary" : "text-foreground"}`}>
                      {prob.title}
                    </p>
                    <p className="text-[12px] text-muted-foreground mt-0.5">{prob.statLabel}</p>
                  </div>
                  <span className={`text-[15px] font-extrabold shrink-0 transition-colors ${isActive ? "text-primary" : "text-foreground/60"}`}>
                    {prob.stat}
                  </span>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-all duration-300 ${isActive ? "text-primary translate-x-1" : "text-muted-foreground/40"}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* ── RIGHT MAIN PANEL ─────────────────────────────── */}
        <div className="flex-1 flex flex-col overflow-hidden px-10 py-7 gap-5" key={selected}>

          {/* Top header */}
          <div className="flex items-center justify-between shrink-0 animate-fade-in">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] text-muted-foreground font-mono tracking-wider uppercase">Problem {p.num} of 06</span>
                <h3 className="text-[26px] font-extrabold text-foreground leading-tight">{p.title}</h3>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-semibold text-primary bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Live Data
            </div>
          </div>

          {/* KPI Cards row */}
          <div className="flex gap-4 shrink-0 animate-fade-in" style={{ animationDelay: "0.08s", animationFillMode: "forwards", opacity: 0 }}>
            {p.kpis.map((kpi, ki) => (
              <div key={ki} className="flex-1 rounded-2xl bg-card border border-border/30 p-4 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">{kpi.label}</p>
                  <TrendingUp className="w-3.5 h-3.5 text-primary/50" />
                </div>
                <p className="text-[24px] font-black text-foreground mt-1 leading-none">{kpi.value}</p>
                <Spark data={kpi.data} />
                <p className="text-[10px] text-muted-foreground">{kpi.sub}</p>
              </div>
            ))}
          </div>

          {/* Detail card */}
          <div className="flex-1 rounded-2xl bg-card border border-border/30 shadow-sm overflow-hidden flex animate-fade-in" style={{ animationDelay: "0.15s", animationFillMode: "forwards", opacity: 0 }}>
            {/* Bullets section */}
            <div className="flex-1 flex flex-col px-7 py-5">
              <h4 className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-3">Key Data Points</h4>
              <div className="space-y-2.5 flex-1">
                {p.bullets.map((b, bi) => (
                  <div
                    key={bi}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-secondary/50 border border-border/30 hover:border-primary/20 hover:shadow-sm transition-all duration-300 opacity-0 animate-fade-in"
                    style={{ animationDelay: `${0.2 + bi * 0.07}s`, animationFillMode: "forwards" }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-[14px] text-foreground leading-snug">{b}</span>
                  </div>
                ))}
              </div>

              {/* AI insight */}
              <div className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/15 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold text-primary">VoltIQ™</span>
                    <span className="text-[9px] bg-muted text-muted-foreground px-1.5 py-0.5 rounded font-mono">AI</span>
                  </div>
                  <p className="text-[12px] text-muted-foreground leading-relaxed">{p.ai}</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-px bg-border/30 my-5" />

            {/* Mini charts */}
            <div className="w-[200px] shrink-0 px-5 py-5 flex flex-col gap-4 justify-center">
              <div className="rounded-xl bg-secondary/50 border border-border/30 p-3">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-[10px] text-muted-foreground">{p.chart1.label}</p>
                  <span className="text-[11px] font-bold text-primary">{p.chart1.value}</span>
                </div>
                <MiniLine data={p.chart1.data} />
              </div>
              <div className="rounded-xl bg-secondary/50 border border-border/30 p-3">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-[10px] text-muted-foreground">{p.chart2.label}</p>
                  <span className="text-[11px] font-bold text-primary">{p.chart2.value}</span>
                </div>
                <MiniLine data={p.chart2.data} color="hsl(174,72%,40%)" />
              </div>
            </div>
          </div>

          {/* Business impact bar */}
          <div className="shrink-0 p-4 rounded-2xl bg-destructive/[0.04] border border-destructive/15 animate-fade-in" style={{ animationDelay: "0.35s", animationFillMode: "forwards", opacity: 0 }}>
            <span className="text-[11px] font-bold text-destructive uppercase tracking-wider">⚠ Business Impact</span>
            <div className="flex gap-2.5 mt-2.5 flex-wrap">
              {p.impact.map((imp, ii) => (
                <span key={ii} className="px-4 py-2 rounded-lg bg-destructive/10 text-destructive text-[13px] font-semibold">
                  {imp}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide02Problem;
