<template>
  <header>
    <div class="logo"><router-link to="/">yamadetta</router-link></div>
    <nav>
      <router-link class="underline" to="/">Главная</router-link>
      <router-link class="underline" to="/projects">Портфолио</router-link>
      <router-link class="underline" to="/articles">Статьи</router-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  width: 100%;

  font-size: 1.2rem;

  color: var(--white-text-color);
  background-color: #2f244b;
  box-shadow: 1px 3px 6px #2f244b;

  padding: 1rem;
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
</style>