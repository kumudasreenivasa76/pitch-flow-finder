import { useState, useEffect, useRef, useCallback } from "react";
import SlideLayout from "../SlideLayout";
import { Zap, Globe, Leaf, ArrowRight, BarChart3, Shield, Users } from "lucide-react";
import hero3d from "@/assets/hero-3d.jpg";

/* ── Interactive particle background ── */
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 960, y: 540 });
  const particlesRef = useRef<{ x: number; y: number; vx: number; vy: number; r: number; opacity: number }[]>([]);

  const init = useCallback(() => {
    const particles: typeof particlesRef.current = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * 1920,
        y: Math.random() * 1080,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        r: Math.random() * 2.5 + 1,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }
    particlesRef.current = particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = 1920;
    canvas.height = 1080;
    init();

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, 1920, 1080);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const pts = particlesRef.current;

      for (const p of pts) {
        // gentle mouse attraction
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 300) {
          p.vx += dx * 0.00004;
          p.vy += dy * 0.00004;
        }
        p.x += p.vx;
        p.y += p.vy;
        // wrap
        if (p.x < 0) p.x = 1920;
        if (p.x > 1920) p.x = 0;
        if (p.y < 0) p.y = 1080;
        if (p.y > 1080) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(160,84%,39%,${p.opacity})`;
        ctx.fill();
      }

      // draw connecting lines
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx2 = pts[i].x - pts[j].x;
          const dy2 = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          if (d < 160) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `hsla(160,84%,39%,${0.08 * (1 - d / 160)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
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
    const scaleX = 1920 / rect.width;
    const scaleY = 1080 / rect.height;
    mouseRef.current = {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  };

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ pointerEvents: "all", zIndex: 0 }}
      onMouseMove={handleMouseMove}
    />
  );
};

/* ── Animated counter ── */
const AnimatedValue = ({ value, delay }: { value: string; delay: number }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <span className={`inline-block transition-all duration-700 ${show ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>
      {value}
    </span>
  );
};

/* ── Data ── */
const stats = [
  { value: "$100B+", label: "TAM", icon: BarChart3 },
  { value: "4B+", label: "People Underserved", icon: Users },
  { value: "100M+", label: "Rooftops Untapped", icon: Globe },
  { value: "99.9%", label: "Platform Uptime", icon: Shield },
];

const pillars = [
  { icon: Zap, label: "Smart Grid", desc: "Digitize & manage distributed energy assets end-to-end" },
  { icon: Globe, label: "Global Scale", desc: "Deploy seamlessly across markets, regions & regulatory zones" },
  { icon: Leaf, label: "Clean Energy", desc: "Verify, trade & monetize green energy with full transparency" },
];

/* ── Slide component ── */
const Slide01Title = () => {
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);

  return (
    <SlideLayout>
      <div className="relative w-full h-full overflow-hidden">
        {/* Interactive particle canvas */}
        <ParticleBackground />

        {/* Gradient orbs */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-[100px] animate-float pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/[0.05] blur-[80px] animate-float pointer-events-none" style={{ animationDelay: "2s" }} />

        {/* Main content */}
        <div className="relative z-10 flex items-center h-full px-16 gap-8">
          {/* ── Left Column ── */}
          <div className="flex flex-col items-start flex-1 max-w-[54%]">
            {/* Logo */}
            <div className="flex items-center gap-4 mb-6 opacity-0 animate-fade-in-left" style={{ animationFillMode: "forwards" }}>
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center animate-glow-pulse shadow-lg shadow-primary/20">
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
              <span className="text-5xl font-bold text-foreground tracking-tight">EcoGridia</span>
            </div>

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-base font-semibold mb-5 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
              Infrastructure SaaS — Pre-Seed
            </div>

            {/* Headline */}
            <h1
              className="text-[48px] font-extrabold text-foreground leading-[1.12] mb-5 opacity-0 animate-slide-up"
              style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
            >
              The Future of Digital{" "}
              Infrastructure is{" "}
              <span className="text-primary relative inline-block">
                Green
                <svg className="absolute -bottom-1 left-0 w-full h-3" viewBox="0 0 120 10" fill="none">
                  <path d="M2 7C30 2 90 2 118 7" stroke="hsl(160 84% 39%)" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl text-muted-foreground max-w-[540px] leading-relaxed mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              The only SaaS platform for end-to-end clean energy — powering how institutions own,
              verify, and monetize distributed energy from rooftop to grid.
            </p>

            {/* Pillar cards */}
            <div
              className="flex gap-3 mb-8 opacity-0 animate-slide-up"
              style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}
            >
              {pillars.map((p, i) => (
                <div
                  key={p.label}
                  className={`group flex flex-col gap-1.5 p-4 rounded-xl border cursor-pointer transition-all duration-300 min-w-[170px] ${
                    hoveredPillar === i
                      ? "bg-primary/10 border-primary/40 shadow-xl shadow-primary/10 -translate-y-1"
                      : "bg-card/80 border-border/50 hover:border-primary/20"
                  }`}
                  onMouseEnter={() => setHoveredPillar(i)}
                  onMouseLeave={() => setHoveredPillar(null)}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                      hoveredPillar === i ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                    }`}>
                      <p.icon className="w-4 h-4" />
                    </div>
                    <span className="text-base font-semibold text-foreground">{p.label}</span>
                  </div>
                  <p className={`text-xs text-muted-foreground leading-snug transition-all duration-300 overflow-hidden ${
                    hoveredPillar === i ? "max-h-20 opacity-100 mt-1" : "max-h-0 opacity-0"
                  }`}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div
              className="flex items-center gap-5 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
            >
              <button className="group flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-xl text-base font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:scale-[1.04] active:scale-[0.98]">
                Explore the Deck
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <span className="text-sm text-muted-foreground">20 interactive slides →</span>
            </div>
          </div>

          {/* ── Right Column ── */}
          <div className="flex flex-col items-center justify-center flex-1 max-w-[46%]">
            {/* 3D image */}
            <div
              className="relative opacity-0 animate-slide-in-right"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              <div className="animate-float">
                <img
                  src={hero3d}
                  alt="3D isometric clean energy infrastructure"
                  className="w-full max-w-[640px] h-auto rounded-2xl shadow-2xl shadow-primary/15"
                />
              </div>
              {/* Shimmer sweep */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none animate-shimmer"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, hsla(160,84%,39%,0.07) 50%, transparent 100%)",
                  backgroundSize: "200% 100%",
                }}
              />
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-4 gap-3 mt-6 w-full max-w-[640px]">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="group flex flex-col items-center p-3 rounded-xl bg-card/80 backdrop-blur-sm border border-border/40 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                  style={{ opacity: 0, animation: `count-up 0.5s ease-out ${0.8 + i * 0.12}s forwards` }}
                >
                  <s.icon className="w-4 h-4 text-primary mb-1 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-lg font-bold text-foreground leading-tight">
                    <AnimatedValue value={s.value} delay={900 + i * 120} />
                  </span>
                  <span className="text-[11px] text-muted-foreground mt-0.5">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide01Title;
