<template>
  <main>
    <h1>О проекте</h1>
    <dark-card>
      <my-loader v-if="isLoading" class="posts-loader" />
      <article v-if="articleContent" v-html="articleContent"></article>
    </dark-card>
  </main>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
      articleContent: "",
    };
  },
  mounted() {

    fetch(`${process.env.BASE_URL}assets/about-article.html`)
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        this.isLoading = false;
        this.articleContent = data;
      });
  },
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
}
</style>
