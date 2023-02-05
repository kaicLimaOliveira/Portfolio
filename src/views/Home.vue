<template>
  <div>
    <div class="is-flex visual w-100">
      <div class="visual-design px-6">
        <div class="is-size-1 has-text-left visual-design-title has-text-weight-bold">
          <span class="has-text-default">Web Developer</span> <br>
          <span class="web-designer">& Designer</span>
        </div>

        <div class="is-flex is-flex-direction-column has-text-left mt-6 subtitle">
          <span>
            Eu sou um bacharel em ciências da computação, web developer, <br>
            web designer, UI e UX.
          </span>

          <span class="mt-5">
            Minhas ferramentas favoritas para o desenvolvimento <br> são VSCode, Figma, insomnia e DBeaver.
          </span>
        </div>
      </div>

      <div class="mt-6 visual-technologies">
        <div class="is-flex is-justify-content-space-around is-align-items-center">
          <a href="https://vuejs.org/guide/introduction.html" target="_blank">
            <Icon :icon="['fab', 'vuejs']" size="4x" class="has-text-default is-clickable technologies-icons"></Icon>
          </a>

          <a href="https://www.javascript.com/" target="_blank">
            <Icon :icon="['fab', 'square-js']" size="4x" class="has-text-default is-clickable technologies-icons">
            </Icon>
          </a>
        </div>

        <div class="is-flex is-justify-content-space-around is-align-items-center mt-6">
          <a href="https://www.django-rest-framework.org/" class="has-text-default" target="_blank">
            <span class="is-clickable technologies-icons is-size-1 has-text-weight-bold">
              dj
            </span>
          </a>

          <a href="https://www.python.org/" target="_blank">
            <Icon :icon="['fab', 'python']" size="4x" class="has-text-default is-clickable technologies-icons"></Icon>
          </a>
        </div>

        <div class="is-flex is-justify-content-space-around is-align-items-center mt-6">
          <a href="https://www.typescriptlang.org/" target="_blank">
            <img src="../assets/svgs/typescript.svg" width="73" class="is-clickable technologies-icons" />
          </a>

          <a href="https://www.postgresql.org/" target="_blank">
            <Icon :icon="['fas', 'database']" size="4x" class="has-text-default is-clickable technologies-icons"></Icon>
          </a>
        </div>

        <div class="is-flex is-justify-content-space-around is-align-items-center mt-6">
          <a href="https://www.figma.com/design/" target="_blank">
            <Icon :icon="['fab', 'figma']" size="4x" class="has-text-default is-clickable technologies-icons"></Icon>
          </a>

          <a href="https://sass-lang.com/" target="_blank">
            <Icon :icon="['fab', 'sass']" size="4x" class="has-text-default is-clickable technologies-icons"></Icon>
          </a>
        </div>
      </div>

      <div class="card">
        <span class="button-check">Curriculo</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.visual {
  height: 85%;
  border-bottom: 1.5px solid #29292e;

  &-design {
    border-right: 1.5px solid #29292e;
    width: 63%;

    &-title {
      margin-top: 65px;
      line-height: 1.2;
    }

    .subtitle {
      color: #9a80d7;
      font-size: 15px;
      font-weight: 500;
    }
  }

  &-technologies {
    width: 32%;
  }

  .card {
    width: 7%;

    .button-check {
      background-color: #E0EDF2;
      transform: rotateZ(-90deg);
    }
  }

  .web-designer {
    color: #18181a;
    text-shadow: 0.5px 0.5px 3.5px #956df1;
  }
}
</style>