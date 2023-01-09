<template>
  <my-header></my-header>
  <router-view></router-view>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";

export default {
  components: {
    MyHeader,
  },
};
</script>

<style lang="scss">
@import "@/scss/clear.scss";

:root {
  // #12a6b1
  --main-bg-color: #00abab;
  --element-bg-color: #007481;

  --button-bg-light-color: #007481;
  --button-bg-light-color-hover: #004451;

  --button-bg-dark-color: #00556d;
  --button-bg-dark-color-hover: #0098bb;

  --buton-border-focus-color: #00fff0;
}

html,
body {
  height: 100%;
  background: linear-gradient(90deg, #64c5cc 0%, #00abab 45%, #029cdc 100%);
}

#app {
  display: flex;
  flex-direction: column;

  min-height: 100%;

  main {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    padding: 1rem;

    @media (max-width: 768px) {
      padding: 0.3rem;
    }
  }

  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  color: white;
}

.link {
  color: #00cfff;
}

::selection {
  // color: red;
  background: var(--button-bg-dark-color-hover);
}

/* width */
::-webkit-scrollbar {
  width: 11px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #029cdc;

}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #00dfd4;
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #2ec5c2;
}
</style>