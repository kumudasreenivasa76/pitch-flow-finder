import SlideLayout from "../SlideLayout";

const Slide15TAM = () => {
  return (
    <SlideLayout>
      <div className="relative w-full h-full flex flex-col bg-white overflow-hidden px-20 py-10">
        {/* Grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.5,
          }}
        />

        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="text-center mb-6 animate-fade-in">
            <span className="inline-block px-5 py-1.5 rounded-full border border-emerald-300 bg-emerald-50 text-emerald-700 text-[16px] font-bold tracking-widest uppercase mb-4">
              Market Opportunity
            </span>
            <h2 className="text-[52px] font-extrabold text-foreground leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Massive Energy + Carbon Spend <span className="text-primary">Across Campuses & Enterprises</span>
            </h2>
          </div>

          {/* Main content: 3 funnel cards + right panel */}
          <div className="flex gap-6 flex-1">
            {/* TAM / SAM / SOM funnel cards */}
            <div className="flex flex-col gap-4 w-[52%]">
              {/* TAM */}
              <div className="flex-1 rounded-2xl border-2 border-emerald-200 bg-emerald-50/60 p-5 flex gap-5 items-center animate-fade-in" style={{ animationDelay: "0.05s" }}>
                <div className="flex-shrink-0 w-[90px] h-[90px] rounded-2xl bg-emerald-500 flex flex-col items-center justify-center text-white shadow-md">
                  <div className="text-[11px] font-bold tracking-widest uppercase">TAM</div>
                  <div className="text-[28px] font-black leading-tight">$14B+</div>
                </div>
                <div className="flex-1">
                  <div className="text-[17px] font-extrabold text-emerald-800 mb-1">Total Addressable Market</div>
                  <div className="text-[13px] text-muted-foreground mb-2">~356,000 global target sites × $40k blended platform value</div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: "Universities", val: "25,000" },
                      { label: "K-12 Districts", val: "120,000" },
                      { label: "Data Centers", val: "11,000" },
                      { label: "Enterprises", val: "200,000" },
                    ].map((s) => (
                      <div key={s.label} className="flex items-center justify-between bg-white rounded-lg px-3 py-1.5 border border-emerald-100">
                        <span className="text-[12px] text-muted-foreground">{s.label}</span>
                        <span className="text-[13px] font-bold text-emerald-700">{s.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* SAM */}
              <div className="flex-1 rounded-2xl border-2 border-blue-200 bg-blue-50/60 p-5 flex gap-5 items-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="flex-shrink-0 w-[90px] h-[90px] rounded-2xl bg-blue-500 flex flex-col items-center justify-center text-white shadow-md">
                  <div className="text-[11px] font-bold tracking-widest uppercase">SAM</div>
                  <div className="text-[28px] font-black leading-tight">$3.9B</div>
                </div>
                <div className="flex-1">
                  <div className="text-[17px] font-extrabold text-blue-800 mb-1">Serviceable Available Market</div>
                  <div className="text-[13px] text-muted-foreground mb-2">US, UK & EU priority markets · ~98,000 targetable sites × $40k</div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: "Universities", val: "8,000" },
                      { label: "School Districts", val: "25,000" },
                      { label: "Data Centers", val: "5,000" },
                      { label: "Enterprises", val: "60,000" },
                    ].map((s) => (
                      <div key={s.label} className="flex items-center justify-between bg-white rounded-lg px-3 py-1.5 border border-blue-100">
                        <span className="text-[12px] text-muted-foreground">{s.label}</span>
                        <span className="text-[13px] font-bold text-blue-700">{s.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* SOM */}
              <div className="flex-1 rounded-2xl border-2 border-violet-200 bg-violet-50/60 p-5 flex gap-5 items-center animate-fade-in" style={{ animationDelay: "0.15s" }}>
                <div className="flex-shrink-0 w-[90px] h-[90px] rounded-2xl bg-violet-500 flex flex-col items-center justify-center text-white shadow-md">
                  <div className="text-[11px] font-bold tracking-widest uppercase">SOM</div>
                  <div className="text-[22px] font-black leading-tight text-center">$250M–$800M</div>
                </div>
                <div className="flex-1">
                  <div className="text-[17px] font-extrabold text-violet-800 mb-1">Serviceable Obtainable Market</div>
                  <div className="text-[13px] text-muted-foreground mb-2">~2% SAM capture · model-aligned 10-year trajectory</div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: "FY26", val: "50 customers" },
                      { label: "FY29", val: "1,365 cust." },
                      { label: "FY34", val: "6,915 cust." },
                    ].map((s) => (
                      <div key={s.label} className="flex flex-col items-center bg-white rounded-lg px-2 py-1.5 border border-violet-100">
                        <span className="text-[11px] font-bold text-violet-700">{s.label}</span>
                        <span className="text-[11px] text-muted-foreground">{s.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right panel: dashboard + monetization */}
            <div className="flex flex-col gap-4 w-[48%]">
              {/* VC Dashboard */}
              <div className="rounded-2xl border-2 border-border/40 bg-white shadow-sm p-5 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-[15px] font-extrabold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                  EcoGridia Market Dashboard
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "TAM", value: "$14B+", color: "bg-emerald-50 border-emerald-200 text-emerald-700" },
                    { label: "SAM", value: "$3.9B", color: "bg-blue-50 border-blue-200 text-blue-700" },
                    { label: "SOM (10-yr)", value: "$250M–$800M", color: "bg-violet-50 border-violet-200 text-violet-700" },
                    { label: "Blended ARPU", value: "$40K/yr", color: "bg-amber-50 border-amber-200 text-amber-700" },
                    { label: "Initial Beachhead", value: "Universities & Schools", color: "bg-emerald-50 border-emerald-200 text-emerald-700" },
                    { label: "Expansion Market", value: "Data Centers & Enterprise", color: "bg-blue-50 border-blue-200 text-blue-700" },
                  ].map((m) => (
                    <div key={m.label} className={`rounded-xl border px-4 py-3 ${m.color}`}>
                      <div className="text-[11px] font-bold uppercase tracking-wide opacity-70">{m.label}</div>
                      <div className="text-[15px] font-extrabold leading-tight">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Monetization layers */}
              <div className="rounded-2xl border-2 border-border/40 bg-white shadow-sm p-5 flex-1 animate-fade-in" style={{ animationDelay: "0.25s" }}>
                <div className="text-[15px] font-extrabold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                  EcoGridia Monetizes Across 5 Layers
                </div>
                <div className="flex flex-col gap-2">
                  {[
                    { label: "Energy Intelligence SaaS", icon: "⚡", color: "bg-emerald-50 border-emerald-200" },
                    { label: "Energy Procurement", icon: "🔋", color: "bg-blue-50 border-blue-200" },
                    { label: "Carbon / REC Markets", icon: "🌱", color: "bg-teal-50 border-teal-200" },
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

              {/* Revenue model pill */}
              <div className="rounded-2xl border-2 border-primary/20 bg-primary/5 px-6 py-3 text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <span className="text-[13px] text-muted-foreground font-semibold uppercase tracking-widest">Revenue Model: </span>
                <span className="text-[15px] font-extrabold text-primary">SaaS + Transaction + Performance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide15TAM;
