import SlideLayout from "../SlideLayout";
import { TrendingUp, RefreshCw, Shield, Globe } from "lucide-react";

const highlights = [
  { icon: TrendingUp, value: "80%+", label: "Gross Margins" },
  { icon: RefreshCw, value: "Recurring", label: "Revenue Model" },
  { icon: Shield, value: "Zero", label: "Hardware Risk" },
  { icon: Globe, value: "Global", label: "Market Reach" },
];

const streams = [
  { name: "Core SaaS Subscriptions", margin: "90%", desc: "Platform access fees for all stakeholders" },
  { name: "Project Execution Fees", margin: "35%", desc: "Per-project management and oversight" },
  { name: "Marketplace Commissions", margin: "85%", desc: "Transaction fees on energy unit trades" },
  { name: "VoltIQ Intelligence", margin: "92%", desc: "Premium AI analytics and forecasting" },
  { name: "Compliance Services", margin: "80%", desc: "Automated ESG and regulatory reporting" },
  { name: "Consulting Revenue", margin: "60%", desc: "Advisory services for enterprise clients" },
  { name: "Community Capital", margin: "15%", desc: "Investment facilitation and management" },
  { name: "Data & Insights", margin: "95%", desc: "Market data, benchmarks, and research" },
];

const Slide11Business = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-16">
      <h2 className="text-5xl font-bold text-foreground mb-2 animate-fade-in">
        Business Model: <span className="text-primary">High-Margin, Recurring, Global</span>
      </h2>
      <p className="text-2xl text-muted-foreground mb-8">Software-first economics with zero hardware risk.</p>

      {/* Highlights */}
      <div className="grid grid-cols-4 gap-6 mb-10">
        {highlights.map((h, i) => (
          <div key={i} className="bg-primary/5 rounded-2xl p-6 text-center border border-primary/20 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
            <h.icon className="w-10 h-10 text-primary mx-auto mb-3" />
            <div className="text-4xl font-bold text-primary">{h.value}</div>
            <div className="text-lg text-muted-foreground">{h.label}</div>
          </div>
        ))}
      </div>

      {/* Revenue streams */}
      <div className="grid grid-cols-4 gap-4 flex-1">
        {streams.map((s, i) => (
          <div key={i} className="bg-card rounded-xl border border-border p-6 hover:border-primary/40 transition-all animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
            <div className="text-2xl font-bold text-primary mb-1">{s.margin}</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{s.name}</h3>
            <p className="text-base text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default Slide11Business;
