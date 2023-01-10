<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "basic-button",

}
</script>

<style lang="scss" scoped>
.btn {
  background-color: var(--basic-card-bg-color-light);
  color: var(--white-text-color);
  padding: 1em;

  transition: background-color .2s ease-out;

  box-shadow: 1px 3px 6px var(--basic-card-bg-color);

  &:hover {
    background-color: var(--basic-card-bg-color-light-2);
  }

  &.w-100 {
    width: 100%;
  }
}
</style>