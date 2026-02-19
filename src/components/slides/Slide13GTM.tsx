import SlideLayout from "../SlideLayout";

// Gantt rows: each phase has a start and span (in quarter units, 0–7 for Q1Y1–Q4Y2)
const phases = [
  { label: "Phase 1 — Supply Lock-In", color: "#15803d", start: 0, span: 2 },
  { label: "Phase 2 — Demand Activation", color: "#0369a1", start: 1, span: 3 },
  { label: "Phase 3 — Community Flywheel", color: "#b45309", start: 3, span: 2 },
  { label: "Phase 4 — Gov & Infra Scale", color: "#7c3aed", start: 5, span: 3 },
];

const quarters = ["Q1 Y1", "Q2 Y1", "Q3 Y1", "Q4 Y1", "Q1 Y2", "Q2 Y2", "Q3 Y2", "Q4 Y2"];

const statusGrid = [
  {
    title: "Phase 1 — Supply Lock-In",
    color: "#15803d",
    cells: [
      { label: "Landowners", status: "green" },
      { label: "Vendor Partners", status: "green" },
      { label: "Pilot Sites", status: "yellow" },
      { label: "Pipeline Risk", status: "green" },
    ],
  },
  {
    title: "Phase 2 — Demand Activation",
    color: "#0369a1",
    cells: [
      { label: "Enterprise Portal", status: "green" },
      { label: "PPA Executions", status: "green" },
      { label: "Compliance Module", status: "yellow" },
      { label: "ARR Target", status: "green" },
    ],
  },
  {
    title: "Phase 3 — Community Flywheel",
    color: "#b45309",
    cells: [
      { label: "Marketplace", status: "green" },
      { label: "Micro-Invest", status: "yellow" },
      { label: "School Partners", status: "green" },
      { label: "User Growth", status: "green" },
    ],
  },
  {
    title: "Phase 4 — Gov & Infra",
    color: "#7c3aed",
    cells: [
      { label: "Gov RFP Wins", status: "green" },
      { label: "Utility Partners", status: "green" },
      { label: "Expansion", status: "yellow" },
      { label: "$5M+ ARR", status: "green" },
    ],
  },
];

const statusColor: Record<string, string> = {
  green: "#dcfce7",
  yellow: "#fef9c3",
  red: "#fee2e2",
};

const statusTextColor: Record<string, string> = {
  green: "#15803d",
  yellow: "#a16207",
  red: "#b91c1c",
};

const Slide13GTM = () => (
  <SlideLayout>
    <div className="relative w-full h-full flex flex-col bg-white overflow-hidden px-14 py-8">
      {/* Subtle grid background — matches Slide 2 */}
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
        {/* Header — matches Slide 2 style */}
        <div className="text-center mb-4 animate-fade-in">
          <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[13px] font-bold tracking-widest uppercase mb-2">
            Go-To-Market Strategy
          </span>
          <h2 className="text-[40px] font-extrabold text-foreground leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Portfolio Delivery <span className="text-primary">Roadmap</span>
          </h2>
          <p className="text-[20px] text-muted-foreground mt-2">Four phases to market dominance — 24 months to scale</p>
        </div>

        {/* Gantt chart area */}
        <div className="bg-white rounded-2xl border-2 border-border/40 shadow-sm p-5 mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {/* Quarter headers */}
          <div className="flex mb-3 pl-[220px] gap-0">
            {quarters.map((q, i) => (
              <div key={i} className="flex-1 text-center text-[13px] font-bold text-muted-foreground uppercase tracking-wide border-l border-dashed border-border first:border-l-0 pl-2">
                {q}
              </div>
            ))}
          </div>

          {/* Phase rows */}
          <div className="flex flex-col gap-3">
            {phases.map((p, i) => (
              <div key={i} className="flex items-center gap-0 h-[44px]">
                <div className="w-[220px] shrink-0 text-[13px] font-bold text-foreground pr-4 text-right">{p.label}</div>
                <div className="flex-1 relative h-full flex">
                  {quarters.map((_, qi) => (
                    <div key={qi} className="flex-1 h-full border-l border-dashed border-border/50 first:border-l-0" />
                  ))}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 flex items-center"
                    style={{ left: `${(p.start / quarters.length) * 100}%`, width: `${(p.span / quarters.length) * 100}%` }}
                  >
                    <div
                      className="w-full h-[36px] flex items-center pl-4 text-white text-[12px] font-extrabold shadow-md"
                      style={{
                        background: p.color,
                        clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%)",
                        borderRadius: "4px 0 0 4px",
                      }}
                    >
                      {p.label.split("—")[0].trim()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Status Grid — white cards with colored borders matching Slide 2 card style */}
        <div className="grid grid-cols-4 gap-4 flex-1 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {statusGrid.map((sg, i) => (
            <div key={i} className="flex flex-col rounded-2xl overflow-hidden border-2 bg-white shadow-sm" style={{ borderColor: `${sg.color}60` }}>
              <div className="px-4 py-2.5 text-white text-[13px] font-extrabold text-center" style={{ background: sg.color }}>
                {sg.title}
              </div>
              <div className="grid grid-cols-2 flex-1">
                {sg.cells.map((cell, j) => (
                  <div
                    key={j}
                    className="flex items-center justify-center text-[13px] font-bold text-center p-3 border border-white/60"
                    style={{ background: statusColor[cell.status], color: statusTextColor[cell.status] }}
                  >
                    {cell.label}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar — matches Slide 2 pill style */}
        <div className="flex items-center justify-center gap-5 mt-5 animate-fade-in" style={{ animationDelay: "0.35s" }}>
          {[
            { label: "Market Entry", value: "Q1 Y1" },
            { label: "First ARR Milestone", value: "$500K" },
            { label: "Scale Target", value: "$5M+" },
            { label: "Phases", value: "4 Phases" },
            { label: "Timeline", value: "24 Months" },
          ].map((m, i) => (
            <div key={i} className="flex items-center gap-3 px-6 py-3 rounded-full border-2 border-border/40 bg-white shadow-sm">
              <span className="text-[24px] font-black text-primary" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{m.value}</span>
              <span className="text-[14px] text-muted-foreground">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide13GTM;
