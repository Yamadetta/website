<template>
  <my-header></my-header>
  <router-view></router-view>
</template>

<script>
import MyHeader from "@/components/header/MyHeader.vue";

export default {
  components: { MyHeader },
  computed: {
    currentLocation() {
      return this.$route.name;
    },
    aboveElement() {
      return this.$store.state.aboveElement;
    },
  },

  watch: {
    currentLocation() {
      document.body.className = this.currentLocation;
    },
    aboveElement() {
      if (this.aboveElement) {
        document.body.classList.add("above-element");
      } else {
        document.body.classList.remove("above-element");
      }
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

===============================================================


  Сделать сортировку, чтобы выводились папки, потом файлы. Файлы должны сортироваться по алфавиту с группировкой по типу файла.
  https://stackoverflow.com/questions/5467129/sort-javascript-object-by-key?answertab=trending#tab-top
  
  Поправить цвета хайлайтинга кода

  На мобилке основную карточку расширить на весь экран.


  Просмотр кода.
  Для мобилки сделать:
    1. Один переключатель
    2. Выделение пунктов меню
    3. Лоадер для пункта меню
    4. Нормальный ресайз окна + зум окна
    5. Нормальное позиционирование кнопки

  Для ПК:
    Лоадер для кода, что он загружается и  через призму генерится
    Эффект при наведении на крестик и шапку
    А также ресайз окна кода и окна папок
    Доработать страницу описания проекта. 
    На главной странице добавить кнопку "посмотреть ещё" для страницы проектовы
    Пофиксить padding для мобильной версии на странице проекта.
    Доделать страницу 404
 Делаю главную страницу, где просто баннер, вывод последних статей и проектов. Кнопка Telegram для связи. 
      Также будет кнопка с возможностью скачать резюме в PDF. Но это позже. 

 -->

<style lang="scss">
@import "@/scss/clear.scss";

:root {
  --white-text-color: #dddddd;
  --link-color: #7cd7ff;
  --basic-card-bg-color: #2f244b;
  --basic-card-bg-color-light: #3d2e65;
  --basic-card-bg-color-light-2: #553d7a;
  --basic-card-bg-color-light-3: #7f58a5;
  --basic-card-bg-color-dark: #211837;
  --basic-card-bg-color-dark-transparent: #0d0819e8;

  --header-height: 45px;
}

body {
  background: linear-gradient(166deg, #5055a8 10%, #96355b 50%, #8544a0 76%);
  // background-size: 400% 400%;
  // animation: gradient 10s ease infinite;
  background-repeat: no-repeat;
  min-height: 100%;
}

.above-element {
  overflow: hidden;
}

.background {
  min-height: 100vh;
  // opacity: 0.9;
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

#app {
  @media (max-width: 768px) {
    // padding-top: calc(var(--header-height) + 1rem);
  }

  position: relative;
  z-index: 10;
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

.link {
  color: var(--link-color);

  &:hover {
    text-decoration: none;
  }

  &.title {
    color: var(--white-text-color);
    text-decoration: none;
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
  height: 14px;
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

::selection {
  background: #8800bf;
}
</style>
