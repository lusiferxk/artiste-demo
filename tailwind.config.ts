import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#050816", // Dark background
        secondary: "#aaa6c3", // Light gray for general text
        tertiary: "#151030", // Darker background for cards
        "white-100": "#f3f3f3", // A very light white
        "gray-100": "#f3f4f6",
        "gray-200": "#e5e7eb",
        "gray-300": "#d1d5db",
        "gray-400": "#9ca3af",
        "dfd9ff": "#dfd9ff", // Specific color from original code
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "green-pink-gradient": "linear-gradient(to right, #00ff80, #ff00ff)", // A vibrant green-pink gradient
      },
    },
  },
  plugins: [],
};
export default config;
