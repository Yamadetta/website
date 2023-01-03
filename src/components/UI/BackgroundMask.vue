<template>
  <div
    class="background-mask"
    :class="{ blackout: blackout }"
    :style="{ 'z-index': zIndex }"
  ></div>
</template>

<script>
export default {
  name: "background-mask",
  props: {
    zIndex: {
      type: Number,
      default: 1,
    },
    blackout: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.background-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  &.blackout {
    background-color: #0000005e;
  }
}
</style>