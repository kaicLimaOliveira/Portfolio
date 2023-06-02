<template>
  <div class="w-100 is-clickable is-flex is-justify-content-space-evenly">
    <div class="is-flex is-flex-direction-column is-align-items-center">
      <a href="https://web.whatsapp.com/send?phone=559998284912" target="_blank">
        <Icon :icon="['fab', 'whatsapp']" size="5x" class="icon-whats"></Icon>
      </a>
      <span class="has-text-weight-bold">WHATSAPP</span>
    </div>

    <div class="is-flex is-flex-direction-column is-align-items-center">
      <a href="mailto:kaic10@outlook.com">
        <Icon icon="envelope" size="5x" class="icon-envelope"></Icon>
      </a>
      <span class="has-text-weight-bold">E-MAIL</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.icon-whats,
.icon-envelope {
  transition: all 0.15s;
  color: hsl(0deg, 0%, 29%);

  &:active {
    transform: translateY(5px)
  }
}
</style>