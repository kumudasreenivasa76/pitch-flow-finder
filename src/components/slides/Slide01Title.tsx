import { useState } from "react";
import SlideLayout from "../SlideLayout";
import { Zap, Globe, Leaf, ArrowRight, BarChart3, Shield, Users } from "lucide-react";
import hero3d from "@/assets/hero-3d.jpg";

const stats = [
  { value: "$100B+", label: "TAM", icon: BarChart3 },
  { value: "4B+", label: "People Underserved", icon: Users },
  { value: "100M+", label: "Rooftops Untapped", icon: Globe },
  { value: "99.9%", label: "Platform Uptime", icon: Shield },
];

const pillars = [
  { icon: Zap, label: "Smart Grid", desc: "Digitize & manage distributed assets" },
  { icon: Globe, label: "Global Scale", desc: "Deploy across markets & regions" },
  { icon: Leaf, label: "Clean Energy", desc: "Verify, trade & monetize green energy" },
];

const Slide01Title = () => {
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);

  return (
    <SlideLayout>
      <div className="flex items-center h-full relative overflow-hidden">
        {/* Decorative gradient orbs */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute -bottom-60 right-20 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        {/* Left content */}
        <div className="flex flex-col items-start pl-20 pr-8 max-w-[56%] z-10">
          {/* Logo with glow */}
          <div className="flex items-center gap-5 mb-10 opacity-0 animate-fade-in-left">
            <div className="w-[72px] h-[72px] rounded-2xl bg-primary flex items-center justify-center animate-glow-pulse">
              <Zap className="w-9 h-9 text-primary-foreground" />
            </div>
            <span className="text-[56px] font-bold text-foreground tracking-tight">EcoGridia</span>
          </div>

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-lg font-semibold mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.15s" }}
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-[glow-pulse_2s_ease-in-out_infinite]" />
            Infrastructure SaaS — Series Pre-Seed
          </div>

          {/* Headline */}
          <h1
            className="text-[52px] font-extrabold text-foreground leading-[1.1] mb-6 opacity-0 animate-slide-up"
            style={{ animationDelay: "0.25s" }}
          >
            The Future of Digital
            <br />
            Infrastructure is{" "}
            <span className="text-primary relative">
              Green
              <svg className="absolute -bottom-1 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                <path d="M2 8 C50 2, 150 2, 198 8" stroke="hsl(160 84% 39%)" strokeWidth="3" strokeLinecap="round" className="opacity-60" />
              </svg>
            </span>
          </h1>

          <p
            className="text-[22px] text-muted-foreground max-w-[600px] leading-relaxed mb-10 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            The only SaaS platform for end-to-end clean energy — powering how institutions own,
            verify, and monetize distributed energy from rooftop to grid.
          </p>

          {/* Interactive pillar cards */}
          <div className="flex gap-4 mb-10 opacity-0 animate-slide-up" style={{ animationDelay: "0.55s" }}>
            {pillars.map((p, i) => (
              <div
                key={p.label}
                className={`flex flex-col gap-2 p-5 rounded-xl border border-border/60 cursor-pointer transition-all duration-300 ${
                  hoveredPillar === i
                    ? "bg-primary/10 border-primary/40 shadow-lg shadow-primary/10 scale-[1.03]"
                    : "bg-card hover:bg-secondary/60"
                }`}
                onMouseEnter={() => setHoveredPillar(i)}
                onMouseLeave={() => setHoveredPillar(null)}
              >
                <div className="flex items-center gap-2">
                  <p.icon className={`w-5 h-5 transition-colors duration-300 ${hoveredPillar === i ? "text-primary" : "text-muted-foreground"}`} />
                  <span className="text-lg font-semibold text-foreground">{p.label}</span>
                </div>
                <span className={`text-sm text-muted-foreground transition-all duration-300 ${hoveredPillar === i ? "max-h-20 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
                  {p.desc}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <button className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl text-lg font-semibold hover:brightness-110 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
              Explore the Deck
              <ArrowRight className="w-5 h-5" />
            </button>
            <span className="text-muted-foreground text-base">20 interactive slides</span>
          </div>
        </div>

        {/* Right side — 3D image + stats */}
        <div className="flex flex-col items-center justify-center flex-1 pr-16 z-10">
          {/* 3D Image with float */}
          <div
            className="relative opacity-0 animate-slide-in-right"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="animate-float">
              <img
                src={hero3d}
                alt="3D isometric clean energy infrastructure with solar panels, wind turbines, and smart grid"
                className="w-[680px] h-auto rounded-2xl shadow-2xl shadow-primary/10"
              />
            </div>
            {/* Shimmer overlay */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none animate-shimmer"
              style={{
                background: "linear-gradient(90deg, transparent 0%, hsl(160 84% 39% / 0.06) 50%, transparent 100%)",
                backgroundSize: "200% 100%",
              }}
            />
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-4 gap-4 mt-8 w-full max-w-[680px]">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="flex flex-col items-center p-3 rounded-xl bg-card border border-border/50 opacity-0 animate-count-up hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${0.7 + i * 0.1}s` }}
              >
                <s.icon className="w-4 h-4 text-primary mb-1" />
                <span className="text-xl font-bold text-foreground">{s.value}</span>
                <span className="text-xs text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide01Title;
