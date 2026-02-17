import { useState } from "react";
import SlideLayout from "../SlideLayout";
import { Building2, Zap, Award, Briefcase, Landmark, FileCheck, X } from "lucide-react";
import ecosystemImg from "@/assets/ecogridia-ecosystem-3d.png";

const hotspots = [
  {
    id: 0,
    icon: Building2,
    label: "AssetSync",
    // position on the image (%)
    top: "18%", left: "8%",
    details: [
      "Schools, universities, rooftop & utility solar",
      "Geo-tagged location + capacity (kW/MW)",
      "Grid connection & ownership structure",
      "Meter verification & historical production",
    ],
    output: "Asset profile created → Eligible for certification",
    stat: "100M+",
    statLabel: "Rooftops untapped",
  },
  {
    id: 1,
    icon: Zap,
    label: "EnergyIQ",
    top: "5%", left: "30%",
    details: [
      "Energy production log validation",
      "Grid injection proof & timestamp consistency",
      "Total kWh + avoided tCO₂e calculation",
      "REC/IREC eligibility scoring",
    ],
    output: "Verified renewable generation record",
    stat: "24/7",
    statLabel: "Real-time monitoring",
  },
  {
    id: 2,
    icon: Award,
    label: "CertEngine",
    top: "10%", left: "62%",
    details: [
      "Geographic eligibility & grid compliance",
      "Registry submission & body validation",
      "REC/IREC issuance & ledger storage",
      "Lifecycle, ownership & retirement tracking",
    ],
    output: "Tradable environmental attribute issued",
    stat: "REC/IREC",
    statLabel: "Dual certification",
  },
  {
    id: 3,
    icon: Briefcase,
    label: "CarbonMatch",
    top: "55%", left: "10%",
    details: [
      "Scope 1/2/3 emissions baseline",
      "Carbon gap analysis & RE100 deficit",
      "REC purchase, offtake or project funding",
      "Matching by geography, price & additionality",
    ],
    output: "Decarbonization pathway + executed transactions",
    stat: "50K+",
    statLabel: "Companies under CSRD",
  },
  {
    id: 4,
    icon: Landmark,
    label: "CapitalFlow",
    top: "55%", left: "38%",
    details: [
      "Enterprise commits capital to real projects",
      "EcoGridia structures agreement & due diligence",
      "Solar installed at school/university",
      "RECs issued to enterprise + impact reporting",
    ],
    output: "Structuring fee 2–5% + monitoring subscription",
    stat: "$4T+",
    statLabel: "Investment gap by 2030",
  },
  {
    id: 5,
    icon: FileCheck,
    label: "ComplianceHub",
    top: "55%", left: "62%",
    details: [
      "ESG reports & Scope 2 renewable disclosures",
      "Carbon neutral certification reports",
      "CSRD, SEC, IFRS-S2 compliance export",
      "Audit trail & investor-grade reporting",
    ],
    output: "Compliance subscription + reporting add-on",
    stat: "CSRD",
    statLabel: "Ready compliance",
  },
];

const Slide07Layer1 = () => {
  const [active, setActive] = useState<number | null>(null);
  const activeData = active !== null ? hotspots[active] : null;

  return (
    <SlideLayout>
      <div className="relative w-full h-full overflow-hidden">
        {/* Header overlay */}
        <div className="absolute top-6 left-8 right-8 z-20 flex items-center gap-4 animate-fade-in">
          <span className="text-sm font-bold text-primary-foreground bg-primary px-4 py-1.5 rounded-full shadow-lg">Layer 1</span>
          <h2 className="text-3xl font-bold text-foreground drop-shadow-sm">EcoGridia — End-to-End Flow</h2>
          <span className="ml-auto text-sm text-muted-foreground bg-card/80 backdrop-blur px-3 py-1 rounded-full border border-border/50">
            Click any node to explore
          </span>
        </div>

        {/* Full-bleed 3D image */}
        <div className="absolute inset-0">
          <img
            src={ecosystemImg}
            alt="EcoGridia 3D isometric ecosystem"
            className="w-full h-full object-cover"
          />
          {/* Subtle dark overlay for readability */}
          <div className="absolute inset-0 bg-background/30" />
        </div>

        {/* Interactive hotspots */}
        {hotspots.map((h, i) => {
          const Icon = h.icon;
          const isActive = active === i;
          return (
            <button
              key={h.id}
              onClick={() => setActive(isActive ? null : i)}
              className={`absolute z-30 group transition-all duration-500 animate-fade-in`}
              style={{
                top: h.top,
                left: h.left,
                animationDelay: `${0.3 + i * 0.1}s`,
                animationFillMode: "forwards",
                opacity: 0,
              }}
            >
              {/* Pulse ring */}
              <span className={`absolute -inset-3 rounded-full animate-ping ${isActive ? "bg-primary/30" : "bg-primary/10"}`}
                style={{ animationDuration: "2.5s" }}
              />
              {/* Node */}
              <div className={`relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl backdrop-blur-md border shadow-xl
                transition-all duration-300 cursor-pointer
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
                  <span className="text-xs font-mono opacity-60">Engine {i + 1}</span>
                  <p className="text-sm font-bold leading-tight">{h.label}</p>
                </div>
              </div>
            </button>
          );
        })}

        {/* Detail panel (slides in from right) */}
        {activeData && (
          <div
            className="absolute right-6 top-16 bottom-6 w-[420px] z-40 rounded-2xl bg-card/95 backdrop-blur-xl
              border border-primary/20 shadow-2xl shadow-primary/10 p-7 flex flex-col animate-slide-in-right"
          >
            {/* Close */}
            <button onClick={() => setActive(null)} className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-muted transition-colors">
              <X className="w-5 h-5 text-muted-foreground" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
                {(() => { const Icon = activeData.icon; return <Icon className="w-7 h-7" />; })()}
              </div>
              <div>
                <span className="text-sm text-muted-foreground font-mono">Engine {activeData.id + 1} of 6</span>
                <h3 className="text-2xl font-bold text-foreground">{activeData.label}</h3>
              </div>
            </div>

            {/* Stat */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/[0.06] border border-primary/15 mb-5">
              <span className="text-3xl font-black text-primary">{activeData.stat}</span>
              <span className="text-sm text-muted-foreground">{activeData.statLabel}</span>
            </div>

            {/* Details */}
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

            {/* Output */}
            <div className="mt-4 p-3.5 rounded-xl bg-primary/10 border border-primary/20 shrink-0">
              <span className="text-xs font-bold text-primary uppercase tracking-wide">Output →</span>
              <p className="text-sm text-foreground mt-1">{activeData.output}</p>
            </div>

            {/* Engine navigation */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {hotspots.map((_, i) => (
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

export default Slide07Layer1;
