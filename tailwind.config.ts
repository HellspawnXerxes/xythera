import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        xythera: {
          background: "#050505",
          secondary: "#0A0A0A",
          panel: "#111111",
          border: "#1B1B1B",
          cyan: "#00f0ff",
          "cyan-dim": "rgba(0,240,255,0.4)",
          blue: "#0066ff",
          purple: "#9900ff",
          "purple-dim": "rgba(153,0,255,0.4)",
          text: {
            primary: "#FFFFFF",
            muted: "rgba(255,255,255,0.6)",
            dim: "rgba(255,255,255,0.35)",
          },
        },
      },
      fontFamily: {
        display: ["Syncopate", "sans-serif"],
        heading: ["Orbitron", "sans-serif"],
        body: ["Rajdhani", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        "ticker": "ticker 30s linear infinite",
        "ticker-reverse": "ticker-reverse 30s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "scan-line": "scan-line 8s linear infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "text-reveal": "text-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "counter": "counter 2s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "ticker-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "text-reveal": {
          "0%": { opacity: "0", transform: "translateY(100%) rotateX(-40deg)" },
          "100%": { opacity: "1", transform: "translateY(0) rotateX(0deg)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
