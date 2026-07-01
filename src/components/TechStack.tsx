"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Cpu,
  Terminal,
  GitBranch,
  CircuitBoard,
  Radio,
  Network,
  Workflow,
  Cloud,
  LineChart,
  Box,
  Binary,
} from "lucide-react";

const technologies = [
  { name: "C++", icon: Code2, level: "Expert" },
  { name: "Python", icon: Binary, level: "Expert" },
  { name: "Linux", icon: Terminal, level: "Expert" },
  { name: "CUDA", icon: Cpu, level: "Advanced" },
  { name: "FPGA", icon: CircuitBoard, level: "Expert" },
  { name: "FIX Protocol", icon: GitBranch, level: "Expert" },
  { name: "Market Data APIs", icon: Radio, level: "Expert" },
  { name: "High Perf Networking", icon: Network, level: "Expert" },
  { name: "Multithreading", icon: Workflow, level: "Expert" },
  { name: "Distributed Computing", icon: Cloud, level: "Advanced" },
  { name: "Real-Time Analytics", icon: LineChart, level: "Expert" },
  { name: "ZeroMQ / IPC", icon: Box, level: "Advanced" },
];

const levelStyles: Record<string, string> = {
  Expert: "text-xythera-cyan border-xythera-cyan/20 bg-xythera-cyan/[0.04]",
  Advanced: "text-xythera-purple border-xythera-purple/20 bg-xythera-purple/[0.04]",
};

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-xythera-secondary relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div ref={ref} className="section-container relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="section-label mb-4 block">Technology Stack</span>
          <h2 className="section-title mb-6 text-white">
            Built with <span className="text-gradient-cyan">precision tools</span>
          </h2>
          <p className="section-subtitle">
            Every technology in our stack is selected for maximum performance.
            No bloat. No abstraction tax. Just raw capability.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {technologies.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: i * 0.04,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="glass-panel-light p-4 md:p-5 rounded-xl flex flex-col items-center text-center gap-2.5 group cursor-default
                           hover:bg-white/[0.05] transition-all duration-300"
              >
                <Icon className="w-5 h-5 text-xythera-text-dim/30 group-hover:text-xythera-cyan transition-colors duration-300" />
                <span className="font-heading text-xs md:text-sm font-semibold text-white/80 group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </span>
                <span
                  className={`font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-full border transition-colors duration-300 ${
                    levelStyles[tech.level]
                  }`}
                >
                  {tech.level}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
