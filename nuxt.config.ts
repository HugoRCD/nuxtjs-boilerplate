export default defineNuxtConfig({
  app: {
    head: {
      meta: [{ name: "viewport" }, { charset: "utf-8" }],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
    pageTransition: {
      name: "fade",
      mode: "out-in",
    },
  },
  imports: {
    autoImport: true,
    dirs: ["store", "plugins", "components"],
  },
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
