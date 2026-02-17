import SlideLayout from "../SlideLayout";
import { useState } from "react";
import { Building2, Users, ShoppingCart } from "lucide-react";
import modelsImg from "@/assets/slide09-models-white.png";

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
      <div className="flex h-full bg-white">
        {/* Left: Image */}
        <div className="w-[720px] shrink-0 flex items-center justify-center p-10">
          <img src={modelsImg} alt="Participation Models" className="w-full h-auto object-contain max-h-[900px]" />
        </div>

        {/* Right: Content */}
        <div className="flex-1 flex flex-col justify-center pr-16 py-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-2 animate-fade-in">
            Participation <span className="text-primary">Models</span>
          </h2>
          <p className="text-xl text-gray-500 mb-10">Three ways to participate in the clean energy economy.</p>

          <div className="flex flex-col gap-5">
            {models.map((m, i) => (
              <button
                key={i}
                onClick={() => setExpanded(expanded === i ? null : i)}
                className={`text-left rounded-2xl border p-7 transition-all duration-300 flex items-start gap-5 opacity-0 animate-fade-in ${
                  expanded === i ? "bg-primary/5 border-primary shadow-xl" : "bg-gray-50 border-gray-200 hover:border-primary/40 hover:shadow-lg"
                }`}
                style={{ animationDelay: `${0.1 + i * 0.08}s`, animationFillMode: "forwards" }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <m.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{m.title}</h3>
                  <p className="text-lg text-gray-500 mb-3">{m.subtitle}</p>
                  <div className="flex flex-wrap gap-2">
                    {m.stakeholders.map((s) => (
                      <span key={s} className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">{s}</span>
                    ))}
                  </div>
                  {expanded === i && (
                    <p className="text-base text-gray-600 leading-relaxed mt-4 animate-fade-in">{m.details}</p>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide09Models;
