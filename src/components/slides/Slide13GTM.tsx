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
  green: "#16a34a",
  yellow: "#ca8a04",
  red: "#dc2626",
};

const Slide13GTM = () => (
  <SlideLayout>
    <div className="w-full h-full overflow-hidden relative" style={{ background: "#ffffff" }}>
      {/* Graph-paper grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #c7d2d8 1px, transparent 1px), linear-gradient(to bottom, #c7d2d8 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.35,
        }}
      />
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 pointer-events-none"
        style={{ background: "linear-gradient(90deg, #15803d, #0369a1, #b45309, #7c3aed)" }} />

      <div className="relative z-10 flex flex-col h-full px-14 pt-10 pb-5 justify-between">
        {/* Header */}
        <div className="mb-5">
          <span className="text-[16px] font-bold tracking-widest uppercase" style={{ color: "#15803d" }}>
            GO-TO-MARKET STRATEGY
          </span>
          <h2 className="text-[42px] font-extrabold text-foreground leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Portfolio Delivery Roadmap
          </h2>
        </div>

        {/* Gantt chart area */}
        <div className="bg-white/80 rounded-2xl border border-gray-200 p-5 mb-4">
          {/* Quarter headers */}
          <div className="flex mb-3 pl-[220px] gap-0">
            {quarters.map((q, i) => (
              <div key={i} className="flex-1 text-center text-[13px] font-bold text-gray-500 uppercase tracking-wide border-l border-dashed border-gray-300 first:border-l-0 pl-2">
                {q}
              </div>
            ))}
          </div>

          {/* Phase rows */}
          <div className="flex flex-col gap-3">
            {phases.map((p, i) => (
              <div key={i} className="flex items-center gap-0 h-[48px]">
                {/* Label */}
                <div className="w-[220px] shrink-0 text-[14px] font-bold text-foreground pr-4 text-right">{p.label}</div>
                {/* Grid + arrow bar */}
                <div className="flex-1 relative h-full flex">
                  {/* Grid columns background */}
                  {quarters.map((_, qi) => (
                    <div key={qi} className="flex-1 h-full border-l border-dashed border-gray-200 first:border-l-0" />
                  ))}
                  {/* Arrow bar */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 flex items-center"
                    style={{
                      left: `${(p.start / quarters.length) * 100}%`,
                      width: `${(p.span / quarters.length) * 100}%`,
                    }}
                  >
                    {/* Arrow shape via clip-path */}
                    <div
                      className="w-full h-[38px] flex items-center pl-4 text-white text-[13px] font-extrabold shadow-md"
                      style={{
                        background: p.color,
                        clipPath: "polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%)",
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

        {/* Status Grid */}
        <div className="grid grid-cols-4 gap-3 flex-1">
          {statusGrid.map((sg, i) => (
            <div key={i} className="flex flex-col rounded-xl overflow-hidden border-2" style={{ borderColor: sg.color }}>
              {/* Title bar */}
              <div className="px-4 py-2 text-white text-[13px] font-extrabold text-center" style={{ background: sg.color }}>
                {sg.title}
              </div>
              {/* Cells grid */}
              <div className="grid grid-cols-2 flex-1">
                {sg.cells.map((cell, j) => (
                  <div
                    key={j}
                    className="flex items-center justify-center text-white text-[13px] font-bold text-center p-3 border border-white/20"
                    style={{ background: statusColor[cell.status] }}
                  >
                    {cell.label}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-3 rounded-2xl flex items-center justify-around py-3 px-10"
          style={{ background: "linear-gradient(90deg, #14532d 0%, #166534 50%, #14532d 100%)" }}
        >
          {[
            { label: "Market Entry", value: "Q1 Y1" },
            { label: "First ARR", value: "$500K" },
            { label: "Scale Target", value: "$5M+" },
            { label: "Phases", value: "4 Phases" },
            { label: "Timeline", value: "24 Months" },
          ].map((m, i, arr) => (
            <div key={i} className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-[22px] font-extrabold text-white">{m.value}</div>
                <div className="text-[12px] text-green-200">{m.label}</div>
              </div>
              {i < arr.length - 1 && <div className="w-px h-8 bg-white/20" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide13GTM;
