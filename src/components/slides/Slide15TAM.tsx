import SlideLayout from "../SlideLayout";

const Slide15TAM = () => {
  return (
    <SlideLayout>
      <div className="relative w-full h-full flex flex-col bg-white overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(to right, #c7d2d8 1px, transparent 1px), linear-gradient(to bottom, #c7d2d8 1px, transparent 1px)",
            backgroundSize: "60px 60px", opacity: 0.35,
          }}
        />
        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-1 pointer-events-none"
          style={{ background: "linear-gradient(90deg, #059669, #2563eb, #7c3aed, #db2777)" }}
        />

        <div className="relative z-10 flex flex-col h-full px-14 pt-9 pb-5">
          {/* Header */}
          <div className="text-center mb-6 animate-fade-in">
            <span className="inline-block px-5 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-[16px] font-bold tracking-widest uppercase mb-4">
              Market Opportunity
            </span>
            <h2 className="text-[48px] font-extrabold text-foreground leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Massive Energy + Carbon Spend <span className="text-primary">Across Campuses & Enterprises</span>
            </h2>
          </div>

          {/* Main: Left funnel visual + Right dashboard */}
          <div className="flex gap-8 flex-1 min-h-0">

            {/* ── LEFT: TAM / SAM / SOM Boxes ── */}
            <div className="w-[55%] flex flex-col gap-5 justify-center">

              {/* TAM */}
              <div className="rounded-2xl border-2 border-emerald-300 bg-gradient-to-br from-emerald-50 to-white p-6 animate-fade-in shadow-sm"
                style={{ animationDelay: "0.05s", animationFillMode: "forwards", opacity: 0 }}>
                <div className="flex items-center gap-5 mb-4">
                  <div className="w-20 h-20 rounded-2xl bg-emerald-500 flex flex-col items-center justify-center text-white shadow-lg shrink-0">
                    <div className="text-[10px] font-bold tracking-widest uppercase">TAM</div>
                    <div className="text-[28px] font-black leading-none">$14B+</div>
                  </div>
                  <div>
                    <div className="text-[20px] font-extrabold text-emerald-800" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Total Addressable Market</div>
                    <div className="text-[13px] text-muted-foreground mt-0.5">~356,000 global target sites × $40k blended platform value</div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { label: "Universities", val: "25K" },
                    { label: "K-12 Schools", val: "120K" },
                    { label: "Data Centers", val: "11K" },
                    { label: "Enterprises", val: "200K" },
                  ].map((s) => (
                    <div key={s.label} className="bg-white rounded-xl px-3 py-2.5 border border-emerald-200 text-center">
                      <div className="text-[18px] font-black text-emerald-700">{s.val}</div>
                      <div className="text-[10px] text-muted-foreground font-semibold">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SAM */}
              <div className="rounded-2xl border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-white p-6 animate-fade-in shadow-sm"
                style={{ animationDelay: "0.12s", animationFillMode: "forwards", opacity: 0 }}>
                <div className="flex items-center gap-5 mb-4">
                  <div className="w-20 h-20 rounded-2xl bg-blue-500 flex flex-col items-center justify-center text-white shadow-lg shrink-0">
                    <div className="text-[10px] font-bold tracking-widest uppercase">SAM</div>
                    <div className="text-[28px] font-black leading-none">$3.9B</div>
                  </div>
                  <div>
                    <div className="text-[20px] font-extrabold text-blue-800" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Serviceable Available Market</div>
                    <div className="text-[13px] text-muted-foreground mt-0.5">US, UK & EU priority · ~98,000 targetable sites</div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { label: "Universities", val: "8K" },
                    { label: "Schools", val: "25K" },
                    { label: "Data Centers", val: "5K" },
                    { label: "Enterprises", val: "60K" },
                  ].map((s) => (
                    <div key={s.label} className="bg-white rounded-xl px-3 py-2.5 border border-blue-200 text-center">
                      <div className="text-[18px] font-black text-blue-700">{s.val}</div>
                      <div className="text-[10px] text-muted-foreground font-semibold">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SOM */}
              <div className="rounded-2xl border-2 border-violet-300 bg-gradient-to-br from-violet-50 to-white p-6 animate-fade-in shadow-sm"
                style={{ animationDelay: "0.2s", animationFillMode: "forwards", opacity: 0 }}>
                <div className="flex items-center gap-5 mb-4">
                  <div className="w-20 h-20 rounded-2xl bg-violet-500 flex flex-col items-center justify-center text-white shadow-lg shrink-0">
                    <div className="text-[10px] font-bold tracking-widest uppercase">SOM</div>
                    <div className="text-[22px] font-black leading-none">$250M+</div>
                  </div>
                  <div>
                    <div className="text-[20px] font-extrabold text-violet-800" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Serviceable Obtainable Market</div>
                    <div className="text-[13px] text-muted-foreground mt-0.5">~2% SAM · 10-year trajectory</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "FY26 Sites", val: "50" },
                    { label: "FY29 Sites", val: "1,365" },
                    { label: "FY34 Sites", val: "6,915" },
                  ].map((s) => (
                    <div key={s.label} className="bg-white rounded-xl px-3 py-2.5 border border-violet-200 text-center">
                      <div className="text-[18px] font-black text-violet-700">{s.val}</div>
                      <div className="text-[10px] text-muted-foreground font-semibold">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Flow indicator */}
              <div className="flex items-center justify-center gap-3 animate-fade-in" style={{ animationDelay: "0.28s", animationFillMode: "forwards", opacity: 0 }}>
                <span className="text-[12px] font-bold text-emerald-600 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">Global</span>
                <span className="text-muted-foreground">→</span>
                <span className="text-[12px] font-bold text-blue-600 px-3 py-1 rounded-full bg-blue-50 border border-blue-200">US/UK/EU</span>
                <span className="text-muted-foreground">→</span>
                <span className="text-[12px] font-bold text-violet-600 px-3 py-1 rounded-full bg-violet-50 border border-violet-200">Beachhead Focus</span>
              </div>
            </div>

            {/* ── RIGHT: Dashboard panel ── */}
            <div className="w-[45%] flex flex-col gap-4">
              {/* KPI chips */}
              <div className="grid grid-cols-2 gap-3 animate-fade-in" style={{ animationDelay: "0.15s", animationFillMode: "forwards", opacity: 0 }}>
                {[
                  { label: "TAM", value: "$14B+", color: "#059669", bg: "rgba(5,150,105,0.08)", border: "rgba(5,150,105,0.25)" },
                  { label: "SAM", value: "$3.9B", color: "#2563eb", bg: "rgba(37,99,235,0.08)", border: "rgba(37,99,235,0.25)" },
                  { label: "SOM (10-yr)", value: "$250M–$800M", color: "#7c3aed", bg: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.25)" },
                  { label: "Blended ARPU", value: "$40K /yr", color: "#ca8a04", bg: "rgba(202,138,4,0.08)", border: "rgba(202,138,4,0.25)" },
                ].map((m) => (
                  <div key={m.label} className="rounded-xl px-4 py-3" style={{ background: m.bg, border: `2px solid ${m.border}` }}>
                    <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: m.color, opacity: 0.7 }}>{m.label}</div>
                    <div className="text-[20px] font-black leading-tight" style={{ color: m.color }}>{m.value}</div>
                  </div>
                ))}
              </div>

              {/* Beachhead + Expansion */}
              <div className="grid grid-cols-2 gap-3 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards", opacity: 0 }}>
                <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50/60 px-4 py-3">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 opacity-70">Initial Beachhead</div>
                  <div className="text-[15px] font-extrabold text-emerald-800">Universities & Schools</div>
                </div>
                <div className="rounded-xl border-2 border-blue-200 bg-blue-50/60 px-4 py-3">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-blue-600 opacity-70">Expansion Market</div>
                  <div className="text-[15px] font-extrabold text-blue-800">Data Centers & Enterprise</div>
                </div>
              </div>

              {/* Monetization layers */}
              <div className="rounded-2xl border-2 border-border/40 bg-white shadow-sm p-5 flex-1 animate-fade-in" style={{ animationDelay: "0.25s", animationFillMode: "forwards", opacity: 0 }}>
                <div className="text-[14px] font-extrabold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                  EcoGridia Monetizes Across 5 Layers
                </div>
                <div className="flex flex-col gap-2">
                  {[
                    { label: "Energy Intelligence SaaS", icon: "⚡", color: "bg-emerald-50 border-emerald-200" },
                    { label: "Energy Procurement", icon: "🔋", color: "bg-blue-50 border-blue-200" },
                    { label: "Carbon / REC Markets", icon: "🌱", color: "bg-primary/5 border-primary/20" },
                    { label: "ESG Compliance", icon: "📋", color: "bg-amber-50 border-amber-200" },
                    { label: "Infrastructure Orchestration", icon: "🏗️", color: "bg-violet-50 border-violet-200" },
                  ].map((l) => (
                    <div key={l.label} className={`flex items-center gap-3 rounded-xl border px-4 py-2.5 ${l.color}`}>
                      <span className="text-[18px]">{l.icon}</span>
                      <span className="text-[14px] font-semibold text-foreground">{l.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Revenue model */}
              <div className="rounded-xl border-2 border-primary/20 bg-primary/5 px-5 py-2.5 text-center animate-fade-in"
                style={{ animationDelay: "0.3s", animationFillMode: "forwards", opacity: 0 }}>
                <span className="text-[12px] text-muted-foreground font-semibold uppercase tracking-widest">Revenue Model: </span>
                <span className="text-[14px] font-extrabold text-primary">SaaS + Transaction + Performance</span>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-4 rounded-2xl flex items-center justify-around py-3 px-10 animate-fade-in"
            style={{ background: "linear-gradient(90deg, #14532d 0%, #166534 50%, #14532d 100%)", animationDelay: "0.35s", animationFillMode: "forwards", opacity: 0 }}>
            <div className="text-center">
              <div className="text-[24px] font-extrabold text-white">$14B+</div>
              <div className="text-[12px] text-green-200">Total Market</div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-center">
              <div className="text-[24px] font-extrabold text-white">356K</div>
              <div className="text-[12px] text-green-200">Target Sites</div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-center">
              <div className="text-[24px] font-extrabold text-white">$40K</div>
              <div className="text-[12px] text-green-200">Blended ARPU</div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-center">
              <div className="text-[24px] font-extrabold text-white">5 Layers</div>
              <div className="text-[12px] text-green-200">Monetization</div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-[14px] font-bold text-white italic max-w-[380px]">
              "A multi-sided platform capturing margin at every layer of the clean energy stack"
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide15TAM;
