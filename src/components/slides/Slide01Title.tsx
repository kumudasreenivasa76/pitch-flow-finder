import SlideLayout from "../SlideLayout";
import { Zap, Globe, Leaf } from "lucide-react";

const Slide01Title = () => (
  <SlideLayout>
    <div className="flex flex-col items-center justify-center h-full px-20 text-center">
      {/* Logo */}
      <div className="flex items-center gap-4 mb-12 animate-fade-in">
        <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center">
          <Zap className="w-10 h-10 text-primary-foreground" />
        </div>
        <span className="text-6xl font-bold text-foreground tracking-tight">EcoGridia</span>
      </div>

      {/* Headline */}
      <h1 className="text-7xl font-extrabold text-foreground leading-tight mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        The Future of Digital Infrastructure is Green:<br />
        <span className="text-primary">The Only SaaS Platform for End-to-End Clean Energy</span>
      </h1>

      {/* Tagline */}
      <p className="text-3xl text-muted-foreground max-w-4xl mb-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
        The platform that powers how institutions own, verify, and monetize clean energy — from rooftop to grid.
      </p>

      {/* Icons row */}
      <div className="flex gap-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
        {[
          { icon: Zap, label: "Smart Grid" },
          { icon: Globe, label: "Global Scale" },
          { icon: Leaf, label: "Clean Energy" },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-3 text-muted-foreground">
            <item.icon className="w-8 h-8 text-primary" />
            <span className="text-2xl">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default Slide01Title;
