<template>
  <main>
    <iframe :src="iframeLink" frameborder="0"></iframe>
  </main>
</template>

<script>
export default {
  data() {
    return {
      iframeLink: "",
    };
  },
  mounted() {
    let link = this.$route.fullPath;
    let last = link.split("/");
    last = `${last[last.length - 2]}.html`;
    link += `/${last}`;
    link = link.replace("//", "/");
    this.iframeLink = link;

    console.log(link);
    console.log(last);

    // document.querySelector("header").style.display = "none";
  },
};
</script>

<style lang="scss" scoped>
iframe {
  background-color: #fff;
  width: 100%;
  height: 100vh;
}
</style>


<style lang="scss">
body.projects {
  // overflow: hidden;

  header {
    // margin-bottom: 0;
  }
}
</style>