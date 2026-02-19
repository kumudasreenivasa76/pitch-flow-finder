import SlideLayout from "../SlideLayout";
import { useState } from "react";
import { Cloud, Cpu, ShieldCheck, ArrowRight } from "lucide-react";
import layers3d from "@/assets/layers-3d-stack.png";

const layers = [
  {
    id: "L1",
    label: "GREEN INFRASTRUCTURE CLOUD™",
    subtitle: "Discover → Design → Build",
    color: "bg-primary",
    borderColor: "border-primary",
    glowColor: "shadow-primary/20",
    textColor: "text-primary",
    icon: Cloud,
    products: [
      { num: "01", name: "TerraScan™", role: "Site Feasibility" },
      { num: "02", name: "HelioTwin™", role: "3D Solar Modeling" },
      { num: "03", name: "CarbonX-Ray™", role: "Carbon Audit" },
      { num: "04", name: "CapStruct™", role: "Financial Structuring" },
      { num: "05", name: "SolarForge™", role: "Project Execution" },
      { num: "06", name: "GridLink™", role: "Utility Integration" },
      { num: "07", name: "EcoMarket™", role: "Vendor Management" },
    ],
  },
  {
    id: "L2",
    label: "ENERGY INTELLIGENCE OS™",
    subtitle: "Monitor → Optimize → Predict",
    color: "bg-eco-teal",
    borderColor: "border-eco-teal",
    glowColor: "shadow-eco-teal/20",
    textColor: "text-eco-teal",
    icon: Cpu,
    products: [
      { num: "08", name: "VoltIQ™", role: "Real-Time Dashboard" },
      { num: "09", name: "WattWise AI™", role: "Optimization Engine" },
    ],
  },
  {
    id: "L3",
    label: "CARBON & COMPLIANCE EXCHANGE™",
    subtitle: "Monetize → Report → Prove",
    color: "bg-eco-emerald",
    borderColor: "border-eco-emerald",
    glowColor: "shadow-eco-emerald/20",
    textColor: "text-eco-emerald",
    icon: ShieldCheck,
    products: [
      { num: "10", name: "RECMatrix™", role: "REC Management" },
      { num: "11", name: "CarbonLedger™", role: "Carbon Accounting" },
      { num: "12", name: "NetZero Navigator™", role: "Target Tracking" },
      { num: "13", name: "GreenBoard™", role: "Executive View" },
      { num: "14", name: "ComplySphere™", role: "ESG Reporting" },
      { num: "15", name: "AuditTrail360™", role: "Audit Vault" },
    ],
  },
];

const phases = ["Discover", "Design", "Build", "Monitor", "Optimize", "Certify", "Report", "Scale"];

const Slide05Platform = () => {
  const [selected, setSelected] = useState(0);
  const l = layers[selected];
  const Icon = l.icon;

  return (
    <SlideLayout>
      <div className="w-full h-full flex bg-background" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>

        {/* ── LEFT COLUMN: Header + 3D visual + lifecycle ── */}
        <div className="w-[520px] shrink-0 flex flex-col items-center justify-between py-10 px-10 border-r border-border/30 bg-card/30">
          {/* Title */}
          <div className="w-full opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-3">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[11px] font-bold text-primary uppercase tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Climate Infrastructure OS
              </span>
            </div>
            <h2 className="text-[26px] font-extrabold text-foreground leading-tight">
              The EcoGridia <span className="text-primary">Integrated Climate</span> Infrastructure Platform
            </h2>
            <p className="text-[13px] text-muted-foreground mt-2 font-medium">
              Three Intelligence Layers. One Unified Energy Stack.
            </p>
          </div>

          {/* 3D Stack Visual with layer labels */}
          <div className="relative w-full flex items-center justify-center opacity-0 animate-fade-in" style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}>
            {/* Layer labels on left */}
            <div className="flex flex-col justify-between h-[260px] mr-4 pr-3">
              {layers.map((layer, i) => {
                const LIcon = layer.icon;
                const isActive = selected === i;
                return (
                  <button
                    key={i}
                    onClick={() => setSelected(i)}
                    className={`flex items-center gap-2.5 text-left transition-all duration-200 group`}
                  >
                    <div className={`w-1 h-10 rounded-full transition-all duration-300 ${isActive ? layer.color : "bg-border"}`} />
                    <div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider transition-colors ${isActive ? layer.textColor : "text-muted-foreground"}`}
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        Layer {layer.id}
                      </span>
                      <p className={`text-[11px] font-semibold leading-tight transition-colors max-w-[130px] ${isActive ? "text-foreground" : "text-muted-foreground/70"}`}>
                        {layer.label.split("™")[0]}™
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* 3D Image */}
            <div className="relative">
              <img
                src={layers3d}
                alt="3D Platform Layers"
                className="w-[280px] object-contain drop-shadow-xl"
                style={{ mixBlendMode: "multiply" }}
              />
              {/* Animated ring on selected layer */}
              <div
                className={`absolute inset-0 rounded-full opacity-20 blur-2xl transition-all duration-500 ${l.color}`}
                style={{ top: selected === 0 ? "10%" : selected === 1 ? "40%" : "65%" }}
              />
            </div>
          </div>

          {/* Lifecycle bar */}
          <div className="w-full p-3 rounded-xl bg-card border border-border/30 opacity-0 animate-fade-in" style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2 text-center"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Project Lifecycle
            </p>
            <div className="flex items-center justify-center flex-wrap gap-1">
              {phases.map((p, i) => (
                <div key={p} className="flex items-center gap-1">
                  <span className="text-[10px] font-semibold text-primary">{p}</span>
                  {i < phases.length - 1 && <ArrowRight className="w-2.5 h-2.5 text-muted-foreground/40" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN: Active layer detail ── */}
        <div className="flex-1 flex flex-col justify-center px-12 overflow-hidden" key={selected}>
          {/* Layer header */}
          <div className="flex items-center gap-4 mb-6 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
            <div className={`w-14 h-14 rounded-2xl ${l.color} flex items-center justify-center text-white shadow-lg`}>
              <Icon className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[11px] text-muted-foreground font-mono uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Layer {l.id} · {l.products.length} Products
              </span>
              <h3 className="text-[28px] font-extrabold text-foreground leading-tight">{l.label}</h3>
              <p className={`text-[13px] font-bold ${l.textColor}`}>{l.subtitle}</p>
            </div>
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-3 gap-3">
            {l.products.map((p, pi) => (
              <div
                key={pi}
                className={`rounded-2xl bg-card border border-border/30 p-4 opacity-0 animate-fade-in hover:border-primary/40 hover:shadow-lg transition-all duration-200`}
                style={{ animationDelay: `${0.08 + pi * 0.05}s`, animationFillMode: "forwards" }}
              >
                <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full font-mono block w-fit mb-2"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {p.num}
                </span>
                <p className="text-[16px] font-bold text-foreground leading-tight">{p.name}</p>
                <p className="text-[12px] text-muted-foreground mt-1">{p.role}</p>
              </div>
            ))}
          </div>

          {/* Stats bar */}
          <div className={`mt-6 p-4 rounded-2xl bg-primary/[0.05] border border-primary/20 flex items-center gap-6 opacity-0 animate-fade-in`}
            style={{ animationDelay: "0.45s", animationFillMode: "forwards" }}>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-[13px] font-bold text-primary">{l.products.length} Integrated Products</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <span className="text-[13px] text-muted-foreground">{l.subtitle}</span>
            <div className="ml-auto flex gap-2">
              {layers.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${selected === i ? "bg-primary scale-125" : "bg-border hover:bg-primary/40"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide05Platform;
