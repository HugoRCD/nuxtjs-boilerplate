function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      textColor: {
        primary: "var(--font-primary)",
        muted: "var(--font-muted)",
        placeholder: "var(--font-placeholder)",
        inverted: "var(--font-inverted)",
        accent: withOpacity("--accent-color"),
        "accent-hover": withOpacity("--accent-color-hover"),
      },
      backgroundColor: {
        primary: "var(--bg-primary)",
        "primary-opacity": withOpacity("--bg-primary-opacity"),
        secondary: "var(--bg-secondary)",
        accent: withOpacity("--accent-color"),
        "accent-hover": withOpacity("--accent-color-hover"),
        "accent-faded": "var(--accent-color-faded)",
        transparent: "transparent",
      },
      ringColor: {
        accent: withOpacity("--accent-color"),
        transparent: "transparent",
      },
      borderColor: {
        primary: "var(--border-primary)",
        "primary-hover": "var(--border-primary-hover)",
        muted: "var(--border-muted)",
        accent: withOpacity("--accent-color"),
        "accent-faded": "var(--accent-color-faded)",
        transparent: "transparent",
      },
      borderWidth: {
        sm: "1px",
        md: "2px",
      },
      screens: {
        mobile: "320px",
        tablet: "960px",
        desktop: "1280px",
      },
    },
  },
  plugins: [],
};
