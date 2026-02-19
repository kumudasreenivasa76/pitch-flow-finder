import SlideLayout from "../SlideLayout";

const Slide15TAM = () => {
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

        <div className="relative z-10 flex flex-col items-center w-full">
          {/* Header */}
          <div className="text-center mb-5 animate-fade-in">
            <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[13px] font-bold tracking-widest uppercase mb-2">
              Market Opportunity
            </span>
            <h2 className="text-[40px] font-extrabold text-foreground leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Massive Energy + Carbon Spend <span className="text-primary">Across Campuses & Enterprises</span>
            </h2>
          </div>

          {/* Main 2-column */}
          <div className="flex gap-6 w-full items-center">

            {/* LEFT: TAM / SAM / SOM — bold numbers in BLACK */}
            <div className="w-[48%] flex flex-col gap-3 justify-center">

              {/* TAM */}
              <div className="rounded-2xl p-5 animate-fade-in relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 50%, #ffffff 100%)",
                  border: "2px solid #34d399",
                  animationDelay: "0.05s", animationFillMode: "forwards", opacity: 0,
                }}>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-[11px] font-black tracking-[0.2em] uppercase text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">TAM</span>
                  <span className="text-[13px] font-semibold text-emerald-700">Total Addressable Market</span>
                </div>
                <div className="text-[56px] font-black text-foreground leading-none tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  $14B<span className="text-[32px] text-emerald-600">+</span>
                </div>
                <div className="text-[12px] text-muted-foreground mt-1">~356,000 global target sites × $40k blended platform value</div>
                <div className="grid grid-cols-4 gap-2 mt-3">
                  {[
                    { label: "Universities", val: "25K" },
                    { label: "K-12 Schools", val: "120K" },
                    { label: "Data Centers", val: "11K" },
                    { label: "Enterprises", val: "200K" },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/80 rounded-lg px-2 py-1.5 border border-emerald-200 text-center">
                      <div className="text-[15px] font-black text-foreground">{s.val}</div>
                      <div className="text-[9px] text-muted-foreground font-semibold">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SAM */}
              <div className="rounded-2xl p-5 animate-fade-in relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #eff6ff 0%, #f0f9ff 50%, #ffffff 100%)",
                  border: "2px solid #60a5fa",
                  animationDelay: "0.12s", animationFillMode: "forwards", opacity: 0,
                }}>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-[11px] font-black tracking-[0.2em] uppercase text-blue-600 bg-blue-100 px-3 py-1 rounded-full">SAM</span>
                  <span className="text-[13px] font-semibold text-blue-700">Serviceable Available Market</span>
                </div>
                <div className="text-[56px] font-black text-foreground leading-none tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  $3.9B
                </div>
                <div className="text-[12px] text-muted-foreground mt-1">US, UK & EU priority · ~98,000 targetable sites</div>
                <div className="grid grid-cols-4 gap-2 mt-3">
                  {[
                    { label: "Universities", val: "8K" },
                    { label: "Schools", val: "25K" },
                    { label: "Data Centers", val: "5K" },
                    { label: "Enterprises", val: "60K" },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/80 rounded-lg px-2 py-1.5 border border-blue-200 text-center">
                      <div className="text-[15px] font-black text-foreground">{s.val}</div>
                      <div className="text-[9px] text-muted-foreground font-semibold">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SOM */}
              <div className="rounded-2xl p-5 animate-fade-in relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #f5f3ff 0%, #faf5ff 50%, #ffffff 100%)",
                  border: "2px solid #a78bfa",
                  animationDelay: "0.2s", animationFillMode: "forwards", opacity: 0,
                }}>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-[11px] font-black tracking-[0.2em] uppercase text-violet-600 bg-violet-100 px-3 py-1 rounded-full">SOM</span>
                  <span className="text-[13px] font-semibold text-violet-700">Serviceable Obtainable Market</span>
                </div>
                <div className="text-[56px] font-black text-foreground leading-none tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  $250M<span className="text-[32px] text-violet-600">+</span>
                </div>
                <div className="text-[12px] text-muted-foreground mt-1">~2% SAM · 10-year trajectory</div>
                <div className="grid grid-cols-3 gap-2 mt-3">
                  {[
                    { label: "FY27 Sites", val: "50" },
                    { label: "FY30 Sites", val: "1,365" },
                    { label: "FY35 Sites", val: "6,915" },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/80 rounded-lg px-2 py-1.5 border border-violet-200 text-center">
                      <div className="text-[15px] font-black text-foreground">{s.val}</div>
                      <div className="text-[9px] text-muted-foreground font-semibold">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Flow arrow */}
              <div className="flex items-center justify-center gap-3 animate-fade-in" style={{ animationDelay: "0.28s", animationFillMode: "forwards", opacity: 0 }}>
                <span className="text-[11px] font-bold text-emerald-600 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">Global</span>
                <span className="text-muted-foreground">→</span>
                <span className="text-[11px] font-bold text-blue-600 px-3 py-1 rounded-full bg-blue-50 border border-blue-200">US/UK/EU</span>
                <span className="text-muted-foreground">→</span>
                <span className="text-[11px] font-bold text-violet-600 px-3 py-1 rounded-full bg-violet-50 border border-violet-200">Beachhead Focus</span>
              </div>
            </div>

            {/* RIGHT: Dashboard */}
            <div className="w-[52%] flex flex-col gap-3 justify-center">
              {/* KPI row */}
              <div className="grid grid-cols-2 gap-3 animate-fade-in" style={{ animationDelay: "0.15s", animationFillMode: "forwards", opacity: 0 }}>
                {[
                  { label: "TAM", value: "$14B+", color: "#059669", bg: "rgba(5,150,105,0.06)", border: "rgba(5,150,105,0.2)" },
                  { label: "SAM", value: "$3.9B", color: "#2563eb", bg: "rgba(37,99,235,0.06)", border: "rgba(37,99,235,0.2)" },
                  { label: "SOM (10-yr)", value: "$250M+", color: "#7c3aed", bg: "rgba(124,58,237,0.06)", border: "rgba(124,58,237,0.2)" },
                  { label: "Blended ARPU", value: "$40K /yr", color: "#ca8a04", bg: "rgba(202,138,4,0.06)", border: "rgba(202,138,4,0.2)" },
                ].map((m) => (
                  <div key={m.label} className="rounded-xl px-4 py-2.5" style={{ background: m.bg, border: `2px solid ${m.border}` }}>
                    <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: m.color, opacity: 0.7 }}>{m.label}</div>
                    <div className="text-[18px] font-black text-foreground leading-tight">{m.value}</div>
                  </div>
                ))}
              </div>

              {/* Beachhead + Expansion */}
              <div className="grid grid-cols-2 gap-3 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards", opacity: 0 }}>
                <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50/60 px-4 py-2.5">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 opacity-70">Initial Beachhead</div>
                  <div className="text-[14px] font-extrabold text-foreground">Universities & Schools</div>
                </div>
                <div className="rounded-xl border-2 border-blue-200 bg-blue-50/60 px-4 py-2.5">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-blue-600 opacity-70">Expansion Market</div>
                  <div className="text-[14px] font-extrabold text-foreground">Data Centers & Enterprise</div>
                </div>
              </div>

              {/* Monetization layers */}
              <div className="rounded-2xl border-2 border-border/40 bg-white shadow-sm p-4 flex-1 animate-fade-in" style={{ animationDelay: "0.25s", animationFillMode: "forwards", opacity: 0 }}>
                <div className="text-[13px] font-extrabold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                  EcoGridia Monetizes Across 5 Layers
                </div>
                <div className="flex flex-col gap-1.5">
                  {[
                    { label: "Energy Intelligence SaaS", icon: "⚡", color: "bg-emerald-50 border-emerald-200" },
                    { label: "Energy Procurement", icon: "🔋", color: "bg-blue-50 border-blue-200" },
                    { label: "Carbon / REC Markets", icon: "🌱", color: "bg-primary/5 border-primary/20" },
                    { label: "ESG Compliance", icon: "📋", color: "bg-amber-50 border-amber-200" },
                    { label: "Infrastructure Orchestration", icon: "🏗️", color: "bg-violet-50 border-violet-200" },
                  ].map((l) => (
                    <div key={l.label} className={`flex items-center gap-3 rounded-xl border px-4 py-2 ${l.color}`}>
                      <span className="text-[16px]">{l.icon}</span>
                      <span className="text-[13px] font-semibold text-foreground">{l.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Revenue model */}
              <div className="rounded-xl border-2 border-primary/20 bg-primary/5 px-5 py-2 text-center animate-fade-in"
                style={{ animationDelay: "0.3s", animationFillMode: "forwards", opacity: 0 }}>
                <span className="text-[11px] text-muted-foreground font-semibold uppercase tracking-widest">Revenue Model: </span>
                <span className="text-[13px] font-extrabold text-primary">SaaS + Transaction + Performance</span>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-3 rounded-2xl flex items-center justify-around py-2.5 px-10 animate-fade-in"
            style={{ background: "linear-gradient(90deg, #14532d 0%, #166534 50%, #14532d 100%)", animationDelay: "0.35s", animationFillMode: "forwards", opacity: 0 }}>
            {[
              { value: "$14B+", label: "Total Market" },
              { value: "356K", label: "Target Sites" },
              { value: "$40K", label: "Blended ARPU" },
              { value: "5 Layers", label: "Monetization" },
            ].map((m, i, arr) => (
              <div key={m.label} className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-[20px] font-extrabold text-white">{m.value}</div>
                  <div className="text-[10px] text-green-200">{m.label}</div>
                </div>
                {i < arr.length - 1 && <div className="w-px h-7 bg-white/20" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide15TAM;
