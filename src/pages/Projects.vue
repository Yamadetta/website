<template>
  <div class="projects">
    <aside class="filter">
      <projects-filter />
    </aside>
    <main>
      <basic-card>
        <h1>Проекты</h1>
        <section v-if="!isLoading">
          <project-item
            v-for="project in projects"
            :key="project.id"
            :project="project"
          ></project-item>
        </section>

        <my-loader v-if="isLoading" />
      </basic-card>
    </main>
  </div>
</template>

<script>
import ProjectItem from "@/components/ProjectItem.vue";
import ProjectsFilter from "@/components/ProjectsFilter.vue";

export default {
  components: { ProjectItem, ProjectsFilter },
  data() {
    return {
      projects: [],
      isLoading: true,
    };
  },

  mounted() {
    fetch(`/projects/projects-list.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.projects = data;
        this.isLoading = false;
      });
  },
};
</script>

<style lang="scss" scoped>
.projects {
  display: flex;
  gap: 1rem;

  margin: 0 auto;
  padding: 1rem;

  max-width: 1500px;
  width: 100%;
}

.filter {
  max-width: 20%;
  width: 100%;

  .card {
    width: 100%;
  }
}

h1 {
  font-size: 2.5rem;
}
</style>