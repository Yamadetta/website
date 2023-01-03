<template>
  <div class="close-button"></div>
</template>

<script>
export default {
  name: "close-button",
};
</script>

<style lang="scss" scoped>
.close-button {
  position: relative;

  width: 22px;
  height: 22px;
  opacity: 1;

  cursor: pointer;

  &:hover {
    opacity: 1;
  }
  &:before,
  &:after {
    position: absolute;
    left: 11px;
    right: 0;

    content: " ";
    height: 22px;
    width: 2px;
    background-color: var(--white-text-color);
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
}
</style>