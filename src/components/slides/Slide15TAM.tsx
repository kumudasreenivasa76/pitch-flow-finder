import SlideLayout from "../SlideLayout";
import { useState } from "react";
import { ChevronRight, Globe } from "lucide-react";

const segments = [
  { name: "Clean Energy Infrastructure", value: "$50B", detail: "Solar, wind, and hybrid installation management, monitoring, and optimization across commercial and institutional sectors." },
  { name: "Energy Trading & Markets", value: "$25B", detail: "Marketplace for verified energy units, PPAs, RECs, and carbon credits with real-time settlement." },
  { name: "ESG & Compliance", value: "$15B", detail: "Automated regulatory compliance, carbon accounting, and ESG reporting for enterprises and institutions." },
  { name: "Community Energy", value: "$10B", detail: "Fractional ownership, shared solar programs, and community-based clean energy participation platforms." },
];

const funnel = [
  { label: "TAM", value: "$100B+", width: "100%", opacity: "0.12" },
  { label: "SAM", value: "$25B", width: "72%", opacity: "0.25" },
  { label: "SOM (Y5)", value: "$60M ARR", width: "45%", opacity: "0.5" },
];

const Slide15TAM = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <SlideLayout>
      <div className="flex h-full">
        {/* Left - Segments */}
        <div className="w-[560px] shrink-0 flex flex-col bg-card/40 border-r border-border/30">
          <div className="px-8 pt-8 pb-5 shrink-0 border-b border-border/20">
            <div className="flex items-center gap-4 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Globe className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h2 className="text-[38px] font-extrabold text-foreground leading-none">
                  TAM / SAM / <span className="gradient-text">SOM</span>
                </h2>
                <p className="text-[16px] text-muted-foreground mt-1">$100B+ total addressable market</p>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center gap-2 px-5 py-4">
            {segments.map((s, i) => {
              const isActive = selected === i;
              return (
                <button
                  key={i}
                  onClick={() => setSelected(isActive ? null : i)}
                  className={`flex items-center gap-4 px-5 py-5 rounded-2xl text-left transition-all duration-300 opacity-0 animate-fade-in ${
                    isActive
                      ? "bg-primary/10 border-2 border-primary/30 shadow-lg shadow-primary/5"
                      : "bg-transparent border-2 border-transparent hover:bg-card hover:border-border/30"
                  }`}
                  style={{ animationDelay: `${0.08 + i * 0.06}s`, animationFillMode: "forwards" }}
                >
                  <div className="flex-1 min-w-0">
                    <p className={`text-[17px] font-bold leading-tight transition-colors ${isActive ? "text-primary" : "text-foreground"}`}>
                      {s.name}
                    </p>
                    {isActive && (
                      <p className="text-[14px] text-muted-foreground mt-2 leading-relaxed animate-fade-in">{s.detail}</p>
                    )}
                  </div>
                  <span className={`text-[28px] font-extrabold shrink-0 transition-colors ${isActive ? "text-primary" : "text-foreground/70"}`}>
                    {s.value}
                  </span>
                  <ChevronRight className={`w-5 h-5 shrink-0 transition-all duration-300 ${isActive ? "text-primary translate-x-1" : "text-muted-foreground/40"}`} />
                </button>
              );
            })}

            <div className="mt-2 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-eco-teal/10 border border-primary/20 text-center opacity-0 animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              <span className="text-[16px] text-muted-foreground">Total TAM: </span>
              <span className="text-[32px] font-extrabold gradient-text">$100B+</span>
            </div>
          </div>
        </div>

        {/* Right - Funnel */}
        <div className="flex-1 flex items-center justify-center px-12 overflow-hidden">
          <div className="w-full max-w-[900px] flex flex-col items-center gap-8">
            {funnel.map((f, i) => (
              <div
                key={f.label}
                className="text-center opacity-0 animate-fade-in"
                style={{
                  width: f.width,
                  animationDelay: `${0.2 + i * 0.15}s`,
                  animationFillMode: "forwards",
                }}
              >
                <div
                  className="rounded-2xl border-2 border-primary/30 py-10 px-8 transition-all hover:shadow-xl hover:shadow-primary/10"
                  style={{ background: `hsla(160, 84%, 39%, ${f.opacity})` }}
                >
                  <div className="text-[18px] font-bold text-muted-foreground uppercase tracking-wider mb-1">{f.label}</div>
                  <div className="text-[48px] font-black text-foreground leading-none stat-glow">{f.value}</div>
                </div>
              </div>
            ))}

            <div className="text-center mt-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
              <p className="text-[16px] text-muted-foreground">
                Capturing <span className="text-primary font-bold">0.24%</span> of SAM = <span className="text-primary font-bold">$60M ARR</span> by Year 5
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide15TAM;
