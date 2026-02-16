import SlideLayout from "../SlideLayout";
import { useState } from "react";
import { Building2, Users, ShoppingCart } from "lucide-react";

const models = [
  {
    icon: Building2,
    title: "Enterprise Project Ownership",
    subtitle: "Full ownership model for large institutions",
    stakeholders: ["Corporations", "Universities", "Hospitals", "Government Agencies"],
    details: "Enterprises fund, own, and operate their own clean energy installations. EcoGridia provides the full SaaS stack for project management, monitoring, compliance, and monetization. Typical project size: $1M–$50M.",
  },
  {
    icon: Users,
    title: "Shared Projects",
    subtitle: "Community-based fractional ownership",
    stakeholders: ["Schools", "Communities", "Small Businesses", "Nonprofits"],
    details: "Multiple stakeholders co-invest in shared clean energy projects. EcoGridia handles allocation, billing, compliance, and returns distribution. Minimum investment as low as $100.",
  },
  {
    icon: ShoppingCart,
    title: "Bulk Energy Procurement",
    subtitle: "Pre-purchase clean energy at scale",
    stakeholders: ["Data Centers", "Manufacturing", "Retail Chains", "Logistics Companies"],
    details: "Large consumers pre-purchase verified clean energy units through EcoGridia's marketplace. Guaranteed supply, transparent pricing, and full traceability from source to consumption.",
  },
];

const Slide09Models = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <SlideLayout>
      <div className="flex flex-col h-full px-20 py-16">
        <h2 className="text-5xl font-bold text-foreground mb-2 animate-fade-in">
          Participation <span className="text-primary">Models</span>
        </h2>
        <p className="text-2xl text-muted-foreground mb-12">Three ways to participate in the clean energy economy.</p>

        <div className="grid grid-cols-3 gap-8 flex-1">
          {models.map((m, i) => (
            <button
              key={i}
              onClick={() => setExpanded(expanded === i ? null : i)}
              className={`text-left rounded-2xl border p-10 transition-all duration-300 flex flex-col ${
                expanded === i ? "bg-primary/5 border-primary shadow-xl" : "bg-card border-border hover:border-primary/40 hover:shadow-lg"
              }`}
            >
              <m.icon className="w-14 h-14 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-2">{m.title}</h3>
              <p className="text-lg text-muted-foreground mb-6">{m.subtitle}</p>

              <div className="mb-4">
                <span className="text-sm font-semibold text-primary uppercase">Stakeholders</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {m.stakeholders.map((s) => (
                    <span key={s} className="text-base bg-primary/10 text-primary px-3 py-1 rounded-full">{s}</span>
                  ))}
                </div>
              </div>

              {expanded === i && (
                <p className="text-lg text-foreground/80 leading-relaxed mt-auto animate-fade-in">{m.details}</p>
              )}
            </button>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide09Models;
