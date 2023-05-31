<template>
  <div class="p-5">
    <h3>Projetos</h3>

    <div class="carousel-container">
      <Carousel :items-to-show="3" :wrap-around="true" :autoplay="4000">
        <Slide v-for="project, key in state.projects" :key="key">
          <div class="carousel__item">
            <CardVideo :key="key" :title="project.title" :link="project.link" :image="project.video"
              :description="project.description">
            </CardVideo>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import CardVideo from '../components/CardVideo.vue';

const state = reactive({
  projects: [
    {
      title: "Pokedex",
      link: "https://pokedex-ashy-omega.vercel.app/sobre",
      video: "/images/pokedex.gif",
      description: "Projeto",
    },
    {
      title: "IgniteLab",
      link: "https://ignite-lab-mocha.vercel.app/",
      video: "/images/ignitelab.gif",
      description: "Projeto de uma plataforma de um evento de especialização em front-end usando React.",
    },
    {
      title: "Cineflix",
      link: "https://kaiclimaoliveira.github.io/Cineflix/",
      video: "/images/cineflix.gif",
      description: "Plataforma de streaming onde você pode usar as suas mãos como o controle.",
    },
    {
      title: "Cripto Currency",
      link: "https://cripto-currency.vercel.app/",
      video: "/images/cripto_currency.gif",
      description: "Projeto que trata-se de uma consulta a uma API que traz a cada 10 minutos, o mercado de criptomoedas com os valores atualizados.",
    },
    {
      title: "DtMoney",
      link: "https://dt-money-ruddy.vercel.app/",
      video: "/images/dtmoney.gif",
      description: "O DtMoney é um app para realizar o gerenciamento de contas pessoais.",
    },
    {
      title: "Vagas",
      link: "https://vaga-app.vercel.app/",
      video: "/images/vagas.gif",
      description: "App de registro de vagas com local storage, o filtro de vagas e da ação de favoritar as vagas.",
    },
    {
      title: "Games library",
      link: "https://games-library.vercel.app/",
      video: "/images/gameslibrary.gif",
      description: "Esse projeto consiste em um CRUD com VueJs. Incluir, alterar e excluir as informações de uma lista de jogos.",
    },
    {
      title: "Letmeask",
      link: "https://letme-ask-eight.vercel.app/",
      video: "/images/letmeask.gif",
      description: "O Letmeask é um app para realizar perguntas e respostas dentro de determinadas salas criadas pelos usuários.",
    },
  ]
})
</script>

<style scoped lang="scss">
.carousel-container {
  background-color: #1a1a1e;
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0px 0 1px rgb(10 10 10 / 2%);
  color: hsl(0deg, 0%, 29%);
  display: block;
  padding: 1.25rem;
}
</style>