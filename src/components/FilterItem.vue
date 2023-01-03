<template>
  <section class="filter-section">
    <h4 class="filter-section__title">{{ sortItem.title }}</h4>

    <div
      :key="option"
      v-for="(value, option) in sortItem.data"
      class="filter-section__item"
    >
      <label :for="option" class="checkbox-label">
        <input
          @input="changeValue(option, $event.target.checked)"
          :id="option"
          :checked="value"
          class="checkbox"
          type="checkbox"
          name="desktop"
        />
        <svg class="check-icon" width="24px" height="24px" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <rect class="check-icon__box" x="1" y="1" width="22" height="22" />
            <polyline
              class="check-icon__box-worm"
              points="23,1 1,1 1,23 23,23 23,4"
              stroke-dasharray="30 146"
              stroke-dashoffset="30"
            />
            <polyline
              class="check-icon__check-worm"
              points="23,4 10,17 5,12 18,12"
              stroke-dasharray="17.38 149.68"
              stroke-dashoffset="103.38"
            />
          </g>
        </svg>
        <span class="checkbox-text">{{ option }}</span>
      </label>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    sortItem: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      sectionStatus: {},
    };
  },
  methods: {
    changeValue(option, value) {
      this.sortItem.data[option] = value;
    },
  },
  mounted() {},
};
</script>

<style lang="scss" >
.filter-section {
  background-color: var(--basic-card-bg-color-light);
  padding: 0.5em;
  &__title {
    font-size: 1.2rem;
    margin-bottom: 0.5em;
  }

  &__item {
    transition: background-color 0.2s ease-out;
    &:hover {
      background-color: #564192;
    }
  }

  @media (max-width: 768px) {
    background-color: var(--basic-card-bg-color-dark-transparent);
  }
}

/* Default */
/* Focus and hover */
:root {
  --hue: 223;
  --bg: hsl(var(--hue), 10%, 90%);
  --fg1: hsl(var(--hue), 10%, 10%);
  --fg2: hsl(var(--hue), 10%, 30%);
  --fg3: hsl(var(--hue), 10%, 70%);
  --primary: #dd5aff;
  --primary-t: hsla(var(--hue), 90%, 55%, 0);
  --primary-t-hover: hsla(var(--hue), 90%, 55%, 0.15);
  --trans-dur1: 0.3s;
  --trans-dur2: 0.6s;
}

.checkbox-label {
  display: flex;
  align-items: center;
  padding: 0.375em;
  position: relative;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
}
.checkbox {
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  width: 1px;
  height: 1px;
  &:focus {
    ~ {
      .checkbox-text {
        &:after {
          background-color: var(--primary-t-hover);
        }
      }
    }
  }
  &:hover {
    ~ {
      .checkbox-text {
        &:after {
          background-color: var(--primary-t-hover);
        }
      }
    }
  }
  &:checked {
    + {
      .check-icon {
        .check-icon__box-worm {
          stroke-dashoffset: -91;
        }
        .check-icon__check-worm {
          stroke-dashoffset: -6;
        }
      }
    }
  }
  &:indeterminate {
    + {
      .check-icon {
        .check-icon__box-worm {
          stroke-dashoffset: -91;
          stroke-dashoffset: -111.38;
        }
        .check-icon__check-worm {
          stroke-dashoffset: -26.38;
        }
      }
    }
  }
}

.check-icon {
  margin-right: 0.5em;
  width: 1.5em;
  height: 1.5em;

  g {
    fill: var(--basic-card-bg-color);
  }

  &__box {
    stroke: #e479ff;
    transition: stroke var(--trans-dur1);
  }

  &__box-worm {
    stroke: var(--primary);
    transition: stroke var(--trans-dur1),
      stroke-dashoffset var(--trans-dur2) cubic-bezier(0.42, -0.2, 0.58, 1.2);
  }

  &__check-worm {
    stroke: var(--primary);
    transition: stroke var(--trans-dur1),
      stroke-dashoffset var(--trans-dur2) cubic-bezier(0.42, -0.2, 0.58, 1.2);
  }
}

.checkbox-text {
  text-transform: capitalize;
  font-weight: bold;
}
</style>