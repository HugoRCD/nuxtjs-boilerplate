import { defineStore } from "pinia";

export const useGlobalStore = defineStore({
  id: "global",
  state: () => ({
    loading: false,
    theme: "dark",
    locale: "en",
  }),
  getters: {
    isLoading() {
      return this.loading;
    },
    getTheme() {
      return this.theme;
    },
    getLocale() {
      return this.locale;
    },
  },
  actions: {
    setLoading(payload) {
      this.loading = payload;
    },
    setTheme(payload) {
      this.theme = payload;
    },
    setLocale(payload) {
      this.locale = payload;
    },
  },
});
