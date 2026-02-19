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
      <div className="relative w-full h-full flex flex-col bg-white overflow-hidden px-14 py-8">
        {/* Grid background */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
            backgroundSize: "60px 60px", opacity: 0.5,
          }}
        />

        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="text-center mb-5 animate-fade-in">
            <span className="inline-block px-5 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-[14px] font-bold tracking-widest uppercase mb-3">
              Interactive Tool
            </span>
            <h2 className="text-[44px] font-extrabold text-foreground leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Impact <span className="text-primary">Calculator</span>
            </h2>
            <p className="text-[16px] text-muted-foreground mt-1">See the real impact of your clean energy investment.</p>
          </div>

          <div className="grid grid-cols-2 gap-6 flex-1 min-h-0">
            {/* Controls */}
            <div className="space-y-4">
              <div className="bg-white/90 rounded-xl border border-border/40 p-5 shadow-sm">
                <label className="text-[13px] font-semibold text-foreground block mb-2">Location</label>
                <div className="text-[15px] text-muted-foreground bg-secondary rounded-lg px-4 py-3">{country}</div>
              </div>

              <div className="bg-white/90 rounded-xl border border-border/40 p-5 shadow-sm">
                <label className="text-[13px] font-semibold text-foreground block mb-3">Asset Type</label>
                <div className="flex gap-2">
                  {["Solar", "Wind", "Hybrid"].map((t) => (
                    <button
                      key={t}
                      onClick={() => setAssetType(t)}
                      className={`flex-1 py-3 rounded-xl text-[14px] font-semibold transition-all ${
                        assetType === t ? "bg-primary text-primary-foreground shadow-md" : "bg-secondary text-secondary-foreground hover:bg-muted"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white/90 rounded-xl border border-border/40 p-5 shadow-sm">
                <label className="text-[13px] font-semibold text-foreground block mb-1">Land Area</label>
                <div className="text-[22px] font-black text-primary mb-3">{landArea[0]} acres</div>
                <Slider value={landArea} onValueChange={setLandArea} min={1} max={100} step={1} />
              </div>

              <div className="bg-white/90 rounded-xl border border-border/40 p-5 shadow-sm">
                <label className="text-[13px] font-semibold text-foreground block mb-1">Duration</label>
                <div className="text-[22px] font-black text-primary mb-3">{duration[0]} years</div>
                <Slider value={duration} onValueChange={setDuration} min={5} max={30} step={1} />
              </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Total Sq Ft", value: fmtN(sqft), sub: "Usable area" },
                { label: "kWh / Year", value: fmtN(kwhYear), sub: "Energy output" },
                { label: "Tons CO₂ / Year", value: fmtN(co2), sub: "Carbon offset" },
                { label: "Revenue / Year", value: fmt(revenueYear), sub: "Estimated income" },
              ].map((r) => (
                <div key={r.label} className="bg-white/90 rounded-xl border border-border/40 p-5 flex flex-col justify-center shadow-sm">
                  <div className="text-[12px] text-muted-foreground mb-1">{r.label}</div>
                  <div className="text-[28px] font-black text-primary">{r.value}</div>
                  <div className="text-[12px] text-muted-foreground mt-0.5">{r.sub}</div>
                </div>
              ))}
              <div className="col-span-2 bg-primary/5 rounded-xl border-2 border-primary p-5 flex flex-col justify-center items-center shadow-sm">
                <div className="text-[14px] text-muted-foreground mb-1">Total Project Value</div>
                <div className="text-[40px] font-black text-primary">{fmt(totalValue)}</div>
                <div className="text-[14px] text-muted-foreground mt-1">Over {duration[0]} years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide10Calculator;
