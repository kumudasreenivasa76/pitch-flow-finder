import SlideLayout from "../SlideLayout";
import { Wrench, Brain, ShoppingCart } from "lucide-react";

const layers = [
  {
    icon: Wrench,
    layer: "L1",
    title: "Infrastructure Execution",
    color: "bg-primary",
    desc: "Digitize, monitor, and manage distributed clean energy assets end-to-end.",
    users: "Landowners, Vendors, Site Managers",
    value: "Automated project lifecycle from land assessment to energy production",
  },
  {
    icon: Brain,
    layer: "L2",
    title: "Intelligence & Compliance",
    color: "bg-eco-teal",
    desc: "AI-powered analytics, forecasting, ESG reporting, and regulatory compliance.",
    users: "Enterprises, Schools, Consultants, Regulators",
    value: "Real-time insights and automated compliance across jurisdictions",
  },
  {
    icon: ShoppingCart,
    layer: "L3",
    title: "Market & Monetization",
    color: "bg-eco-emerald",
    desc: "Marketplace for energy units, settlement, and community participation.",
    users: "Consumers, Investors, Communities, Institutions",
    value: "Liquid market for verified clean energy units with instant settlement",
  },
];

const Slide05Platform = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-16">
      <h2 className="text-5xl font-bold text-foreground mb-2 animate-fade-in">
        Three-Layer <span className="text-primary">Platform</span>
      </h2>
      <p className="text-2xl text-muted-foreground mb-12">Full-stack infrastructure for the clean energy economy.</p>

      <div className="flex flex-col gap-6 flex-1">
        {layers.map((l, i) => (
          <div
            key={l.layer}
            className="flex-1 rounded-2xl border border-border bg-card p-10 flex gap-10 items-center hover:shadow-xl transition-all animate-fade-in"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className={`w-24 h-24 ${l.color} rounded-2xl flex items-center justify-center shrink-0`}>
              <l.icon className="w-12 h-12 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-lg font-bold text-primary bg-primary/10 px-4 py-1 rounded-full">{l.layer}</span>
                <h3 className="text-3xl font-bold text-foreground">{l.title}</h3>
              </div>
              <p className="text-xl text-muted-foreground mb-3">{l.desc}</p>
              <div className="flex gap-8">
                <div>
                  <span className="text-sm font-semibold text-primary uppercase">Target Users</span>
                  <p className="text-lg text-foreground">{l.users}</p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-primary uppercase">Value</span>
                  <p className="text-lg text-foreground">{l.value}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default Slide05Platform;
