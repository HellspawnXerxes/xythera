"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const values = [
  "Precision",
  "Speed",
  "Reliability",
  "Innovation",
  "Scale",
  "Excellence",
];

export default function Vision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-xythera-background relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,240,255,0.02) 0%, transparent 60%)",
        }}
      />

      <div ref={ref} className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="section-label mb-6 block"
          >
            Vision
          </motion.span>

          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute -left-4 md:-left-8 top-0 text-6xl md:text-8xl text-xythera-cyan/10 font-display leading-none select-none">
              &ldquo;
            </div>
            <p className="font-heading text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed mb-8 px-4 md:px-12">
              We are building the financial infrastructure of tomorrow — where
              speed is measured in nanoseconds, reliability is engineered into
              every layer, and innovation is the only constant.
            </p>
            <div className="absolute -right-4 md:-right-8 bottom-0 text-6xl md:text-8xl text-xythera-cyan/10 font-display leading-none select-none">
              &rdquo;
            </div>
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap justify-center gap-3 mt-12"
          >
            {values.map((v) => (
              <span
                key={v}
                className="font-heading text-xs tracking-[0.25em] uppercase px-4 py-2 rounded-full
                           border border-xythera-border text-xythera-text-dim/60
                           hover:border-xythera-cyan/20 hover:text-xythera-cyan/80
                           transition-all duration-300 cursor-default"
              >
                {v}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
