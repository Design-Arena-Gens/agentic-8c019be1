import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'League Spartan'", "sans-serif"],
        sans: ["'Inter'", "sans-serif"]
      },
      colors: {
        eclipse: "#15131d",
        aurora: "#7b5cfb",
        ember: "#f44f68",
        dawn: "#ffb169"
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at 20% 20%, rgba(123, 92, 251, 0.35), transparent 55%), radial-gradient(circle at 80% 10%, rgba(244, 79, 104, 0.3), transparent 50%), radial-gradient(circle at 30% 80%, rgba(255, 177, 105, 0.25), transparent 60%)"
      }
    }
  },
  plugins: []
};

export default config;
