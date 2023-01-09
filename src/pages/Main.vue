<template>
  <main>
    <basic-card class="welcome">
      Добро пожаловать на мой сайт.
      Меня зовут Игорь и <h1>я Frontend-разработчик.</h1> Список моих работ моих работ можно посмотреть на <router-link
        class="link" to="/projects">странице проектов</router-link>.
    </basic-card>

    <basic-card>
      <router-link class="link title underline" to="/projects">
        <h2>Последние проекты</h2>
      </router-link>

      <section class="projects-card" v-if="!projects.isLoading">
        <project-item v-for="(project, index) in projects.value" :key="project.id" :project="project"
          data-aos="fade-down" :data-aos-delay="index * 100" />
      </section>
      <my-loader v-if="projects.isLoading" />
    </basic-card>


    <basic-card>
      <router-link class="link title underline" to="/articles">
        <h2>Последние статьи</h2>
      </router-link>

      <section class="articles" v-if="!articles.isLoading">
        <article-item v-for="(article, index) in articles.value" :key="article.id" :article="article"
          data-aos="fade-right" :data-aos-delay="index * 100" />
      </section>
      <my-loader v-if="articles.isLoading" />
    </basic-card>


    <basic-card class="contacts">
      <h2 class="title">Связаться</h2>
      <p>
        Если вы хотите со мной сотрудничать, то напишите мне.
      <ul>
        <li><a class="link" href="tg://resolve?domain=goodstoryman" rel="noopener noreferrer">Telegram</a>
        </li>
        <li><a class="link" href="mailto:contact@yamadetta.ru">contact@yamadetta.ru</a></li>
      </ul>
      </p>
    </basic-card>


  </main>
</template>

<script>
import ProjectItem from '@/components/ProjectItem.vue';
import ArticleItem from '@/components/ArticleItem.vue';

import AOS from 'aos';

export default {
  components: { ProjectItem, ArticleItem },
  data() {
    return {
      projects: {
        value: [],
        isLoading: true
      },
      articles: {
        value: [],
        isLoading: true
      }
    }
  },
  mounted() {
    (async () => {
      let response = await fetch(`/projects/projects-list.json`).then(
        (response) => {
          return response.json();
        }
      );
      this.projects.value = response.slice(response.length - 3, response.length);
      this.projects.isLoading = false;
    })();

    (async () => {
      let response = await fetch(`/articles/articles-list.json`).then(
        (response) => {
          return response.json();
        }
      );

      this.articles.value = response.slice(response.length - 3, response.length);
      this.articles.isLoading = false;
    })();



    // AOS

    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 700, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
  },
};
</script>

<style lang="scss" scoped>
@import 'aos/src/sass/aos';

main {
  &>.card {
    max-width: 1300px;
    width: 100%;
  }
}

.welcome {
  font-size: 1.5rem;

  h1 {
    display: inline;
    font-size: 1em;

  }
}


.card {
  margin: 0 auto;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  .title,
  .title>* {
    display: inline-block;
  }

  .title {
    margin-bottom: 1rem;
  }
}

.projects-card {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  .project.card {
    flex-direction: column;
    margin-bottom: 0;
    max-width: 390px;
    min-height: 260px;

    &:deep(.description),
    &:deep(time) {
      font-size: 1rem;
    }
  }

}


.contacts {
  font-size: 1.2rem;

  ul {
    list-style: inside;
  }
}
</style>