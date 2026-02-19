import SlideLayout from "../SlideLayout";
import { Wrench, Brain, DollarSign, Layers, Zap, BarChart3 } from "lucide-react";
import ecosystemImg from "@/assets/ecogridia-ecosystem-3d.png";

const layerRows = [
  {
    id: "L1",
    icon: Wrench,
    name: "Infrastructure Execution",
    tagline: '"Software-Driven Physical Energy"',
    who: ["Asset owners", "EPCs", "Developers"],
    what: "Digitizes physical assets (land, rooftops, plants) — from feasibility to live solar generation",
    insight: "This is the wedge",
  },
  {
    id: "L2",
    icon: Brain,
    name: "Intelligence & Compliance",
    tagline: '"Financial-Grade Energy Intelligence"',
    who: ["Enterprises", "Green consultants", "CFOs"],
    what: "Converts raw energy data → auditable intelligence, ESG reporting & AI optimization",
    insight: "Compliance budgets are non-optional",
  },
  {
    id: "L3",
    icon: DollarSign,
    name: "Market & Monetization",
    tagline: '"Turning Energy into a Tradeable Asset"',
    who: ["Buyers", "Procurement teams", "Funds"],
    what: "Converts energy into: sq-ft, kWh, carbon credits, RECs — tradeable financial products",
    insight: "Tradeable assets",
  },
];

const badges = [
  { icon: Layers, label: "Single Platform" },
  { icon: Zap, label: "Full Stack Control" },
  { icon: BarChart3, label: "High-Margin SaaS" },
];

const Slide05Platform = () => (
  <SlideLayout>
    <div
      className="absolute inset-0 flex"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      {/* ── LEFT: Dark 3D Visual ── */}
      <div className="w-[520px] shrink-0 flex items-center justify-center relative overflow-hidden" style={{ background: "#0a1a14" }}>
        {/* Subtle radial glow */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(16,185,129,0.18) 0%, transparent 70%)" }} />
        <img
          src={ecosystemImg}
          alt="EcoGridia 3D Platform"
          className="w-full h-full object-cover opacity-90"
        />
        {/* Bottom labels */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-10">
          {["L1", "L2", "L3"].map((l) => (
            <span
              key={l}
              className="text-[13px] font-bold text-primary/80 tracking-widest"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {l}
            </span>
          ))}
        </div>
      </div>

      {/* ── RIGHT: Content ── */}
      <div className="flex-1 flex flex-col justify-center px-16 py-12" style={{ background: "hsl(var(--background))" }}>

        {/* Badge + Title */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 border border-primary/30 rounded-full px-4 py-1.5 mb-5" style={{ background: "hsl(160 84% 39% / 0.08)" }}>
            <span className="text-[12px] font-bold text-primary">Three-Layer Infrastructure SaaS</span>
          </div>
          <h2 className="text-[42px] font-extrabold text-foreground leading-tight">
            From <span className="text-primary">Physical Assets</span> to Financial Products
          </h2>
        </div>

        {/* Layer rows */}
        <div className="flex flex-col gap-0 border border-border/40 rounded-2xl overflow-hidden mb-8">
          {layerRows.map((row, i) => {
            const Icon = row.icon;
            return (
              <div
                key={row.id}
                className={`flex items-start gap-6 px-7 py-6 group hover:bg-primary/[0.03] transition-colors ${
                  i < layerRows.length - 1 ? "border-b border-border/40" : ""
                }`}
              >
                {/* Layer badge */}
                <div className="shrink-0 flex flex-col items-center gap-1.5 pt-0.5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg" style={{ background: "hsl(160 84% 25%)" }}>
                    <Icon style={{ width: 20, height: 20 }} />
                  </div>
                  <span
                    className="text-[10px] font-black text-primary tracking-widest"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {row.id}
                  </span>
                </div>

                {/* Name + tagline */}
                <div className="w-[240px] shrink-0">
                  <p className="text-[18px] font-extrabold text-foreground leading-tight">{row.name}</p>
                  <p className="text-[12px] font-semibold text-primary mt-1 italic">{row.tagline}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    <span className="text-[11px] text-muted-foreground font-medium">Who:</span>
                    {row.who.map((w) => (
                      <span key={w} className="text-[11px] text-foreground/70">{w}</span>
                    ))}
                  </div>
                </div>

                {/* What */}
                <div className="flex-1">
                  <p className="text-[11px] text-muted-foreground font-semibold mb-1">What:</p>
                  <p className="text-[13px] text-foreground/80 leading-snug">{row.what}</p>
                </div>

                {/* Insight */}
                <div className="shrink-0 flex items-center">
                  <span className="text-[13px] text-muted-foreground font-medium">→</span>
                  <span className="text-[13px] text-foreground font-semibold ml-2 italic">{row.insight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom badges */}
        <div className="flex gap-3">
          {badges.map(({ icon: BadgeIcon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 border border-primary/25 rounded-full px-4 py-2"
              style={{ background: "hsl(160 84% 39% / 0.07)" }}
            >
              <BadgeIcon style={{ width: 14, height: 14 }} className="text-primary" />
              <span className="text-[12px] font-bold text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide05Platform;
