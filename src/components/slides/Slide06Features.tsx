import SlideLayout from "../SlideLayout";
import { useState } from "react";
import {
  Search, Wind, Target, Globe, Satellite, Building2, Zap, DollarSign, ShoppingCart,
  Activity, Server, Brain, Flame, Clock, FileCheck, Leaf, BarChart3, TrendingUp,
  Sun, FileText, Lock, ChevronRight, Users
} from "lucide-react";

const categories = [
  {
    id: "I",
    label: "Strategy & Baseline",
    color: "bg-primary",
    textColor: "text-primary",
    borderColor: "border-primary/30",
    bgColor: "bg-primary/10",
    iconBg: "#dcfce7",
    iconColor: "#15803d",
    products: [
      {
        icon: Search, name: "BaselineIQ™", tagline: "Energy & Carbon Baseline Assessment",
        features: ["12–24 month utility analysis", "Peak demand profiling", "IT vs facility load (data centers)", "Cooling & UPS efficiency diagnostics", "Scope 1, 2, 3 emissions baseline", "Carbon intensity per rack / sq ft", "Energy cost volatility exposure", "ESG readiness scoring"],
        output: "Energy Baseline Report · Carbon Inventory · Efficiency Gap Analysis · Sustainability Readiness Score",
      },
      {
        icon: Wind, name: "CarbonX-Ray™", tagline: "Carbon Risk Diagnostic",
        features: ["Emission heatmaps", "Carbon hotspot identification", "Industry benchmarking", "Risk exposure scoring", "Carbon liability modeling"],
        output: "Carbon Risk Exposure Report",
      },
      {
        icon: Target, name: "NetZero Navigator™", tagline: "Decarbonization Roadmap",
        features: ["3–10 year sustainability plan", "Renewable adoption pathway", "Offset transition strategy", "24/7 carbon-free roadmap", "Capital deployment timeline"],
        output: "Executive Sustainability Roadmap",
      },
    ],
  },
  {
    id: "II",
    label: "Green Infrastructure",
    color: "bg-eco-emerald",
    textColor: "text-eco-emerald",
    borderColor: "border-eco-emerald/30",
    bgColor: "bg-eco-emerald/10",
    iconBg: "#d1fae5",
    iconColor: "#065f46",
    products: [
      {
        icon: Globe, name: "TerraScan™", tagline: "Land & Rooftop Intelligence",
        features: ["Rooftop assessment (schools, housing, DCs)", "Solar farm land identification", "Zoning compliance mapping", "Grid proximity analysis", "Structural readiness scoring", "MW potential estimation"],
        output: "Feasibility Report + Capacity Estimate",
      },
      {
        icon: Satellite, name: "HelioTwin™", tagline: "3D Renewable Digital Twin",
        features: ["Drone mapping", "Irradiance simulation", "Shadow modeling", "CUF forecasting", "Annual kWh projection", "Layout optimization"],
        output: "Projected kWh/year + Performance Ratio",
      },
      {
        icon: Building2, name: "SolarForge™", tagline: "Renewable Deployment",
        features: ["EPC vendor bidding", "Cost benchmarking", "SLA enforcement", "Installation tracking", "Commissioning validation", "Warranty & O&M tracking"],
        output: "Live Solar Asset",
      },
      {
        icon: Zap, name: "GridLink™", tagline: "Utility & PPA Integration",
        features: ["Net metering setup", "Grid interconnection", "Physical & Virtual PPA modeling", "Renewable matching %", "Energy settlement analytics"],
        output: "Operational Renewable Flow",
      },
      {
        icon: DollarSign, name: "CapStruct™", tagline: "Financing & Investment Structuring",
        features: ["CAPEX vs OPEX modeling", "IRR / NPV / LCOE analysis", "SPV creation", "Green bond structuring", "Climate fund packaging", "Crowdfunding modeling"],
        output: "Financial Feasibility & Investment Plan",
      },
      {
        icon: ShoppingCart, name: "EcoMarket™", tagline: "Green Vendor Marketplace",
        features: ["EPC onboarding", "Vendor rating system", "O&M partner matching", "SLA performance tracking", "Dynamic pricing engine"],
        output: "Operational Stability",
      },
    ],
  },
  {
    id: "III",
    label: "Energy Intelligence & AI",
    color: "bg-eco-teal",
    textColor: "text-eco-teal",
    borderColor: "border-eco-teal/30",
    bgColor: "bg-eco-teal/10",
    iconBg: "#ccfbf1",
    iconColor: "#0f766e",
    products: [
      {
        icon: Activity, name: "VoltIQ™", tagline: "Real-Time Energy Intelligence",
        features: ["Live energy monitoring", "Renewable mix %", "Grid dependency %", "Multi-site aggregation", "Cost savings tracking", "Peak load alerts"],
        output: "Energy Performance Dashboard",
      },
      {
        icon: Server, name: "PUE Guardian™", tagline: "Data Center Efficiency Suite",
        features: ["Real-time PUE tracking", "Cooling diagnostics", "UPS loss analytics", "Efficiency benchmarking", "Drift detection alerts"],
        output: "PUE Optimization Report",
      },
      {
        icon: Brain, name: "WattWise AI™", tagline: "Predictive Optimization Engine",
        features: ["AI load forecasting", "Solar degradation detection", "Battery dispatch simulation", "Energy price arbitrage modeling", "Peak shaving optimization", "Demand response automation"],
        output: "Improved Efficiency + Lower Bills",
      },
      {
        icon: Flame, name: "HeatRecover™", tagline: "Waste Heat Monetization",
        features: ["Heat reuse modeling", "Secondary energy revenue simulation", "Efficiency credit tracking"],
        output: "Heat Revenue Opportunity",
      },
      {
        icon: Clock, name: "CarbonMatch 24/7™", tagline: "Hourly Renewable Matching",
        features: ["24/7 carbon-free energy tracking", "Real-time grid carbon intensity", "Market-based vs location-based accounting", "Hourly compliance tracking"],
        output: "Hourly Carbon Compliance Report",
      },
    ],
  },
  {
    id: "IV",
    label: "Carbon & REC Management",
    color: "bg-primary",
    textColor: "text-primary",
    borderColor: "border-primary/30",
    bgColor: "bg-primary/10",
    iconBg: "#dcfce7",
    iconColor: "#15803d",
    products: [
      {
        icon: FileCheck, name: "RECMatrix™", tagline: "Renewable Energy Certificate Engine",
        features: ["REC generation tracking", "Registry integration", "REC retirement ledger", "Market pricing analytics", "Sell/hold recommendations"],
        output: "REC Revenue Opportunity",
      },
      {
        icon: Leaf, name: "CarbonLedger™", tagline: "Carbon Credit Engine",
        features: ["Carbon avoided calculations", "Offset modeling", "Voluntary carbon market evaluation", "Carbon asset valuation", "Multi-site carbon aggregation"],
        output: "Carbon Asset Report",
      },
    ],
  },
  {
    id: "V",
    label: "Executive Intelligence",
    color: "bg-eco-amber",
    textColor: "text-eco-amber",
    borderColor: "border-eco-amber/30",
    bgColor: "bg-eco-amber/10",
    iconBg: "#fef9c3",
    iconColor: "#a16207",
    products: [
      {
        icon: BarChart3, name: "GreenBoard™", tagline: "Executive ESG Dashboard",
        features: ["Renewable performance", "Carbon reduction metrics", "ESG score tracking", "ROI visualization", "Risk heatmap"],
        output: "Board-Ready ESG Summary",
      },
      {
        icon: TrendingUp, name: "FundVista™", tagline: "Climate Investment Intelligence",
        features: ["SPV revenue tracking", "Yield modeling", "Asset performance scoring", "Climate ROI metrics", "Portfolio risk analytics"],
        output: "Climate Investment Portfolio Report",
      },
      {
        icon: Sun, name: "CrowdSolar™", tagline: "Community Investment Engine",
        features: ["Fractional solar ownership", "Community subscription portal", "Yield tracking", "Carbon allocation visibility"],
        output: "Community Solar Revenue",
      },
    ],
  },
  {
    id: "VI",
    label: "ESG Compliance & Audit",
    color: "bg-eco-emerald",
    textColor: "text-eco-emerald",
    borderColor: "border-eco-emerald/30",
    bgColor: "bg-eco-emerald/10",
    iconBg: "#d1fae5",
    iconColor: "#065f46",
    products: [
      {
        icon: FileText, name: "ComplySphere™", tagline: "Regulatory Reporting Engine",
        features: ["CSRD export", "SEC climate disclosure alignment", "CDP submission packs", "ISO 14064 documentation", "Scope 2 market-based accounting"],
        output: "Compliance Report",
      },
      {
        icon: Lock, name: "AuditTrail360™", tagline: "Immutable Sustainability Vault",
        features: ["Timestamped energy logs", "Smart meter integration", "REC retirement documentation", "Carbon proof archive", "Audit-ready ESG pack"],
        output: "Verified Sustainability Record",
      },
    ],
  },
];

const allProducts = categories.flatMap((cat) =>
  cat.products.map((p) => ({ ...p, catId: cat.id, catLabel: cat.label, catColor: cat.color, catTextColor: cat.textColor, catBorderColor: cat.borderColor, catBgColor: cat.bgColor, iconBg: cat.iconBg, iconColor: cat.iconColor }))
);

const Slide06Features = () => {
  const [selectedProd, setSelectedProd] = useState(0);
  const prod = allProducts[selectedProd];
  const Icon = prod.icon;

  return (
    <SlideLayout>
      <div className="flex h-full overflow-hidden">

        {/* Left panel: Title + App icon grid */}
        <div className="w-[340px] shrink-0 flex flex-col bg-card/50 border-r border-border/30">
          {/* Title */}
          <div className="px-5 pt-6 pb-4 border-b border-border/20 shrink-0">
            <div className="opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">The EcoGridia Suite</p>
              <h2 className="text-[22px] font-extrabold text-foreground leading-tight">
                Platform <span className="text-primary">Apps</span>
              </h2>
              <p className="text-[12px] text-muted-foreground mt-1">
                <span className="font-bold text-primary">20 products</span> across 6 modules — tap any to explore
              </p>
            </div>
          </div>

          {/* App icon grid — scrollable */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            {categories.map((cat, ci) => (
              <div key={ci} className="mb-4">
                {/* Category label */}
                <div className="flex items-center gap-1.5 mb-2 opacity-0 animate-fade-in" style={{ animationDelay: `${0.04 + ci * 0.04}s`, animationFillMode: "forwards" }}>
                  <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded-md ${cat.color} text-primary-foreground`}>{cat.id}</span>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{cat.label}</span>
                </div>

                {/* Product app icons */}
                <div className="grid grid-cols-3 gap-2">
                  {cat.products.map((p, pi) => {
                    const PIcon = p.icon;
                    const globalIdx = allProducts.findIndex(ap => ap.name === p.name);
                    const isActive = selectedProd === globalIdx;
                    return (
                      <button
                        key={pi}
                        onClick={() => setSelectedProd(globalIdx)}
                        className={`flex flex-col items-center gap-1.5 p-2 rounded-2xl transition-all duration-200 opacity-0 animate-fade-in group ${
                          isActive
                            ? "bg-primary/10 ring-2 ring-primary/40 scale-105 shadow-md"
                            : "hover:bg-secondary/70 hover:scale-105"
                        }`}
                        style={{ animationDelay: `${0.06 + ci * 0.04 + pi * 0.02}s`, animationFillMode: "forwards" }}
                      >
                        {/* App icon */}
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm transition-transform duration-200 group-hover:scale-110"
                          style={{
                            background: isActive
                              ? `linear-gradient(135deg, ${cat.iconBg}, ${cat.iconBg}cc)`
                              : cat.iconBg,
                            boxShadow: isActive ? `0 4px 14px ${cat.iconColor}40` : "0 2px 6px rgba(0,0,0,0.08)"
                          }}
                        >
                          <PIcon
                            className="w-5 h-5"
                            style={{ color: cat.iconColor }}
                          />
                        </div>
                        {/* Label */}
                        <span
                          className="text-[9px] font-semibold text-center leading-tight line-clamp-2 w-full"
                          style={{ color: isActive ? cat.iconColor : undefined }}
                        >
                          {p.name.replace("™", "")}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Segments */}
            <div className="mt-2 p-3 rounded-xl bg-card border border-border/30">
              <div className="flex items-center gap-1.5 mb-2">
                <Users className="w-3 h-3 text-primary" />
                <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Segments Served</p>
              </div>
              <div className="flex flex-wrap gap-1">
                {["Universities", "K-12 Schools", "Data Centers", "Enterprises", "Climate Funds", "Housing"].map((s) => (
                  <span key={s} className="text-[9px] font-semibold text-primary bg-primary/10 px-1.5 py-0.5 rounded-full">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Product Detail */}
        <div className="flex-1 flex items-center justify-center px-10 overflow-hidden" key={selectedProd}>
          <div className="w-full max-w-[780px]">
            {/* Header */}
            <div className="flex items-start gap-5 animate-fade-in">
              <div
                className="w-16 h-16 rounded-3xl flex items-center justify-center shadow-xl shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${prod.iconBg}, ${prod.iconBg}bb)`,
                  boxShadow: `0 8px 24px ${prod.iconColor}35`
                }}
              >
                <Icon className="w-8 h-8" style={{ color: prod.iconColor }} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className={`text-[11px] font-extrabold px-2 py-0.5 rounded-full ${prod.catColor} text-primary-foreground`}>{prod.catId}</span>
                  <span className="text-[12px] text-muted-foreground font-mono">{prod.catLabel}</span>
                </div>
                <h3 className="text-[30px] font-extrabold text-foreground leading-tight">{prod.name}</h3>
                <p className="text-[15px] font-semibold" style={{ color: prod.iconColor }}>{prod.tagline}</p>
              </div>
            </div>

            {/* Features grid */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {prod.features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 px-4 py-3 rounded-xl bg-card border border-border/30 opacity-0 animate-fade-in hover:border-primary/20 transition-all"
                  style={{ animationDelay: `${0.08 + i * 0.04}s`, animationFillMode: "forwards" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: prod.iconColor }} />
                  <span className="text-[13px] text-foreground leading-snug">{f}</span>
                </div>
              ))}
            </div>

            {/* Output bar */}
            <div
              className="mt-5 p-4 rounded-2xl border animate-fade-in"
              style={{
                background: prod.iconBg + "55",
                borderColor: prod.iconColor + "30",
                animationDelay: "0.3s"
              }}
            >
              <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: prod.iconColor }}>✓ Output</span>
              <p className="text-[15px] font-semibold text-foreground mt-1 leading-snug">{prod.output}</p>
            </div>

            {/* Navigation hint */}
            <div className="mt-4 flex items-center gap-2 animate-fade-in" style={{ animationDelay: "0.38s" }}>
              <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/40" />
              <p className="text-[11px] text-muted-foreground">Select any app icon on the left to explore products</p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide06Features;
