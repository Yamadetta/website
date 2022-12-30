<template>
  <div class="projects">
    <aside class="filter">
      <projects-filter @sectionChanged="filterArray" :sortList="sortList" />
    </aside>
    <main>
      <basic-card>
        <h1>Проекты</h1>
        <section v-if="!isLoading">
          <project-item
            v-for="project in projectsSorted"
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
      projectsSorted: [],
      isLoading: true,
      sortList: [],
    };
  },

  methods: {
    filterArray(array, sortList) {
      let filterMaps = {};

      for (const sortItem of sortList) {
        let sortItemData = [];

        for (const key in sortItem.data) {
          const value = sortItem.data[key];
          if (value === true) {
            sortItemData.push(key);
          }
        }

        filterMaps[sortItem.id] = sortItemData;
      }

      return array.filter((project) => {
        // Для ка;дого проекта начинаю перебирать карту
        let projectFlag = true;
        for (const mapKey in filterMaps) {
          const mapValue = filterMaps[mapKey];

          let stack = project[mapKey];

          let flag = true;
          for (const mapItem of mapValue) {
            let mapFlag = false;
            for (const stackItem of stack) {
              if (stackItem.name === mapItem) {
                mapFlag = true;
                break;
              }
            }

            if (mapFlag === false) {
              flag = false;
              break;
            }
          }

          if (flag === false) {
            projectFlag = false;
            break;
          }
        }

        return projectFlag;
      });
    },
  },

  mounted() {
    (async () => {
      let response = await fetch(`/projects/projects-list.json`).then(
        (response) => {
          return response.json();
        }
      );

      this.projects = response;
      this.isLoading = false;

      let technologies = [];
      response.forEach(function (item, i, arr) {
        technologies.push(...item.technologies);
      });
      technologies = [...new Set(technologies.map((item) => item.name))];

      [...technologies].forEach((item, i, arr) => {
        if (i === 0) {
          technologies = {};
        }

        technologies[item] = false;
      });

      let filterItem = {
        id: "technologies",
        title: "Технологии",
        data: technologies,
      };

      this.sortList.push(filterItem);

      // console.log("projects", this.projects);
      // console.log("sortList", this.sortList);

      this.projects = this.filterArray(this.projects, this.sortList);
    })();
  },

  watch: {
    sortList: {
      handler(newValue, oldValue) {
        this.projectsSorted = this.filterArray(this.projects, this.sortList);
      },
      deep: true,
    },
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