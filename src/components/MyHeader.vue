<template>
  <header :class="{ show: isShowHeader }">
    <div class="logo">
      <router-link to="/">yamadetta</router-link>
    </div>
    <nav>
      <router-link class="underline" to="/">Главная</router-link>
      <router-link class="underline" to="/projects">Портфолио</router-link>
      <router-link class="underline" to="/articles">Статьи</router-link>
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
    };
  },
};
</script>


<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  width: 100%;

  position: relative;

  font-size: 1.2rem;

  color: var(--white-text-color);
  background-color: #2f244b;
  box-shadow: 1px 3px 6px #2f244b;

  padding: 1rem;
}

.expand-button {
  display: none;
}

a {
  color: var(--white-text-color);
  text-decoration: none;
}

nav {
  display: flex;
  gap: 1rem;

  .router-link-active {
    &::after {
      width: 100%;
    }
  }
}

.ProjectPage {
  .expand-button {
    display: block;
    position: absolute;
    bottom: -25px;
    right: 20px;

    padding: 0;

    width: 25px;
    height: 25px;

    button {
      background: #2f244b;
      border: none;
      padding: 0;

      width: 25px;
      height: 25px;

      cursor: pointer;

    }
  }

  header {
    position: fixed;
    transition: transform 0.2s ease-out;
    transform: translateY(-100%);
    z-index: 1;

    .expand-button button {
      transform: rotate(0deg);
      transition: transform 0.2s ease-out;
    }
  }

  header.show {
    transform: translateY(0);
    .expand-button button {
      transform: rotate(180deg);
    }
  }
}
</style>