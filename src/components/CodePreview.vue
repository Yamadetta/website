<template>
  <div class="code-preview-wrapper">
    <div @click="foldFolder" v-html="folderTree" class="folder-tree"></div>
    <code-preview-window :code="code" />
  </div>
</template>

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
      code: "",
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
            this.code = data;
          });

        return;
      }

      let folder = event.target.parentNode.parentNode;

      folder.querySelector(".folder__files").classList.toggle("hidden");
      folder.querySelector(".folder__title").classList.toggle("fold");
    },
  },

  mounted() {
    fetch(`/projects/${this.$route.params.name}/source/map.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  },

  setup(props, route) {
    const folderTree = renderFolder(props.folderMap);
    return { folderTree };
  },
};
</script>

<style lang="scss">
.code-preview-wrapper {
  display: flex;
  padding-top: 200px;
  background-color: #2c2c2c;
}
.folder-tree {
  min-width: 20%;
}
.code-preview {
}

.folder-tree {
}

.folder {
  user-select: none;

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

    font-size: 1.3rem;
    font-weight: bold;
    cursor: pointer;

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
  }
}

.file {
  display: flex;
  user-select: none;

  &__icon {
    width: 25px;
  }

  &__name {
    color: var(--white-text-color);
  }
}

.hidden {
  display: none;
}
</style>