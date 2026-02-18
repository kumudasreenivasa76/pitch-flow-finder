import SlideLayout from "../SlideLayout";
import { useState } from "react";
import { Building2, GraduationCap, Server, Landmark, Users, Zap, TreePine } from "lucide-react";

const stakeholders = [
  { icon: GraduationCap, label: "Schools & Universities", desc: "Solar installations, education dashboards, community programs" },
  { icon: Server, label: "Data Centers", desc: "Renewable procurement, 24/7 carbon matching, efficiency optimization" },
  { icon: TreePine, label: "Landowners", desc: "Asset onboarding, project management, revenue generation" },
  { icon: Building2, label: "Vendors & EPCs", desc: "Marketplace listing, project coordination, commissioning" },
  { icon: Landmark, label: "Government", desc: "Compliance monitoring, public dashboards, permitting" },
  { icon: Users, label: "Communities", desc: "Shared solar, micro-investment, impact visibility" },
];

const Slide04Ecosystem = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <SlideLayout>
      <div className="flex flex-col h-full px-20 py-14">
        {/* Header */}
        <div className="flex items-center gap-4 mb-2 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
          <div className="section-line" />
          <h2 className="text-[44px] font-extrabold text-foreground leading-none">
            Institution-Centric <span className="gradient-text">Ecosystem</span>
          </h2>
        </div>
        <p className="text-[20px] text-muted-foreground mb-10 ml-[60px] opacity-0 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
          Every stakeholder connects through one unified platform
        </p>

        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-[1100px] h-[700px]">
            {/* Connection lines - SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1100 700">
              {stakeholders.map((_, i) => {
                const angle = (i * 60 - 90) * (Math.PI / 180);
                const rx = 400, ry = 260;
                const cx = 550, cy = 350;
                const x = cx + Math.cos(angle) * rx;
                const y = cy + Math.sin(angle) * ry;
                return (
                  <line key={i} x1={cx} y1={cy} x2={x} y2={y}
                    stroke={hovered === i ? "hsl(160, 84%, 39%)" : "hsl(160, 15%, 85%)"}
                    strokeWidth={hovered === i ? 2.5 : 1.5}
                    strokeDasharray={hovered === i ? "0" : "6 4"}
                    className="transition-all duration-500"
                    opacity={hovered === i ? 0.6 : 0.3}
                  />
                );
              })}
            </svg>

            {/* Center hub */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-[180px] h-[180px] rounded-full bg-gradient-to-br from-primary to-eco-teal flex items-center justify-center shadow-2xl shadow-primary/20 animate-scale-in">
                <div className="w-[160px] h-[160px] rounded-full bg-background/90 backdrop-blur flex flex-col items-center justify-center">
                  <Zap className="w-10 h-10 text-primary mb-1" />
                  <span className="text-[22px] font-extrabold text-foreground">EcoGridia</span>
                  <span className="text-[11px] text-muted-foreground font-medium">Orchestration Hub</span>
                </div>
              </div>
            </div>

            {/* Stakeholder nodes */}
            {stakeholders.map((s, i) => {
              const angle = (i * 60 - 90) * (Math.PI / 180);
              const rx = 400, ry = 260;
              const x = 550 + Math.cos(angle) * rx;
              const y = 350 + Math.sin(angle) * ry;
              const isHovered = hovered === i;
              return (
                <div
                  key={s.label}
                  className="absolute z-20 opacity-0 animate-fade-in"
                  style={{
                    left: `${x}px`, top: `${y}px`,
                    transform: "translate(-50%, -50%)",
                    animationDelay: `${0.2 + i * 0.08}s`,
                    animationFillMode: "forwards",
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className={`flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-500 cursor-pointer ${
                    isHovered
                      ? "bg-primary/10 border-2 border-primary/30 shadow-xl shadow-primary/10 -translate-y-2"
                      : "bg-card/80 border-2 border-border/40 hover:border-primary/20"
                  }`}>
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isHovered ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" : "bg-secondary text-muted-foreground"
                    }`}>
                      <s.icon className="w-8 h-8" />
                    </div>
                    <span className={`text-[15px] font-bold transition-colors ${isHovered ? "text-primary" : "text-foreground"}`}>
                      {s.label}
                    </span>
                    <p className={`text-[11px] text-center text-muted-foreground max-w-[160px] leading-snug transition-all duration-300 overflow-hidden ${
                      isHovered ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                    }`}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide04Ecosystem;
