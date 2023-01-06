<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "basic-card",
};
</script>

<style lang="scss">
.card {
  color: var(--white-text-color);
  background-color: var(--basic-card-bg-color);
  box-shadow: 1px 3px 6px var(--basic-card-bg-color);

  padding: 1rem;
  width: fit-content;
}

.light {
  background-color: var(--basic-card-bg-color-light);
}

.gradient-border {
  border-width: 0.2rem;
  border-style: solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    166deg,
    #5055a8 10%,
    #96355b 50%,
    #8544a0 76%
  );
}

// .gradient-border {
//   position: relative;
//   background: none;

//   & > * {
//     z-index: 2;
//   }

//   &::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     z-index: 0;

//     background: linear-gradient(
//       130deg,
//       #ff7a18,
//       #af002d 41.07%,
//       #319197 76.05%
//     );
//   }

//   &::after {
//     content: "";
//     position: absolute;
//     --gradient-width: 0.2rem;

//     top: var(--gradient-width);
//     left: var(--gradient-width);
//     width: calc(100% - (var(--gradient-width) * 2));
//     height: calc(100% - (var(--gradient-width) * 2));
//     z-index: 1;
//   }
// }
</style>