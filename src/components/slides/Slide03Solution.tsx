import SlideLayout from "../SlideLayout";
import { useState } from "react";
import { Workflow, BarChart3, Server, ArrowLeftRight, Activity, Landmark, Lightbulb, ChevronRight } from "lucide-react";

const solutions = [
  {
    num: "01",
    icon: Workflow,
    title: "End-to-End Renewable Infrastructure Execution",
    tagline: "Single orchestration layer",
    bullets: [
      "Feasibility assessment and energy modeling",
      "Incentive identification (IRA + state programs)",
      "Vendor selection from a vetted marketplace",
      "Contract coordination and permitting workflow",
      "Installation oversight and commissioning",
      "Post-installation performance tracking",
    ],
    outcome: "Reduced delays, lower implementation risk, and predictable project delivery.",
  },
  {
    num: "02",
    icon: BarChart3,
    title: "Unified ESG & Carbon Operating System",
    tagline: "One platform for sustainability",
    bullets: [
      "Scope 1, 2, and 3 emissions tracking",
      "Real-time renewable energy percentage tracking",
      "Automated compliance reporting (SEC-ready)",
      "Portfolio-level carbon dashboards",
      "Audit-ready documentation trail",
    ],
    outcome: "Continuous visibility into emissions and simplified compliance management.",
  },
  {
    num: "03",
    icon: Server,
    title: "Data Center Renewable Procurement & Strategy",
    tagline: "Strategic renewable planning",
    bullets: [
      "Renewable gap analysis vs. energy consumption",
      "Structured renewable procurement strategy",
      "REC portfolio management",
      "Carbon offset allocation strategy",
      "Long-term renewable sourcing planning",
    ],
    outcome: "Structured pathway toward 100% renewable operations with measurable impact.",
  },
  {
    num: "04",
    icon: ArrowLeftRight,
    title: "Integrated REC & Carbon Marketplace",
    tagline: "Transparent carbon trading",
    bullets: [
      "Automated REC eligibility tracking",
      "Certificate lifecycle management",
      "Buyer-seller matching",
      "Transaction documentation",
      "Retirement verification for compliance",
    ],
    outcome: "Monetization of renewable energy assets and simplified carbon procurement.",
  },
  {
    num: "05",
    icon: Activity,
    title: "Real-Time Monitoring & Optimization Layer",
    tagline: "Continuous optimization",
    bullets: [
      "Live generation and consumption tracking",
      "Underperformance alerts",
      "Predictive maintenance signals",
      "Portfolio benchmarking across sites",
      "Efficiency optimization recommendations",
    ],
    outcome: "Improved system efficiency, reduced downtime, and maximized energy yield.",
  },
  {
    num: "06",
    icon: Landmark,
    title: "Structured Capital & Incentive Navigation",
    tagline: "Simplified funding access",
    bullets: [
      "Federal IRA credit mapping",
      "State-level incentive identification",
      "Structured financing pathways",
      "Documentation automation",
      "Grant and credit alignment tracking",
    ],
    outcome: "Improved project viability and faster renewable adoption.",
  },
];

const Slide03Solution = () => {
  const [selected, setSelected] = useState(0);
  const s = solutions[selected];
  const Icon = s.icon;

  return (
    <SlideLayout>
      <div className="flex h-full">
        {/* Left sidebar */}
        <div className="w-[580px] shrink-0 flex flex-col bg-card/40 border-r border-border/30">
          <div className="px-10 pt-8 pb-5 shrink-0 border-b border-border/20">
            <div className="flex items-center gap-4 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Lightbulb className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h2 className="text-[40px] font-extrabold text-foreground leading-none">
                  The <span className="text-primary">EcoGridia</span> Solution
                </h2>
                <p className="text-[18px] text-muted-foreground mt-1">6 core solutions, one platform</p>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center gap-1.5 px-5 py-3">
            {solutions.map((sol, i) => {
              const SIcon = sol.icon;
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
                    <SIcon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-[17px] font-bold leading-tight transition-colors ${isActive ? "text-primary" : "text-foreground"}`}>
                      {sol.title}
                    </p>
                    <p className="text-[14px] text-muted-foreground mt-0.5">{sol.tagline}</p>
                  </div>
                  <ChevronRight className={`w-5 h-5 shrink-0 transition-all duration-300 ${isActive ? "text-primary translate-x-1" : "text-muted-foreground/40"}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right detail panel */}
        <div className="flex-1 flex flex-col px-12 pt-7 pb-16 overflow-hidden" key={selected}>
          {/* Header */}
          <div className="shrink-0 animate-fade-in">
            <div className="flex items-center gap-4">
              <div className="w-[56px] h-[56px] rounded-2xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
                <Icon className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <span className="text-[13px] text-muted-foreground font-mono">Solution {s.num} of 06</span>
                <h3 className="text-[28px] font-extrabold text-foreground leading-tight">{s.title}</h3>
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <div className="flex-1 min-h-0 mt-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h4 className="text-[13px] font-bold text-muted-foreground uppercase tracking-widest mb-3">Key Capabilities</h4>
            <div className="space-y-2">
              {s.bullets.map((b, bi) => (
                <div
                  key={bi}
                  className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border/30 hover:border-primary/20 hover:shadow-md transition-all duration-300 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.15 + bi * 0.06}s`, animationFillMode: "forwards" }}
                >
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary text-[14px] font-bold flex items-center justify-center shrink-0">
                    {bi + 1}
                  </span>
                  <span className="text-[15px] text-foreground leading-snug">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Outcome bar */}
          <div className="shrink-0 mt-6 p-4 rounded-2xl bg-primary/[0.05] border border-primary/20 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <span className="text-[13px] font-bold text-primary uppercase tracking-wider">✓ Outcome</span>
            <p className="text-[16px] text-foreground mt-2 leading-relaxed font-medium">{s.outcome}</p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide03Solution;
