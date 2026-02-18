import SlideLayout from "../SlideLayout";
import { useState } from "react";
import { ChevronRight, Rocket, Target, Users, Building2 } from "lucide-react";

const phases = [
  {
    phase: "Phase 1",
    icon: Rocket,
    title: "Supply Lock-In",
    timeline: "Months 1–6",
    color: "bg-primary",
    goals: "Secure initial supply-side partners",
    actions: ["Onboard 50+ landowners", "Sign 10 vendor partners", "Launch 3 pilot sites"],
    outcomes: "Foundation of verified supply assets",
  },
  {
    phase: "Phase 2",
    icon: Target,
    title: "Demand Activation",
    timeline: "Months 6–12",
    color: "bg-eco-teal",
    goals: "Activate enterprise demand channels",
    actions: ["Launch enterprise portal", "First PPA executions", "Compliance module live"],
    outcomes: "$500K ARR milestone",
  },
  {
    phase: "Phase 3",
    icon: Users,
    title: "Community Flywheel",
    timeline: "Months 12–18",
    color: "bg-eco-emerald",
    goals: "Enable community participation at scale",
    actions: ["Shared project marketplace", "Micro-investment platform", "School partnerships"],
    outcomes: "10x user base growth",
  },
  {
    phase: "Phase 4",
    icon: Building2,
    title: "Government & Infra",
    timeline: "Months 18–24",
    color: "bg-foreground",
    goals: "Government contracts and infrastructure deals",
    actions: ["Government RFP wins", "Utility partnerships", "Multi-country expansion"],
    outcomes: "$5M+ ARR run rate",
  },
];

const Slide13GTM = () => {
  const [selected, setSelected] = useState(0);
  const p = phases[selected];
  const Icon = p.icon;

  return (
    <SlideLayout>
      <div className="flex h-full">
        {/* Left sidebar */}
        <div className="w-[480px] shrink-0 flex flex-col bg-card/40 border-r border-border/30">
          <div className="px-8 pt-8 pb-5 shrink-0 border-b border-border/20">
            <div className="flex items-center gap-4 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
              <div className="section-line" />
              <div>
                <h2 className="text-[36px] font-extrabold text-foreground leading-none">
                  Go-To-Market <span className="gradient-text">Roadmap</span>
                </h2>
                <p className="text-[16px] text-muted-foreground mt-1">Four phases to market dominance</p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="px-8 pt-6">
            <div className="flex gap-2 mb-1">
              {phases.map((ph, i) => (
                <div
                  key={i}
                  className={`flex-1 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i <= selected ? ph.color : "bg-muted"
                  }`}
                  onClick={() => setSelected(i)}
                  style={{ opacity: i <= selected ? 1 : 0.3 }}
                />
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
              <span>Month 1</span>
              <span>Month 24</span>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center gap-2.5 px-5 py-4">
            {phases.map((ph, i) => {
              const PIcon = ph.icon;
              const isActive = selected === i;
              return (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  className={`flex items-center gap-4 px-5 py-5 rounded-2xl text-left transition-all duration-300 opacity-0 animate-fade-in ${
                    isActive
                      ? "bg-primary/10 border-2 border-primary/30 shadow-lg shadow-primary/5"
                      : "bg-transparent border-2 border-transparent hover:bg-card hover:border-border/30"
                  }`}
                  style={{ animationDelay: `${0.1 + i * 0.06}s`, animationFillMode: "forwards" }}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isActive ? `${ph.color} text-primary-foreground shadow-md` : "bg-secondary text-muted-foreground"
                  }`}>
                    <PIcon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[12px] font-bold uppercase tracking-wider ${isActive ? "text-primary" : "text-muted-foreground"}`}>{ph.phase}</span>
                      <span className="text-[11px] text-muted-foreground">• {ph.timeline}</span>
                    </div>
                    <p className={`text-[17px] font-bold leading-tight transition-colors ${isActive ? "text-foreground" : "text-foreground/80"}`}>
                      {ph.title}
                    </p>
                  </div>
                  <ChevronRight className={`w-5 h-5 shrink-0 transition-all duration-300 ${isActive ? "text-primary translate-x-1" : "text-muted-foreground/40"}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right detail */}
        <div className="flex-1 flex items-center justify-center px-12 overflow-hidden" key={selected}>
          <div className="w-full max-w-[1000px]">
            <div className="animate-fade-in">
              <div className="flex items-center gap-4 mb-2">
                <div className={`w-[52px] h-[52px] rounded-2xl ${p.color} flex items-center justify-center text-primary-foreground shadow-lg`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[13px] text-muted-foreground font-mono">{p.phase} • {p.timeline}</span>
                  <h3 className="text-[30px] font-extrabold text-foreground leading-tight">{p.title}</h3>
                </div>
              </div>
            </div>

            <div className="mt-6 p-5 rounded-xl bg-card border border-border/30 animate-fade-in" style={{ animationDelay: "0.08s" }}>
              <h4 className="text-[13px] font-bold text-primary uppercase tracking-widest mb-2">Strategic Goal</h4>
              <p className="text-[18px] text-foreground font-medium">{p.goals}</p>
            </div>

            <div className="mt-4 animate-fade-in" style={{ animationDelay: "0.15s" }}>
              <h4 className="text-[13px] font-bold text-muted-foreground uppercase tracking-widest mb-3">Key Actions</h4>
              <div className="space-y-2">
                {p.actions.map((a, ai) => (
                  <div key={ai} className="flex items-center gap-3 p-3.5 rounded-xl bg-card border border-border/30 hover:border-primary/20 hover:shadow-md transition-all duration-300 opacity-0 animate-fade-in"
                    style={{ animationDelay: `${0.2 + ai * 0.06}s`, animationFillMode: "forwards" }}
                  >
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary text-[14px] font-bold flex items-center justify-center shrink-0">
                      {ai + 1}
                    </span>
                    <span className="text-[16px] text-foreground">{a}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 p-4 rounded-2xl bg-primary/[0.05] border border-primary/20 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <span className="text-[13px] font-bold text-primary uppercase tracking-wider">✓ Target Outcome</span>
              <p className="text-[18px] text-foreground mt-2 font-semibold">{p.outcomes}</p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide13GTM;
