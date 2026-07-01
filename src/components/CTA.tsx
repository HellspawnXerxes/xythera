"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-xythera-secondary">
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,240,255,0.04) 0%, transparent 60%)",
        }}
      />

      <div ref={ref} className="section-container relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="section-title text-white mb-6"
        >
          Ready to build the{" "}
          <span className="text-gradient-cyan">future</span> of trading?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="section-subtitle mx-auto mb-10"
        >
          Let&apos;s discuss how Xythera can engineer the infrastructure your
          firm needs to compete at the highest level.
        </motion.p>

        <motion.a
          href="/contact"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="magnetic-btn text-base"
        >
          Contact Xythera
        </motion.a>
      </div>
    </section>
  );
}
