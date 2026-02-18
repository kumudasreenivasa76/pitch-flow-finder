import SlideLayout from "../SlideLayout";
import { useState, useEffect, useRef } from "react";
import {
  GraduationCap, Server, Users, Landmark, TreePine, HardHat, Briefcase,
  Zap, X, ChevronRight
} from "lucide-react";

/* ─── Stakeholder data ─── */
const stakeholders = [
  {
    id: 1,
    icon: GraduationCap,
    label: "Schools",
    lineColor: "#059669",
    nodeBg: "rgba(5,150,105,0.08)",
    nodeBorder: "rgba(5,150,105,0.35)",
    nodeGlow: "rgba(5,150,105,0.20)",
    textColor: "#065f46",
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
    values: ["Lower electricity cost","Carbon-neutral campus roadmap","Student sustainability dashboards","Grant & government funding readiness"],
  },
  {
    id: 2,
    icon: Server,
    label: "Data Centers",
    lineColor: "#0891b2",
    nodeBg: "rgba(8,145,178,0.08)",
    nodeBorder: "rgba(8,145,178,0.35)",
    nodeGlow: "rgba(8,145,178,0.20)",
    textColor: "#0e7490",
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
    values: ["Renewable % improvement","PUE optimization","ESG compliance","Carbon offset strategy","Investor reporting"],
  },
  {
    id: 3,
    icon: Users,
    label: "Communities",
    lineColor: "#7c3aed",
    nodeBg: "rgba(124,58,237,0.08)",
    nodeBorder: "rgba(124,58,237,0.30)",
    nodeGlow: "rgba(124,58,237,0.18)",
    textColor: "#6d28d9",
    angle: 30,
    products: [
      { name: "TerraScan™", desc: "Rooftop feasibility" },
      { name: "HelioTwin™", desc: "Solar modeling" },
      { name: "CapStruct™", desc: "Community financing" },
      { name: "CrowdSolar™", desc: "Fractional ownership" },
      { name: "VoltIQ™", desc: "Shared energy dashboard" },
      { name: "RECMatrix™", desc: "REC allocation" },
    ],
    values: ["Reduced energy bills","Shared solar income","Community-level sustainability","Passive yield for residents"],
  },
  {
    id: 4,
    icon: Landmark,
    label: "Government",
    lineColor: "#d97706",
    nodeBg: "rgba(217,119,6,0.08)",
    nodeBorder: "rgba(217,119,6,0.30)",
    nodeGlow: "rgba(217,119,6,0.18)",
    textColor: "#b45309",
    angle: 90,
    products: [
      { name: "CarbonX-Ray™", desc: "Regional carbon audit" },
      { name: "NetZero Navigator™", desc: "Decarbonization roadmap" },
      { name: "ComplySphere™", desc: "Policy reporting" },
      { name: "GreenBoard™", desc: "City/state dashboard" },
      { name: "RECMatrix™", desc: "Renewable tracking" },
    ],
    values: ["Net-zero progress tracking","Climate reporting","Policy impact measurement","Regional renewable monitoring"],
  },
  {
    id: 5,
    icon: TreePine,
    label: "Landowners",
    lineColor: "#16a34a",
    nodeBg: "rgba(22,163,74,0.08)",
    nodeBorder: "rgba(22,163,74,0.32)",
    nodeGlow: "rgba(22,163,74,0.18)",
    textColor: "#15803d",
    angle: 150,
    products: [
      { name: "TerraScan™", desc: "Land potential assessment" },
      { name: "CapStruct™", desc: "Lease & yield modeling" },
      { name: "SolarForge™", desc: "Project deployment" },
      { name: "FundVista™", desc: "Revenue tracking" },
    ],
    values: ["Land monetization","Long-term lease income","Climate asset participation"],
  },
  {
    id: 6,
    icon: HardHat,
    label: "Vendors",
    lineColor: "#db2777",
    nodeBg: "rgba(219,39,119,0.08)",
    nodeBorder: "rgba(219,39,119,0.28)",
    nodeGlow: "rgba(219,39,119,0.16)",
    textColor: "#be185d",
    angle: 210,
    products: [
      { name: "EcoMarket™", desc: "Vendor onboarding" },
      { name: "SolarForge™", desc: "Project milestone tracking" },
      { name: "SLA Analytics", desc: "Performance scoring" },
      { name: "Payment Dashboard", desc: "Payment tracking" },
    ],
    values: ["Verified project pipeline","Performance-based ranking","Structured contract flow","Marketplace visibility"],
  },
  {
    id: 7,
    icon: Briefcase,
    label: "Investors",
    lineColor: "#ea580c",
    nodeBg: "rgba(234,88,12,0.08)",
    nodeBorder: "rgba(234,88,12,0.28)",
    nodeGlow: "rgba(234,88,12,0.16)",
    textColor: "#c2410c",
    angle: 270,
    products: [
      { name: "CapStruct™", desc: "SPV modeling" },
      { name: "FundVista™", desc: "Yield & asset analytics" },
      { name: "RECMatrix™", desc: "Certificate revenue" },
      { name: "CarbonLedger™", desc: "Carbon asset value" },
      { name: "GreenBoard™", desc: "Portfolio climate ROI" },
    ],
    values: ["Climate asset visibility","Structured renewable returns","Carbon-linked yield tracking","ESG portfolio compliance"],
  },
];

/* ─── Subtle particle canvas ─── */
const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = 1920;
    canvas.height = 1080;

    const pts = Array.from({ length: 40 }, () => ({
      x: Math.random() * 1920,
      y: Math.random() * 1080,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
      op: Math.random() * 0.12 + 0.04,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, 1920, 1080);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = 1920; if (p.x > 1920) p.x = 0;
        if (p.y < 0) p.y = 1080; if (p.y > 1080) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(16,185,129,${p.op})`;
        ctx.fill();
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(16,185,129,${0.04 * (1 - d / 120)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

/* ─── Main slide ─── */
const CX = 50;
const CY = 50;
const RX = 370;
const RY = 230;

const Slide04Ecosystem = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const sel = stakeholders.find((s) => s.id === selected) ?? null;

  return (
    <SlideLayout>
      <style>{`
        @keyframes hub-spin-ring {
          to { transform: rotate(360deg); }
        }
        @keyframes hub-pulse-outer {
          0%,100% { opacity: 0.18; transform: scale(1);   }
          50%      { opacity: 0.05; transform: scale(1.55);}
        }
        @keyframes hub-pulse-mid {
          0%,100% { opacity: 0.22; transform: scale(1);   }
          50%      { opacity: 0.06; transform: scale(1.35);}
        }
        @keyframes line-flow {
          to { stroke-dashoffset: -26; }
        }
        @keyframes node-pop {
          0%   { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1);   opacity: 1; }
        }
      `}</style>

      <div
        className="flex h-full overflow-hidden"
        style={{ background: "linear-gradient(145deg, #f8fffe 0%, #f0faf7 40%, #f5f9ff 100%)" }}
      >
        {/* ── Left: diagram ── */}
        <div className="flex-1 relative flex items-center justify-center overflow-hidden">
          <ParticleField />

          {/* Soft radial ambient behind hub */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: "50%", top: "50%",
              transform: "translate(-50%,-50%)",
              width: 560, height: 560, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 68%)",
            }}
          />

          {/* Title */}
          <div className="absolute top-7 left-10 z-20">
            <h2 className="text-[34px] font-extrabold leading-tight text-foreground">
              Institution-Centric{" "}
              <span className="text-primary">Ecosystem</span>
            </h2>
            <p className="text-[13px] text-muted-foreground mt-1">
              Every stakeholder connects through EcoGridia
            </p>
          </div>

          {/* SVG: connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            <defs>
              {stakeholders.map((s) => (
                <filter key={`gf-${s.id}`} id={`gf-${s.id}`} x="-80%" y="-80%" width="260%" height="260%">
                  <feGaussianBlur stdDeviation="2.5" result="b" />
                  <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              ))}
            </defs>
            {stakeholders.map((s) => {
              const rad = (s.angle * Math.PI) / 180;
              const nx = CX + (Math.cos(rad) * RX) / 9.6;
              const ny = CY + (Math.sin(rad) * RY) / 4.7;
              const isActive = selected === s.id;
              const isDimmed = selected !== null && !isActive;
              return (
                <line
                  key={s.id}
                  x1={`${CX}%`} y1={`${CY}%`}
                  x2={`${nx}%`} y2={`${ny}%`}
                  stroke={s.lineColor}
                  strokeWidth={isActive ? 2.5 : 1.2}
                  strokeDasharray="10 6"
                  opacity={isActive ? 0.9 : isDimmed ? 0.08 : 0.3}
                  filter={isActive ? `url(#gf-${s.id})` : undefined}
                  style={isActive ? { animation: "line-flow 1s linear infinite" } : undefined}
                />
              );
            })}
          </svg>

          {/* Center Hub */}
          <div
            onClick={() => setSelected(null)}
            className="relative flex items-center justify-center cursor-pointer z-10"
            style={{ width: 160, height: 160 }}
          >
            {/* Outer ambient pulse rings */}
            <div className="absolute rounded-full" style={{ inset: -38, border: "1.5px solid rgba(16,185,129,0.18)", animation: "hub-pulse-outer 4s ease-in-out infinite" }} />
            <div className="absolute rounded-full" style={{ inset: -22, border: "1.5px solid rgba(16,185,129,0.25)", animation: "hub-pulse-mid 4s ease-in-out 1.5s infinite" }} />

            {/* Spinning dashed ring */}
            <div
              className="absolute rounded-full"
              style={{
                inset: -10,
                border: "1.5px dashed rgba(16,185,129,0.30)",
                animation: "hub-spin-ring 18s linear infinite",
              }}
            />

            {/* Hub card */}
            <div
              className="absolute inset-0 rounded-[30px] flex flex-col items-center justify-center"
              style={{
                background: "linear-gradient(145deg, rgba(16,185,129,0.10) 0%, rgba(6,182,212,0.06) 100%)",
                border: "1.5px solid rgba(16,185,129,0.30)",
                boxShadow: "0 8px 32px rgba(16,185,129,0.14), 0 2px 8px rgba(16,185,129,0.08)",
                transform: "rotate(45deg)",
              }}
            />
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center gap-1">
              <div
                className="w-13 h-13 rounded-2xl flex items-center justify-center mb-1.5"
                style={{
                  width: 52, height: 52,
                  background: "linear-gradient(135deg, hsl(160,84%,39%), hsl(186,79%,42%))",
                  boxShadow: "0 4px 20px rgba(16,185,129,0.35)",
                }}
              >
                <Zap className="w-7 h-7 text-white" />
              </div>
              <span className="text-[16px] font-extrabold text-foreground leading-tight">EcoGridia</span>
              <span className="text-[9px] font-bold tracking-[0.14em] uppercase text-primary">Platform</span>
            </div>
          </div>

          {/* Stakeholder nodes */}
          {stakeholders.map((s, i) => {
            const rad = (s.angle * Math.PI) / 180;
            const x = CX + (Math.cos(rad) * RX) / 9.6;
            const y = CY + (Math.sin(rad) * RY) / 4.7;
            const isActive = selected === s.id;
            const isDimmed = selected !== null && !isActive;
            const Icon = s.icon;
            return (
              <button
                key={s.id}
                onClick={() => setSelected(isActive ? null : s.id)}
                className="absolute flex flex-col items-center gap-2 z-10 group transition-all duration-200"
                style={{
                  left: `calc(${x}% - 48px)`,
                  top: `calc(${y}% - 58px)`,
                  opacity: isDimmed ? 0.35 : 1,
                  animation: `node-pop 0.4s ease-out ${i * 0.07}s both`,
                }}
              >
                {/* Circle */}
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{
                    background: isActive ? s.nodeBg : "rgba(255,255,255,0.85)",
                    border: `2px solid ${isActive ? s.lineColor : "rgba(0,0,0,0.08)"}`,
                    boxShadow: isActive
                      ? `0 0 0 6px ${s.nodeGlow}, 0 8px 28px ${s.nodeGlow}, inset 0 1px 0 rgba(255,255,255,0.6)`
                      : "0 4px 16px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)",
                    transform: isActive ? "scale(1.12)" : undefined,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <Icon
                    className="w-9 h-9 transition-colors duration-200"
                    style={{ color: isActive ? s.lineColor : "rgba(0,0,0,0.35)" }}
                  />
                </div>
                {/* Label */}
                <span
                  className="text-[12px] font-bold leading-tight text-center transition-colors duration-200"
                  style={{ color: isActive ? s.textColor : "hsl(160,10%,25%)" }}
                >
                  {s.label}
                </span>
                {/* Active indicator dot */}
                {isActive && (
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ background: s.lineColor }}
                  />
                )}
              </button>
            );
          })}

          {/* Hint */}
          {!selected && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px] font-medium tracking-wide animate-pulse text-muted-foreground/50">
              Click a stakeholder to explore
            </div>
          )}
        </div>

        {/* ── Right: Detail panel ── */}
        <div
          className="transition-all duration-300 ease-in-out overflow-hidden flex flex-col shrink-0"
          style={{
            width: sel ? 368 : 0,
            opacity: sel ? 1 : 0,
            background: "#ffffff",
            borderLeft: sel ? "1px solid hsl(160,20%,90%)" : "none",
            boxShadow: sel ? "-8px 0 24px rgba(0,0,0,0.04)" : "none",
          }}
        >
          {sel && (
            <div className="flex flex-col h-full overflow-y-auto">
              {/* Header */}
              <div
                className="px-6 pt-6 pb-5"
                style={{
                  background: `linear-gradient(180deg, ${sel.nodeBg} 0%, rgba(255,255,255,0) 100%)`,
                  borderBottom: `1px solid ${sel.nodeBorder}`,
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                      style={{
                        background: sel.nodeBg,
                        border: `1.5px solid ${sel.nodeBorder}`,
                        boxShadow: `0 4px 12px ${sel.nodeGlow}`,
                      }}
                    >
                      <sel.icon className="w-6 h-6" style={{ color: sel.lineColor }} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest mb-0.5 text-muted-foreground">Stakeholder</p>
                      <h3 className="text-xl font-extrabold leading-tight" style={{ color: sel.textColor }}>
                        {sel.label}
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
              <div className="px-5 py-4 flex-1" style={{ borderBottom: "1px solid hsl(160,15%,93%)" }}>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-3 text-muted-foreground">Products Used</p>
                <div className="flex flex-col gap-1.5">
                  {sel.products.map((p, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 px-3 py-2 rounded-xl transition-all"
                      style={{
                        background: "hsl(160,20%,98%)",
                        border: "1px solid hsl(160,15%,93%)",
                      }}
                    >
                      <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: sel.lineColor }} />
                      <div>
                        <p className="text-[12px] font-bold text-foreground leading-tight">{p.name}</p>
                        <p className="text-[10px] text-muted-foreground leading-snug">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Value Delivered */}
              <div
                className="px-5 py-4"
                style={{ background: `linear-gradient(180deg, rgba(255,255,255,0) 0%, ${sel.nodeBg} 100%)` }}
              >
                <p className="text-[10px] font-bold uppercase tracking-widest mb-3 text-muted-foreground">Value Delivered</p>
                <div className="flex flex-col gap-2">
                  {sel.values.map((v, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ background: sel.lineColor, boxShadow: `0 0 6px ${sel.nodeGlow}` }}
                      />
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
