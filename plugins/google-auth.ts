import vue3GoogleLogin from "vue3-google-login";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vue3GoogleLogin, {
    clientId:
      useRuntimeConfig().public.googleClientId ||
      import.meta.env.VITE_PUBLIC_GOOGLE_CLIENT_ID,
  });
});
