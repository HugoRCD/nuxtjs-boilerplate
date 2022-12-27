import { defineStore } from "pinia";
import { useUserStore } from "./userStore";

export const useGlobalStore = defineStore({
  id: "global",
  state: () => ({
    isLoading: false,
    user: useUserStore(),
  }),
  getters: {
    doubleCount() {
      return this.count * 2;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
