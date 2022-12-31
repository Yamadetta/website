<template>
  <main>
    <iframe seamless :src="iframeLink" frameborder="0"></iframe>
    <button v-html="settingsIcon" class="project-control"></button>
  </main>
</template>

<script>
import { settings } from "@/assets/icons/svgIcons.js";
export default {
  data() {
    return {
      iframeLink: "",
      settingsIcon: settings,
    };
  },
  mounted() {
    let link = this.$route.fullPath;
    let last = link.split("/");
    last = `${last[last.length - 2]}.html`;
    link += `/${last}`;
    link = link.replace("//", "/");
    this.iframeLink = link;

    // console.log(link);
    // console.log(last);
    // console.log(this.$route.name == "ProjectPage");
    // document.querySelector("header").style.display = "none";

    // console.log(this.$store.getters.currentPage);
  },
};
</script>

<style lang="scss" scoped>
main {
  height: 100vh;
}
iframe {
  display: block;
  background-color: #fff;
  width: 100%;
  height: 100%;
}
</style>


<style lang="scss">
.project-control {
  position: fixed;
  right: 0;
  bottom: 0;

  background: none;
  border: none;
}
</style>