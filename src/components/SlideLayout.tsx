import { useEffect, useRef, useState, ReactNode } from "react";

interface SlideLayoutProps {
  children: ReactNode;
  className?: string;
}

const SlideLayout = ({ children, className = "" }: SlideLayoutProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const resize = () => {
      if (!containerRef.current) return;
      const { clientWidth: w, clientHeight: h } = containerRef.current;
      setScale(Math.min(w / 1920, h / 1080));
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div ref={containerRef} className="slide-container">
      <div
        className="slide-scaler"
        style={{ transform: `scale(${scale})` }}
      >
        <div className={`w-full h-full grid-bg overflow-hidden relative ${className}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default SlideLayout;
