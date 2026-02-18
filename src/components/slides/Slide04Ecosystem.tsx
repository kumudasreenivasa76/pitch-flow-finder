import SlideLayout from "../SlideLayout";
import { useState } from "react";
import {
  GraduationCap, Server, Users, Landmark, TreePine, HardHat, Briefcase,
  Zap, X, ChevronRight
} from "lucide-react";

const stakeholders = [
  {
    id: 1,
    icon: GraduationCap,
    label: "Schools",
    emoji: "🎓",
    color: "text-eco-emerald",
    bg: "bg-eco-emerald/10",
    border: "border-eco-emerald/40",
    activeBg: "bg-eco-emerald/20",
    angle: -90,
    products: [
      { name: "BaselineIQ™", desc: "Energy & carbon baseline" },
      { name: "CarbonX-Ray™", desc: "Emissions mapping" },
      { name: "HelioTwin™", desc: "Rooftop solar modeling" },
      { name: "CapStruct™", desc: "ROI & grant modeling" },
      { name: "VoltIQ™", desc: "Energy dashboard" },
      { name: "RECMatrix™", desc: "REC tracking" },
      { name: "GreenBoard™", desc: "ESG reporting" },
    ],
    values: [
      "Lower electricity cost",
      "Carbon-neutral campus roadmap",
      "Student sustainability dashboards",
      "Grant & government funding readiness",
    ],
  },
  {
    id: 2,
    icon: Server,
    label: "Data Centers",
    emoji: "🏢",
    color: "text-eco-teal",
    bg: "bg-eco-teal/10",
    border: "border-eco-teal/40",
    activeBg: "bg-eco-teal/20",
    angle: -30,
    products: [
      { name: "BaselineIQ™", desc: "IT vs facility load audit" },
      { name: "CarbonX-Ray™", desc: "Scope 1 & 2 analysis" },
      { name: "CarbonMatch 24/7™", desc: "Hourly renewable matching" },
      { name: "PUE Guardian™", desc: "Efficiency monitoring" },
      { name: "WattWise AI™", desc: "Load forecasting" },
      { name: "RECMatrix™", desc: "REC procurement" },
      { name: "CarbonLedger™", desc: "Offset management" },
      { name: "ComplySphere™", desc: "SEC / CSRD reporting" },
      { name: "GreenBoard™", desc: "Board dashboard" },
    ],
    values: [
      "Renewable % improvement",
      "PUE optimization",
      "ESG compliance",
      "Carbon offset strategy",
      "Investor reporting",
    ],
  },
  {
    id: 3,
    icon: Users,
    label: "Communities",
    emoji: "🏘",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/40",
    activeBg: "bg-primary/20",
    angle: 30,
    products: [
      { name: "TerraScan™", desc: "Rooftop feasibility" },
      { name: "HelioTwin™", desc: "Solar modeling" },
      { name: "CapStruct™", desc: "Community financing" },
      { name: "CrowdSolar™", desc: "Fractional ownership" },
      { name: "VoltIQ™", desc: "Shared energy dashboard" },
      { name: "RECMatrix™", desc: "REC allocation" },
    ],
    values: [
      "Reduced energy bills",
      "Shared solar income",
      "Community-level sustainability",
      "Passive yield for residents",
    ],
  },
  {
    id: 4,
    icon: Landmark,
    label: "Government",
    emoji: "🏛",
    color: "text-eco-amber",
    bg: "bg-eco-amber/10",
    border: "border-eco-amber/40",
    activeBg: "bg-eco-amber/20",
    angle: 90,
    products: [
      { name: "CarbonX-Ray™", desc: "Regional carbon audit" },
      { name: "NetZero Navigator™", desc: "Decarbonization roadmap" },
      { name: "ComplySphere™", desc: "Policy reporting" },
      { name: "GreenBoard™", desc: "City/state dashboard" },
      { name: "RECMatrix™", desc: "Renewable tracking" },
    ],
    values: [
      "Net-zero progress tracking",
      "Climate reporting",
      "Policy impact measurement",
      "Regional renewable monitoring",
    ],
  },
  {
    id: 5,
    icon: TreePine,
    label: "Landowners",
    emoji: "🌱",
    color: "text-eco-emerald",
    bg: "bg-eco-emerald/10",
    border: "border-eco-emerald/40",
    activeBg: "bg-eco-emerald/20",
    angle: 150,
    products: [
      { name: "TerraScan™", desc: "Land potential assessment" },
      { name: "CapStruct™", desc: "Lease & yield modeling" },
      { name: "SolarForge™", desc: "Project deployment" },
      { name: "FundVista™", desc: "Revenue tracking" },
    ],
    values: [
      "Land monetization",
      "Long-term lease income",
      "Climate asset participation",
    ],
  },
  {
    id: 6,
    icon: HardHat,
    label: "Vendors",
    emoji: "🏗",
    color: "text-eco-teal",
    bg: "bg-eco-teal/10",
    border: "border-eco-teal/40",
    activeBg: "bg-eco-teal/20",
    angle: 210,
    products: [
      { name: "EcoMarket™", desc: "Vendor onboarding" },
      { name: "SolarForge™", desc: "Project milestone tracking" },
      { name: "SLA Analytics", desc: "Performance scoring" },
      { name: "Payment Dashboard", desc: "Payment tracking" },
    ],
    values: [
      "Verified project pipeline",
      "Performance-based ranking",
      "Structured contract flow",
      "Marketplace visibility",
    ],
  },
  {
    id: 7,
    icon: Briefcase,
    label: "Investors",
    emoji: "💼",
    color: "text-eco-amber",
    bg: "bg-eco-amber/10",
    border: "border-eco-amber/40",
    activeBg: "bg-eco-amber/20",
    angle: 270,
    products: [
      { name: "CapStruct™", desc: "SPV modeling" },
      { name: "FundVista™", desc: "Yield & asset analytics" },
      { name: "RECMatrix™", desc: "Certificate revenue" },
      { name: "CarbonLedger™", desc: "Carbon asset value" },
      { name: "GreenBoard™", desc: "Portfolio climate ROI" },
    ],
    values: [
      "Climate asset visibility",
      "Structured renewable returns",
      "Carbon-linked yield tracking",
      "ESG portfolio compliance",
    ],
  },
];

const RX = 310;
const RY = 210;

const Slide04Ecosystem = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const selectedStakeholder = stakeholders.find((s) => s.id === selected) ?? null;

  return (
    <SlideLayout>
      <div className="flex h-full overflow-hidden">
        {/* Left: Ecosystem diagram */}
        <div className="flex-1 relative flex items-center justify-center overflow-hidden">
          {/* Title */}
          <div className="absolute top-6 left-8 z-20">
            <h2 className="text-3xl font-extrabold text-foreground leading-tight">
              Institution-Centric <span className="text-primary">Ecosystem</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-0.5">
              Every stakeholder connects through EcoGridia
            </p>
          </div>

          {/* SVG connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            {stakeholders.map((s) => {
              const angleRad = (s.angle * Math.PI) / 180;
              const cx = 50;
              const cy = 50;
              const nodeX = 50 + (Math.cos(angleRad) * RX / 6.5);
              const nodeY = 50 + (Math.sin(angleRad) * RY / 4.2);
              const isActive = selected === s.id;
              return (
                <line
                  key={s.id}
                  x1={`${cx}%`} y1={`${cy}%`}
                  x2={`${nodeX}%`} y2={`${nodeY}%`}
                  stroke={isActive ? "hsl(160, 84%, 39%)" : "hsl(160, 84%, 39%)"}
                  strokeWidth={isActive ? 2 : 1}
                  strokeDasharray={isActive ? "6 3" : "5 5"}
                  opacity={isActive ? 0.6 : 0.2}
                />
              );
            })}
          </svg>

          {/* Center hub */}
          <div
            className="w-36 h-36 rounded-full bg-primary/10 border-4 border-primary flex items-center justify-center z-10 cursor-pointer hover:bg-primary/20 transition-all shadow-xl"
            style={{ position: "relative" }}
            onClick={() => setSelected(null)}
          >
            <div className="text-center">
              <Zap className="w-10 h-10 text-primary mx-auto mb-1" />
              <span className="text-lg font-extrabold text-foreground leading-tight">EcoGridia</span>
              <p className="text-[9px] text-muted-foreground font-semibold tracking-wide">Platform</p>
            </div>
          </div>

          {/* Stakeholder nodes */}
          {stakeholders.map((s, i) => {
            const angleRad = (s.angle * Math.PI) / 180;
            const x = 50 + (Math.cos(angleRad) * RX) / 6.5;
            const y = 50 + (Math.sin(angleRad) * RY) / 4.2;
            const isActive = selected === s.id;
            const Icon = s.icon;

            return (
              <button
                key={s.id}
                onClick={() => setSelected(isActive ? null : s.id)}
                className={`absolute flex flex-col items-center gap-1.5 transition-all duration-200 z-10 group`}
                style={{
                  left: `calc(${x}% - 44px)`,
                  top: `calc(${y}% - 50px)`,
                  animationDelay: `${i * 0.08}s`,
                }}
              >
                <div
                  className={`w-20 h-20 rounded-2xl border-2 flex items-center justify-center shadow-lg transition-all duration-200
                    ${isActive ? `${s.activeBg} ${s.border} scale-110 shadow-xl` : `bg-card border-border/40 hover:${s.border} group-hover:scale-105`}`}
                >
                  <Icon className={`w-9 h-9 ${isActive ? s.color : "text-muted-foreground group-hover:" + s.color}`} />
                </div>
                <span className={`text-[11px] font-bold leading-tight text-center transition-colors ${isActive ? s.color : "text-foreground"}`}>
                  {s.label}
                </span>
                {isActive && (
                  <span className={`w-1.5 h-1.5 rounded-full ${s.bg} border ${s.border} animate-pulse`} />
                )}
              </button>
            );
          })}

          {/* Hint */}
          {!selected && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground/60 font-medium tracking-wide animate-pulse">
              Click a stakeholder to explore
            </div>
          )}
        </div>

        {/* Right: Detail Panel */}
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden flex flex-col ${
            selectedStakeholder ? "w-[360px] opacity-100" : "w-0 opacity-0"
          } bg-card border-l border-border/30`}
        >
          {selectedStakeholder && (
            <div className="flex flex-col h-full overflow-y-auto">
              {/* Header */}
              <div className={`px-6 pt-6 pb-4 ${selectedStakeholder.bg} border-b ${selectedStakeholder.border}`}>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl ${selectedStakeholder.activeBg} border ${selectedStakeholder.border} flex items-center justify-center shrink-0`}>
                      <selectedStakeholder.icon className={`w-6 h-6 ${selectedStakeholder.color}`} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-0.5">Stakeholder</p>
                      <h3 className={`text-xl font-extrabold ${selectedStakeholder.color} leading-tight`}>
                        {selectedStakeholder.label}
                      </h3>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="w-7 h-7 rounded-lg hover:bg-secondary flex items-center justify-center transition-colors shrink-0 mt-1"
                  >
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              </div>

              {/* Products */}
              <div className="px-5 py-4 border-b border-border/20 flex-1">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">Products Used</p>
                <div className="flex flex-col gap-2">
                  {selectedStakeholder.products.map((p, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-2.5 px-3 py-2.5 rounded-xl bg-background border border-border/30 hover:${selectedStakeholder.border} transition-all`}
                    >
                      <ChevronRight className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${selectedStakeholder.color}`} />
                      <div>
                        <p className="text-[12px] font-bold text-foreground leading-tight">{p.name}</p>
                        <p className="text-[10px] text-muted-foreground leading-snug">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Value */}
              <div className={`px-5 py-4 ${selectedStakeholder.bg}`}>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">Value Delivered</p>
                <div className="flex flex-col gap-1.5">
                  {selectedStakeholder.values.map((v, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${selectedStakeholder.activeBg} border ${selectedStakeholder.border}`} />
                      <span className="text-[12px] font-semibold text-foreground">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide04Ecosystem;
