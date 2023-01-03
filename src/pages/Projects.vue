<template>
  <div class="projects">
    <projects-filter
      @closeFilter="filterToggle"
      :isShowFilter="isShowFilter"
      :isLoading="isLoading"
      :sortList="sortList"
    />
    <main>
      <basic-card class="projects-card" ref="projectsCard">
        <div class="projects-card__header">
          <h1 class="title">Проекты</h1>
          <div class="projects-card__controls">
            <my-select v-model="currentSortType" :options="sortTypes" />

            <button class="filter-toggle" @click="filterToggle">
              <inline-svg
                :src="require('@/assets/icons/filter-icon.svg')"
              ></inline-svg>
            </button>
          </div>
        </div>

        <section class="projects-card__body" v-if="!isLoading">
          <transition-group name="projects-list">
            <project-item
              v-for="project in projectsFiltered"
              :key="project.id"
              :project="project"
            ></project-item>
          </transition-group>
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
      sortList: [],
      sortTypes: [
        { value: "new", name: "От новых к старым" },
        { value: "old", name: "От старых к новым" },
      ],

      currentSortType: "new",
      isShowFilter: false,
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

    filterToggle() {
      this.isShowFilter = this.isShowFilter ? false : true;
      this.$store.commit("setAboveElement", this.isShowFilter);
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
    })();
  },

  computed: {
    projectsSorted() {
      if (this.currentSortType == "new") {
        return [...this.projects].sort((project1, project2) =>
          project1.id > project2.id ? -1 : 1
        );
      } else {
        return [...this.projects].sort((project1, project2) =>
          project1.id > project2.id ? 1 : -1
        );
      }
    },
    projectsFiltered() {
      return this.filterArray([...this.projectsSorted], this.sortList);
    },
  },
};
</script>

<style lang="scss" scoped>
.projects-list-item {
  display: inline-block;
  margin-right: 10px;
}
.projects-list-enter-active,
.projects-list-leave-active {
  transition: all 0.8s ease;
  max-height: 230px;
}
.projects-list-enter-from,
.projects-list-leave-to {
  opacity: 0;
  max-height: 0px;
  padding: 0 1% !important;
  margin: -1px 0 !important;
  transform: translateY(-120px);
}
.projects-list-move {
  transition: transform 0.8s ease;
}

// .project {
//   transition: all 1s ease;
//   // display: inline-flex;
//   margin-right: 10px;
// }

// .projects-list-enter-from,
// .projects-list-leave-to {
//   opacity: 0;
//   transform: translateY(-120px);
// }

// .projects-list-leave-active {
//   position: absolute;
// }

.projects {
  display: flex;
  gap: 1rem;

  margin: 0 auto;

  max-width: 1500px;
  width: 100%;
}

main {
  flex-grow: 1;
}

.projects-card {
  width: 100%;
}

.projects-card {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;

    margin-bottom: 1rem;

    h1.title {
      font-size: 2.2rem;
    }

    .select-wrapper {
      margin-left: auto;
    }
  }

  &__controls {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-left: auto;

    @media (min-width: 769px) {
      .filter-toggle {
        display: none;
      }
    }
  }

  &__body {
    position: relative;
  }
}
</style>