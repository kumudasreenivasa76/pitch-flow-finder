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
    textColor: "text-primary",
    dotColor: "bg-primary",
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
    textColor: "text-eco-teal",
    dotColor: "bg-eco-teal",
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
    textColor: "text-eco-emerald",
    dotColor: "bg-eco-emerald",
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
      {/* Full-bleed flex layout pinned to slide bounds */}
      <div
        className="absolute inset-0 flex"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {/* ── LEFT PANEL ── */}
        <div
          className="w-[500px] shrink-0 flex flex-col border-r border-border/40"
          style={{ background: "hsl(160 30% 98%)" }}
        >
          {/* ── Title ── */}
          <div style={{ padding: "60px 40px 48px" }} className="border-b border-border/30 shrink-0">
            <div
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4 opacity-0 animate-fade-in"
              style={{ animationFillMode: "forwards" }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span
                className="text-[11px] font-bold text-primary uppercase tracking-widest"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Climate Infrastructure OS
              </span>
            </div>
            <h2
              className="text-[28px] font-extrabold text-foreground leading-tight opacity-0 animate-fade-in"
              style={{ animationDelay: "0.06s", animationFillMode: "forwards" }}
            >
              The EcoGridia{" "}
              <span className="text-primary">Integrated Climate</span>{" "}
              Infrastructure Platform
            </h2>
            <p
              className="text-[13px] text-muted-foreground mt-2 font-medium opacity-0 animate-fade-in"
              style={{ animationDelay: "0.12s", animationFillMode: "forwards" }}
            >
              Three Intelligence Layers. One Unified Energy Stack.
            </p>
          </div>

          {/* ── 3D Visual ── */}
          <div
            className="flex justify-center items-center py-8 shrink-0 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.18s", animationFillMode: "forwards" }}
          >
            <img
              src={layers3d}
              alt="3D Platform Layers"
              className="w-[280px] object-contain"
              style={{
                mixBlendMode: "multiply",
                filter: "drop-shadow(0 12px 32px rgba(16,185,129,0.18))",
              }}
            />
          </div>

          {/* ── Layer Selectors ── */}
          <div className="flex-1 flex flex-col justify-center gap-2.5 px-8">
            {layers.map((layer, i) => {
              const LIcon = layer.icon;
              const isActive = selected === i;
              return (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  className={`w-full flex items-center gap-3.5 px-5 py-4 rounded-2xl text-left transition-all duration-250 border-2 opacity-0 animate-fade-in ${
                    isActive
                      ? `bg-primary/8 ${layer.borderColor} shadow-md`
                      : "bg-transparent border-transparent hover:bg-secondary hover:border-border/30"
                  }`}
                  style={{ animationDelay: `${0.2 + i * 0.08}s`, animationFillMode: "forwards" }}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-250 ${
                      isActive ? `${layer.color} text-white shadow-md` : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    <LIcon style={{ width: 20, height: 20 }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-widest block ${isActive ? layer.textColor : "text-muted-foreground"}`}
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      Layer {layer.id}
                    </span>
                    <p className={`text-[13px] font-bold leading-tight ${isActive ? "text-foreground" : "text-muted-foreground/70"}`}>
                      {layer.label}
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">{layer.subtitle}</p>
                  </div>
                  {isActive && <div className={`w-2 h-2 rounded-full shrink-0 ${layer.dotColor}`} />}
                </button>
              );
            })}
          </div>

          {/* ── Lifecycle Bar ── */}
          <div
            className="px-8 pb-8 shrink-0 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.42s", animationFillMode: "forwards" }}
          >
            <div className="p-3.5 rounded-2xl bg-card border border-border/30">
              <p
                className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest mb-2 text-center"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Project Lifecycle
              </p>
              <div className="flex items-center justify-center flex-wrap gap-1.5">
                {phases.map((p, i) => (
                  <div key={p} className="flex items-center gap-1.5">
                    <span className="text-[10px] font-semibold text-primary">{p}</span>
                    {i < phases.length - 1 && (
                      <ArrowRight className="w-2.5 h-2.5 text-muted-foreground/30" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div
          className="flex-1 flex flex-col justify-center px-14 overflow-hidden"
          style={{ paddingTop: 80, paddingBottom: 80 }}
          key={selected}
        >
          {/* Layer header */}
          <div
            className="flex items-center gap-5 mb-8 opacity-0 animate-fade-in"
            style={{ animationFillMode: "forwards" }}
          >
            <div className={`w-16 h-16 rounded-2xl ${l.color} flex items-center justify-center text-white shadow-xl`}>
              <Icon style={{ width: 28, height: 28 }} />
            </div>
            <div>
              <span
                className="text-[11px] text-muted-foreground uppercase tracking-widest"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Layer {l.id} · {l.products.length} Products
              </span>
              <h3 className="text-[30px] font-extrabold text-foreground leading-tight">{l.label}</h3>
              <p className={`text-[14px] font-bold ${l.textColor}`}>{l.subtitle}</p>
            </div>
          </div>

          {/* Thin rule */}
          <div className="w-full h-px bg-border/40 mb-8" />

          {/* Products grid */}
          <div className="grid grid-cols-3 gap-4">
            {l.products.map((p, pi) => (
              <div
                key={pi}
                className="rounded-2xl bg-card border border-border/40 p-5 opacity-0 animate-fade-in hover:border-primary/30 hover:shadow-lg transition-all duration-200 group"
                style={{ animationDelay: `${0.07 + pi * 0.05}s`, animationFillMode: "forwards" }}
              >
                <span
                  className="text-[10px] font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full block w-fit mb-3"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {p.num}
                </span>
                <p className="text-[18px] font-extrabold text-foreground leading-tight group-hover:text-primary transition-colors">
                  {p.name}
                </p>
                <p className="text-[12px] text-muted-foreground mt-1.5">{p.role}</p>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div
            className="mt-8 p-5 rounded-2xl bg-card border border-border/40 flex items-center gap-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            <div className="flex items-center gap-2.5">
              <span className={`w-2.5 h-2.5 rounded-full ${l.dotColor}`} />
              <span className="text-[14px] font-bold text-foreground">
                {l.products.length} Integrated Products
              </span>
            </div>
            <div className="h-4 w-px bg-border" />
            <span className={`text-[13px] font-semibold ${l.textColor}`}>{l.subtitle}</span>
            <div className="ml-auto flex gap-2">
              {layers.map((layer, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    selected === i ? `${layer.dotColor} scale-125` : "bg-border hover:bg-primary/40"
                  }`}
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
