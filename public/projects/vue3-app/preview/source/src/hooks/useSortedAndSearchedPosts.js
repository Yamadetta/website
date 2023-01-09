import { computed, ref } from "vue";

export function useSortedAndSearchedPosts(posts) {
  const serachQuery = ref('');

  const sortedAndSearchedPosts = computed(() => {
    if (serachQuery.value) {
      return posts.value.filter((item) =>
        item.title.toLowerCase().includes(serachQuery.value.toLowerCase())
      );
    } else {
      return posts.value;
    }
  });

  return {
    sortedAndSearchedPosts, serachQuery
  };
}