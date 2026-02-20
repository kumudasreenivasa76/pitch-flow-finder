import React, { useState } from "react";
import SlideLayout from "../SlideLayout";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  ComposedChart, Line,
} from "recharts";

const revenueData = [
  { year: "FY26", revenue: 3.3, grossProfit: 2.5, netProfit: 0.69 },
  { year: "FY27", revenue: 12.1, grossProfit: 9.4, netProfit: 5.2 },
  { year: "FY28", revenue: 34.9, grossProfit: 27.9, netProfit: 19.3 },
  { year: "FY29", revenue: 83.8, grossProfit: 68.7, netProfit: 53.2 },
  { year: "FY30", revenue: 169.7, grossProfit: 142.5, netProfit: 87.8 },
  { year: "FY31", revenue: 297.2, grossProfit: 252.6, netProfit: 160.0 },
  { year: "FY32", revenue: 481.1, grossProfit: 413.8, netProfit: 268.5 },
  { year: "FY33", revenue: 725.8, grossProfit: 631.4, netProfit: 417.2 },
  { year: "FY34", revenue: 1050, grossProfit: 921.5, netProfit: 617.6 },
  { year: "FY35", revenue: 1460, grossProfit: 1300, netProfit: 879.9 },
];

const marginData = [
  { year: "FY26", margin: 76 }, { year: "FY27", margin: 78 }, { year: "FY28", margin: 80 },
  { year: "FY29", margin: 82 }, { year: "FY30", margin: 84 }, { year: "FY31", margin: 85 },
  { year: "FY32", margin: 86 }, { year: "FY33", margin: 87 }, { year: "FY34", margin: 88 },
  { year: "FY35", margin: 89 },
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
  { year: "FY26", total: "49", dc: "22", revenue: "$3.3M", grossProfit: "$2.5M", netProfit: "$0.69M", margin: "76%", opex: "$1.78M",
    stakeholders: [{ name: "Schools", count: "18", role: "Beachhead" }, { name: "SME SaaS", count: "5", role: "Volume" }, { name: "Data Centers", count: "22", role: "Core" }, { name: "Projects", count: "2", role: "Infra" }, { name: "Marketplace", count: "2", role: "Supply" }] },
  { year: "FY27", total: "154", dc: "71", revenue: "$12.1M", grossProfit: "$9.4M", netProfit: "$5.2M", margin: "78%", opex: "$4.19M",
    stakeholders: [{ name: "Schools", count: "35", role: "Beachhead" }, { name: "SME SaaS", count: "22", role: "Volume" }, { name: "Data Centers", count: "71", role: "Core" }, { name: "Projects", count: "12", role: "Infra" }, { name: "Marketplace", count: "14", role: "Supply" }] },
  { year: "FY28", total: "382", dc: "182", revenue: "$34.9M", grossProfit: "$27.9M", netProfit: "$19.3M", margin: "80%", opex: "$8.51M",
    stakeholders: [{ name: "Schools", count: "85", role: "Beachhead" }, { name: "SME SaaS", count: "55", role: "Volume" }, { name: "Data Centers", count: "182", role: "Core" }, { name: "Projects", count: "28", role: "Infra" }, { name: "Marketplace", count: "32", role: "Supply" }] },
  { year: "FY29", total: "785", dc: "385", revenue: "$83.8M", grossProfit: "$68.7M", netProfit: "$53.2M", margin: "82%", opex: "$15.37M",
    stakeholders: [{ name: "Schools", count: "180", role: "Beachhead" }, { name: "SME SaaS", count: "120", role: "Volume" }, { name: "Data Centers", count: "385", role: "Core" }, { name: "Projects", count: "45", role: "Infra" }, { name: "Marketplace", count: "55", role: "Supply" }] },
  { year: "FY30", total: "1,365", dc: "675", revenue: "$169.7M", grossProfit: "$142.5M", netProfit: "$87.8M", margin: "84%", opex: "$25.27M",
    stakeholders: [{ name: "Schools", count: "380", role: "Beachhead" }, { name: "SME SaaS", count: "310", role: "Volume" }, { name: "Data Centers", count: "675", role: "Core" }, { name: "Projects", count: "240", role: "Infra" }, { name: "Marketplace", count: "520", role: "Supply" }] },
  { year: "FY31", total: "2,115", dc: "1,065", revenue: "$297.2M", grossProfit: "$252.6M", netProfit: "$160.0M", margin: "85%",
    stakeholders: [{ name: "Schools", count: "480", role: "Beachhead" }, { name: "SME SaaS", count: "420", role: "Volume" }, { name: "Data Centers", count: "1,065", role: "Core" }, { name: "Projects", count: "320", role: "Infra" }, { name: "Marketplace", count: "680", role: "Supply" }] },
  { year: "FY32", total: "3,045", dc: "1,565", revenue: "$481.1M", grossProfit: "$413.8M", netProfit: "$268.5M", margin: "86%",
    stakeholders: [{ name: "Schools", count: "620", role: "Beachhead" }, { name: "SME SaaS", count: "550", role: "Volume" }, { name: "Data Centers", count: "1,565", role: "Core" }, { name: "Projects", count: "410", role: "Infra" }, { name: "Marketplace", count: "900", role: "Supply" }] },
  { year: "FY33", total: "4,155", dc: "2,175", revenue: "$725.8M", grossProfit: "$631.4M", netProfit: "$417.2M", margin: "87%",
    stakeholders: [{ name: "Schools", count: "780", role: "Beachhead" }, { name: "SME SaaS", count: "700", role: "Volume" }, { name: "Data Centers", count: "2,175", role: "Core" }, { name: "Projects", count: "520", role: "Infra" }, { name: "Marketplace", count: "1,100", role: "Supply" }] },
  { year: "FY34", total: "5,445", dc: "2,895", revenue: "$1.05B", grossProfit: "$921.5M", netProfit: "$617.6M", margin: "88%",
    stakeholders: [{ name: "Schools", count: "950", role: "Beachhead" }, { name: "SME SaaS", count: "850", role: "Volume" }, { name: "Data Centers", count: "2,895", role: "Core" }, { name: "Projects", count: "650", role: "Infra" }, { name: "Marketplace", count: "1,350", role: "Supply" }] },
  { year: "FY35", total: "6,915", dc: "3,725", revenue: "$1.46B", grossProfit: "$1.30B", netProfit: "$879.9M", margin: "89%",
    stakeholders: [{ name: "Schools", count: "1,150", role: "Beachhead" }, { name: "SME SaaS", count: "1,050", role: "Volume" }, { name: "Data Centers", count: "3,725", role: "Core" }, { name: "Projects", count: "800", role: "Infra" }, { name: "Marketplace", count: "1,600", role: "Supply" }] },
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
      <div className="relative w-full h-full flex flex-col bg-white overflow-hidden px-14 pt-4 pb-3">
        {/* Grid background */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
            backgroundSize: "60px 60px", opacity: 0.5,
          }}
        />

        <div className="relative z-10 w-full flex-1 flex flex-col">
          {/* Header */}
          <div className="text-center mb-1 animate-fade-in">
            <span className="inline-block px-3 py-0.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-[11px] font-bold tracking-widest uppercase mb-0.5">
              Growth Projections
            </span>
            <h2 className="text-[32px] font-extrabold text-foreground leading-none" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              EcoGridia — <span className="text-primary">Operating Dashboard</span>
            </h2>
            <p className="text-[11px] text-muted-foreground mt-0">10-Year Growth Model · FY26–FY35 · <span className="text-primary font-semibold">Click any year for details</span></p>
          </div>

          {/* KPI strip */}
          <div className="flex justify-center gap-1.5 mb-1.5 animate-fade-in" style={{ animationDelay: "0.02s" }}>
            {[
              { l: "FY35 Revenue", v: "$1.46B" },
              { l: "FY35 Customers", v: "6,915" },
              { l: "FY35 Margin", v: "89%" },
              { l: "10Y CAGR", v: "~95%" },
              { l: "Net Margin FY35", v: "60%" },
            ].map((k) => (
              <div key={k.l} className="bg-card border border-border rounded px-2 py-0.5 text-center">
                <div className="text-[13px] font-bold text-primary leading-tight">{k.v}</div>
                <div className="text-[7px] text-muted-foreground font-medium">{k.l}</div>
              </div>
            ))}
          </div>

          {/* Main grid: Charts left, Tables right */}
          <div className="grid grid-cols-12 gap-1.5 flex-1">

            {/* LEFT: Charts */}
            <div className="col-span-5 flex flex-col gap-1.5">
              <div className="bg-card border border-border rounded-lg p-2 animate-fade-in" style={{ animationDelay: "0.05s" }}>
                <MiniLabel>💰 Revenue & Profit ($M)</MiniLabel>
                <div className="h-[180px]">
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
                <div className="h-[140px]">
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
            <div className="col-span-7 flex flex-col gap-1.5">

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
                <div className="grid grid-cols-2 gap-1.5">
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
                        { l: "FY26", v: "$3.3M", tag: "Launch + first 49 customers" },
                        { l: "FY27", v: "$12.1M", tag: "3.7× growth, 154 customers" },
                        { l: "FY28", v: "$34.9M", tag: "2.9× growth, unit econ proven" },
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
          <div className="flex justify-center mt-1.5 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="inline-flex items-center gap-4 rounded-xl px-6 py-1.5"
              style={{ background: "linear-gradient(90deg, #14532d 0%, #166534 50%, #14532d 100%)" }}>
              {[
                { l: "FY26→FY35", v: "$3.3M → $1.46B" },
                { l: "10Y CAGR", v: "~95%" },
                { l: "Net Margin FY35", v: "60%" },
                { l: "DC Customers FY35", v: "3,725" },
                { l: "Gross Margin", v: "76% → 89%" },
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
