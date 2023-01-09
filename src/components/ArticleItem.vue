<template>
  <article class="article card light gradient-border">
    <router-link class="link underline" :to="`/articles/${link}`">
      <h2 class="article__title">{{ article.title }}</h2>
    </router-link>


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
import useTitleToHandle from '@/hooks/useTitleToHandle';
import { ref } from 'vue';

export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    let link = ref(useTitleToHandle(props.article.title));

    return {
      link,
    };
  },
}
</script>

<style lang="scss" scoped>
.article {
  display: flex;
  flex-direction: column;

  width: 100%;

  &__title {
    display: inline-block;
    width: fit-content;
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

.link {
  text-decoration: none;
  color: var(--white-text-color);
  width: fit-content;
}
</style>