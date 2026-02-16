import { useState, useEffect, useCallback, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PitchDeckProps {
  slides: ReactNode[];
}

const PitchDeck = ({ slides }: PitchDeckProps) => {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const goTo = useCallback((i: number) => {
    setCurrent(Math.max(0, Math.min(total - 1, i)));
  }, [total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); goTo(current + 1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); goTo(current - 1); }
      if (e.key === "Home") goTo(0);
      if (e.key === "End") goTo(total - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, goTo, total]);

  return (
    <div className="relative w-screen h-screen bg-background overflow-hidden select-none">
      {/* Slide */}
      <div className="w-full h-full">
        {slides[current]}
      </div>

      {/* Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">
        <button
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          className="p-2 rounded-full bg-foreground/10 hover:bg-foreground/20 disabled:opacity-30 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>

        <div className="flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 h-2.5 bg-primary"
                  : "w-2.5 h-2.5 bg-foreground/20 hover:bg-foreground/40"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => goTo(current + 1)}
          disabled={current === total - 1}
          className="p-2 rounded-full bg-foreground/10 hover:bg-foreground/20 disabled:opacity-30 transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>
      </div>

      {/* Counter */}
      <div className="absolute bottom-6 right-8 text-sm text-muted-foreground font-mono z-50">
        {current + 1} / {total}
      </div>
    </div>
  );
};

export default PitchDeck;
