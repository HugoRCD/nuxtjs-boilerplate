export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },

  css: ["~/assets/style/main.scss"],

  components: true,

  modules: ["nuxt-icon", "@nuxt/image-edge", "@pinia/nuxt", "nuxt-headlessui"],

  imports: {
    dirs: ["~/store"],
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  image: {
    dir: "assets/media",
  },
});
