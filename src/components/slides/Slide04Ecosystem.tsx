import SlideLayout from "../SlideLayout";
import { useState, useEffect, useRef } from "react";
import {
  GraduationCap, Server, Users, Landmark, TreePine, HardHat, Briefcase,
  Zap, X, ChevronRight
} from "lucide-react";

const stakeholders = [
  {
    id: 1, icon: GraduationCap, label: "Schools",
    lineColor: "#059669", nodeBg: "rgba(5,150,105,0.10)", nodeBorder: "rgba(5,150,105,0.40)",
    nodeGlow: "rgba(5,150,105,0.25)", textColor: "#065f46", angle: -90,
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
    id: 2, icon: Server, label: "Data Centers",
    lineColor: "#0891b2", nodeBg: "rgba(8,145,178,0.10)", nodeBorder: "rgba(8,145,178,0.40)",
    nodeGlow: "rgba(8,145,178,0.25)", textColor: "#0e7490", angle: -34,
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
    id: 3, icon: Users, label: "Communities",
    lineColor: "#7c3aed", nodeBg: "rgba(124,58,237,0.08)", nodeBorder: "rgba(124,58,237,0.35)",
    nodeGlow: "rgba(124,58,237,0.20)", textColor: "#6d28d9", angle: 34,
    products: [
      { name: "TerraScan™", desc: "Rooftop feasibility" },
      { name: "HelioTwin™", desc: "Solar modeling" },
      { name: "CrowdSolar™", desc: "Fractional ownership" },
      { name: "VoltIQ™", desc: "Shared energy dashboard" },
      { name: "RECMatrix™", desc: "REC allocation" },
    ],
    values: ["Reduced energy bills", "Shared solar income", "Community sustainability", "Passive yield for residents"],
  },
  {
    id: 4, icon: Landmark, label: "Government",
    lineColor: "#d97706", nodeBg: "rgba(217,119,6,0.08)", nodeBorder: "rgba(217,119,6,0.35)",
    nodeGlow: "rgba(217,119,6,0.20)", textColor: "#b45309", angle: 90,
    products: [
      { name: "CarbonX-Ray™", desc: "Regional carbon audit" },
      { name: "NetZero Navigator™", desc: "Decarbonization roadmap" },
      { name: "ComplySphere™", desc: "Policy reporting" },
      { name: "GreenBoard™", desc: "City/state dashboard" },
    ],
    values: ["Net-zero progress tracking", "Climate reporting", "Policy impact measurement", "Regional renewable monitoring"],
  },
  {
    id: 5, icon: TreePine, label: "Landowners",
    lineColor: "#16a34a", nodeBg: "rgba(22,163,74,0.08)", nodeBorder: "rgba(22,163,74,0.35)",
    nodeGlow: "rgba(22,163,74,0.20)", textColor: "#15803d", angle: 148,
    products: [
      { name: "TerraScan™", desc: "Land potential assessment" },
      { name: "CapStruct™", desc: "Lease & yield modeling" },
      { name: "SolarForge™", desc: "Project deployment" },
      { name: "FundVista™", desc: "Revenue tracking" },
    ],
    values: ["Land monetization", "Long-term lease income", "Climate asset participation"],
  },
  {
    id: 6, icon: HardHat, label: "Vendors",
    lineColor: "#db2777", nodeBg: "rgba(219,39,119,0.08)", nodeBorder: "rgba(219,39,119,0.30)",
    nodeGlow: "rgba(219,39,119,0.18)", textColor: "#be185d", angle: 210,
    products: [
      { name: "EcoMarket™", desc: "Vendor onboarding" },
      { name: "SolarForge™", desc: "Project milestone tracking" },
      { name: "SLA Analytics", desc: "Performance scoring" },
      { name: "Payment Dashboard", desc: "Payment tracking" },
    ],
    values: ["Verified project pipeline", "Performance-based ranking", "Structured contract flow", "Marketplace visibility"],
  },
  {
    id: 7, icon: Briefcase, label: "Investors",
    lineColor: "#ea580c", nodeBg: "rgba(234,88,12,0.08)", nodeBorder: "rgba(234,88,12,0.30)",
    nodeGlow: "rgba(234,88,12,0.18)", textColor: "#c2410c", angle: 270,
    products: [
      { name: "CapStruct™", desc: "SPV modeling" },
      { name: "FundVista™", desc: "Yield & asset analytics" },
      { name: "RECMatrix™", desc: "Certificate revenue" },
      { name: "GreenBoard™", desc: "Portfolio climate ROI" },
    ],
    values: ["Climate asset visibility", "Structured renewable returns", "Carbon-linked yield tracking", "ESG portfolio compliance"],
  },
];

/* ─── Animated particle canvas ─── */
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
      x: Math.random() * 1920, y: Math.random() * 1080,
      vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.8 + 0.4,
      op: Math.random() * 0.10 + 0.03,
      col: Math.random() > 0.5 ? "16,185,129" : "8,145,178",
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
        ctx.fillStyle = `rgba(${p.col},${p.op})`;
        ctx.fill();
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(16,185,129,${0.05 * (1 - d / 110)})`;
            ctx.lineWidth = 0.5;
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

/* ─── 3D Network Orb (SVG geodesic sphere feel) ─── */
const NetworkOrb = ({ active }: { active: boolean }) => {
  // Ellipse arcs simulating 3D sphere depth
  const rings = [
    { rx: 82, ry: 24, rotate: 0, op: 0.55 },
    { rx: 82, ry: 24, rotate: 60, op: 0.45 },
    { rx: 82, ry: 24, rotate: 120, op: 0.40 },
    { rx: 60, ry: 60, rotate: 0, op: 0.35 },
    { rx: 38, ry: 82, rotate: 0, op: 0.30 },
  ];
  // Cross-network lines on sphere
  const netLines = [
    [-78, -18, 78, 18], [-60, -48, 60, 48], [-82, 0, 82, 0],
    [-48, -60, 48, 60], [-18, -78, 18, 78],
    [-78, 18, 78, -18], [-60, 48, 60, -48],
  ];
  return (
    <svg width="200" height="200" viewBox="-100 -100 200 200" className="absolute" style={{ filter: "drop-shadow(0 0 28px rgba(16,185,129,0.35)) drop-shadow(0 0 8px rgba(6,182,212,0.20))" }}>
      <defs>
        <radialGradient id="orbGrad" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="rgba(167,243,208,0.80)" />
          <stop offset="40%" stopColor="rgba(16,185,129,0.38)" />
          <stop offset="100%" stopColor="rgba(6,182,212,0.12)" />
        </radialGradient>
        <radialGradient id="orbGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(16,185,129,0.18)" />
          <stop offset="100%" stopColor="rgba(16,185,129,0)" />
        </radialGradient>
        <clipPath id="orbClip">
          <circle r="82" />
        </clipPath>
      </defs>

      {/* Outer ambient glow */}
      <circle r="100" fill="url(#orbGlow)" />

      {/* Sphere body */}
      <circle r="82" fill="url(#orbGrad)" stroke="rgba(16,185,129,0.55)" strokeWidth="1.2" />

      {/* Network lines clipped inside sphere */}
      <g clipPath="url(#orbClip)">
        {netLines.map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="rgba(16,185,129,0.45)" strokeWidth="0.9"
            strokeDasharray="4 3"
          />
        ))}
        {/* Intersection dots */}
        {[[-60, -18], [0, -24], [60, -18], [-48, 12], [0, 0], [48, 12], [-36, 42], [0, 48], [36, 42],
          [-60, 18], [60, 18], [-36, -42], [36, -42]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="2.8"
            fill={i % 3 === 0 ? "rgba(6,182,212,0.9)" : "rgba(16,185,129,0.85)"}
          />
        ))}
      </g>

      {/* Ellipse rings (3D depth) */}
      {rings.map((r, i) => (
        <ellipse key={i} rx={r.rx} ry={r.ry}
          transform={`rotate(${r.rotate})`}
          fill="none"
          stroke={i % 2 === 0 ? "rgba(16,185,129,0.50)" : "rgba(6,182,212,0.40)"}
          strokeWidth="0.9"
          strokeDasharray="5 4"
          opacity={r.op}
        />
      ))}

      {/* Highlight sheen */}
      <ellipse rx="38" ry="22" cx="-20" cy="-32"
        fill="rgba(255,255,255,0.22)" transform="rotate(-15)"
      />
    </svg>
  );
};

/* ─── Main ─── */
const CX = 50; // % center x
const CY = 50; // % center y
const RX = 340; // px radius x (in 1920-space)
const RY = 210; // px radius y

const Slide04Ecosystem = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const sel = stakeholders.find((s) => s.id === selected) ?? null;

  return (
    <SlideLayout>
      <style>{`
        @keyframes orb-rotate { to { transform: rotate(360deg); } }
        @keyframes orb-pulse-a {
          0%,100% { transform: scale(1); opacity: 0.22; }
          50%      { transform: scale(1.45); opacity: 0.06; }
        }
        @keyframes orb-pulse-b {
          0%,100% { transform: scale(1); opacity: 0.18; }
          50%      { transform: scale(1.28); opacity: 0.05; }
        }
        @keyframes line-flow { to { stroke-dashoffset: -28; } }
        @keyframes node-in {
          0%   { opacity:0; transform: scale(0.7) translateY(6px); }
          100% { opacity:1; transform: scale(1) translateY(0); }
        }
        @keyframes float-node {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-5px); }
        }
        @keyframes icon-glow {
          0%,100% { filter: drop-shadow(0 0 6px rgba(16,185,129,0.3)); }
          50%      { filter: drop-shadow(0 0 14px rgba(16,185,129,0.65)); }
        }
      `}</style>

      <div
        className="flex h-full overflow-hidden relative"
        style={{ background: "linear-gradient(145deg, #f8fffe 0%, #f0faf7 40%, #f5f9ff 100%)" }}
      >
        <ParticleField />

        {/* ── Left: Diagram ── */}
        <div className="flex-1 relative flex items-center justify-center overflow-hidden">

          {/* Title */}
          <div className="absolute top-8 left-10 z-20">
            <h2 className="text-[36px] font-extrabold leading-tight text-foreground">
              Institution-Centric{" "}
              <span className="text-primary">Ecosystem</span>
            </h2>
            <p className="text-[13px] text-muted-foreground mt-1 font-medium">
              Every stakeholder connects through EcoGridia
            </p>
          </div>

          {/* SVG connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            <defs>
              {stakeholders.map((s) => (
                <filter key={`gf-${s.id}`} id={`gf-${s.id}`} x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="3" result="b" />
                  <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              ))}
              <filter id="glow-line" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            {stakeholders.map((s) => {
              const rad = (s.angle * Math.PI) / 180;
              const nx = CX + (Math.cos(rad) * RX) / 9.6;
              const ny = CY + (Math.sin(rad) * RY) / 4.7;
              const isActive = selected === s.id;
              const isDimmed = selected !== null && !isActive;
              return (
                <g key={s.id}>
                  {/* Shadow glow line */}
                  {isActive && (
                    <line
                      x1={`${CX}%`} y1={`${CY}%`}
                      x2={`${nx}%`} y2={`${ny}%`}
                      stroke={s.lineColor}
                      strokeWidth="6"
                      opacity="0.12"
                      filter="url(#glow-line)"
                    />
                  )}
                  {/* Main line */}
                  <line
                    x1={`${CX}%`} y1={`${CY}%`}
                    x2={`${nx}%`} y2={`${ny}%`}
                    stroke={s.lineColor}
                    strokeWidth={isActive ? 2.5 : 1.0}
                    strokeDasharray="10 6"
                    opacity={isActive ? 0.95 : isDimmed ? 0.07 : 0.28}
                    filter={isActive ? `url(#gf-${s.id})` : undefined}
                    style={isActive ? { animation: "line-flow 0.9s linear infinite" } : undefined}
                  />
                </g>
              );
            })}
          </svg>

          {/* ── Center Hub (3D Orb) ── */}
          <div
            onClick={() => setSelected(null)}
            className="relative flex items-center justify-center cursor-pointer z-10"
            style={{ width: 200, height: 200 }}
          >
            {/* Outer ambient pulse rings */}
            <div className="absolute rounded-full pointer-events-none"
              style={{ inset: -50, border: "1.5px solid rgba(16,185,129,0.18)", animation: "orb-pulse-a 4s ease-in-out infinite" }} />
            <div className="absolute rounded-full pointer-events-none"
              style={{ inset: -30, border: "1.5px solid rgba(6,182,212,0.22)", animation: "orb-pulse-b 4s ease-in-out 1.8s infinite" }} />
            {/* Slow spinning dashed ring */}
            <div className="absolute rounded-full pointer-events-none"
              style={{ inset: -14, border: "1.5px dashed rgba(16,185,129,0.28)", animation: "orb-rotate 20s linear infinite" }} />

            {/* 3D Network Orb */}
            <NetworkOrb active={selected === null} />

            {/* Center text overlay */}
            <div className="relative z-10 flex flex-col items-center text-center" style={{ animation: "icon-glow 3s ease-in-out infinite" }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-1"
                style={{
                  background: "linear-gradient(135deg, hsl(160,84%,39%), hsl(186,79%,42%))",
                  boxShadow: "0 4px 20px rgba(16,185,129,0.45), 0 0 0 3px rgba(16,185,129,0.15)",
                }}>
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-[15px] font-extrabold text-foreground leading-tight">EcoGridia</span>
              <span className="text-[9px] font-bold tracking-[0.16em] uppercase text-primary mt-0.5">Platform</span>
            </div>
          </div>

          {/* ── Stakeholder Nodes ── */}
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
                className="absolute flex flex-col items-center gap-1.5 z-10 group"
                style={{
                  left: `calc(${x}% - 52px)`,
                  top: `calc(${y}% - 62px)`,
                  opacity: isDimmed ? 0.28 : 1,
                  transition: "opacity 0.25s ease",
                  animation: `node-in 0.45s ease-out ${i * 0.08}s both, float-node ${5 + i * 0.4}s ease-in-out ${i * 0.3}s infinite`,
                }}
              >
                {/* 3D-style node disc */}
                <div
                  className="w-[104px] h-[104px] rounded-full flex items-center justify-center relative transition-all duration-250"
                  style={{
                    background: isActive
                      ? `radial-gradient(circle at 35% 35%, rgba(255,255,255,0.95), ${s.nodeBg})`
                      : "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.98), rgba(240,250,247,0.90))",
                    border: `2.5px solid ${isActive ? s.lineColor : "rgba(16,185,129,0.18)"}`,
                    boxShadow: isActive
                      ? `0 0 0 8px ${s.nodeGlow}, 0 12px 32px ${s.nodeGlow}, 0 4px 12px rgba(0,0,0,0.08), inset 0 2px 0 rgba(255,255,255,0.9)`
                      : "0 8px 24px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.05), inset 0 2px 0 rgba(255,255,255,0.95)",
                    transform: isActive ? "scale(1.14)" : "scale(1)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  {/* Inner ring for 3D depth */}
                  <div className="absolute inset-3 rounded-full pointer-events-none"
                    style={{
                      border: `1px solid ${isActive ? s.nodeBorder : "rgba(16,185,129,0.12)"}`,
                      background: isActive ? s.nodeBg : "rgba(16,185,129,0.03)",
                    }} />
                  <Icon
                    className="w-10 h-10 relative z-10 transition-all duration-250"
                    style={{
                      color: isActive ? s.lineColor : "rgba(16,185,129,0.55)",
                      filter: isActive ? `drop-shadow(0 2px 8px ${s.nodeGlow})` : undefined,
                    }}
                  />
                </div>

                {/* Label badge */}
                <div
                  className="px-3 py-1 rounded-full text-center transition-all duration-250"
                  style={{
                    background: isActive ? s.nodeBg : "rgba(255,255,255,0.88)",
                    border: `1.5px solid ${isActive ? s.lineColor : "rgba(0,0,0,0.08)"}`,
                    boxShadow: isActive ? `0 2px 10px ${s.nodeGlow}` : "0 2px 6px rgba(0,0,0,0.06)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <span
                    className="text-[11.5px] font-bold leading-tight"
                    style={{ color: isActive ? s.textColor : "hsl(160,15%,25%)" }}
                  >
                    {s.label}
                  </span>
                </div>

                {/* Active pulse dot */}
                {isActive && (
                  <span className="w-2 h-2 rounded-full animate-pulse"
                    style={{ background: s.lineColor, boxShadow: `0 0 8px ${s.lineColor}` }} />
                )}
              </button>
            );
          })}

          {/* Hint */}
          {!selected && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[12px] font-medium tracking-wide animate-pulse text-muted-foreground/45">
              Click a stakeholder to explore
            </div>
          )}
        </div>

        {/* ── Right: Detail Panel ── */}
        <div
          className="transition-all duration-300 ease-in-out overflow-hidden flex flex-col shrink-0"
          style={{
            width: sel ? 370 : 0,
            opacity: sel ? 1 : 0,
            background: "rgba(255,255,255,0.97)",
            borderLeft: sel ? "1px solid hsl(160,20%,90%)" : "none",
            boxShadow: sel ? "-12px 0 36px rgba(0,0,0,0.05)" : "none",
            backdropFilter: "blur(16px)",
          }}
        >
          {sel && (
            <div className="flex flex-col h-full overflow-y-auto">
              {/* Header */}
              <div className="px-6 pt-6 pb-5"
                style={{
                  background: `linear-gradient(160deg, ${sel.nodeBg} 0%, rgba(255,255,255,0) 100%)`,
                  borderBottom: `1px solid ${sel.nodeBorder}`,
                }}>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                      style={{
                        background: `radial-gradient(circle at 35% 30%, rgba(255,255,255,0.9), ${sel.nodeBg})`,
                        border: `1.5px solid ${sel.nodeBorder}`,
                        boxShadow: `0 4px 16px ${sel.nodeGlow}`,
                      }}>
                      <sel.icon className="w-6 h-6" style={{ color: sel.lineColor }} />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-muted-foreground mb-0.5">Stakeholder</p>
                      <h3 className="text-[20px] font-extrabold leading-tight" style={{ color: sel.textColor }}>
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
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-muted-foreground mb-3">Products Used</p>
                <div className="flex flex-col gap-1.5">
                  {sel.products.map((p, i) => (
                    <div key={i} className="flex items-start gap-2.5 px-3 py-2 rounded-xl transition-all"
                      style={{ background: "hsl(160,20%,98%)", border: "1px solid hsl(160,15%,93%)" }}>
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
              <div className="px-5 py-4"
                style={{ background: `linear-gradient(180deg, rgba(255,255,255,0) 0%, ${sel.nodeBg} 100%)` }}>
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-muted-foreground mb-3">Value Delivered</p>
                <div className="flex flex-col gap-2">
                  {sel.values.map((v, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full shrink-0"
                        style={{ background: sel.lineColor, boxShadow: `0 0 8px ${sel.nodeGlow}` }} />
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
