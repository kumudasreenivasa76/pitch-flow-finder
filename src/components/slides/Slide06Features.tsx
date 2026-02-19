import SlideLayout from "../SlideLayout";
import { useState } from "react";
import {
  Search, Wind, Target, Globe, Satellite, Building2, Zap, DollarSign, ShoppingCart,
  Activity, Server, Brain, Flame, Clock, FileCheck, Leaf, BarChart3, TrendingUp,
  Sun, FileText, Lock, ChevronRight
} from "lucide-react";

const categories = [
  {
    id: "I", label: "Strategy & Baseline",
    iconBg: "#dcfce7", iconColor: "#15803d",
    products: [
      { icon: Search, name: "BaselineIQ™", tagline: "Energy & Carbon Baseline Assessment", features: ["12–24 month utility analysis", "Peak demand profiling", "IT vs facility load (data centers)", "Cooling & UPS efficiency diagnostics", "Scope 1, 2, 3 emissions baseline", "Carbon intensity per rack / sq ft", "Energy cost volatility exposure", "ESG readiness scoring"], output: "Energy Baseline Report · Carbon Inventory · Efficiency Gap Analysis · Sustainability Readiness Score" },
      { icon: Wind, name: "CarbonX-Ray™", tagline: "Carbon Risk Diagnostic", features: ["Emission heatmaps", "Carbon hotspot identification", "Industry benchmarking", "Risk exposure scoring", "Carbon liability modeling"], output: "Carbon Risk Exposure Report" },
      { icon: Target, name: "NetZero Navigator™", tagline: "Decarbonization Roadmap", features: ["3–10 year sustainability plan", "Renewable adoption pathway", "Offset transition strategy", "24/7 carbon-free roadmap", "Capital deployment timeline"], output: "Executive Sustainability Roadmap" },
    ],
  },
  {
    id: "II", label: "Green Infrastructure",
    iconBg: "#d1fae5", iconColor: "#065f46",
    products: [
      { icon: Globe, name: "TerraScan™", tagline: "Land & Rooftop Intelligence", features: ["Rooftop assessment (schools, housing, DCs)", "Solar farm land identification", "Zoning compliance mapping", "Grid proximity analysis", "Structural readiness scoring", "MW potential estimation"], output: "Feasibility Report + Capacity Estimate" },
      { icon: Satellite, name: "HelioTwin™", tagline: "3D Renewable Digital Twin", features: ["Drone mapping", "Irradiance simulation", "Shadow modeling", "CUF forecasting", "Annual kWh projection", "Layout optimization"], output: "Projected kWh/year + Performance Ratio" },
      { icon: Building2, name: "SolarForge™", tagline: "Renewable Deployment", features: ["EPC vendor bidding", "Cost benchmarking", "SLA enforcement", "Installation tracking", "Commissioning validation", "Warranty & O&M tracking"], output: "Live Solar Asset" },
      { icon: Zap, name: "GridLink™", tagline: "Utility & PPA Integration", features: ["Net metering setup", "Grid interconnection", "Physical & Virtual PPA modeling", "Renewable matching %", "Energy settlement analytics"], output: "Operational Renewable Flow" },
      { icon: DollarSign, name: "CapStruct™", tagline: "Financing & Investment Structuring", features: ["CAPEX vs OPEX modeling", "IRR / NPV / LCOE analysis", "SPV creation", "Green bond structuring", "Climate fund packaging", "Crowdfunding modeling"], output: "Financial Feasibility & Investment Plan" },
      { icon: ShoppingCart, name: "EcoMarket™", tagline: "Green Vendor Marketplace", features: ["EPC onboarding", "Vendor rating system", "O&M partner matching", "SLA performance tracking", "Dynamic pricing engine"], output: "Operational Stability" },
    ],
  },
  {
    id: "III", label: "Energy Intelligence & AI",
    iconBg: "#ccfbf1", iconColor: "#0f766e",
    products: [
      { icon: Activity, name: "VoltIQ™", tagline: "Real-Time Energy Intelligence", features: ["Live energy monitoring", "Renewable mix %", "Grid dependency %", "Multi-site aggregation", "Cost savings tracking", "Peak load alerts"], output: "Energy Performance Dashboard" },
      { icon: Server, name: "PUE Guardian™", tagline: "Data Center Efficiency Suite", features: ["Real-time PUE tracking", "Cooling diagnostics", "UPS loss analytics", "Efficiency benchmarking", "Drift detection alerts"], output: "PUE Optimization Report" },
      { icon: Brain, name: "WattWise AI™", tagline: "Predictive Optimization Engine", features: ["AI load forecasting", "Solar degradation detection", "Battery dispatch simulation", "Energy price arbitrage modeling", "Peak shaving optimization", "Demand response automation"], output: "Improved Efficiency + Lower Bills" },
      { icon: Flame, name: "HeatRecover™", tagline: "Waste Heat Monetization", features: ["Heat reuse modeling", "Secondary energy revenue simulation", "Efficiency credit tracking"], output: "Heat Revenue Opportunity" },
      { icon: Clock, name: "CarbonMatch 24/7™", tagline: "Hourly Renewable Matching", features: ["24/7 carbon-free energy tracking", "Real-time grid carbon intensity", "Market-based vs location-based accounting", "Hourly compliance tracking"], output: "Hourly Carbon Compliance Report" },
    ],
  },
  {
    id: "IV", label: "Carbon & REC Management",
    iconBg: "#dcfce7", iconColor: "#15803d",
    products: [
      { icon: FileCheck, name: "RECMatrix™", tagline: "Renewable Energy Certificate Engine", features: ["REC generation tracking", "Registry integration", "REC retirement ledger", "Market pricing analytics", "Sell/hold recommendations"], output: "REC Revenue Opportunity" },
      { icon: Leaf, name: "CarbonLedger™", tagline: "Carbon Credit Engine", features: ["Carbon avoided calculations", "Offset modeling", "Voluntary carbon market evaluation", "Carbon asset valuation", "Multi-site carbon aggregation"], output: "Carbon Asset Report" },
    ],
  },
  {
    id: "V", label: "Executive Intelligence",
    iconBg: "#fef9c3", iconColor: "#a16207",
    products: [
      { icon: BarChart3, name: "GreenBoard™", tagline: "Executive ESG Dashboard", features: ["Renewable performance", "Carbon reduction metrics", "ESG score tracking", "ROI visualization", "Risk heatmap"], output: "Board-Ready ESG Summary" },
      { icon: TrendingUp, name: "FundVista™", tagline: "Climate Investment Intelligence", features: ["SPV revenue tracking", "Yield modeling", "Asset performance scoring", "Climate ROI metrics", "Portfolio risk analytics"], output: "Climate Investment Portfolio Report" },
      { icon: Sun, name: "CrowdSolar™", tagline: "Community Investment Engine", features: ["Fractional solar ownership", "Community subscription portal", "Yield tracking", "Carbon allocation visibility"], output: "Community Solar Revenue" },
    ],
  },
  {
    id: "VI", label: "ESG Compliance & Audit",
    iconBg: "#d1fae5", iconColor: "#065f46",
    products: [
      { icon: FileText, name: "ComplySphere™", tagline: "Regulatory Reporting Engine", features: ["CSRD export", "SEC climate disclosure alignment", "CDP submission packs", "ISO 14064 documentation", "Scope 2 market-based accounting"], output: "Compliance Report" },
      { icon: Lock, name: "AuditTrail360™", tagline: "Immutable Sustainability Vault", features: ["Timestamped energy logs", "Smart meter integration", "REC retirement documentation", "Carbon proof archive", "Audit-ready ESG pack"], output: "Verified Sustainability Record" },
    ],
  },
];

const allProducts = categories.flatMap((cat) =>
  cat.products.map((p) => ({ ...p, catId: cat.id, catLabel: cat.label, iconBg: cat.iconBg, iconColor: cat.iconColor }))
);

// Category badge colors
const catBadgeColors: Record<string, string> = {
  "I": "#15803d", "II": "#065f46", "III": "#0f766e",
  "IV": "#15803d", "V": "#a16207", "VI": "#065f46",
};

const Slide06Features = () => {
  const [selectedProd, setSelectedProd] = useState(0);
  const prod = allProducts[selectedProd];
  const Icon = prod.icon;

  return (
    <SlideLayout>
      <div className="flex flex-col h-full" style={{ background: "#ffffff" }}>

        {/* Top gradient bar */}
        <div className="h-1.5 w-full shrink-0" style={{ background: "linear-gradient(90deg, #10b981, #0d9488, #0ea5e9, #8b5cf6, #f59e0b)" }} />

        {/* Header row */}
        <div className="flex items-center justify-between px-14 py-2 border-b shrink-0" style={{ borderColor: "#e5e7eb" }}>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] mb-0.5" style={{ color: "#6b7280" }}>The EcoGridia Suite</p>
            <h2 className="text-[28px] font-extrabold leading-none" style={{ color: "#111827", fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
              Product <span style={{ color: "#10b981" }}>Apps</span>
            </h2>
          </div>
          <div className="flex items-center gap-8">
            <div className="text-center">
              <p className="text-[24px] font-extrabold" style={{ color: "#10b981" }}>20</p>
              <p className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: "#6b7280" }}>Products</p>
            </div>
            <div className="w-px h-8" style={{ background: "#e5e7eb" }} />
            <div className="text-center">
              <p className="text-[24px] font-extrabold" style={{ color: "#10b981" }}>6</p>
              <p className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: "#6b7280" }}>Modules</p>
            </div>
            <div className="w-px h-8" style={{ background: "#e5e7eb" }} />
            <div className="flex flex-wrap gap-1.5 max-w-[340px]">
              {["Universities", "K-12 Schools", "Data Centers", "Enterprises", "Climate Funds", "Housing"].map((s) => (
                <span key={s} className="text-[10px] font-semibold px-2.5 py-1 rounded-full" style={{ background: "#f0fdf4", color: "#15803d", border: "1px solid #bbf7d0" }}>{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Main body */}
        <div className="flex flex-1 min-h-0">

          {/* LEFT: App icon grid */}
          <div className="w-[560px] shrink-0 border-r overflow-y-auto px-6 py-3" style={{ borderColor: "#e5e7eb", background: "#fafafa" }}>
            {categories.map((cat, ci) => (
              <div key={ci} className="mb-2">
                {/* Category header */}
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-5 h-5 rounded-md flex items-center justify-center text-[9px] font-black text-white shrink-0"
                    style={{ background: catBadgeColors[cat.id] }}>{cat.id}</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: "#374151" }}>{cat.label}</span>
                  <div className="flex-1 h-px" style={{ background: "#e5e7eb" }} />
                  <span className="text-[10px]" style={{ color: "#9ca3af" }}>{cat.products.length} apps</span>
                </div>

                {/* Product icons row */}
                <div className="flex flex-wrap gap-2">
                  {cat.products.map((p, pi) => {
                    const PIcon = p.icon;
                    const globalIdx = allProducts.findIndex(ap => ap.name === p.name);
                    const isActive = selectedProd === globalIdx;
                    return (
                      <button
                        key={pi}
                        onClick={() => setSelectedProd(globalIdx)}
                        className="flex flex-col items-center gap-1.5 transition-all duration-200 group"
                        style={{ width: "64px" }}
                      >
                        {/* App icon */}
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200"
                          style={{
                            background: isActive
                              ? `linear-gradient(135deg, ${cat.iconBg}, ${cat.iconBg}99)`
                              : cat.iconBg,
                            boxShadow: isActive
                              ? `0 0 0 2.5px ${cat.iconColor}, 0 6px 18px ${cat.iconColor}30`
                              : "0 2px 8px rgba(0,0,0,0.08)",
                            transform: isActive ? "scale(1.1)" : "scale(1)",
                          }}
                        >
                          <PIcon className="w-5 h-5" style={{ color: cat.iconColor }} />
                        </div>
                        {/* Name label */}
                        <span className="text-[8.5px] font-semibold text-center leading-tight w-full"
                          style={{ color: isActive ? cat.iconColor : "#374151" }}>
                          {p.name.replace("™", "")}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Product detail */}
          <div className="flex-1 flex flex-col px-8 py-4 overflow-y-auto" key={selectedProd}>

            {/* Product header */}
            <div className="flex items-start gap-3 mb-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${prod.iconBg}, ${prod.iconBg}aa)`,
                  boxShadow: `0 8px 24px ${prod.iconColor}30`
                }}
              >
                <Icon className="w-6 h-6" style={{ color: prod.iconColor }} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-black px-2 py-0.5 rounded text-white" style={{ background: catBadgeColors[prod.catId] }}>{prod.catId}</span>
                  <span className="text-[11px] font-medium" style={{ color: "#6b7280" }}>{prod.catLabel}</span>
                </div>
                <h3 className="text-[22px] font-extrabold leading-tight" style={{ color: "#111827", fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>{prod.name}</h3>
                <p className="text-[12px] font-semibold mt-0.5" style={{ color: prod.iconColor }}>{prod.tagline}</p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px mb-3" style={{ background: "#f3f4f6" }} />

            {/* Features label */}
            <p className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: "#9ca3af" }}>Key Capabilities</p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-x-2 gap-y-1 flex-1 content-start">
              {prod.features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 px-2 py-1 rounded-md"
                  style={{
                    background: prod.iconBg + "55",
                    border: `1px solid ${prod.iconColor}15`,
                  }}
                >
                  <div className="w-1 h-1 rounded-full shrink-0" style={{ background: prod.iconColor }} />
                  <span className="text-[11px] leading-tight" style={{ color: "#374151" }}>{f}</span>
                </div>
              ))}
            </div>

            {/* Output bar */}
            <div
              className="mt-2 px-3 py-2 rounded-lg flex items-start gap-2"
              style={{
                background: prod.iconBg + "88",
                border: `1.5px solid ${prod.iconColor}30`
              }}
            >
              <ChevronRight className="w-4 h-4 mt-0.5 shrink-0" style={{ color: prod.iconColor }} />
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: prod.iconColor }}>Deliverable Output</p>
                <p className="text-[12px] font-semibold leading-snug" style={{ color: "#111827" }}>{prod.output}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="shrink-0 px-14 py-2 flex items-center justify-between" style={{ background: "#14532d" }}>
          <p className="text-[11px] font-semibold text-white/70">Tap any product icon to explore capabilities</p>
          <p className="text-[11px] font-bold text-white/90">EcoGridia · 20-Product Platform Suite</p>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide06Features;
