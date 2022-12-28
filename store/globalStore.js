import { defineStore } from "pinia";

export const useGlobalStore = defineStore({
  id: "global",
  state: () => ({
    loading: false,
  }),
  getters: {
    isLoading(state) {
      return state.loading;
    },
  },
  actions: {
    setLoading(payload) {
      this.loading = payload;
    },
  },
});
