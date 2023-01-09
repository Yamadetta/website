import { ref, computed } from "vue";

export function useSortedPosts(posts) {

  const currentSortType = ref('id');

  const sortedPosts = computed(() => {
    if (currentSortType.value) {
      return [...posts.value].sort((post1, post2) =>
        post1[currentSortType.value] > post2[currentSortType.value] ? 1 : -1
      );
    } else {
      return [...posts.value];
    }
  });

  return {
    currentSortType,
    sortedPosts
  };
}