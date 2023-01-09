import axios from "axios";
import { onMounted, ref } from "vue";

export function usePosts() {
  let
    isPostLoading = ref(true),
    posts = ref([]),
    pagination = ref({
      current: 1,
      max: 0,
      type: "by page", // or 'endless tape'
      posts: {
        perPage: 10,
        total: 0,
      },
    });

  const fetchPosts = async () => {
    try {
      if (pagination.type === "by page") {
        posts.value = [];
        isPostLoading.value = true;
      }

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _limit: pagination.value.posts.perPage,
            _page: pagination.value.current,
          },
        }
      );

      if (pagination.value.type === "by page") {
        posts.value = response.data;
      } else {
        posts.value = [...posts.value, ...response.data];
      }

      pagination.value.posts.total = +response.headers["x-total-count"];
      pagination.value.max = Math.ceil(
        pagination.value.posts.total / pagination.value.posts.perPage
      );
    } catch (error) {
      console.error(error);
    } finally {
      isPostLoading.value = false;
    }
  };

  onMounted(fetchPosts);

  return {
    fetchPosts,
    isPostLoading,
    posts, pagination
  };
}