<template>
  <div class="is-flex">
    <aside class="sidebar is-flex is-flex-direction-column is-clipped is-justify-content-space-between"
      :class="state.sideBar">
      <div class="mt-5 mb-2 mx-4">
        <div class="is-flex is-align-items-center is-justify-content-center">
          <Icon icon="bars" size="lg" @click="toggleSideBar" class="is-clickable has-text-default"></Icon>
        </div>
      </div>

      <div class="mb-4">
        <div class="mb-3">
          <a href="https://www.linkedin.com/in/kaic-de-lima-oliveira-3633041a4/" target="_blank"
            rel="noopener noreferrer">
            <Icon :icon="['fab', 'linkedin']" size="xl" class="has-text-default technologies-icons"></Icon>
          </a>
        </div>

        <div class="mb-4">
          <a href="https://github.com/kaicLimaOliveira" target="_blank" rel="noopener noreferrer">
            <Icon :icon="['fab', 'github']" size="xl" class="has-text-default technologies-icons"></Icon>
          </a>
        </div>

        <div class="mb-2">
          <RouterLink :to="{ name: 'Projects' }">
            <Icon icon="laptop-code" size="xl" class="has-text-default technologies-icons"></Icon>
          </RouterLink>
        </div>

      </div>
    </aside>

    <header class="is-flex is-flex-direction-column is-flex-grow-1 vh-100">
      <div class="nav-content is-flex is-justify-content-space-between is-align-items-center">
        <div class="ml-6">
          <RouterLink :to="{ name: 'Home' }">
            <Icon icon="code" size="lg" class="has-text-default"></Icon>
            <span class="ml-2 has-text-default">Kaic Oliveira</span>
          </RouterLink>
        </div>

        <span class="py-4 px-6 is-clickable contact">Contato</span>
      </div>

      <nav class="h-100">
        <slot></slot>
      </nav>
    </header>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const state = reactive({
  sideBar: localStorage.getItem('sideBar') || 'opened',
});

function toggleSideBar() {
  state.sideBar = state.sideBar == 'opened' ? 'closed' : 'opened'
  localStorage.setItem('sideBar', state.sideBar)
}

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
  transition: 0.3s ease;
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

  &-links {
    height: 100%;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}

.opened {
  width: 150px;
}

.closed.sidebar {
  width: 81px;
}

.icon {
  transition: 0.2s ease;

  &:hover {
    transform: translateY(-2px)
  }
}
</style>