import { useState } from "react";
import SlideLayout from "../SlideLayout";
import { MapPin, Sun, Activity, DollarSign, Zap, ShoppingBag, BarChart3, Brain, Award, PieChart, Target, X, ArrowRight, GraduationCap, Server, Home, Landmark, TreePine, Wrench, TrendingUp } from "lucide-react";
import ecosystemImg from "@/assets/slide07-ecosystem-white.png";

const hotspots = [
  // Row 1 — Discovery & Planning (top edges, left & right of image)
  { id: 0, layer: "L1", icon: MapPin, label: "TerraScan™", top: "5%", left: "1%", role: "Site Feasibility", details: ["Rooftop / land identification", "MW potential estimation", "Structural readiness check", "Grid proximity analysis"], output: "Feasibility Report + Capacity Estimate" },
  { id: 1, layer: "L1", icon: Sun, label: "HelioTwin™", top: "5%", left: "22%", role: "3D Solar Modeling", details: ["3D digital twin creation", "Irradiance simulation", "Shading analysis", "Annual generation forecast"], output: "Projected kWh/year + Performance Ratio" },
  { id: 2, layer: "L1", icon: Activity, label: "CarbonX-Ray™", top: "5%", left: "62%", role: "Baseline Carbon Audit", details: ["Scope 1 & 2 emissions mapping", "Current energy intensity", "Carbon heatmap generation", "ESG readiness score"], output: "Carbon Baseline Report" },
  { id: 3, layer: "L1", icon: DollarSign, label: "CapStruct™", top: "5%", left: "82%", role: "Financial Structuring", details: ["CAPEX vs OPEX comparison", "IRR / NPV modeling", "LCOE calculation", "Ownership model (Direct / SPV / PPA)"], output: "Financial Feasibility & Investment Plan" },
  // Row 2 — Execution & Monitoring (mid-left & mid-right)
  { id: 4, layer: "L1", icon: Zap, label: "SolarForge™", top: "40%", left: "1%", role: "Project Execution", details: ["EPC vendor selection", "SLA definition", "Installation tracking", "Commissioning verification"], output: "Live Solar Asset" },
  { id: 5, layer: "L1", icon: Activity, label: "GridLink™", top: "40%", left: "22%", role: "Utility Integration", details: ["Net metering setup", "Grid synchronization", "Renewable matching % tracking", "PPA alignment"], output: "Operational Renewable Flow" },
  { id: 6, layer: "L1", icon: ShoppingBag, label: "EcoMarket™", top: "40%", left: "62%", role: "Vendor Management", details: ["O&M tracking", "SLA compliance monitoring", "Warranty tracking", "Vendor performance scorecards"], output: "Operational Stability" },
  { id: 7, layer: "L2", icon: BarChart3, label: "VoltIQ™", top: "40%", left: "82%", role: "Real-Time Energy Dashboard", details: ["Live generation tracking", "Consumption vs production", "Renewable mix %", "Cost savings visualization"], output: "Energy Performance Dashboard" },
  // Row 3 — Certification & Compliance (bottom edges)
  { id: 8, layer: "L2", icon: Brain, label: "WattWise AI™", top: "75%", left: "1%", role: "Optimization Engine", details: ["Load forecasting", "Solar degradation alerts", "Peak shaving recommendations", "Battery optimization"], output: "Improved Efficiency + Lower Bills" },
  { id: 9, layer: "L3", icon: Award, label: "RECMatrix™", top: "75%", left: "22%", role: "REC Management", details: ["REC generation tracking", "Registry integration", "REC inventory dashboard", "Market value estimation"], output: "REC Revenue Opportunity" },
  { id: 10, layer: "L3", icon: PieChart, label: "CarbonLedger™", top: "75%", left: "62%", role: "Carbon Accounting", details: ["Carbon avoided calculation", "Offset valuation", "Multi-site aggregation", "Carbon asset visibility"], output: "Carbon Asset Report" },
  { id: 11, layer: "L3", icon: Target, label: "NetZero Navigator™", top: "75%", left: "82%", role: "Target Tracking", details: ["Renewable % progress", "Carbon reduction trajectory", "Gap-to-target visualization"], output: "Net-Zero Progress Dashboard" },
];

const stakeholders = [
  { id: "all", label: "All", icon: Zap, color: "#10b981", products: hotspots.map(h => h.id) },
  { id: "schools", label: "Schools & Universities", icon: GraduationCap, color: "#0ea5e9", products: [0, 1, 2, 3, 4, 5, 7, 9, 10, 11] },
  { id: "datacenters", label: "Data Centers", icon: Server, color: "#8b5cf6", products: [2, 3, 5, 7, 8, 9, 10, 11] },
  { id: "communities", label: "Communities", icon: Home, color: "#f59e0b", products: [0, 1, 3, 4, 5, 7, 9, 10] },
  { id: "government", label: "Government", icon: Landmark, color: "#ef4444", products: [2, 7, 9, 10, 11] },
  { id: "landowners", label: "Landowners", icon: TreePine, color: "#065f46", products: [0, 1, 3, 4, 6] },
  { id: "vendors", label: "EPC Vendors", icon: Wrench, color: "#6366f1", products: [4, 6] },
  { id: "investors", label: "Investors", icon: TrendingUp, color: "#d946ef", products: [3, 7, 9, 10, 11] },
];

const layerColors: Record<string, string> = {
  L1: "bg-primary",
  L2: "bg-eco-teal",
  L3: "bg-eco-emerald",
};

const Slide07Layer1 = () => {
  const [active, setActive] = useState<number | null>(null);
  const [activeStakeholder, setActiveStakeholder] = useState("all");
  const activeData = active !== null ? hotspots[active] : null;
  const currentStakeholder = stakeholders.find(s => s.id === activeStakeholder)!;
  const visibleProducts = currentStakeholder.products;

  return (
    <SlideLayout>
      <div className="relative w-full h-full overflow-hidden bg-white flex flex-col">
        {/* Grid background */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
            backgroundSize: "60px 60px", opacity: 0.5,
          }}
        />

        {/* Header — Slide 3 style */}
        <div className="relative z-20 text-center pt-5 pb-1 px-7 animate-fade-in shrink-0">
          <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[12px] font-bold tracking-widest uppercase mb-1">
            EcoGridia Flow
          </span>
          <h2 className="text-[32px] font-extrabold text-foreground leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Complete End-to-End <span className="text-primary">Project Flow</span>
          </h2>
          <p className="text-[13px] text-muted-foreground mt-0.5">15 products across 3 layers — click a stakeholder to filter</p>
          <div className="flex items-center justify-center gap-1.5 mt-1.5">
            {["L1 · Green Infrastructure Cloud™", "L2 · Energy Intelligence OS™", "L3 · Carbon & Compliance Exchange™"].map((label, li) => (
              <span key={li} className={`text-[10px] font-semibold text-primary-foreground px-2 py-0.5 rounded-full ${["bg-primary", "bg-eco-teal", "bg-eco-emerald"][li]}`}>
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Stakeholder tabs */}
        <div className="relative z-20 flex items-center gap-1.5 justify-center px-7 py-1 animate-fade-in shrink-0">
          {stakeholders.map((s) => {
            const SIcon = s.icon;
            const isActive = activeStakeholder === s.id;
            return (
              <button
                key={s.id}
                onClick={() => { setActiveStakeholder(s.id); setActive(null); }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all duration-200 border"
                style={{
                  background: isActive ? s.color : "rgba(255,255,255,0.9)",
                  color: isActive ? "#fff" : "#374151",
                  borderColor: isActive ? s.color : "#e5e7eb",
                  boxShadow: isActive ? `0 2px 8px ${s.color}40` : "none",
                }}
              >
                <SIcon className="w-3.5 h-3.5" />
                {s.label}
                {s.id !== "all" && (
                  <span className="text-[9px] ml-0.5 opacity-75">({s.products.length})</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Image area — relative container for hotspots */}
        <div className="relative flex-1 min-h-0 z-10">
          <img src={ecosystemImg} alt="EcoGridia project flow" className="w-full h-full object-contain" />

          {/* Lifecycle bar at bottom */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-card/90 backdrop-blur px-5 py-2 rounded-full border border-border/40 shadow">
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
          const isVisible = visibleProducts.includes(h.id);
          return (
            <button
              key={h.id}
              onClick={() => isVisible && setActive(isActive ? null : i)}
              className={`absolute z-30 group transition-all duration-500 animate-fade-in ${!isVisible ? "pointer-events-none" : ""}`}
              style={{
                top: h.top, left: h.left,
                animationDelay: `${0.2 + i * 0.06}s`, animationFillMode: "forwards", opacity: 0,
                filter: isVisible ? "none" : "grayscale(1)",
                transform: isVisible ? "scale(1)" : "scale(0.85)",
              }}
            >
              {isVisible && <span className={`absolute -inset-2 rounded-full animate-ping ${isActive ? "bg-primary/30" : "bg-primary/10"}`} style={{ animationDuration: "2.8s" }} />}
              <div className={`relative flex items-center gap-2 px-3 py-2 rounded-xl backdrop-blur-md border shadow-lg transition-all duration-300 cursor-pointer
                ${!isVisible
                  ? "bg-muted/50 text-muted-foreground border-border/30 opacity-30"
                  : isActive
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
        </div>

        {/* Detail panel */}
        {activeData && (
          <div className="absolute right-5 top-14 bottom-5 w-[380px] z-40 rounded-2xl bg-card/95 backdrop-blur-xl border border-primary/20 shadow-2xl p-6 flex flex-col animate-slide-in-right">
            <button onClick={() => setActive(null)} className="absolute top-3 right-3 p-1.5 rounded-lg hover:bg-muted transition-colors">
              <X className="w-4 h-4 text-muted-foreground" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-2xl ${layerColors[activeData.layer]} flex items-center justify-center text-primary-foreground shadow-lg`}>
                {(() => { const Icon = activeData.icon; return <Icon className="w-6 h-6" />; })()}
              </div>
              <div>
                <span className="text-[11px] text-muted-foreground font-mono">{activeData.layer} · {activeData.role}</span>
                <h3 className="text-xl font-bold text-foreground">{activeData.label}</h3>
              </div>
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

            <div className="mt-4 p-3 rounded-xl bg-primary/10 border border-primary/20 shrink-0">
              <span className="text-xs font-bold text-primary uppercase tracking-wide">Output →</span>
              <p className="text-sm text-foreground mt-1">{activeData.output}</p>
            </div>

            <div className="flex items-center justify-center gap-1.5 mt-3">
              {hotspots.filter(h => visibleProducts.includes(h.id)).map((h) => (
                <button key={h.id} onClick={(e) => { e.stopPropagation(); setActive(h.id); }}
                  className={`rounded-full transition-all ${h.id === active ? "w-5 h-2 bg-primary" : "w-2 h-2 bg-muted-foreground/25 hover:bg-muted-foreground/50"}`}
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
