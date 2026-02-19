import { useState } from "react";
import SlideLayout from "../SlideLayout";
import {
  BarChart3, Map, Navigation, Zap, Shield, Clock,
  BookOpen, Award, LayoutDashboard, FileText, Lock, X, ArrowRight
} from "lucide-react";
import datacenterImg from "@/assets/datacenter-flow-3d.png";

const phases = [
  { id: "P1", label: "P1 · Baseline Assessment",   color: "bg-eco-emerald",  textColor: "text-eco-emerald",  bgLight: "bg-eco-emerald/10",  borderColor: "border-eco-emerald/30"  },
  { id: "P2", label: "P2 · Carbon Strategy",        color: "bg-primary",      textColor: "text-primary",      bgLight: "bg-primary/10",      borderColor: "border-primary/30"      },
  { id: "P3", label: "P3 · Dashboard Deploy",       color: "bg-eco-teal",     textColor: "text-eco-teal",     bgLight: "bg-eco-teal/10",     borderColor: "border-eco-teal/30"     },
  { id: "P4", label: "P4 · Offset & REC",           color: "bg-violet-600",   textColor: "text-violet-600",   bgLight: "bg-violet-500/10",   borderColor: "border-violet-500/30"   },
  { id: "P5", label: "P5 · Exec & Compliance",      color: "bg-amber-500",    textColor: "text-amber-600",    bgLight: "bg-amber-500/10",    borderColor: "border-amber-500/30"    },
];

const phaseMap = Object.fromEntries(phases.map(p => [p.id, p]));

const steps = [
  // P1 — Baseline
  {
    id: 0, phase: "P1", icon: BarChart3,
    label: "BaselineIQ™", role: "Energy & Infrastructure Baseline",
    top: "10%", left: "3%",
    details: [
      "12–24 months utility bills analysis",
      "Peak load patterns & IT load vs total facility",
      "Generator runtime & diesel usage",
      "Cooling efficiency & UPS losses review",
      "Historical PUE trends",
      "Scope 1 (diesel) & Scope 2 (grid) emissions",
      "Carbon intensity per MWh & per rack",
      "Energy cost per MW & ESG compliance risk",
    ],
    outputs: ["Energy Baseline Report", "Carbon Inventory (Scope 1 & 2)", "Efficiency Gap Analysis", "Sustainability Readiness Score"],
    stat: "24mo", statLabel: "Historical analysis",
  },
  // P2 — Carbon Strategy
  {
    id: 1, phase: "P2", icon: Map,
    label: "CarbonX-Ray™", role: "Deep Carbon Diagnostic",
    top: "10%", left: "25%",
    details: [
      "Carbon heatmap generation",
      "High-emission zone identification",
      "Carbon risk exposure modeling",
      "Benchmark vs industry peers",
    ],
    outputs: ["Carbon Risk Report"],
    stat: "Scope 1–3", statLabel: "Full carbon map",
  },
  {
    id: 2, phase: "P2", icon: Navigation,
    label: "NetZero Navigator™", role: "Decarbonisation Roadmap",
    top: "10%", left: "48%",
    details: [
      "3–10 year carbon reduction plan",
      "Renewable procurement roadmap",
      "Offset transition strategy",
      "24/7 carbon-free target path",
    ],
    outputs: ["Executive Sustainability Roadmap"],
    stat: "10yr", statLabel: "Reduction horizon",
  },
  // P3 — Dashboard
  {
    id: 3, phase: "P3", icon: Zap,
    label: "VoltIQ™", role: "Real-Time Energy Dashboard",
    top: "42%", left: "3%",
    details: [
      "Smart meters & utility API integration",
      "Cooling system data feeds",
      "Live facility load visualisation",
      "Renewable % & grid dependency tracking",
      "Cost per MWh & carbon intensity display",
    ],
    outputs: ["Energy Performance Dashboard"],
    stat: "Live", statLabel: "Real-time feed",
  },
  {
    id: 4, phase: "P3", icon: Shield,
    label: "PUE Guardian™", role: "Efficiency Intelligence",
    top: "42%", left: "25%",
    details: [
      "Real-time PUE monitoring",
      "Cooling inefficiency detection",
      "Drift detection & alerting",
      "Efficiency benchmarking",
    ],
    outputs: ["Efficiency Intelligence Report"],
    stat: "PUE", statLabel: "Continuous monitoring",
  },
  {
    id: 5, phase: "P3", icon: Clock,
    label: "CarbonMatch 24/7™", role: "Hourly Carbon Monitoring",
    top: "42%", left: "48%",
    details: [
      "Real-time grid carbon factor tracking",
      "24/7 renewable matching",
      "Market-based accounting",
    ],
    outputs: ["Hourly Carbon Matching Report"],
    stat: "24/7", statLabel: "Carbon matching",
  },
  // P4 — Offset & REC
  {
    id: 6, phase: "P4", icon: BookOpen,
    label: "CarbonLedger™", role: "Offset Modelling Engine",
    top: "68%", left: "3%",
    details: [
      "Annual carbon deficit calculation",
      "Offset cost simulation",
      "Voluntary market evaluation",
      "Offset procurement strategy",
    ],
    outputs: ["Offset Strategy Report"],
    stat: "Auto", statLabel: "Deficit calculation",
  },
  {
    id: 7, phase: "P4", icon: Award,
    label: "RECMatrix™", role: "REC Management",
    top: "68%", left: "25%",
    details: [
      "REC acquisition tracking",
      "Registry integration",
      "Retirement documentation",
      "Market pricing insights",
    ],
    outputs: ["REC Revenue Report"],
    stat: "I-REC", statLabel: "Global standards",
  },
  // P5 — Exec & Compliance
  {
    id: 8, phase: "P5", icon: LayoutDashboard,
    label: "GreenBoard™", role: "Executive ESG Dashboard",
    top: "68%", left: "55%",
    details: [
      "Renewable % board view",
      "Carbon reduction progress",
      "Offset spend vs impact",
      "ESG improvement tracking",
    ],
    outputs: ["Board-Ready ESG Summary"],
    stat: "C-Suite", statLabel: "Executive reporting",
  },
  {
    id: 9, phase: "P5", icon: FileText,
    label: "ComplySphere™", role: "Regulatory Reporting",
    top: "42%", left: "70%",
    details: [
      "SEC climate disclosure exports",
      "CSRD-ready reporting",
      "CDP-ready submission pack",
      "Scope 2 market-based accounting",
    ],
    outputs: ["Compliance Report Package"],
    stat: "5+", statLabel: "Frameworks covered",
  },
  {
    id: 10, phase: "P5", icon: Lock,
    label: "AuditTrail360™", role: "Audit Data Vault",
    top: "10%", left: "72%",
    details: [
      "Timestamped energy logs",
      "Carbon proof documentation",
      "REC retirement verification",
      "Audit-ready sustainability pack",
    ],
    outputs: ["Verified Sustainability Record"],
    stat: "Blockchain", statLabel: "Tamper-proof logs",
  },
];

const SlideDataCenter = () => {
  const [active, setActive] = useState<number | null>(null);
  const activeData = active !== null ? steps[active] : null;
  const activePhase = activeData ? phaseMap[activeData.phase] : null;

  return (
    <SlideLayout>
      <div className="relative w-full h-full overflow-hidden bg-white">

        {/* Header — identical structure to Slide07 */}
        <div className="absolute top-5 left-7 right-7 z-20 flex items-center gap-3 animate-fade-in">
          <span className="text-sm font-bold text-primary-foreground bg-primary px-4 py-1.5 rounded-full shadow-lg">Data Center</span>
          <h2 className="text-2xl font-bold text-foreground">EcoGridia – Data Center Entry Flow</h2>
          <div className="ml-auto flex items-center gap-2">
            {phases.map((p) => (
              <span key={p.id} className={`text-xs font-semibold text-white px-2.5 py-1 rounded-full ${p.color}`}>
                {p.label}
              </span>
            ))}
          </div>
        </div>

        {/* Full-bleed image — white bg, mix-blend-mode to strip dark bg */}
        <div className="absolute inset-0 bg-white">
          <img
            src={datacenterImg}
            alt="Data Center ecosystem"
            className="w-full h-full object-contain"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>

        {/* Lifecycle bar — same style as Slide07 */}
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-card/90 backdrop-blur px-5 py-2 rounded-full border border-border/40 shadow">
          {["Baseline", "Diagnose", "Monitor", "Offset", "Report", "Comply", "Archive"].map((p, i, arr) => (
            <div key={p} className="flex items-center gap-1.5">
              <span className="text-[11px] font-semibold text-primary">{p}</span>
              {i < arr.length - 1 && <ArrowRight className="w-2.5 h-2.5 text-muted-foreground/50" />}
            </div>
          ))}
        </div>

        {/* Hotspots — identical style to Slide07 */}
        {steps.map((s, i) => {
          const Icon = s.icon;
          const isActive = active === i;
          const phase = phaseMap[s.phase];
          return (
            <button
              key={s.id}
              onClick={() => setActive(isActive ? null : i)}
              className="absolute z-30 group transition-all duration-500 animate-fade-in"
              style={{ top: s.top, left: s.left, animationDelay: `${0.2 + i * 0.06}s`, animationFillMode: "forwards", opacity: 0 }}
            >
              <span className={`absolute -inset-2 rounded-full animate-ping ${isActive ? "bg-primary/30" : "bg-primary/10"}`} style={{ animationDuration: "2.8s" }} />
              <div className={`relative flex items-center gap-2 px-3 py-2 rounded-xl backdrop-blur-md border shadow-lg transition-all duration-300 cursor-pointer
                ${isActive
                  ? `${phase.color} text-white border-white/30 scale-110`
                  : "bg-card/90 text-foreground border-border/60 hover:bg-card hover:border-primary/40 hover:scale-105"
                }`}
              >
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isActive ? "bg-white/20" : "bg-primary/10"}`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <span className="text-[9px] font-mono opacity-70">{s.phase} · {s.role}</span>
                  <p className="text-[12px] font-bold leading-tight">{s.label}</p>
                </div>
              </div>
            </button>
          );
        })}

        {/* Detail panel — identical to Slide07 */}
        {activeData && activePhase && (
          <div className="absolute right-5 top-14 bottom-5 w-[380px] z-40 rounded-2xl bg-card/95 backdrop-blur-xl border border-primary/20 shadow-2xl p-6 flex flex-col animate-slide-in-right">
            <button onClick={() => setActive(null)} className="absolute top-3 right-3 p-1.5 rounded-lg hover:bg-muted transition-colors">
              <X className="w-4 h-4 text-muted-foreground" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-2xl ${activePhase.color} flex items-center justify-center text-white shadow-lg`}>
                {(() => { const Icon = activeData.icon; return <Icon className="w-6 h-6" />; })()}
              </div>
              <div>
                <span className="text-[11px] text-muted-foreground font-mono">{activeData.phase} · {activeData.role}</span>
                <h3 className="text-xl font-bold text-foreground">{activeData.label}</h3>
              </div>
            </div>

            <div className={`flex items-center gap-4 p-3 rounded-xl ${activePhase.bgLight} border ${activePhase.borderColor} mb-4`}>
              <span className={`text-2xl font-black ${activePhase.textColor}`}>{activeData.stat}</span>
              <span className="text-sm text-muted-foreground">{activeData.statLabel}</span>
            </div>

            <div className="flex-1 space-y-2 overflow-y-auto">
              {activeData.details.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-background/60 border border-border/30 animate-fade-in"
                  style={{ animationDelay: `${idx * 0.05}s`, animationFillMode: "forwards", opacity: 0 }}>
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0">{idx + 1}</span>
                  <span className="text-sm text-foreground leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className={`mt-4 p-3 rounded-xl ${activePhase.bgLight} border ${activePhase.borderColor} shrink-0`}>
              <span className={`text-xs font-bold ${activePhase.textColor} uppercase tracking-wide`}>Output →</span>
              {activeData.outputs.map((o, i) => (
                <p key={i} className="text-sm text-foreground mt-1">✔ {o}</p>
              ))}
            </div>

            <div className="flex items-center justify-center gap-1.5 mt-3">
              {steps.map((_, i) => (
                <button key={i} onClick={(e) => { e.stopPropagation(); setActive(i); }}
                  className={`rounded-full transition-all ${i === active ? "w-5 h-2 bg-primary" : "w-2 h-2 bg-muted-foreground/25 hover:bg-muted-foreground/50"}`}
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
