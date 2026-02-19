import SlideLayout from "../SlideLayout";
import { useState } from "react";
import { Cloud, Cpu, ShieldCheck, ChevronRight, ArrowRight, Layers } from "lucide-react";

const layers = [
  {
    id: "L1",
    label: "GREEN INFRASTRUCTURE CLOUD™",
    subtitle: "Discover → Design → Build",
    color: "bg-primary",
    icon: Cloud,
    features: [
      {
        name: "Site Discovery & Design",
        items: [
          "TerraScan™ — Rooftop/land identification, MW potential, grid proximity",
          "HelioTwin™ — 3D digital twin, irradiance simulation, shading analysis",
          "CarbonX-Ray™ — Scope 1 & 2 mapping, energy intensity, ESG readiness score",
        ],
      },
      {
        name: "Execution & Integration",
        items: [
          "CapStruct™ — CAPEX/OPEX, IRR/NPV, LCOE, SPV/PPA modeling",
          "SolarForge™ — EPC selection, SLA definition, commissioning verification",
          "GridLink™ — Net metering, grid sync, renewable matching % tracking",
          "EcoMarket™ — O&M tracking, SLA compliance, vendor scorecards",
        ],
      },
    ],
    outputs: ["Feasibility Report + Capacity Estimate", "Projected kWh/year + Performance Ratio", "Carbon Baseline Report", "Financial Feasibility & Investment Plan", "Live Solar Asset"],
  },
  {
    id: "L2",
    label: "ENERGY INTELLIGENCE OS™",
    subtitle: "Monitor → Optimize → Predict",
    color: "bg-eco-teal",
    icon: Cpu,
    features: [
      {
        name: "VoltIQ™ — Real-Time Energy Dashboard",
        items: [
          "Live generation tracking",
          "Consumption vs production comparison",
          "Renewable mix % & grid dependency %",
          "Cost savings visualization",
        ],
      },
      {
        name: "WattWise AI™ — Optimization Engine",
        items: [
          "AI load forecasting",
          "Solar degradation alerts",
          "Peak shaving recommendations",
          "Battery optimization (if installed)",
        ],
      },
    ],
    outputs: ["Energy Performance Dashboard", "Improved Efficiency + Lower Bills"],
  },
  {
    id: "L3",
    label: "CARBON & COMPLIANCE EXCHANGE™",
    subtitle: "Monetize → Report → Prove",
    color: "bg-eco-emerald",
    icon: ShieldCheck,
    features: [
      {
        name: "Certification & Carbon",
        items: [
          "RECMatrix™ — REC tracking, registry integration, inventory dashboard",
          "CarbonLedger™ — Carbon avoided, offset valuation, multi-site aggregation",
          "NetZero Navigator™ — Renewable %, carbon reduction trajectory, gap visualization",
        ],
      },
      {
        name: "Governance & Compliance",
        items: [
          "GreenBoard™ — ROI metrics, renewable performance, ESG score (Board View)",
          "ComplySphere™ — CSRD/SEC exports, CDP-ready files, ISO documentation",
          "AuditTrail360™ — Timestamped logs, smart meter validation, audit archive",
        ],
      },
    ],
    outputs: ["REC Revenue Opportunity", "Carbon Asset Report", "Net-Zero Progress Dashboard", "Compliance-Ready ESG Reporting", "Verified Sustainability Record"],
  },
];

const phases = ["Discover", "Design", "Build", "Monitor", "Optimize", "Certify", "Report", "Scale"];

const SlideLayers = () => {
  const [selected, setSelected] = useState(0);
  const l = layers[selected];
  const Icon = l.icon;

  return (
    <SlideLayout>
      <div className="flex h-full">
        {/* Left sidebar */}
        <div className="w-[480px] shrink-0 flex flex-col bg-card/40 border-r border-border/30">
          <div className="px-7 pt-7 pb-4 shrink-0 border-b border-border/20">
            <div className="flex items-center gap-4 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Layers className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-[32px] font-extrabold text-foreground leading-none">
                  3-Layer <span className="text-primary">Architecture</span>
                </h2>
                <p className="text-[14px] text-muted-foreground mt-1">15 Products · Full-Stack Clean Energy OS</p>
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
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isActive ? `${layer.color} text-primary-foreground shadow-md` : "bg-secondary text-muted-foreground"
                  }`}>
                    <LIcon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className={`text-[11px] font-bold uppercase tracking-wider ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                      Layer {layer.id}
                    </span>
                    <p className={`text-[14px] font-bold leading-tight transition-colors ${isActive ? "text-primary" : "text-foreground"}`}>
                      {layer.label}
                    </p>
                    <p className="text-[12px] text-muted-foreground mt-0.5">{layer.subtitle}</p>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-all duration-300 ${isActive ? "text-primary translate-x-1" : "text-muted-foreground/40"}`} />
                </button>
              );
            })}
          </div>

          {/* Lifecycle flow */}
          <div className="px-5 pb-5 shrink-0">
            <div className="p-3 rounded-xl bg-card border border-border/30">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2 text-center">Project Lifecycle</p>
              <div className="flex items-center justify-center flex-wrap gap-1">
                {phases.map((p, i) => (
                  <div key={p} className="flex items-center gap-1">
                    <span className="text-[10px] font-semibold text-primary">{p}</span>
                    {i < phases.length - 1 && <ArrowRight className="w-2.5 h-2.5 text-muted-foreground/40" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right detail panel */}
        <div className="flex-1 flex items-center justify-center px-8 overflow-hidden" key={selected}>
          <div className="w-full max-w-[700px]">
            {/* Header */}
            <div className="flex items-center gap-4 mb-5 animate-fade-in">
              <div className={`w-12 h-12 rounded-2xl ${l.color} flex items-center justify-center text-primary-foreground shadow-lg`}>
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] text-muted-foreground font-mono uppercase tracking-wider">Layer {l.id}</span>
                <h3 className="text-[22px] font-extrabold text-foreground leading-tight">{l.label}</h3>
                <p className="text-[13px] text-primary font-semibold">{l.subtitle}</p>
              </div>
            </div>

            {/* Feature columns */}
            <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              {l.features.map((feat, fi) => (
                <div
                  key={fi}
                  className="rounded-xl bg-card border border-border/30 p-4 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.12 + fi * 0.08}s`, animationFillMode: "forwards" }}
                >
                  <h4 className="text-[12px] font-bold text-primary uppercase tracking-wider mb-3">{feat.name}</h4>
                  <div className="space-y-2">
                    {feat.items.map((item, ii) => (
                      <div key={ii} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-[6px] shrink-0" />
                        <span className="text-[12px] text-foreground leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Outputs */}
            <div className="mt-4 p-4 rounded-2xl bg-primary/[0.05] border border-primary/20 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <span className="text-[11px] font-bold text-primary uppercase tracking-wider">✓ Layer Outputs</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {l.outputs.map((o, oi) => (
                  <span key={oi} className="text-[11px] font-medium text-foreground bg-primary/10 px-2.5 py-1 rounded-full">
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
