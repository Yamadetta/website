<template>
  <main>
    <my-button @click="showModal = true">Создать новый пост</my-button>
    <my-input
      v-model="serachQuery"
      class="search-input"
      placeholder="Поиск..."
    />

    <div class="posts-container-header">
      <h1>Список постов</h1>
      <my-select v-model="currentSortType" :options="sortTypes" />
    </div>

    <post-list
      @removePost="removePost"
      @changePage="changePage"
      @changePerPage="changePerPage"
      @changePaginationType="changePaginationType"
      :posts="sortedAndSearchedPosts"
      :pagination="pagination"
      :isLoading="isPostLoading"
    />

    <modal-window v-if="showModal" @closeModal="showModal = false">
      <post-form @create="createPost" />
    </modal-window>
  </main>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import { usePosts } from "@/hooks/usePosts";
import { useSortedPosts } from "@/hooks/useSortedPosts";
import { useSortedAndSearchedPosts } from "@/hooks/useSortedAndSearchedPosts";

export default {
  components: { PostList, PostForm },

  data() {
    return {
      showModal: false,

      sortTypes: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По содержанию" },
        { value: "id", name: "По идентификатору" },
      ],
    };
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
      this.showModal = false;
    },

    removePost(post) {
      this.posts = this.posts.filter((item) => item.id != post.id);
    },

    changePage(pageNum) {
      if (pageNum != "loadMore") {
        this.pagination.type = "by page";
        this.pagination.current = +pageNum;
      } else {
        this.pagination.type = "endless tape";
        this.pagination.current++;
      }
      this.fetchPosts();
    },
    changePerPage(perPage) {
      this.pagination.type = "by page";
      this.pagination.posts.perPage = +perPage;
      this.pagination.current = 1;
      this.fetchPosts();
    },
    changePaginationType() {
      this.pagination.type = "endless tape";
    },
  },
  computed: {},
  mounted() {},

  setup(props) {
    let { fetchPosts, isPostLoading, posts, pagination } = usePosts();
    let { currentSortType, sortedPosts } = useSortedPosts(posts);
    let { sortedAndSearchedPosts, serachQuery } =
      useSortedAndSearchedPosts(sortedPosts);

    return {
      fetchPosts,
      isPostLoading,
      posts,
      pagination,
      currentSortType,
      sortedPosts,
      sortedAndSearchedPosts,
      serachQuery,
    };
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