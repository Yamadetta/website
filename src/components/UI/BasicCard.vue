<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "basic-card",
};
</script>

<style lang="scss">
.card {
  color: var(--white-text-color);
  background-color: #2f244b;
  box-shadow: 1px 3px 6px #2f244b;

  padding: 1rem;
  width: fit-content;
}
</style>