<template>
  <div class="card-neumorphism is-clickable">

  </div>
</template>

<style scoped lang="scss">
.card-neumorphism {
  transition: all 0.3s ease-in-out;
  width: 180px;
  height: 180px;
  border-radius: 30px;
  background: #1a1a1e;
  box-shadow: 20px 20px 60px #16161a,
    -20px -20px 60px #1e1e23;

  &:active {
    background: #1a1a1e;
    box-shadow: inset 20px 20px 60px #16161a,
      inset -20px -20px 60px #1e1e23;
  }
}
</style>