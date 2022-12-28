export default defineNuxtConfig({
  app: {
    pageTransition: { name: "fade", mode: "out-in" },
    layoutTransition: { name: "fade", mode: "out-in" },
  },

  runtimeConfig: {
    public: {
      apiUrl: process.env.VITE_API_URL,
    },
  },

  css: ["~/assets/style/main.scss"],

  components: true,

  modules: ["nuxt-icon", "@nuxt/image-edge", "@pinia/nuxt", "nuxt-headlessui"],

  imports: {
    dirs: ["store"],
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
