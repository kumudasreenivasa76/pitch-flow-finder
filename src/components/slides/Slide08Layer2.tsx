import SlideLayout from "../SlideLayout";
import { useState } from "react";

const stakeholderViews = [
  {
    tab: "Enterprises",
    features: [
      { num: "1", title: "Carbon Dashboard", bullets: ["Real-time Scope 1/2/3 tracking", "Automated offset purchasing", "Board-ready ESG reports"] },
      { num: "2", title: "Procurement Portal", bullets: ["Direct PPA negotiations", "Multi-site energy sourcing", "Price lock guarantees"] },
    ],
  },
  {
    tab: "Schools",
    features: [
      { num: "3", title: "Education Dashboard", bullets: ["Student engagement modules", "Real-time energy savings display", "Curriculum integration tools"] },
      { num: "4", title: "Community Solar", bullets: ["Shared solar subscriptions", "Bill credit management", "Parent & alumni participation"] },
    ],
  },
  {
    tab: "Consulting",
    features: [
      { num: "5", title: "Advisory Tools", bullets: ["Client portfolio management", "Scenario modeling engine", "White-label reporting"] },
      { num: "6", title: "Market Intelligence", bullets: ["Regional pricing trends", "Policy change alerts", "Competitive landscape data"] },
    ],
  },
  {
    tab: "Regulators",
    features: [
      { num: "7", title: "Compliance Monitoring", bullets: ["Automated REC verification", "Grid interconnection tracking", "Real-time policy compliance"] },
      { num: "8", title: "Public Dashboard", bullets: ["Transparent energy mix data", "Community impact metrics", "Permitting pipeline visibility"] },
    ],
  },
];

const Slide08Layer2 = () => {
  const [active, setActive] = useState(0);

  return (
    <SlideLayout>
      <div className="flex flex-col h-full px-20 py-16">
        <div className="flex items-center gap-4 mb-2 animate-fade-in">
          <span className="text-lg font-bold text-primary-foreground bg-eco-teal px-4 py-1 rounded-full">Layer 2</span>
          <h2 className="text-5xl font-bold text-foreground">Green Intelligence & Market</h2>
        </div>
        <p className="text-2xl text-muted-foreground mb-8">Tailored intelligence for every stakeholder.</p>

        {/* Tabs */}
        <div className="flex gap-3 mb-8">
          {stakeholderViews.map((v, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-8 py-3 rounded-xl text-xl font-medium transition-all ${
                active === i ? "bg-eco-teal text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {v.tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-2 gap-8 flex-1 animate-fade-in" key={active}>
          {stakeholderViews[active].features.map((f) => (
            <div key={f.num} className="rounded-2xl border border-border bg-card p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-eco-teal/30">{f.num}</span>
                <h3 className="text-2xl font-semibold text-foreground">{f.title}</h3>
              </div>
              <ul className="space-y-3">
                {f.bullets.map((b, j) => (
                  <li key={j} className="flex items-center gap-3 text-xl text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-eco-teal shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide08Layer2;
