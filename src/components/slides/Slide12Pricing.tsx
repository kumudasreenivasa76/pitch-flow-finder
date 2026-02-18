import SlideLayout from "../SlideLayout";

const earlyStage = [
  { service: "Core SaaS", price: "$500–$2K/mo", desc: "Platform access" },
  { service: "Enterprise Subscriptions", price: "$5K–$25K/mo", desc: "Full-stack features" },
  { service: "Compliance Module", price: "$1K–$5K/mo", desc: "ESG & regulatory" },
  { service: "Consulting", price: "$200–$500/hr", desc: "Advisory services" },
];

const growthStage = [
  { service: "Project Execution", price: "2–5% of project value", desc: "Management fees" },
  { service: "Marketplace", price: "1–3% per transaction", desc: "Trading commissions" },
  { service: "VoltIQ Premium", price: "$10K–$50K/yr", desc: "AI intelligence" },
  { service: "Community Capital", price: "1–2% AUM", desc: "Investment facilitation" },
];

const Slide12Pricing = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-16">
      <h2 className="text-5xl font-bold text-foreground mb-2 animate-fade-in">
        Pricing <span className="text-primary">Model</span>
      </h2>
      <p className="text-2xl text-muted-foreground mb-10">Land-and-expand strategy with multiple revenue lines.</p>

      <div className="grid grid-cols-2 gap-8 flex-1 mb-8">
        {/* Early Stage */}
        <div className="bg-card rounded-2xl border border-border p-8 animate-fade-in">
          <h3 className="text-2xl font-bold text-primary mb-6">Early-Stage Revenue</h3>
          <div className="space-y-4">
            {earlyStage.map((r) => (
              <div key={r.service} className="flex justify-between items-center py-4 border-b border-border last:border-0">
                <div>
                  <div className="text-xl font-semibold text-foreground">{r.service}</div>
                  <div className="text-base text-muted-foreground">{r.desc}</div>
                </div>
                <div className="text-xl font-bold text-primary">{r.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Growth Stage */}
        <div className="bg-card rounded-2xl border border-border p-8 animate-fade-in" style={{ animationDelay: "0.15s" }}>
          <h3 className="text-2xl font-bold text-eco-teal mb-6">Growth-Stage Revenue</h3>
          <div className="space-y-4">
            {growthStage.map((r) => (
              <div key={r.service} className="flex justify-between items-center py-4 border-b border-border last:border-0">
                <div>
                  <div className="text-xl font-semibold text-foreground">{r.service}</div>
                  <div className="text-base text-muted-foreground">{r.desc}</div>
                </div>
                <div className="text-xl font-bold text-eco-teal">{r.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Unit economics */}
      <div className="bg-primary/5 rounded-2xl p-8 flex justify-between items-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
        {[
          { label: "Blended Margins", value: "75–85%" },
          { label: "ACV Range", value: "$10K–$300K" },
          { label: "LTV:CAC", value: "8:1" },
          { label: "Payback Period", value: "6 months" },
        ].map((m) => (
          <div key={m.label} className="text-center">
            <div className="text-3xl font-bold text-primary">{m.value}</div>
            <div className="text-lg text-muted-foreground">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default Slide12Pricing;
