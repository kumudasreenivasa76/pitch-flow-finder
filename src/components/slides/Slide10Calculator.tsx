import SlideLayout from "../SlideLayout";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";

const Slide10Calculator = () => {
  const [country] = useState("United States");
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

  return (
    <SlideLayout>
      <div className="flex flex-col h-full px-20 py-16">
        <h2 className="text-5xl font-bold text-foreground mb-2 animate-fade-in">
          Impact <span className="text-primary">Calculator</span>
        </h2>
        <p className="text-2xl text-muted-foreground mb-10">See the real impact of your clean energy investment.</p>

        <div className="grid grid-cols-2 gap-12 flex-1">
          {/* Controls */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl border border-border p-8">
              <label className="text-lg font-semibold text-foreground block mb-3">Location</label>
              <div className="text-xl text-muted-foreground bg-secondary rounded-xl px-6 py-4">{country}</div>
            </div>

            <div className="bg-card rounded-2xl border border-border p-8">
              <label className="text-lg font-semibold text-foreground block mb-4">Asset Type</label>
              <div className="flex gap-3">
                {["Solar", "Wind", "Hybrid"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setAssetType(t)}
                    className={`flex-1 py-4 rounded-xl text-xl font-medium transition-all ${
                      assetType === t ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border p-8">
              <label className="text-lg font-semibold text-foreground block mb-1">Land Area</label>
              <div className="text-3xl font-bold text-primary mb-4">{landArea[0]} acres</div>
              <Slider value={landArea} onValueChange={setLandArea} min={1} max={100} step={1} />
            </div>

            <div className="bg-card rounded-2xl border border-border p-8">
              <label className="text-lg font-semibold text-foreground block mb-1">Duration</label>
              <div className="text-3xl font-bold text-primary mb-4">{duration[0]} years</div>
              <Slider value={duration} onValueChange={setDuration} min={5} max={30} step={1} />
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-2 gap-5">
            {[
              { label: "Total Sq Ft", value: fmtN(sqft), sub: "Usable area" },
              { label: "kWh / Year", value: fmtN(kwhYear), sub: "Energy output" },
              { label: "Tons CO₂ / Year", value: fmtN(co2), sub: "Carbon offset" },
              { label: "Revenue / Year", value: fmt(revenueYear), sub: "Estimated income" },
            ].map((r) => (
              <div key={r.label} className="bg-card rounded-2xl border border-border p-8 flex flex-col justify-center">
                <div className="text-base text-muted-foreground mb-1">{r.label}</div>
                <div className="text-4xl font-bold text-primary">{r.value}</div>
                <div className="text-lg text-muted-foreground mt-1">{r.sub}</div>
              </div>
            ))}
            <div className="col-span-2 bg-primary/5 rounded-2xl border-2 border-primary p-8 flex flex-col justify-center items-center">
              <div className="text-xl text-muted-foreground mb-2">Total Project Value</div>
              <div className="text-6xl font-bold text-primary">{fmt(totalValue)}</div>
              <div className="text-xl text-muted-foreground mt-2">Over {duration[0]} years</div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide10Calculator;
