export default defineNuxtConfig({
  css: ["~/assets/style/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxtjs/i18n",
    "nuxt-icon",
    "@nuxt/image-edge",
    ["@pinia/nuxt", { autoImport: ["defineStore"] }],
    "nuxt-headlessui",
  ],
  image: {
    dir: "assets/media",
  },
});
