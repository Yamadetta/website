<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style lang="scss">
.button {
  display: block;

  width: fit-content;
  padding: 0.7rem 1rem;

  color: white;
  background-color: var(--button-bg-light-color);

  border: none;

  border-radius: 4px;

  cursor: pointer;
  transition: background-color 0.2s linear;

  &:hover,
  &:focus-visible {
    background-color: var(--button-bg-light-color-hover);
  }

  &:focus-visible {
    outline: none;
    border: 2px solid var(--buton-border-focus-color);
    padding: calc(0.7rem - 2px) calc(1rem - 2px);
  }

  &--dark {
    background-color: var(--button-bg-dark-color);

    &:hover,
    &:focus-visible {
      background-color: var(--button-bg-dark-color-hover);
    }

    &:focus-visible {
      outline: none;
      border: 2px solid var(--buton-border-focus-color);
      padding: calc(0.7rem - 2px) calc(1rem - 2px);
    }
  }
}
</style>