import SlideLayout from "../SlideLayout";
import { useState } from "react";
import { Cloud, Cpu, ShieldCheck, ChevronRight, ArrowRight, Layers } from "lucide-react";

const layers = [
  {
    id: "L1",
    label: "GREEN INFRASTRUCTURE CLOUD™",
    subtitle: "Discover → Design → Build",
    color: "bg-primary",
    textColor: "text-primary",
    icon: Cloud,
    products: [
      { num: "01", name: "TerraScan™", role: "Site Feasibility", output: "Feasibility Report + Capacity Estimate" },
      { num: "02", name: "HelioTwin™", role: "3D Solar Modeling", output: "Projected kWh/year + Performance Ratio" },
      { num: "03", name: "CarbonX-Ray™", role: "Baseline Carbon Audit", output: "Carbon Baseline Report" },
      { num: "04", name: "CapStruct™", role: "Financial Structuring", output: "Financial Feasibility & Investment Plan" },
      { num: "05", name: "SolarForge™", role: "Project Execution", output: "Live Solar Asset" },
      { num: "06", name: "GridLink™", role: "Utility Integration", output: "Operational Renewable Flow" },
      { num: "07", name: "EcoMarket™", role: "Vendor Management", output: "Operational Stability" },
    ],
  },
  {
    id: "L2",
    label: "ENERGY INTELLIGENCE OS™",
    subtitle: "Monitor → Optimize → Predict",
    color: "bg-eco-teal",
    textColor: "text-eco-teal",
    icon: Cpu,
    products: [
      { num: "08", name: "VoltIQ™", role: "Real-Time Energy Dashboard", output: "Energy Performance Dashboard" },
      { num: "09", name: "WattWise AI™", role: "Optimization Engine", output: "Improved Efficiency + Lower Bills" },
    ],
  },
  {
    id: "L3",
    label: "CARBON & COMPLIANCE EXCHANGE™",
    subtitle: "Monetize → Report → Prove",
    color: "bg-eco-emerald",
    textColor: "text-eco-emerald",
    icon: ShieldCheck,
    products: [
      { num: "10", name: "RECMatrix™", role: "REC Management", output: "REC Revenue Opportunity" },
      { num: "11", name: "CarbonLedger™", role: "Carbon Accounting", output: "Carbon Asset Report" },
      { num: "12", name: "NetZero Navigator™", role: "Target Tracking", output: "Net-Zero Progress Dashboard" },
      { num: "13", name: "GreenBoard™", role: "Executive View", output: "Board-Ready Summary" },
      { num: "14", name: "ComplySphere™", role: "ESG Reporting", output: "Compliance Report" },
      { num: "15", name: "AuditTrail360™", role: "Audit Vault", output: "Verified Sustainability Record" },
    ],
  },
];

const phases = ["Discover", "Design", "Build", "Monitor", "Optimize", "Certify", "Report", "Scale"];

const Slide05Platform = () => {
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
                  Three-Layer <span className="text-primary">Platform</span>
                </h2>
                <p className="text-[14px] text-muted-foreground mt-1">15 Integrated Products · Full Clean Energy Stack</p>
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
                    <p className={`text-[15px] font-bold leading-tight transition-colors ${isActive ? "text-primary" : "text-foreground"}`}>
                      {layer.label}
                    </p>
                    <p className="text-[12px] text-muted-foreground mt-0.5">{layer.subtitle}</p>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-all duration-300 ${isActive ? "text-primary translate-x-1" : "text-muted-foreground/40"}`} />
                </button>
              );
            })}
          </div>

          {/* Lifecycle flow bar */}
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

            {/* Products grid */}
            <div className="grid grid-cols-2 gap-3 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              {l.products.map((p, pi) => (
                <div
                  key={pi}
                  className="rounded-xl bg-card border border-border/30 p-4 opacity-0 animate-fade-in hover:border-primary/30 hover:shadow-md transition-all"
                  style={{ animationDelay: `${0.12 + pi * 0.05}s`, animationFillMode: "forwards" }}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full font-mono">{p.num}</span>
                    <span className="text-[15px] font-bold text-foreground">{p.name}</span>
                  </div>
                  <p className="text-[12px] text-muted-foreground mb-2">{p.role}</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-[11px] text-primary font-medium leading-snug">{p.output}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Product count */}
            <div className="mt-4 p-3 rounded-xl bg-primary/[0.05] border border-primary/20 animate-fade-in flex items-center gap-3" style={{ animationDelay: "0.35s" }}>
              <span className="text-[12px] font-bold text-primary uppercase tracking-wider">✓ {l.products.length} Integrated Products</span>
              <span className="text-[12px] text-muted-foreground">— {l.subtitle}</span>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide05Platform;
