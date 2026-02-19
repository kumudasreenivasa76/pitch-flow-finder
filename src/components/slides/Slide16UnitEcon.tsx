import React from "react";
import SlideLayout from "../SlideLayout";

const Slide16UnitEcon = () => (
  <SlideLayout>
    <div className="relative w-full h-full flex flex-col bg-white overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
            backgroundImage: "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
            backgroundSize: "60px 60px", opacity: 0.5,
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-1 pointer-events-none"
        style={{ background: "linear-gradient(90deg, #16a34a, #2563eb, #7c3aed)" }}
      />

      <div className="relative z-10 flex flex-col h-full px-14 pt-8 pb-5">
        {/* Header */}
        <div className="text-center mb-5 animate-fade-in">
          <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[13px] font-bold tracking-widest uppercase mb-2">
            Unit Economics
          </span>
          <h2 className="text-[40px] font-extrabold text-foreground leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Unit Economics — <span className="text-primary">FY30 Baseline</span>
          </h2>
          <p className="text-[15px] text-muted-foreground mt-1">Validated unit economics across all customer segments.</p>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-3 gap-4 flex-1 min-h-0">

          {/* Col 1 */}
          <div className="flex flex-col gap-3">
            <CompactTable className="flex-1" title="Key Metrics" color="#16a34a" delay="0.05s" rows={[
              { label: "Total Revenue", value: "$169.7M" },
              { label: "Total Customers", value: "1,365" },
              { label: "Gross Margin", value: "84%" },
              { label: "Annual Churn", value: "12%" },
            ]} />
            <CompactTable className="flex-1" title="Customer Revenue" color="#0d9488" delay="0.1s" rows={[
              { label: "Blended ARPU", value: "$124,300" },
              { label: "Gross Profit / Customer", value: "$104,412" },
              { label: "Avg Customer Lifetime", value: "8.3 years" },
            ]} />
          </div>

          {/* Col 2: LTV + CAC */}
          <div className="flex flex-col gap-3">
            <ValueCard className="flex-1" label="Lifetime Value (LTV)" value="$870K" sub="Per enterprise customer" color="#16a34a" borderColor="#16a34a" delay="0.15s"
              details={[
                { l: "Formula", r: "GP ÷ Churn Rate" },
                { l: "$104,412 ÷ 0.12", r: "= $870,100" },
              ]}
            />
            <ValueCard className="flex-1" label="Customer Acquisition Cost" value="$174K" sub="Target LTV:CAC = 5x" color="#059669" borderColor="#059669" delay="0.2s"
              details={[
                { l: "LTV:CAC Target", r: "5x" },
                { l: "$870K ÷ 5", r: "= $174,000" },
              ]}
            />
            <div className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-2.5 text-center animate-fade-in flex items-center justify-center"
              style={{ animationDelay: "0.25s", animationFillMode: "forwards", opacity: 0 }}>
              <div>
                <div className="text-[11px] text-muted-foreground font-semibold uppercase tracking-widest">CAC Payback</div>
                <div className="text-[22px] font-black text-primary">~20 months</div>
              </div>
            </div>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-3">
            <CompactTable className="flex-1" title="Data Center Segment (FY30)" color="#0d9488" delay="0.25s" rows={[
              { label: "Revenue", value: "$56.9M" },
              { label: "Customers", value: "675" },
              { label: "ARPU", value: "$84,300" },
              { label: "Gross Profit / DC", value: "$70,800" },
              { label: "Implied LTV", value: "$590K" },
              { label: "Est. DC CAC (5x)", value: "$118K" },
            ]} />
            <CompactTable className="flex-1" title="Company Efficiency" color="#16a34a" delay="0.3s" rows={[
              { label: "Revenue / FTE", value: "$707K" },
              { label: "EBITDA Margin", value: "69.1%" },
              { label: "Net Margin", value: "51.7%" },
              { label: "Gross Margin Trend", value: "76% → 89%" },
            ]} />
          </div>
        </div>

        {/* Investor KPI Strip */}
        <div className="grid grid-cols-4 gap-3 mt-3 animate-fade-in" style={{ animationDelay: "0.35s", animationFillMode: "forwards", opacity: 0 }}>
          {[
            { label: "LTV / CAC", value: "> 5×", status: "✅", color: "#16a34a", bg: "rgba(22,163,74,0.08)" },
            { label: "Payback Period", value: "< 12 mo", status: "✅", color: "#0d9488", bg: "rgba(13,148,136,0.08)" },
            { label: "Net Revenue Retention", value: "> 120%", status: "✅", color: "#2563eb", bg: "rgba(37,99,235,0.08)" },
            { label: "ACV Trend", value: "Rising ↑", status: "📈", color: "#7c3aed", bg: "rgba(124,58,237,0.08)" },
          ].map((k) => (
            <div key={k.label} className="rounded-xl border-2 px-4 py-2.5 flex items-center gap-3"
              style={{ borderColor: k.color, background: k.bg }}>
              <span className="text-xl">{k.status}</span>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{k.label}</div>
                <div className="text-[20px] font-black leading-tight" style={{ color: k.color }}>{k.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary bar */}
        <div className="flex justify-center mt-2 animate-fade-in" style={{ animationDelay: "0.45s", animationFillMode: "forwards", opacity: 0 }}>
          <div className="inline-flex items-center gap-5 rounded-2xl px-8 py-2"
            style={{ background: "linear-gradient(90deg, #14532d 0%, #166534 50%, #14532d 100%)" }}>
            {[
              { label: "ARPU", value: "$124K" },
              { label: "Margin", value: "84%" },
              { label: "LTV", value: "$870K" },
              { label: "CAC", value: "$174K" },
              { label: "LTV:CAC", value: "5.0×" },
              { label: "Payback", value: "<12 mo" },
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
  <div className={`bg-white/90 rounded-xl border border-border/60 shadow-sm animate-fade-in flex flex-col ${className}`}
    style={{ animationDelay: delay, animationFillMode: "forwards", opacity: 0 }}>
    <div className="px-4 py-2 border-b border-border/40">
      <h3 className="text-[12px] font-bold uppercase tracking-widest" style={{ color }}>{title}</h3>
    </div>
    <div className="px-4 py-2 flex-1 flex flex-col justify-evenly">
      {rows.map((r) => (
        <div key={r.label} className="flex justify-between items-center py-1.5 border-b border-border/30 last:border-0">
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
  <div className={`bg-white/90 rounded-xl border-2 shadow-sm animate-fade-in flex flex-col ${className}`}
    style={{ borderColor, animationDelay: delay, animationFillMode: "forwards", opacity: 0 }}>
    <div className="px-4 py-3 flex-1 flex flex-col justify-center">
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
