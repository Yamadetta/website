<template>
  <section class="filter-section">
    <h4 class="filter-section__title">{{ sortItem.title }}</h4>

    <div
      :key="option"
      v-for="(value, option) in sortItem.data"
      class="filter-section__item"
    >
      <input
        @input="changeValue(option, $event.target.checked)"
        type="checkbox"
        name=""
        :id="option"
        :checked="value"
      />
      <label :for="option">{{ option }}</label>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    sortItem: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      sectionStatus: {},
    };
  },
  methods: {
    changeValue(option, value) {
      this.sortItem.data[option] = value;
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
</style>