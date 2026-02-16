import SlideLayout from "../SlideLayout";

const stakeholders = [
  { name: "Landowners", revenue: "$12K", margin: "85%", ltv: "$180K", ltvCac: "12:1", color: "border-primary" },
  { name: "Vendors", revenue: "$48K", margin: "35%", ltv: "$340K", ltvCac: "8:1", color: "border-eco-teal" },
  { name: "Enterprises", revenue: "$120K", margin: "80%", ltv: "$960K", ltvCac: "10:1", color: "border-eco-emerald" },
  { name: "Consumers", revenue: "$2.4K", margin: "90%", ltv: "$24K", ltvCac: "15:1", color: "border-primary" },
];

const Slide16UnitEcon = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-16">
      <h2 className="text-5xl font-bold text-foreground mb-2 animate-fade-in">
        Unit Economics by <span className="text-primary">Stakeholder</span>
      </h2>
      <p className="text-2xl text-muted-foreground mb-10">Strong economics across every customer segment.</p>

      <div className="grid grid-cols-4 gap-6 flex-1 mb-8">
        {stakeholders.map((s, i) => (
          <div key={i} className={`bg-card rounded-2xl border-2 ${s.color} p-8 flex flex-col animate-fade-in`} style={{ animationDelay: `${i * 0.1}s` }}>
            <h3 className="text-2xl font-bold text-foreground mb-8">{s.name}</h3>
            {[
              { label: "Revenue / yr", value: s.revenue },
              { label: "Margin", value: s.margin },
              { label: "LTV", value: s.ltv },
              { label: "LTV:CAC", value: s.ltvCac },
            ].map((m) => (
              <div key={m.label} className="mb-6">
                <div className="text-base text-muted-foreground">{m.label}</div>
                <div className="text-3xl font-bold text-foreground">{m.value}</div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Platform summary */}
      <div className="bg-primary/5 rounded-2xl p-8 flex justify-between items-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
        {[
          { label: "Blended Margin", value: "78%" },
          { label: "Avg ACV", value: "$45K" },
          { label: "Net Revenue Retention", value: "135%" },
          { label: "Payback", value: "< 6 months" },
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

export default Slide16UnitEcon;
