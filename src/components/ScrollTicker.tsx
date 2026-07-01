"use client";

export default function ScrollTicker() {
  const items = [
    "High Frequency Trading",
    "Low Latency Systems",
    "Quantitative Research",
    "FPGA Acceleration",
    "Market Data",
    "C++ Development",
    "Exchange Connectivity",
    "Algorithmic Trading",
    "Execution Systems",
    "Performance Engineering",
  ];

  return (
    <div className="relative overflow-hidden py-6 bg-xythera-panel/30 border-y border-xythera-border/50">
      <div className="flex whitespace-nowrap gap-0 animate-ticker">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 mx-6 font-heading text-xs md:text-sm tracking-[0.2em] uppercase text-xythera-text-dim/60"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-xythera-cyan/30" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
