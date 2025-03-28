import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        se1aSky:"#C3EBFA",
        se1aSkyLight:"#EDF9FD",
        se1aPurple:"#CFCEFF",
        se1aPurpleLight:"#F1F0FF",
        se1aYellow:"#FAE27C",
        se1aYellowLight:"#FEFCE8",
      }
    },
  },
  plugins: [],
};
export default config;
