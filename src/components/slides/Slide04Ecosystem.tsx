import SlideLayout from "../SlideLayout";
import { useState } from "react";
import {
  GraduationCap, Server, MapPin, Wrench, Landmark, Zap, Cpu, Briefcase,
} from "lucide-react";
import ecosystemImg from "@/assets/ecogridia-ecosystem-3d.png";

const stakeholders = [
  {
    id: "schools",
    icon: GraduationCap,
    label: "Schools",
    color: "#6366f1",
    bg: "rgba(99,102,241,0.15)",
    description: "Lower electricity costs and carbon-neutral campus roadmaps",
    products: ["BaselineIQ™", "CarbonX-Ray™", "HelioTwin™", "VoltIQ™", "RECMatrix™"],
    values: ["Lower electricity cost", "Carbon-neutral campus", "Student dashboards", "Grant readiness"],
    // position % on image
    posX: 26, posY: 34,
  },
  {
    id: "data",
    icon: Server,
    label: "Data",
    color: "#a855f7",
    bg: "rgba(168,85,247,0.15)",
    description: "PUE optimization and 24/7 renewable matching for data centers",
    products: ["BaselineIQ™", "CarbonMatch 24/7™", "PUE Guardian™", "WattWise AI™", "RECMatrix™"],
    values: ["Renewable % improvement", "PUE optimization", "ESG compliance"],
    posX: 74, posY: 28,
  },
  {
    id: "landowners",
    icon: MapPin,
    label: "Landowners",
    color: "#f97316",
    bg: "rgba(249,115,22,0.15)",
    description: "Land monetization via long-term lease income and solar deployment",
    products: ["TerraScan™", "CapStruct™", "SolarForge™", "FundVista™"],
    values: ["Land monetization", "Long-term lease income", "Climate participation"],
    posX: 18, posY: 52,
  },
  {
    id: "vendors",
    icon: Wrench,
    label: "Vendors",
    color: "#ec4899",
    bg: "rgba(236,72,153,0.15)",
    description: "Verified project pipeline and performance-based vendor ranking",
    products: ["EcoMarket™", "SolarForge™", "SLA Analytics", "Payment Dashboard"],
    values: ["Verified pipeline", "Performance ranking", "Contract flow"],
    posX: 34, posY: 70,
  },
  {
    id: "green",
    icon: Briefcase,
    label: "Green",
    color: "#10b981",
    bg: "rgba(16,185,129,0.15)",
    description: "Green consulting with auditable ESG intelligence and compliance",
    products: ["CarbonX-Ray™", "NetZero Navigator™", "ComplySphere™"],
    values: ["Audit-ready data", "ESG strategies", "Client reporting"],
    posX: 50, posY: 72,
  },
  {
    id: "government",
    icon: Landmark,
    label: "Government",
    color: "#14b8a6",
    bg: "rgba(20,184,166,0.15)",
    description: "Net-zero progress tracking and regional renewable monitoring",
    products: ["CarbonX-Ray™", "NetZero Navigator™", "ComplySphere™", "GreenBoard™"],
    values: ["Net-zero tracking", "Climate reporting", "Policy impact"],
    posX: 66, posY: 68,
  },
  {
    id: "energy",
    icon: Zap,
    label: "Energy",
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.15)",
    description: "Renewable energy procurement and structured capital navigation",
    products: ["RECMatrix™", "CarbonLedger™", "FundVista™", "CapStruct™"],
    values: ["REC procurement", "Carbon offset", "Yield tracking"],
    posX: 82, posY: 52,
  },
];

const Slide04Ecosystem = () => {
  const [selected, setSelected] = useState<string>("schools");
  const sel = stakeholders.find((s) => s.id === selected)!;
  const SelIcon = sel.icon;

  return (
    <SlideLayout>
      <div
        className="absolute inset-0 flex flex-col"
        style={{ fontFamily: "'Space Grotesk', sans-serif", background: "linear-gradient(160deg,#f8fffe 0%,#f0faf7 60%,#f5f9ff 100%)" }}
      >
        {/* ── Header ── */}
        <div className="flex flex-col items-center pt-10 pb-4 shrink-0">
          <div className="inline-flex items-center gap-2 border border-primary/30 rounded-full px-5 py-1.5 mb-4" style={{ background: "hsl(160 84% 39% / 0.08)" }}>
            <span className="text-[14px] font-bold text-primary tracking-wide">Institution-Centric Ecosystem</span>
          </div>
          <h2 className="text-[52px] font-extrabold text-foreground leading-tight text-center">
            How Clean Energy Runs Through Institutions
          </h2>
          <p className="text-[20px] text-muted-foreground text-center mt-2 max-w-[900px]">
            EcoGridia connects <span className="text-primary font-semibold">institutions</span>,{" "}
            <span className="text-primary font-semibold">infrastructure</span>,{" "}
            <span className="text-primary font-semibold">vendors</span>, and{" "}
            <span className="text-primary font-semibold">regulators</span> through a single{" "}
            <span className="text-primary font-semibold">infrastructure</span> SaaS layer.
          </p>
        </div>

        {/* ── Center: 3D image with floating labels + detail panel ── */}
        <div className="flex-1 flex gap-6 px-12 pb-4 overflow-hidden min-h-0">
          {/* Image + hotspot labels */}
          <div className="flex-1 relative rounded-3xl overflow-hidden" style={{ background: "#060d0a" }}>
            {/* Radial glow overlay */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(16,185,129,0.18) 0%, transparent 65%)", zIndex: 1 }} />

            <img
              src={ecosystemImg}
              alt="EcoGridia Institution-Centric Ecosystem"
              className="w-full h-full object-cover"
              style={{ mixBlendMode: "normal", opacity: 0.92 }}
            />

            {/* Floating institution badges on image */}
            {stakeholders.map((s) => {
              const Icon = s.icon;
              const isActive = selected === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setSelected(s.id)}
                  className="absolute flex flex-col items-center gap-1.5 z-10 group transition-all duration-200"
                  style={{ left: `${s.posX}%`, top: `${s.posY}%`, transform: "translate(-50%,-50%)" }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-200"
                    style={{
                      background: isActive ? s.color : s.bg,
                      border: `2.5px solid ${s.color}`,
                      boxShadow: isActive ? `0 0 0 6px ${s.bg}, 0 8px 24px ${s.bg}` : `0 4px 12px rgba(0,0,0,0.3)`,
                      transform: isActive ? "scale(1.25)" : "scale(1)",
                    }}
                  >
                    <Icon style={{ width: 22, height: 22, color: isActive ? "#fff" : s.color }} />
                  </div>
                  <span
                    className="text-[13px] font-bold px-2.5 py-0.5 rounded-full"
                    style={{
                      color: "#fff",
                      background: isActive ? s.color : "rgba(0,0,0,0.55)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    {s.label}
                  </span>
                </button>
              );
            })}

            {/* Center EcoGridia hub */}
            <div className="absolute z-10 flex flex-col items-center" style={{ left: "50%", top: "50%", transform: "translate(-50%,-50%)" }}>
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, hsl(160,84%,39%), hsl(186,79%,42%))",
                  boxShadow: "0 0 0 8px rgba(16,185,129,0.2), 0 0 40px rgba(16,185,129,0.5)",
                  border: "2px solid rgba(16,185,129,0.6)",
                }}
              >
                <Cpu style={{ width: 30, height: 30, color: "#fff" }} />
              </div>
              <span className="text-[15px] font-extrabold mt-2 px-3 py-1 rounded-full" style={{ color: "#fff", background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}>
                EcoGridia
              </span>
            </div>
          </div>

          {/* Detail panel */}
          <div
            key={selected}
            className="w-[380px] shrink-0 rounded-3xl border border-border/40 flex flex-col overflow-hidden"
            style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(16px)" }}
          >
            {/* Panel header */}
            <div className="px-8 pt-7 pb-5 border-b border-border/30" style={{ background: `linear-gradient(135deg, ${sel.bg}, transparent)` }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3" style={{ background: sel.color }}>
                <SelIcon style={{ width: 24, height: 24, color: "#fff" }} />
              </div>
              <h3 className="text-[26px] font-extrabold text-foreground leading-tight">{sel.label}</h3>
              <p className="text-[15px] text-muted-foreground mt-1 leading-snug">{sel.description}</p>
            </div>

            {/* Products */}
            <div className="px-8 py-5 border-b border-border/20">
              <p className="text-[11px] font-black tracking-widest text-muted-foreground uppercase mb-3" style={{ fontFamily: "'JetBrains Mono',monospace" }}>
                Platform Modules
              </p>
              <div className="flex flex-wrap gap-2">
                {sel.products.map((p) => (
                  <span
                    key={p}
                    className="text-[13px] font-bold px-3 py-1.5 rounded-full border"
                    style={{ color: sel.color, borderColor: sel.color + "55", background: sel.bg }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="px-8 py-5 flex-1">
              <p className="text-[11px] font-black tracking-widest text-muted-foreground uppercase mb-3" style={{ fontFamily: "'JetBrains Mono',monospace" }}>
                Key Value
              </p>
              <div className="flex flex-col gap-2">
                {sel.values.map((v) => (
                  <div key={v} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ background: sel.color }} />
                    <span className="text-[15px] text-foreground font-medium">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom tab bar ── */}
        <div className="shrink-0 flex items-center justify-center gap-3 pb-7">
          {stakeholders.map((s) => {
            const Icon = s.icon;
            const isActive = selected === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setSelected(s.id)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 text-[15px] font-semibold transition-all duration-200"
                style={{
                  borderColor: isActive ? s.color : "rgba(0,0,0,0.1)",
                  background: isActive ? s.color : "rgba(255,255,255,0.7)",
                  color: isActive ? "#fff" : "#374151",
                  boxShadow: isActive ? `0 4px 12px ${s.bg}` : "none",
                }}
              >
                <Icon style={{ width: 15, height: 15 }} />
                {s.label}
              </button>
            );
          })}
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide04Ecosystem;
