import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { country, city, assetType, landAcres, durationYears } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const prompt = `You are an energy analyst. Given the following project parameters, provide realistic estimates based on real-world data for that specific location.

Location: ${city}, ${country}
Asset Type: ${assetType} (Solar / Wind / Hybrid)
Land Area: ${landAcres} acres
Duration: ${durationYears} years

Return a JSON object with these exact fields (numbers only, no units):
- kwhPerSqftPerYear: realistic kWh per sq ft per year for ${assetType} energy in ${city}, ${country} (consider local solar irradiance or wind speeds)
- co2OffsetTonsPerYear: total CO2 offset in metric tons per year for the full land area
- revenuePerKwhUsd: realistic revenue per kWh in USD for that country's energy market
- capacityFactorPercent: realistic capacity factor percentage for ${assetType} in that location
- peakCapacityKw: estimated peak capacity in kW for the land area
- avgSunHoursOrWindSpeed: average daily sun hours (for solar) or average wind speed in m/s (for wind)
- localElectricityPriceUsd: local electricity price per kWh in USD
- notes: one sentence about why this location is good or challenging for ${assetType}

Be realistic and use location-specific data. For hybrid, blend solar and wind estimates.
Return ONLY valid JSON, no markdown.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: "You are a precise energy data analyst. Always return valid JSON only." },
          { role: "user", content: prompt },
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limited, please try again shortly." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted." }), {
          status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      throw new Error("AI gateway error");
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || "";
    
    // Parse JSON from response, stripping markdown fences if present
    let cleaned = content.trim();
    if (cleaned.startsWith("```")) {
      cleaned = cleaned.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
    }
    
    const estimates = JSON.parse(cleaned);

    return new Response(JSON.stringify(estimates), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("energy-estimate error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
