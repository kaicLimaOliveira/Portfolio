<template>
  <div :class="{ 'light-theme': isLightModeOn }" class="ts-3">
    <RouterView v-slot="{ Component }">

      <Navbar>
        <Transition name="fade" mode="out-in">
          <Component class="vh-100" :is="Component" :key="$route.path"></Component>
        </Transition>
      </Navbar>

      <Loader v-if="loadingStore.isLoading"></Loader>
    </RouterView>
  </div>
</template>

<script setup lang="ts">
import Navbar from "./components/Navbar.vue"
import Loader from "./components/Loader.vue"

import { computed } from "vue";
import { useLightModeStore } from './store/lightStore';
import { useLoadingStore } from "./store/loadingStore"

const loadingStore = useLoadingStore()
const lightModeStore = useLightModeStore()
const isLightModeOn = computed(() => lightModeStore.isLightModeOn)
</script>


<style lang="scss">
@import './src/assets/scss/helpers.scss';
@import './assets/scss/light-theme.scss';
@import './assets/scss/media-querie.scss';
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #dedede;
}

html,
body {
  margin: 0;
  padding: 0;
  background: #1a1a1e;
  overflow: hidden;
}

.content-container {
  height: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.technologies-icons {
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.85;
    transform: translateY(-4px);
  }
}

.carousel__next {
  right: -30px !important;
  color: #fff !important;
}

.carousel__prev {
  left: -30px !important;
  color: #fff !important;
}
</style>