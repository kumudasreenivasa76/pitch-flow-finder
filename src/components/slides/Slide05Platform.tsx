import SlideLayout from "../SlideLayout";
import { Cloud, Cpu, ShieldCheck, Layers, DollarSign } from "lucide-react";
import flowImg from "@/assets/slide05-platform-3d.png";

const layers = [
  {
    id: "L1",
    color: "#4f46e5",
    icon: Cloud,
    title: "Infrastructure Execution",
    tagline: "Software-Driven Physical Energy",
    who: "Asset owners • EPCs",
    what: "Digitizes physical assets (land, rooftops, plants)",
    note: "This is the wedge",
    products: ["TerraScan™", "HelioTwin™", "SolarForge™", "CapStruct™", "GridLink™", "EcoMarket™"],
  },
  {
    id: "L2",
    color: "#0891b2",
    icon: Cpu,
    title: "Intelligence & Compliance",
    tagline: "Financial-Grade Energy Intelligence",
    who: "Enterprises • Green consultants",
    what: "Converts raw energy data → auditable intelligence",
    note: "Compliance budgets are non-optional",
    products: ["VoltIQ™", "WattWise AI™", "PUE Guardian™", "CarbonX-Ray™", "CarbonMatch 24/7™"],
  },
  {
    id: "L3",
    color: "#059669",
    icon: ShieldCheck,
    title: "Market & Monetization",
    tagline: "Turning Energy into a Tradeable Asset",
    who: "Buyers • Procurement teams",
    what: "Converts energy into: sq-ft, kWh, carbon credits, RECs",
    note: "Tradeable assets",
    products: ["RECMatrix™", "CarbonLedger™", "NetZero Navigator™", "GreenBoard™", "ComplySphere™", "AuditTrail360™"],
  },
];

const pills = [
  { icon: Layers, label: "Single Platform" },
  { icon: Cpu, label: "Full Stack Control" },
  { icon: DollarSign, label: "High-Margin SaaS" },
];

const Slide05Platform = () => {
  return (
    <SlideLayout>
      <div className="relative w-full h-full flex bg-white overflow-hidden">

        {/* Grid background */}
        <div className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.5,
          }}
        />

        {/* LEFT — 3D image on dark panel */}
        <div className="relative z-10 w-[480px] shrink-0 flex items-center justify-center py-6 pl-8">
          <div
            className="relative w-full rounded-2xl overflow-hidden flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
              minHeight: "420px",
            }}
          >
            {/* subtle glow behind image */}
            <div className="absolute inset-0 pointer-events-none" style={{
              background: "radial-gradient(ellipse at center, rgba(79,70,229,0.15) 0%, transparent 70%)",
            }} />
            <img
              src={flowImg}
              alt="EcoGridia Three-Layer Platform"
              className="relative z-10 w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* RIGHT — Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center py-10 pr-14 pl-4">

          {/* Badge + headline */}
          <div className="mb-5 animate-fade-in">
            <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[13px] font-bold tracking-widest uppercase mb-2">
              Platform Architecture
            </span>
            <h2 className="text-[40px] font-extrabold text-foreground leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              From Physical Assets to Financial Products
            </h2>
          </div>

          {/* Layer cards */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {layers.map((l, i) => {
              const Icon = l.icon;
              return (
                <div
                  key={l.id}
                  className="flex items-start gap-5 p-5 rounded-2xl border-2 bg-white hover:shadow-md transition-all duration-300 animate-fade-in"
                  style={{
                    borderColor: `${l.color}30`,
                    animationDelay: `${0.1 + i * 0.08}s`,
                    animationFillMode: "forwards",
                    opacity: 0,
                  }}
                >
                  {/* Badge */}
                  <div className="flex flex-col items-center gap-1 shrink-0">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg"
                      style={{ background: l.color }}
                    >
                      <span className="text-[11px] font-black">{l.id}</span>
                    </div>
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ background: `${l.color}15`, border: `1px solid ${l.color}30` }}
                    >
                      <Icon className="w-4 h-4" style={{ color: l.color }} />
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3 className="text-[20px] font-extrabold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {l.title}
                      </h3>
                      <span className="text-[14px] font-semibold italic" style={{ color: l.color }}>
                        "{l.tagline}"
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-0.5">
                      <div>
                        <p className="text-[12px] font-bold text-muted-foreground mb-0.5">Who:</p>
                        <p className="text-[14px] text-foreground">{l.who}</p>
                      </div>
                      <div>
                        <p className="text-[12px] font-bold text-muted-foreground mb-0.5">What:</p>
                        <p className="text-[14px] text-foreground">{l.what}</p>
                      </div>
                    </div>

                    {/* Product tags */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {l.products.map((p) => (
                        <span
                          key={p}
                          className="px-2.5 py-1 rounded-lg text-[12px] font-semibold"
                          style={{ background: `${l.color}10`, color: l.color, border: `1px solid ${l.color}25` }}
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Note */}
                  <div className="shrink-0 text-right">
                    <span className="text-[13px] text-muted-foreground">— {l.note}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom pills */}
          <div className="flex items-center gap-3 mt-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {pills.map((p) => {
              const PIcon = p.icon;
              return (
                <div
                  key={p.label}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-border/40 bg-white shadow-sm"
                >
                  <PIcon className="w-4 h-4 text-primary" />
                  <span className="text-[14px] font-semibold text-foreground">{p.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide05Platform;
