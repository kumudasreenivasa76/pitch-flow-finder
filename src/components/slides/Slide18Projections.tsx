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
    <div className="flex flex-col h-full px-20 py-16">
      <h2 className="text-5xl font-bold text-foreground mb-2 animate-fade-in">
        5-Year <span className="text-primary">Projections</span>
      </h2>
      <p className="text-2xl text-muted-foreground mb-8">Path to $60M ARR with strong unit economics.</p>

      <div className="flex-1 bg-card rounded-2xl border border-border p-8 mb-8 animate-fade-in">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={8}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(160, 15%, 90%)" />
            <XAxis dataKey="year" tick={{ fontSize: 20, fill: "hsl(160, 10%, 40%)" }} />
            <YAxis tick={{ fontSize: 18, fill: "hsl(160, 10%, 40%)" }} tickFormatter={(v) => `$${v}M`} />
            <Tooltip
              formatter={(value: number) => [`$${value}M`, undefined]}
              contentStyle={{ borderRadius: "12px", border: "1px solid hsl(160, 15%, 90%)" }}
            />
            <Legend wrapperStyle={{ fontSize: 18, paddingTop: 12 }} />
            <Bar dataKey="Revenue" fill="hsl(160, 84%, 39%)" radius={[6, 6, 0, 0]} />
            <Bar dataKey="Expenses" fill="hsl(160, 15%, 80%)" radius={[6, 6, 0, 0]} />
            <Bar dataKey="Profit" fill="hsl(174, 72%, 40%)" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Key highlights */}
      <div className="grid grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        {[
          { label: "Y5 Revenue", value: "$60M" },
          { label: "Y5 Profit", value: "$25M" },
          { label: "Gross Margin", value: "80%+" },
          { label: "Growth Rate", value: "3x YoY" },
        ].map((h) => (
          <div key={h.label} className="bg-primary/5 rounded-xl p-5 text-center">
            <div className="text-3xl font-bold text-primary">{h.value}</div>
            <div className="text-lg text-muted-foreground">{h.label}</div>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default Slide18Projections;
