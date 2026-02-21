import SlideLayout from "../SlideLayout";
import { Brain, Wind, Leaf, FileCheck, DollarSign, Zap, Star } from "lucide-react";

const Slide11Business = () => (
  <SlideLayout>
    <div className="w-full h-full overflow-hidden relative bg-white">
      {/* Graph-paper grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #c7d2d8 1px, transparent 1px), linear-gradient(to bottom, #c7d2d8 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.35,
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-1 pointer-events-none" style={{ background: "linear-gradient(90deg, #16a34a, #2563eb, #7c3aed)" }} />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-14 pt-8 pb-5">
        {/* Header */}
        <div className="text-center mb-4 animate-fade-in">
          <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[13px] font-bold tracking-widest uppercase mb-2">
            Revenue Streams
          </span>
          <h2 className="text-[40px] font-extrabold text-foreground leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            High-Margin, Recurring, <span className="text-primary">UAE & Saudi</span>
          </h2>
          <p className="text-[15px] text-muted-foreground mt-1">
            SaaS-first platform monetizing clean energy across GCC intelligence, markets & carbon — zero hardware.
          </p>
        </div>

        {/* PRIMARY ENGINE — VoltIQ */}
        <div
          className="w-full rounded-2xl border-2 border-blue-500/30 bg-gradient-to-r from-blue-50/80 to-indigo-50/60 p-5 mb-4 animate-fade-in relative overflow-hidden"
          style={{ animationDelay: "0.1s", animationFillMode: "forwards", opacity: 0 }}
        >
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border-2 border-blue-600/25 flex items-center justify-center shrink-0">
              <Brain className="w-7 h-7 text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1 flex-wrap">
                <h3 className="text-[24px] font-black text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  VoltIQ™ — Energy Intelligence OS
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[11px] font-bold">SaaS + Savings Share</span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest">
                  <Star className="w-3 h-3" /> Primary Revenue Engine
                </span>
              </div>
              <p className="text-[13px] text-muted-foreground mb-3">Primary recurring revenue layer — the core SaaS platform driving valuation</p>
              <div className="grid grid-cols-4 gap-3">
                <div className="rounded-xl bg-white border border-blue-200/60 p-3 text-center">
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-0.5">Starter</div>
                  <div className="text-[18px] font-black text-blue-600">$8K–$14K</div>
                  <div className="text-[10px] text-muted-foreground">ARR per customer</div>
                </div>
                <div className="rounded-xl bg-white border border-blue-200/60 p-3 text-center">
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-0.5">Professional</div>
                  <div className="text-[18px] font-black text-blue-600">$28K–$48K</div>
                  <div className="text-[10px] text-muted-foreground">ARR per customer</div>
                </div>
                <div className="rounded-xl bg-white border border-blue-200/60 p-3 text-center">
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-0.5">Enterprise</div>
                  <div className="text-[18px] font-black text-blue-600">$72K+</div>
                  <div className="text-[10px] text-muted-foreground">ARR per customer</div>
                </div>
                <div className="rounded-xl bg-white border border-blue-200/60 p-3 text-center">
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-0.5">WattWise AI</div>
                  <div className="text-[18px] font-black text-blue-600">20%</div>
                  <div className="text-[10px] text-muted-foreground">of energy savings</div>
                </div>
              </div>
            </div>
            <div className="text-right shrink-0 pl-3">
              <div className="text-[32px] font-black text-blue-600 leading-none">85–90%</div>
              <div className="text-[11px] text-muted-foreground uppercase tracking-wider mt-1">Gross Margin</div>
            </div>
          </div>
        </div>

        {/* EXPANSION ENGINES */}
        <div className="w-full mb-3">
          <div className="flex items-center gap-2 mb-2 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards", opacity: 0 }}>
            <div className="h-px flex-1 bg-border/40" />
            <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest px-3">Expansion & Monetization Layer</span>
            <div className="h-px flex-1 bg-border/40" />
          </div>
          <div className="grid grid-cols-3 gap-3 animate-fade-in" style={{ animationDelay: "0.25s", animationFillMode: "forwards", opacity: 0 }}>
            {/* GridLink */}
            <div className="rounded-xl bg-white border-t-[3px] border-violet-500 p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/25 flex items-center justify-center">
                  <Wind className="w-4 h-4 text-violet-600" />
                </div>
                <div>
                  <h4 className="text-[15px] font-extrabold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>GridLink™</h4>
                  <p className="text-[10px] text-muted-foreground">Renewable Procurement</p>
                </div>
                <span className="ml-auto text-[15px] font-black text-violet-600">~70–80%</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" /><span className="text-[12px] text-foreground/80">PPA commission: 8% • VPPA: 6%</span></div>
                <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" /><span className="text-[12px] font-bold text-violet-700">Commission on AED 1.8M–6.2M PPAs</span></div>
              </div>
            </div>

            {/* RECMatrix */}
            <div className="rounded-xl bg-white border-t-[3px] border-orange-500 p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/25 flex items-center justify-center">
                  <Leaf className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-[15px] font-extrabold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>RECMatrix™</h4>
                  <p className="text-[10px] text-muted-foreground">Carbon Marketplace</p>
                </div>
                <span className="ml-auto text-[15px] font-black text-orange-600">~75–85%</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" /><span className="text-[12px] text-foreground/80">8% REC markup + carbon spreads</span></div>
                <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" /><span className="text-[12px] font-bold text-orange-700">55–85% customer attach rate</span></div>
              </div>
            </div>

            {/* CarbonOS */}
            <div className="rounded-xl bg-white border-t-[3px] border-yellow-500 p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-yellow-500/10 border border-yellow-500/25 flex items-center justify-center">
                  <FileCheck className="w-4 h-4 text-yellow-600" />
                </div>
                <div>
                  <h4 className="text-[15px] font-extrabold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>CarbonOS™</h4>
                  <p className="text-[10px] text-muted-foreground">Compliance & ESG AI</p>
                </div>
                <span className="ml-auto text-[15px] font-black text-yellow-600">~85%</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0" /><span className="text-[12px] text-foreground/80">CarbonLedger™ + AuditTrail360™</span></div>
                <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0" /><span className="text-[12px] font-bold text-yellow-700">Enterprise ESG & compliance buyers</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICES ROW */}
        <div className="w-full mb-4">
          <div className="grid grid-cols-2 gap-3 animate-fade-in" style={{ animationDelay: "0.35s", animationFillMode: "forwards", opacity: 0 }}>
            {/* GridForge */}
            <div className="rounded-xl bg-white border border-border/40 p-3.5 shadow-sm flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[14px] font-extrabold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>GridForge™</h4>
                <p className="text-[10px] text-muted-foreground">Implementation & Project Orchestration</p>
              </div>
              <div className="text-right shrink-0">
                <div className="text-[14px] font-black text-emerald-600">~80%</div>
                <div className="text-[10px] text-muted-foreground">Recurring + Fee</div>
              </div>
            </div>

            {/* CapitalFlow */}
            <div className="rounded-xl bg-white border border-border/40 p-3.5 shadow-sm flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center shrink-0">
                <DollarSign className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[14px] font-extrabold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>CapitalFlow™</h4>
                <p className="text-[10px] text-muted-foreground">Financing & Incentive Intelligence</p>
              </div>
              <div className="text-right shrink-0">
                <div className="text-[14px] font-black text-emerald-600">~70–75%</div>
                <div className="text-[10px] text-muted-foreground">Fee-Based</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom metrics bar */}
        <div
          className="w-full rounded-2xl flex items-center justify-around py-3 px-8 animate-fade-in"
          style={{
            background: "linear-gradient(90deg, #14532d 0%, #166534 50%, #14532d 100%)",
            animationDelay: "0.5s",
            animationFillMode: "forwards",
            opacity: 0,
          }}
        >
          <div className="text-center">
            <div className="text-[22px] font-extrabold text-white">76–89%</div>
            <div className="text-[11px] text-green-200">Gross Margin</div>
          </div>
          <div className="w-px h-8 bg-white/20" />
          <div className="text-center">
            <div className="text-[22px] font-extrabold text-white">6 Revenue Engines</div>
            <div className="text-[11px] text-green-200">SaaS + Transactions + Compliance</div>
          </div>
          <div className="w-px h-8 bg-white/20" />
          <div className="text-center">
            <div className="text-[22px] font-extrabold text-white">Zero Hardware Risk</div>
            <div className="text-[11px] text-green-200">Asset-Light Model</div>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide11Business;
