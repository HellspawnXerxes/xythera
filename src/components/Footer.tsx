"use client";

import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-xythera-background border-t border-xythera-border">
      <div className="section-container py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          <div>
            <a
              href="/"
              className="font-display text-sm tracking-[0.3em] text-white inline-block mb-4"
            >
              XYTHERA
            </a>
            <p className="font-inter text-sm text-xythera-text-dim leading-relaxed max-w-xs">
              Ultra-low latency trading infrastructure for the world&apos;s most
              demanding quantitative firms.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-[10px] tracking-[0.25em] uppercase text-xythera-text-dim mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-inter text-sm text-xythera-text-muted hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-y-1 group-hover:opacity-60 group-hover:translate-y-0 transition-all duration-300"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-[10px] tracking-[0.25em] uppercase text-xythera-text-dim mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:xythera.support@gmail.com"
                  className="font-inter text-sm text-xythera-text-muted hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <Mail size={12} className="text-xythera-cyan/60" />
                  xythera.support@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919826070265"
                  className="font-inter text-sm text-xythera-text-muted hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <Phone size={12} className="text-xythera-cyan/60" />
                  +91 98260 70265
                </a>
              </li>
              <li>
                <span className="font-inter text-sm text-xythera-text-muted inline-flex items-center gap-2">
                  <MapPin size={12} className="text-xythera-cyan/60" />
                  Global Operations
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-xythera-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-inter text-xs text-xythera-text-dim">
            &copy; {new Date().getFullYear()} Xythera. All rights reserved.
          </p>
          <p className="font-mono text-[10px] text-xythera-text-dim/40 tracking-wider">
            ENGINEERED FOR SPEED
          </p>
        </div>
      </div>
    </footer>
  );
}
