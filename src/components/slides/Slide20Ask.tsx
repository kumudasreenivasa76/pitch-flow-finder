import { useState, useEffect, useRef, useCallback } from "react";
import SlideLayout from "../SlideLayout";
import { Zap, Mail, Globe, ArrowRight, DollarSign, Target, Users, Rocket, Code, ShoppingCart, Scale, Landmark } from "lucide-react";
import ask3d from "@/assets/ask-3d.png";

/* ── Interactive particle background (matches Slide01) ── */
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 960, y: 540 });
  const particlesRef = useRef<{ x: number; y: number; vx: number; vy: number; r: number; opacity: number }[]>([]);

  const init = useCallback(() => {
    const particles: typeof particlesRef.current = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * 1920, y: Math.random() * 1080,
        vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 2 + 0.8, opacity: Math.random() * 0.3 + 0.05,
      });
    }
    particlesRef.current = particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = 1920; canvas.height = 1080;
    init();
    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, 1920, 1080);
      const mx = mouseRef.current.x, my = mouseRef.current.y;
      const pts = particlesRef.current;
      for (const p of pts) {
        const dx = mx - p.x, dy = my - p.y, dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 300) { p.vx += dx * 0.00003; p.vy += dy * 0.00003; }
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = 1920; if (p.x > 1920) p.x = 0;
        if (p.y < 0) p.y = 1080; if (p.y > 1080) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(160,84%,39%,${p.opacity})`; ctx.fill();
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx2 = pts[i].x - pts[j].x, dy2 = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          if (d < 140) {
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `hsla(160,84%,39%,${0.06 * (1 - d / 140)})`; ctx.lineWidth = 0.8; ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, [init]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mouseRef.current = { x: (e.clientX - rect.left) * (1920 / rect.width), y: (e.clientY - rect.top) * (1080 / rect.height) };
  };

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ pointerEvents: "all", zIndex: 0 }} onMouseMove={handleMouseMove} />;
};

/* ── Animated counter ── */
const AnimatedValue = ({ value, delay }: { value: string; delay: number }) => {
  const [show, setShow] = useState(false);
  useEffect(() => { const t = setTimeout(() => setShow(true), delay); return () => clearTimeout(t); }, [delay]);
  return <span className={`inline-block transition-all duration-700 ${show ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>{value}</span>;
};

/* ── Data ── */
const milestones = [
  { icon: Code, label: "Launch enterprise product (v2.0)" },
  { icon: Users, label: "10 active enterprise customers" },
  { icon: Target, label: "50+ sites under management" },
  { icon: DollarSign, label: "$2M ARR milestone" },
  { icon: Rocket, label: "Series A readiness" },
  { icon: Globe, label: "3 country expansion" },
  { icon: Landmark, label: "Government pilot contract" },
  { icon: ShoppingCart, label: "Community platform launch" },
];

const funds = [
  { label: "Product & Engineering", pct: 45, color: "hsl(160 84% 39%)" },
  { label: "Sales & GTM", pct: 25, color: "hsl(174 72% 40%)" },
  { label: "Operations", pct: 15, color: "hsl(160 60% 28%)" },
  { label: "Legal & Compliance", pct: 10, color: "hsl(160 10% 50%)" },
  { label: "Reserve", pct: 5, color: "hsl(160 84% 39% / 0.35)" },
];

const Slide20Ask = () => {
  const [hoveredMilestone, setHoveredMilestone] = useState<number | null>(null);

  return (
    <SlideLayout>
      <div className="relative w-full h-full overflow-hidden">
        <ParticleBackground />

        {/* Gradient orbs */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[120px] animate-float pointer-events-none" />
        <div className="absolute bottom-[-80px] right-[-80px] w-[500px] h-[500px] rounded-full bg-accent/[0.03] blur-[100px] animate-float pointer-events-none" style={{ animationDelay: "2s" }} />

        {/* Main content */}
        <div className="relative z-10 flex h-full">
          {/* ── Left Column ── */}
          <div className="flex flex-col justify-center pl-20 pr-10 flex-1 max-w-[55%]">
            {/* Logo */}
            <div className="flex items-center gap-4 mb-6 opacity-0 animate-fade-in-left" style={{ animationFillMode: "forwards" }}>
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center animate-glow-pulse shadow-lg shadow-primary/20">
                <Zap className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="font-display text-[44px] font-bold text-foreground tracking-tight">EcoGridia</span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-primary/[0.06] border border-primary/15 mb-6 w-fit opacity-0 animate-fade-in"
              style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="font-mono-brand text-[13px] font-medium text-primary tracking-wide">Pre-Seed · $2M Raise</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-[52px] font-bold text-foreground leading-[1.08] mb-4 opacity-0 animate-slide-up"
              style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}>
              The Ask:{" "}
              <span className="text-primary relative inline-block">
                $2M Pre-Seed
                <svg className="absolute -bottom-1.5 left-0 w-full h-3" viewBox="0 0 200 10" fill="none">
                  <path d="M2 8C50 2 150 2 198 8" stroke="hsl(160 84% 39%)" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-[18px] text-muted-foreground max-w-[520px] leading-[1.65] mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              18-month runway to Series A readiness. Building the SaaS platform for how humanity owns, verifies, and pays for clean energy.
            </p>

            {/* Use of Funds — compact bars */}
            <div className="mb-8 opacity-0 animate-slide-up" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
              <p className="font-mono-brand text-[11px] text-muted-foreground uppercase tracking-widest mb-3">Use of Funds</p>
              <div className="space-y-2.5">
                {funds.map((f) => (
                  <div key={f.label} className="flex items-center gap-3">
                    <span className="text-[13px] text-foreground font-medium w-[180px] shrink-0">{f.label}</span>
                    <div className="flex-1 h-3 bg-muted/50 rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-700" style={{ width: `${f.pct}%`, background: f.color }} />
                    </div>
                    <span className="text-[13px] font-bold text-foreground w-[36px] text-right">{f.pct}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact row */}
            <div className="flex items-center gap-5 opacity-0 animate-fade-in" style={{ animationDelay: "0.65s", animationFillMode: "forwards" }}>
              <button className="group flex items-center gap-2.5 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-display text-[15px] font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:scale-[1.03] active:scale-[0.98]">
                Let's Talk
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <div className="flex flex-col gap-1">
                <span className="flex items-center gap-2 text-[13px] text-muted-foreground">
                  <Mail className="w-3.5 h-3.5 text-primary" /> team@ecogrida.com
                </span>
                <span className="flex items-center gap-2 text-[13px] text-muted-foreground">
                  <Globe className="w-3.5 h-3.5 text-primary" /> ecogrida.com
                </span>
              </div>
            </div>
          </div>

          {/* ── Right Column ── */}
          <div className="flex flex-col items-center justify-center flex-1 max-w-[45%] pr-12">
            {/* 3D image */}
            <div className="relative opacity-0 animate-slide-in-right mb-6" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
              <div className="animate-float">
                <img src={ask3d} alt="3D isometric clean energy investment"
                  className="w-full max-w-[520px] h-auto rounded-2xl shadow-2xl shadow-primary/10" />
              </div>
              <div className="absolute inset-0 rounded-2xl pointer-events-none animate-shimmer"
                style={{ background: "linear-gradient(90deg, transparent 0%, hsla(160,84%,39%,0.06) 50%, transparent 100%)", backgroundSize: "200% 100%" }} />
            </div>

            {/* 18-Month Milestones */}
            <div className="w-full max-w-[520px] opacity-0 animate-fade-in" style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}>
              <p className="font-mono-brand text-[11px] text-muted-foreground uppercase tracking-widest mb-3">18-Month Milestones</p>
              <div className="grid grid-cols-2 gap-2">
                {milestones.map((m, i) => {
                  const MIcon = m.icon;
                  return (
                    <div
                      key={i}
                      className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-default transition-all duration-300 ${
                        hoveredMilestone === i
                          ? "bg-primary/[0.06] border-primary/30 shadow-lg shadow-primary/8 -translate-y-0.5"
                          : "bg-card/60 border-border/40 hover:border-primary/15"
                      }`}
                      onMouseEnter={() => setHoveredMilestone(i)}
                      onMouseLeave={() => setHoveredMilestone(null)}
                      style={{ opacity: 0, animation: `count-up 0.4s ease-out ${0.7 + i * 0.06}s forwards` }}
                    >
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        hoveredMilestone === i ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                      }`}>
                        <MIcon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[12px] font-medium text-foreground leading-tight">{m.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom tagline bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-center py-4 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}>
          <p className="text-[15px] text-muted-foreground italic">
            "The SaaS platform for how humanity owns, verifies, and pays for clean energy."
          </p>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide20Ask;
