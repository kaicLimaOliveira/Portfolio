import { defineStore } from 'pinia'

export const useLightModeStore = defineStore({
    id: 'lightMode',
    state: () => ({
        isLightModeOn: localStorage.getItem('isLightModeOn') === 'true' || false
    }),
    actions: {
        toggleLightMode() {
            this.isLightModeOn = !this.isLightModeOn
            localStorage.setItem('isLightModeOn', this.isLightModeOn.toString())
        }
    }
})