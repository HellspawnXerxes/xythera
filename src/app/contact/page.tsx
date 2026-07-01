"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Check } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98260 70265",
    href: "tel:+919826070265",
    copyText: "+919826070265",
  },
  {
    icon: Mail,
    label: "Email",
    value: "xythera.support@gmail.com",
    href: "mailto:xythera.support@gmail.com",
    copyText: "xythera.support@gmail.com",
  },
  {
    icon: MapPin,
    label: "Operations",
    value: "Global — Multi-Office",
    href: null,
    copyText: null,
  },
];

function ContactCard({
  item,
  index,
}: {
  item: (typeof contactItems)[0];
  index: number;
}) {
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleCopy = async () => {
    if (!item.copyText) return;
    try {
      await navigator.clipboard.writeText(item.copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="glass-panel p-8 md:p-10 flex flex-col items-center text-center group
                 hover:border-xythera-cyan/20 transition-all duration-500"
    >
      <div className="w-12 h-12 rounded-full bg-xythera-cyan/[0.06] border border-xythera-cyan/10 flex items-center justify-center mb-5
                      group-hover:bg-xythera-cyan/[0.1] group-hover:border-xythera-cyan/20 transition-all duration-500">
        <Icon className="w-5 h-5 text-xythera-cyan/60 group-hover:text-xythera-cyan transition-colors duration-500" />
      </div>

      <span className="font-heading text-[10px] tracking-[0.25em] uppercase text-xythera-text-dim mb-3">
        {item.label}
      </span>

      {item.href ? (
        <a
          href={item.href}
          className="font-inter text-sm md:text-base text-white/80 hover:text-xythera-cyan transition-colors mb-4"
        >
          {item.value}
        </a>
      ) : (
        <span className="font-inter text-sm md:text-base text-white/80 mb-4">
          {item.value}
        </span>
      )}

      {item.copyText && (
        <button
          onClick={handleCopy}
          className="font-mono text-[10px] tracking-widest uppercase px-4 py-2 rounded-full
                     border border-xythera-border text-xythera-text-dim
                     hover:border-xythera-cyan/30 hover:text-xythera-cyan/80
                     transition-all duration-300 inline-flex items-center gap-1.5"
        >
          {copied ? (
            <>
              <Check size={10} className="text-green-400" />
              Copied
            </>
          ) : (
            "Copy"
          )}
        </button>
      )}
    </motion.div>
  );
}

export default function Contact() {
  const headlineRef = useRef(null);
  const headlineInView = useInView(headlineRef, { once: true });

  return (
    <main className="min-h-screen bg-xythera-background relative overflow-hidden pt-24 md:pt-32">
      <div className="absolute inset-0 cyber-grid opacity-30" />

      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,240,255,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="section-container relative z-10">
        <div ref={headlineRef} className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={headlineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="section-label mb-4 block"
          >
            Contact Xythera
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={headlineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="section-title text-white mb-6"
          >
            Get in <span className="text-gradient-cyan">touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headlineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="section-subtitle mx-auto"
          >
            Ready to engineer your edge? Reach out to our team and let&apos;s
            build the future of trading infrastructure together.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-4xl mx-auto">
          {contactItems.map((item, i) => (
            <ContactCard key={item.label} item={item} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-16 md:mt-20"
        >
          <p className="font-inter text-sm text-xythera-text-dim">
            Prefer to send us a message directly?{" "}
            <a
              href="mailto:xythera.support@gmail.com"
              className="text-xythera-cyan hover:text-white transition-colors underline underline-offset-4 decoration-xythera-cyan/30"
            >
              xythera.support@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </main>
  );
}
