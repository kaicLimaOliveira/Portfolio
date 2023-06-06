<template>
  <div class="is-flex">
    <aside class="sidebar is-flex is-flex-direction-column is-clipped is-justify-content-space-between">
      <div class="mt-5 mb-2 mx-4">
        <div class="is-flex is-align-items-center is-justify-content-center">
          <Icon icon="bars" size="lg" class="is-clickable has-text-default"></Icon>
        </div>
      </div>

      <div class="mb-4">
        <div class="mb-4 animate">
          <a href="https://www.linkedin.com/in/kaic-de-lima-oliveira-3633041a4/" target="_blank">
            <Icon :icon="['fab', 'linkedin']" size="xl" class="has-text-default"></Icon>
          </a>
        </div>

        <div class="mb-4 animate">
          <a href="https://github.com/kaicLimaOliveira" target="_blank">
            <Icon :icon="['fab', 'github']" size="xl" class="has-text-default"></Icon>
          </a>
        </div>

        <div class="mb-2 animate">
          <RouterLink :to="{ name: 'Projects' }">
            <Icon icon="code-commit" size="xl" class="has-text-default"></Icon>
          </RouterLink>
        </div>

      </div>
    </aside>

    <header class="content is-flex is-flex-direction-column is-flex-grow-1 vh-100 w-25">
      <div class="nav-content is-flex is-justify-content-space-between is-align-items-center">
        <div class="ml-5">
          <RouterLink :to="{ name: 'Home' }">
            <Icon icon="code" size="lg" class="has-text-default"></Icon>
            <span class="ml-2 has-text-default">Kaic Oliveira</span>
          </RouterLink>
        </div>

        <div class="py-3">
          <Icon @click="togglelightMode" size="xl" :icon="lightModeStore.isLightModeOn ? 'sun' : 'moon'"
            class="mr-5 has-text-default is-clickable">
          </Icon>

          <span @click="state.modal = true" class="px-6 py-4 is-clickable contact">Contato</span>
        </div>
      </div>

      <nav class="h-100">
        <slot></slot>
      </nav>
    </header>


    <Modal :open="state.modal" @closeModal="state.modal = false">
      <template #body>
        <div class="is-flex is-justify-content-center">
          <Card></Card>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import Modal from './Modal.vue';
import Card from './Card.vue'

import { reactive } from "vue";
import { useLightModeStore } from '../store/lightStore'

const lightModeStore = useLightModeStore()
const togglelightMode = () => {
  lightModeStore.toggleLightMode()
}

const state = reactive({
  modal: false,
});
</script>

<style lang="scss" scoped>
.contact {
  background-color: #956df1;
  color: #e8e8e8;
  transition: 0.2s ease;
  border-radius: 1px;

  &:hover {
    filter: brightness(0.9);
  }
}

.nav-content {
  box-shadow: inset 0 -1px 0 #29292e;
}

.dropdown-menu::after {
  content: '';
  background-color: transparent;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  z-index: -1;
}

.sidebar {
  transition: 0.3s ease;
  flex-shrink: 0;
  z-index: 100;
  height: 100vh;
  box-shadow: inset 0 -1px 0 #29292e;
  border-right: 1.5px #29292e solid;
  background-color: #1a1a1e;
  width: 81px;

  &-links {
    height: 100%;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}

.animate {
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }
}

.icon {
  transition: 0.2s ease;

  &:hover {
    transform: translateY(-2px)
  }
}
</style>