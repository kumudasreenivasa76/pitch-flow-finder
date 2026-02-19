import SlideLayout from "../SlideLayout";

const features = [
  "End-to-End Platform", "AI Forecasting", "Digital Twins", "Marketplace",
  "Community Participation", "ESG / Compliance", "Multi-Jurisdiction",
  "Energy Tokenization", "Vendor Management", "Impact Calculator",
  "Settlement Layer", "API / Integrations",
];

const competitors = [
  { name: "EcoGridia", scores: [2,2,2,2,2,2,2,2,2,2,2,2] },
  { name: "Aurora Solar", scores: [1,1,1,0,0,1,0,0,1,1,0,1] },
  { name: "Arcadia", scores: [1,0,0,1,1,1,1,0,0,0,1,1] },
  { name: "LevelTen", scores: [0,0,0,2,0,1,1,0,0,0,1,1] },
  { name: "Omnidian", scores: [1,1,1,0,0,0,0,0,1,0,0,0] },
  { name: "WattBuy", scores: [0,0,0,1,1,0,1,0,0,1,0,0] },
];

const colors = ["bg-primary text-primary-foreground", "bg-primary/30 text-foreground", "bg-muted text-muted-foreground"];
const labels = ["Full", "Partial", "None"];

const Slide14Competition = () => (
  <SlideLayout>
    <div className="relative w-full h-full flex flex-col bg-white overflow-hidden px-14 pt-8 pb-5">
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "60px 60px", opacity: 0.5,
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-4 animate-fade-in">
          <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[13px] font-bold tracking-widest uppercase mb-2">
            Competitive Landscape
          </span>
          <h2 className="text-[40px] font-extrabold text-foreground leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Competitive <span className="text-primary">Comparison</span>
          </h2>
          <p className="text-[15px] text-muted-foreground mt-1">The only full-stack platform for distributed clean energy.</p>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-auto bg-white/80 rounded-2xl border border-border/40 shadow-sm animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="py-3 px-4 text-[13px] font-semibold text-foreground w-48">Feature</th>
                {competitors.map((c) => (
                  <th key={c.name} className={`py-3 px-3 text-[13px] font-semibold text-center ${c.name === "EcoGridia" ? "text-primary" : "text-foreground"}`}>
                    {c.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((f, fi) => (
                <tr key={f} className="border-b border-border/50">
                  <td className="py-2.5 px-4 text-[13px] text-foreground font-medium">{f}</td>
                  {competitors.map((c) => (
                    <td key={c.name} className="py-2.5 px-3 text-center">
                      <span className={`inline-block px-3 py-0.5 rounded-full text-[11px] font-semibold ${colors[2 - c.scores[fi]]}`}>
                        {labels[2 - c.scores[fi]]}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="flex gap-6 mt-4 justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {labels.map((l, i) => (
            <div key={l} className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded-full ${colors[i]}`} />
              <span className="text-[13px] text-muted-foreground">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide14Competition;
