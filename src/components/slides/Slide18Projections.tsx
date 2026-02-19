import { useState } from "react";
import SlideLayout from "../SlideLayout";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  ComposedChart, Line,
} from "recharts";

const revenueData = [
  { year: "FY25", revenue: 3.3, grossProfit: 2.5, netProfit: 0.69 },
  { year: "FY26", revenue: 12.1, grossProfit: 9.4, netProfit: 5.2 },
  { year: "FY27", revenue: 34.9, grossProfit: 27.9, netProfit: 19.3 },
  { year: "FY28", revenue: 83.8, grossProfit: 68.7, netProfit: 53.2 },
  { year: "FY29", revenue: 169.7, grossProfit: 142.5, netProfit: 87.8 },
  { year: "FY30", revenue: 297.2, grossProfit: 252.6, netProfit: 160.0 },
  { year: "FY31", revenue: 481.1, grossProfit: 413.8, netProfit: 268.5 },
  { year: "FY32", revenue: 725.8, grossProfit: 631.4, netProfit: 417.2 },
  { year: "FY33", revenue: 1050, grossProfit: 921.5, netProfit: 617.6 },
  { year: "FY34", revenue: 1460, grossProfit: 1300, netProfit: 879.9 },
];

const marginData = [
  { year: "FY25", margin: 76 }, { year: "FY26", margin: 78 }, { year: "FY27", margin: 80 },
  { year: "FY28", margin: 82 }, { year: "FY29", margin: 84 }, { year: "FY30", margin: 85 },
  { year: "FY31", margin: 86 }, { year: "FY32", margin: 87 }, { year: "FY33", margin: 88 },
  { year: "FY34", margin: 89 },
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
  { year: "FY25", total: "49", dc: "22", revenue: "$3.3M", grossProfit: "$2.5M", netProfit: "$0.69M", margin: "76%", opex: "$1.78M",
    stakeholders: [{ name: "Schools", count: "18", role: "Beachhead" }, { name: "SME SaaS", count: "5", role: "Volume" }, { name: "Data Centers", count: "22", role: "Core" }, { name: "Projects", count: "2", role: "Infra" }, { name: "Marketplace", count: "2", role: "Supply" }] },
  { year: "FY26", total: "154", dc: "71", revenue: "$12.1M", grossProfit: "$9.4M", netProfit: "$5.2M", margin: "78%", opex: "$4.19M",
    stakeholders: [{ name: "Schools", count: "35", role: "Beachhead" }, { name: "SME SaaS", count: "22", role: "Volume" }, { name: "Data Centers", count: "71", role: "Core" }, { name: "Projects", count: "12", role: "Infra" }, { name: "Marketplace", count: "14", role: "Supply" }] },
  { year: "FY27", total: "382", dc: "182", revenue: "$34.9M", grossProfit: "$27.9M", netProfit: "$19.3M", margin: "80%", opex: "$8.51M",
    stakeholders: [{ name: "Schools", count: "85", role: "Beachhead" }, { name: "SME SaaS", count: "55", role: "Volume" }, { name: "Data Centers", count: "182", role: "Core" }, { name: "Projects", count: "28", role: "Infra" }, { name: "Marketplace", count: "32", role: "Supply" }] },
  { year: "FY28", total: "785", dc: "385", revenue: "$83.8M", grossProfit: "$68.7M", netProfit: "$53.2M", margin: "82%", opex: "$15.37M",
    stakeholders: [{ name: "Schools", count: "180", role: "Beachhead" }, { name: "SME SaaS", count: "120", role: "Volume" }, { name: "Data Centers", count: "385", role: "Core" }, { name: "Projects", count: "45", role: "Infra" }, { name: "Marketplace", count: "55", role: "Supply" }] },
  { year: "FY29", total: "1,365", dc: "675", revenue: "$169.7M", grossProfit: "$142.5M", netProfit: "$87.8M", margin: "84%", opex: "$25.27M",
    stakeholders: [{ name: "Schools", count: "380", role: "Beachhead" }, { name: "SME SaaS", count: "310", role: "Volume" }, { name: "Data Centers", count: "675", role: "Core" }, { name: "Projects", count: "240", role: "Infra" }, { name: "Marketplace", count: "520", role: "Supply" }] },
  { year: "FY30", total: "2,115", dc: "1,065", revenue: "$297.2M", grossProfit: "$252.6M", netProfit: "$160.0M", margin: "85%",
    stakeholders: [{ name: "Schools", count: "480", role: "Beachhead" }, { name: "SME SaaS", count: "420", role: "Volume" }, { name: "Data Centers", count: "1,065", role: "Core" }, { name: "Projects", count: "320", role: "Infra" }, { name: "Marketplace", count: "680", role: "Supply" }] },
  { year: "FY31", total: "3,045", dc: "1,565", revenue: "$481.1M", grossProfit: "$413.8M", netProfit: "$268.5M", margin: "86%",
    stakeholders: [{ name: "Schools", count: "620", role: "Beachhead" }, { name: "SME SaaS", count: "550", role: "Volume" }, { name: "Data Centers", count: "1,565", role: "Core" }, { name: "Projects", count: "410", role: "Infra" }, { name: "Marketplace", count: "900", role: "Supply" }] },
  { year: "FY32", total: "4,155", dc: "2,175", revenue: "$725.8M", grossProfit: "$631.4M", netProfit: "$417.2M", margin: "87%",
    stakeholders: [{ name: "Schools", count: "780", role: "Beachhead" }, { name: "SME SaaS", count: "700", role: "Volume" }, { name: "Data Centers", count: "2,175", role: "Core" }, { name: "Projects", count: "520", role: "Infra" }, { name: "Marketplace", count: "1,100", role: "Supply" }] },
  { year: "FY33", total: "5,445", dc: "2,895", revenue: "$1.05B", grossProfit: "$921.5M", netProfit: "$617.6M", margin: "88%",
    stakeholders: [{ name: "Schools", count: "950", role: "Beachhead" }, { name: "SME SaaS", count: "850", role: "Volume" }, { name: "Data Centers", count: "2,895", role: "Core" }, { name: "Projects", count: "650", role: "Infra" }, { name: "Marketplace", count: "1,350", role: "Supply" }] },
  { year: "FY34", total: "6,915", dc: "3,725", revenue: "$1.46B", grossProfit: "$1.30B", netProfit: "$879.9M", margin: "89%",
    stakeholders: [{ name: "Schools", count: "1,150", role: "Beachhead" }, { name: "SME SaaS", count: "1,050", role: "Volume" }, { name: "Data Centers", count: "3,725", role: "Core" }, { name: "Projects", count: "800", role: "Infra" }, { name: "Marketplace", count: "1,600", role: "Supply" }] },
];

const chartTick = { fontSize: 9, fill: "hsl(160, 10%, 50%)" };
const gridStroke = "hsl(160, 10%, 90%)";

const MiniLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">{children}</div>
);

const Slide18Projections = () => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const detail = yearDetails.find((d) => d.year === selectedYear);

  return (
    <SlideLayout>
      <div className="flex flex-col h-full relative">
        <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 shrink-0" />

        <div className="flex flex-col flex-1 px-10 py-4 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between mb-3 animate-fade-in">
            <div>
              <h2 className="text-[30px] font-bold text-foreground leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                ECOGRIDIA — <span className="text-primary">Operating Dashboard</span>
              </h2>
              <p className="text-[12px] text-muted-foreground">10-Year Growth Model · FY25–FY34 · <span className="text-primary font-semibold">Click any year for details</span></p>
            </div>
            <div className="flex gap-2">
              {[
                { l: "FY34 Revenue", v: "$1.46B" },
                { l: "FY34 Customers", v: "6,915" },
                { l: "FY34 Margin", v: "89%" },
              ].map((k) => (
                <div key={k.l} className="bg-card border border-border rounded-lg px-3 py-1.5 text-center">
                  <div className="text-[18px] font-bold text-primary leading-tight">{k.v}</div>
                  <div className="text-[8px] text-muted-foreground font-medium">{k.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Main grid */}
          <div className="grid grid-cols-12 gap-3 flex-1 min-h-0">

            {/* LEFT: Charts */}
            <div className="col-span-5 flex flex-col gap-3 min-h-0">
              <div className="bg-card border border-border rounded-xl p-3 flex flex-col flex-[3] min-h-0 animate-fade-in" style={{ animationDelay: "0.05s" }}>
                <MiniLabel>💰 Revenue & Profit ($M)</MiniLabel>
                <div className="flex-1 min-h-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
                      <XAxis dataKey="year" tick={chartTick} tickLine={false} axisLine={false} />
                      <YAxis tick={chartTick} tickLine={false} axisLine={false} tickFormatter={(v) => v >= 1000 ? `$${(v/1000).toFixed(1)}B` : `$${v}M`} />
                      <Tooltip contentStyle={{ fontSize: 10, borderRadius: 8 }} formatter={(v: number) => [v >= 1000 ? `$${(v/1000).toFixed(2)}B` : `$${v}M`, undefined]} />
                      <Area type="monotone" dataKey="revenue" name="Revenue" fill="hsl(160, 84%, 39%)" fillOpacity={0.12} stroke="hsl(160, 84%, 39%)" strokeWidth={2} />
                      <Line type="monotone" dataKey="grossProfit" name="Gross Profit" stroke="hsl(174, 72%, 40%)" strokeWidth={1.5} dot={false} />
                      <Line type="monotone" dataKey="netProfit" name="Net Profit" stroke="hsl(152, 68%, 30%)" strokeWidth={1.5} dot={false} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="bg-card border border-border rounded-xl p-3 flex flex-col flex-[2] min-h-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <MiniLabel>🟢 Gross Margin Trajectory</MiniLabel>
                <div className="flex-1 min-h-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={marginData}>
                      <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
                      <XAxis dataKey="year" tick={chartTick} tickLine={false} axisLine={false} />
                      <YAxis domain={[70, 92]} tick={chartTick} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}%`} />
                      <Tooltip contentStyle={{ fontSize: 10, borderRadius: 8 }} formatter={(v: number) => [`${v}%`, undefined]} />
                      <Area type="monotone" dataKey="margin" fill="hsl(160, 84%, 39%)" fillOpacity={0.18} stroke="hsl(160, 84%, 39%)" strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* RIGHT: Tables + clickable detail */}
            <div className="col-span-7 flex flex-col gap-3 min-h-0">

              {/* Customer Acquisition with Revenue & Profit rows */}
              <div className="bg-card border border-border rounded-xl p-3 min-h-0 overflow-auto animate-fade-in flex-[3]" style={{ animationDelay: "0.15s" }}>
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
                    <tr className="border-b border-border/50">
                      <td className="py-1 font-medium text-foreground">Customers</td>
                      {yearDetails.map((r) => (
                        <td key={r.year} className={`text-center py-1 font-bold ${selectedYear === r.year ? "text-primary bg-primary/5" : "text-primary"}`}>{r.total}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-1 font-medium text-foreground">DC</td>
                      {yearDetails.map((r) => (
                        <td key={r.year} className={`text-center py-1 font-semibold ${selectedYear === r.year ? "text-foreground bg-primary/5" : "text-foreground"}`}>{r.dc}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-1 font-medium text-foreground">Revenue</td>
                      {yearDetails.map((r) => (
                        <td key={r.year} className={`text-center py-1 font-bold ${selectedYear === r.year ? "text-primary bg-primary/5" : "text-primary"}`}>{r.revenue}</td>
                      ))}
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-1 font-medium text-foreground">Gross</td>
                      {yearDetails.map((r) => (
                        <td key={r.year} className={`text-center py-1 font-semibold ${selectedYear === r.year ? "text-foreground bg-primary/5" : "text-foreground"}`}>{r.grossProfit}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-1 font-medium text-foreground">Net</td>
                      {yearDetails.map((r) => (
                        <td key={r.year} className={`text-center py-1 font-semibold ${selectedYear === r.year ? "text-foreground bg-primary/5" : "text-muted-foreground"}`}>{r.netProfit}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Detail panel (on click) OR default mix + opex */}
              {detail ? (
                <div className="bg-primary/5 border-2 border-primary/30 rounded-xl p-4 flex-[4] min-h-0 overflow-auto animate-fade-in">
                  <div className="flex items-center justify-between mb-2">
                    <MiniLabel>🔍 {detail.year} Breakdown</MiniLabel>
                    <button onClick={() => setSelectedYear(null)} className="text-[9px] text-muted-foreground hover:text-foreground transition-colors underline">Close</button>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {/* Financial summary */}
                    <div>
                      <div className="text-[9px] font-bold text-muted-foreground uppercase mb-1">Financials</div>
                      <div className="grid grid-cols-2 gap-1.5">
                        {[
                          { l: "Revenue", v: detail.revenue },
                          { l: "Gross Profit", v: detail.grossProfit },
                          { l: "Net Profit", v: detail.netProfit },
                          { l: "Margin", v: detail.margin },
                          { l: "Customers", v: detail.total },
                          ...(detail.opex ? [{ l: "OPEX", v: detail.opex }] : []),
                        ].map((m) => (
                          <div key={m.l} className="bg-card border border-border rounded-lg px-2 py-1.5 text-center">
                            <div className="text-[14px] font-bold text-primary">{m.v}</div>
                            <div className="text-[8px] text-muted-foreground">{m.l}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Stakeholder breakdown */}
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
                              <td className="py-1 font-medium text-foreground">{s.name}</td>
                              <td className="text-center py-1 font-bold text-primary">{s.count}</td>
                              <td className="text-right py-1 text-[9px] text-muted-foreground">{s.role}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex gap-3 flex-[4] min-h-0">
                  {/* Mix table */}
                  <div className="bg-card border border-border rounded-xl p-3 flex-1 min-h-0 overflow-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
                    <MiniLabel>🏢 Customer Mix — FY29</MiniLabel>
                    <table className="w-full text-[10px]">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-1 text-muted-foreground font-semibold">Stakeholder</th>
                          <th className="text-center py-1 text-muted-foreground font-semibold">#</th>
                          <th className="text-right py-1 text-muted-foreground font-semibold">Role</th>
                        </tr>
                      </thead>
                      <tbody>
                        {yearDetails[4].stakeholders.map((r) => (
                          <tr key={r.name} className="border-b border-border/30">
                            <td className="py-1.5 font-medium text-foreground">{r.name}</td>
                            <td className="text-center py-1.5 font-bold text-primary">{r.count}</td>
                            <td className="text-right py-1.5 text-muted-foreground text-[9px]">{r.role}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {/* OPEX table */}
                  <div className="bg-card border border-border rounded-xl p-3 flex-1 min-h-0 overflow-auto animate-fade-in" style={{ animationDelay: "0.25s" }}>
                    <MiniLabel>🔥 Burn & OPEX</MiniLabel>
                    <table className="w-full text-[10px]">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-1 text-muted-foreground font-semibold">Year</th>
                          <th className="text-right py-1 text-muted-foreground font-semibold">OPEX</th>
                        </tr>
                      </thead>
                      <tbody>
                        {yearDetails.filter((r) => r.opex).map((r) => (
                          <tr key={r.year} className="border-b border-border/30">
                            <td className="py-1.5 font-medium text-foreground">{r.year}</td>
                            <td className="text-right py-1.5 font-bold text-primary">{r.opex}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="h-[40px] bg-[#14532d] flex items-center justify-center gap-8 px-10 shrink-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          {[
            { l: "FY25→FY34", v: "$3.3M → $1.46B" },
            { l: "10Y CAGR", v: "~95%" },
            { l: "Net Margin FY34", v: "60%" },
            { l: "DC Customers FY34", v: "3,725" },
            { l: "Gross Margin", v: "76% → 89%" },
          ].map((m) => (
            <div key={m.l} className="flex items-center gap-1.5">
              <span className="text-emerald-300/70 text-[10px] font-medium">{m.l}</span>
              <span className="text-white text-[12px] font-bold">{m.v}</span>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide18Projections;
