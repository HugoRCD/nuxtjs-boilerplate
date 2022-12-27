export default defineNuxtConfig({
  routeRules: {
    "/": { ssr: false },
  },
  css: ["~/assets/style/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "nuxt-icon",
    "@nuxt/image-edge",
    ["@pinia/nuxt", { autoImport: ["defineStore"] }],
    "nuxt-headlessui",
  ],
  image: {
    dir: "assets/media",
  },
});
