<template>
  <background-mask
    v-if="isOpen"
    :blackout="false"
    :zIndex="100"
    @click="toggle"
  />
  <div class="select-menu" :class="{ 'select-menu--active': isOpen }">
    <button class="select-menu__button" @click="toggle">
      <span class="select-menu__current-option">{{ currentOption }}</span>
      <inline-svg :src="require('@/assets/icons/down-arrow.svg')"></inline-svg>
    </button>

    <ul class="select-menu__options card">
      <li
        class="select-menu__option"
        @click="changeOption(option)"
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        <span class="select-menu__option-text">{{ option.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isOpen: false,
      currentOption: "От новых к старым",
    };
  },
  methods: {
    changeOption(option) {
      console.log(this.options);
      console.log(option);

      for (const item of this.options) {
        if (item.value === option.value) {
          this.currentOption = item.name;
          break;
        }
      }

      this.$emit("update:modelValue", option.value);
      this.toggle();
    },

    toggle() {
      this.isOpen = this.isOpen ? false : true;
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
$width: 220px;

.select-menu {
  position: relative;

  max-width: $width;
  width: 100%;

  user-select: none;

  z-index: 101;

  &__button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;

    width: 100%;
    padding: 5px 10px;

    background: var(--basic-card-bg-color-light);
    color: var(--white-text-color);

    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

    cursor: pointer;

    transition: background-color 0.2s ease-out;

    &:hover {
      background: var(--basic-card-bg-color-light-2);
    }

    svg {
      max-width: 25px;
      transition: transform 0.2s ease-out;
    }
  }

  &__options {
    position: absolute;
    right: 0;

    width: $width;
    max-height: 295px;

    padding: 0;
    margin-top: 10px;

    background: var(--basic-card-bg-color-light-2);
    overflow-y: auto;

    animation-name: fadeInDown;
    animation-duration: 0.35s;
    animation-fill-mode: both;
  }

  &__option {
    display: flex;
    align-items: center;

    padding: 0.5rem 0.5rem;

    background: var(--basic-card-bg-color-light-2);

    transition: background-color 0.2s ease-out;

    cursor: pointer;
    pointer-events: none;

    &:hover {
      background: var(--basic-card-bg-color-light-3);
    }

    &-text {
      color: rgb(255, 255, 255);
    }
  }
}

.select-menu--active {
  .select-menu {
    &__button {
      svg {
        transform: rotate(180deg);
      }
    }
    &__options {
      display: block;
      opacity: 0;
      z-index: 10;
      animation-name: fadeInUp;
      animation-duration: 0.4s;
      animation-fill-mode: both;
    }

    &__option {
      pointer-events: auto;
    }
  }
}

@keyframes fadeInUp {
  from {
    transform: translate3d(0, 30px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes fadeInDown {
  from {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  to {
    transform: translate3d(0, 20px, 0);
    opacity: 0;
  }
}
</style>