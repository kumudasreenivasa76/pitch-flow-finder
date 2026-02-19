import SlideLayout from "../SlideLayout";
import { useState } from "react";
import {
  GraduationCap, Server, Users, Landmark, TreePine, HardHat, Briefcase,
  Zap, X, ChevronRight, Cpu
} from "lucide-react";
import ecosystemImg from "@/assets/ecogridia-ecosystem-3d.png";

const stakeholders = [
  {
    id: 1, icon: GraduationCap, label: "Schools",
    color: "#059669", bg: "rgba(5,150,105,0.12)", border: "rgba(5,150,105,0.40)", text: "#065f46",
    products: [
      { name: "BaselineIQ™", desc: "Energy & carbon baseline" },
      { name: "CarbonX-Ray™", desc: "Emissions mapping" },
      { name: "HelioTwin™", desc: "Rooftop solar modeling" },
      { name: "CapStruct™", desc: "ROI & grant modeling" },
      { name: "VoltIQ™", desc: "Energy dashboard" },
      { name: "RECMatrix™", desc: "REC tracking" },
    ],
    values: ["Lower electricity cost", "Carbon-neutral campus roadmap", "Student sustainability dashboards", "Grant & funding readiness"],
  },
  {
    id: 2, icon: Server, label: "Data",
    color: "#0891b2", bg: "rgba(8,145,178,0.12)", border: "rgba(8,145,178,0.40)", text: "#0e7490",
    products: [
      { name: "BaselineIQ™", desc: "IT vs facility load audit" },
      { name: "CarbonMatch 24/7™", desc: "Hourly renewable matching" },
      { name: "PUE Guardian™", desc: "Efficiency monitoring" },
      { name: "WattWise AI™", desc: "Load forecasting" },
      { name: "RECMatrix™", desc: "REC procurement" },
      { name: "ComplySphere™", desc: "SEC / CSRD reporting" },
    ],
    values: ["Renewable % improvement", "PUE optimization", "ESG compliance", "Investor reporting"],
  },
  {
    id: 3, icon: TreePine, label: "Landowners",
    color: "#16a34a", bg: "rgba(22,163,74,0.12)", border: "rgba(22,163,74,0.35)", text: "#15803d",
    products: [
      { name: "TerraScan™", desc: "Land potential assessment" },
      { name: "CapStruct™", desc: "Lease & yield modeling" },
      { name: "SolarForge™", desc: "Project deployment" },
      { name: "FundVista™", desc: "Revenue tracking" },
    ],
    values: ["Land monetization", "Long-term lease income", "Climate asset participation"],
  },
  {
    id: 0, icon: Cpu, label: "EcoGridia",
    color: "#059669", bg: "rgba(5,150,105,0.12)", border: "rgba(5,150,105,0.40)", text: "#065f46",
    products: [
      { name: "Infrastructure SaaS", desc: "End-to-end platform" },
      { name: "Carbon OS", desc: "Unified emissions tracking" },
      { name: "Marketplace", desc: "Vendor & REC exchange" },
      { name: "Analytics Engine", desc: "Real-time intelligence" },
    ],
    values: ["Single platform for all stakeholders", "No fragmentation", "One source of truth", "From asset to compliance"],
  },
  {
    id: 6, icon: HardHat, label: "Vendors",
    color: "#db2777", bg: "rgba(219,39,119,0.12)", border: "rgba(219,39,119,0.30)", text: "#be185d",
    products: [
      { name: "EcoMarket™", desc: "Vendor onboarding" },
      { name: "SolarForge™", desc: "Project milestone tracking" },
      { name: "SLA Analytics", desc: "Performance scoring" },
      { name: "Payment Dashboard", desc: "Payment tracking" },
    ],
    values: ["Verified project pipeline", "Performance-based ranking", "Structured contract flow", "Marketplace visibility"],
  },
  {
    id: 5, icon: Users, label: "Green",
    color: "#7c3aed", bg: "rgba(124,58,237,0.10)", border: "rgba(124,58,237,0.35)", text: "#6d28d9",
    products: [
      { name: "TerraScan™", desc: "Rooftop feasibility" },
      { name: "HelioTwin™", desc: "Solar modeling" },
      { name: "CrowdSolar™", desc: "Fractional ownership" },
      { name: "VoltIQ™", desc: "Shared energy dashboard" },
    ],
    values: ["Reduced energy bills", "Shared solar income", "Community sustainability", "Passive yield for residents"],
  },
  {
    id: 4, icon: Landmark, label: "Government",
    color: "#d97706", bg: "rgba(217,119,6,0.10)", border: "rgba(217,119,6,0.35)", text: "#b45309",
    products: [
      { name: "CarbonX-Ray™", desc: "Regional carbon audit" },
      { name: "NetZero Navigator™", desc: "Decarbonization roadmap" },
      { name: "ComplySphere™", desc: "Policy reporting" },
      { name: "GreenBoard™", desc: "City/state dashboard" },
    ],
    values: ["Net-zero progress tracking", "Climate reporting", "Policy impact measurement", "Regional renewable monitoring"],
  },
  {
    id: 7, icon: Zap, label: "Energy",
    color: "#ea580c", bg: "rgba(234,88,12,0.10)", border: "rgba(234,88,12,0.30)", text: "#c2410c",
    products: [
      { name: "CapStruct™", desc: "SPV modeling" },
      { name: "FundVista™", desc: "Yield & asset analytics" },
      { name: "RECMatrix™", desc: "Certificate revenue" },
      { name: "GreenBoard™", desc: "Portfolio climate ROI" },
    ],
    values: ["Climate asset visibility", "Structured renewable returns", "Carbon-linked yield tracking", "ESG portfolio compliance"],
  },
];

const Slide04Ecosystem = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const sel = stakeholders.find((s) => s.id === selected) ?? null;

  return (
    <SlideLayout>
      <div className="relative w-full h-full flex flex-col items-center bg-white overflow-hidden px-16 py-6">

        {/* Grid background */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.5,
          }}
        />

        {/* Header */}
        <div className="relative z-10 text-center mb-5 animate-fade-in shrink-0">
          <span className="inline-block px-5 py-1.5 rounded-full border border-primary/30 bg-primary/8 text-primary text-[15px] font-bold tracking-widest uppercase mb-3">
            Institution-Centric Ecosystem
          </span>
          <h2 className="text-[48px] font-extrabold text-foreground leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            How Clean Energy Runs Through Institutions
          </h2>
          <p className="text-[18px] text-muted-foreground mt-2">
            EcoGridia connects institutions, infrastructure, vendors, and regulators through a{" "}
            <span className="text-primary font-semibold">single infrastructure SaaS layer.</span>
          </p>
        </div>

        {/* Dark image container */}
        <div className="relative z-10 w-full flex-1 rounded-2xl overflow-hidden shadow-2xl" style={{ maxHeight: 680 }}>
          <img
            src={ecosystemImg}
            alt="EcoGridia Institution-Centric Ecosystem"
            className="w-full h-full object-cover"
          />

          {/* Overlay detail card */}
          {sel && (
            <div
              className="absolute inset-0 flex items-center justify-center animate-fade-in"
              style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
              onClick={() => setSelected(null)}
            >
              <div
                className="relative w-[700px] rounded-3xl shadow-2xl p-8 flex gap-6 animate-fade-in"
                style={{ background: "rgba(255,255,255,0.97)", border: `2px solid ${sel.border}` }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 p-2 rounded-xl hover:bg-muted transition-colors"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>

                {/* Left */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ background: sel.bg, border: `1.5px solid ${sel.border}` }}>
                      <sel.icon className="w-6 h-6" style={{ color: sel.color }} />
                    </div>
                    <div>
                      <p className="text-[12px] text-muted-foreground uppercase tracking-widest font-bold">Stakeholder</p>
                      <h3 className="text-[26px] font-extrabold" style={{ color: sel.text, fontFamily: "'Space Grotesk', sans-serif" }}>
                        {sel.label}
                      </h3>
                    </div>
                  </div>

                  <p className="text-[12px] font-bold text-muted-foreground uppercase tracking-widest mb-3">Products Used</p>
                  <div className="space-y-1.5">
                    {sel.products.map((p, i) => (
                      <div key={i} className="flex items-start gap-2.5 px-3 py-2 rounded-xl"
                        style={{ background: sel.bg, border: `1px solid ${sel.border}` }}>
                        <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: sel.color }} />
                        <div>
                          <p className="text-[13px] font-bold text-foreground">{p.name}</p>
                          <p className="text-[11px] text-muted-foreground">{p.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right — Value */}
                <div className="w-[220px] shrink-0 rounded-2xl p-5 flex flex-col"
                  style={{ background: sel.bg, border: `1.5px solid ${sel.border}` }}>
                  <p className="text-[12px] font-black uppercase tracking-widest mb-4" style={{ color: sel.color }}>Value Delivered</p>
                  <div className="space-y-3 flex-1">
                    {sel.values.map((v, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full shrink-0 mt-1.5" style={{ background: sel.color }} />
                        <span className="text-[14px] font-semibold text-foreground leading-snug">{v}</span>
                      </div>
                    ))}
                  </div>
                  {/* Nav dots */}
                  <div className="flex items-center justify-center gap-1.5 mt-4">
                    {stakeholders.map((s) => (
                      <button key={s.id} onClick={(e) => { e.stopPropagation(); setSelected(s.id); }}
                        className="rounded-full transition-all"
                        style={{
                          width: s.id === selected ? 20 : 8,
                          height: 8,
                          background: s.id === selected ? sel.color : "rgba(0,0,0,0.15)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom tab bar */}
        <div className="relative z-10 flex items-center gap-2 mt-4 shrink-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          {stakeholders.map((s) => {
            const Icon = s.icon;
            const isActive = selected === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setSelected(isActive ? null : s.id)}
                className="flex items-center gap-2 px-4 py-2 rounded-full border-2 text-[14px] font-semibold transition-all duration-300"
                style={{
                  background: isActive ? s.color : "white",
                  borderColor: isActive ? s.color : "#e5e7eb",
                  color: isActive ? "white" : "#374151",
                }}
              >
                <Icon className="w-4 h-4" />
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
