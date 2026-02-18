import SlideLayout from "../SlideLayout";
import { DollarSign, TrendingUp } from "lucide-react";

const earlyStage = [
  { service: "Core SaaS", price: "$500–$2K/mo", desc: "Platform access" },
  { service: "Enterprise Subscriptions", price: "$5K–$25K/mo", desc: "Full-stack features" },
  { service: "Compliance Module", price: "$1K–$5K/mo", desc: "ESG & regulatory" },
  { service: "Consulting", price: "$200–$500/hr", desc: "Advisory services" },
];

const growthStage = [
  { service: "Project Execution", price: "2–5% of value", desc: "Management fees" },
  { service: "Marketplace", price: "1–3% per txn", desc: "Trading commissions" },
  { service: "VoltIQ Premium", price: "$10K–$50K/yr", desc: "AI intelligence" },
  { service: "Community Capital", price: "1–2% AUM", desc: "Investment facilitation" },
];

const Slide12Pricing = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-14">
      <div className="flex items-center gap-4 mb-2 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
        <div className="section-line" />
        <h2 className="text-[44px] font-extrabold text-foreground leading-none">
          Pricing <span className="gradient-text">Model</span>
        </h2>
      </div>
      <p className="text-[20px] text-muted-foreground mb-8 ml-[60px] opacity-0 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
        Land-and-expand strategy with multiple revenue lines
      </p>

      <div className="grid grid-cols-2 gap-8 flex-1 mb-6">
        {/* Early Stage */}
        <div className="rounded-2xl border border-border/40 bg-card p-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-[24px] font-extrabold text-primary">Early-Stage Revenue</h3>
          </div>
          <div className="space-y-1">
            {earlyStage.map((r) => (
              <div key={r.service} className="flex justify-between items-center py-4 border-b border-border/30 last:border-0 hover:bg-primary/[0.02] transition-colors rounded-lg px-2">
                <div>
                  <div className="text-[17px] font-semibold text-foreground">{r.service}</div>
                  <div className="text-[13px] text-muted-foreground">{r.desc}</div>
                </div>
                <div className="text-[17px] font-bold text-primary shrink-0">{r.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Growth Stage */}
        <div className="rounded-2xl border border-border/40 bg-card p-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-eco-teal/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-eco-teal" />
            </div>
            <h3 className="text-[24px] font-extrabold text-eco-teal">Growth-Stage Revenue</h3>
          </div>
          <div className="space-y-1">
            {growthStage.map((r) => (
              <div key={r.service} className="flex justify-between items-center py-4 border-b border-border/30 last:border-0 hover:bg-eco-teal/[0.02] transition-colors rounded-lg px-2">
                <div>
                  <div className="text-[17px] font-semibold text-foreground">{r.service}</div>
                  <div className="text-[13px] text-muted-foreground">{r.desc}</div>
                </div>
                <div className="text-[17px] font-bold text-eco-teal shrink-0">{r.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Unit economics */}
      <div className="rounded-2xl bg-gradient-to-r from-primary/5 to-eco-teal/5 border border-primary/20 p-7 flex justify-between items-center opacity-0 animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
        {[
          { label: "Blended Margins", value: "75–85%" },
          { label: "ACV Range", value: "$10K–$300K" },
          { label: "LTV:CAC", value: "8:1" },
          { label: "Payback Period", value: "6 months" },
        ].map((m) => (
          <div key={m.label} className="text-center">
            <div className="text-[28px] font-extrabold gradient-text">{m.value}</div>
            <div className="text-[14px] text-muted-foreground font-medium">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default Slide12Pricing;
