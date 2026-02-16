import SlideLayout from "../SlideLayout";
import { Building2, CreditCard } from "lucide-react";

const Slide17Financials = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-16">
      <h2 className="text-5xl font-bold text-foreground mb-2 animate-fade-in">
        Business Model & <span className="text-primary">Financials</span>
      </h2>
      <p className="text-2xl text-muted-foreground mb-10">Two synergistic business lines driving $60M combined revenue.</p>

      <div className="grid grid-cols-2 gap-10 flex-1">
        {/* EcoGridia Sites */}
        <div className="bg-card rounded-2xl border border-border p-10 animate-fade-in">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center">
              <Building2 className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-foreground">EcoGridia Sites</h3>
              <div className="text-4xl font-bold text-primary">$40M</div>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { stream: "Project Execution Fees", value: "$16M" },
              { stream: "Vendor Commissions", value: "$8M" },
              { stream: "Monitoring & Maintenance", value: "$6M" },
              { stream: "Asset Management", value: "$5M" },
              { stream: "Insurance & Compliance", value: "$5M" },
            ].map((r) => (
              <div key={r.stream} className="flex justify-between py-3 border-b border-border last:border-0">
                <span className="text-xl text-foreground">{r.stream}</span>
                <span className="text-xl font-bold text-primary">{r.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Subscriptions */}
        <div className="bg-card rounded-2xl border border-border p-10 animate-fade-in" style={{ animationDelay: "0.15s" }}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-eco-teal flex items-center justify-center">
              <CreditCard className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-foreground">Subscriptions</h3>
              <div className="text-4xl font-bold text-eco-teal">$20M</div>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { stream: "Enterprise SaaS", value: "$8M" },
              { stream: "VoltIQ Premium", value: "$4M" },
              { stream: "Marketplace Fees", value: "$3M" },
              { stream: "Compliance Module", value: "$3M" },
              { stream: "Data & Analytics", value: "$2M" },
            ].map((r) => (
              <div key={r.stream} className="flex justify-between py-3 border-b border-border last:border-0">
                <span className="text-xl text-foreground">{r.stream}</span>
                <span className="text-xl font-bold text-eco-teal">{r.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Traction */}
      <div className="flex justify-center gap-16 mt-8 py-4">
        {["LOIs Signed", "Pipeline Active", "Revenue Generating"].map((t, i) => (
          <div key={t} className="flex items-center gap-2 text-xl">
            <div className={`w-4 h-4 rounded-full ${i === 2 ? "bg-primary" : "bg-primary/40"}`} />
            <span className="text-muted-foreground">{t}</span>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default Slide17Financials;
