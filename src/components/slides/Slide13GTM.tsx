import SlideLayout from "../SlideLayout";

const Slide13GTM = () => (
  <SlideLayout>
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-white overflow-hidden px-14 pt-8 pb-5">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.5,
        }}
      />

      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Header */}
        <div className="text-center mb-4 animate-fade-in">
          <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[13px] font-bold tracking-widest uppercase mb-2">
            Go-To-Market Strategy
          </span>
          <h2 className="text-[40px] font-extrabold text-foreground leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Two-Track <span className="text-primary">Sales Engine</span>
          </h2>
          <p className="text-[15px] text-muted-foreground mt-1">PLG for volume · Direct sales for enterprise · Land & expand across UAE & KSA</p>
        </div>

        {/* Main: PLG vs Enterprise */}
        <div className="grid grid-cols-2 gap-4 w-full animate-fade-in" style={{ animationDelay: "0.05s" }}>

          {/* PLG Track */}
          <div className="flex flex-col gap-3">
            <div className="rounded-xl border-2 border-emerald-500/30 bg-white shadow-sm flex flex-col">
              <div className="px-4 py-2.5 bg-emerald-500 text-white text-[14px] font-extrabold rounded-t-[10px] flex items-center gap-2">
                <span>🚀</span> PLG — Self-Serve
              </div>
              <div className="px-4 py-3">
                <div className="space-y-2">
                  <MotionStep step="1" text="Free energy audit via platform → lead capture" />
                  <MotionStep step="2" text="Self-serve SaaS onboarding (AED 365–AED 1,835/mo)" />
                  <MotionStep step="3" text="Usage-based expansion into monitoring & credits" />
                  <MotionStep step="4" text="Community marketplace seeding → viral loop" />
                </div>
                <div className="mt-3 pt-3 border-t border-border/40 grid grid-cols-2 gap-2">
                  <MiniMetric label="Target CAC" value="$2,500" />
                  <MiniMetric label="Avg ACV" value="$6K" />
                  <MiniMetric label="Conversion" value="5–8%" />
                  <MiniMetric label="Time to Close" value="< 14 days" />
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise Track */}
          <div className="flex flex-col gap-3">
            <div className="rounded-xl border-2 border-blue-500/30 bg-white shadow-sm flex flex-col">
              <div className="px-4 py-2.5 bg-blue-600 text-white text-[14px] font-extrabold rounded-t-[10px] flex items-center gap-2">
                <span>🏢</span> Enterprise — Direct Sales
              </div>
              <div className="px-4 py-3">
                <div className="space-y-2">
                  <MotionStep step="1" text="Outbound to data center ops & facility managers in UAE/KSA" />
                  <MotionStep step="2" text="Custom pilot (60-day free POC with ROI report)" />
                  <MotionStep step="3" text="Multi-year PPA execution + compliance module" />
                  <MotionStep step="4" text="Account expansion: additional sites + micro-grid" />
                </div>
                <div className="mt-3 pt-3 border-t border-border/40 grid grid-cols-2 gap-2">
                  <MiniMetric label="Target CAC" value="$85K" />
                  <MiniMetric label="Avg ACV" value="$124K" />
                  <MiniMetric label="Win Rate" value="25–35%" />
                  <MiniMetric label="Sales Cycle" value="90–120 days" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* First 10 Customers Playbook */}
        <div className="mt-3 rounded-xl border-2 border-amber-400/40 bg-amber-50/30 p-4 animate-fade-in" style={{ animationDelay: "0.15s" }}>
          <div className="text-[12px] font-bold uppercase tracking-widest text-amber-700 mb-2">🎯 First 10 Customers Playbook</div>
          <div className="grid grid-cols-5 gap-3">
            {[
              { n: "1–3", who: "UAE Schools", how: "Direct outreach to sustainability-focused schools & universities in UAE", status: "✅ In Progress" },
              { n: "4–5", who: "SME Data Centers", how: "LinkedIn + warm intros via Dubai/Riyadh cloud infra networks", status: "✅ Pipeline" },
              { n: "6–7", who: "Community Solar", how: "Partner with GCC solar installers for co-sell", status: "🟡 Outreach" },
              { n: "8–9", who: "Enterprise DC", how: "60-day POC with ROI guarantee to tier-2 operators in KSA", status: "🟡 Qualifying" },
              { n: "10", who: "Gov / Municipal", how: "RFP response for UAE municipal renewable energy project", status: "📋 Tracking" },
            ].map((c) => (
              <div key={c.n} className="text-center">
                <div className="text-[18px] font-black text-amber-700">#{c.n}</div>
                <div className="text-[11px] font-bold text-foreground">{c.who}</div>
                <div className="text-[9px] text-muted-foreground mt-0.5 leading-tight">{c.how}</div>
                <div className="text-[9px] font-semibold text-amber-600 mt-1">{c.status}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Channel Economics bar */}
        <div className="flex items-center justify-center gap-5 mt-3 animate-fade-in" style={{ animationDelay: "0.25s" }}>
          {[
            { label: "Blended CAC", value: "$45K" },
            { label: "PLG % of Pipeline", value: "60%" },
            { label: "Enterprise ACV", value: "$124K" },
            { label: "First Revenue", value: "Q1 Y1" },
            { label: "ARR Target Y1", value: "$500K" },
          ].map((m) => (
            <div key={m.label} className="flex items-center gap-3 px-5 py-2.5 rounded-full border-2 border-border/40 bg-white shadow-sm">
              <span className="text-[22px] font-black text-primary" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{m.value}</span>
              <span className="text-[12px] text-muted-foreground">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

/* Sub-components */
const MotionStep = ({ step, text }: { step: string; text: string }) => (
  <div className="flex items-start gap-2">
    <div className="w-5 h-5 rounded-full bg-primary/10 text-primary text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">{step}</div>
    <p className="text-[12px] text-foreground leading-snug">{text}</p>
  </div>
);

const MiniMetric = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-muted/50 rounded-lg px-2 py-1.5 text-center">
    <div className="text-[14px] font-black text-primary">{value}</div>
    <div className="text-[8px] text-muted-foreground font-semibold">{label}</div>
  </div>
);

export default Slide13GTM;