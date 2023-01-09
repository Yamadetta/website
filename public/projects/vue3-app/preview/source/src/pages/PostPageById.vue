<template>
  <main>
    <h1>Пост № {{ $route.params.id }}</h1>
    <dark-card v-if="isLoading">
      <my-loader></my-loader>
    </dark-card>
    <post-item v-if="!isLoading" :controls="false" :post="post"></post-item>
  </main>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
import axios from "axios";
export default {
  components: { PostItem },
  data() {
    return {
      post: {},
      isLoading: true,
    };
  },
  mounted() {
    (async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
      );
      this.isLoading = false;
      this.post = response.data;
    })();
  },
};
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 1rem;
}

.card {
  width: 100%;
}
</style>