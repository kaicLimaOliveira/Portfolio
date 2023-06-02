<template>
  <Transition name="modal">
    <div class="custom-modal" v-show="props.open">
      <div class="modal-background" @click="emit('close-modal')"></div>
      <div class="vh-100 is-flex is-align-items-center is-justify-content-center">
        <div class="modal-card">
          <header class="modal-card-head is-justify-content-space-between">
            <div class="has-text-weight-bold">
              <slot name="header"></slot>
            </div>
            <Icon icon="xmark" size="lg" @click="$emit('close-modal')" class="is-clickable"></Icon>
          </header>
          <section class="modal-card-body modal-body">
            <slot name="body"></slot>
          </section>
          <footer class="modal-card-foot">
            <slot name="footer">

            </slot>
          </footer>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const emit = defineEmits(['close-modal'])
const props = defineProps({ open: Boolean })
</script>

<style lang="scss" scoped>
.modal-enter-from,
.modal-leave-to .modal-card {
  transform: translateY(-25px);
}

.modal-enter-to,
.modal-leave-from .modal-card {
  transform: translateY(0px);
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.custom-modal {
  top: 0;
  position: fixed;
  width: 100%;
  z-index: 1000;
}

.modal-background {
  background-color: rgba(0, 0, 0, 0.425);
}

.modal-card {
  transition: .3s;
}

.modal-body {
  background-color: #1e1e22;
}

.modal-card-head {
  background-color: #1e1e22;
  border: none !important;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.modal-card-foot {
  background-color: #1e1e22;
  border: none !important;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
</style>