import { useState } from "react";
import SlideLayout from "../SlideLayout";
import { Building2, Zap, Award, Briefcase, Landmark, FileCheck, ChevronRight, X } from "lucide-react";
import flowImage from "@/assets/ecogridia-flow-3d.jpg";

const engines = [
  {
    icon: Building2,
    title: "Asset Onboarding",
    color: "from-eco-green/20 to-eco-teal/10",
    borderColor: "border-eco-green/30",
    items: [
      "Schools, universities, rooftop & utility solar",
      "Geo-tagged location + capacity (kW/MW)",
      "Grid connection & ownership structure",
      "Meter verification & historical production",
    ],
    output: "Asset profile created → Eligible for certification",
  },
  {
    icon: Zap,
    title: "Carbon & Energy Intelligence",
    color: "from-eco-teal/20 to-eco-emerald/10",
    borderColor: "border-eco-teal/30",
    items: [
      "Energy production log validation",
      "Grid injection proof & timestamp consistency",
      "Total kWh + avoided tCO₂e calculation",
      "REC/IREC eligibility & carbon credit potential",
    ],
    output: "Verified renewable generation record",
  },
  {
    icon: Award,
    title: "Certification Engine",
    color: "from-eco-emerald/20 to-eco-green/10",
    borderColor: "border-eco-emerald/30",
    items: [
      "Geographic eligibility & grid compliance",
      "Registry submission & validation",
      "REC/IREC issuance & ledger storage",
      "Lifecycle, ownership & retirement tracking",
    ],
    output: "Tradable environmental attribute issued",
  },
  {
    icon: Briefcase,
    title: "Enterprise ESG Engine",
    color: "from-primary/15 to-eco-green/10",
    borderColor: "border-primary/30",
    items: [
      "Scope 1/2/3 emissions baseline",
      "Carbon gap analysis & RE100 deficit",
      "REC purchase, offtake or project funding",
      "Matching by geography, price & additionality",
    ],
    output: "Decarbonization pathway + executed transactions",
  },
  {
    icon: Landmark,
    title: "Capital Deployment",
    color: "from-eco-green-dark/15 to-eco-teal/10",
    borderColor: "border-eco-green-dark/30",
    items: [
      "Enterprise commits capital to real projects",
      "EcoGridia structures agreement & due diligence",
      "Solar installed at school/university",
      "RECs issued to enterprise + impact reporting",
    ],
    output: "Structuring fee 2–5% + monitoring subscription",
  },
  {
    icon: FileCheck,
    title: "Reporting & Compliance",
    color: "from-eco-teal/15 to-eco-emerald/10",
    borderColor: "border-eco-teal/30",
    items: [
      "ESG reports & Scope 2 renewable disclosures",
      "Carbon neutral certification reports",
      "CSRD, SEC, IFRS-S2 compliance export",
      "Audit trail & investor-grade reporting",
    ],
    output: "Compliance subscription + reporting add-on",
  },
];

const users = [
  { label: "Schools", desc: "Get funding, dashboards & monetize RECs" },
  { label: "Solar Farms", desc: "Monetize generation & access buyers" },
  { label: "Enterprises", desc: "Achieve ESG goals & fund impact" },
  { label: "Investors", desc: "Access renewable pipeline & returns" },
];

const Slide07Layer1 = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <SlideLayout>
      <div className="flex flex-col h-full px-16 py-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-1 shrink-0 animate-fade-in">
          <span className="text-base font-bold text-primary-foreground bg-primary px-4 py-1 rounded-full">Layer 1</span>
          <h2 className="text-4xl font-bold text-foreground">EcoGridia — Complete End-to-End Flow</h2>
        </div>
        <p className="text-lg text-muted-foreground mb-6 shrink-0">
          Renewable Infrastructure Financing + ESG SaaS + Carbon Marketplace Platform
        </p>

        {/* Main content */}
        <div className="flex gap-6 flex-1 min-h-0">
          {/* Left: 3D Image */}
          <div className="w-[42%] shrink-0 flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl flex-1 min-h-0 group">
              <img
                src={flowImage}
                alt="EcoGridia end-to-end 3D isometric flow"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay labels on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-sm font-semibold text-foreground">6 Core Engines powering the full lifecycle →</p>
              </div>
              {/* Shimmer */}
              <div
                className="absolute inset-0 pointer-events-none animate-shimmer"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, hsla(160,84%,39%,0.06) 50%, transparent 100%)",
                  backgroundSize: "200% 100%",
                }}
              />
            </div>

            {/* User types row */}
            <div className="grid grid-cols-4 gap-2 shrink-0">
              {users.map((u, i) => (
                <div
                  key={u.label}
                  className="rounded-lg bg-card border border-border/50 p-2.5 text-center hover:border-primary/30 transition-all animate-fade-in"
                  style={{ animationDelay: `${0.6 + i * 0.08}s`, animationFillMode: "forwards", opacity: 0 }}
                >
                  <span className="text-sm font-semibold text-foreground block">{u.label}</span>
                  <span className="text-[10px] text-muted-foreground leading-tight block mt-0.5">{u.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Engine cards */}
          <div className="flex-1 min-h-0 relative">
            {active === null ? (
              <div className="grid grid-cols-2 gap-3 h-full">
                {engines.map((e, i) => (
                  <button
                    key={e.title}
                    onClick={() => setActive(i)}
                    className={`relative rounded-xl border ${e.borderColor} bg-gradient-to-br ${e.color} p-5 text-left
                      hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 transition-all duration-300
                      flex flex-col gap-2 animate-slide-up cursor-pointer group`}
                    style={{ animationDelay: `${i * 0.08}s`, animationFillMode: "forwards", opacity: 0 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <e.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground font-mono">Engine {i + 1}</span>
                        <h3 className="text-lg font-bold text-foreground leading-tight">{e.title}</h3>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2 mt-1">{e.output}</p>
                    <div className="flex items-center gap-1 text-primary text-xs font-medium mt-auto">
                      <span>Explore</span>
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              /* Expanded engine detail */
              <div className="h-full rounded-xl border border-primary/30 bg-gradient-to-br from-card to-primary/[0.03] p-8 animate-scale-in flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground">
                      {(() => { const Icon = engines[active].icon; return <Icon className="w-6 h-6" />; })()}
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground font-mono">Engine {active + 1} of 6</span>
                      <h3 className="text-2xl font-bold text-foreground">{engines[active].title}</h3>
                    </div>
                  </div>
                  <button
                    onClick={() => setActive(null)}
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <X className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>

                <div className="flex-1 space-y-3">
                  {engines[active].items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-lg bg-background/60 border border-border/40 animate-fade-in"
                      style={{ animationDelay: `${idx * 0.06}s`, animationFillMode: "forwards", opacity: 0 }}
                    >
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-base text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-4 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
                  <span className="text-sm font-semibold text-primary">Output →</span>
                  <span className="text-sm text-foreground ml-2">{engines[active].output}</span>
                </div>

                {/* Nav dots */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  {engines.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`rounded-full transition-all ${i === active ? "w-6 h-2 bg-primary" : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide07Layer1;
