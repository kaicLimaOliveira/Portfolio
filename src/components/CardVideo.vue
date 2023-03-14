<template>
  <div>
    <div class="card-video is-flex is-justify-content-center is-flex-direction-column is-align-items-center w-100 h-100">
      <a :href="props.link" target="_blank" rel="noopener noreferrer"
        class="is-flex is-justify-content-center is-flex-direction-column is-align-items-center is-relative">

        <img :src="props.image" :alt="props.title">
        <div class="container-project is-flex is-justify-content-center is-flex-direction-column is-align-items-center">
          <h1>{{ props.title }}</h1>
          <p class="description-project">
            {{ props.description }}
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  link: string;
  image: string;
  title: string;
  description: string;
}>()
</script>

<style scoped lang="scss">
.card-video {
  -webkit-box-pack: center;
  -webkit-box-align: center;
  transition: all 0.4s ease-out 0s;

  a {
    -webkit-box-pack: center;
    -webkit-box-align: center;
    padding: 1rem;
    position: relative;
    width: 100%;
    height: 100%;


    img {
      border: 3px px solid #956df1;
      border-radius: 10px;
      width: 100%;
      height: 100%;
      margin: 1rem;
    }

    .container-project {
      -webkit-box-pack: center;
      -webkit-box-align: center;
      position: absolute;
      padding: 3rem;
      z-index: 3;
      opacity: 0;
      transition: all 0.5s ease 0s;
      background-color: rgba(17, 17, 17, 0.6);
      width: 100%;
      height: 100%;

      &:hover {
        opacity: 1;
        transform: translateY(0px);
        color: white;
      }

      h1 {
        font-size: 1.5rem;
        margin: 0px;
      }

      &-project {
        letter-spacing: 1px;
        font-size: 15px;
        margin-top: 8px;
      }
    }
  }
}
</style>