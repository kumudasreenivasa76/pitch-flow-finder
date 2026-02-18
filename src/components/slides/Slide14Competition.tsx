import SlideLayout from "../SlideLayout";

const features = [
  "End-to-End Platform",
  "AI Forecasting",
  "Digital Twins",
  "Marketplace",
  "Community Participation",
  "ESG / Compliance",
  "Multi-Jurisdiction",
  "Energy Tokenization",
  "Vendor Management",
  "Impact Calculator",
  "Settlement Layer",
  "API / Integrations",
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
    <div className="flex flex-col h-full px-20 py-16">
      <h2 className="text-5xl font-bold text-foreground mb-2 animate-fade-in">
        Competitive <span className="text-primary">Comparison</span>
      </h2>
      <p className="text-2xl text-muted-foreground mb-8">The only full-stack platform for distributed clean energy.</p>

      <div className="flex-1 overflow-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b-2 border-border">
              <th className="py-4 px-4 text-lg font-semibold text-foreground w-56">Feature</th>
              {competitors.map((c) => (
                <th key={c.name} className={`py-4 px-4 text-lg font-semibold text-center ${c.name === "EcoGridia" ? "text-primary" : "text-foreground"}`}>
                  {c.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((f, fi) => (
              <tr key={f} className="border-b border-border">
                <td className="py-3 px-4 text-lg text-foreground">{f}</td>
                {competitors.map((c) => (
                  <td key={c.name} className="py-3 px-4 text-center">
                    <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${colors[2 - c.scores[fi]]}`}>
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
      <div className="flex gap-6 mt-6 justify-center">
        {labels.map((l, i) => (
          <div key={l} className="flex items-center gap-2">
            <div className={`w-5 h-5 rounded-full ${colors[i]}`} />
            <span className="text-lg text-muted-foreground">{l}</span>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default Slide14Competition;
