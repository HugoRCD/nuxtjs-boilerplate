import { defineStore } from "pinia";

export const useGlobalStore = defineStore({
  id: "global",
  state: () => ({
    loading: false,
  }),
  getters: {
    isLoading() {
      return this.loading;
    },
  },
  actions: {
    setLoading(payload) {
      this.loading = payload;
    },
  },
});
