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
      return this.$route.fullPath;
    },
  },
  watch: {
    currentLocation() {
      document.body.className = this.currentLocation
        .split("/")
        .join(" ")
        .trim();
    },
  },
};
</script>

<!-- 
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
}

body {
  background: linear-gradient(166deg, #5055a8 10%, #96355b 50%, #8544a0 76%);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
  height: 100vh;
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
</style>
