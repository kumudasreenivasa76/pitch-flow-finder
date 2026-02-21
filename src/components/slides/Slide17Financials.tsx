import SlideLayout from "../SlideLayout";
import { Building2, CreditCard } from "lucide-react";

const Slide17Financials = () => (
  <SlideLayout>
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-white overflow-hidden px-14 pt-8 pb-5">
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "60px 60px", opacity: 0.5,
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-4 animate-fade-in">
          <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[13px] font-bold tracking-widest uppercase mb-2">
            Revenue Breakdown
          </span>
          <h2 className="text-[40px] font-extrabold text-foreground leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Business Model & <span className="text-primary">Financials</span>
          </h2>
          <p className="text-[15px] text-muted-foreground mt-1">Two synergistic business lines driving AED 110M+ combined revenue across UAE & KSA.</p>
        </div>

        <div className="grid grid-cols-2 gap-6 flex-1 min-h-0">
          {/* EcoGridia Sites */}
          <div className="bg-white/90 rounded-2xl border-2 border-border/40 p-6 animate-fade-in shadow-sm" style={{ animationDelay: "0.05s", animationFillMode: "forwards", opacity: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-[22px] font-extrabold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>EcoGridia Sites</h3>
                <div className="text-[28px] font-black text-primary leading-none">AED 73M</div>
              </div>
            </div>
            <div className="space-y-2">
              {[
                { stream: "Project Execution Fees", value: "AED 29M" },
                { stream: "Vendor Commissions", value: "AED 15M" },
                { stream: "Monitoring & Maintenance", value: "AED 11M" },
                { stream: "Asset Management", value: "AED 10M" },
                { stream: "Insurance & Compliance", value: "AED 8M" },
              ].map((r) => (
                <div key={r.stream} className="flex justify-between py-2.5 border-b border-border/40 last:border-0">
                  <span className="text-[14px] text-foreground">{r.stream}</span>
                  <span className="text-[14px] font-bold text-primary">{r.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Subscriptions */}
          <div className="bg-white/90 rounded-2xl border-2 border-border/40 p-6 animate-fade-in shadow-sm" style={{ animationDelay: "0.1s", animationFillMode: "forwards", opacity: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-eco-teal flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-[22px] font-extrabold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Subscriptions</h3>
                <div className="text-[28px] font-black text-eco-teal leading-none">AED 37M</div>
              </div>
            </div>
            <div className="space-y-2">
              {[
                { stream: "Enterprise SaaS", value: "AED 15M" },
                { stream: "VoltIQ Premium", value: "AED 7M" },
                { stream: "Marketplace Fees", value: "AED 6M" },
                { stream: "Compliance Module", value: "AED 5M" },
                { stream: "Data & Analytics", value: "AED 4M" },
              ].map((r) => (
                <div key={r.stream} className="flex justify-between py-2.5 border-b border-border/40 last:border-0">
                  <span className="text-[14px] text-foreground">{r.stream}</span>
                  <span className="text-[14px] font-bold text-eco-teal">{r.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Traction */}
        <div className="flex justify-center gap-8 mt-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {["LOIs Signed", "Pipeline Active", "Revenue Generating"].map((t, i) => (
            <div key={t} className="flex items-center gap-2 text-[14px]">
              <div className={`w-3 h-3 rounded-full ${i === 2 ? "bg-primary" : "bg-primary/40"}`} />
              <span className="text-muted-foreground">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide17Financials;
