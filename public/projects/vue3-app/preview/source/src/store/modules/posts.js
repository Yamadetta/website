import axios from "axios";

export default {
  state: () => ({
    posts: [],
    isPostLoading: false,
    showModal: false,




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
  }),
  getters: {
    postSorted(state) {
      if (state.currentSortType) {
        return [...state.posts].sort((post1, post2) =>
          post1[state.currentSortType] > post2[state.currentSortType] ? 1 : -1
        );
      } else {
        return [...state.posts];
      }
    },

    postSortedAndSearched(state, getters) {
      if (state.serachQuery) {
        return getters.postSorted.filter((item) =>
          item.title.toLowerCase().includes(state.serachQuery.toLowerCase())
        );
      } else {
        return getters.postSorted;
      }
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setIsPostLoading(state, isPostLoading) {
      state.isPostLoading = isPostLoading;
    },
    setCurrentSortType(state, event) {
      state.currentSortType = event.target.value;
    },
    setSerachQuery(state, event) {
      state.serachQuery = event.target.value;
    },
    setPagination(state, pagination) {
      state.pagination = pagination;
    },
    setShowModal(state, event) {
      state.showModal = event;
    }
  },
  actions: {
    createPost({ state }, post) {
      state.posts.push(post);
      state.showModal = false;
    },
    removePost({ state }, post) {
      state.posts = state.posts.filter((item) => item.id != post.id);
    },
    async fetchPosts({ state }) {
      try {
        if (state.pagination.type === "by page") {
          state.posts = [];
          state.isPostLoading = true;
        }

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _limit: state.pagination.posts.perPage,
              _page: state.pagination.current,
            },
          }
        );

        if (state.pagination.type === "by page") {
          state.posts = response.data;
        } else {
          state.posts = [...state.posts, ...response.data];
        }

        let pagination = state.pagination;
        pagination.posts.total = +response.headers["x-total-count"];
        pagination.max = Math.ceil(
          pagination.posts.total / pagination.posts.perPage
        );

      } catch (error) {
        alert('Ошибка');
        console.error(error);
      } finally {
        state.isPostLoading = false;
      }
    },
    changePage({ state, dispatch }, pageNum) {
      if (pageNum != "loadMore") {
        state.pagination.type = "by page";
        state.pagination.current = +pageNum;
      } else {
        state.pagination.type = "endless tape";
        state.pagination.current++;
      }

      dispatch('fetchPosts');
    },
    changePerPage({ state, dispatch }, perPage) {
      state.pagination.type = "by page";

      state.pagination.posts.perPage = +perPage;

      state.pagination.current = 1;
      console.log(this);
      dispatch('fetchPosts');
    },
    changePaginationType({ state },) {
      state.pagination.type = "endless tape";
    },
  },

  namespaced: true
};