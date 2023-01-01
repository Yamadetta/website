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
  background-color: var(--basic-card-bg-color);
  box-shadow: 1px 3px 6px var(--basic-card-bg-color);

  padding: 1rem;
  width: fit-content;
}

.light {
  background-color: var(--basic-card-bg-color-light);
}
</style>