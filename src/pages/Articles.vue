<template>
  <main>
    <basic-card class="articles">
      <div class="articles__title">
        <h1 class="title">Статьи</h1>
      </div>
      <section class="articles__body" v-if="!isLoading">
        <article-item
          v-for="article in articles"
          :key="article.id"
          :article="article"
        />
      </section>
      <my-loader v-if="isLoading" />
    </basic-card>
  </main>
</template>

<script>
import ArticleItem from "@/components/ArticleItem.vue";
export default {
  components: { ArticleItem },
  data() {
    return {
      articles: [],
      isLoading: true,
    };
  },
  mounted() {
    (async () => {
      let response = await fetch(`/articles/articles-list.json`).then(
        (response) => {
          return response.json();
        }
      );

      this.articles = response;
      this.isLoading = false;
    })();
  },
};
</script>

<style lang="scss" scoped>
.articles {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;

  &__title {
  }

  &__body {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
  }
}
.title {
  margin-bottom: 1rem;
}
</style>