import SlideLayout from "../SlideLayout";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Users, Building2, ShoppingCart, BarChart3 } from "lucide-react";

const metrics = [
  { label: "Active Vendors", value: "40", sub: "Onboarded", icon: ShoppingCart },
  { label: "Sites", value: "10", sub: "Under management", icon: Building2 },
  { label: "Enterprises", value: "3", sub: "Paying customers", icon: BarChart3 },
  { label: "Subscribers", value: "150", sub: "Platform users", icon: Users },
];

const revenue = [
  { name: "Project Fees", value: 45, color: "hsl(160, 84%, 39%)" },
  { name: "Subscriptions", value: 25, color: "hsl(174, 72%, 40%)" },
  { name: "Vendor Commissions", value: 15, color: "hsl(152, 76%, 36%)" },
  { name: "Consulting", value: 10, color: "hsl(160, 60%, 70%)" },
  { name: "Other", value: 5, color: "hsl(160, 15%, 80%)" },
];

const Slide19Pipeline = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-14">
      <div className="flex items-center gap-4 mb-2 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
        <div className="section-line" />
        <h2 className="text-[44px] font-extrabold text-foreground leading-none">
          Active Revenue <span className="gradient-text">Pipeline</span>
        </h2>
      </div>
      <p className="text-[20px] text-muted-foreground mb-8 ml-[60px] opacity-0 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
        Current month performance and traction metrics
      </p>

      {/* Metrics */}
      <div className="grid grid-cols-4 gap-5 mb-8">
        {metrics.map((m, i) => (
          <div
            key={i}
            className="rounded-2xl border border-border/40 bg-card p-6 text-center hover:border-primary/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 opacity-0 animate-fade-in"
            style={{ animationDelay: `${0.15 + i * 0.06}s`, animationFillMode: "forwards" }}
          >
            <m.icon className="w-6 h-6 text-primary mx-auto mb-2" />
            <div className="text-[40px] font-extrabold gradient-text leading-tight">{m.value}</div>
            <div className="text-[16px] font-bold text-foreground mt-1">{m.label}</div>
            <div className="text-[13px] text-muted-foreground">{m.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-8 flex-1">
        {/* Pie chart */}
        <div className="rounded-2xl border border-border/40 bg-card p-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}>
          <h3 className="text-[18px] font-bold text-foreground mb-4">Revenue Breakdown</h3>
          <ResponsiveContainer width="100%" height="85%">
            <PieChart>
              <Pie data={revenue} cx="50%" cy="50%" outerRadius={130} innerRadius={60} dataKey="value" label={({ name, value }) => `${name} ${value}%`} labelLine={true} strokeWidth={2}>
                {revenue.map((entry, i) => (
                  <Cell key={i} fill={entry.color} stroke="hsl(0, 0%, 100%)" />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => [`${value}%`, undefined]} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Totals */}
        <div className="flex flex-col gap-5 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
          <div className="bg-gradient-to-br from-primary/10 to-eco-teal/10 rounded-2xl border-2 border-primary/30 p-8 text-center flex-1 flex flex-col justify-center">
            <div className="text-[14px] text-muted-foreground uppercase tracking-wider font-bold mb-2">Monthly Revenue</div>
            <div className="text-[52px] font-black gradient-text leading-none stat-glow">$125K</div>
          </div>
          <div className="rounded-2xl border border-border/40 bg-card p-8 text-center flex-1 flex flex-col justify-center hover:shadow-lg transition-all">
            <div className="text-[14px] text-muted-foreground uppercase tracking-wider font-bold mb-2">Annualized Run Rate</div>
            <div className="text-[48px] font-extrabold text-foreground leading-none">$1.5M</div>
          </div>
          <div className="rounded-2xl border border-border/40 bg-card p-8 text-center flex-1 flex flex-col justify-center hover:shadow-lg transition-all">
            <div className="text-[14px] text-muted-foreground uppercase tracking-wider font-bold mb-2">Pipeline Value</div>
            <div className="text-[48px] font-extrabold text-eco-teal leading-none">$8.5M</div>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide19Pipeline;
