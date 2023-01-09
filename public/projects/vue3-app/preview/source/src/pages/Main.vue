<template>
  <main>
    <h1>Главная страница</h1>
    <dark-card>
      <p>
        В данном проекте я освоил Vue.js. Реализовал динамическую подгрузку
        постов в двух вариантах:
      </p>

      <ol class="list">
        <li>
          С сохранением и манипуляцией данных
          <router-link class="link" to="/posts">внутри компонента</router-link>;
        </li>
        <li>
          С сохранением и манипуляцией данных
          <router-link class="link" to="/posts-store">в VueX</router-link>;
        </li>
        <li>
          С манипуляцией данными
          <router-link class="link" to="/posts-composition-api"
            >в composition API</router-link
          >.
        </li>
      </ol>

      <p>
        А также, поработал с Vue router и сделал
        <router-link class="link" to="/404">страницу 404</router-link>, если
        перейти на страницу, которой не существует.
      </p>

      <p>
        На странице
        <router-link class="link" to="/about">о проекте</router-link> описал
        реализацию меню-бургер без JavaScript
      </p>
    </dark-card>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 1rem;
}
.card {
  font-size: 1.2rem;
  max-width: 1000px;
  margin: 0 auto;
}
.list {
  list-style: decimal inside;
  margin-left: 1rem;
}

.code {
  white-space: pre-wrap;
}
</style>