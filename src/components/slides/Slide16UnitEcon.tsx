import SlideLayout from "../SlideLayout";

const Slide16UnitEcon = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-20 py-12 bg-white">
      <h2 className="text-5xl font-bold text-foreground mb-1 animate-fade-in">
        Core Assumptions — <span className="text-primary">Year 5 Baseline</span>
      </h2>
      <p className="text-xl text-muted-foreground mb-8">Validated unit economics across all customer segments.</p>

      <div className="grid grid-cols-3 gap-6 flex-1">

        {/* Col 1: Customer Revenue + LTV */}
        <div className="flex flex-col gap-6">
          {/* Assumptions */}
          <div className="bg-card rounded-2xl border border-border p-6 animate-fade-in">
            <h3 className="text-lg font-bold text-primary mb-4 uppercase tracking-wide">Core Assumptions</h3>
            <div className="space-y-3">
              {[
                { label: "Total Revenue", value: "$169.7M" },
                { label: "Total Customers", value: "1,365" },
                { label: "Gross Margin", value: "84%" },
                { label: "Annual Churn", value: "15%" },
              ].map((r) => (
                <div key={r.label} className="flex justify-between items-center border-b border-border pb-2 last:border-0 last:pb-0">
                  <span className="text-base text-muted-foreground">{r.label}</span>
                  <span className="text-base font-bold text-foreground">{r.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Revenue */}
          <div className="bg-card rounded-2xl border border-border p-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-lg font-bold text-eco-teal mb-4 uppercase tracking-wide">Customer Revenue Metrics</h3>
            <div className="space-y-3">
              {[
                { label: "Blended ARPU", value: "$124,300" },
                { label: "Gross Profit / Customer", value: "$104,412" },
                { label: "Avg Customer Lifetime", value: "6.7 years" },
              ].map((r) => (
                <div key={r.label} className="flex justify-between items-center border-b border-border pb-2 last:border-0 last:pb-0">
                  <span className="text-base text-muted-foreground">{r.label}</span>
                  <span className="text-base font-bold text-foreground">{r.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Col 2: LTV + CAC + Summary */}
        <div className="flex flex-col gap-6">
          {/* LTV */}
          <div className="bg-card rounded-2xl border-2 border-primary p-6 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <h3 className="text-lg font-bold text-primary mb-4 uppercase tracking-wide">Lifetime Value (LTV)</h3>
            <div className="text-5xl font-black text-primary mb-1">$693K</div>
            <div className="text-sm text-muted-foreground mb-4">Per enterprise customer</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Formula</span><span className="font-semibold text-foreground">GP ÷ Churn Rate</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">$104,412 ÷ 0.15</span><span className="font-semibold text-foreground">= $696,080</span></div>
            </div>
          </div>

          {/* CAC */}
          <div className="bg-card rounded-2xl border-2 border-eco-emerald p-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-lg font-bold text-eco-emerald mb-4 uppercase tracking-wide">Customer Acquisition Cost</h3>
            <div className="text-5xl font-black text-eco-emerald mb-1">$140K</div>
            <div className="text-sm text-muted-foreground mb-4">Target LTV:CAC = 5x</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">LTV:CAC Target</span><span className="font-semibold text-foreground">5x</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">$693K ÷ 5</span><span className="font-semibold text-foreground">= $138,600</span></div>
            </div>
          </div>
        </div>

        {/* Col 3: Data Center + Efficiency */}
        <div className="flex flex-col gap-6">
          {/* Data Center */}
          <div className="bg-card rounded-2xl border border-border p-6 animate-fade-in" style={{ animationDelay: "0.25s" }}>
            <h3 className="text-lg font-bold text-eco-teal mb-4 uppercase tracking-wide">Data Center Segment (Y5)</h3>
            <div className="space-y-3">
              {[
                { label: "Revenue", value: "$44.8M" },
                { label: "Customers", value: "675" },
                { label: "ARPU", value: "$66,350" },
                { label: "Gross Profit / DC", value: "$55,700" },
                { label: "Implied LTV", value: "$371,000" },
                { label: "Est. DC CAC (5x)", value: "$74,000" },
              ].map((r) => (
                <div key={r.label} className="flex justify-between items-center border-b border-border pb-2 last:border-0 last:pb-0">
                  <span className="text-sm text-muted-foreground">{r.label}</span>
                  <span className="text-sm font-bold text-foreground">{r.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Efficiency */}
          <div className="bg-card rounded-2xl border border-border p-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-lg font-bold text-primary mb-4 uppercase tracking-wide">Company Efficiency</h3>
            <div className="space-y-3">
              {[
                { label: "Revenue / FTE", value: "$707K" },
                { label: "EBITDA Margin", value: "69%" },
                { label: "Net Margin", value: "51.7%" },
                { label: "Gross Margin Trend", value: "76% → 89%" },
              ].map((r) => (
                <div key={r.label} className="flex justify-between items-center border-b border-border pb-2 last:border-0 last:pb-0">
                  <span className="text-sm text-muted-foreground">{r.label}</span>
                  <span className="text-sm font-bold text-foreground">{r.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Summary bar */}
      <div className="bg-primary/5 rounded-2xl p-6 mt-6 flex justify-between items-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
        {[
          { label: "ARPU", value: "$124,300" },
          { label: "Gross Margin", value: "84%" },
          { label: "LTV", value: "~$693K" },
          { label: "CAC", value: "~$140K" },
          { label: "LTV:CAC", value: "5x" },
          { label: "CAC Payback", value: "~16 mo" },
        ].map((m) => (
          <div key={m.label} className="text-center">
            <div className="text-2xl font-black text-primary">{m.value}</div>
            <div className="text-sm text-muted-foreground">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default Slide16UnitEcon;
