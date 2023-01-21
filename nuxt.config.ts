import en from "./locales/en.json";
import fr from "./locales/fr.json";

export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: "fade",
      mode: "out-in"
    },
    layoutTransition: {
      name: "fade",
      mode: "out-in"
    }
  },

  css: ["~/assets/style/main.scss"],

  build: {
    transpile: ["@heroicons/vue"]
  },

  modules: [
    "nuxt-icon",
    "@nuxt/image-edge",
    "@pinia/nuxt",
    "nuxt-headlessui",
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt"
  ],

  imports: {
    dirs: ["store"]
  },

  runtimeConfig: {
    public: {
      appEnv: process.env.APP_ENV,
      googleClientId: process.env.NUXT_GOOGLE_CLIENT_ID,
      apiUrl: process.env.API_URL
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  i18n: {
    vueI18n: {
      legacy: false,
      locale: "en",
      fallbackLocale: "en",
      availableLocales: ["en", "fr"],
      messages: {
        en,
        fr
      }
    }
  },

  image: {
    dir: "assets/media"
  }
});
