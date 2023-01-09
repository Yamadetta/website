<template>
  <main>
    <my-button @click="setShowModal(true)">Создать новый пост</my-button>
    <my-input
      :modelValue="serachQuery"
      @input="setSerachQuery"
      class="search-input"
      placeholder="Поиск..."
    />

    <div class="posts-container-header">
      <h1>Список постов</h1>
      <my-select
        :modelValue="currentSortType"
        @change="setCurrentSortType"
        :options="sortTypes"
      />
    </div>

    <post-list
      @removePost="removePost"
      @changePage="changePage"
      @changePerPage="changePerPage"
      @changePaginationType="changePaginationType"
      :posts="postSortedAndSearched"
      :pagination="pagination"
      :isLoading="isPostLoading"
    />

    <modal-window v-if="showModal" @closeModal="setShowModal(false)">
      <post-form @create="createPost" />
    </modal-window>
  </main>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";

import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  components: { PostList, PostForm },

  data() {
    return {
      sortTypes: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По содержанию" },
        { value: "id", name: "По идентификатору" },
      ],
    };
  },

  methods: {
    ...mapActions({
      fetchPosts: "posts/fetchPosts",
      createPost: "posts/createPost",
      removePost: "posts/removePost",
      changePage: "posts/changePage",
      changePerPage: "posts/changePerPage",
      changePaginationType: "posts/changePaginationType",
    }),

    ...mapMutations({
      setPosts: "posts/setPosts",
      setIsPostLoading: "posts/setIsPostLoading",
      setCurrentSortType: "posts/setCurrentSortType",
      setSerachQuery: "posts/setSerachQuery",
      setPagination: "posts/setPagination",
      setShowModal: "posts/setShowModal",
    }),
  },
  computed: {
    ...mapState({
      state: (state) => state,
      posts: (state) => state.posts.posts,
      isPostLoading: (state) => state.posts.isPostLoading,
      showModal: (state) => state.posts.showModal,
      currentSortType: (state) => state.posts.currentSortType,
      serachQuery: (state) => state.posts.serachQuery,
      pagination: (state) => state.posts.pagination,
    }),
    ...mapGetters({
      postSorted: "posts/postSorted",
      postSortedAndSearched: "posts/postSortedAndSearched",
    }),
  },

  // watch: {
  //   currentSortType(newValue) {
  //     if (newValue) {
  //       this.posts.sort((post1, post2) =>
  //         post1[this.currentSortType] > post2[this.currentSortType] ? 1 : -1
  //       );
  //     }
  //   },
  // },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<style lang="scss" scoped>
.posts-container-header {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;

  margin-bottom: 1rem;

  .select-wrapper {
    margin-left: auto;
  }
}

.search-input {
  margin-top: 1rem;
}
</style>