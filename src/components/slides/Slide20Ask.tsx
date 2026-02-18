import SlideLayout from "../SlideLayout";
import { Zap, Mail, Globe } from "lucide-react";

const milestones = [
  "Launch enterprise product (v2.0)",
  "10 active enterprise customers",
  "50+ sites under management",
  "$2M ARR milestone",
  "Series A readiness",
  "3 country expansion",
  "Government pilot contract",
  "Community platform launch",
];

const funds = [
  { label: "Product & Engineering", pct: 45, color: "bg-primary" },
  { label: "Sales & GTM", pct: 25, color: "bg-eco-teal" },
  { label: "Operations", pct: 15, color: "bg-eco-emerald" },
  { label: "Legal & Compliance", pct: 10, color: "bg-muted-foreground" },
  { label: "Reserve", pct: 5, color: "bg-primary/30" },
];

const Slide20Ask = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-16">
      <h2 className="text-5xl font-bold text-foreground mb-2 animate-fade-in">
        The Ask: <span className="text-primary">$2M Pre-Seed</span>
      </h2>
      <p className="text-2xl text-muted-foreground mb-10">18-month runway to Series A readiness.</p>

      <div className="grid grid-cols-2 gap-10 flex-1 mb-8">
        {/* Milestones */}
        <div className="bg-card rounded-2xl border border-border p-10 animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-6">18-Month Milestones</h3>
          <div className="space-y-4">
            {milestones.map((m, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</div>
                <span className="text-xl text-foreground">{m}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Use of Funds */}
        <div className="bg-card rounded-2xl border border-border p-10 animate-fade-in" style={{ animationDelay: "0.15s" }}>
          <h3 className="text-2xl font-bold text-foreground mb-6">Use of Funds</h3>
          <div className="space-y-6">
            {funds.map((f) => (
              <div key={f.label}>
                <div className="flex justify-between mb-2">
                  <span className="text-xl text-foreground">{f.label}</span>
                  <span className="text-xl font-bold text-foreground">{f.pct}%</span>
                </div>
                <div className="w-full h-4 bg-muted rounded-full overflow-hidden">
                  <div className={`h-full ${f.color} rounded-full transition-all`} style={{ width: `${f.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Closing */}
      <div className="text-center py-8 bg-primary/5 rounded-2xl animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <div className="flex items-center justify-center gap-3 mb-4">
          <Zap className="w-10 h-10 text-primary" />
          <span className="text-4xl font-bold text-foreground">EcoGridia</span>
        </div>
        <p className="text-2xl text-muted-foreground italic max-w-4xl mx-auto mb-6">
          "The SaaS platform for how humanity owns, verifies, and pays for clean energy."
        </p>
        <div className="flex items-center justify-center gap-8 text-xl text-muted-foreground">
          <span className="flex items-center gap-2"><Mail className="w-5 h-5 text-primary" /> team@ecogrida.com</span>
          <span className="flex items-center gap-2"><Globe className="w-5 h-5 text-primary" /> ecogrida.com</span>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide20Ask;
