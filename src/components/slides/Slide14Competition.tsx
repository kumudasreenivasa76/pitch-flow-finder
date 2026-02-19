import SlideLayout from "../SlideLayout";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Label,
  ReferenceLine,
} from "recharts";

/* ── Competitor data (user-specified positions & sizes) ── */
const competitors = [
  { name: "EcoGridia", x: 92, y: 90, z: 600, funding: "$2M (raising)", color: "hsl(142, 71%, 45%)", status: "Pre-Seed", moat: "Full-Stack Energy OS", sublabel: "Full-Stack Energy OS" },
  { name: "Arcadia", x: 42, y: 68, z: 400, funding: "$400M+", color: "hsl(220, 70%, 55%)", status: "Series D", moat: "Strong data + community, not full stack", sublabel: "" },
  { name: "Watershed", x: 30, y: 62, z: 400, funding: "$350M+", color: "hsl(270, 60%, 55%)", status: "Series C", moat: "ESG heavy, weak execution + monetization", sublabel: "" },
  { name: "Stem", x: 55, y: 55, z: 400, funding: "$92M", color: "hsl(30, 80%, 55%)", status: "Series B", moat: "Hardware + storage focused", sublabel: "" },
  { name: "GridBeyond", x: 50, y: 45, z: 400, funding: "$60M", color: "hsl(45, 80%, 50%)", status: "Series B", moat: "Optimization player", sublabel: "" },
  { name: "Persefoni", x: 35, y: 50, z: 300, funding: "$100M+", color: "hsl(0, 65%, 50%)", status: "Series B", moat: "Carbon accounting only", sublabel: "" },
  { name: "LevelTen", x: 25, y: 40, z: 200, funding: "$40M", color: "hsl(142, 50%, 45%)", status: "Series B", moat: "Marketplace only", sublabel: "" },
];

/* ── Custom label renderer ── */
const CustomBubbleLabel = (props: any) => {
  const { cx, cy, payload } = props;
  if (!payload) return null;
  const isEco = payload.name === "EcoGridia";
  return (
    <g>
      <text
        x={cx}
        y={cy - (isEco ? 14 : 8)}
        textAnchor="middle"
        fill={isEco ? "hsl(142, 71%, 30%)" : "#374151"}
        fontSize={isEco ? 13 : 10}
        fontWeight={isEco ? 900 : 600}
      >
        {payload.name}
      </text>
      {isEco && payload.sublabel && (
        <text
          x={cx}
          y={cy + 2}
          textAnchor="middle"
          fill="hsl(142, 71%, 40%)"
          fontSize={9}
          fontWeight={600}
        >
          {payload.sublabel}
        </text>
      )}
    </g>
  );
};

/* ── Feature comparison ── */
const features = [
  "Energy Intelligence", "AI Forecasting", "Digital Twins", "Renewable Marketplace",
  "Community Layer", "ESG Compliance", "PPA / VPPA Execution",
  "Energy Asset Financialization ⭐", "REC / Carbon Monetization ⭐",
  "Capital & Incentive Structuring", "Tokenization / Future Markets",
];

type Status = "built" | "building" | "roadmap" | "partial" | "none";

const compMatrix: { name: string; row: Status[] }[] = [
  { name: "EcoGridia",    row: ["built","built","building","built","built","building","built","built","built","building","roadmap"] },
  { name: "Arcadia",      row: ["none","none","none","built","built","built","none","none","none","none","none"] },
  { name: "Watershed",    row: ["none","none","none","none","none","built","none","none","partial","none","none"] },
  { name: "Stem",         row: ["built","built","none","none","none","none","none","none","none","none","none"] },
  { name: "GridBeyond",   row: ["built","built","none","none","none","none","none","none","none","none","none"] },
  { name: "Aurora Solar", row: ["built","building","none","none","none","none","none","none","none","none","none"] },
];

const statusStyle: Record<Status, { bg: string; text: string; label: string }> = {
  built:    { bg: "bg-primary",      text: "text-primary-foreground", label: "✅ Live" },
  building: { bg: "bg-amber-400",    text: "text-amber-900",         label: "🟡 In Progress" },
  roadmap:  { bg: "bg-blue-400",     text: "text-blue-900",          label: "🔵 Planned" },
  partial:  { bg: "bg-orange-300",   text: "text-orange-900",        label: "🟡 Partial" },
  none:     { bg: "bg-transparent",  text: "text-muted-foreground/40", label: "—" },
};

/* ── Custom tooltip ── */
const BubbleTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-background border border-border rounded-lg px-3 py-2 shadow-lg text-[11px] max-w-[220px]">
      <div className="font-bold text-foreground text-[13px]">{d.name}</div>
      <div className="text-muted-foreground mt-1">{d.moat}</div>
      <div className="flex gap-3 mt-1.5">
        <span className="text-primary font-semibold">{d.funding}</span>
        <span className="text-muted-foreground">{d.status}</span>
      </div>
    </div>
  );
};

const Slide14Competition = () => (
  <SlideLayout>
    <div className="relative w-full h-full flex flex-col bg-white overflow-hidden px-14 pt-7 pb-4">
      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
        backgroundSize: "60px 60px", opacity: 0.5,
      }} />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-3 animate-fade-in">
          <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[13px] font-bold tracking-widest uppercase mb-1">
            Competitive Landscape
          </span>
          <h2 className="text-[36px] font-extrabold text-foreground leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Only Full-Stack <span className="text-primary">Energy Platform</span>
          </h2>
          <p className="text-[14px] text-muted-foreground mt-0.5">Platform breadth × market focus — bubble size = platform scope</p>
        </div>

        {/* Main: Bubble Chart + Matrix */}
        <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">

          {/* Bubble Chart */}
          <div className="rounded-xl border border-border/40 bg-white shadow-sm p-3 animate-fade-in flex flex-col" style={{ animationDelay: "0.05s" }}>
            <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Market Positioning Map</div>
            <div className="flex-1 min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart margin={{ top: 20, right: 20, bottom: 25, left: 15 }}>
                  <XAxis type="number" dataKey="x" domain={[10, 100]} tick={{ fontSize: 10 }} tickLine={false} axisLine={{ stroke: "#e5e7eb" }}>
                    <Label value="Platform Breadth →" position="bottom" offset={5} style={{ fontSize: 10, fill: "#94a3b8" }} />
                  </XAxis>
                  <YAxis type="number" dataKey="y" domain={[30, 100]} tick={{ fontSize: 10 }} tickLine={false} axisLine={{ stroke: "#e5e7eb" }}>
                    <Label value="Market Traction →" angle={-90} position="left" offset={-2} style={{ fontSize: 10, fill: "#94a3b8" }} />
                  </YAxis>
                  <ZAxis type="number" dataKey="z" range={[400, 4000]} />
                  <ReferenceLine x={50} stroke="#e5e7eb" strokeDasharray="4 4" />
                  <ReferenceLine y={55} stroke="#e5e7eb" strokeDasharray="4 4" />
                  <Tooltip content={<BubbleTooltip />} />
                  <Scatter data={competitors} label={<CustomBubbleLabel />}>
                    {competitors.map((c, i) => (
                      <Cell
                        key={i}
                        fill={c.color}
                        fillOpacity={c.name === "EcoGridia" ? 0.85 : 0.45}
                        stroke={c.name === "EcoGridia" ? c.color : "transparent"}
                        strokeWidth={c.name === "EcoGridia" ? 3 : 0}
                      />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
            </div>
            {/* Legend */}
            <div className="flex flex-wrap gap-2.5 mt-1 justify-center">
              {competitors.map((c) => (
                <div key={c.name} className="flex items-center gap-1">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c.color, opacity: c.name === "EcoGridia" ? 1 : 0.6 }} />
                  <span className={`text-[9px] ${c.name === "EcoGridia" ? "font-bold text-foreground" : "text-muted-foreground"}`}>{c.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Matrix */}
          <div className="rounded-xl border border-border/40 bg-white shadow-sm p-3 animate-fade-in flex flex-col" style={{ animationDelay: "0.1s" }}>
            <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Capability Matrix</div>
            <div className="flex-1 overflow-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="py-1.5 px-2 text-[10px] font-semibold text-foreground w-28">Capability</th>
                    {compMatrix.map((c) => (
                      <th key={c.name} className={`py-1.5 px-1 text-[9px] font-semibold text-center ${c.name === "EcoGridia" ? "text-primary" : "text-foreground"}`}>
                        {c.name === "Aurora Solar" ? "Aurora" : c.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {features.map((f, fi) => (
                    <tr key={f} className="border-b border-border/30">
                      <td className="py-1.5 px-2 text-[10px] text-foreground font-medium">{f}</td>
                      {compMatrix.map((c) => {
                        const s = statusStyle[c.row[fi]];
                        return (
                          <td key={c.name} className="py-1.5 px-1 text-center">
                            {c.row[fi] === "none" ? (
                              <span className="text-muted-foreground/30 text-[10px]">✗</span>
                            ) : (
                              <span className={`inline-block px-2 py-0.5 rounded-full text-[8px] font-bold ${s.bg} ${s.text}`}>
                                {s.label}
                              </span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Legend */}
            <div className="flex gap-4 mt-2 justify-center border-t border-border/30 pt-2">
              {(["built", "building", "partial", "roadmap"] as Status[]).map((s) => (
                <div key={s} className="flex items-center gap-1.5">
                  <div className={`w-3 h-3 rounded-full ${statusStyle[s].bg}`} />
                  <span className="text-[9px] text-muted-foreground font-medium">{statusStyle[s].label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Differentiator strip */}
        <div className="flex items-center justify-center gap-4 mt-3 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {[
            { icon: "🏗️", label: "Full-Stack", desc: "Only end-to-end platform" },
            { icon: "🤖", label: "AI-Native", desc: "Forecasting + digital twins" },
            { icon: "🔄", label: "Marketplace", desc: "REC + PPA + community layer" },
            { icon: "📊", label: "Multi-Segment", desc: "DC, schools, solar, enterprise" },
            { icon: "🛡️", label: "Compliance Built-In", desc: "ESG / SEC / CSRD ready" },
          ].map((d) => (
            <div key={d.label} className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/40 bg-white shadow-sm">
              <span className="text-[16px]">{d.icon}</span>
              <div>
                <div className="text-[11px] font-bold text-foreground leading-none">{d.label}</div>
                <div className="text-[8px] text-muted-foreground">{d.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide14Competition;
