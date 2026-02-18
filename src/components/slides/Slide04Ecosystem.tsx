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
    lineColor: "#34d399",   // emerald
    nodeGlow: "rgba(52,211,153,0.35)",
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
    lineColor: "#22d3ee",   // cyan
    nodeGlow: "rgba(34,211,238,0.35)",
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
    lineColor: "#a78bfa",   // violet
    nodeGlow: "rgba(167,139,250,0.35)",
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
    lineColor: "#f59e0b",   // amber
    nodeGlow: "rgba(245,158,11,0.35)",
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
    lineColor: "#4ade80",   // green
    nodeGlow: "rgba(74,222,128,0.35)",
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
    lineColor: "#f472b6",   // pink
    nodeGlow: "rgba(244,114,182,0.35)",
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
    lineColor: "#fb923c",   // orange
    nodeGlow: "rgba(251,146,60,0.35)",
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

/* ─── Animated canvas: particles + circuit lines ─── */
const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = 1920;
    canvas.height = 1080;

    const pts = Array.from({ length: 55 }, () => ({
      x: Math.random() * 1920,
      y: Math.random() * 1080,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.8 + 0.6,
      op: Math.random() * 0.3 + 0.08,
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
        ctx.fillStyle = `rgba(52,211,153,${p.op})`;
        ctx.fill();
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 140) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(52,211,153,${0.06 * (1 - d / 140)})`;
            ctx.lineWidth = 0.8;
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

/* ─── Pulsing ring on center hub ─── */
const PulseRing = ({ color, delay }: { color: string; delay: number }) => (
  <div
    className="absolute rounded-full border opacity-0"
    style={{
      borderColor: color,
      inset: -20,
      animation: `ecosys-pulse 3s ease-out ${delay}s infinite`,
    }}
  />
);

/* ─── Main slide ─── */
const CX = 50; // % center x
const CY = 50; // % center y
const RX = 370;
const RY = 230;

const Slide04Ecosystem = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const sel = stakeholders.find((s) => s.id === selected) ?? null;

  return (
    <SlideLayout>
      {/* Inject keyframes */}
      <style>{`
        @keyframes ecosys-pulse {
          0%   { transform: scale(1);   opacity: 0.55; }
          70%  { transform: scale(1.7); opacity: 0;    }
          100% { transform: scale(1.7); opacity: 0;    }
        }
        @keyframes hub-glow {
          0%,100% { box-shadow: 0 0 40px 10px rgba(52,211,153,0.25), 0 0 80px 20px rgba(52,211,153,0.10); }
          50%      { box-shadow: 0 0 70px 20px rgba(52,211,153,0.45), 0 0 140px 40px rgba(52,211,153,0.18); }
        }
        @keyframes line-dash {
          to { stroke-dashoffset: -20; }
        }
      `}</style>

      <div className="flex h-full overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(180,40%,8%) 0%, hsl(195,50%,10%) 50%, hsl(210,45%,9%) 100%)" }}>

        {/* ── Left: diagram area ── */}
        <div className="flex-1 relative flex items-center justify-center overflow-hidden">
          <ParticleField />

          {/* Subtle radial glow behind hub */}
          <div className="absolute pointer-events-none" style={{ left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(52,211,153,0.12) 0%, transparent 70%)" }} />

          {/* Title */}
          <div className="absolute top-7 left-9 z-20">
            <h2 className="text-[34px] font-extrabold leading-tight" style={{ color: "rgba(255,255,255,0.95)" }}>
              Institution-Centric <span style={{ color: "#34d399" }}>Ecosystem</span>
            </h2>
            <p className="text-[13px] mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>
              Every stakeholder connects through EcoGridia
            </p>
          </div>

          {/* SVG: connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            <defs>
              {stakeholders.map((s) => (
                <filter key={`glow-${s.id}`} id={`glow-${s.id}`} x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              ))}
            </defs>
            {stakeholders.map((s) => {
              const rad = (s.angle * Math.PI) / 180;
              const nx = CX + (Math.cos(rad) * RX) / 9.6;
              const ny = CY + (Math.sin(rad) * RY) / 4.7;
              const isActive = selected === s.id;
              return (
                <line
                  key={s.id}
                  x1={`${CX}%`} y1={`${CY}%`}
                  x2={`${nx}%`} y2={`${ny}%`}
                  stroke={s.lineColor}
                  strokeWidth={isActive ? 2.5 : 1.2}
                  strokeDasharray="8 5"
                  opacity={isActive ? 0.85 : selected ? 0.15 : 0.38}
                  filter={isActive ? `url(#glow-${s.id})` : undefined}
                  style={{ animation: isActive ? "line-dash 0.8s linear infinite" : undefined }}
                />
              );
            })}
          </svg>

          {/* Center hub — diamond-styled glowing card */}
          <div
            onClick={() => setSelected(null)}
            className="relative flex items-center justify-center cursor-pointer z-10"
            style={{ width: 160, height: 160 }}
          >
            {/* Pulse rings */}
            <PulseRing color="#34d399" delay={0} />
            <PulseRing color="#22d3ee" delay={1} />
            <PulseRing color="#a78bfa" delay={2} />
            {/* Hub card */}
            <div
              className="absolute inset-0 rounded-[28px] flex flex-col items-center justify-center"
              style={{
                background: "linear-gradient(145deg, rgba(52,211,153,0.18) 0%, rgba(34,211,238,0.10) 100%)",
                border: "1.5px solid rgba(52,211,153,0.5)",
                backdropFilter: "blur(12px)",
                animation: "hub-glow 4s ease-in-out infinite",
                transform: "rotate(45deg)",
              }}
            />
            {/* Content (counter-rotated) */}
            <div className="relative z-10 flex flex-col items-center text-center gap-0.5">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-1"
                style={{ background: "linear-gradient(135deg, #10b981, #06b6d4)", boxShadow: "0 0 20px rgba(16,185,129,0.4)" }}
              >
                <Zap className="w-6 h-6" style={{ color: "#fff" }} />
              </div>
              <span className="text-[15px] font-extrabold" style={{ color: "#fff" }}>EcoGridia</span>
              <span className="text-[9px] font-bold tracking-[0.12em] uppercase" style={{ color: "rgba(52,211,153,0.8)" }}>Platform</span>
            </div>
          </div>

          {/* Stakeholder nodes */}
          {stakeholders.map((s, i) => {
            const rad = (s.angle * Math.PI) / 180;
            const x = CX + (Math.cos(rad) * RX) / 9.6;
            const y = CY + (Math.sin(rad) * RY) / 4.7;
            const isActive = selected === s.id;
            const Icon = s.icon;
            return (
              <button
                key={s.id}
                onClick={() => setSelected(isActive ? null : s.id)}
                className="absolute flex flex-col items-center gap-2 z-10 group transition-all duration-200"
                style={{ left: `calc(${x}% - 48px)`, top: `calc(${y}% - 55px)` }}
              >
                {/* Circle node */}
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{
                    background: isActive
                      ? `radial-gradient(circle, ${s.nodeGlow} 0%, rgba(255,255,255,0.05) 100%)`
                      : "rgba(255,255,255,0.04)",
                    border: `1.5px solid ${isActive ? s.lineColor : "rgba(255,255,255,0.12)"}`,
                    boxShadow: isActive ? `0 0 24px 6px ${s.nodeGlow}, inset 0 0 12px ${s.nodeGlow}` : "none",
                    backdropFilter: "blur(8px)",
                    transform: isActive ? "scale(1.12)" : undefined,
                  }}
                >
                  <Icon
                    className="w-9 h-9 transition-colors duration-200"
                    style={{ color: isActive ? s.lineColor : "rgba(255,255,255,0.55)" }}
                  />
                </div>
                {/* Label */}
                <span
                  className="text-[12px] font-bold leading-tight text-center transition-colors duration-200"
                  style={{ color: isActive ? s.lineColor : "rgba(255,255,255,0.75)" }}
                >
                  {s.label}
                </span>
                {/* Active dot */}
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
            <div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px] font-medium tracking-wide animate-pulse"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Click a stakeholder to explore
            </div>
          )}
        </div>

        {/* ── Right: Detail panel ── */}
        <div
          className="transition-all duration-300 ease-in-out overflow-hidden flex flex-col shrink-0"
          style={{
            width: sel ? 370 : 0,
            opacity: sel ? 1 : 0,
            background: "rgba(10,28,32,0.92)",
            borderLeft: sel ? "1px solid rgba(52,211,153,0.18)" : "none",
            backdropFilter: "blur(20px)",
          }}
        >
          {sel && (
            <div className="flex flex-col h-full overflow-y-auto">
              {/* Header */}
              <div
                className="px-6 pt-6 pb-4"
                style={{ borderBottom: `1px solid ${sel.lineColor}33`, background: `linear-gradient(180deg, ${sel.nodeGlow.replace("0.35","0.08")} 0%, transparent 100%)` }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ background: sel.nodeGlow.replace("0.35","0.2"), border: `1px solid ${sel.lineColor}55` }}
                    >
                      <sel.icon className="w-6 h-6" style={{ color: sel.lineColor }} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest mb-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>Stakeholder</p>
                      <h3 className="text-xl font-extrabold leading-tight" style={{ color: sel.lineColor }}>
                        {sel.label}
                      </h3>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    <X className="w-4 h-4" style={{ color: "rgba(255,255,255,0.5)" }} />
                  </button>
                </div>
              </div>

              {/* Products */}
              <div className="px-5 py-4 flex-1" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>Products Used</p>
                <div className="flex flex-col gap-2">
                  {sel.products.map((p, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 px-3 py-2.5 rounded-xl transition-all"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                    >
                      <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: sel.lineColor }} />
                      <div>
                        <p className="text-[12px] font-bold leading-tight" style={{ color: "rgba(255,255,255,0.9)" }}>{p.name}</p>
                        <p className="text-[10px] leading-snug" style={{ color: "rgba(255,255,255,0.4)" }}>{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Value */}
              <div className="px-5 py-4" style={{ background: `linear-gradient(180deg, transparent 0%, ${sel.nodeGlow.replace("0.35","0.07")} 100%)` }}>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>Value Delivered</p>
                <div className="flex flex-col gap-2">
                  {sel.values.map((v, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: sel.lineColor }} />
                      <span className="text-[12px] font-semibold" style={{ color: "rgba(255,255,255,0.8)" }}>{v}</span>
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
