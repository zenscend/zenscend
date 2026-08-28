import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // No border radius anywhere. The 45deg cut in globals.css does that job.
    borderRadius: { none: "0" },
    extend: {
      colors: {
        ground: "#0b0c0e",
        surface: "#121417",
        line: "#1f2328",
        text: "#e6e8eb",
        dim: "#8b9198",
        structure: "#4100f5",
        signal: "#ff4632",
        // light zone: the page itself. Panels stay on the dark scale above.
        paper: "#ffffff",
        "paper-sunk": "#f3f4f6",
        rule: "#e2e5e9",
        // rule is decorative only (1.26:1). Perceivable UI boundaries -- input
        // and button borders -- need 3:1 per WCAG 1.4.11.
        field: "#888e94",
        ink: "#0b0c0e",
        "ink-dim": "#5b6169",
        // #ff4632 is only 3.40:1 on white. Same hue, darkened to 4.54:1.
        "signal-ink": "#d93c2a",
        // ground with 12% structure mixed in, kept opaque for cut-frame panels
        wash: "#130b2b",
        whatsapp: "#25d366",
        "whatsapp-deep": "#1faa53",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-monospace", "monospace"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
