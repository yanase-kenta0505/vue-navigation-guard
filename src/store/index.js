import { defineStore } from "pinia";

export const useStore = defineStore('isShow', {
  state: () => ({ isShow: true }),
  actions: {
    toggleIsShow() {
      this.isShow = !this.isShow
    }
  }
})