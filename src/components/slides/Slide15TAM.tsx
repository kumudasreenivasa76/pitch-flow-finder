import SlideLayout from "../SlideLayout";
import { useState } from "react";

const segments = [
  { name: "Clean Energy Infrastructure", value: "$50B", detail: "Solar, wind, and hybrid installation management, monitoring, and optimization across commercial and institutional sectors." },
  { name: "Energy Trading & Markets", value: "$25B", detail: "Marketplace for verified energy units, PPAs, RECs, and carbon credits with real-time settlement." },
  { name: "ESG & Compliance", value: "$15B", detail: "Automated regulatory compliance, carbon accounting, and ESG reporting for enterprises and institutions." },
  { name: "Community Energy", value: "$10B", detail: "Fractional ownership, shared solar programs, and community-based clean energy participation platforms." },
];

const Slide15TAM = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <SlideLayout>
      <div className="flex flex-col h-full px-20 py-16">
        <h2 className="text-5xl font-bold text-foreground mb-2 animate-fade-in">
          TAM / SAM / <span className="text-primary">SOM</span>
        </h2>
        <p className="text-2xl text-muted-foreground mb-10">$100B+ total addressable market across four segments.</p>

        <div className="grid grid-cols-2 gap-8 flex-1">
          {/* Segments */}
          <div className="space-y-4">
            {segments.map((s, i) => (
              <button
                key={i}
                onClick={() => setExpanded(expanded === i ? null : i)}
                className={`w-full text-left rounded-xl border p-6 transition-all ${
                  expanded === i ? "bg-primary/5 border-primary" : "bg-card border-border hover:border-primary/40"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold text-foreground">{s.name}</span>
                  <span className="text-2xl font-bold text-primary">{s.value}</span>
                </div>
                {expanded === i && (
                  <p className="mt-3 text-lg text-muted-foreground animate-fade-in">{s.detail}</p>
                )}
              </button>
            ))}
            <div className="rounded-xl bg-primary/10 p-6 text-center">
              <span className="text-2xl text-muted-foreground">Total TAM: </span>
              <span className="text-4xl font-bold text-primary">$100B+</span>
            </div>
          </div>

          {/* Funnel */}
          <div className="flex flex-col items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {[
              { label: "TAM", value: "$100B+", width: "w-full", bg: "bg-primary/10 border-primary/20" },
              { label: "SAM", value: "$25B", width: "w-4/5", bg: "bg-primary/20 border-primary/30" },
              { label: "SOM (Y5)", value: "$60M ARR", width: "w-3/5", bg: "bg-primary/40 border-primary/50" },
            ].map((f) => (
              <div key={f.label} className={`${f.width} ${f.bg} border-2 rounded-2xl py-8 text-center`}>
                <div className="text-lg font-semibold text-muted-foreground">{f.label}</div>
                <div className="text-4xl font-bold text-foreground">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide15TAM;
