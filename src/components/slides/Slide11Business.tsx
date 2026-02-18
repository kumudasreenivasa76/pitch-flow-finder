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
    <div className="flex flex-col h-full px-20 py-14">
      {/* Header */}
      <div className="flex items-center gap-4 mb-2 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
        <div className="section-line" />
        <h2 className="text-[44px] font-extrabold text-foreground leading-none">
          Business Model: <span className="gradient-text">High-Margin, Recurring</span>
        </h2>
      </div>
      <p className="text-[20px] text-muted-foreground mb-8 ml-[60px] opacity-0 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
        Software-first economics with zero hardware risk
      </p>

      {/* Highlights */}
      <div className="grid grid-cols-4 gap-5 mb-8">
        {highlights.map((h, i) => (
          <div
            key={i}
            className="rounded-2xl bg-gradient-to-br from-primary/5 to-eco-teal/5 border border-primary/20 p-6 text-center hover:shadow-lg hover:border-primary/40 transition-all duration-300 opacity-0 animate-fade-in"
            style={{ animationDelay: `${0.1 + i * 0.06}s`, animationFillMode: "forwards" }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <h.icon className="w-6 h-6 text-primary" />
            </div>
            <div className="text-[32px] font-extrabold gradient-text">{h.value}</div>
            <div className="text-[15px] text-muted-foreground font-medium">{h.label}</div>
          </div>
        ))}
      </div>

      {/* Revenue streams */}
      <div className="grid grid-cols-4 gap-3.5 flex-1">
        {streams.map((s, i) => (
          <div
            key={i}
            className="rounded-xl border border-border/40 bg-card p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300 flex flex-col opacity-0 animate-fade-in"
            style={{ animationDelay: `${0.2 + i * 0.04}s`, animationFillMode: "forwards" }}
          >
            <div className="text-[24px] font-extrabold text-primary mb-1">{s.margin}</div>
            <h3 className="text-[15px] font-bold text-foreground mb-2">{s.name}</h3>
            <p className="text-[13px] text-muted-foreground leading-relaxed mt-auto">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default Slide11Business;
