import SlideLayout from "../SlideLayout";
import { useState } from "react";
import { AlertTriangle, TrendingDown, Lock, FileX, Users, Layers } from "lucide-react";

const problems = [
  { icon: AlertTriangle, title: "Unused Capacity", short: "Solar & wind assets sit idle", detail: "Over 40% of installed renewable capacity goes underutilized due to poor grid integration, lack of storage, and no real-time demand matching." },
  { icon: TrendingDown, title: "Unpredictable Demand", short: "No forecasting infrastructure", detail: "Energy producers have no AI-driven tools to predict demand patterns, leading to massive waste and revenue loss across distributed assets." },
  { icon: Lock, title: "No Real Access", short: "Communities locked out", detail: "4B+ people globally have no practical access to clean energy markets. Existing platforms serve only large utilities and corporations." },
  { icon: FileX, title: "Broken Reporting", short: "Manual, fragmented compliance", detail: "ESG and carbon reporting is done manually across spreadsheets, creating audit risks, delays, and unreliable data for stakeholders." },
  { icon: Users, title: "Locked Out", short: "Small players can't participate", detail: "Landowners, schools, and small businesses lack the tools and capital access to participate in clean energy projects meaningfully." },
  { icon: Layers, title: "No Unified System", short: "Fragmented tooling everywhere", detail: "The industry runs on disconnected software — one tool for monitoring, another for compliance, another for billing. No single platform exists." },
];

const Slide02Problem = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <SlideLayout>
      <div className="flex flex-col h-full px-20 py-16">
        <h2 className="text-5xl font-bold text-foreground mb-2 animate-fade-in">
          The Clean Energy Transition Is <span className="text-destructive">Broken</span>
        </h2>
        <p className="text-2xl text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          A $3T+ market held back by fragmentation, exclusion, and outdated infrastructure.
        </p>

        <div className="grid grid-cols-3 gap-6 flex-1 mb-12">
          {problems.map((p, i) => (
            <button
              key={i}
              onClick={() => setExpanded(expanded === i ? null : i)}
              className={`text-left rounded-2xl border p-8 transition-all duration-300 hover:shadow-lg ${
                expanded === i ? "bg-primary/5 border-primary shadow-lg" : "bg-card border-border hover:border-primary/30"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <p.icon className={`w-10 h-10 mb-4 ${expanded === i ? "text-primary" : "text-muted-foreground"}`} />
              <h3 className="text-2xl font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-lg text-muted-foreground">{p.short}</p>
              {expanded === i && (
                <p className="mt-4 text-lg text-foreground/80 leading-relaxed animate-fade-in">{p.detail}</p>
              )}
            </button>
          ))}
        </div>

        {/* Stats banner */}
        <div className="flex justify-center gap-16 py-6 bg-primary/5 rounded-2xl animate-fade-in" style={{ animationDelay: "0.5s" }}>
          {[
            { value: "$3T+", label: "Global Market" },
            { value: "100M+", label: "Rooftops Untapped" },
            { value: "4B+", label: "People Excluded" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-bold text-primary">{s.value}</div>
              <div className="text-lg text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide02Problem;
