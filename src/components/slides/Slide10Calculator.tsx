import SlideLayout from "../SlideLayout";
import { useState, useCallback } from "react";
import { Slider } from "@/components/ui/slider";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Sparkles } from "lucide-react";

const COUNTRIES_CITIES: Record<string, string[]> = {
  "United States": ["Phoenix, AZ", "Los Angeles, CA", "Houston, TX", "Denver, CO", "Miami, FL", "Chicago, IL"],
  "India": ["Rajasthan", "Gujarat", "Tamil Nadu", "Karnataka", "Maharashtra", "Andhra Pradesh"],
  "Germany": ["Berlin", "Munich", "Hamburg", "Frankfurt", "Stuttgart", "Cologne"],
  "Australia": ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Darwin"],
  "Brazil": ["São Paulo", "Rio de Janeiro", "Bahia", "Minas Gerais", "Ceará", "Pernambuco"],
  "United Kingdom": ["London", "Edinburgh", "Manchester", "Cardiff", "Bristol", "Leeds"],
  "UAE": ["Dubai", "Abu Dhabi", "Sharjah", "Ras Al Khaimah", "Fujairah", "Ajman"],
  "South Africa": ["Cape Town", "Johannesburg", "Durban", "Pretoria", "Port Elizabeth", "Bloemfontein"],
};

interface AIEstimate {
  kwhPerSqftPerYear: number;
  co2OffsetTonsPerYear: number;
  revenuePerKwhUsd: number;
  capacityFactorPercent: number;
  peakCapacityKw: number;
  avgSunHoursOrWindSpeed: number;
  localElectricityPriceUsd: number;
  notes: string;
}

const Slide10Calculator = () => {
  const [country, setCountry] = useState("United States");
  const [city, setCity] = useState("Phoenix, AZ");
  const [assetType, setAssetType] = useState("Solar");
  const [landArea, setLandArea] = useState([5]);
  const [duration, setDuration] = useState([20]);
  const [loading, setLoading] = useState(false);
  const [aiData, setAiData] = useState<AIEstimate | null>(null);
  const [error, setError] = useState("");

  const sqft = landArea[0] * 43560;

  // Fallback calculations
  const fallbackKwhBase = assetType === "Solar" ? 15 : assetType === "Wind" ? 12 : 8;
  const kwhYear = aiData ? Math.round(sqft * aiData.kwhPerSqftPerYear) : sqft * fallbackKwhBase;
  const co2 = aiData ? Math.round(aiData.co2OffsetTonsPerYear) : Math.round(kwhYear * 0.0004);
  const revenueYear = aiData ? Math.round(kwhYear * aiData.revenuePerKwhUsd) : Math.round(kwhYear * 0.08);
  const totalValue = revenueYear * duration[0];

  const fmt = (n: number) => n >= 1e9 ? `$${(n / 1e9).toFixed(1)}B` : n >= 1e6 ? `$${(n / 1e6).toFixed(1)}M` : n >= 1e3 ? `$${(n / 1e3).toFixed(0)}K` : `$${n}`;
  const fmtN = (n: number) => n >= 1e9 ? `${(n / 1e9).toFixed(1)}B` : n >= 1e6 ? `${(n / 1e6).toFixed(1)}M` : n >= 1e3 ? `${(n / 1e3).toFixed(0)}K` : `${n}`;

  const fetchEstimate = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const { data, error: fnError } = await supabase.functions.invoke("energy-estimate", {
        body: { country, city, assetType, landAcres: landArea[0], durationYears: duration[0] },
      });
      if (fnError) throw fnError;
      if (data?.error) throw new Error(data.error);
      setAiData(data as AIEstimate);
    } catch (e: any) {
      console.error(e);
      setError("AI estimate failed. Using fallback data.");
      setAiData(null);
    } finally {
      setLoading(false);
    }
  }, [country, city, assetType, landArea, duration]);

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
          <div className="text-center mb-4 animate-fade-in">
            <span className="inline-block px-5 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-[14px] font-bold tracking-widest uppercase mb-2">
              AI-Powered Tool
            </span>
            <h2 className="text-[44px] font-extrabold text-foreground leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Impact <span className="text-primary">Calculator</span>
            </h2>
            <p className="text-[15px] text-muted-foreground mt-0.5">Real location-based energy estimates powered by AI.</p>
          </div>

          <div className="grid grid-cols-2 gap-5 flex-1 min-h-0">
            {/* Controls */}
            <div className="space-y-3">
              {/* Country & City */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/90 rounded-xl border border-border/40 p-4 shadow-sm">
                  <label className="text-[12px] font-semibold text-foreground block mb-1.5">Country</label>
                  <select
                    value={country}
                    onChange={(e) => { setCountry(e.target.value); setCity(COUNTRIES_CITIES[e.target.value][0]); setAiData(null); }}
                    className="w-full text-[14px] bg-secondary rounded-lg px-3 py-2.5 border-0 outline-none text-foreground"
                  >
                    {Object.keys(COUNTRIES_CITIES).map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div className="bg-white/90 rounded-xl border border-border/40 p-4 shadow-sm">
                  <label className="text-[12px] font-semibold text-foreground block mb-1.5">City / Region</label>
                  <select
                    value={city}
                    onChange={(e) => { setCity(e.target.value); setAiData(null); }}
                    className="w-full text-[14px] bg-secondary rounded-lg px-3 py-2.5 border-0 outline-none text-foreground"
                  >
                    {(COUNTRIES_CITIES[country] || []).map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>

              {/* Asset Type */}
              <div className="bg-white/90 rounded-xl border border-border/40 p-4 shadow-sm">
                <label className="text-[12px] font-semibold text-foreground block mb-2">Asset Type</label>
                <div className="flex gap-2">
                  {["Solar", "Wind", "Hybrid"].map((t) => (
                    <button
                      key={t}
                      onClick={() => { setAssetType(t); setAiData(null); }}
                      className={`flex-1 py-2.5 rounded-xl text-[13px] font-semibold transition-all ${
                        assetType === t ? "bg-primary text-primary-foreground shadow-md" : "bg-secondary text-secondary-foreground hover:bg-muted"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Land Area */}
              <div className="bg-white/90 rounded-xl border border-border/40 p-4 shadow-sm">
                <label className="text-[12px] font-semibold text-foreground block mb-0.5">Land Area</label>
                <div className="text-[20px] font-black text-primary mb-2">{landArea[0]} acres</div>
                <Slider value={landArea} onValueChange={(v) => { setLandArea(v); setAiData(null); }} min={1} max={100} step={1} />
              </div>

              {/* Duration */}
              <div className="bg-white/90 rounded-xl border border-border/40 p-4 shadow-sm">
                <label className="text-[12px] font-semibold text-foreground block mb-0.5">Duration</label>
                <div className="text-[20px] font-black text-primary mb-2">{duration[0]} years</div>
                <Slider value={duration} onValueChange={(v) => { setDuration(v); setAiData(null); }} min={5} max={30} step={1} />
              </div>

              {/* AI Button */}
              <button
                onClick={fetchEstimate}
                disabled={loading}
                className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-bold text-[14px] flex items-center justify-center gap-2 hover:bg-primary/90 transition-all disabled:opacity-60 shadow-lg"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                {loading ? "Analyzing location..." : "Get AI Estimate"}
              </button>
              {error && <p className="text-[12px] text-destructive text-center">{error}</p>}
            </div>

            {/* Results */}
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Peak Capacity", value: aiData ? `${fmtN(aiData.peakCapacityKw)} kW` : `${fmtN(sqft * 0.004)} kW`, sub: aiData ? `${aiData.capacityFactorPercent}% capacity factor` : "Estimated" },
                  { label: "kWh / Year", value: fmtN(kwhYear), sub: aiData ? `${aiData.avgSunHoursOrWindSpeed} ${assetType === "Wind" ? "m/s avg wind" : "sun hrs/day"}` : "Energy output" },
                  { label: "CO₂ Offset / Year", value: `${fmtN(co2)} tons`, sub: "Carbon reduction" },
                  { label: "Revenue / Year", value: fmt(revenueYear), sub: aiData ? `$${aiData.localElectricityPriceUsd}/kWh local rate` : "Estimated income" },
                ].map((r) => (
                  <div key={r.label} className="bg-white/90 rounded-xl border border-border/40 p-4 flex flex-col justify-center shadow-sm">
                    <div className="text-[11px] text-muted-foreground mb-0.5">{r.label}</div>
                    <div className="text-[24px] font-black text-primary leading-tight">{r.value}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">{r.sub}</div>
                  </div>
                ))}
              </div>

              {/* Total Value */}
              <div className="bg-primary/5 rounded-xl border-2 border-primary p-4 flex flex-col justify-center items-center shadow-sm">
                <div className="text-[13px] text-muted-foreground mb-0.5">Total Project Value</div>
                <div className="text-[36px] font-black text-primary">{fmt(totalValue)}</div>
                <div className="text-[13px] text-muted-foreground">Over {duration[0]} years</div>
              </div>

              {/* AI Notes */}
              {aiData?.notes && (
                <div className="bg-primary/5 rounded-xl border border-primary/20 p-4 flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <p className="text-[13px] text-foreground leading-snug">{aiData.notes}</p>
                </div>
              )}

              {/* AI badge */}
              <div className="text-center">
                <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-semibold ${aiData ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                  {aiData ? "✓ AI-powered estimates for " + city : "Using default estimates — click 'Get AI Estimate' for location data"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide10Calculator;
