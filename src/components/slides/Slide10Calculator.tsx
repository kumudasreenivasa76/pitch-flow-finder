import SlideLayout from "../SlideLayout";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Sun, Wind, Zap, Leaf, DollarSign, BarChart3 } from "lucide-react";

const Slide10Calculator = () => {
  const [assetType, setAssetType] = useState("Solar");
  const [landArea, setLandArea] = useState([5]);
  const [duration, setDuration] = useState([20]);

  const sqft = landArea[0] * 43560;
  const kwhBase = assetType === "Solar" ? 15 : assetType === "Wind" ? 12 : 8;
  const kwhYear = sqft * kwhBase;
  const co2 = Math.round(kwhYear * 0.0004);
  const revenueYear = Math.round(kwhYear * 0.08);
  const totalValue = revenueYear * duration[0];

  const fmt = (n: number) => n >= 1e9 ? `$${(n / 1e9).toFixed(1)}B` : n >= 1e6 ? `$${(n / 1e6).toFixed(1)}M` : n >= 1e3 ? `$${(n / 1e3).toFixed(0)}K` : `$${n}`;
  const fmtN = (n: number) => n >= 1e9 ? `${(n / 1e9).toFixed(1)}B` : n >= 1e6 ? `${(n / 1e6).toFixed(1)}M` : n >= 1e3 ? `${(n / 1e3).toFixed(0)}K` : `${n}`;

  const assetIcons = { Solar: Sun, Wind: Wind, Hybrid: Zap };

  return (
    <SlideLayout>
      <div className="flex flex-col h-full px-20 py-14">
        {/* Header */}
        <div className="flex items-center gap-4 mb-2 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
          <div className="section-line" />
          <h2 className="text-[44px] font-extrabold text-foreground leading-none">
            Impact <span className="gradient-text">Calculator</span>
          </h2>
        </div>
        <p className="text-[20px] text-muted-foreground mb-8 ml-[60px] opacity-0 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
          See the real impact of your clean energy investment
        </p>

        <div className="grid grid-cols-2 gap-10 flex-1">
          {/* Controls */}
          <div className="flex flex-col gap-5 opacity-0 animate-fade-in" style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}>
            <div className="rounded-2xl border border-border/40 bg-card p-7">
              <label className="text-[14px] font-bold text-muted-foreground uppercase tracking-wider block mb-4">Asset Type</label>
              <div className="flex gap-3">
                {(["Solar", "Wind", "Hybrid"] as const).map((t) => {
                  const AssetIcon = assetIcons[t];
                  return (
                    <button
                      key={t}
                      onClick={() => setAssetType(t)}
                      className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl text-[18px] font-semibold transition-all duration-300 ${
                        assetType === t
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      <AssetIcon className="w-5 h-5" />
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-border/40 bg-card p-7">
              <div className="flex justify-between items-center mb-4">
                <label className="text-[14px] font-bold text-muted-foreground uppercase tracking-wider">Land Area</label>
                <span className="text-[28px] font-extrabold text-primary stat-glow">{landArea[0]} acres</span>
              </div>
              <Slider value={landArea} onValueChange={setLandArea} min={1} max={100} step={1} />
            </div>

            <div className="rounded-2xl border border-border/40 bg-card p-7">
              <div className="flex justify-between items-center mb-4">
                <label className="text-[14px] font-bold text-muted-foreground uppercase tracking-wider">Duration</label>
                <span className="text-[28px] font-extrabold text-primary stat-glow">{duration[0]} years</span>
              </div>
              <Slider value={duration} onValueChange={setDuration} min={5} max={30} step={1} />
            </div>
          </div>

          {/* Results */}
          <div className="flex flex-col gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Total Sq Ft", value: fmtN(sqft), icon: BarChart3, sub: "Usable area" },
                { label: "kWh / Year", value: fmtN(kwhYear), icon: Zap, sub: "Energy output" },
                { label: "CO₂ Offset / Yr", value: `${fmtN(co2)} tons`, icon: Leaf, sub: "Carbon offset" },
                { label: "Revenue / Yr", value: fmt(revenueYear), icon: DollarSign, sub: "Estimated income" },
              ].map((r) => (
                <div key={r.label} className="rounded-2xl border border-border/40 bg-card p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <r.icon className="w-4 h-4 text-primary" />
                    <span className="text-[13px] text-muted-foreground font-medium">{r.label}</span>
                  </div>
                  <div className="text-[32px] font-extrabold text-foreground leading-tight">{r.value}</div>
                  <div className="text-[13px] text-muted-foreground mt-1">{r.sub}</div>
                </div>
              ))}
            </div>

            <div className="flex-1 rounded-2xl bg-gradient-to-br from-primary/10 to-eco-teal/10 border-2 border-primary/30 p-8 flex flex-col justify-center items-center">
              <div className="text-[16px] text-muted-foreground uppercase tracking-wider font-bold mb-2">Total Project Value</div>
              <div className="text-[64px] font-black gradient-text leading-none stat-glow">{fmt(totalValue)}</div>
              <div className="text-[18px] text-muted-foreground mt-3">Over {duration[0]} years • {assetType}</div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide10Calculator;
