import SlideLayout from "../SlideLayout";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { year: "Y1", Revenue: 0.8, Expenses: 1.5, Profit: -0.7 },
  { year: "Y2", Revenue: 4, Expenses: 3.5, Profit: 0.5 },
  { year: "Y3", Revenue: 15, Expenses: 10, Profit: 5 },
  { year: "Y4", Revenue: 35, Expenses: 22, Profit: 13 },
  { year: "Y5", Revenue: 60, Expenses: 35, Profit: 25 },
];

const Slide18Projections = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-14">
      <div className="flex items-center gap-4 mb-2 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
        <div className="section-line" />
        <h2 className="text-[44px] font-extrabold text-foreground leading-none">
          5-Year <span className="gradient-text">Projections</span>
        </h2>
      </div>
      <p className="text-[20px] text-muted-foreground mb-6 ml-[60px] opacity-0 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
        Path to $60M ARR with strong unit economics
      </p>

      <div className="flex-1 rounded-2xl border border-border/40 bg-card p-8 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={8}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(160, 15%, 90%)" />
            <XAxis dataKey="year" tick={{ fontSize: 20, fill: "hsl(160, 10%, 40%)" }} />
            <YAxis tick={{ fontSize: 18, fill: "hsl(160, 10%, 40%)" }} tickFormatter={(v) => `$${v}M`} />
            <Tooltip
              formatter={(value: number) => [`$${value}M`, undefined]}
              contentStyle={{ borderRadius: "12px", border: "1px solid hsl(160, 15%, 90%)", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
            />
            <Legend wrapperStyle={{ fontSize: 18, paddingTop: 12 }} />
            <Bar dataKey="Revenue" fill="hsl(160, 84%, 39%)" radius={[8, 8, 0, 0]} />
            <Bar dataKey="Expenses" fill="hsl(160, 15%, 80%)" radius={[8, 8, 0, 0]} />
            <Bar dataKey="Profit" fill="hsl(174, 72%, 40%)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Key highlights */}
      <div className="grid grid-cols-4 gap-5 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
        {[
          { label: "Y5 Revenue", value: "$60M" },
          { label: "Y5 Profit", value: "$25M" },
          { label: "Gross Margin", value: "80%+" },
          { label: "Growth Rate", value: "3x YoY" },
        ].map((h) => (
          <div key={h.label} className="rounded-xl bg-gradient-to-br from-primary/5 to-eco-teal/5 border border-primary/20 p-5 text-center hover:shadow-lg transition-all duration-300">
            <div className="text-[28px] font-extrabold gradient-text">{h.value}</div>
            <div className="text-[14px] text-muted-foreground font-medium">{h.label}</div>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default Slide18Projections;
