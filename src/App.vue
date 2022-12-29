<template>
  <my-header></my-header>
  <router-view></router-view>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";

export default {
  components: { MyHeader },
};
</script>

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
</style>
