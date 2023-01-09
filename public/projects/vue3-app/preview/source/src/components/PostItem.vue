<template>
  <div class="post">
    <div class="post__content">
      <div v-if="controls" class="post__id">{{ post.id }}</div>
      <div class="post__text">
        <div class="post__title">{{ post.title }}</div>
        <div class="post__body">{{ post.body }}</div>
      </div>
    </div>
    <div v-if="controls" class="post__controls">
      <my-button @click="$router.push(`/posts/${post.id}`)" class="button--dark"
        >Открыть</my-button
      >
      <my-button @click="$emit('removePost', post)" class="button--dark">
        Удалить
      </my-button>
    </div>
  </div>
</template>

<script>
export default {
  emits: [
    "removePost", // Удаление поста,
  ],
  props: {
    post: {
      type: Object,
      required: true,
    },
    controls: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.post {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }

  padding: 1rem;

  border-radius: 4px;

  color: white;
  background-color: var(--element-bg-color);
  box-shadow: 2px 2px 4px var(--element-bg-color);

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  &__content {
    display: flex;
    gap: 1rem;
    flex-grow: 1;
  }

  &__id {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.2rem;
  }

  &__text {
  }

  &__title {
    font-weight: bold;
    font-size: 1.3rem;
  }

  &__body {
  }

  &__controls {
    margin-left: auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    @media (max-width: 768px) {
      flex-direction: row;
    }

    .button {
      width: 100%;
    }
  }
}
</style>