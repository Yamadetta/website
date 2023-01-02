<template>
  <main ref="main">
    <iframe seamless :src="iframeLink" frameborder="0"></iframe>
    <div v-if="isResize" class="mask"></div>
    <div class="project-controls-wrapper">
      <button class="project-controls main-button">
        <inline-svg :src="require('@/assets/icons/settings-icon.svg')" />
      </button>
      <button class="project-controls description-button">
        <inline-svg :src="require('@/assets/icons/description-icon.svg')" />
      </button>
      <button
        class="project-controls preview-code-button"
        @click="codePreviewSwitch"
      >
        <inline-svg :src="require('@/assets/icons/code-window.svg')" />
      </button>
    </div>
  </main>

  <code-preview
    @close="codePreviewSwitch"
    @resize="resize"
    :folderMap="projectMap"
    v-if="codePreview"
  />
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
      isResize: false,
    };
  },
  mounted() {
    let link = this.$route.fullPath;
    let last = link.split("/");
    last = `${this.$route.params.name}.html`;
    link += `/${last}`;
    link = link.replace("//", "/");

    this.iframeLink = link;
  },
  methods: {
    async codePreviewSwitch() {
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
      this.$refs.main.style.height = "";
    },
    resize(codePreviewEl) {
      let main = {
        el: this.$refs.main,
        startHeight: 0,
      };

      let codePreview = {
        el: codePreviewEl,
        startHeight: 0,
      };

      main.height = main.el.offsetHeight;
      codePreview.height = codePreview.el.offsetHeight;

      const doDrag = (e) => {
        this.isResize = true;
        codePreview.el.style.height = `${innerHeight - e.screenY}px`;
        main.el.style.height = `${e.screenY}px`;

        // p.style.width = startWidth + e.clientX - startX + "px";
        // p.style.height = startHeight + e.clientY - startY + "px";
      };

      const stopDrag = (e) => {
        document.documentElement.removeEventListener(
          "mousemove",
          doDrag,
          false
        );
        this.isResize = false;
      };

      document.documentElement.addEventListener("mousemove", doDrag, false);
      document.documentElement.addEventListener("mouseup", stopDrag, false);
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  position: relative;

  height: 100vh;
  background-color: gray;
}
iframe {
  display: block;
  background-color: #fff;
  width: 100%;
  height: 100%;
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.project-controls-wrapper {
  position: absolute;
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


<style lang="scss">
.ProjectPage {
  #app {
    display: flex;
    flex-direction: column;
    max-height: 100vh;
  }

  main {
    flex-grow: 1;
  }
}
</style>