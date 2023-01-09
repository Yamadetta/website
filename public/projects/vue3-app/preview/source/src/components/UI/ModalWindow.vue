<template>
  <div @click="$emit('closeModal')" class="modal-window-background">
    <div @click.stop class="modal-window">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["closeModal"],
  name: "modal-window",
};
</script>

<style>
.modal-window-background {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.7);
}

.modal-window {
  background-color: var(--element-bg-color);
  color: black;
  padding: 1rem;
}
</style>