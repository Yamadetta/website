<template>
  <aside class="filter card" :class="{ show: isShowFilter }">
    <div class="filter__header">
      <h3>Фильтр</h3>
      <close-button @click="$emit('closeFilter')" />
    </div>

    <div v-if="!isLoading" class="filter__options">
      <filter-item
        v-for="sortItem in sortList"
        :key="sortItem.id"
        :sortItem="sortItem"
      />
    </div>
    <my-loader v-if="isLoading" />
  </aside>
</template>

<script>
import FilterItem from "@/components/FilterItem.vue";
export default {
  components: { FilterItem },
  props: {
    sortList: {
      type: Array,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
    isShowFilter: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  margin-bottom: 0.5rem;
}

.filter {
  max-width: 20%;
  min-width: 200px;
  width: 100%;
  height: fit-content;

  &__header {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;

    .close-button {
      display: none;
    }
  }
}

@media (max-width: 768px) {
  .filter {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
    max-width: 100vw;
    height: 100vh;

    margin-top: 0;

    background-color: var(--basic-card-bg-color-dark-transparent);

    transform: translateX(-100%);

    transition: transform 0.3s ease-out;

    &__header {
      .close-button {
        display: block;
      }
    }

    &.show {
      transform: translateX(0);
    }
  }
}
</style>
