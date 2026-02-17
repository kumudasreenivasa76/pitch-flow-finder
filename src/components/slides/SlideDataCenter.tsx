import { useState } from "react";
import SlideLayout from "../SlideLayout";
import { Server, BarChart3, Cpu, Sun, Calculator, Leaf, Monitor, ShieldCheck, X } from "lucide-react";
import datacenterImg from "@/assets/datacenter-flow-3d.png";

const steps = [
  {
    id: 0,
    icon: Server,
    label: "DC Onboarding",
    top: "12%", left: "5%",
    details: [
      "Facility details: MW capacity, region, cooling type",
      "API integrations: Smart meters, BMS, DCIM",
      "Cloud providers: AWS, Azure, GCP",
      "Utility bill ingestion & 15-min data streaming",
    ],
    output: "Live energy & emissions data dashboard",
    stat: "15 min",
    statLabel: "Real-time streaming",
  },
  {
    id: 1,
    icon: BarChart3,
    label: "Carbon Baseline",
    top: "5%", left: "28%",
    details: [
      "PUE, WUE, CUE effectiveness metrics",
      "Scope 1/2/3 emissions calculation",
      "Generator & cooling emissions breakdown",
      "Compliance gap analysis (CSRD, SEC, SECR)",
    ],
    output: "Carbon Baseline Report + 3-year decarbonization roadmap",
    stat: "Scope 1-3",
    statLabel: "Full emissions map",
  },
  {
    id: 2,
    icon: Cpu,
    label: "OptiCore AI",
    top: "5%", left: "58%",
    details: [
      "Cooling: thermal AI, liquid cooling, free-air modeling",
      "Power: UPS efficiency, battery comparison, load shifting",
      "IT: virtualization, zombie server detection",
      "Workload carbon scoring & ROI-ranked plan",
    ],
    output: "Capex vs Opex model + savings forecast",
    stat: "30%+",
    statLabel: "Avg efficiency gain",
  },
  {
    id: 3,
    icon: Sun,
    label: "RenewLink",
    top: "38%", left: "15%",
    details: [
      "On-site: solar feasibility, battery, microgrid design",
      "Off-site: VPPA negotiation, REC/I-REC procurement",
      "Hybrid: solar+wind mix, 24/7 carbon matching",
      "Financial model + contract negotiation support",
    ],
    output: "Renewable Procurement Plan with financial model",
    stat: "24/7",
    statLabel: "Carbon matching",
  },
  {
    id: 4,
    icon: Calculator,
    label: "ResidualCalc",
    top: "38%", left: "42%",
    details: [
      "Post-efficiency remaining emissions calculated",
      "Post-renewables residual carbon quantified",
      "Offset requirement automatically determined",
      "Gap-to-zero pathway generated",
    ],
    output: "Exact residual carbon requiring offset",
    stat: "Auto",
    statLabel: "Real-time calculation",
  },
  {
    id: 5,
    icon: Leaf,
    label: "CarbonVault",
    top: "38%", left: "65%",
    details: [
      "Marketplace: nature-based, engineered removals",
      "Verra / Gold Standard verification",
      "Enterprise investment: equity in solar/wind farms",
      "Blockchain retirement tracking & certificates",
    ],
    output: "Verified retirement certificates + ESG documentation",
    stat: "$50B",
    statLabel: "Carbon market by 2030",
  },
  {
    id: 6,
    icon: Monitor,
    label: "GridView SaaS",
    top: "62%", left: "28%",
    details: [
      "Ops: live kWh, PUE, renewable %, carbon/workload",
      "Investor: project ROI, credit accrual, risk scoring",
      "Developer: certification tracking, fundraising pipeline",
      "AI predictive forecast + anomaly detection",
    ],
    output: "Three dashboards: Operations, Investor, Developer",
    stat: "3 Views",
    statLabel: "Real-time dashboards",
  },
  {
    id: 7,
    icon: ShieldCheck,
    label: "ComplianceOS",
    top: "62%", left: "60%",
    details: [
      "One-click: SECR, ESOS, CSRD, SEC, CDP reports",
      "Scope 1/2/3 auto-fill from live data",
      "Double materiality analysis",
      "Blockchain credit traceability & audit trail",
    ],
    output: "Regulatory-ready compliance exports",
    stat: "5+",
    statLabel: "Frameworks covered",
  },
];

const SlideDataCenter = () => {
  const [active, setActive] = useState<number | null>(null);
  const activeData = active !== null ? steps[active] : null;

  return (
    <SlideLayout>
      <div className="relative w-full h-full overflow-hidden">
        {/* Header */}
        <div className="absolute top-6 left-8 right-8 z-20 flex items-center gap-4 animate-fade-in">
          <span className="text-sm font-bold text-primary-foreground bg-primary px-4 py-1.5 rounded-full shadow-lg">Data Center</span>
          <h2 className="text-3xl font-bold text-foreground drop-shadow-sm">End-to-End Customer Journey</h2>
          <span className="ml-auto text-sm text-muted-foreground bg-card/80 backdrop-blur px-3 py-1 rounded-full border border-border/50">
            Click any step to explore
          </span>
        </div>

        {/* Background image */}
        <div className="absolute inset-0">
          <img src={datacenterImg} alt="Data Center 3D ecosystem" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/30" />
        </div>

        {/* Hotspots */}
        {steps.map((s, i) => {
          const Icon = s.icon;
          const isActive = active === i;
          return (
            <button
              key={s.id}
              onClick={() => setActive(isActive ? null : i)}
              className="absolute z-30 group transition-all duration-500 animate-fade-in"
              style={{
                top: s.top, left: s.left,
                animationDelay: `${0.3 + i * 0.08}s`,
                animationFillMode: "forwards",
                opacity: 0,
              }}
            >
              <span
                className={`absolute -inset-3 rounded-full animate-ping ${isActive ? "bg-primary/30" : "bg-primary/10"}`}
                style={{ animationDuration: "2.5s" }}
              />
              <div className={`relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl backdrop-blur-md border shadow-xl transition-all duration-300 cursor-pointer
                ${isActive
                  ? "bg-primary text-primary-foreground border-primary/50 scale-110 shadow-primary/30"
                  : "bg-card/90 text-foreground border-border/60 hover:bg-card hover:border-primary/40 hover:scale-105 hover:shadow-primary/15"
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors
                  ${isActive ? "bg-primary-foreground/20" : "bg-primary/10"}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-mono opacity-60">Step {i + 1}</span>
                  <p className="text-sm font-bold leading-tight">{s.label}</p>
                </div>
              </div>
            </button>
          );
        })}

        {/* Detail panel */}
        {activeData && (
          <div className="absolute right-6 top-16 bottom-6 w-[420px] z-40 rounded-2xl bg-card/95 backdrop-blur-xl border border-primary/20 shadow-2xl shadow-primary/10 p-7 flex flex-col animate-slide-in-right">
            <button onClick={() => setActive(null)} className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-muted transition-colors">
              <X className="w-5 h-5 text-muted-foreground" />
            </button>

            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
                {(() => { const Icon = activeData.icon; return <Icon className="w-7 h-7" />; })()}
              </div>
              <div>
                <span className="text-sm text-muted-foreground font-mono">Step {activeData.id + 1} of 8</span>
                <h3 className="text-2xl font-bold text-foreground">{activeData.label}</h3>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/[0.06] border border-primary/15 mb-5">
              <span className="text-3xl font-black text-primary">{activeData.stat}</span>
              <span className="text-sm text-muted-foreground">{activeData.statLabel}</span>
            </div>

            <div className="flex-1 space-y-2.5 overflow-y-auto">
              {activeData.details.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg bg-background/60 border border-border/30 animate-fade-in"
                  style={{ animationDelay: `${idx * 0.06}s`, animationFillMode: "forwards", opacity: 0 }}
                >
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-sm text-foreground leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3.5 rounded-xl bg-primary/10 border border-primary/20 shrink-0">
              <span className="text-xs font-bold text-primary uppercase tracking-wide">Output →</span>
              <p className="text-sm text-foreground mt-1">{activeData.output}</p>
            </div>

            <div className="flex items-center justify-center gap-2 mt-4">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setActive(i); }}
                  className={`rounded-full transition-all ${i === active ? "w-6 h-2 bg-primary" : "w-2 h-2 bg-muted-foreground/25 hover:bg-muted-foreground/50"}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </SlideLayout>
  );
};

export default SlideDataCenter;
