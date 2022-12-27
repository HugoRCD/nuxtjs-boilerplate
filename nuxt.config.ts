export default defineNuxtConfig({
  css: ["~/assets/style/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/i18n", "nuxt-icon"],
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      legacy: false,
      messages: {
        en: {
          home: "Home",
        },
        fr: {
          home: "Accueil",
        }
      },
    },
  }
})
