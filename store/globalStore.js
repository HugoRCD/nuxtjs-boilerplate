import { defineStore } from "pinia";
import { useLocalStorage } from "~/composables/useLocalStorage";

export const useGlobalStore = defineStore({
  id: "global",
  state: () => ({
    loading: false,
    theme: "dark",
  }),
  getters: {
    isLoading() {
      return this.loading;
    },
    getTheme() {
      return this.theme;
    },
  },
  actions: {
    setLoading(payload) {
      this.loading = payload;
    },
    setTheme(payload) {
      this.theme = payload;
      useLocalStorage().set("theme", payload);
    },
  },
});
