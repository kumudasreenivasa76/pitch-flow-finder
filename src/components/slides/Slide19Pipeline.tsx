import { useState } from "react";
import SlideLayout from "../SlideLayout";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const customerData = [
  { segment: "UAE Universities", customers: 8, arpu: "$2,000", arr: "$16,000", color: "hsl(160, 84%, 39%)" },
  { segment: "UAE SME SaaS", customers: 14, arpu: "$750", arr: "$10,500", color: "hsl(174, 72%, 40%)" },
  { segment: "Dubai Data Centers", customers: 2, arpu: "$48,000", arr: "$96,000", color: "hsl(152, 76%, 36%)" },
  { segment: "Marketplace Vendors", customers: 18, arpu: "$650", arr: "$11,700", color: "hsl(160, 60%, 70%)" },
];

const pieData = customerData.map((c) => ({ name: c.segment, value: parseFloat(c.arr.replace(/[$, ]/g, "")), color: c.color }));

const cashData = [
  { source: "UAE Universities", cash: "$4,000" },
  { source: "UAE SMEs", cash: "$2,625" },
  { source: "Data Centers", cash: "$24,000" },
  { source: "Vendors", cash: "$2,925" },
];

const burnData = [
  { category: "Team", monthly: "$35K" },
  { category: "Tech", monthly: "$5K" },
  { category: "Sales & Marketing", monthly: "$12K" },
  { category: "G&A", monthly: "$6K" },
];

const unitEcon = [
  { label: "Gross Margin", value: "~74–78%" },
  { label: "Blended ARPU", value: "~$3,200" },
  { label: "CAC (early)", value: "~$2,800" },
  { label: "LTV/CAC", value: "~4.5×" },
  { label: "Payback", value: "~14 months" },
];

const MiniLabel = ({ children }: { children: React.ReactNode }) => (<div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1">{children}</div>);

const Slide19Pipeline = () => {
  const [showDetail, setShowDetail] = useState<"cash" | "burn" | null>(null);
  return (
    <SlideLayout>
      <div className="relative w-full h-full flex flex-col items-center justify-center bg-white overflow-hidden px-14 pt-8 pb-5">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)", backgroundSize: "60px 60px", opacity: 0.5 }} />
        <div className="relative z-10 w-full">
          <div className="text-center mb-4 animate-fade-in">
            <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[13px] font-bold tracking-widest uppercase mb-2">Early Traction</span>
            <h2 className="text-[40px] font-extrabold text-foreground leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>EcoGridia — <span className="text-primary">First 90 Days in UAE</span></h2>
            <p className="text-[15px] text-muted-foreground mt-1">Post-launch run-rate · UAE product-market signal</p>
            <div className="flex justify-center gap-3 mt-3">
              {[{ l: "Customers", v: "42" },{ l: "ARR Run-Rate", v: "$134K" },{ l: "Cash Collected", v: "~$34K" }].map((k) => (
                <div key={k.l} className="bg-card border border-border rounded-lg px-4 py-1.5 text-center"><div className="text-[18px] font-bold text-primary leading-tight">{k.v}</div><div className="text-[9px] text-muted-foreground font-medium">{k.l}</div></div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-7 flex flex-col gap-3">
              <div className="bg-card border border-border rounded-xl p-3 animate-fade-in" style={{ animationDelay: "0.05s" }}>
                <MiniLabel>🎯 Customer Acquisition — First 90 Days</MiniLabel>
                <table className="w-full text-[11px]">
                  <thead><tr className="border-b border-border"><th className="text-left py-1.5 text-muted-foreground font-semibold">Segment</th><th className="text-center py-1.5 text-muted-foreground font-semibold">Customers</th><th className="text-right py-1.5 text-muted-foreground font-semibold">ARPU</th><th className="text-right py-1.5 text-muted-foreground font-semibold">ARR</th></tr></thead>
                  <tbody>
                    {customerData.map((r) => (
                      <tr key={r.segment} className="border-b border-border/30">
                        <td className="py-1.5 font-medium text-foreground flex items-center gap-1.5"><div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: r.color }} />{r.segment}</td>
                        <td className="text-center py-1.5 font-bold text-primary">{r.customers}</td>
                        <td className="text-right py-1.5 font-semibold text-foreground">{r.arpu}</td>
                        <td className="text-right py-1.5 font-bold text-primary">{r.arr}</td>
                      </tr>
                    ))}
                    <tr className="border-t-2 border-primary/30"><td className="py-1.5 font-bold text-foreground">Total</td><td className="text-center py-1.5 font-black text-primary">42</td><td className="text-right py-1.5 font-semibold text-muted-foreground">—</td><td className="text-right py-1.5 font-black text-primary">$134,200</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-card border border-border rounded-xl p-3 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <MiniLabel>📊 ARR Contribution by Segment</MiniLabel>
                <div className="h-[160px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart><Pie data={pieData} cx="50%" cy="50%" outerRadius={70} innerRadius={35} dataKey="value" paddingAngle={2} label={({ name, value }) => `${name.split(" ")[0]} $${(value/1000).toFixed(1)}K`} labelLine={true}>{pieData.map((entry, i) => (<Cell key={i} fill={entry.color} />))}</Pie><Tooltip formatter={(v: number) => [`$${v.toLocaleString()}`, undefined]} /></PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="col-span-5 flex flex-col gap-3">
              <div className="bg-card border border-border rounded-xl p-3 animate-fade-in" style={{ animationDelay: "0.15s" }}>
                <MiniLabel>🟢 Early Unit Economics (90-Day)</MiniLabel>
                <table className="w-full text-[11px]"><tbody>{unitEcon.map((r) => (<tr key={r.label} className="border-b border-border/30"><td className="py-1.5 font-medium text-foreground">{r.label}</td><td className="text-right py-1.5 font-bold text-primary">{r.value}</td></tr>))}</tbody></table>
              </div>
              <div className={`rounded-xl p-3 cursor-pointer transition-all animate-fade-in ${showDetail === "cash" ? "bg-primary/10 border-2 border-primary/40" : "bg-card border border-border hover:border-primary/30"}`} style={{ animationDelay: "0.2s" }} onClick={() => setShowDetail(showDetail === "cash" ? null : "cash")}>
                <MiniLabel>💵 Cash Collected (90 Days) — click to expand</MiniLabel>
                <div className="flex items-center justify-between"><span className="text-[22px] font-black text-primary">~$34K</span><span className="text-[9px] text-muted-foreground">Realistic early-stage</span></div>
                {showDetail === "cash" && (<table className="w-full text-[10px] mt-2 border-t border-border pt-2"><tbody>{cashData.map((r) => (<tr key={r.source} className="border-b border-border/30"><td className="py-1 font-medium text-foreground">{r.source}</td><td className="text-right py-1 font-bold text-primary">{r.cash}</td></tr>))}<tr className="border-t border-primary/30"><td className="py-1 font-bold text-foreground">Total</td><td className="text-right py-1 font-black text-primary">$33,550</td></tr></tbody></table>)}
              </div>
              <div className={`rounded-xl p-3 cursor-pointer transition-all animate-fade-in ${showDetail === "burn" ? "bg-primary/10 border-2 border-primary/40" : "bg-card border border-border hover:border-primary/30"}`} style={{ animationDelay: "0.25s" }} onClick={() => setShowDetail(showDetail === "burn" ? null : "burn")}>
                <MiniLabel>🔥 Burn Snapshot — click to expand</MiniLabel>
                <div className="flex items-center justify-between mb-1"><div><div className="text-[10px] text-muted-foreground">Monthly Burn</div><div className="text-[20px] font-black text-foreground">$58K/mo</div></div><div className="text-right"><div className="text-[10px] text-muted-foreground">Net Burn (after rev)</div><div className="text-[20px] font-black text-primary">~$48K/mo</div></div></div>
                {showDetail === "burn" && (<table className="w-full text-[10px] mt-2 border-t border-border pt-2"><thead><tr className="border-b border-border"><th className="text-left py-0.5 text-muted-foreground font-semibold">Category</th><th className="text-right py-0.5 text-muted-foreground font-semibold">Monthly</th></tr></thead><tbody>{burnData.map((r) => (<tr key={r.category} className="border-b border-border/30"><td className="py-1 font-medium text-foreground">{r.category}</td><td className="text-right py-1 font-bold text-primary">{r.monthly}</td></tr>))}<tr className="border-t border-primary/30"><td className="py-1 font-bold text-foreground">Total</td><td className="text-right py-1 font-black text-primary">$58K</td></tr></tbody></table>)}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-4 flex-wrap animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {[{ l: "90-Day Customers", v: "42" },{ l: "ARR Run-Rate", v: "$134K" },{ l: "Cash Collected", v: "~$34K" },{ l: "Monthly Burn", v: "$58K" },{ l: "Net Burn", v: "~$48K" },{ l: "Gross Margin", v: "~76%" }].map((m) => (
              <div key={m.l} className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/40 bg-white shadow-sm">
                <span className="text-[14px] font-black text-primary" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{m.v}</span>
                <span className="text-[10px] text-muted-foreground font-medium">{m.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide19Pipeline;
