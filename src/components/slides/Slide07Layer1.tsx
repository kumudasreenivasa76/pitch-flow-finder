import SlideLayout from "../SlideLayout";

const capabilities = [
  { num: "1", title: "Site Assessment & Planning", desc: "AI-powered land analysis, solar/wind potential mapping, and financial modeling for any location globally." },
  { num: "2", title: "Permitting & Compliance", desc: "Automated permit applications, regulatory tracking, and compliance documentation across jurisdictions." },
  { num: "3", title: "Vendor Management", desc: "Qualified vendor marketplace with performance tracking, SLA management, and automated procurement." },
  { num: "4", title: "Installation Tracking", desc: "Real-time project tracking from ground-breaking to commissioning with milestone-based payments." },
  { num: "5", title: "Asset Monitoring", desc: "24/7 IoT-enabled monitoring with anomaly detection, predictive maintenance, and performance optimization." },
  { num: "6", title: "Energy Production", desc: "Real-time energy output tracking, grid feed-in management, and production forecasting." },
  { num: "7", title: "Financial Management", desc: "Automated billing, revenue sharing, tax credit tracking, and investor reporting." },
];

const Slide07Layer1 = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-16">
      <div className="flex items-center gap-4 mb-2 animate-fade-in">
        <span className="text-lg font-bold text-primary-foreground bg-primary px-4 py-1 rounded-full">Layer 1</span>
        <h2 className="text-5xl font-bold text-foreground">Green Infrastructure SaaS</h2>
      </div>
      <p className="text-2xl text-muted-foreground mb-10">The execution layer — from land to energy.</p>

      <div className="grid grid-cols-2 gap-5 flex-1">
        {capabilities.map((c, i) => (
          <div
            key={i}
            className="rounded-xl border border-border bg-card p-8 hover:border-primary/40 hover:shadow-lg transition-all animate-fade-in"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="flex items-start gap-4">
              <span className="text-4xl font-bold text-primary/20">{c.num}</span>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">{c.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default Slide07Layer1;
