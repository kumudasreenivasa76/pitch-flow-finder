import SlideLayout from "../SlideLayout";
import { useState, useCallback } from "react";
import { Slider } from "@/components/ui/slider";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Sparkles, Sun, Wind, Zap, MapPin, TreePine, DollarSign, BatteryCharging, TrendingUp } from "lucide-react";


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

const ASSET_ICONS = { Solar: Sun, Wind: Wind, Hybrid: Zap };

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
  const [assetType, setAssetType] = useState<"Solar" | "Wind" | "Hybrid">("Solar");
  const [landArea, setLandArea] = useState([5]);
  const [duration, setDuration] = useState([20]);
  const [loading, setLoading] = useState(false);
  const [aiData, setAiData] = useState<AIEstimate | null>(null);
  const [error, setError] = useState("");

  const sqft = landArea[0] * 43560;
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
      setError("AI unavailable — using smart defaults.");
      setAiData(null);
    } finally {
      setLoading(false);
    }
  }, [country, city, assetType, landArea, duration]);

  const AssetIcon = ASSET_ICONS[assetType];

  const resultCards = [
    { icon: BatteryCharging, label: "Peak Capacity", value: aiData ? `${fmtN(aiData.peakCapacityKw)} kW` : `${fmtN(sqft * 0.004)} kW`, sub: aiData ? `${aiData.capacityFactorPercent}% capacity` : "Estimated", color: "from-emerald-500 to-teal-500" },
    { icon: Zap, label: "Energy Output", value: `${fmtN(kwhYear)} kWh`, sub: aiData ? `${aiData.avgSunHoursOrWindSpeed} ${assetType === "Wind" ? "m/s wind" : "sun hrs/day"}` : "Per year", color: "from-amber-500 to-orange-500" },
    { icon: TreePine, label: "CO₂ Offset", value: `${fmtN(co2)} tons`, sub: "Per year", color: "from-green-500 to-emerald-600" },
    { icon: DollarSign, label: "Revenue", value: fmt(revenueYear), sub: aiData ? `$${aiData.localElectricityPriceUsd}/kWh` : "Per year", color: "from-blue-500 to-indigo-500" },
  ];

  return (
    <SlideLayout>
      <div className="relative w-full h-full flex flex-col bg-white overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
            backgroundSize: "60px 60px", opacity: 0.5,
          }}
        />

        {/* Top gradient bar */}
        <div className="relative z-10 h-1.5 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 shrink-0" />

        <div className="relative z-10 flex flex-col h-full px-10 pt-5 pb-4">
          {/* Header row with image */}
          <div className="flex items-center gap-6 mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-primary/10 to-emerald-500/10 border border-primary/20 text-primary text-[12px] font-bold tracking-widest uppercase">
                  <Sparkles className="w-3.5 h-3.5" /> AI-Powered
                </span>
              </div>
              <h2 className="text-[40px] font-extrabold text-foreground leading-none" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Impact <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">Calculator</span>
              </h2>
              <p className="text-[14px] text-muted-foreground mt-1">Real-time location intelligence for clean energy projects.</p>
            </div>
            
          </div>

          {/* Main content */}
          <div className="grid grid-cols-[340px_1fr] gap-5 flex-1 min-h-0">
            {/* Left: Controls */}
            <div className="space-y-2.5">
              {/* Location */}
              <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-white to-secondary/30 p-3.5 shadow-sm">
                <div className="flex items-center gap-1.5 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  <label className="text-[11px] font-bold text-foreground uppercase tracking-wider">Location</label>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <select
                    value={country}
                    onChange={(e) => { setCountry(e.target.value); setCity(COUNTRIES_CITIES[e.target.value][0]); setAiData(null); }}
                    className="w-full text-[13px] bg-white rounded-lg px-2.5 py-2 border border-border/30 outline-none text-foreground font-medium"
                  >
                    {Object.keys(COUNTRIES_CITIES).map((c) => <option key={c}>{c}</option>)}
                  </select>
                  <select
                    value={city}
                    onChange={(e) => { setCity(e.target.value); setAiData(null); }}
                    className="w-full text-[13px] bg-white rounded-lg px-2.5 py-2 border border-border/30 outline-none text-foreground font-medium"
                  >
                    {(COUNTRIES_CITIES[country] || []).map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>

              {/* Asset Type */}
              <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-white to-secondary/30 p-3.5 shadow-sm">
                <label className="text-[11px] font-bold text-foreground uppercase tracking-wider block mb-2">Energy Source</label>
                <div className="flex gap-2">
                  {(["Solar", "Wind", "Hybrid"] as const).map((t) => {
                    const Icon = ASSET_ICONS[t];
                    return (
                      <button
                        key={t}
                        onClick={() => { setAssetType(t); setAiData(null); }}
                        className={`flex-1 py-2.5 rounded-xl text-[12px] font-bold transition-all flex items-center justify-center gap-1.5 ${
                          assetType === t
                            ? "bg-gradient-to-r from-primary to-emerald-600 text-white shadow-lg shadow-primary/25 scale-[1.02]"
                            : "bg-white text-foreground border border-border/30 hover:border-primary/40 hover:shadow-sm"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sliders */}
              <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-white to-secondary/30 p-3.5 shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <label className="text-[11px] font-bold text-foreground uppercase tracking-wider">Land Area</label>
                  <span className="text-[18px] font-black bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">{landArea[0]} acres</span>
                </div>
                <Slider value={landArea} onValueChange={(v) => { setLandArea(v); setAiData(null); }} min={1} max={100} step={1} />
                <div className="flex justify-between text-[10px] text-muted-foreground mt-1"><span>1</span><span>100 acres</span></div>
              </div>

              <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-white to-secondary/30 p-3.5 shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <label className="text-[11px] font-bold text-foreground uppercase tracking-wider">Project Duration</label>
                  <span className="text-[18px] font-black bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">{duration[0]} yrs</span>
                </div>
                <Slider value={duration} onValueChange={(v) => { setDuration(v); setAiData(null); }} min={5} max={30} step={1} />
                <div className="flex justify-between text-[10px] text-muted-foreground mt-1"><span>5</span><span>30 years</span></div>
              </div>

              {/* AI Button */}
              <button
                onClick={fetchEstimate}
                disabled={loading}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-primary to-emerald-600 text-white font-bold text-[13px] flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-primary/20 transition-all disabled:opacity-60 active:scale-[0.98]"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                {loading ? "Analyzing with AI..." : "⚡ Get AI Estimate"}
              </button>
              {error && <p className="text-[11px] text-amber-600 text-center font-medium">{error}</p>}
            </div>

            {/* Right: Results */}
            <div className="flex flex-col gap-3">
              {/* 4 result cards */}
              <div className="grid grid-cols-2 gap-3">
                {resultCards.map((r) => (
                  <div key={r.label} className="rounded-2xl border border-border/40 bg-white p-4 shadow-sm hover:shadow-md transition-shadow group">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${r.color} flex items-center justify-center shadow-sm`}>
                        <r.icon className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">{r.label}</span>
                    </div>
                    <div className="text-[26px] font-black text-foreground leading-tight group-hover:text-primary transition-colors">{r.value}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">{r.sub}</div>
                  </div>
                ))}
              </div>

              {/* Total Value - hero card */}
              <div className="rounded-2xl bg-gradient-to-r from-primary via-emerald-600 to-teal-500 p-5 flex items-center justify-between shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }} />
                <div className="relative z-10">
                  <div className="text-[12px] text-white/70 font-semibold uppercase tracking-wider">Total Project Value</div>
                  <div className="text-[42px] font-black text-white leading-none mt-0.5">{fmt(totalValue)}</div>
                  <div className="text-[13px] text-white/70 mt-1">Over {duration[0]} years • {city}</div>
                </div>
                <div className="relative z-10 flex flex-col items-center">
                  <TrendingUp className="w-10 h-10 text-white/40" />
                  <AssetIcon className="w-6 h-6 text-white/60 mt-1" />
                </div>
              </div>

              {/* AI Insight */}
              {aiData?.notes ? (
                <div className="rounded-2xl bg-gradient-to-r from-primary/5 to-emerald-500/5 border border-primary/15 p-3.5 flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center shrink-0 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-primary uppercase tracking-wider mb-0.5">AI Location Insight</div>
                    <p className="text-[12px] text-foreground leading-relaxed">{aiData.notes}</p>
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl bg-muted/30 border border-border/30 p-3 text-center">
                  <p className="text-[11px] text-muted-foreground">
                    Click <span className="font-bold text-primary">⚡ Get AI Estimate</span> for location-specific intelligence
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative z-10 bg-[#14532d] px-10 py-2.5 flex items-center justify-between shrink-0">
          <span className="text-[12px] text-emerald-200/80 font-medium">Powered by EcoGridia AI • Location-aware energy modeling</span>
          <span className={`text-[11px] font-semibold px-3 py-1 rounded-full ${aiData ? "bg-emerald-500/20 text-emerald-300" : "bg-white/10 text-white/50"}`}>
            {aiData ? `✓ AI estimates for ${city}` : "Default estimates"}
          </span>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide10Calculator;
