import SlideLayout from "../SlideLayout";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area, LineChart, Line, ComposedChart,
} from "recharts";

const customerData = [
  { year: "FY25", total: 49, dc: 22 },
  { year: "FY26", total: 154, dc: 71 },
  { year: "FY27", total: 382, dc: 182 },
  { year: "FY28", total: 785, dc: 385 },
  { year: "FY29", total: 1365, dc: 675 },
  { year: "FY30", total: 2115, dc: 1065 },
  { year: "FY31", total: 3045, dc: 1565 },
  { year: "FY32", total: 4155, dc: 2175 },
  { year: "FY33", total: 5445, dc: 2895 },
  { year: "FY34", total: 6915, dc: 3725 },
];

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
  { year: "FY25", margin: 76 },
  { year: "FY26", margin: 78 },
  { year: "FY27", margin: 80 },
  { year: "FY28", margin: 82 },
  { year: "FY29", margin: 84 },
  { year: "FY30", margin: 85 },
  { year: "FY31", margin: 86 },
  { year: "FY32", margin: 87 },
  { year: "FY33", margin: 88 },
  { year: "FY34", margin: 89 },
];

const opexData = [
  { year: "FY25", opex: 1.78 },
  { year: "FY26", opex: 4.19 },
  { year: "FY27", opex: 8.51 },
  { year: "FY28", opex: 15.37 },
  { year: "FY29", opex: 25.27 },
];

const mixData = [
  { name: "Schools", value: 380, color: "hsl(160, 84%, 39%)" },
  { name: "SME SaaS", value: 310, color: "hsl(174, 72%, 40%)" },
  { name: "Data Centers", value: 675, color: "hsl(152, 68%, 30%)" },
  { name: "Projects", value: 240, color: "hsl(160, 40%, 55%)" },
  { name: "Marketplace", value: 520, color: "hsl(160, 25%, 70%)" },
];

const MiniLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1">{children}</div>
);

const KPI = ({ label, value, sub }: { label: string; value: string; sub?: string }) => (
  <div className="bg-card border border-border rounded-lg px-3 py-2 text-center">
    <div className="text-[20px] font-bold text-primary leading-tight">{value}</div>
    <div className="text-[9px] text-muted-foreground font-medium">{label}</div>
    {sub && <div className="text-[8px] text-muted-foreground/70">{sub}</div>}
  </div>
);

const chartTick = { fontSize: 9, fill: "hsl(160, 10%, 50%)" };
const gridStroke = "hsl(160, 10%, 90%)";

const Slide18Projections = () => (
  <SlideLayout>
    <div className="flex flex-col h-full relative">
      {/* Top gradient accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 shrink-0" />

      <div className="flex flex-col flex-1 px-10 py-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-3 animate-fade-in">
          <div>
            <h2 className="text-[32px] font-bold text-foreground leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              ECOGRIDIA — <span className="text-primary">Operating Dashboard</span>
            </h2>
            <p className="text-[13px] text-muted-foreground">10-Year Growth Model · FY25–FY34</p>
          </div>
          <div className="flex gap-2">
            <KPI label="FY34 Revenue" value="$1.46B" />
            <KPI label="FY34 Customers" value="6,915" />
            <KPI label="FY34 Margin" value="89%" />
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-12 gap-3 flex-1 min-h-0">

          {/* Customer Acquisition — spans 5 cols */}
          <div className="col-span-5 bg-card border border-border rounded-xl p-3 flex flex-col animate-fade-in" style={{ animationDelay: "0.05s" }}>
            <MiniLabel>📊 Customer Acquisition</MiniLabel>
            <div className="flex-1 min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={customerData} barGap={2}>
                  <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
                  <XAxis dataKey="year" tick={chartTick} tickLine={false} axisLine={false} />
                  <YAxis tick={chartTick} tickLine={false} axisLine={false} tickFormatter={(v) => v >= 1000 ? `${(v/1000).toFixed(1)}k` : v} />
                  <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8 }} formatter={(v: number) => [v.toLocaleString(), undefined]} />
                  <Bar dataKey="total" name="Total" fill="hsl(160, 84%, 39%)" radius={[3, 3, 0, 0]} />
                  <Bar dataKey="dc" name="Data Centers" fill="hsl(174, 72%, 40%)" radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Revenue & Profit — spans 7 cols */}
          <div className="col-span-7 bg-card border border-border rounded-xl p-3 flex flex-col animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <MiniLabel>💰 Revenue & Profit Projection ($M)</MiniLabel>
            <div className="flex-1 min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
                  <XAxis dataKey="year" tick={chartTick} tickLine={false} axisLine={false} />
                  <YAxis tick={chartTick} tickLine={false} axisLine={false} tickFormatter={(v) => v >= 1000 ? `$${(v/1000).toFixed(1)}B` : `$${v}M`} />
                  <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8 }} formatter={(v: number) => [v >= 1000 ? `$${(v/1000).toFixed(2)}B` : `$${v}M`, undefined]} />
                  <Area type="monotone" dataKey="revenue" name="Revenue" fill="hsl(160, 84%, 39%)" fillOpacity={0.15} stroke="hsl(160, 84%, 39%)" strokeWidth={2} />
                  <Line type="monotone" dataKey="grossProfit" name="Gross Profit" stroke="hsl(174, 72%, 40%)" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="netProfit" name="Net Profit" stroke="hsl(152, 68%, 30%)" strokeWidth={2} dot={false} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Gross Margin — spans 4 cols */}
          <div className="col-span-4 bg-card border border-border rounded-xl p-3 flex flex-col animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <MiniLabel>🟢 Gross Margin Trajectory</MiniLabel>
            <div className="flex-1 min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={marginData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
                  <XAxis dataKey="year" tick={chartTick} tickLine={false} axisLine={false} />
                  <YAxis domain={[70, 92]} tick={chartTick} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}%`} />
                  <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8 }} formatter={(v: number) => [`${v}%`, undefined]} />
                  <Area type="monotone" dataKey="margin" fill="hsl(160, 84%, 39%)" fillOpacity={0.2} stroke="hsl(160, 84%, 39%)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Customer Mix FY29 — spans 4 cols */}
          <div className="col-span-4 bg-card border border-border rounded-xl p-3 flex flex-col animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <MiniLabel>🏢 Customer Mix — FY29 Snapshot</MiniLabel>
            <div className="flex-1 flex flex-col justify-center gap-1.5 py-1">
              {mixData.map((seg) => (
                <div key={seg.name} className="flex items-center gap-2">
                  <div className="text-[10px] text-muted-foreground w-[72px] text-right shrink-0">{seg.name}</div>
                  <div className="flex-1 h-[14px] bg-muted/30 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${(seg.value / 675) * 100}%`, backgroundColor: seg.color }}
                    />
                  </div>
                  <div className="text-[10px] font-bold text-foreground w-[32px]">{seg.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* OPEX / Burn — spans 4 cols */}
          <div className="col-span-4 bg-card border border-border rounded-xl p-3 flex flex-col animate-fade-in" style={{ animationDelay: "0.25s" }}>
            <MiniLabel>🔥 Burn & OPEX ($M)</MiniLabel>
            <div className="flex-1 min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={opexData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
                  <XAxis dataKey="year" tick={chartTick} tickLine={false} axisLine={false} />
                  <YAxis tick={chartTick} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}M`} />
                  <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8 }} formatter={(v: number) => [`$${v}M`, undefined]} />
                  <Bar dataKey="opex" name="OPEX" fill="hsl(0, 70%, 55%)" radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom summary bar */}
      <div className="h-[44px] bg-[#14532d] flex items-center justify-center gap-8 px-10 shrink-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
        {[
          { l: "FY25 Rev", v: "$3.3M" },
          { l: "FY29 Rev", v: "$169.7M" },
          { l: "FY34 Rev", v: "$1.46B" },
          { l: "10Y CAGR", v: "~95%" },
          { l: "FY34 Net Margin", v: "60%" },
          { l: "FY34 Customers", v: "6,915" },
        ].map((m) => (
          <div key={m.l} className="flex items-center gap-1.5">
            <span className="text-emerald-300/70 text-[10px] font-medium">{m.l}</span>
            <span className="text-white text-[13px] font-bold">{m.v}</span>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default Slide18Projections;
