import SlideLayout from "../SlideLayout";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  ComposedChart, Bar, Line,
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

const customerRows = [
  { year: "FY25", total: "49", dc: "22" },
  { year: "FY26", total: "154", dc: "71" },
  { year: "FY27", total: "382", dc: "182" },
  { year: "FY28", total: "785", dc: "385" },
  { year: "FY29", total: "1,365", dc: "675" },
  { year: "FY30", total: "2,115", dc: "1,065" },
  { year: "FY31", total: "3,045", dc: "1,565" },
  { year: "FY32", total: "4,155", dc: "2,175" },
  { year: "FY33", total: "5,445", dc: "2,895" },
  { year: "FY34", total: "6,915", dc: "3,725" },
];

const mixRows = [
  { stakeholder: "Schools / Education", customers: "380", role: "Beachhead" },
  { stakeholder: "SME SaaS", customers: "310", role: "Volume" },
  { stakeholder: "Data Centers", customers: "675", role: "Core Revenue" },
  { stakeholder: "Projects Facilitated", customers: "240", role: "Infra Layer" },
  { stakeholder: "Marketplace Vendors", customers: "520", role: "Supply Side" },
];

const opexRows = [
  { year: "FY25", opex: "$1.78M" },
  { year: "FY26", opex: "$4.19M" },
  { year: "FY27", opex: "$8.51M" },
  { year: "FY28", opex: "$15.37M" },
  { year: "FY29", opex: "$25.27M" },
];

const chartTick = { fontSize: 9, fill: "hsl(160, 10%, 50%)" };
const gridStroke = "hsl(160, 10%, 90%)";

const MiniLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">{children}</div>
);

const Slide18Projections = () => (
  <SlideLayout>
    <div className="flex flex-col h-full relative">
      {/* Top gradient accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 shrink-0" />

      <div className="flex flex-col flex-1 px-10 py-4 overflow-hidden">
        {/* Header row */}
        <div className="flex items-center justify-between mb-3 animate-fade-in">
          <div>
            <h2 className="text-[30px] font-bold text-foreground leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              ECOGRIDIA — <span className="text-primary">Operating Dashboard</span>
            </h2>
            <p className="text-[12px] text-muted-foreground">10-Year Growth Model · FY25–FY34</p>
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

        {/* Main content: 3 columns */}
        <div className="grid grid-cols-12 gap-3 flex-1 min-h-0">

          {/* LEFT COL: Revenue chart + Margin chart (stacked) */}
          <div className="col-span-5 flex flex-col gap-3 min-h-0">
            {/* Revenue chart */}
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
            {/* Margin chart */}
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

          {/* RIGHT COL: Tables (stacked) */}
          <div className="col-span-7 flex flex-col gap-3 min-h-0">

            {/* Customer Acquisition Table */}
            <div className="bg-card border border-border rounded-xl p-3 flex-[3] min-h-0 overflow-auto animate-fade-in" style={{ animationDelay: "0.15s" }}>
              <MiniLabel>📊 Customer Acquisition Projection</MiniLabel>
              <table className="w-full text-[10px]">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-1 text-muted-foreground font-semibold">Year</th>
                    {customerRows.map((r) => (
                      <th key={r.year} className="text-center py-1 text-muted-foreground font-semibold">{r.year}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-1.5 font-medium text-foreground">Total</td>
                    {customerRows.map((r) => (
                      <td key={r.year} className="text-center py-1.5 font-bold text-primary">{r.total}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-1.5 font-medium text-foreground">DC</td>
                    {customerRows.map((r) => (
                      <td key={r.year} className="text-center py-1.5 font-semibold text-foreground">{r.dc}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Customer Mix FY29 + OPEX side by side */}
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
                    {mixRows.map((r) => (
                      <tr key={r.stakeholder} className="border-b border-border/30">
                        <td className="py-1.5 font-medium text-foreground">{r.stakeholder}</td>
                        <td className="text-center py-1.5 font-bold text-primary">{r.customers}</td>
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
                    {opexRows.map((r) => (
                      <tr key={r.year} className="border-b border-border/30">
                        <td className="py-1.5 font-medium text-foreground">{r.year}</td>
                        <td className="text-right py-1.5 font-bold text-primary">{r.opex}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* P&L summary */}
                <div className="mt-2 pt-2 border-t border-border">
                  <MiniLabel>📊 P&L Highlights (FY29)</MiniLabel>
                  <div className="grid grid-cols-3 gap-1 mt-1">
                    {[
                      { l: "Revenue", v: "$169.7M" },
                      { l: "Gross", v: "$142.5M" },
                      { l: "Net", v: "$87.8M" },
                    ].map((m) => (
                      <div key={m.l} className="text-center">
                        <div className="text-[13px] font-bold text-primary">{m.v}</div>
                        <div className="text-[8px] text-muted-foreground">{m.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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

export default Slide18Projections;
