<template>
  <section class="filter-section">
    <h4 class="filter-section__title">{{ sortItem.title }}</h4>

    <div
      :key="option"
      v-for="(value, option) in sortItem.data"
      class="filter-section__item"
    >
      <input
        @input="changeValue(option, $event.target.checked)"
        type="checkbox"
        name=""
        :id="option"
        :checked="value"
      />
      <label :for="option">{{ option }}</label>
    </div>

    <div class="checkbox-group">
      <label class="checkbox-label">
        <input
          class="checkbox"
          type="checkbox"
          name="desktop"
          value="desktop"
          data-top
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
        <strong class="checkbox-text">Desktop Macs</strong>
      </label>
      <label class="checkbox-label">
        <input
          class="checkbox"
          type="checkbox"
          name="desktop"
          value="mac_mini"
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
        <span class="checkbox-text">Mac Mini</span>
      </label>
      <label class="checkbox-label">
        <input
          class="checkbox"
          type="checkbox"
          name="desktop"
          value="mac_studio"
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
        <span class="checkbox-text">Mac Studio</span>
      </label>
      <label class="checkbox-label">
        <input
          class="checkbox"
          type="checkbox"
          name="desktop"
          value="mac_pro"
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
        <span class="checkbox-text">Mac Pro</span>
      </label>
    </div>

    <form>
      <div class="checkbox-group">
        <label class="checkbox-label">
          <input
            class="checkbox"
            type="checkbox"
            name="desktop"
            value="desktop"
            data-top
          />
          <svg
            class="check-icon"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <rect
                class="check-icon__box"
                x="1"
                y="1"
                width="22"
                height="22"
              />
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
          <strong class="checkbox-text">Desktop Macs</strong>
        </label>
        <label class="checkbox-label">
          <input
            class="checkbox"
            type="checkbox"
            name="desktop"
            value="mac_mini"
          />
          <svg
            class="check-icon"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <rect
                class="check-icon__box"
                x="1"
                y="1"
                width="22"
                height="22"
              />
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
          <span class="checkbox-text">Mac Mini</span>
        </label>
        <label class="checkbox-label">
          <input
            class="checkbox"
            type="checkbox"
            name="desktop"
            value="mac_studio"
          />
          <svg
            class="check-icon"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <rect
                class="check-icon__box"
                x="1"
                y="1"
                width="22"
                height="22"
              />
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
          <span class="checkbox-text">Mac Studio</span>
        </label>
        <label class="checkbox-label">
          <input
            class="checkbox"
            type="checkbox"
            name="desktop"
            value="mac_pro"
          />
          <svg
            class="check-icon"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <rect
                class="check-icon__box"
                x="1"
                y="1"
                width="22"
                height="22"
              />
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
          <span class="checkbox-text">Mac Pro</span>
        </label>
      </div>
      <div class="checkbox-group">
        <label class="checkbox-label">
          <input
            class="checkbox"
            type="checkbox"
            name="laptop"
            value="macbooks"
            data-top
          />
          <svg
            class="check-icon"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <rect
                class="check-icon__box"
                x="1"
                y="1"
                width="22"
                height="22"
              />
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
          <strong class="checkbox-text">MacBooks</strong>
        </label>
        <label class="checkbox-label">
          <input
            class="checkbox"
            type="checkbox"
            name="laptop"
            value="macbook_pro_13-inch"
          />
          <svg
            class="check-icon"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <rect
                class="check-icon__box"
                x="1"
                y="1"
                width="22"
                height="22"
              />
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
          <span class="checkbox-text">MacBook Pro 13"</span>
        </label>
        <label class="checkbox-label">
          <input
            class="checkbox"
            type="checkbox"
            name="laptop"
            value="macbook_pro_14-inch"
          />
          <svg
            class="check-icon"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <rect
                class="check-icon__box"
                x="1"
                y="1"
                width="22"
                height="22"
              />
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
          <span class="checkbox-text">MacBook Pro 14"</span>
        </label>
        <label class="checkbox-label">
          <input
            class="checkbox"
            type="checkbox"
            name="laptop"
            value="macbook_pro_16-inch"
          />
          <svg
            class="check-icon"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <rect
                class="check-icon__box"
                x="1"
                y="1"
                width="22"
                height="22"
              />
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
          <span class="checkbox-text">MacBook Pro 16"</span>
        </label>
      </div>
    </form>
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

<style lang="scss">
:root {
  --hue: 223;
  --bg: hsl(var(--hue), 10%, 90%);
  --fg1: hsl(var(--hue), 10%, 10%);
  --fg2: hsl(var(--hue), 10%, 30%);
  --fg3: hsl(var(--hue), 10%, 70%);
  --primary: hsl(var(--hue), 90%, 55%);
  --primary-t: hsla(var(--hue), 90%, 55%, 0);
  --primary-t-hover: hsla(var(--hue), 90%, 55%, 0.15);
  --trans-dur1: 0.3s;
  --trans-dur2: 0.6s;
  // font-size: calc(16px + (24 - 16) * (100vw - 320px) / (1280 - 320));
}
body,
input {
  // font: 1em/1.5 "DM Sans", sans-serif;
}
body {
  // background-color: var(--bg);
  // color: var(--fg2);
  // height: 100vh;
  // display: grid;
  // place-items: center;
  // transition: background-color var(--trans-dur1), color var(--trans-dur1);
}
form {
  min-width: 16em;
  padding: 1.5em 1.5em 0 1.5em;
}
.checkbox-label {
  display: flex;
  align-items: center;
  padding: 0.375em;
  position: relative;
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
.checkbox-label + .checkbox-label {
  margin-left: 2em;
}

/* Default */
.checkbox-group {
  margin-bottom: 1.25em;
}
.checkbox {
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  width: 1px;
  height: 1px;
}
.checkbox-text {
  color: var(--fg1);
  transition: color var(--trans-dur1);
}
.checkbox-text:after {
  background-color: var(--primary-t);
  border-radius: 0.375em;
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: background-color 0.15s linear;
}
.check-icon {
  margin-right: 0.5em;
  width: 1.5em;
  height: 1.5em;
}
.check-icon__box {
  stroke: var(--fg3);
  transition: stroke var(--trans-dur1);
}
.check-icon__box-worm,
.check-icon__check-worm {
  stroke: var(--primary);
  transition: stroke var(--trans-dur1),
    stroke-dashoffset var(--trans-dur2) cubic-bezier(0.42, -0.2, 0.58, 1.2);
}

/* Focus and hover */
.checkbox:focus ~ .checkbox-text:after,
.checkbox:hover ~ .checkbox-text:after {
  background-color: var(--primary-t-hover);
}
.checkbox:checked + .check-icon .check-icon__box-worm,
.checkbox:indeterminate + .check-icon .check-icon__box-worm {
  stroke-dashoffset: -91;
}
.checkbox:checked + .check-icon .check-icon__check-worm {
  stroke-dashoffset: -6;
}
.checkbox:indeterminate + .check-icon .check-icon__box-worm {
  stroke-dashoffset: -111.38;
}
.checkbox:indeterminate + .check-icon .check-icon__check-worm {
  stroke-dashoffset: -26.38;
}

/* `:focus-visible` support */
@supports selector(:focus-visible) {
  .checkbox:focus ~ .checkbox-text:after {
    background-color: var(--primary-t);
  }
  .checkbox:focus-visible ~ .checkbox-text:after,
  .checkbox:hover ~ .checkbox-text:after {
    background-color: var(--primary-t-hover);
  }
}

/* Dark theme */
@media (prefers-color-scheme: dark) {
  :root {
    --bg: hsl(var(--hue), 10%, 10%);
    --fg1: hsl(var(--hue), 10%, 90%);
    --fg2: hsl(var(--hue), 10%, 70%);
    --fg3: hsl(var(--hue), 10%, 30%);
    --primary: hsl(var(--hue), 90%, 65%);
    --primary-t-hover: hsla(var(--hue), 90%, 55%, 0.3);
  }
}
</style>