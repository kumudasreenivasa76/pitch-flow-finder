import SlideLayout from "../SlideLayout";
import { useState } from "react";

const solutions = [
  { tab: "Unused → Productive", problem: "Over 40% of renewable capacity sits idle", solution: "AI-powered demand matching and real-time grid optimization that activates every installed watt.", impact: "3x utilization increase" },
  { tab: "Speculative → Pre-Sold", problem: "Energy projects rely on speculative demand forecasts", solution: "Pre-commitment marketplace where demand is locked before infrastructure is built.", impact: "90% pre-sale rate" },
  { tab: "Excluded → Included", problem: "4B+ people locked out of clean energy", solution: "Community participation models with fractional ownership and micro-investment tools.", impact: "10x market expansion" },
  { tab: "Manual → Automated", problem: "Compliance reporting done in spreadsheets", solution: "Automated ESG tracking, carbon accounting, and regulatory compliance engine.", impact: "95% time savings" },
  { tab: "Fragmented → Unified", problem: "Dozens of disconnected tools per project", solution: "Single platform for monitoring, billing, compliance, marketplace, and analytics.", impact: "1 platform, all functions" },
  { tab: "Local → Global", problem: "Solutions limited to single markets", solution: "Multi-jurisdiction framework supporting regulations across 50+ countries.", impact: "Global from day one" },
];

const Slide03Solution = () => {
  const [active, setActive] = useState(0);

  return (
    <SlideLayout>
      <div className="flex flex-col h-full px-20 py-16">
        <h2 className="text-5xl font-bold text-foreground mb-2 animate-fade-in">
          The <span className="text-primary">EcoGridia</span> Solution
        </h2>
        <p className="text-2xl text-muted-foreground mb-10">Every broken piece, rebuilt as software.</p>

        {/* Tabs */}
        <div className="flex gap-3 mb-10 flex-wrap">
          {solutions.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-6 py-3 rounded-xl text-lg font-medium transition-all ${
                active === i ? "bg-primary text-primary-foreground shadow-lg" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {s.tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 bg-card rounded-2xl border border-border p-12 animate-fade-in" key={active}>
          <div className="grid grid-cols-3 gap-12 h-full">
            <div>
              <div className="text-sm font-semibold text-destructive/80 uppercase tracking-wider mb-3">The Problem</div>
              <p className="text-2xl text-foreground leading-relaxed">{solutions[active].problem}</p>
            </div>
            <div>
              <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">EcoGridia Solution</div>
              <p className="text-2xl text-foreground leading-relaxed">{solutions[active].solution}</p>
            </div>
            <div>
              <div className="text-sm font-semibold text-eco-teal uppercase tracking-wider mb-3">Impact</div>
              <p className="text-5xl font-bold text-primary">{solutions[active].impact}</p>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="flex justify-center gap-20 mt-8">
          {["End-to-End Platform", "AI-Powered Intelligence", "Global Compliance"].map((s) => (
            <div key={s} className="flex items-center gap-2 text-xl text-muted-foreground">
              <div className="w-3 h-3 rounded-full bg-primary" />
              {s}
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide03Solution;
