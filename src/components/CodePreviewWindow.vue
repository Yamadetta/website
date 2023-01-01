<template>
  <div class="code-preview">
    <pre v-html="highlightsCode"></pre>
  </div>
</template>

<script>
import renderCode from "@/hooks/usePrism.js";

export default {
  props: {
    code: {
      type: String,
      required: true,
    },
  },
  computed: {
    highlightsCode() {
      return renderCode(this.code);
    },
  },

  setup(props) {
    // return { renderCode };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/prism.css";
.code-preview {
  color: var(--white-text-color);
}
</style>