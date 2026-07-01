"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-xythera-secondary relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,240,255,0.3) 0%, transparent 70%)",
        }}
      />

      <div ref={ref} className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label mb-4 block">About Xythera</span>
            <h2 className="section-title mb-6 text-white">
              Precision at the{" "}
              <span className="text-gradient-cyan">nanosecond</span> scale
            </h2>
            <div className="w-12 h-[2px] bg-xythera-cyan/50 mb-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <p className="font-inter text-base md:text-lg text-xythera-text-muted leading-relaxed">
              Xythera is an elite quantitative engineering firm specializing in the
              design and deployment of ultra-low latency trading infrastructure. We
              serve the world&apos;s most demanding HFT firms, proprietary trading
              desks, hedge funds, and exchanges — building systems where every
              nanosecond carries economic consequence.
            </p>
            <p className="font-inter text-base md:text-lg text-xythera-text-muted leading-relaxed">
              Our team spans deep expertise across C++ and FPGA-based acceleration,
              market data engineering, exchange connectivity, execution systems, and
              quantitative research infrastructure. We don&apos;t just optimize for
              speed — we engineer for certainty at scale, where reliability is as
              critical as latency.
            </p>
            <p className="font-inter text-base md:text-lg text-xythera-text-muted leading-relaxed">
              From firmware to feed handlers, from kernel bypass to colocation
              architecture, Xythera delivers the infrastructure that defines the
              edge between profit and loss in modern electronic markets.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-xythera-border rounded-2xl overflow-hidden"
        >
          {[
            { value: "15+", label: "Years Trading Infrastructure" },
            { value: "25+", label: "Technologies Mastered" },
            { value: "50+", label: "Global Markets" },
            { value: "Sub-µs", label: "End-to-End Latency" },
          ].map((item, i) => (
            <div
              key={item.label}
              className="bg-xythera-panel p-6 md:p-8 text-center"
            >
              <div className="font-display text-2xl md:text-3xl font-bold text-white mb-1">
                {item.value}
              </div>
              <div className="font-inter text-xs md:text-sm text-xythera-text-dim">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
