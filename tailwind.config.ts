import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neutral-first palette: black establishes structure while cream and
        // pale green create the page rhythm. Accent tokens stay restrained.
        // Existing semantic token names are retained to avoid changing layout
        // or component behavior during the theme-only transformation.
        bg: {
          DEFAULT: "#111111",
          soft: "#181818",
          light: "#F5F0E6",
        },
        ink: {
          DEFAULT: "#111111",
          muted: "#5F5F5F",
        },
        brand: {
          gold: "#111111",
          "gold-light": "#111111",
          teal: "#2F6B42",
          mint: "#F0FFDF",
          rust: "#D64545",
        },
        line: {
          dark: "rgba(255,255,255,0.08)",
          light: "rgba(16,24,32,0.08)",
        },
        // Same palette under literal names, used by the Services section.
        corp: {
          navy: "#111111",
          navySoft: "#181818",
          gold: "#111111",
          teal: "#2F6B42",
          bg: "#F5F0E6",
          ink: "#111111",
          muted: "#5F5F5F",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "10px",
        md: "18px",
        lg: "24px",
        xl: "28px",
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(17,17,17,0.18)",
        teal: "0 0 60px -14px rgba(47,107,66,0.18)",
        card: "0 12px 40px -18px rgba(17,17,17,0.18)",
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "gradient-teal-gold": "linear-gradient(115deg,#2F6B42 0%,#111111 100%)",
        "gradient-gold-light": "linear-gradient(115deg,#111111 0%,#111111 100%)",
        "gradient-gold-rust": "linear-gradient(115deg,#111111 0%,#2F6B42 100%)",
        "radial-fade":
          "radial-gradient(60% 60% at 50% 40%, rgba(240,255,223,0.16) 0%, rgba(17,17,17,0) 70%)",
      },
      maxWidth: {
        container: "1360px",
      },
      spacing: {
        "section-y": "96px",
        "section-y-mobile": "64px",
      },
      keyframes: {
        pulseSoft: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        dashMove: {
          to: { strokeDashoffset: "-200" },
        },
        kenBurns: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.06)" },
        },
      },
      animation: {
        "pulse-soft": "pulseSoft 3.5s ease-in-out infinite",
        "float-slow": "floatSlow 7s ease-in-out infinite",
        "dash-move": "dashMove 6s linear infinite",
        "ken-burns": "kenBurns 22s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
