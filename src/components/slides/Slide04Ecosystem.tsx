import SlideLayout from "../SlideLayout";
import { Building2, GraduationCap, Server, Landmark, Users, Zap, TreePine } from "lucide-react";

const stakeholders = [
  { icon: GraduationCap, label: "Schools", pos: "top-[120px] left-[200px]" },
  { icon: Server, label: "Data Centers", pos: "top-[120px] right-[200px]" },
  { icon: TreePine, label: "Landowners", pos: "top-[420px] left-[80px]" },
  { icon: Building2, label: "Vendors", pos: "top-[420px] right-[80px]" },
  { icon: Landmark, label: "Government", pos: "bottom-[180px] left-[200px]" },
  { icon: Users, label: "Communities", pos: "bottom-[180px] right-[200px]" },
];

const Slide04Ecosystem = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-16">
      <h2 className="text-5xl font-bold text-foreground mb-2 animate-fade-in">
        Institution-Centric <span className="text-primary">Ecosystem</span>
      </h2>
      <p className="text-2xl text-muted-foreground mb-8">Every stakeholder connects through EcoGridia.</p>

      <div className="flex-1 relative flex items-center justify-center">
        {/* Center hub */}
        <div className="w-64 h-64 rounded-full bg-primary/10 border-4 border-primary flex items-center justify-center z-10 animate-scale-in">
          <div className="text-center">
            <Zap className="w-16 h-16 text-primary mx-auto mb-2" />
            <span className="text-3xl font-bold text-foreground">EcoGridia</span>
          </div>
        </div>

        {/* Stakeholders in a circle */}
        {stakeholders.map((s, i) => {
          const angle = (i * 60 - 90) * (Math.PI / 180);
          const rx = 420, ry = 300;
          const x = Math.cos(angle) * rx;
          const y = Math.sin(angle) * ry;
          return (
            <div
              key={s.label}
              className="absolute flex flex-col items-center animate-fade-in"
              style={{
                left: `calc(50% + ${x}px - 60px)`,
                top: `calc(50% + ${y}px - 50px)`,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <div className="w-28 h-28 rounded-2xl bg-card border-2 border-border hover:border-primary transition-colors flex items-center justify-center shadow-lg">
                <s.icon className="w-12 h-12 text-primary" />
              </div>
              <span className="mt-3 text-xl font-semibold text-foreground">{s.label}</span>
              {/* Line to center */}
              <svg className="absolute w-full h-full pointer-events-none" style={{ left: '60px', top: '50px', overflow: 'visible' }}>
                <line
                  x1="0" y1="0"
                  x2={-x} y2={-y}
                  stroke="hsl(160, 84%, 39%)"
                  strokeWidth="2"
                  strokeDasharray="8 4"
                  opacity="0.3"
                />
              </svg>
            </div>
          );
        })}
      </div>
    </div>
  </SlideLayout>
);

export default Slide04Ecosystem;
