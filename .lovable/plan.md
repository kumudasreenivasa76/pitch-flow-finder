
# Fix All VC-Identified Financial Issues

## Overview
Address the 5 critical issues from the VC audit to strengthen the financial narrative and credibility of the pitch deck.

---

## Fix 1: Payback Period Inconsistency (Slide16UnitEcon)
The CAC Payback card says **~20 months** but the bottom summary bar says **<12 months**. These contradict each other.

**Action:** Standardize to **~20 months** everywhere (the mathematically correct number: $174K CAC / ~$8,700 monthly GP = ~20 months). Update the bottom bar "Payback" from "<12 mo" to "~20 mo" and the Investor KPI Strip "Payback Period" value from "< 12 mo" to "~20 mo".

---

## Fix 2: Reorder Slides — Traction Before Projections (Index.tsx)
VCs want to see **proof first, then projections**. Currently: Projections (Slide 18) comes before Traction (Slide 19).

**Action:** Swap the order so Traction (First 90 Days) appears immediately after Unit Economics / Segments, and Projections (10-Year Dashboard) comes after. New order in the financial section:
```text
... Slide16bSegments
    Slide19Pipeline (Traction - moved up)
    Slide18Projections (Projections - moved down)
    Slide20Ask
```

---

## Fix 3: Redesign GTM Slide for Specificity (Slide13GTM)
The current Gantt chart is too generic. VCs want to see specific sales motions and channel economics.

**Action:** Replace the Gantt + status grid layout with a more actionable GTM slide containing:
- **Sales Motion**: Two-column layout showing PLG (self-serve) vs. Enterprise (direct sales) paths
- **Channel Strategy**: Specific acquisition channels with estimated CAC per channel
- **First 10 Customers Playbook**: Concrete steps (pilot schools, direct enterprise outreach, marketplace seeding)
- **Key Milestones**: Timeline with specific revenue triggers (not generic phase names)
- Keep the bottom metrics bar but update values to reflect channel-specific targets

---

## Fix 4: Add "Today vs Target" on Unit Economics (Slide16UnitEcon)
Show current 90-day unit economics alongside FY30 targets so VCs see trajectory.

**Action:** Add a "Today vs FY30" comparison row at the top of the slide, showing:
- Today: ARPU ~$2,225 / Margin ~78% / LTV/CAC ~4.8x / Payback ~12mo
- FY30 Target: ARPU $124K / Margin 84% / LTV/CAC 5.0x / Payback ~20mo

This will be a compact horizontal comparison strip between the header and the main 3-column grid.

---

## Fix 5: Add Assumptions to Projections (Slide18Projections)
The 442x revenue growth lacks visible assumptions, hurting credibility.

**Action:** Add a "Key Assumptions" card in the right column showing:
- Headcount scaling (e.g., 10 FY26 to 240 FY35)
- CAC trends (declining with scale)
- Net Revenue Retention (>120%)
- Expansion rate assumptions
- Add a visual emphasis on FY26-FY28 as "Near-Term Focus" (highlight first 3 years in the chart) with FY29+ labeled as "Scale Targets"

---

## Technical Details

### Files Modified
1. **src/components/slides/Slide16UnitEcon.tsx** — Fix payback inconsistency + add Today vs FY30 comparison strip
2. **src/pages/Index.tsx** — Swap Slide19Pipeline and Slide18Projections order
3. **src/components/slides/Slide13GTM.tsx** — Full redesign with PLG vs Enterprise sales motions, channel strategy, and first-10-customers playbook
4. **src/components/slides/Slide18Projections.tsx** — Add Key Assumptions card and near-term focus visual treatment

### No new dependencies required
All changes use existing React, Tailwind, and Recharts patterns already in the codebase.
