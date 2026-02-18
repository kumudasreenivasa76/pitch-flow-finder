import SlideLayout from "../SlideLayout";

const stakeholders = [
  { name: "Landowners", revenue: "$12K", margin: "85%", ltv: "$180K", ltvCac: "12:1", color: "border-primary", bg: "from-primary/5 to-primary/[0.02]" },
  { name: "Vendors", revenue: "$48K", margin: "35%", ltv: "$340K", ltvCac: "8:1", color: "border-eco-teal", bg: "from-eco-teal/5 to-eco-teal/[0.02]" },
  { name: "Enterprises", revenue: "$120K", margin: "80%", ltv: "$960K", ltvCac: "10:1", color: "border-eco-emerald", bg: "from-eco-emerald/5 to-eco-emerald/[0.02]" },
  { name: "Consumers", revenue: "$2.4K", margin: "90%", ltv: "$24K", ltvCac: "15:1", color: "border-primary", bg: "from-primary/5 to-primary/[0.02]" },
];

const Slide16UnitEcon = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-14">
      <div className="flex items-center gap-4 mb-2 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
        <div className="section-line" />
        <h2 className="text-[44px] font-extrabold text-foreground leading-none">
          Unit Economics by <span className="gradient-text">Stakeholder</span>
        </h2>
      </div>
      <p className="text-[20px] text-muted-foreground mb-8 ml-[60px] opacity-0 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
        Strong economics across every customer segment
      </p>

      <div className="grid grid-cols-4 gap-5 flex-1 mb-6">
        {stakeholders.map((s, i) => (
          <div
            key={i}
            className={`bg-gradient-to-b ${s.bg} rounded-2xl border-2 ${s.color} p-7 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-in`}
            style={{ animationDelay: `${0.1 + i * 0.08}s`, animationFillMode: "forwards" }}
          >
            <h3 className="text-[22px] font-extrabold text-foreground mb-6">{s.name}</h3>
            {[
              { label: "Revenue / yr", value: s.revenue },
              { label: "Margin", value: s.margin },
              { label: "LTV", value: s.ltv },
              { label: "LTV:CAC", value: s.ltvCac },
            ].map((m) => (
              <div key={m.label} className="mb-5">
                <div className="text-[12px] text-muted-foreground uppercase tracking-wider font-medium">{m.label}</div>
                <div className="text-[28px] font-extrabold text-foreground">{m.value}</div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Platform summary */}
      <div className="rounded-2xl bg-gradient-to-r from-primary/5 to-eco-teal/5 border border-primary/20 p-7 flex justify-between items-center opacity-0 animate-fade-in" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
        {[
          { label: "Blended Margin", value: "78%" },
          { label: "Avg ACV", value: "$45K" },
          { label: "NRR", value: "135%" },
          { label: "Payback", value: "< 6 months" },
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

export default Slide16UnitEcon;
