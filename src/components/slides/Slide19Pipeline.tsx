import { useState } from "react";
import SlideLayout from "../SlideLayout";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const customerData = [
  { segment: "Schools / Universities", customers: 10, arpu: "$2,400", arr: "$24,000", color: "hsl(160, 84%, 39%)" },
  { segment: "SME SaaS", customers: 18, arpu: "$900", arr: "$16,200", color: "hsl(174, 72%, 40%)" },
  { segment: "Pilot Enterprises", customers: 1, arpu: "$60,000", arr: "$60,000", color: "hsl(152, 76%, 36%)" },
  { segment: "Marketplace Vendors", customers: 25, arpu: "$800", arr: "$20,000", color: "hsl(160, 60%, 70%)" },
];

const pieData = customerData.map((c) => ({ name: c.segment, value: parseFloat(c.arr.replace(/[$,]/g, "")), color: c.color }));

const cashData = [
  { source: "Schools", cash: "$6,000" },
  { source: "SMEs", cash: "$4,050" },
  { source: "Enterprise", cash: "$15,000" },
  { source: "Vendors", cash: "$5,000" },
];

const burnData = [
  { category: "Team", monthly: "$35K" },
  { category: "Tech", monthly: "$5K" },
  { category: "Sales & Marketing", monthly: "$12K" },
  { category: "G&A", monthly: "$6K" },
];

const unitEcon = [
  { label: "Gross Margin", value: "~76–80%" },
  { label: "Blended ARPU", value: "~$2,225" },
  { label: "CAC (early)", value: "~$2,500" },
  { label: "LTV/CAC", value: "~4.8×" },
  { label: "Payback", value: "~12 months" },
];

const MiniLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1">{children}</div>
);

const Slide19Pipeline = () => {
  const [showDetail, setShowDetail] = useState<"cash" | "burn" | null>(null);

  return (
    <SlideLayout>
      <div className="flex flex-col h-full relative">
        <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 shrink-0" />

        <div className="flex flex-col flex-1 px-10 py-4 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between mb-3 animate-fade-in">
            <div>
              <h2 className="text-[28px] font-bold text-foreground leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                EcoGridia — <span className="text-primary">First 90 Days Traction</span>
              </h2>
              <p className="text-[12px] text-muted-foreground">Post-launch run-rate · Proving product-market signal</p>
            </div>
            <div className="flex gap-2">
              {[
                { l: "Customers", v: "54" },
                { l: "ARR Run-Rate", v: "$120.2K" },
                { l: "Cash Collected", v: "~$30K" },
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

            {/* LEFT: Customer table + Pie */}
            <div className="col-span-7 flex flex-col gap-3 min-h-0">
              {/* Customer Acquisition Table */}
              <div className="bg-card border border-border rounded-xl p-3 animate-fade-in" style={{ animationDelay: "0.05s" }}>
                <MiniLabel>🎯 Customer Acquisition — First 90 Days</MiniLabel>
                <table className="w-full text-[11px]">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-1.5 text-muted-foreground font-semibold">Segment</th>
                      <th className="text-center py-1.5 text-muted-foreground font-semibold">Customers</th>
                      <th className="text-right py-1.5 text-muted-foreground font-semibold">ARPU</th>
                      <th className="text-right py-1.5 text-muted-foreground font-semibold">ARR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customerData.map((r) => (
                      <tr key={r.segment} className="border-b border-border/30">
                        <td className="py-1.5 font-medium text-foreground flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: r.color }} />
                          {r.segment}
                        </td>
                        <td className="text-center py-1.5 font-bold text-primary">{r.customers}</td>
                        <td className="text-right py-1.5 font-semibold text-foreground">{r.arpu}</td>
                        <td className="text-right py-1.5 font-bold text-primary">{r.arr}</td>
                      </tr>
                    ))}
                    <tr className="border-t-2 border-primary/30">
                      <td className="py-1.5 font-bold text-foreground">Total</td>
                      <td className="text-center py-1.5 font-black text-primary">54</td>
                      <td className="text-right py-1.5 font-semibold text-muted-foreground">—</td>
                      <td className="text-right py-1.5 font-black text-primary">$120,200</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* ARR Pie Chart */}
              <div className="bg-card border border-border rounded-xl p-3 flex-1 min-h-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <MiniLabel>📊 ARR Contribution by Segment</MiniLabel>
                <div className="flex-1 h-full min-h-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} innerRadius={40} dataKey="value" paddingAngle={2}
                        label={({ name, value }) => `${name.split(" ")[0]} $${(value/1000).toFixed(1)}K`}
                        labelLine={true}
                      >
                        {pieData.map((entry, i) => (
                          <Cell key={i} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(v: number) => [`$${v.toLocaleString()}`, undefined]} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* RIGHT: Unit Econ + Cash/Burn */}
            <div className="col-span-5 flex flex-col gap-3 min-h-0">

              {/* Unit Economics */}
              <div className="bg-card border border-border rounded-xl p-3 animate-fade-in" style={{ animationDelay: "0.15s" }}>
                <MiniLabel>🟢 Early Unit Economics (90-Day)</MiniLabel>
                <table className="w-full text-[11px]">
                  <tbody>
                    {unitEcon.map((r) => (
                      <tr key={r.label} className="border-b border-border/30">
                        <td className="py-1.5 font-medium text-foreground">{r.label}</td>
                        <td className="text-right py-1.5 font-bold text-primary">{r.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Cash Collected (clickable) */}
              <div
                className={`rounded-xl p-3 cursor-pointer transition-all animate-fade-in ${showDetail === "cash" ? "bg-primary/10 border-2 border-primary/40" : "bg-card border border-border hover:border-primary/30"}`}
                style={{ animationDelay: "0.2s" }}
                onClick={() => setShowDetail(showDetail === "cash" ? null : "cash")}
              >
                <MiniLabel>💵 Cash Collected (90 Days) — click to expand</MiniLabel>
                <div className="flex items-center justify-between">
                  <span className="text-[22px] font-black text-primary">~$30K</span>
                  <span className="text-[9px] text-muted-foreground">Realistic early-stage</span>
                </div>
                {showDetail === "cash" && (
                  <table className="w-full text-[10px] mt-2 border-t border-border pt-2">
                    <tbody>
                      {cashData.map((r) => (
                        <tr key={r.source} className="border-b border-border/30">
                          <td className="py-1 font-medium text-foreground">{r.source}</td>
                          <td className="text-right py-1 font-bold text-primary">{r.cash}</td>
                        </tr>
                      ))}
                      <tr className="border-t border-primary/30">
                        <td className="py-1 font-bold text-foreground">Total</td>
                        <td className="text-right py-1 font-black text-primary">$30,050</td>
                      </tr>
                    </tbody>
                  </table>
                )}
              </div>

              {/* Burn Snapshot (clickable) */}
              <div
                className={`rounded-xl p-3 cursor-pointer transition-all animate-fade-in flex-1 ${showDetail === "burn" ? "bg-primary/10 border-2 border-primary/40" : "bg-card border border-border hover:border-primary/30"}`}
                style={{ animationDelay: "0.25s" }}
                onClick={() => setShowDetail(showDetail === "burn" ? null : "burn")}
              >
                <MiniLabel>🔥 Burn Snapshot — click to expand</MiniLabel>
                <div className="flex items-center justify-between mb-1">
                  <div>
                    <div className="text-[10px] text-muted-foreground">Monthly Burn</div>
                    <div className="text-[20px] font-black text-foreground">$58K/mo</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-muted-foreground">Net Burn (after rev)</div>
                    <div className="text-[20px] font-black text-primary">~$48K/mo</div>
                  </div>
                </div>
                {showDetail === "burn" && (
                  <table className="w-full text-[10px] mt-2 border-t border-border pt-2">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-0.5 text-muted-foreground font-semibold">Category</th>
                        <th className="text-right py-0.5 text-muted-foreground font-semibold">Monthly</th>
                      </tr>
                    </thead>
                    <tbody>
                      {burnData.map((r) => (
                        <tr key={r.category} className="border-b border-border/30">
                          <td className="py-1 font-medium text-foreground">{r.category}</td>
                          <td className="text-right py-1 font-bold text-primary">{r.monthly}</td>
                        </tr>
                      ))}
                      <tr className="border-t border-primary/30">
                        <td className="py-1 font-bold text-foreground">Total</td>
                        <td className="text-right py-1 font-black text-primary">$58K</td>
                      </tr>
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="h-[40px] bg-[#14532d] flex items-center justify-center gap-8 px-10 shrink-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          {[
            { l: "90-Day Customers", v: "54" },
            { l: "ARR Run-Rate", v: "$120.2K" },
            { l: "Cash Collected", v: "~$30K" },
            { l: "Monthly Burn", v: "$58K" },
            { l: "Net Burn", v: "~$48K" },
            { l: "Gross Margin", v: "~78%" },
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

export default Slide19Pipeline;
