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
      <div className="relative w-full h-full flex flex-col bg-white overflow-hidden px-14 py-8">
        {/* Grid background */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
            backgroundSize: "60px 60px", opacity: 0.5,
          }}
        />

        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="text-center mb-5 animate-fade-in">
            <span className="inline-block px-5 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-[14px] font-bold tracking-widest uppercase mb-3">
              Layer 2
            </span>
            <h2 className="text-[44px] font-extrabold text-foreground leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Green Intelligence & <span className="text-eco-teal">Market</span>
            </h2>
            <p className="text-[16px] text-muted-foreground mt-1">Tailored intelligence for every stakeholder.</p>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-5 justify-center">
            {stakeholderViews.map((v, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`px-6 py-2.5 rounded-full text-[14px] font-semibold border-2 transition-all duration-300 ${
                  active === i
                    ? "bg-eco-teal text-primary-foreground border-eco-teal shadow-lg"
                    : "bg-white text-foreground border-border/40 hover:border-eco-teal/40"
                }`}
              >
                {v.tab}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="grid grid-cols-2 gap-5 flex-1 animate-fade-in" key={active}>
            {stakeholderViews[active].features.map((f) => (
              <div key={f.num} className="rounded-2xl border-2 border-border/40 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[24px] font-bold text-eco-teal/30">{f.num}</span>
                  <h3 className="text-[20px] font-extrabold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{f.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {f.bullets.map((b, j) => (
                    <li key={j} className="flex items-center gap-3 text-[15px] text-muted-foreground">
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
    </SlideLayout>
  );
};

export default Slide08Layer2;
