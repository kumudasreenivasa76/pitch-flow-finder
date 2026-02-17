import SlideLayout from "../SlideLayout";
import { useState } from "react";
import { BarChart3, Brain, Wrench, Zap, Shield, Building2, ChevronRight, ArrowRight } from "lucide-react";

const layers = [
  {
    id: "L1",
    title: "Intelligence & Forecasting",
    subtitle: "Assess + Predict",
    color: "bg-primary",
    products: "DataFlux™ + GridVision AI™",
    icon: Brain,
    features: [
      {
        name: "Energy & Carbon Baseline Engine",
        items: [
          "Utility + interval load ingestion",
          "Energy mix breakdown (Grid / PPA / Onsite)",
          "Carbon intensity (location & market-based)",
          "Renewable coverage % tracking",
          "Renewable deficit identification",
          "Peak load & seasonal mapping",
          "24/7 hourly renewable matching gap analysis",
        ],
      },
      {
        name: "AI Forecast & Scenario Modeling",
        items: [
          "3–10 year load forecasting",
          "Hyperscale ramp modeling",
          "PPA impact & battery storage modeling",
          "Hybrid energy mix optimization",
          "Net-zero pathway simulation",
          "Capex vs Opex projections",
          "Energy price sensitivity analysis",
        ],
      },
    ],
    outputs: ["Current State Baseline", "Future Demand Model", "Renewable Procurement Strategy"],
  },
  {
    id: "L2",
    title: "Execution & Optimization",
    subtitle: "Plan + Deploy + Optimize",
    color: "bg-eco-teal",
    products: "EcoGridia Nexus™ + GridVision AI™",
    icon: Wrench,
    features: [
      {
        name: "Renewable Project Execution",
        items: [
          "Onsite solar feasibility analysis",
          "Offsite renewable sourcing",
          "EPC & vendor coordination",
          "Incentive stacking (IRA, state, utility)",
          "Financial feasibility & IRR modeling",
          "Milestone tracking & commissioning",
          "Compliance checklist automation",
        ],
      },
      {
        name: "Operational Optimization",
        items: [
          "Live load vs renewable tracking",
          "Curtailment detection & alerts",
          "Predictive maintenance analytics",
          "Solar production forecasting",
          "Efficiency benchmarking",
          "Energy cost optimization insights",
        ],
      },
    ],
    outputs: ["Executable Renewable Energy Plan", "Optimized Renewable Performance", "Operational Efficiency Gains"],
  },
  {
    id: "L3",
    title: "Certification, Carbon & Governance",
    subtitle: "Certify + Report + Scale",
    color: "bg-eco-emerald",
    products: "CertiChain™ + CarbonSphere™ + PortfolioCommand™",
    icon: Shield,
    features: [
      {
        name: "Renewable Certificate Infrastructure",
        items: [
          "REC issuance & serial number tracking",
          "Geographic & vintage matching",
          "Hourly matching readiness",
          "Automated transfer & retirement logging",
          "Double-claim prevention safeguards",
        ],
      },
      {
        name: "Carbon & ESG Intelligence",
        items: [
          "Scope 1, 2, 3 automation",
          "Market vs location-based reporting",
          "Carbon intensity per MWh tracking",
          "Net-zero target tracking",
          "SEC-ready reporting exports",
        ],
      },
      {
        name: "Multi-Site Portfolio Control",
        items: [
          "Cross-site benchmarking",
          "Portfolio rollups & consolidated reporting",
          "Role-based access control",
          "Executive board dashboards",
        ],
      },
    ],
    outputs: ["Verified Renewable Energy Claims", "Compliance-Ready ESG Reporting", "Unified Sustainability Command Center"],
  },
];

const phases = ["Assess", "Forecast", "Deploy", "Optimize", "Certify", "Report", "Scale"];

const SlideLayers = () => {
  const [selected, setSelected] = useState(0);
  const l = layers[selected];
  const Icon = l.icon;

  return (
    <SlideLayout>
      <div className="flex h-full">
        {/* Left sidebar */}
        <div className="w-[520px] shrink-0 flex flex-col bg-card/40 border-r border-border/30">
          <div className="px-8 pt-8 pb-5 shrink-0 border-b border-border/20">
            <div className="flex items-center gap-4 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <BarChart3 className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h2 className="text-[36px] font-extrabold text-foreground leading-none">
                  3-Layer <span className="text-primary">Architecture</span>
                </h2>
                <p className="text-[16px] text-muted-foreground mt-1">Sustainability Intelligence Stack</p>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center gap-3 px-5 py-4">
            {layers.map((layer, i) => {
              const LIcon = layer.icon;
              const isActive = selected === i;
              return (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  className={`flex items-center gap-4 px-5 py-5 rounded-2xl text-left transition-all duration-300 opacity-0 animate-fade-in ${
                    isActive
                      ? "bg-primary/10 border-2 border-primary/30 shadow-lg shadow-primary/5"
                      : "bg-transparent border-2 border-transparent hover:bg-card hover:border-border/30"
                  }`}
                  style={{ animationDelay: `${0.08 + i * 0.06}s`, animationFillMode: "forwards" }}
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isActive ? `${layer.color} text-primary-foreground shadow-md` : "bg-secondary text-muted-foreground"
                  }`}>
                    <LIcon className="w-7 h-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className={`text-[13px] font-bold uppercase tracking-wider ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                      {layer.id}
                    </span>
                    <p className={`text-[18px] font-bold leading-tight transition-colors ${isActive ? "text-primary" : "text-foreground"}`}>
                      {layer.title}
                    </p>
                    <p className="text-[13px] text-muted-foreground mt-0.5">{layer.subtitle}</p>
                  </div>
                  <ChevronRight className={`w-5 h-5 shrink-0 transition-all duration-300 ${isActive ? "text-primary translate-x-1" : "text-muted-foreground/40"}`} />
                </button>
              );
            })}
          </div>

          {/* Lifecycle flow bar */}
          <div className="px-6 pb-6 shrink-0">
            <div className="p-3 rounded-xl bg-card border border-border/30">
              <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-2 text-center">Enterprise Lifecycle</p>
              <div className="flex items-center justify-center gap-1">
                {phases.map((p, i) => (
                  <div key={p} className="flex items-center gap-1">
                    <span className="text-[11px] font-semibold text-primary">{p}</span>
                    {i < phases.length - 1 && <ArrowRight className="w-3 h-3 text-muted-foreground/40" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right detail panel */}
        <div className="flex-1 flex items-center justify-center px-10 overflow-hidden" key={selected}>
          <div className="w-full max-w-[1200px]">
            {/* Header */}
            <div className="animate-fade-in">
              <div className="flex items-center gap-4">
                <div className={`w-[52px] h-[52px] rounded-2xl ${l.color} flex items-center justify-center text-primary-foreground shadow-lg`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-[12px] text-muted-foreground font-mono">Layer {l.id}</span>
                  <h3 className="text-[26px] font-extrabold text-foreground leading-tight">{l.title}</h3>
                  <p className="text-[14px] text-primary font-semibold">{l.products}</p>
                </div>
              </div>
            </div>

            {/* Feature stacks in columns */}
            <div className={`mt-5 grid gap-4 animate-fade-in ${l.features.length === 3 ? "grid-cols-3" : "grid-cols-2"}`} style={{ animationDelay: "0.1s" }}>
              {l.features.map((feat, fi) => (
                <div
                  key={fi}
                  className="rounded-xl bg-card border border-border/30 p-4 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.12 + fi * 0.08}s`, animationFillMode: "forwards" }}
                >
                  <h4 className="text-[13px] font-bold text-primary uppercase tracking-wider mb-3">{feat.name}</h4>
                  <div className="space-y-1.5">
                    {feat.items.map((item, ii) => (
                      <div key={ii} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-[7px] shrink-0" />
                        <span className="text-[13px] text-foreground leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Outputs */}
            <div className="mt-4 p-4 rounded-2xl bg-primary/[0.05] border border-primary/20 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <span className="text-[12px] font-bold text-primary uppercase tracking-wider">✓ Layer Output</span>
              <div className="flex flex-wrap gap-3 mt-2">
                {l.outputs.map((o, oi) => (
                  <span key={oi} className="text-[14px] font-medium text-foreground bg-primary/10 px-3 py-1 rounded-full">
                    {o}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default SlideLayers;
