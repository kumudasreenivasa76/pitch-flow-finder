import SlideLayout from "../SlideLayout";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const metrics = [
  { label: "Active Vendors", value: "40", sub: "Onboarded" },
  { label: "Sites", value: "10", sub: "Under management" },
  { label: "Enterprises", value: "3", sub: "Paying customers" },
  { label: "Subscribers", value: "150", sub: "Platform users" },
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
    <div className="flex flex-col h-full px-20 py-16">
      <h2 className="text-5xl font-bold text-foreground mb-2 animate-fade-in">
        Active Revenue <span className="text-primary">Pipeline</span>
      </h2>
      <p className="text-2xl text-muted-foreground mb-10">Current month performance and traction metrics.</p>

      {/* Metrics */}
      <div className="grid grid-cols-4 gap-6 mb-10">
        {metrics.map((m, i) => (
          <div key={i} className="bg-card rounded-2xl border border-border p-8 text-center animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="text-5xl font-bold text-primary">{m.value}</div>
            <div className="text-xl font-semibold text-foreground mt-2">{m.label}</div>
            <div className="text-lg text-muted-foreground">{m.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-10 flex-1">
        {/* Pie chart */}
        <div className="bg-card rounded-2xl border border-border p-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <h3 className="text-2xl font-bold text-foreground mb-4">Revenue Breakdown</h3>
          <ResponsiveContainer width="100%" height="85%">
            <PieChart>
              <Pie data={revenue} cx="50%" cy="50%" outerRadius={140} dataKey="value" label={({ name, value }) => `${name} ${value}%`} labelLine={true}>
                {revenue.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => [`${value}%`, undefined]} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Totals */}
        <div className="flex flex-col gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="bg-primary/5 rounded-2xl border-2 border-primary p-10 text-center flex-1 flex flex-col justify-center">
            <div className="text-xl text-muted-foreground mb-2">Monthly Revenue</div>
            <div className="text-6xl font-bold text-primary">$125K</div>
          </div>
          <div className="bg-card rounded-2xl border border-border p-10 text-center flex-1 flex flex-col justify-center">
            <div className="text-xl text-muted-foreground mb-2">Annualized Run Rate</div>
            <div className="text-6xl font-bold text-foreground">$1.5M</div>
          </div>
          <div className="bg-card rounded-2xl border border-border p-10 text-center flex-1 flex flex-col justify-center">
            <div className="text-xl text-muted-foreground mb-2">Pipeline Value</div>
            <div className="text-6xl font-bold text-eco-teal">$8.5M</div>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide19Pipeline;
