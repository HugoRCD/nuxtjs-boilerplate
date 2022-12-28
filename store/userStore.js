import { defineStore } from "pinia";

const defaultUser = {
  accessToken: "",
  user: {},
};

export const useUserStore = defineStore("user", {
  state: () => ({
    accessToken: "",
    user: {},
  }),
  getters: {
    getToken() {
      return this.accessToken;
    },
    getUser() {
      return this.user;
    },
    isLoggedIn() {
      return !!this.accessToken;
    },
  },
  actions: {
    setAccessToken(token) {
      this.accessToken = token;
    },
    setUser(user) {
      this.user = user;
    },
    logout() {
      Object.assign(this, defaultUser);
    },
  },
});
