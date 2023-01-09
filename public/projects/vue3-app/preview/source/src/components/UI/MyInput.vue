<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="input"
    type="text"
  />
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number],
  },
};
</script>

<style lang="scss">
.input {
  color: white;
  background-color: var(--element-bg-color);
  width: 100%;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;

  transition: background-color 0.2s linear;

  &:focus-visible,
  &:hover {
    outline: none;
    border: 2px solid var(--buton-border-focus-color);
    padding: calc(0.5rem - 2px);
    background-color: var(--button-bg-light-color-hover);
  }

  &::placeholder {
    color: #8ef0e8;
  }
}
</style>