<template>
  <div>
    <RouterView v-slot="{ Component }">

      <Navbar>
        <Transition name="fade" mode="out-in">
          <Component class="vh-100" :is="Component" :key="$route.path"></Component>
        </Transition>
      </Navbar>

      <!-- <Loader v-if="loadingStore.isLoading"></Loader> -->
    </RouterView>
  </div>
</template>

<script setup lang="ts">
import Navbar from "./components/Navbar.vue"
</script>


<style lang="scss">
@import './src/assets/scss/helpers.scss';
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e8e8e8;
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
</style>