module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}"],
  darkMode: "class",

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
        item: {
          unit: "#824F34",
          "unit-light": "#C36B3C",
          tech: "#32806B",
          "tech-light": "#08A67B",
        },
        bar: {
          upgrade: "#B16239",
          base: "#A9A9A9",
          tech: "#32806B",
          uniqiue: "#AF944E",
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
  plugins: [],
  safeList: ["opacity-95"],
};
