import React from "react";
import SlideLayout from "../SlideLayout";

const Slide16UnitEcon = () => (
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
        <div className="text-center mb-5 animate-fade-in">
          <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[13px] font-bold tracking-widest uppercase mb-2">
            Unit Economics
          </span>
          <h2 className="text-[40px] font-extrabold text-foreground leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Unit Economics — <span className="text-primary">UAE & KSA FY30</span>
          </h2>
          <p className="text-[15px] text-muted-foreground mt-1">Validated unit economics across UAE & Saudi Arabia customer segments.</p>
        </div>

        {/* Today vs FY30 comparison strip */}
        <div className="grid grid-cols-2 gap-3 mb-3 animate-fade-in" style={{ animationDelay: "0.02s", animationFillMode: "forwards", opacity: 0 }}>
          <div className="rounded-xl border-2 border-amber-400/40 bg-amber-50/50 px-4 py-2 flex items-center gap-5">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-amber-700">📍 Today (90-Day)</div>
            </div>
            <div className="flex gap-5 flex-1">
              {[
                { l: "ARPU", v: "$1,850" },
                { l: "Margin", v: "76%" },
                { l: "LTV:CAC", v: "4.5×" },
                { l: "Payback", v: "~14 mo" },
              ].map((m) => (
                <div key={m.l} className="text-center">
                  <div className="text-[15px] font-black text-amber-700">{m.v}</div>
                  <div className="text-[8px] text-amber-600/70">{m.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border-2 border-primary/30 bg-primary/5 px-4 py-2 flex items-center gap-5">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-primary">🎯 FY30 Target</div>
            </div>
            <div className="flex gap-5 flex-1">
              {[
                { l: "ARPU", v: "$98K" },
                { l: "Margin", v: "82%" },
                { l: "LTV:CAC", v: "5.0×" },
                { l: "Payback", v: "~18 mo" },
              ].map((m) => (
                <div key={m.l} className="text-center">
                  <div className="text-[15px] font-black text-primary">{m.v}</div>
                  <div className="text-[8px] text-primary/60">{m.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-3 gap-4">

          {/* Col 1 */}
          <div className="flex flex-col gap-3">
            <CompactTable title="Key Metrics (UAE & KSA)" color="#16a34a" delay="0.05s" rows={[
              { label: "Total Revenue", value: "$85.2M" },
              { label: "Total Customers", value: "870" },
              { label: "Gross Margin", value: "82%" },
              { label: "Annual Churn", value: "14%" },
            ]} />
            <CompactTable title="Customer Revenue" color="#0d9488" delay="0.1s" rows={[
              { label: "Blended ARPU", value: "$97,900" },
              { label: "Gross Profit / Customer", value: "$80,278" },
              { label: "Avg Customer Lifetime", value: "7.1 years" },
            ]} />
          </div>

          {/* Col 2: LTV + CAC */}
          <div className="flex flex-col gap-3">
            <ValueCard label="Lifetime Value (LTV)" value="$570K" sub="Per enterprise customer (UAE/KSA)" color="#16a34a" borderColor="#16a34a" delay="0.15s"
              details={[
                { l: "Formula", r: "GP ÷ Churn Rate" },
                { l: "$80,278 ÷ 0.14", r: "= $573,414" },
              ]}
            />
            <ValueCard label="Customer Acquisition Cost" value="$114K" sub="Target LTV:CAC = 5x" color="#059669" borderColor="#059669" delay="0.2s"
              details={[
                { l: "LTV:CAC Target", r: "5x" },
                { l: "$570K ÷ 5", r: "= $114,000" },
              ]}
            />
            <div className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-2 text-center animate-fade-in"
              style={{ animationDelay: "0.25s", animationFillMode: "forwards", opacity: 0 }}>
              <div>
                <div className="text-[11px] text-muted-foreground font-semibold uppercase tracking-widest">CAC Payback</div>
                <div className="text-[22px] font-black text-primary">~18 months</div>
              </div>
            </div>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-3">
            <CompactTable title="Data Center Segment — UAE & KSA (FY30)" color="#0d9488" delay="0.25s" rows={[
              { label: "Revenue", value: "$32.4M" },
              { label: "Customers", value: "420" },
              { label: "ARPU", value: "$77,100" },
              { label: "Gross Profit / DC", value: "$63,200" },
              { label: "Implied LTV", value: "$451K" },
              { label: "Est. DC CAC (5x)", value: "$90K" },
            ]} />
            <CompactTable title="Company Efficiency" color="#16a34a" delay="0.3s" rows={[
              { label: "Revenue / FTE", value: "$532K" },
              { label: "EBITDA Margin", value: "64.5%" },
              { label: "Net Margin", value: "48.2%" },
              { label: "Gross Margin Trend", value: "74% → 86%" },
            ]} />
          </div>
        </div>

        {/* Investor KPI Strip */}
        <div className="grid grid-cols-4 gap-3 mt-3 animate-fade-in" style={{ animationDelay: "0.35s", animationFillMode: "forwards", opacity: 0 }}>
          {[
            { label: "LTV / CAC", value: "> 5×", status: "✅", color: "#16a34a", bg: "rgba(22,163,74,0.08)" },
            { label: "Payback Period", value: "~18 mo", status: "✅", color: "#0d9488", bg: "rgba(13,148,136,0.08)" },
            { label: "Net Revenue Retention", value: "> 115%", status: "✅", color: "#2563eb", bg: "rgba(37,99,235,0.08)" },
            { label: "ACV Trend (GCC)", value: "Rising ↑", status: "📈", color: "#7c3aed", bg: "rgba(124,58,237,0.08)" },
          ].map((k) => (
            <div key={k.label} className="rounded-xl border-2 px-3 py-1.5 flex items-center gap-2"
              style={{ borderColor: k.color, background: k.bg }}>
              <span className="text-lg">{k.status}</span>
              <div className="min-w-0">
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{k.label}</div>
                <div className="text-[17px] font-black leading-tight" style={{ color: k.color }}>{k.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary bar */}
        <div className="flex justify-center mt-2 animate-fade-in" style={{ animationDelay: "0.45s", animationFillMode: "forwards", opacity: 0 }}>
          <div className="inline-flex items-center gap-5 rounded-2xl px-8 py-2"
            style={{ background: "linear-gradient(90deg, #14532d 0%, #166534 50%, #14532d 100%)" }}>
            {[
              { label: "ARPU", value: "$98K" },
              { label: "Margin", value: "82%" },
              { label: "LTV", value: "$570K" },
              { label: "CAC", value: "$114K" },
              { label: "LTV:CAC", value: "5.0×" },
              { label: "Payback", value: "~18 mo" },
            ].map((m, i, arr) => (
              <React.Fragment key={m.label}>
                <div className="text-center">
                  <div className="text-[14px] font-black text-white leading-tight">{m.value}</div>
                  <div className="text-[9px] text-green-200">{m.label}</div>
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

/* ── Compact table card ── */
const CompactTable = ({ title, color, delay, rows, className = "" }: {
  title: string; color: string; delay: string;
  rows: { label: string; value: string }[]; className?: string;
}) => (
  <div className={`bg-white/90 rounded-xl border border-border/60 shadow-sm animate-fade-in ${className}`}
    style={{ animationDelay: delay, animationFillMode: "forwards", opacity: 0 }}>
    <div className="px-4 py-1.5 border-b border-border/40">
      <h3 className="text-[12px] font-bold uppercase tracking-widest" style={{ color }}>{title}</h3>
    </div>
    <div className="px-4 py-1.5">
      {rows.map((r) => (
        <div key={r.label} className="flex justify-between items-center py-1 border-b border-border/30 last:border-0">
          <span className="text-[13px] text-muted-foreground">{r.label}</span>
          <span className="text-[13px] font-bold text-foreground">{r.value}</span>
        </div>
      ))}
    </div>
  </div>
);

/* ── Value highlight card ── */
const ValueCard = ({ label, value, sub, color, borderColor, delay, details, className = "" }: {
  label: string; value: string; sub: string; color: string; borderColor: string; delay: string;
  details: { l: string; r: string }[]; className?: string;
}) => (
  <div className={`bg-white/90 rounded-xl border-2 shadow-sm animate-fade-in ${className}`}
    style={{ borderColor, animationDelay: delay, animationFillMode: "forwards", opacity: 0 }}>
    <div className="px-4 py-2">
      <div className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color }}>{label}</div>
      <div className="text-[28px] font-black leading-none" style={{ color }}>{value}</div>
      <div className="text-[11px] text-muted-foreground mt-0.5">{sub}</div>
    </div>
    <div className="px-4 py-2 border-t border-border/30">
      {details.map((d) => (
        <div key={d.l} className="flex justify-between text-[11px] py-0.5">
          <span className="text-muted-foreground">{d.l}</span>
          <span className="font-semibold text-foreground">{d.r}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Slide16UnitEcon;
