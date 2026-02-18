import SlideLayout from "../SlideLayout";
import { useState } from "react";
import { Wrench, Brain, ShoppingCart, ChevronRight } from "lucide-react";

const layers = [
  {
    icon: Brain,
    layer: "L1",
    title: "Intelligence & Forecasting",
    color: "bg-primary",
    colorLight: "bg-primary/10",
    desc: "AI-powered analytics, energy baseline assessment, demand forecasting, and scenario modeling for strategic renewable planning.",
    users: ["Enterprises", "Data Centers", "Consultants"],
    value: "Real-time insights and predictive intelligence across all operations",
    products: "DataFlux™ + GridVision AI™",
  },
  {
    icon: Wrench,
    layer: "L2",
    title: "Execution & Optimization",
    color: "bg-eco-teal",
    colorLight: "bg-eco-teal/10",
    desc: "End-to-end renewable project execution, vendor coordination, incentive stacking, and operational performance optimization.",
    users: ["Site Managers", "EPCs", "Vendors"],
    value: "Automated project lifecycle from feasibility to commissioning",
    products: "EcoGridia Nexus™ + GridVision AI™",
  },
  {
    icon: ShoppingCart,
    layer: "L3",
    title: "Certification & Governance",
    color: "bg-eco-emerald",
    colorLight: "bg-eco-emerald/10",
    desc: "REC management, carbon accounting, ESG compliance reporting, and multi-site portfolio command center.",
    users: ["Regulators", "Investors", "Executives"],
    value: "Audit-ready compliance and enterprise-wide sustainability governance",
    products: "CertiChain™ + CarbonSphere™ + PortfolioCommand™",
  },
];

const Slide05Platform = () => {
  const [selected, setSelected] = useState(0);
  const l = layers[selected];
  const Icon = l.icon;

  return (
    <SlideLayout>
      <div className="flex flex-col h-full px-20 py-14">
        {/* Header */}
        <div className="flex items-center gap-4 mb-2 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
          <div className="section-line" />
          <h2 className="text-[44px] font-extrabold text-foreground leading-none">
            Three-Layer <span className="gradient-text">Platform</span>
          </h2>
        </div>
        <p className="text-[20px] text-muted-foreground mb-10 ml-[60px] opacity-0 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
          Full-stack infrastructure for the clean energy economy
        </p>

        <div className="flex gap-8 flex-1">
          {/* Layer selector - vertical tabs */}
          <div className="flex flex-col gap-4 w-[380px] shrink-0">
            {layers.map((layer, i) => {
              const LIcon = layer.icon;
              const isActive = selected === i;
              return (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  className={`flex items-center gap-4 px-6 py-6 rounded-2xl text-left transition-all duration-400 opacity-0 animate-fade-in flex-1 ${
                    isActive
                      ? "bg-primary/10 border-2 border-primary/30 shadow-xl shadow-primary/5"
                      : "bg-card/60 border-2 border-transparent hover:bg-card hover:border-border/40"
                  }`}
                  style={{ animationDelay: `${0.1 + i * 0.08}s`, animationFillMode: "forwards" }}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isActive ? `${layer.color} text-primary-foreground shadow-lg` : "bg-secondary text-muted-foreground"
                  }`}>
                    <LIcon className="w-8 h-8" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className={`text-[13px] font-bold uppercase tracking-wider ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                      {layer.layer}
                    </span>
                    <p className={`text-[20px] font-bold leading-tight transition-colors ${isActive ? "text-foreground" : "text-foreground/80"}`}>
                      {layer.title}
                    </p>
                  </div>
                  <ChevronRight className={`w-5 h-5 shrink-0 transition-all duration-300 ${isActive ? "text-primary translate-x-1" : "text-muted-foreground/30"}`} />
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="flex-1 flex flex-col justify-center" key={selected}>
            <div className="animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-[60px] h-[60px] rounded-2xl ${l.color} flex items-center justify-center text-primary-foreground shadow-xl`}>
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[13px] text-muted-foreground font-mono">{l.layer} — {l.products}</span>
                  <h3 className="text-[32px] font-extrabold text-foreground leading-tight">{l.title}</h3>
                </div>
              </div>

              <p className="text-[18px] text-muted-foreground leading-relaxed mb-8 max-w-[800px]">{l.desc}</p>

              <div className="grid grid-cols-2 gap-5 mb-6">
                <div className="p-6 rounded-2xl bg-card border border-border/40">
                  <span className="text-[12px] font-bold text-primary uppercase tracking-widest">Target Users</span>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {l.users.map((u) => (
                      <span key={u} className="text-[14px] font-medium bg-primary/10 text-primary px-4 py-1.5 rounded-full">{u}</span>
                    ))}
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border/40">
                  <span className="text-[12px] font-bold text-primary uppercase tracking-widest">Core Value</span>
                  <p className="text-[16px] text-foreground mt-3 leading-relaxed font-medium">{l.value}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-primary/[0.05] border border-primary/20">
                <span className="text-[12px] font-bold text-primary uppercase tracking-wider">✓ Products</span>
                <p className="text-[16px] text-foreground mt-1 font-semibold">{l.products}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide05Platform;
