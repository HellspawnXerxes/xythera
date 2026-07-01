"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Zap,
  Cpu,
  BarChart3,
  Network,
  Database,
  Gauge,
  Globe,
  Cog,
} from "lucide-react";

const capabilities = [
  {
    icon: Zap,
    title: "Ultra Low Latency Systems",
    desc: "Sub-microsecond trading infrastructure engineered from kernel to wire.",
  },
  {
    icon: Cpu,
    title: "High Frequency Trading",
    desc: "Strategies and systems designed for markets measured in nanoseconds.",
  },
  {
    icon: BarChart3,
    title: "Quantitative Research",
    desc: "Statistical modeling, machine learning, and alpha generation at scale.",
  },
  {
    icon: Network,
    title: "Algorithmic Trading",
    desc: "Smart order routing, execution algorithms, and real-time risk controls.",
  },
  {
    icon: Database,
    title: "Market Data Engineering",
    desc: "Feed handlers, normalization, and tick-data infrastructure for global venues.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    desc: "CPU pinning, NUMA awareness, cache-line optimization, and kernel bypass.",
  },
  {
    icon: Globe,
    title: "Exchange Connectivity",
    desc: "Direct market access, FIX/OUCH protocols, and colocation architecture.",
  },
  {
    icon: Cog,
    title: "Execution Systems",
    desc: "Order management, position keeping, and P&L attribution at nanosecond precision.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Capabilities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-xythera-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.02] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(153,0,255,0.3) 0%, transparent 70%)",
        }}
      />

      <div ref={ref} className="section-container relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="section-label mb-4 block">Core Capabilities</span>
          <h2 className="section-title mb-6 text-white">
            Engineered for markets that{" "}
            <span className="text-gradient-purple">never sleep</span>
          </h2>
          <p className="section-subtitle">
            Every capability is built from first principles. No black boxes.
            No shortcuts. Just precision engineering for the world&apos;s most
            demanding financial markets.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
        >
          {capabilities.map((cap) => (
            <motion.div
              key={cap.title}
              variants={cardVariants}
              className="futuristic-card group cursor-default"
            >
              <div className="mb-4">
                <cap.icon className="w-6 h-6 text-xythera-text-dim/40 group-hover:text-xythera-cyan transition-colors duration-500" />
              </div>
              <h3 className="font-heading text-sm md:text-base font-semibold text-white mb-2 group-hover:text-xythera-cyan transition-colors duration-500">
                {cap.title}
              </h3>
              <p className="font-inter text-xs md:text-sm text-xythera-text-dim leading-relaxed">
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
