import SlideLayout from "../SlideLayout";

const phases = [
  {
    phase: "Phase 1",
    title: "Supply Lock-In",
    timeline: "Months 1–6",
    color: "bg-primary",
    goals: "Secure initial supply-side partners",
    actions: ["Onboard 50+ landowners", "Sign 10 vendor partners", "Launch 3 pilot sites"],
    outcomes: "Foundation of verified supply assets",
  },
  {
    phase: "Phase 2",
    title: "Demand Activation",
    timeline: "Months 6–12",
    color: "bg-eco-teal",
    goals: "Activate enterprise demand channels",
    actions: ["Launch enterprise portal", "First PPA executions", "Compliance module live"],
    outcomes: "$500K ARR milestone",
  },
  {
    phase: "Phase 3",
    title: "Community Flywheel",
    timeline: "Months 12–18",
    color: "bg-eco-emerald",
    goals: "Enable community participation at scale",
    actions: ["Shared project marketplace", "Micro-investment platform", "School partnerships"],
    outcomes: "10x user base growth",
  },
  {
    phase: "Phase 4",
    title: "Government & Infra",
    timeline: "Months 18–24",
    color: "bg-foreground",
    goals: "Government contracts and infrastructure deals",
    actions: ["Government RFP wins", "Utility partnerships", "Multi-country expansion"],
    outcomes: "$5M+ ARR run rate",
  },
];

const Slide13GTM = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-16">
      <h2 className="text-5xl font-bold text-foreground mb-2 animate-fade-in">
        Go-To-Market <span className="text-primary">Roadmap</span>
      </h2>
      <p className="text-2xl text-muted-foreground mb-10">Four phases to market dominance.</p>

      {/* Timeline bar */}
      <div className="flex gap-2 mb-10">
        {phases.map((p, i) => (
          <div key={i} className={`flex-1 h-3 rounded-full ${p.color} animate-fade-in`} style={{ animationDelay: `${i * 0.1}s`, opacity: 1 - i * 0.15 }} />
        ))}
      </div>

      <div className="grid grid-cols-4 gap-6 flex-1">
        {phases.map((p, i) => (
          <div key={i} className="bg-card rounded-2xl border border-border p-8 flex flex-col animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className={`text-sm font-bold text-primary-foreground ${p.color} px-3 py-1 rounded-full w-fit mb-3`}>{p.phase}</div>
            <h3 className="text-2xl font-bold text-foreground mb-1">{p.title}</h3>
            <div className="text-base text-muted-foreground mb-4">{p.timeline}</div>
            <div className="text-base text-primary font-semibold mb-3">{p.goals}</div>
            <ul className="space-y-2 mb-auto">
              {p.actions.map((a, j) => (
                <li key={j} className="flex items-center gap-2 text-lg text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-border">
              <div className="text-sm text-muted-foreground uppercase">Outcome</div>
              <div className="text-lg font-semibold text-foreground">{p.outcomes}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default Slide13GTM;
