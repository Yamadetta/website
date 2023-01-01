<template>
  <!-- <main>
    <iframe seamless :src="iframeLink" frameborder="0"></iframe>

    <div class="project-controls-wrapper">
      <button class="project-controls main-button">
        <inline-svg :src="require('@/assets/icons/settings-icon.svg')" />
      </button>
      <button class="project-controls description-button">
        <inline-svg :src="require('@/assets/icons/description-icon.svg')" />
      </button>
      <button
        class="project-controls preview-code-button"
        @click="createCodePreview"
      >
        <inline-svg :src="require('@/assets/icons/code-window.svg')" />
      </button>
    </div>
  </main> -->

  <code-preview :folderMap="projectMap" v-if="codePreview" />
</template>

<script>
import CodePreview from "@/components/CodePreview.vue";

export default {
  components: { CodePreview },
  data() {
    return {
      iframeLink: "",
      codePreview: false,
      projectMap: {},
    };
  },
  mounted() {
    let link = this.$route.fullPath;
    let last = link.split("/");
    last = `${this.$route.params.name}.html`;
    link += `/${last}`;
    link = link.replace("//", "/");

    this.iframeLink = link;
    this.createCodePreview();
  },
  methods: {
    async createCodePreview() {
      if (Object.keys(this.projectMap).length === 0) {
        await fetch(`/projects/${this.$route.params.name}/source/map.json`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            this.projectMap = data;
          });
      }

      this.codePreview = this.codePreview ? false : true;
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  height: 100vh;
}
iframe {
  display: block;
  background-color: #fff;
  width: 100%;
  height: 100%;
}

.project-controls-wrapper {
  position: fixed;
  right: 50px;
  bottom: 50px;

  width: 60px;
  height: 60px;

  animation: hide-animation 0.2s linear 0s 1 normal forwards;

  &:hover {
    width: 150px;
    height: 150px;
    .description-button {
      animation: description-button-in 0.2s ease-out 0s 1 normal forwards;
    }
    .preview-code-button {
      animation: preview-code-button-in 0.2s ease-out 0s 1 normal forwards;
    }
  }
}

.project-controls {
  position: absolute;
  bottom: 0;
  right: 0;

  width: 60px;
  height: 60px;
  padding: 15px;
  border-radius: 50%;

  background-color: var(--basic-card-bg-color);
  box-shadow: 1px 3px 6px var(--basic-card-bg-color);
}

.main-button {
}

.description-button {
  animation: description-button-out 0.2s ease-out 0s 1 normal forwards;
}

.preview-code-button {
  animation: preview-code-button-out 0.2s ease-out 0s 1 normal forwards;
}

@keyframes hide-animation {
  0% {
    opacity: 0;
  }
  99% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes description-button-in {
  from {
    transform: translateY(0%);
    opacity: 0;
  }
  to {
    transform: translateY(-150%);
    opacity: 1;
  }
}

@keyframes description-button-out {
  from {
    transform: translateY(-150%);
    opacity: 1;
  }

  to {
    transform: translateY(0%);
    opacity: 0;
  }
}

@keyframes preview-code-button-in {
  from {
    transform: translateX(0%);
    opacity: 0;
  }
  to {
    transform: translateX(-150%);
    opacity: 1;
  }
}

@keyframes preview-code-button-out {
  from {
    transform: translateX(-150%);
    opacity: 1;
  }

  to {
    transform: translateX(0%);
    opacity: 0;
  }
}
</style>
