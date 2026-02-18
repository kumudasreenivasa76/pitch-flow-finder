import SlideLayout from "../SlideLayout";
import { useState } from "react";
import { Building2, GraduationCap, Briefcase, Landmark, ChevronRight } from "lucide-react";

const stakeholderViews = [
  {
    tab: "Enterprises",
    icon: Building2,
    features: [
      { num: "1", title: "Carbon Dashboard", bullets: ["Real-time Scope 1/2/3 tracking", "Automated offset purchasing", "Board-ready ESG reports"] },
      { num: "2", title: "Procurement Portal", bullets: ["Direct PPA negotiations", "Multi-site energy sourcing", "Price lock guarantees"] },
    ],
  },
  {
    tab: "Schools",
    icon: GraduationCap,
    features: [
      { num: "3", title: "Education Dashboard", bullets: ["Student engagement modules", "Real-time energy savings display", "Curriculum integration tools"] },
      { num: "4", title: "Community Solar", bullets: ["Shared solar subscriptions", "Bill credit management", "Parent & alumni participation"] },
    ],
  },
  {
    tab: "Consulting",
    icon: Briefcase,
    features: [
      { num: "5", title: "Advisory Tools", bullets: ["Client portfolio management", "Scenario modeling engine", "White-label reporting"] },
      { num: "6", title: "Market Intelligence", bullets: ["Regional pricing trends", "Policy change alerts", "Competitive landscape data"] },
    ],
  },
  {
    tab: "Regulators",
    icon: Landmark,
    features: [
      { num: "7", title: "Compliance Monitoring", bullets: ["Automated REC verification", "Grid interconnection tracking", "Real-time policy compliance"] },
      { num: "8", title: "Public Dashboard", bullets: ["Transparent energy mix data", "Community impact metrics", "Permitting pipeline visibility"] },
    ],
  },
];

const Slide08Layer2 = () => {
  const [active, setActive] = useState(0);
  const view = stakeholderViews[active];

  return (
    <SlideLayout>
      <div className="flex h-full">
        {/* Left sidebar */}
        <div className="w-[420px] shrink-0 flex flex-col bg-card/40 border-r border-border/30">
          <div className="px-8 pt-8 pb-5 shrink-0 border-b border-border/20">
            <div className="flex items-center gap-4 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
              <div className="w-14 h-14 rounded-2xl bg-eco-teal/10 flex items-center justify-center">
                <Building2 className="w-7 h-7 text-eco-teal" />
              </div>
              <div>
                <span className="text-sm font-bold text-primary-foreground bg-eco-teal px-3 py-1 rounded-full">Layer 2</span>
                <h2 className="text-[32px] font-extrabold text-foreground leading-none mt-1">
                  Stakeholder <span className="text-eco-teal">Views</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center gap-2 px-5 py-4">
            {stakeholderViews.map((v, i) => {
              const VIcon = v.icon;
              const isActive = active === i;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-4 px-5 py-5 rounded-2xl text-left transition-all duration-300 opacity-0 animate-fade-in ${
                    isActive
                      ? "bg-eco-teal/10 border-2 border-eco-teal/30 shadow-lg"
                      : "bg-transparent border-2 border-transparent hover:bg-card hover:border-border/30"
                  }`}
                  style={{ animationDelay: `${0.08 + i * 0.06}s`, animationFillMode: "forwards" }}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isActive ? "bg-eco-teal text-primary-foreground shadow-md" : "bg-secondary text-muted-foreground"
                  }`}>
                    <VIcon className="w-6 h-6" />
                  </div>
                  <span className={`text-[18px] font-bold transition-colors ${isActive ? "text-eco-teal" : "text-foreground"}`}>
                    {v.tab}
                  </span>
                  <ChevronRight className={`w-5 h-5 shrink-0 ml-auto transition-all duration-300 ${isActive ? "text-eco-teal translate-x-1" : "text-muted-foreground/40"}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right detail */}
        <div className="flex-1 flex items-center justify-center px-12 overflow-hidden" key={active}>
          <div className="w-full max-w-[1100px]">
            <div className="animate-fade-in mb-8">
              <span className="text-[13px] text-muted-foreground font-mono">Tailored for {view.tab}</span>
              <h3 className="text-[30px] font-extrabold text-foreground">{view.tab} Intelligence Suite</h3>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {view.features.map((f, fi) => (
                <div
                  key={f.num}
                  className="rounded-2xl border border-border/40 bg-card p-8 opacity-0 animate-fade-in hover:border-eco-teal/30 hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${0.1 + fi * 0.1}s`, animationFillMode: "forwards" }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-10 h-10 rounded-xl bg-eco-teal/10 text-eco-teal flex items-center justify-center text-[18px] font-bold">{f.num}</span>
                    <h3 className="text-[22px] font-bold text-foreground">{f.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {f.bullets.map((b, j) => (
                      <li key={j} className="flex items-center gap-3 text-[16px] text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-eco-teal shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide08Layer2;
