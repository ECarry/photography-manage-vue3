import { defineStore } from 'pinia'

const state = {
  collapseSidebar: false,
}

export const useSettingStore = defineStore('setting', {
  state: () => state,
  getters: {},
  actions: {},
})
