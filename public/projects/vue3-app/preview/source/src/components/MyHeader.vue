<template>
  <header class="header">
    <div class="logotype" @click="hideNavigation">
      <div class="link" v-if="mobile">{{ pageTitle }}</div>
      <router-link v-else class="link" to="/">Vue 3 Приложение</router-link>
    </div>

    <!-- Скрытый инпут вместо добавления класса -->
    <input v-model="isShowNavigation" type="checkbox" id="burger-input" />

    <!-- Кнопка, которая переключает инпут в true/false -->
    <label class="burger" for="burger-input">
      <div class="burger__line"></div>
      <div class="burger__line"></div>
      <div class="burger__line"></div>
    </label>

    <!-- Сама навигация -->
    <nav class="navigation" @click="hideNavigation">
      <ul>
        <li>
          <router-link class="link" to="/">Главная</router-link>
        </li>
        <li>
          <router-link class="link" to="/about">О проекте</router-link>
        </li>
        <li>
          <router-link class="link" to="/posts">Посты</router-link>
        </li>
        <li>
          <router-link class="link" to="/posts-store">Посты VueX</router-link>
        </li>
        <li>
          <router-link class="link" to="/posts-composition-api"
            >Посты comp. API</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isShowNavigation: false,
      mobile: this.$store.getters.mobile,
    };
  },
  methods: {
    hideNavigation() {
      this.isShowNavigation = false;
    },
  },
  computed: {
    pageTitle() {
      let title = this.$route.meta.title;
      if (title) {
        if (!title.includes("#")) {
          return title;
        }
        return title.replace("#", this.$route.params.id);
      }

      return "";
    },
  },
};
</script>

<style lang="scss" scoped>
.link {
  color: white;
  font-weight: bold;
  padding: 6px;

  &:focus-visible {
    outline: none;
    border: 2px solid var(--buton-border-focus-color);
    padding: 4px;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  margin-bottom: 1rem;

  position: relative;

  box-shadow: 1px 3px 6px var(--element-bg-color);
}

.logotype {
  .link {
    display: inline;
    text-decoration: none;
    font-size: 1.4rem;

    transition: text-shadow 0.2s linear;

    &:hover {
      text-shadow: 1px 1px 14px white;
    }
  }
}

.navigation {
  ul {
    display: flex;
    gap: 1rem;

    li {
      list-style: none;
    }
  }

  .link {
    text-decoration: none;
    font-size: 1.2rem;

    &:hover,
    &.router-link-active {
      border-bottom: 1px solid white;
    }
  }

  @media (max-width: 850px) {
    position: fixed;
    top: 65px;
    right: 0;

    width: 100vw;
    height: calc(100vh - 65px);

    background-color: var(--element-bg-color);

    transform: translateX(100%);

    z-index: 1;

    transition: transform 0.3s ease-out;
    ul {
      flex-direction: column;
      gap: 0;

      li {
        width: 100%;
        text-align: right;
      }
    }

    .link {
      display: block;
      font-size: 1.5rem;
      padding: 0.5rem 1rem;

      &:hover,
      &.router-link-active {
        border-bottom: none;
      }

      &:focus-visible {
        outline: none;
        border: 0;
      }

      &.router-link-active {
        background-color: var(--button-bg-dark-color);
      }
    }
  }
}

.burger {
  @media (min-width: 850px) {
    display: none;
  }

  width: 26px;
  height: 20px;

  position: relative;

  &__line {
    height: 2px;
    width: 100%;

    position: absolute;
    right: 0;

    background-color: white;

    transition: width 0.2s ease-out, transform 0.3s ease-out;

    &:nth-child(1) {
      top: 0;
      width: 70%;
    }

    &:nth-child(2) {
      top: calc(50% - 1px);
    }
    &:nth-child(3) {
      bottom: 0;
    }
  }
}

#burger-input {
  // input скрываем, т.к. он не нужен.
  display: none;
  &:checked {
    // Стилизуем навигацию с учётом псевдокласса. То есть, когда она будет вызвана пользователем.
    & ~ .navigation {
      transform: translateX(0);
    }

    & ~ .burger {
      .burger {
        &__line {
          transform-origin: left;

          &:nth-child(1) {
            width: 100%;
            transform: rotate(45deg);
          }

          &:nth-child(2) {
            width: 0;
          }
          &:nth-child(3) {
            transform: rotate(-45deg);
          }
        }
      }
    }
  }
}
</style>