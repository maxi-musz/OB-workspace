import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xxs: "300px",
        // => @media (min-width: 400px) { ... }
        xs: "460px",
        // => @media (min-width: 400px) { ... }
        // => @media (min-width: 640px) { ... }
        // => @media (min-width: 768px) { ... }
        xd: "960px",
        // => @media (min-width: 960px) { ... }
        // => @media (min-width: 1024px) { ... }
        // => @media (min-width: 1280px) { ..
        // => @media (min-width: 1280px) { ..
        // => @media (min-width: 1280px) { ... }
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
export default config;
