import SlideLayout from "../SlideLayout";
import { useState } from "react";
import { Building2, Users, ShoppingCart, ChevronRight } from "lucide-react";
import modelsImg from "@/assets/slide09-models-white.png";

const models = [
  {
    icon: Building2,
    title: "Enterprise Project Ownership",
    subtitle: "Full ownership model for large institutions",
    stakeholders: ["Corporations", "Universities", "Hospitals", "Government"],
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
    stakeholders: ["Data Centers", "Manufacturing", "Retail Chains", "Logistics"],
    details: "Large consumers pre-purchase verified clean energy units through EcoGridia's marketplace. Guaranteed supply, transparent pricing, and full traceability from source to consumption.",
  },
];

const Slide09Models = () => {
  const [selected, setSelected] = useState(0);
  const m = models[selected];
  const Icon = m.icon;

  return (
    <SlideLayout>
      <div className="flex h-full">
        {/* Left: Image */}
        <div className="w-[680px] shrink-0 flex items-center justify-center p-10 bg-card/30">
          <img src={modelsImg} alt="Participation Models" className="w-full h-auto object-contain max-h-[900px] opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }} />
        </div>

        {/* Right: Content */}
        <div className="flex-1 flex flex-col">
          <div className="px-10 pt-8 pb-5 border-b border-border/20">
            <div className="flex items-center gap-4 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
              <div className="section-line" />
              <div>
                <h2 className="text-[38px] font-extrabold text-foreground leading-none">
                  Participation <span className="gradient-text">Models</span>
                </h2>
                <p className="text-[16px] text-muted-foreground mt-1">Three ways to participate in the clean energy economy</p>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center px-8 py-4 gap-3">
            {models.map((mod, i) => {
              const MIcon = mod.icon;
              const isActive = selected === i;
              return (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  className={`flex items-center gap-4 px-5 py-5 rounded-2xl text-left transition-all duration-300 opacity-0 animate-fade-in ${
                    isActive
                      ? "bg-primary/10 border-2 border-primary/30 shadow-lg shadow-primary/5"
                      : "bg-transparent border-2 border-transparent hover:bg-card hover:border-border/30"
                  }`}
                  style={{ animationDelay: `${0.1 + i * 0.06}s`, animationFillMode: "forwards" }}
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isActive ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" : "bg-secondary text-muted-foreground"
                  }`}>
                    <MIcon className="w-7 h-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-[18px] font-bold leading-tight transition-colors ${isActive ? "text-primary" : "text-foreground"}`}>
                      {mod.title}
                    </p>
                    <p className="text-[14px] text-muted-foreground mt-0.5">{mod.subtitle}</p>
                    {isActive && (
                      <div className="mt-3 animate-fade-in">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {mod.stakeholders.map((s) => (
                            <span key={s} className="text-[12px] bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">{s}</span>
                          ))}
                        </div>
                        <p className="text-[14px] text-muted-foreground leading-relaxed">{mod.details}</p>
                      </div>
                    )}
                  </div>
                  <ChevronRight className={`w-5 h-5 shrink-0 transition-all duration-300 ${isActive ? "text-primary translate-x-1" : "text-muted-foreground/40"}`} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide09Models;
