import { defineStore } from "pinia";
import { useUserStore } from "./userStore";

export const useGlobalStore = defineStore({
  id: "global",
  state: () => ({
    isLoading: false,
    user: useUserStore(),
  }),
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
  },
  actions: {
    loading(state, payload) {
      state.isLoading = payload;
    },
  },
});
