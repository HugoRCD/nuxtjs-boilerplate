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
  ],
  image: {
    dir: "assets/media",
  },
});
