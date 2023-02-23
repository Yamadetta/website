<template>
  <div ref="codeContent" class="code-content"></div>
</template>

<script>
import usePrism from "@/hooks/usePrism.js";

export default {
  props: {
    file: {
      type: Object,
      required: true,
    },
  },
  computed: {
    highlightsCode() {
      return usePrism(this.file);
    },
  },

  watch: {
    highlightsCode() {
      if (this.highlightsCode.type == String) {
        this.$refs.codeContent.innerHTML = this.highlightsCode.data;
      } else {
        this.$refs.codeContent.innerHTML = "";
        this.$refs.codeContent.append(this.highlightsCode.data);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/prism.css";
</style>

<style lang="scss">
.code-content pre.line-numbers.rainbow-braces.match-braces {
  width: fit-content;
}
</style>
