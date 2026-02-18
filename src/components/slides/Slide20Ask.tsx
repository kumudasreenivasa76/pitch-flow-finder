import SlideLayout from "../SlideLayout";
import { Zap, Mail, Globe, ArrowRight } from "lucide-react";

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
    <div className="flex flex-col h-full px-20 py-14">
      <div className="flex items-center gap-4 mb-2 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
        <div className="section-line" />
        <h2 className="text-[44px] font-extrabold text-foreground leading-none">
          The Ask: <span className="gradient-text">$2M Pre-Seed</span>
        </h2>
      </div>
      <p className="text-[20px] text-muted-foreground mb-8 ml-[60px] opacity-0 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
        18-month runway to Series A readiness
      </p>

      <div className="grid grid-cols-2 gap-8 flex-1 mb-6">
        {/* Milestones */}
        <div className="rounded-2xl border border-border/40 bg-card p-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}>
          <h3 className="text-[20px] font-extrabold text-foreground mb-5">18-Month Milestones</h3>
          <div className="space-y-3">
            {milestones.map((m, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-xl bg-background/60 border border-border/20 hover:border-primary/20 hover:shadow-sm transition-all opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.2 + i * 0.04}s`, animationFillMode: "forwards" }}
              >
                <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-[12px] font-bold shrink-0">{i + 1}</div>
                <span className="text-[15px] text-foreground">{m}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Use of Funds */}
        <div className="rounded-2xl border border-border/40 bg-card p-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          <h3 className="text-[20px] font-extrabold text-foreground mb-5">Use of Funds</h3>
          <div className="space-y-5">
            {funds.map((f) => (
              <div key={f.label}>
                <div className="flex justify-between mb-2">
                  <span className="text-[15px] text-foreground font-medium">{f.label}</span>
                  <span className="text-[15px] font-bold text-foreground">{f.pct}%</span>
                </div>
                <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                  <div className={`h-full ${f.color} rounded-full transition-all duration-700`} style={{ width: `${f.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Closing CTA */}
      <div className="text-center py-8 rounded-2xl bg-gradient-to-r from-primary/5 via-eco-teal/5 to-eco-emerald/5 border border-primary/20 opacity-0 animate-fade-in" style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}>
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
            <Zap className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-[36px] font-extrabold text-foreground">EcoGridia</span>
        </div>
        <p className="text-[20px] text-muted-foreground italic max-w-3xl mx-auto mb-5">
          "The SaaS platform for how humanity owns, verifies, and pays for clean energy."
        </p>
        <div className="flex items-center justify-center gap-8 text-[16px] text-muted-foreground">
          <span className="flex items-center gap-2"><Mail className="w-5 h-5 text-primary" /> team@ecogrida.com</span>
          <span className="flex items-center gap-2"><Globe className="w-5 h-5 text-primary" /> ecogrida.com</span>
          <span className="flex items-center gap-2 text-primary font-semibold cursor-pointer hover:underline">
            Explore the Deck <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide20Ask;
