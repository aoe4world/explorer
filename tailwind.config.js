module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}"],
  darkMode: "class",
  safelist: [
    "text-2xl",
    "text-3xl",
    {
      pattern: /bg-item-(unit|technology|tech|building|upgrade)/,
      variants: ["hover"],
    },
    {
      pattern: /text-item-(unit|technology|tech|building|upgrade)/,
    },
    {
      pattern: /bg-bar-(unit|technology|tech|building|unique|bonus|upgrade)/,
    },
    {
      pattern: /text-item-(unit|technology|tech|building|upgrade)-light/,
    },
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#E9E9EA",
          100: "#D3D3D4",
          200: "#A8A8AA",
          300: "#7C7C7F",
          400: "#515155",
          500: "#25252A",
          600: "#1E1E22",
          700: "#161619",
          800: "#0F0F11",
          900: "#070708",
        },
        unique: "#DFC686",
        item: {
          map: "#3A5D7E",
          unit: "#824F34",
          "unit-light": "#C36B3C",
          upgrade: "#32806B",
          tech: "#32806B",
          technology: "#32806B",
          "upgrade-light": "#08A67B",
          "tech-light": "#08A67B",
          "technology-light": "#08A67B",
          building: "#345469",
          "building-light": "#477899",
          ability: "#20263D",
          "ability-light": "#6571A1",
        },
        bar: {
          upgrade: "#B16239",
          base: "#A9A9A9",
          tech: "#32806B",
          technology: "#32806B",
          unique: "#AF944E",
          building: "#477899",
          bonus: "#5B5B5B",
          ability: "#20263D",
        },
      },
      fontFamily: {
        body: '"Sen", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        heading:
          '"Sen", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        sans: '"Sen", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
        mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      },
    },
  },
  corePlugins: {},
  plugins: [require("@tailwindcss/line-clamp")],
  safeList: ["opacity-95"],
};
