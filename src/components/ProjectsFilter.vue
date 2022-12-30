<template>
  <basic-card>
    <h3>Фильтр</h3>

    <filter-item
      @sectionChanged="$emit('sectionChanged', value)"
      v-for="sortItem in sortList"
      :key="sortItem.id"
      :sortItem="sortItem"
    ></filter-item>
  </basic-card>
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
  },
};
</script>

<style lang="scss" scoped>
</style>