<template>
  <main>
    <article class="article card" v-html="articleText"></article>
  </main>
</template>

<script>
export default {
  data() {
    return {
      articleText: "",
    };
  },
  methods: {},
  mounted() {
    (async () => {
      let response = await fetch(
        `/articles/${this.$route.params.name}.html`
      ).then((response) => {
        return response.text();
      });
      this.articleText = response;
    })();
  },
};
</script>

<style lang="scss" scoped>
.article {
  max-width: 1300px;
  margin: 0 auto;
}
</style>
