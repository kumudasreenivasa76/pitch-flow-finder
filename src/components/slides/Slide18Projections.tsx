import React, { useState } from "react";
import SlideLayout from "../SlideLayout";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  ComposedChart, Line,
} from "recharts";

const revenueData = [
  { year: "FY26", revenue: 1.8, grossProfit: 1.3, netProfit: 0.35 },
  { year: "FY27", revenue: 6.5, grossProfit: 5.0, netProfit: 2.6 },
  { year: "FY28", revenue: 18.2, grossProfit: 14.4, netProfit: 9.5 },
  { year: "FY29", revenue: 42.5, grossProfit: 34.0, netProfit: 24.8 },
  { year: "FY30", revenue: 85.2, grossProfit: 69.9, netProfit: 41.1 },
  { year: "FY31", revenue: 148.0, grossProfit: 122.7, netProfit: 74.0 },
  { year: "FY32", revenue: 235.5, grossProfit: 198.5, netProfit: 122.8 },
  { year: "FY33", revenue: 352.0, grossProfit: 301.2, netProfit: 190.5 },
  { year: "FY34", revenue: 502.0, grossProfit: 436.7, netProfit: 281.1 },
  { year: "FY35", revenue: 685.0, grossProfit: 603.0, netProfit: 393.3 },
];

const marginData = [
  { year: "FY26", margin: 74 }, { year: "FY27", margin: 76 }, { year: "FY28", margin: 79 },
  { year: "FY29", margin: 80 }, { year: "FY30", margin: 82 }, { year: "FY31", margin: 83 },
  { year: "FY32", margin: 84 }, { year: "FY33", margin: 85.5 }, { year: "FY34", margin: 87 },
  { year: "FY35", margin: 88 },
];

interface YearDetail {
  year: string;
  total: string;
  dc: string;
  revenue: string;
  grossProfit: string;
  netProfit: string;
  stakeholders: { name: string; count: string; role: string }[];
  opex?: string;
  margin: string;
}

const yearDetails: YearDetail[] = [
  { year: "FY26", total: "32", dc: "12", revenue: "$1.8M", grossProfit: "$1.3M", netProfit: "$0.35M", margin: "74%", opex: "$0.95M",
    stakeholders: [{ name: "Schools", count: "10", role: "Beachhead" }, { name: "SME SaaS", count: "4", role: "Volume" }, { name: "Data Centers", count: "12", role: "Core" }, { name: "Enterprises", count: "2", role: "Strategic" }, { name: "Projects", count: "2", role: "Infra" }, { name: "Marketplace", count: "2", role: "Supply" }] },
  { year: "FY27", total: "95", dc: "42", revenue: "$6.5M", grossProfit: "$5.0M", netProfit: "$2.6M", margin: "76%", opex: "$2.4M",
    stakeholders: [{ name: "Schools", count: "22", role: "Beachhead" }, { name: "SME SaaS", count: "14", role: "Volume" }, { name: "Data Centers", count: "42", role: "Core" }, { name: "Enterprises", count: "5", role: "Strategic" }, { name: "Projects", count: "6", role: "Infra" }, { name: "Marketplace", count: "6", role: "Supply" }] },
  { year: "FY28", total: "225", dc: "105", revenue: "$18.2M", grossProfit: "$14.4M", netProfit: "$9.5M", margin: "79%", opex: "$4.9M",
    stakeholders: [{ name: "Schools", count: "52", role: "Beachhead" }, { name: "SME SaaS", count: "32", role: "Volume" }, { name: "Data Centers", count: "105", role: "Core" }, { name: "Enterprises", count: "12", role: "Strategic" }, { name: "Projects", count: "14", role: "Infra" }, { name: "Marketplace", count: "18", role: "Supply" }] },
  { year: "FY29", total: "465", dc: "215", revenue: "$42.5M", grossProfit: "$34.0M", netProfit: "$24.8M", margin: "80%", opex: "$9.2M",
    stakeholders: [{ name: "Schools", count: "110", role: "Beachhead" }, { name: "SME SaaS", count: "68", role: "Volume" }, { name: "Data Centers", count: "215", role: "Core" }, { name: "Enterprises", count: "22", role: "Strategic" }, { name: "Projects", count: "28", role: "Infra" }, { name: "Marketplace", count: "32", role: "Supply" }] },
  { year: "FY30", total: "870", dc: "420", revenue: "$85.2M", grossProfit: "$69.9M", netProfit: "$41.1M", margin: "82%", opex: "$14.5M",
    stakeholders: [{ name: "Schools", count: "240", role: "Beachhead" }, { name: "SME SaaS", count: "210", role: "Volume" }, { name: "Data Centers", count: "420", role: "Core" }, { name: "Enterprises", count: "40", role: "Strategic" }, { name: "Projects", count: "120", role: "Infra" }, { name: "Marketplace", count: "280", role: "Supply" }] },
  { year: "FY31", total: "1,280", dc: "620", revenue: "$148.0M", grossProfit: "$122.7M", netProfit: "$74.0M", margin: "83%",
    stakeholders: [{ name: "Schools", count: "310", role: "Beachhead" }, { name: "SME SaaS", count: "280", role: "Volume" }, { name: "Data Centers", count: "620", role: "Core" }, { name: "Enterprises", count: "58", role: "Strategic" }, { name: "Projects", count: "180", role: "Infra" }, { name: "Marketplace", count: "380", role: "Supply" }] },
  { year: "FY32", total: "1,780", dc: "860", revenue: "$235.5M", grossProfit: "$198.5M", netProfit: "$122.8M", margin: "84%",
    stakeholders: [{ name: "Schools", count: "395", role: "Beachhead" }, { name: "SME SaaS", count: "360", role: "Volume" }, { name: "Data Centers", count: "860", role: "Core" }, { name: "Enterprises", count: "82", role: "Strategic" }, { name: "Projects", count: "240", role: "Infra" }, { name: "Marketplace", count: "480", role: "Supply" }] },
  { year: "FY33", total: "2,350", dc: "1,150", revenue: "$352.0M", grossProfit: "$301.2M", netProfit: "$190.5M", margin: "85.5%",
    stakeholders: [{ name: "Schools", count: "490", role: "Beachhead" }, { name: "SME SaaS", count: "450", role: "Volume" }, { name: "Data Centers", count: "1,150", role: "Core" }, { name: "Enterprises", count: "110", role: "Strategic" }, { name: "Projects", count: "310", role: "Infra" }, { name: "Marketplace", count: "600", role: "Supply" }] },
  { year: "FY34", total: "3,020", dc: "1,480", revenue: "$502.0M", grossProfit: "$436.7M", netProfit: "$281.1M", margin: "87%",
    stakeholders: [{ name: "Schools", count: "600", role: "Beachhead" }, { name: "SME SaaS", count: "550", role: "Volume" }, { name: "Data Centers", count: "1,480", role: "Core" }, { name: "Enterprises", count: "150", role: "Strategic" }, { name: "Projects", count: "400", role: "Infra" }, { name: "Marketplace", count: "750", role: "Supply" }] },
  { year: "FY35", total: "3,850", dc: "1,920", revenue: "$685.0M", grossProfit: "$603.0M", netProfit: "$393.3M", margin: "88%",
    stakeholders: [{ name: "Schools", count: "720", role: "Beachhead" }, { name: "SME SaaS", count: "680", role: "Volume" }, { name: "Data Centers", count: "1,920", role: "Core" }, { name: "Enterprises", count: "200", role: "Strategic" }, { name: "Projects", count: "480", role: "Infra" }, { name: "Marketplace", count: "850", role: "Supply" }] },
];

const chartTick = { fontSize: 9, fill: "#6b7280" };
const gridStroke = "#e5e7eb";

const MiniLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1">{children}</div>
);

const Slide18Projections = () => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const detail = yearDetails.find((d) => d.year === selectedYear);

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
          <div className="text-center mb-3 animate-fade-in">
            <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[13px] font-bold tracking-widest uppercase mb-2">
              Growth Projections
            </span>
            <h2 className="text-[40px] font-extrabold text-foreground leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              EcoGridia — <span className="text-primary">Operating Dashboard</span>
            </h2>
            <p className="text-[15px] text-muted-foreground mt-1">10-Year Growth Model · FY26–FY35 · <span className="text-primary font-semibold">Click any year for details</span></p>
          </div>

          {/* KPI strip */}
          <div className="flex justify-center gap-2 mb-3 animate-fade-in" style={{ animationDelay: "0.02s" }}>
            {[
              { l: "FY35 Revenue", v: "$685M" },
              { l: "FY35 Customers", v: "3,850" },
              { l: "FY35 Margin", v: "88%" },
              { l: "10Y CAGR", v: "~82%" },
              { l: "Net Margin FY35", v: "57%" },
            ].map((k) => (
              <div key={k.l} className="bg-card border border-border rounded px-3 py-1 text-center">
                <div className="text-[14px] font-bold text-primary leading-tight">{k.v}</div>
                <div className="text-[9px] text-muted-foreground font-medium">{k.l}</div>
              </div>
            ))}
          </div>

          {/* Main grid: Charts left, Tables right */}
          <div className="grid grid-cols-12 gap-2">

            {/* LEFT: Charts */}
            <div className="col-span-5 flex flex-col gap-2">
              <div className="bg-card border border-border rounded-lg p-2 animate-fade-in" style={{ animationDelay: "0.05s" }}>
                <MiniLabel>💰 Revenue & Profit ($M)</MiniLabel>
                <div className="h-[155px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={revenueData}>
                      <defs>
                        <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.25} />
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0.02} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
                      <XAxis dataKey="year" tick={chartTick} tickLine={false} axisLine={false} />
                      <YAxis tick={chartTick} tickLine={false} axisLine={false} tickFormatter={(v) => v >= 1000 ? `$${(v/1000).toFixed(1)}B` : `$${v}M`} />
                      <Tooltip contentStyle={{ fontSize: 10, borderRadius: 8 }} formatter={(v: number) => [v >= 1000 ? `$${(v/1000).toFixed(2)}B` : `$${v}M`, undefined]} />
                      <Area type="monotone" dataKey="revenue" name="Revenue" fill="url(#revenueGrad)" fillOpacity={1} stroke="#10b981" strokeWidth={2.5} />
                      <Line type="monotone" dataKey="grossProfit" name="Gross Profit" stroke="#3b82f6" strokeWidth={2} dot={false} />
                      <Line type="monotone" dataKey="netProfit" name="Net Profit" stroke="#8b5cf6" strokeWidth={2} dot={false} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <MiniLabel>🟢 Gross Margin Trajectory</MiniLabel>
                <div className="h-[110px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={marginData}>
                      <defs>
                        <linearGradient id="marginGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.02} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
                      <XAxis dataKey="year" tick={chartTick} tickLine={false} axisLine={false} />
                      <YAxis domain={[70, 92]} tick={chartTick} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}%`} />
                      <Tooltip contentStyle={{ fontSize: 10, borderRadius: 8 }} formatter={(v: number) => [`${v}%`, undefined]} />
                      <Area type="monotone" dataKey="margin" fill="url(#marginGrad)" fillOpacity={1} stroke="#f59e0b" strokeWidth={2.5} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* RIGHT: Tables */}
            <div className="col-span-7 flex flex-col gap-2">

              {/* Customer Acquisition & Financials table */}
              <div className="bg-card border border-border rounded-lg p-2 animate-fade-in" style={{ animationDelay: "0.15s" }}>
                <MiniLabel>📊 Customer Acquisition & Financials</MiniLabel>
                <table className="w-full text-[10px]">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-1 text-muted-foreground font-semibold w-[60px]">Metric</th>
                      {yearDetails.map((r) => (
                        <th
                          key={r.year}
                          className={`text-center py-1 font-semibold cursor-pointer transition-colors ${selectedYear === r.year ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-primary"}`}
                          onClick={() => setSelectedYear(selectedYear === r.year ? null : r.year)}
                        >
                          {r.year}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { label: "Customers", key: "total" as const, bold: true },
                      { label: "DC", key: "dc" as const, bold: false },
                      { label: "Revenue", key: "revenue" as const, bold: true },
                      { label: "Gross", key: "grossProfit" as const, bold: false },
                      { label: "Net", key: "netProfit" as const, bold: false },
                    ].map((row) => (
                      <tr key={row.label} className="border-b border-border/50 last:border-0">
                        <td className="py-1 font-medium text-foreground">{row.label}</td>
                        {yearDetails.map((r) => (
                          <td key={r.year} className={`text-center py-1 ${row.bold ? "font-bold" : "font-semibold"} ${selectedYear === r.year ? "text-primary bg-primary/5" : row.bold ? "text-primary" : "text-foreground"}`}>
                            {r[row.key]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Detail panel OR Key Assumptions + Near-Term */}
              {detail ? (
                <div className="bg-primary/5 border-2 border-primary/30 rounded-lg p-2 animate-fade-in">
                  <div className="flex items-center justify-between mb-1">
                    <MiniLabel>🔍 {detail.year} Breakdown</MiniLabel>
                    <button onClick={() => setSelectedYear(null)} className="text-[9px] text-muted-foreground hover:text-foreground transition-colors underline">Close</button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <div className="text-[9px] font-bold text-muted-foreground uppercase mb-0.5">Financials</div>
                      <div className="grid grid-cols-2 gap-1">
                        {[
                          { l: "Revenue", v: detail.revenue },
                          { l: "Gross Profit", v: detail.grossProfit },
                          { l: "Net Profit", v: detail.netProfit },
                          { l: "Margin", v: detail.margin },
                          { l: "Customers", v: detail.total },
                          ...(detail.opex ? [{ l: "OPEX", v: detail.opex }] : []),
                        ].map((m) => (
                          <div key={m.l} className="bg-card border border-border rounded px-1.5 py-0.5 text-center">
                            <div className="text-[11px] font-bold text-primary">{m.v}</div>
                            <div className="text-[8px] text-muted-foreground">{m.l}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-[9px] font-bold text-muted-foreground uppercase mb-1">Stakeholder Acquisition</div>
                      <table className="w-full text-[10px]">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-0.5 text-muted-foreground font-semibold">Segment</th>
                            <th className="text-center py-0.5 text-muted-foreground font-semibold">#</th>
                            <th className="text-right py-0.5 text-muted-foreground font-semibold">Role</th>
                          </tr>
                        </thead>
                        <tbody>
                          {detail.stakeholders.map((s) => (
                            <tr key={s.name} className="border-b border-border/30">
                              <td className="py-0.5 font-medium text-foreground">{s.name}</td>
                              <td className="text-center py-0.5 font-bold text-primary">{s.count}</td>
                              <td className="text-right py-0.5 text-[9px] text-muted-foreground">{s.role}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  {/* Key Assumptions */}
                  <div className="bg-amber-50/50 border-2 border-amber-400/30 rounded-lg p-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                    <MiniLabel>📋 Key Assumptions</MiniLabel>
                    <div className="space-y-1">
                      {[
                        { l: "Headcount", v: "10 → 240 FTE", sub: "FY26 → FY35" },
                        { l: "CAC Trend", v: "Declining", sub: "Scale efficiencies" },
                        { l: "NRR", v: "> 120%", sub: "Upsell + expansion" },
                        { l: "Expansion Rate", v: "35% / yr", sub: "Multi-site + credits" },
                        { l: "Churn", v: "12% annual", sub: "Contractual lock-in" },
                        { l: "Pricing Growth", v: "5–8% / yr", sub: "Value-based increases" },
                      ].map((a) => (
                        <div key={a.l} className="flex items-center justify-between py-0.5 border-b border-amber-200/50 last:border-0">
                          <div>
                            <div className="text-[10px] font-bold text-foreground">{a.l}</div>
                            <div className="text-[8px] text-muted-foreground">{a.sub}</div>
                          </div>
                          <div className="text-[11px] font-black text-amber-700">{a.v}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Near-Term Focus */}
                  <div className="bg-card border border-border rounded-lg p-2 animate-fade-in" style={{ animationDelay: "0.25s" }}>
                    <MiniLabel>🎯 Near-Term Focus: FY26–FY28</MiniLabel>
                    <div className="space-y-1">
                      {[
                        { l: "FY26", v: "$1.8M", tag: "Launch UAE + first 32 customers" },
                        { l: "FY27", v: "$6.5M", tag: "3.6× growth, 95 customers" },
                        { l: "FY28", v: "$18.2M", tag: "2.8× growth, unit econ proven" },
                      ].map((y) => (
                        <div key={y.l} className="flex items-center gap-2 py-1 border-b border-border/30 last:border-0">
                          <span className="text-[10px] font-bold text-primary w-8">{y.l}</span>
                          <span className="text-[12px] font-black text-foreground">{y.v}</span>
                          <span className="text-[9px] text-muted-foreground flex-1 text-right">{y.tag}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-1.5 text-[9px] text-muted-foreground italic text-center">FY29+ are scale targets contingent on near-term execution</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom summary strip */}
          <div className="flex justify-center mt-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="inline-flex items-center gap-4 rounded-xl px-6 py-2"
              style={{ background: "linear-gradient(90deg, #14532d 0%, #166534 50%, #14532d 100%)" }}>
              {[
                { l: "FY26→FY35", v: "$1.8M → $685M" },
                { l: "10Y CAGR", v: "~82%" },
                { l: "Net Margin FY35", v: "57%" },
                { l: "DC Customers FY35", v: "1,920" },
                { l: "Gross Margin", v: "74% → 88%" },
              ].map((m, i, arr) => (
                <React.Fragment key={m.l}>
                  <div className="text-center">
                    <div className="text-[13px] font-black text-white leading-tight">{m.v}</div>
                    <div className="text-[9px] text-green-200">{m.l}</div>
                  </div>
                  {i < arr.length - 1 && <div className="w-px h-5 bg-white/20 shrink-0" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide18Projections;
