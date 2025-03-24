/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#2563eb", // blue-600
          dark: "#3b82f6", // blue-500
        },
        background: {
          light: "#ffffff",
          dark: "#1f2937", // gray-800
        },
        text: {
          light: "#111827", // gray-900
          dark: "#f9fafb", // gray-50
        },
      },
    },
  },
  plugins: [],
};
