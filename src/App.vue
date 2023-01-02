<template>
  <my-header></my-header>
  <router-view></router-view>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";

export default {
  components: { MyHeader },
  computed: {
    currentLocation() {
      return this.$route.name;
    },
  },
  watch: {
    currentLocation() {
      document.body.className = this.currentLocation;
    },
  },
};
</script>

<!-- 

  Сделать нормальную кнопку настроек проекта.
  Сделать нормальный вызов svg icon, а не то, что сейчас. https://www.npmjs.com/package/vue-inline-svg#vue-v3npm


header
footer
main Примечание: В документе не должно быть более одного элемента <main>. Элемент <main> не должен быть потомком элемента <article>, <aside>, <footer>, <header>, или <nav> элементов.
section


<address>	Определяет контактные данные автора/владельца документа
<article>	Определяет статью
<aside>	Определяет содержание в стороне от содержимого страницы (для фильтра).

<dialog>	Определяет диалоговое окно или окно

 -->



<style lang="scss">
@import "@/scss/clear.scss";

:root {
  --white-text-color: #dddddd;
  --basic-card-bg-color: #2f244b;
  --basic-card-bg-color-light: #3d2e65;
  --basic-card-bg-color-dark: #211837;
}

body {
  background: linear-gradient(166deg, #5055a8 10%, #96355b 50%, #8544a0 76%);
  // background-size: 400% 400%;
  // animation: gradient 10s ease infinite;
  background-repeat: no-repeat;
  min-height: 100%;
}

.background-mask {
  min-height: 100vh;
  opacity: 0.9;
  background-image: repeating-radial-gradient(
      circle at 0 0,
      transparent 0,
      #5055a8 12px
    ),
    repeating-linear-gradient(rgba(0, 255, 235, 0.78), rgba(255, 255, 255, 0));
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.underline {
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;

    background-color: var(--white-text-color);

    width: 0;
    height: 2px;

    transition: width 0.2s ease-out;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
}

svg {
  width: 100%;
  height: 100%;
  fill: var(--white-text-color);
  g,
  path {
    fill: var(--white-text-color);
  }
}

::-webkit-scrollbar {
  width: 14px;
}

::-webkit-scrollbar-track {
  background-color: #ffffffd4;
}

::-webkit-scrollbar-thumb {
  background-color: #683fa8;

  -webkit-transition: background-color 0.2s linear;
  transition: background-color 0.2s linear;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #8051ca;
}

::-webkit-scrollbar-corner {
  background-color: #333;
}
</style>
