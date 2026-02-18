import { useState } from "react";
import SlideLayout from "../SlideLayout";
import { MapPin, Sun, Activity, DollarSign, Zap, ShoppingBag, BarChart3, Brain, Award, PieChart, Target, LayoutDashboard, FileText, Lock, X, ArrowRight } from "lucide-react";
import ecosystemImg from "@/assets/slide07-ecosystem-white.png";

const hotspots = [
  // L1 — Green Infrastructure Cloud™
  {
    id: 0, layer: "L1", icon: MapPin, label: "TerraScan™",
    top: "10%", left: "3%",
    role: "Site Feasibility",
    details: ["Rooftop / land identification", "MW potential estimation", "Structural readiness check", "Grid proximity analysis"],
    output: "Feasibility Report + Capacity Estimate",
  },
  {
    id: 1, layer: "L1", icon: Sun, label: "HelioTwin™",
    top: "3%", left: "22%",
    role: "3D Solar Modeling",
    details: ["3D digital twin creation", "Irradiance simulation", "Shading analysis", "Annual generation forecast"],
    output: "Projected kWh/year + Performance Ratio",
  },
  {
    id: 2, layer: "L1", icon: Activity, label: "CarbonX-Ray™",
    top: "3%", left: "43%",
    role: "Baseline Carbon Audit",
    details: ["Scope 1 & 2 emissions mapping", "Current energy intensity", "Carbon heatmap generation", "ESG readiness score"],
    output: "Carbon Baseline Report",
  },
  {
    id: 3, layer: "L1", icon: DollarSign, label: "CapStruct™",
    top: "3%", left: "63%",
    role: "Financial Structuring",
    details: ["CAPEX vs OPEX comparison", "IRR / NPV modeling", "LCOE calculation", "Ownership model (Direct / SPV / PPA)"],
    output: "Financial Feasibility & Investment Plan",
  },
  {
    id: 4, layer: "L1", icon: Zap, label: "SolarForge™",
    top: "45%", left: "3%",
    role: "Project Execution",
    details: ["EPC vendor selection", "SLA definition", "Installation tracking", "Commissioning verification"],
    output: "Live Solar Asset",
  },
  {
    id: 5, layer: "L1", icon: Activity, label: "GridLink™",
    top: "45%", left: "22%",
    role: "Utility Integration",
    details: ["Net metering setup", "Grid synchronization", "Renewable matching % tracking", "PPA alignment"],
    output: "Operational Renewable Flow",
  },
  {
    id: 6, layer: "L1", icon: ShoppingBag, label: "EcoMarket™",
    top: "45%", left: "43%",
    role: "Vendor Management",
    details: ["O&M tracking", "SLA compliance monitoring", "Warranty tracking", "Vendor performance scorecards"],
    output: "Operational Stability",
  },
  // L2 — Energy Intelligence OS™
  {
    id: 7, layer: "L2", icon: BarChart3, label: "VoltIQ™",
    top: "45%", left: "63%",
    role: "Real-Time Energy Dashboard",
    details: ["Live generation tracking", "Consumption vs production", "Renewable mix %", "Cost savings visualization"],
    output: "Energy Performance Dashboard",
  },
  {
    id: 8, layer: "L2", icon: Brain, label: "WattWise AI™",
    top: "75%", left: "3%",
    role: "Optimization Engine",
    details: ["Load forecasting", "Solar degradation alerts", "Peak shaving recommendations", "Battery optimization"],
    output: "Improved Efficiency + Lower Bills",
  },
  // L3 — Carbon & Compliance Exchange™
  {
    id: 9, layer: "L3", icon: Award, label: "RECMatrix™",
    top: "75%", left: "22%",
    role: "REC Management",
    details: ["REC generation tracking", "Registry integration", "REC inventory dashboard", "Market value estimation"],
    output: "REC Revenue Opportunity",
  },
  {
    id: 10, layer: "L3", icon: PieChart, label: "CarbonLedger™",
    top: "75%", left: "43%",
    role: "Carbon Accounting",
    details: ["Carbon avoided calculation", "Offset valuation", "Multi-site aggregation", "Carbon asset visibility"],
    output: "Carbon Asset Report",
  },
  {
    id: 11, layer: "L3", icon: Target, label: "NetZero Navigator™",
    top: "75%", left: "63%",
    role: "Target Tracking",
    details: ["Renewable % progress", "Carbon reduction trajectory", "Gap-to-target visualization"],
    output: "Net-Zero Progress Dashboard",
  },
];

const layerColors: Record<string, string> = {
  L1: "bg-primary",
  L2: "bg-eco-teal",
  L3: "bg-eco-emerald",
};

const Slide07Layer1 = () => {
  const [active, setActive] = useState<number | null>(null);
  const activeData = active !== null ? hotspots[active] : null;

  return (
    <SlideLayout>
      <div className="relative w-full h-full overflow-hidden bg-white">
        {/* Header */}
        <div className="absolute top-5 left-7 right-7 z-20 flex items-center gap-3 animate-fade-in">
          <span className="text-sm font-bold text-primary-foreground bg-primary px-4 py-1.5 rounded-full shadow-lg">EcoGridia Flow</span>
          <h2 className="text-2xl font-bold text-foreground drop-shadow-sm">Normal Project Flow — 15 Products</h2>
          <div className="ml-auto flex items-center gap-2">
            {["L1 · Green Infrastructure Cloud™", "L2 · Energy Intelligence OS™", "L3 · Carbon & Compliance Exchange™"].map((label, li) => (
              <span key={li} className={`text-xs font-semibold text-primary-foreground px-2.5 py-1 rounded-full ${["bg-primary", "bg-eco-teal", "bg-eco-emerald"][li]}`}>
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Full-bleed image */}
        <div className="absolute inset-0 bg-white">
          <img src={ecosystemImg} alt="EcoGridia project flow" className="w-full h-full object-contain" />
        </div>

        {/* Lifecycle bar at bottom */}
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-card/90 backdrop-blur px-5 py-2 rounded-full border border-border/40 shadow">
          {["Discover", "Design", "Build", "Monitor", "Optimize", "Certify", "Report", "Scale"].map((p, i, arr) => (
            <div key={p} className="flex items-center gap-1.5">
              <span className="text-[11px] font-semibold text-primary">{p}</span>
              {i < arr.length - 1 && <ArrowRight className="w-2.5 h-2.5 text-muted-foreground/50" />}
            </div>
          ))}
        </div>

        {/* Hotspots */}
        {hotspots.map((h, i) => {
          const Icon = h.icon;
          const isActive = active === i;
          const layerColor = layerColors[h.layer];
          return (
            <button
              key={h.id}
              onClick={() => setActive(isActive ? null : i)}
              className="absolute z-30 group transition-all duration-500 animate-fade-in"
              style={{ top: h.top, left: h.left, animationDelay: `${0.2 + i * 0.06}s`, animationFillMode: "forwards", opacity: 0 }}
            >
              <span className={`absolute -inset-2 rounded-full animate-ping ${isActive ? "bg-primary/30" : "bg-primary/10"}`} style={{ animationDuration: "2.8s" }} />
              <div className={`relative flex items-center gap-2 px-3 py-2 rounded-xl backdrop-blur-md border shadow-lg transition-all duration-300 cursor-pointer
                ${isActive
                  ? `${layerColor} text-primary-foreground border-primary/50 scale-110`
                  : "bg-card/90 text-foreground border-border/60 hover:bg-card hover:border-primary/40 hover:scale-105"
                }`}
              >
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isActive ? "bg-white/20" : "bg-primary/10"}`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <span className="text-[9px] font-mono opacity-70">{h.layer} · {h.role}</span>
                  <p className="text-[12px] font-bold leading-tight">{h.label}</p>
                </div>
              </div>
            </button>
          );
        })}

        {/* Detail panel */}
        {activeData && (
          <div className="absolute right-5 top-14 bottom-5 w-[380px] z-40 rounded-2xl bg-card/95 backdrop-blur-xl border border-primary/20 shadow-2xl p-6 flex flex-col animate-slide-in-right">
            <button onClick={() => setActive(null)} className="absolute top-3 right-3 p-1.5 rounded-lg hover:bg-muted transition-colors">
              <X className="w-4 h-4 text-muted-foreground" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-2xl ${layerColors[activeData.layer]} flex items-center justify-center text-primary-foreground shadow-lg`}>
                {(() => { const Icon = activeData.icon; return <Icon className="w-6 h-6" />; })()}
              </div>
              <div>
                <span className="text-[11px] text-muted-foreground font-mono">{activeData.layer} · {activeData.role}</span>
                <h3 className="text-xl font-bold text-foreground">{activeData.label}</h3>
              </div>
            </div>

            {/* Details */}
            <div className="flex-1 space-y-2 overflow-y-auto">
              {activeData.details.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-background/60 border border-border/30 animate-fade-in"
                  style={{ animationDelay: `${idx * 0.05}s`, animationFillMode: "forwards", opacity: 0 }}>
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0">{idx + 1}</span>
                  <span className="text-sm text-foreground leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            {/* Output */}
            <div className="mt-4 p-3 rounded-xl bg-primary/10 border border-primary/20 shrink-0">
              <span className="text-xs font-bold text-primary uppercase tracking-wide">Output →</span>
              <p className="text-sm text-foreground mt-1">{activeData.output}</p>
            </div>

            {/* Dot nav */}
            <div className="flex items-center justify-center gap-1.5 mt-3">
              {hotspots.map((_, i) => (
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

export default Slide07Layer1;
