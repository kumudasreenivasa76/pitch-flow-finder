import SlideLayout from "../SlideLayout";
import { useState } from "react";

const features = [
  { num: "01", title: "Asset Digitization", desc: "Convert physical energy assets into digital twins with real-time monitoring, performance tracking, and automated maintenance scheduling." },
  { num: "02", title: "Digital Twin", desc: "Create virtual replicas of energy installations for simulation, optimization, and predictive maintenance across the entire portfolio." },
  { num: "03", title: "AI Forecasting", desc: "Machine learning models that predict energy output, demand patterns, and pricing with 95%+ accuracy across weather conditions." },
  { num: "04", title: "Project SaaS", desc: "End-to-end project management from site assessment and permitting to installation, commissioning, and ongoing operations." },
  { num: "05", title: "VoltIQ", desc: "Proprietary energy intelligence engine that optimizes dispatch, storage, and grid interaction for maximum revenue and efficiency." },
  { num: "06", title: "Energy Units", desc: "Tokenized, verified energy units that can be traded, retired, or used for compliance — creating a liquid clean energy market." },
  { num: "07", title: "Compliance Engine", desc: "Automated regulatory compliance across 50+ jurisdictions with real-time ESG reporting and carbon accounting." },
  { num: "08", title: "Settlement Layer", desc: "Instant, transparent settlement for energy transactions with full audit trail and multi-currency support." },
  { num: "09", title: "Dashboards", desc: "Role-specific dashboards for every stakeholder — from site operators to C-suite executives to government regulators." },
];

const Slide06Features = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <SlideLayout>
      <div className="flex flex-col h-full px-20 py-16">
        <h2 className="text-5xl font-bold text-foreground mb-2 animate-fade-in">
          <span className="text-primary">9</span> Core Features
        </h2>
        <p className="text-2xl text-muted-foreground mb-10">Everything institutions need to run clean energy at scale.</p>

        <div className="grid grid-cols-3 gap-5 flex-1">
          {features.map((f, i) => (
            <button
              key={i}
              onClick={() => setExpanded(expanded === i ? null : i)}
              className={`text-left rounded-xl border p-6 transition-all duration-300 ${
                expanded === i ? "bg-primary/5 border-primary shadow-lg" : "bg-card border-border hover:border-primary/40"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl font-bold text-primary">{f.num}</span>
                <h3 className="text-xl font-semibold text-foreground">{f.title}</h3>
              </div>
              {expanded === i && (
                <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in">{f.desc}</p>
              )}
            </button>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide06Features;
