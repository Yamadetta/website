<template>
  <div :style="{ height: codePreviewHeight }" class="code-preview">
    <div class="code-preview__header">
      <background-mask :blackout="false" :zIndex="100" v-if="isResize" />
      <div
        @mousedown="$emit('resize', $event)"
        @touchstart="$emit('resize', $event)"
        class="resizer"
      ></div>
      <div class="title">Исходный код проекта</div>
      <close-button @click="$emit('close')" />
    </div>

    <div class="code-preview__body">
      <div class="code-preview__controls">
        <button class="show-folders" @click="showFolders">
          <inline-svg
            :src="require('@/assets/code-preview-icons/default_folder.svg')"
          />
        </button>
        <button class="show-code" @click="showCode">
          <inline-svg :src="require('@/assets/icons/code-window.svg')" />
        </button>
      </div>
      <div class="code-preview__content">
        <div
          @click="foldFolder"
          v-html="folderTree"
          class="folder-tree"
          :class="{ show: isShowFolders }"
        ></div>
        <code-preview-window :file="file" :class="{ show: isShowCode }" />
      </div>
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
    codePreviewHeight: {
      type: String,
      default: "auto",
    },
    isResize: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      file: {
        content: "",
        extension: "",
        path: "",
      },
      isShowCode: false,
      isShowFolders: true,
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
    showCode() {
      this.isShowCode = true;
      this.isShowFolders = false;
    },
    showFolders() {
      this.isShowCode = false;
      this.isShowFolders = true;
    },
  },

  mounted() {
    // document
    //   .querySelector(
    //     '[data-path="/projects/center-logistic/source/gulpfile.js"]'
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
  min-height: 100px;
  max-height: 90vh;

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

      transition: background-color 0.1s linear;

      z-index: 201;

      &:hover {
        background-color: #944aff;
      }

      &.active {
        background-color: #b800ff;
      }

      @media (max-width: 768px) {
        background-color: #944aff;

        width: 30%;
        height: 6px;
        left: 50%;
        transform: translateX(-50%);
      }
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
    height: 100%;
    max-height: calc(100% - 50px);
  }

  &__controls {
    display: none;
  }

  @media (max-width: 768px) {
    &__body {
      display: flex;
    }

    &__controls {
      display: block;
      width: 30px;
    }
  }

  &__content {
    display: flex;
    height: 100%;

    padding: 0 0 1rem 0;
    flex-grow: 1;

    @media (max-width: 768px) {
      width: calc(100% - 30px);
    }

    & > div {
      @media (max-width: 768px) {
        &.show {
          width: 100%;
          max-width: 100%;
        }

        &:not(.show) {
          width: 0%;
          min-width: 0%;
          padding: 0;
          margin: 0;
        }
      }
    }
  }
}

.folder-tree {
  max-width: 15%;
  min-width: 10%;
  overflow: auto;
  padding: 0 1rem 0 0.5rem;
  background-color: var(--basic-card-bg-color-dark);
}

.code-content {
  color: var(--white-text-color);
  background-color: #1e1e1e;
  width: 100%;
  overflow: auto;
  margin-left: 1rem;

  @media (max-width: 768px) {
    margin-left: 0;
  }
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