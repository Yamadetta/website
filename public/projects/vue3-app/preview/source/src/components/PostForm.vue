<template>
  <h2>Добавить пост</h2>
  <form @submit.prevent class="form">
    <my-input
      v-focus
      v-model="post.title"
      placeholder="Название поста"
    ></my-input>
    <my-input v-model="post.body" placeholder="Описание поста"> </my-input>
    <my-button class="form__button button--dark" @click="createPost"
      >Добавить пост</my-button
    >
  </form>
</template>

<script>
export default {
  emits: [
    "create", // Отправка поста наверх
  ],
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);

      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  color: white;
  margin-bottom: 0.5rem;
}

.form {
  &__button {
    margin-left: auto;
  }

  input {
    background-color: var(--button-bg-dark-color);
    &:hover {
      background-color: var(--button-bg-light-color-hover);
    }
  }
}
</style>