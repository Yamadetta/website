<template>
  <basic-card class="project light">
    <router-link
      :to="'/projects/' + project.folder + '/'"
      class="project__preview"
    >
      <div class="desktop">
        <div class="desktop__border">
          <div class="desktop__screen">
            <img
              :src="`/projects/${project.folder}${project.previewimage.desktop}`"
              :alt="
                'Изображение проекта ' +
                project.folder.replaceAll('-', ' ') +
                ' на десктопе'
              "
            />
          </div>
        </div>
      </div>

      <div class="smartphone">
        <div class="smartphone__border">
          <div class="smartphone__screen">
            <img
              :src="`/projects/${project.folder}${project.previewimage.mobile}`"
              :alt="
                'Изображение проекта ' +
                project.folder.replaceAll('-', ' ') +
                ' на смартфоне'
              "
            />
          </div>
        </div>
      </div>
    </router-link>

    <div class="project__content">
      <router-link class="title" :to="`/projects/${project.folder}/`">
        <h2 class="underline">{{ project.title }}</h2>
      </router-link>

      <time :datetime="project.time.machine">{{ project.time.human }}</time>

      <div class="description">{{ project.description }}</div>

      <!-- <div class="languages"></div> -->
    </div>
  </basic-card>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.project {
  display: flex;
  gap: 2%;
  align-items: flex-start;

  width: 100%;

  --border-color: #7c11ae;
  box-shadow: 0px 6px 10px 0px rgb(0 0 0 / 36%);

  --preview-width: 25%;

  transition: box-shadow 0.2s ease-out;

  &.card {
    &:not(:last-child) {
      margin-bottom: 1rem;
    }

    padding: calc(10px + 1px);
  }

  .title {
    color: var(--white-text-color);
    text-decoration: none;
  }

  h2 {
    font-size: 1.7rem;
    width: fit-content;
  }

  &__preview {
    position: relative;
    width: var(--preview-width);
    height: fit-content;
  }

  &__content {
    width: calc(100% - var(--preview-width));
    font-size: clamp(1rem, 1.5vw, 1.3rem);
  }

  &:hover {
    @media (min-width: 768px) {
      border: 1px solid var(--border-color);
      padding: 10px;
      box-shadow: 0px 6px 10px 0px rgb(0 0 0 / 60%);
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;

    &__content,
    &__preview {
      width: 100%;
    }

    &.card {
      // padding: 2%;
    }
  }
}

// PC and SmartPhone
.desktop {
  width: 100%;
  padding: 6% 7%;

  --keyboard-height: 8%;

  &__border {
    padding: 3%;
    background-color: #e8e8e8;

    position: relative;

    &:after {
      content: "";
      display: block;
      position: absolute;
      bottom: calc(0% - var(--keyboard-height));
      left: calc(0% - var(--keyboard-height));
      width: calc(100% + (var(--keyboard-height) * 2));
      height: var(--keyboard-height);
      background: linear-gradient(180deg, #e8e8e8 15%, rgb(102 102 102) 100%);
      border-radius: 6px;
    }

    &:before {
      content: "";
      display: block;
      position: absolute;
      bottom: calc(2% - var(--keyboard-height));
      left: 35%;

      width: 30%;
      height: calc(var(--keyboard-height) - 2%);

      background: #7c00b5;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      z-index: 1;
    }
  }

  &__screen {
    width: 98%;
    padding-bottom: 50.25%;

    position: relative;

    border-radius: 6px;
    background-color: white;
    overflow: hidden;

    img {
      position: absolute;
      object-fit: cover;
      top: -2%;
      left: -2%;
      width: 102%;
      height: 102%;
    }
  }
}

.smartphone {
  position: absolute;
  width: 50%;
  z-index: 1;
  top: 2%;
  right: 0;

  display: flex;
  justify-content: flex-end;

  &__border {
    position: relative;
    width: 56.25%;

    box-shadow: 1px 3px 6px black;

    padding: 12% 3%;
    background: linear-gradient(
      0deg,
      rgba(228, 228, 228, 1) 78%,
      rgb(214 214 214) 100%
    );
    border-top-left-radius: 9% 6%;
    border-top-right-radius: 9% 6%;
    border-bottom-left-radius: 9% 6%;
    border-bottom-right-radius: 9% 6%;

    &::before {
      content: "";
      display: block;
      width: 18%;
      height: 1%;
      position: absolute;
      top: 3%;
      left: 41%;
      background: #54007b;
      border-radius: 10px;
    }

    &::after {
      content: "";
      display: block;
      width: 12%;
      padding-bottom: 12%;
      position: absolute;
      left: 44%;
      bottom: 2.5%;
      background: #54007b;
      border-radius: 50%;
    }
  }

  &__screen {
    position: relative;

    --smartphone-width: 100%;

    width: var(--smartphone-width);
    padding-bottom: calc(var(--smartphone-width) * 1.77);
    border-radius: 2%;
    overflow: hidden;
    margin: 0 auto;
    background-color: #fff;

    img {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>
