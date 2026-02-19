import { useState, useEffect, useRef, useCallback } from "react";
import SlideLayout from "../SlideLayout";
import { Zap, Globe, Leaf, ArrowRight, BarChart3, Shield, Users, TrendingUp } from "lucide-react";
import hero3d from "@/assets/hero-3d.jpg";

/* ── Interactive particle background ── */
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 960, y: 540 });
  const particlesRef = useRef<{ x: number; y: number; vx: number; vy: number; r: number; opacity: number }[]>([]);

  const init = useCallback(() => {
    const particles: typeof particlesRef.current = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * 1920,
        y: Math.random() * 1080,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 2 + 0.8,
        opacity: Math.random() * 0.3 + 0.05,
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
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 300) {
          p.vx += dx * 0.00003;
          p.vy += dy * 0.00003;
        }
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = 1920;
        if (p.x > 1920) p.x = 0;
        if (p.y < 0) p.y = 1080;
        if (p.y > 1080) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(160,84%,39%,${p.opacity})`;
        ctx.fill();
      }

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx2 = pts[i].x - pts[j].x;
          const dy2 = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          if (d < 140) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `hsla(160,84%,39%,${0.06 * (1 - d / 140)})`;
            ctx.lineWidth = 0.8;
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
  { icon: Globe, label: "Global Scale", desc: "Deploy seamlessly across markets & regulatory zones" },
  { icon: Leaf, label: "Clean Energy", desc: "Verify, trade & monetize green energy transparently" },
];

/* ── Slide component ── */
const Slide01Title = () => {
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);

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
            <div className="flex items-center gap-4 mb-8 opacity-0 animate-fade-in-left" style={{ animationFillMode: "forwards" }}>
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center animate-glow-pulse shadow-lg shadow-primary/20">
                <Zap className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="font-display text-[44px] font-bold text-foreground tracking-tight">
                EcoGridia
              </span>
            </div>

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-primary/[0.06] border border-primary/15 mb-7 w-fit opacity-0 animate-fade-in"
              style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="font-mono-brand text-[13px] font-medium text-primary tracking-wide">
                Infrastructure SaaS · Pre-Seed
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display text-[56px] font-bold text-foreground leading-[1.08] mb-6 opacity-0 animate-slide-up"
              style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
            >
              The Future of Digital{" "}
              <br />
              Infrastructure is{" "}
              <span className="text-primary relative inline-block">
                Green
                <svg className="absolute -bottom-1.5 left-0 w-full h-3" viewBox="0 0 120 10" fill="none">
                  <path d="M2 8C30 2 90 2 118 8" stroke="hsl(160 84% 39%)" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-[19px] text-muted-foreground max-w-[520px] leading-[1.65] mb-10 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              The only SaaS platform for end-to-end clean energy — powering how
              institutions own, verify, and monetize distributed energy from
              rooftop to grid.
            </p>

            {/* Pillar cards */}
            <div
              className="flex gap-3.5 mb-10 opacity-0 animate-slide-up"
              style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}
            >
              {pillars.map((p, i) => (
                <div
                  key={p.label}
                  className={`group flex flex-col gap-2 p-4 rounded-xl border cursor-pointer transition-all duration-300 flex-1 ${
                    hoveredPillar === i
                      ? "bg-primary/[0.06] border-primary/30 shadow-xl shadow-primary/8 -translate-y-1"
                      : "bg-card/60 border-border/40 hover:border-primary/15"
                  }`}
                  onMouseEnter={() => setHoveredPillar(i)}
                  onMouseLeave={() => setHoveredPillar(null)}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                      hoveredPillar === i ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                    }`}>
                      <p.icon className="w-[18px] h-[18px]" />
                    </div>
                    <span className="font-display text-[15px] font-semibold text-foreground">{p.label}</span>
                  </div>
                  <p className={`text-[12px] text-muted-foreground leading-relaxed transition-all duration-300 overflow-hidden ${
                    hoveredPillar === i ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
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
              <button className="group flex items-center gap-2.5 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-display text-[15px] font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:scale-[1.03] active:scale-[0.98]">
                Explore the Deck
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <span className="font-mono-brand text-[13px] text-muted-foreground">
                20 interactive slides →
              </span>
            </div>
          </div>

          {/* ── Right Column ── */}
          <div className="flex flex-col items-center justify-center flex-1 max-w-[45%] pr-12">
            {/* 3D image */}
            <div
              className="relative opacity-0 animate-slide-in-right"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              <div className="animate-float">
                <img
                  src={hero3d}
                  alt="3D isometric clean energy infrastructure"
                  className="w-full max-w-[580px] h-auto rounded-2xl shadow-2xl shadow-primary/10"
                />
              </div>
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none animate-shimmer"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, hsla(160,84%,39%,0.06) 50%, transparent 100%)",
                  backgroundSize: "200% 100%",
                }}
              />
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-4 gap-3 mt-7 w-full max-w-[580px]">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="group flex flex-col items-center p-3.5 rounded-xl bg-card/70 backdrop-blur-sm border border-border/30 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                  style={{ opacity: 0, animation: `count-up 0.5s ease-out ${0.8 + i * 0.12}s forwards` }}
                >
                  <s.icon className="w-4 h-4 text-primary mb-1.5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-display text-[18px] font-bold text-foreground leading-tight">
                    <AnimatedValue value={s.value} delay={900 + i * 120} />
                  </span>
                  <span className="font-mono-brand text-[10px] text-muted-foreground mt-1 tracking-wide">{s.label}</span>
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
