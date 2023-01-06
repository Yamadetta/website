<template>
  <header :class="{ show: isShowHeader }">
    <div class="logo">
      <router-link class="link" to="/">
        <img class="logo__img" src="@/assets/icons/logotype.jpg" alt="" />
      </router-link>
    </div>

    <!-- Скрытый инпут вместо добавления класса -->
    <input v-model="isShowNavigation" type="checkbox" id="burger-input" />

    <!-- Кнопка, которая переключает инпут в true/false -->
    <label class="burger" for="burger-input">
      <div class="burger__line"></div>
      <div class="burger__line"></div>
      <div class="burger__line"></div>
    </label>

    <nav class="navigation" @click="hideNavigation">
      <router-link class="underline link" to="/">Главная</router-link>
      <router-link class="underline link" to="/projects">Портфолио</router-link>
      <router-link class="underline link" to="/articles">Статьи</router-link>
    </nav>

    <basic-card class="expand-button">
      <button @click="this.isShowHeader = this.isShowHeader ? false : true">
        <inline-svg
          :src="require('@/assets/icons/down-arrow.svg')"
        ></inline-svg>
      </button>
    </basic-card>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isShowHeader: true,
      isShowNavigation: false,
    };
  },
  methods: {
    hideNavigation() {
      this.isShowNavigation = false;
    },
  },
  watch: {
    isShowNavigation() {
      this.$store.commit("setAboveElement", this.isShowNavigation);
    },
  },
};
</script>


<style lang="scss" scoped>
a {
  color: var(--white-text-color);
  text-decoration: none;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  position: relative;

  font-size: 1.2rem;

  color: var(--white-text-color);
  background-color: var(--basic-card-bg-color);
  box-shadow: 1px 3px 6px var(--basic-card-bg-color);

  padding: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;

    height: var(--header-height);

    padding: 0.5rem 1rem;
    z-index: 200;
  }

  .logo {
    .link {
      display: flex;
      gap: 0.5rem;
    }

    &__img {
      max-width: 50px;
    }
  }
}

.navigation {
  display: flex;
  gap: 1rem;

  .router-link-active {
    &::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    right: 0;

    gap: 0;
    flex-direction: column;

    width: 100vw;
    height: calc(100vh - 100%);

    background-color: var(--basic-card-bg-color-dark-transparent);

    transform: translateX(100%);
    transition: transform 0.3s ease-out;
    z-index: 200;

    .link {
      text-align: right;
      padding: 0.5rem 1rem;
    }

    .router-link-active {
      background-color: var(--basic-card-bg-color-dark);

      &::after {
        width: 0%;
      }
    }
  }
}

@import "@/components/header/style/burger.scss";
@import "@/components/header/style/project-page.scss";
</style>