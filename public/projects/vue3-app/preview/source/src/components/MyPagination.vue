<template>
  <div ref="root">
    <div v-show="pagination.max > 0" class="pagination">
      <div class="pagination__items">
        <my-button
          v-for="pageNum in pagination.max"
          :key="pageNum"
          class="pagination__item"
          :class="{
            current: pageNum == pagination.current,
          }"
          @click="$emit('changePage', pageNum)"
        >
          {{ pageNum }}
        </my-button>

        <div class="pagination__controls">
          <div class="pagination__text">Выводить на странице:</div>
          <my-select
            @change="$emit('changePerPage', perPage)"
            v-model="perPage"
            :options="perPageValues"
            :defaultOption="false"
          />
        </div>
      </div>

      <my-button
        v-if="pagination.type == 'by page'"
        @click="$emit('changePaginationType')"
        class="pagination__load-more"
        >Показать больше</my-button
      >

      <div v-show="pagination.type == 'endless tape'" class="observer"></div>
    </div>
  </div>
</template>

<script>
import MyButton from "./UI/MyButton.vue";
import MySelect from "./UI/MySelect.vue";
import { ref, onMounted } from "vue";
export default {
  components: { MySelect, MyButton },

  data() {
    return {
      perPageValues: [
        { value: "10", name: "10" },
        { value: "15", name: "15" },
        { value: "20", name: "20" },
        { value: "25", name: "25" },
        { value: "30", name: "30" },
        { value: "40", name: "40" },
        { value: "50", name: "50" },
      ],
      perPage: "10",
    };
  },

  emits: [
    "changePage", // Поменять страницу
    "changePerPage", // Изменить количество элементов на одной странице
    "changePaginationType", // Поменялся тип пагинации
  ],
  props: {
    pagination: {
      type: Object,
      required: true,
    },
  },

  setup() {
    const root = ref(null);
    return {
      root,
    };
  },

  computed: {
    paginationType() {
      return this.pagination.type;
    },
  },

  watch: {
    paginationType(value) {
      const options = {
        rootMargin: "0px",
        threshold: 1.0,
      };

      const callback = (entries, observer) => {
        if (
          entries[0].isIntersecting &&
          this.pagination.current < this.pagination.max
        ) {
          this.$emit("changePage", "loadMore");
        }
      };
      const observer = new IntersectionObserver(callback, options);

      if (value == "endless tape") {
        observer.observe(this.root.querySelector(".observer"));
      } else {
        observer.disconnect();
      }
    },
    // observer.observe(root.value.querySelector(".observer"));
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  &,
  &__items {
    display: flex;
    flex-wrap: wrap;

    margin-top: 1rem;
    gap: 1rem;
  }

  justify-content: space-between;

  &__items {
    margin-top: 0;
    width: 100%;
  }

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 3em;
    height: 3em;

    padding: 1em;
    font-size: 1rem;

    &.current {
      background-color: var(--button-bg-light-color-hover);
    }
  }

  &__controls {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;

    flex-grow: 1;
  }

  &__load-more {
    width: 100%;
  }

  .observer {
    // background-color: red;
    width: 100%;
    // height: 30px;
  }
}
</style>