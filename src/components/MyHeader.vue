<template>
  <basic-card>
    <div class="logo"><router-link to="/">yamadetta</router-link></div>
    <nav>
      <router-link to="/">Главная</router-link>
      <router-link to="/projects">Портфолио</router-link>
      <router-link to="/articles">Статьи</router-link>
    </nav>
  </basic-card>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
.card {
  display: flex;
  justify-content: space-between;
  width: 100%;

  font-size: 1.2rem;
}

a {
  color: var(--white-text-color);
  text-decoration: none;
}

nav {
  display: flex;
  gap: 1rem;

  a {
    position: relative;

    &::after {
      content: "";
      height: 2px;
      width: 0;
      background-color: var(--white-text-color);

      position: absolute;
      left: 0;
      bottom: 0;

      transition: width 0.2s ease-out;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }

    &.router-link-active {
      &::after {
        width: 100%;
      }
    }
  }
}
</style>