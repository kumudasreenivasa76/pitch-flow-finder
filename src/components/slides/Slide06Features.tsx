import SlideLayout from "../SlideLayout";
import { useState } from "react";
import { BarChart3, Brain, Wrench, Zap, Shield, Building2, ChevronRight } from "lucide-react";

const products = [
  {
    icon: BarChart3,
    name: "DataFlux™",
    tagline: "Energy & Carbon Foundation",
    desc: "Utility + interval load integration, energy mix breakdown, carbon intensity calculation, renewable gap identification, and 24/7 hourly matching analysis.",
    layer: "L1",
  },
  {
    icon: Brain,
    name: "GridVision AI™",
    tagline: "AI Forecasting & Optimization",
    desc: "3–10 year load forecasting, hyperscale ramp modeling, PPA & battery storage scenarios, net-zero pathway simulation, and energy price sensitivity analysis.",
    layer: "L1 + L2",
  },
  {
    icon: Wrench,
    name: "EcoGridia Nexus™",
    tagline: "Project Planning & Deployment",
    desc: "Onsite solar feasibility, offsite sourcing, vendor coordination, incentive stacking (IRA, state, utility), financial modeling, and commissioning management.",
    layer: "L2",
  },
  {
    icon: Shield,
    name: "CertiChain™",
    tagline: "Renewable Certificate Management",
    desc: "REC issuance tracking, serial number management, geographic & vintage matching, hourly matching readiness, retirement verification, and double-claim prevention.",
    layer: "L3",
  },
  {
    icon: Zap,
    name: "CarbonSphere™",
    tagline: "Enterprise Carbon Governance",
    desc: "Scope 1, 2, 3 automation, carbon intensity per MWh tracking, net-zero target tracking, emission reduction modeling, and SEC-ready reporting exports.",
    layer: "L3",
  },
  {
    icon: Building2,
    name: "PortfolioCommand™",
    tagline: "Enterprise-Level Control",
    desc: "Cross-site benchmarking, regional performance comparison, portfolio rollups, consolidated carbon reporting, role-based access, and executive dashboards.",
    layer: "L3",
  },
];

const Slide06Features = () => {
  const [selected, setSelected] = useState(0);
  const p = products[selected];
  const Icon = p.icon;

  return (
    <SlideLayout>
      <div className="flex h-full">
        {/* Left sidebar */}
        <div className="w-[520px] shrink-0 flex flex-col bg-card/40 border-r border-border/30">
          <div className="px-8 pt-8 pb-5 shrink-0 border-b border-border/20">
            <div className="flex items-center gap-4 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h2 className="text-[38px] font-extrabold text-foreground leading-none">
                  <span className="text-primary">6</span> Core Products
                </h2>
                <p className="text-[16px] text-muted-foreground mt-1">The EcoGridia product suite</p>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center gap-2 px-5 py-3">
            {products.map((prod, i) => {
              const PIcon = prod.icon;
              const isActive = selected === i;
              return (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  className={`flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-300 opacity-0 animate-fade-in ${
                    isActive
                      ? "bg-primary/10 border-2 border-primary/30 shadow-lg shadow-primary/5"
                      : "bg-transparent border-2 border-transparent hover:bg-card hover:border-border/30"
                  }`}
                  style={{ animationDelay: `${0.08 + i * 0.05}s`, animationFillMode: "forwards" }}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isActive ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" : "bg-secondary text-muted-foreground"
                  }`}>
                    <PIcon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className={`text-[17px] font-bold leading-tight transition-colors ${isActive ? "text-primary" : "text-foreground"}`}>
                        {prod.name}
                      </p>
                      <span className="text-[11px] font-bold text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">{prod.layer}</span>
                    </div>
                    <p className="text-[13px] text-muted-foreground mt-0.5">{prod.tagline}</p>
                  </div>
                  <ChevronRight className={`w-5 h-5 shrink-0 transition-all duration-300 ${isActive ? "text-primary translate-x-1" : "text-muted-foreground/40"}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right detail panel */}
        <div className="flex-1 flex items-center justify-center px-12 pb-16 overflow-hidden" key={selected}>
          <div className="w-full max-w-[1100px]">
            <div className="animate-fade-in">
              <div className="flex items-center gap-4">
                <div className="w-[56px] h-[56px] rounded-2xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
                  <Icon className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <span className="text-[13px] text-muted-foreground font-mono">{p.layer} Product</span>
                  <h3 className="text-[32px] font-extrabold text-foreground leading-tight">{p.name}</h3>
                  <p className="text-[18px] text-primary font-semibold">{p.tagline}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-xl bg-card border border-border/30 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h4 className="text-[13px] font-bold text-muted-foreground uppercase tracking-widest mb-3">Overview</h4>
              <p className="text-[18px] text-foreground leading-relaxed">{p.desc}</p>
            </div>

            <div className="mt-5 p-4 rounded-2xl bg-primary/[0.05] border border-primary/20 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <span className="text-[13px] font-bold text-primary uppercase tracking-wider">✓ Layer Assignment</span>
              <p className="text-[16px] text-foreground mt-2 leading-relaxed font-medium">
                Part of <span className="font-bold text-primary">{p.layer}</span> — {p.layer.includes("1") ? "Intelligence & Forecasting" : p.layer.includes("2") ? "Execution & Optimization" : "Certification, Carbon & Governance"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide06Features;
