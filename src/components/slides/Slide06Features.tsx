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
    label: "Executive & Investor Intelligence",
    color: "bg-eco-amber",
    textColor: "text-eco-amber",
    borderColor: "border-eco-amber/30",
    bgColor: "bg-eco-amber/10",
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

// Flat product list for selection
const allProducts = categories.flatMap((cat, ci) =>
  cat.products.map((p, pi) => ({ ...p, catId: cat.id, catLabel: cat.label, catColor: cat.color, catTextColor: cat.textColor, catBorderColor: cat.borderColor, catBgColor: cat.bgColor, catIdx: ci, prodIdx: pi }))
);

const segments = ["Universities & Schools", "Housing Communities", "Utility-Scale Solar", "Data Centers", "Enterprises", "Infrastructure Funds", "Climate Investors"];

const Slide06Features = () => {
  const [selectedCat, setSelectedCat] = useState(0);
  const [selectedProd, setSelectedProd] = useState(0);

  const cat = categories[selectedCat];
  const prod = cat.products[selectedProd] ?? cat.products[0];
  const Icon = prod.icon;

  const handleCatSelect = (ci: number) => {
    setSelectedCat(ci);
    setSelectedProd(0);
  };

  return (
    <SlideLayout>
      <div className="flex h-full overflow-hidden">
        {/* Left: Category + Product sidebar */}
        <div className="w-[300px] shrink-0 flex flex-col bg-card/40 border-r border-border/30 overflow-y-auto">
          <div className="px-5 pt-6 pb-4 border-b border-border/20 shrink-0">
            <div className="flex items-center gap-3 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-[20px] font-extrabold text-foreground leading-tight">
                  <span className="text-primary">20</span> Products
                </h2>
                <p className="text-[11px] text-muted-foreground">The EcoGridia Suite</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1 px-2 py-3">
            {categories.map((c, ci) => {
              const isActiveCat = selectedCat === ci;
              return (
                <div key={ci} className="opacity-0 animate-fade-in" style={{ animationDelay: `${0.05 + ci * 0.04}s`, animationFillMode: "forwards" }}>
                  <button
                    onClick={() => handleCatSelect(ci)}
                    className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-left transition-all duration-200 ${
                      isActiveCat ? `${c.bgColor} border border-${c.id}` : "hover:bg-card border border-transparent"
                    }`}
                  >
                    <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded-md ${c.color} text-primary-foreground`}>{c.id}</span>
                    <span className={`text-[12px] font-bold leading-tight ${isActiveCat ? c.textColor : "text-foreground"}`}>{c.label}</span>
                    <span className="ml-auto text-[10px] text-muted-foreground">{c.products.length}</span>
                    <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${isActiveCat ? `${c.textColor} translate-x-0.5` : "text-muted-foreground/40"}`} />
                  </button>

                  {isActiveCat && (
                    <div className="ml-4 mt-1 flex flex-col gap-0.5">
                      {c.products.map((p, pi) => {
                        const PIcon = p.icon;
                        const isActiveProd = selectedProd === pi;
                        return (
                          <button
                            key={pi}
                            onClick={() => setSelectedProd(pi)}
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-left transition-all duration-150 ${
                              isActiveProd ? `${c.bgColor} border border-${c.id}/30` : "hover:bg-secondary/50 border border-transparent"
                            }`}
                          >
                            <PIcon className={`w-3.5 h-3.5 shrink-0 ${isActiveProd ? c.textColor : "text-muted-foreground"}`} />
                            <span className={`text-[11px] font-semibold leading-tight ${isActiveProd ? c.textColor : "text-muted-foreground"}`}>{p.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Segments */}
          <div className="mt-auto px-3 pb-4 shrink-0">
            <div className="p-3 rounded-xl bg-card border border-border/30">
              <div className="flex items-center gap-1.5 mb-2">
                <Users className="w-3 h-3 text-primary" />
                <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Segments Served</p>
              </div>
              <div className="flex flex-wrap gap-1">
                {segments.map((s) => (
                  <span key={s} className="text-[9px] font-semibold text-primary bg-primary/10 px-1.5 py-0.5 rounded-full">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Product Detail */}
        <div className="flex-1 flex items-center justify-center px-10 overflow-hidden" key={`${selectedCat}-${selectedProd}`}>
          <div className="w-full max-w-[780px]">
            {/* Header */}
            <div className="flex items-start gap-5 animate-fade-in">
              <div className={`w-14 h-14 rounded-2xl ${cat.color} flex items-center justify-center text-primary-foreground shadow-lg shrink-0`}>
                <Icon className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className={`text-[11px] font-extrabold px-2 py-0.5 rounded-full ${cat.color} text-primary-foreground`}>{cat.id}</span>
                  <span className="text-[12px] text-muted-foreground font-mono">{cat.label}</span>
                </div>
                <h3 className="text-[30px] font-extrabold text-foreground leading-tight">{prod.name}</h3>
                <p className={`text-[16px] font-semibold ${cat.textColor}`}>{prod.tagline}</p>
              </div>
            </div>

            {/* Features grid */}
            <div className="mt-6 grid grid-cols-2 gap-3 animate-fade-in" style={{ animationDelay: "0.08s" }}>
              {prod.features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 px-4 py-3 rounded-xl bg-card border border-border/30 opacity-0 animate-fade-in hover:border-primary/20 transition-all"
                  style={{ animationDelay: `${0.1 + i * 0.04}s`, animationFillMode: "forwards" }}
                >
                  <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${cat.color}`} />
                  <span className="text-[13px] text-foreground leading-snug">{f}</span>
                </div>
              ))}
            </div>

            {/* Output bar */}
            <div className={`mt-5 p-4 rounded-2xl ${cat.bgColor} border ${cat.borderColor} animate-fade-in`} style={{ animationDelay: "0.3s" }}>
              <span className={`text-[11px] font-bold uppercase tracking-wider ${cat.textColor}`}>✓ Output</span>
              <p className="text-[15px] font-semibold text-foreground mt-1 leading-snug">{prod.output}</p>
            </div>

            {/* Category product strip */}
            <div className="mt-4 flex flex-wrap gap-2 animate-fade-in" style={{ animationDelay: "0.35s" }}>
              {cat.products.map((p, pi) => {
                const PIcon = p.icon;
                return (
                  <button
                    key={pi}
                    onClick={() => setSelectedProd(pi)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-semibold transition-all border ${
                      selectedProd === pi
                        ? `${cat.bgColor} ${cat.textColor} ${cat.borderColor}`
                        : "bg-secondary text-muted-foreground border-transparent hover:border-border/30"
                    }`}
                  >
                    <PIcon className="w-3 h-3" />
                    {p.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide06Features;
