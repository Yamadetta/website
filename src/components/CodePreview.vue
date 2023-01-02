<template>
  <div ref="codePreview" class="code-preview">
    <div class="code-preview__header">
      <div @mousedown="resize" class="resizer"></div>
      <div class="title">Исходный код проекта</div>
      <div class="close-button" @click="$emit('close')"></div>
    </div>

    <div class="code-preview__body">
      <div @click="foldFolder" v-html="folderTree" class="folder-tree"></div>
      <code-preview-window :file="file" />
    </div>
  </div>
</template>



<!-- https://prismjs.com/download.html#themes=prism-okaidia&languages=markup+css+clike+javascript+css-extras+git+ignore+json+scss&plugins=line-numbers+autolinker+highlight-keywords+inline-color+match-braces -->
<script>
import { renderFolder } from "@/hooks/useRenderFolder.js";
import CodePreviewWindow from "@/components/CodePreviewWindow.vue";

export default {
  components: { CodePreviewWindow },
  props: {
    folderMap: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      folderTree: "",
      file: {
        content: "",
        extension: "",
        path: "",
      },
    };
  },
  methods: {
    foldFolder(event) {
      if (event.target.getAttribute("data-path") !== null) {
        fetch(event.target.getAttribute("data-path"))
          .then((response) => {
            return response.text();
          })
          .then((data) => {
            this.file.content = data;
            this.file.extension = event.target.getAttribute("data-extension");
            this.file.path = event.target.getAttribute("data-path");
          });

        return;
      }

      let folder = event.target.parentNode.parentNode;

      folder.querySelector(".folder__files").classList.toggle("hidden");
      folder.querySelector(".folder__title").classList.toggle("fold");
    },

    resize() {
      this.$emit("resize", this.$refs.codePreview);
    },
  },

  mounted() {
    // document
    //   .querySelector(
    //     '[data-path="/projects/center-logistic/source/gulp/config/plugins.js"]'
    //   )
    //   .click();
  },

  setup(props) {
    const folderTree = renderFolder(props.folderMap);
    return { folderTree };
  },
};
</script>

<style lang="scss">
.code-preview {
  display: flex;
  flex-direction: column;
  background-color: var(--basic-card-bg-color);
  height: 30vh;

  &__header {
    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0.5rem 1rem;

    background-color: var(--basic-card-bg-color-light);

    .resizer {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 4px;

      cursor: row-resize;
    }

    .title {
      color: var(--white-text-color);
      font-size: 1.2rem;
      font-weight: bold;

      user-select: none;
    }
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
  }

  &__body {
    padding: 0 1rem 1rem 1rem;
    display: flex;
    max-height: calc(100% - 50px);
  }
}
.folder-tree {
  max-width: 15%;
  min-width: 10%;
  overflow: auto;
  padding: 0 1rem 0 0;
}

.code-content {
  color: var(--white-text-color);
  width: 100%;
  overflow: auto;
  padding-left: 1rem;
}

.folder {
  user-select: none;
  cursor: pointer;

  &__icon {
    display: inline;
    width: 25px;

    &--open,
    &--closed {
      display: none;
    }
  }

  &__title {
    color: var(--white-text-color);
    display: flex;
    gap: 0.2rem;
    align-items: flex-end;

    margin-bottom: 0.4rem;

    font-size: 1.3rem;
    font-weight: bold;

    &.fold {
      .folder__icon--closed {
        display: inline;
      }
    }

    &:not(.fold) {
      .folder__icon--open {
        display: inline;
      }
    }
  }

  &__files {
    margin-left: 1rem;
    position: relative;

    &::before {
      content: "";

      position: absolute;
      top: 0;
      left: -0.5rem;

      height: 100%;
      width: 1px;

      background-color: var(--white-text-color);
    }
  }
}

.file {
  display: flex;
  user-select: none;
  cursor: pointer;

  &__icon {
    width: 25px;
  }

  &__name {
    color: var(--white-text-color);
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.hidden {
  display: none;
}
</style>