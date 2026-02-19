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

/* ── Competitor data ── */
const competitors = [
  { name: "EcoGridia", x: 95, y: 90, z: 180, funding: "$2M (raising)", color: "hsl(142, 71%, 45%)", status: "Pre-Seed", moat: "Full-stack platform + AI + marketplace" },
  { name: "Arcadia", x: 40, y: 70, z: 500, funding: "$400M+", color: "hsl(220, 70%, 55%)", status: "Series D", moat: "Community solar marketplace" },
  { name: "Watershed", x: 30, y: 65, z: 400, funding: "$350M+", color: "hsl(250, 60%, 55%)", status: "Series C", moat: "Carbon accounting for enterprises" },
  { name: "Tem", x: 55, y: 55, z: 160, funding: "$92M", color: "hsl(30, 80%, 55%)", status: "Series B", moat: "AI energy platform (UK)" },
  { name: "GridBeyond", x: 50, y: 45, z: 120, funding: "$60M", color: "hsl(200, 60%, 50%)", status: "Series B", moat: "AI energy optimization" },
  { name: "Aurora Solar", x: 25, y: 80, z: 550, funding: "$500M+", color: "hsl(45, 80%, 50%)", status: "Series D", moat: "Solar design & sales tools" },
  { name: "Persefoni", x: 35, y: 50, z: 200, funding: "$100M+", color: "hsl(340, 60%, 50%)", status: "Series B", moat: "Carbon management/reporting" },
  { name: "LevelTen", x: 20, y: 40, z: 100, funding: "$40M", color: "hsl(170, 50%, 45%)", status: "Series B", moat: "PPA marketplace only" },
];

/* ── Feature comparison (honest: Built / Building / Roadmap) ── */
const features = [
  "Energy Intelligence", "AI Forecasting", "Digital Twins", "Marketplace",
  "Community Layer", "ESG Compliance", "PPA/VPPA Execution", "Tokenization",
];

type Status = "built" | "building" | "roadmap" | "none";

const compMatrix: { name: string; row: Status[] }[] = [
  { name: "EcoGridia",    row: ["built","built","building","built","built","building","built","roadmap"] },
  { name: "Arcadia",      row: ["none","none","none","built","built","built","none","none"] },
  { name: "Watershed",    row: ["none","none","none","none","none","built","none","none"] },
  { name: "Tem",          row: ["built","built","none","none","none","none","none","none"] },
  { name: "GridBeyond",   row: ["built","built","none","none","none","none","none","none"] },
  { name: "Aurora Solar", row: ["built","building","none","none","none","none","none","none"] },
];

const statusStyle: Record<Status, { bg: string; text: string; label: string }> = {
  built:    { bg: "bg-primary",      text: "text-primary-foreground", label: "Built" },
  building: { bg: "bg-amber-400",    text: "text-amber-900",         label: "Building" },
  roadmap:  { bg: "bg-muted",        text: "text-muted-foreground",  label: "Roadmap" },
  none:     { bg: "bg-transparent",  text: "text-muted-foreground/40", label: "—" },
};

/* ── Custom tooltip ── */
const BubbleTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-background border border-border rounded-lg px-3 py-2 shadow-lg text-[11px] max-w-[200px]">
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
          <p className="text-[14px] text-muted-foreground mt-0.5">Platform breadth × market focus — bubble size = funding raised</p>
        </div>

        {/* Main: Bubble Chart + Matrix */}
        <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">

          {/* Bubble Chart */}
          <div className="rounded-xl border border-border/40 bg-white shadow-sm p-3 animate-fade-in flex flex-col" style={{ animationDelay: "0.05s" }}>
            <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Market Positioning Map</div>
            <div className="flex-1 min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart margin={{ top: 10, right: 15, bottom: 25, left: 10 }}>
                  <XAxis type="number" dataKey="x" domain={[0, 100]} tick={{ fontSize: 10 }} tickLine={false} axisLine={{ stroke: "#e5e7eb" }}>
                    <Label value="Platform Breadth →" position="bottom" offset={5} style={{ fontSize: 10, fill: "#94a3b8" }} />
                  </XAxis>
                  <YAxis type="number" dataKey="y" domain={[0, 100]} tick={{ fontSize: 10 }} tickLine={false} axisLine={{ stroke: "#e5e7eb" }}>
                    <Label value="Market Traction →" angle={-90} position="left" offset={-2} style={{ fontSize: 10, fill: "#94a3b8" }} />
                  </YAxis>
                  <ZAxis type="number" dataKey="z" range={[300, 3000]} />
                  <ReferenceLine x={50} stroke="#e5e7eb" strokeDasharray="4 4" />
                  <ReferenceLine y={50} stroke="#e5e7eb" strokeDasharray="4 4" />
                  <Tooltip content={<BubbleTooltip />} />
                  <Scatter data={competitors}>
                    {competitors.map((c, i) => (
                      <Cell key={i} fill={c.color} fillOpacity={c.name === "EcoGridia" ? 0.9 : 0.5} stroke={c.name === "EcoGridia" ? c.color : "transparent"} strokeWidth={c.name === "EcoGridia" ? 3 : 0} />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
            </div>
            {/* Legend */}
            <div className="flex flex-wrap gap-2 mt-1 justify-center">
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
                              <span className="text-muted-foreground/30 text-[10px]">—</span>
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
              {(["built", "building", "roadmap"] as Status[]).map((s) => (
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
