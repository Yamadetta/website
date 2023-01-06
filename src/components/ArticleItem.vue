<template>
  <article class="article card light gradient-border">
    <h2 class="article__title">{{ article.title }}</h2>

    <time class="article__date" :datetime="article.time.machine">
      {{ article.time.human }}
    </time>

    <div class="article__description">{{ article.description }}</div>

    <div class="article__tags">
      <div class="article__tag" v-for="tag in article.tags" :key="tag">
        {{ tag }}
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.article {
  display: flex;
  flex-direction: column;

  width: 100%;

  &__title {
  }

  &__date {
    margin: 0;
  }

  &__description {
    margin-bottom: 1rem;
  }

  &__tags {
    margin-top: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  &__tag {
    padding: 0.2em 0.4em;
    background-color: var(--basic-card-bg-color-light-3);
  }
}
</style>