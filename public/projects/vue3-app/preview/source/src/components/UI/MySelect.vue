<template>
  <div class="select-wrapper">
    <select class="select" :value="modelValue" @change="changeOption">
      <option v-if="defaultOption == true" disabled value="">
        Отсортировать
      </option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
    defaultOption: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.select-wrapper {
  display: inline-block;
  position: relative;
  height: fit-content;
  font-size: 1rem;

  &::after {
    content: ">";
    position: absolute;
    top: 0;
    right: 0.5em;

    transform: rotate(90deg);

    font-size: 1.3em;
    font-weight: 900;

    height: 100%;

    display: flex;
    align-items: center;

    pointer-events: none;
  }
}
.select {
  width: fit-content;
  padding: 0.5em 1.7em 0.5em 0.5em;

  color: white;
  background-color: var(--button-bg-light-color);

  border: none;
  border-radius: 4px;

  cursor: pointer;
  appearance: none;
  transition: background-color 0.2s linear;

  &:hover,
  &:focus-visible {
    background-color: var(--button-bg-light-color-hover);
  }

  &:focus-visible {
    outline: none;
    border: 2px solid var(--buton-border-focus-color);
    padding: calc(0.5em - 2px) calc(1.7em - 2px) calc(0.5em - 2px)
      calc(0.5em - 2px);
  }
}
</style>