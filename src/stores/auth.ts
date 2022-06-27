import { defineStore } from "pinia";
import { getAuth } from "firebase/auth";

export const auth = defineStore({
  id: "auth",
  state: () => ({
    auth: false,
  }),
  getters: {
    state(): boolean {
      return this.auth;
    },
  },
  actions: {
    getSet() {
      this.auth = getAuth() ? true : false;
    },
    signIn() {
      this.auth = true;
    },
    signOut() {
      this.auth = false;
    },
  },
});
