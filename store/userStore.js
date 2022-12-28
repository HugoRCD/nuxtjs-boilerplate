import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    accessToken: "",
    user: {},
  }),
  getters: {
    getToken() {
      return this.token;
    },
    getUser() {
      return this.user;
    },
    isLoggedIn() {
      return !!this.accessToken;
    },
  },
  actions: {
    setToken(token) {
      this.token = token;
    },
    setUser(user) {
      this.user = user;
    },
  },
});
