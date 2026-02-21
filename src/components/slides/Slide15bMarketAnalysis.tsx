import SlideLayout from "../SlideLayout";

const drivers = [
  {
    icon: "⚡",
    title: "Energy Cost Pressure",
    color: "border-amber-200 bg-amber-50/70",
    headerColor: "bg-amber-500",
    stats: [
      { label: "University energy spend (UAE)", value: "AED 5M–25M/yr" },
      { label: "Data center OpEx on power", value: "45–65%" },
      { label: "MENA DC electricity demand growth", value: "25–35% CAGR" },
      { label: "Typical optimization savings", value: "12–30%" },
    ],
    implication: "Clear, ROI-driven buyer urgency across GCC.",
  },
  {
    icon: "🌱",
    title: "ESG & Carbon Compliance",
    color: "border-emerald-200 bg-emerald-50/70",
    headerColor: "bg-emerald-600",
    stats: [
      { label: "Carbon accounting CAGR (MENA)", value: "30–40%" },
      { label: "MENA I-REC market", value: "$500M+ /yr" },
      { label: "UAE Climate Law & Vision 2030", value: "Mandatory" },
      { label: "Net-zero commitments (UAE 2050)", value: "Accelerating" },
    ],
    implication: "Carbon spend becoming non-optional & recurring in GCC.",
  },
  {
    icon: "🏫",
    title: "Education Beachhead",
    color: "border-blue-200 bg-blue-50/70",
    headerColor: "bg-blue-600",
    stats: [
      { label: "Priority education sites (UAE+KSA)", value: "12,000+" },
      { label: "Campus energy budgets", value: "Centralized" },
      { label: "Sustainability mandates", value: "Government-driven" },
      { label: "vs enterprise procurement cycle", value: "Faster" },
    ],
    implication: "Fast, credible entry wedge for platform adoption in MENA.",
  },
  {
    icon: "🖥️",
    title: "Data Center Tailwind",
    color: "border-violet-200 bg-violet-50/70",
    headerColor: "bg-violet-600",
    stats: [
      { label: "Data centers in MENA", value: "~1,500" },
      { label: "Hyperscale growth CAGR (MENA)", value: "25–30%" },
      { label: "Grid constraint hubs (Dubai/Riyadh)", value: "Emerging" },
      { label: "Renewable procurement complexity", value: "Very High" },
    ],
    implication: "High-ACV expansion once platform credibility is set.",
  },
];

const gaps = [
  "Energy monitoring tools",
  "Carbon accounting software",
  "I-REC brokers",
  "PPA consultants",
  "Manual ESG reporting",
];

const Slide15bMarketAnalysis = () => (
  <SlideLayout>
    <div className="relative w-full h-full flex flex-col bg-white overflow-hidden">
      {/* Top gradient bar */}
      <div className="h-[6px] w-full flex-shrink-0" style={{ background: "linear-gradient(90deg, #10b981, #3b82f6, #8b5cf6, #f59e0b)" }} />

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

      <div className="relative z-10 flex flex-col flex-1 px-14 pt-8 pb-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-6 animate-fade-in">
          <div>
            <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[13px] font-bold tracking-widest uppercase mb-2">
              Market Analysis
            </span>
            <h2 className="text-[40px] font-extrabold text-foreground leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Energy, Carbon & Compliance <span className="text-primary">Converging in MENA</span>
            </h2>
            <p className="text-[15px] text-muted-foreground mt-1">Organizations across UAE & Saudi Arabia face rising costs, stricter disclosure, and fragmented tooling.</p>
          </div>

          {/* Market gap pill */}
          <div className="flex-shrink-0 ml-8 rounded-2xl border-2 border-rose-200 bg-rose-50/80 px-5 py-4 min-w-[230px]">
            <div className="text-[13px] font-extrabold text-rose-700 uppercase tracking-widest mb-2">🧩 Market Gap Today</div>
            <div className="flex flex-col gap-1.5">
              {gaps.map((g) => (
                <div key={g} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0" />
                  <span className="text-[12px] text-rose-800 font-medium">{g}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-2 border-t border-rose-200 text-[11px] font-bold text-rose-600 uppercase tracking-wide">
              No unified platforms exist in GCC
            </div>
          </div>
        </div>

        {/* 4 driver cards */}
        <div className="grid grid-cols-4 gap-4 flex-1 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {drivers.map((d) => (
            <div key={d.title} className={`rounded-2xl border-2 ${d.color} flex flex-col overflow-hidden`}>
              {/* Card header */}
              <div className={`${d.headerColor} px-4 py-3 text-white`}>
                <div className="text-[20px] mb-0.5">{d.icon}</div>
                <div className="text-[14px] font-extrabold leading-tight">{d.title}</div>
              </div>

              {/* Stats */}
              <div className="flex flex-col gap-2 p-4 flex-1">
                {d.stats.map((s) => (
                  <div key={s.label} className="flex items-center justify-between bg-white/80 rounded-xl px-3 py-2 border border-white shadow-sm">
                    <span className="text-[11px] text-muted-foreground leading-tight pr-2">{s.label}</span>
                    <span className="text-[13px] font-extrabold text-foreground flex-shrink-0">{s.value}</span>
                  </div>
                ))}
              </div>

              {/* Implication */}
              <div className="px-4 pb-4">
                <div className="rounded-xl bg-white/90 border border-white px-3 py-2 text-[11px] font-bold text-muted-foreground italic">
                  → {d.implication}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom dark green summary bar */}
      <div className="relative z-10 flex-shrink-0 flex items-center justify-center gap-0 px-0" style={{ background: "#14532d" }}>
        <div className="w-full flex items-center justify-between px-16 py-4">
          <div className="text-[13px] text-emerald-200 font-bold uppercase tracking-widest">Market Thesis</div>
          <div className="text-[15px] text-white font-semibold text-center flex-1 mx-8">
            EcoGridia unifies <span className="text-emerald-300 font-extrabold">energy intelligence</span>, <span className="text-blue-300 font-extrabold">renewable procurement</span>, and <span className="text-violet-300 font-extrabold">carbon compliance</span> into a single operating platform for high-energy organizations across UAE & Saudi Arabia.
          </div>
          <div className="flex gap-4 flex-shrink-0">
            {[
              { label: "Carbon CAGR", value: "~35%" },
              { label: "I-REC Market", value: "$500M+" },
              { label: "Target Sites", value: "12K+" },
            ].map((m) => (
              <div key={m.label} className="text-center">
                <div className="text-[18px] font-black text-emerald-300">{m.value}</div>
                <div className="text-[10px] text-emerald-200/70 uppercase tracking-wide">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide15bMarketAnalysis;