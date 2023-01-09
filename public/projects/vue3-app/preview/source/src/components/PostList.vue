<template>
  <my-loader v-if="isLoading" class="posts-loader" />

  <div v-if="posts.length > 0 && !isLoading" class="posts-container">
    <div class="posts">
      <transition-group name="posts-list">
        <post-item
          class="posts-list-item"
          @removePost="$emit('removePost', post)"
          v-for="post in posts"
          :key="post.id"
          :post="post"
        />
      </transition-group>
    </div>
  </div>

  <my-pagination
    v-if="isLoading || posts.length > 0"
    @changePage="$emit('changePage', $event)"
    @changePerPage="$emit('changePerPage', $event)"
    @changePaginationType="$emit('changePaginationType')"
    :pagination="pagination"
  />

  <div v-if="posts.length === 0 && !isLoading" class="empty-title">
    Ничего не найдено...
  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
import MyPagination from "@/components/MyPagination.vue";

export default {
  emits: [
    "removePost", // Удаление поста
    "changePage", // Поменять страницу
    "changePerPage", // Изменить количество элементов на одной странице
    "changePaginationType", // Поменялся тип пагинации
  ],
  components: { PostItem, MyPagination },
  props: {
    posts: {
      type: Array,
      required: true,
    },
    pagination: {
      type: Object,
      required: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      flag: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.posts-loader {
  margin: 1rem auto;
}

.posts-list {
  &-item {
    // display: inline-block;
    // margin-right: 10px;
  }

  &-enter-active,
  &-leave-active {
    transition: all 0.3s ease;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateX(15px);
  }

  &-move {
    transition: transform 0.8s ease;
  }
}

.empty-title {
  font-size: 3rem;

  width: fit-content;
  padding: 0.2em 0.8em;
  margin: 0 auto;

  background-color: var(--element-bg-color);
  box-shadow: 2px 2px 4px #006a62;
}
</style>