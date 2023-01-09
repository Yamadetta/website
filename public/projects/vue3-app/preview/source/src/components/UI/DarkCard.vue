<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "dark-card",
};
</script>

<style lang="scss" scoped>
.card {
  width: fit-content;
  padding: 1em;
  background-color: var(--element-bg-color);
  box-shadow: 1px 3px 6px var(--element-bg-color);
}
</style>