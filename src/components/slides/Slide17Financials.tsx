import SlideLayout from "../SlideLayout";
import { Building2, CreditCard } from "lucide-react";

const Slide17Financials = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-14">
      <div className="flex items-center gap-4 mb-2 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
        <div className="section-line" />
        <h2 className="text-[44px] font-extrabold text-foreground leading-none">
          Business Model & <span className="gradient-text">Financials</span>
        </h2>
      </div>
      <p className="text-[20px] text-muted-foreground mb-8 ml-[60px] opacity-0 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
        Two synergistic business lines driving $60M combined revenue
      </p>

      <div className="grid grid-cols-2 gap-8 flex-1">
        {/* EcoGridia Sites */}
        <div className="rounded-2xl border border-border/40 bg-card p-9 opacity-0 animate-fade-in flex flex-col" style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
              <Building2 className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-[24px] font-extrabold text-foreground">EcoGridia Sites</h3>
              <div className="text-[32px] font-black gradient-text leading-tight">$40M</div>
            </div>
          </div>
          <div className="space-y-1 flex-1">
            {[
              { stream: "Project Execution Fees", value: "$16M" },
              { stream: "Vendor Commissions", value: "$8M" },
              { stream: "Monitoring & Maintenance", value: "$6M" },
              { stream: "Asset Management", value: "$5M" },
              { stream: "Insurance & Compliance", value: "$5M" },
            ].map((r) => (
              <div key={r.stream} className="flex justify-between py-3 border-b border-border/30 last:border-0 hover:bg-primary/[0.02] transition-colors rounded-lg px-2">
                <span className="text-[16px] text-foreground">{r.stream}</span>
                <span className="text-[16px] font-bold text-primary">{r.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Subscriptions */}
        <div className="rounded-2xl border border-border/40 bg-card p-9 opacity-0 animate-fade-in flex flex-col" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-eco-teal flex items-center justify-center shadow-lg">
              <CreditCard className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-[24px] font-extrabold text-foreground">Subscriptions</h3>
              <div className="text-[32px] font-black text-eco-teal leading-tight">$20M</div>
            </div>
          </div>
          <div className="space-y-1 flex-1">
            {[
              { stream: "Enterprise SaaS", value: "$8M" },
              { stream: "VoltIQ Premium", value: "$4M" },
              { stream: "Marketplace Fees", value: "$3M" },
              { stream: "Compliance Module", value: "$3M" },
              { stream: "Data & Analytics", value: "$2M" },
            ].map((r) => (
              <div key={r.stream} className="flex justify-between py-3 border-b border-border/30 last:border-0 hover:bg-eco-teal/[0.02] transition-colors rounded-lg px-2">
                <span className="text-[16px] text-foreground">{r.stream}</span>
                <span className="text-[16px] font-bold text-eco-teal">{r.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Traction */}
      <div className="flex justify-center gap-12 mt-6 py-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}>
        {[
          { label: "LOIs Signed", active: false },
          { label: "Pipeline Active", active: false },
          { label: "Revenue Generating", active: true },
        ].map((t) => (
          <div key={t.label} className="flex items-center gap-2 text-[16px]">
            <div className={`w-3 h-3 rounded-full ${t.active ? "bg-primary shadow-md shadow-primary/30" : "bg-primary/30"}`} />
            <span className="text-muted-foreground font-medium">{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default Slide17Financials;
