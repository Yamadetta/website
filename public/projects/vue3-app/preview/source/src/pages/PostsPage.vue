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
      :posts="postSortedAndSearched"
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
import axios from "axios";

export default {
  components: { PostList, PostForm },

  data() {
    return {
      posts: [],
      isPostLoading: false,

      showModal: false,

      sortTypes: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По содержанию" },
        { value: "id", name: "По идентификатору" },
      ],

      currentSortType: "id",
      serachQuery: "",

      pagination: {
        current: 1,
        max: 0,
        type: "by page", // or 'endless tape'
        posts: {
          perPage: 10,
          total: 0,
        },
      },
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
    async fetchPosts() {
      try {
        if (this.pagination.type === "by page") {
          this.posts = [];
          this.isPostLoading = true;
        }

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _limit: this.pagination.posts.perPage,
              _page: this.pagination.current,
            },
          }
        );

        if (this.pagination.type === "by page") {
          this.posts = response.data;
        } else {
          this.posts = [...this.posts, ...response.data];
        }

        let pagination = this.pagination;
        pagination.posts.total = +response.headers["x-total-count"];
        pagination.max = Math.ceil(
          pagination.posts.total / pagination.posts.perPage
        );
      } catch (error) {
      } finally {
        this.isPostLoading = false;
      }
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
  computed: {
    postSorted() {
      if (this.currentSortType) {
        return [...this.posts].sort((post1, post2) =>
          post1[this.currentSortType] > post2[this.currentSortType] ? 1 : -1
        );
      } else {
        return [...this.posts];
      }
    },

    postSortedAndSearched() {
      if (this.serachQuery) {
        return this.postSorted.filter((item) =>
          item.title.toLowerCase().includes(this.serachQuery.toLowerCase())
        );
      } else {
        return this.postSorted;
      }
    },
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