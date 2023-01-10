<template>
  <aside class="game-history card">
    <h3 class="game-history__title">История игр:</h3>
    <ol class="game-history__list">
      <li v-for="historyItem in gameHistory"
          :key="historyItem.id">
        {{ historyItem.value }}
      </li>
    </ol>
    <basic-button @click="$emit('clearHistory')"
                  class="clear-history w-100">Очистить</basic-button>
  </aside>
</template>

<script>

export default {
  props: {
    gameHistory: {
      type: Array,
      required: true
    }
  },
  setup() {


    return {}
  }
}
</script>

<style lang="scss" scoped>
.game-history {
  display: flex;
  flex-direction: column;
  max-width: 332px;
  width: 100%;

  &__title {
    font-size: 1.5rem;
  }

  &__list {
    list-style-type: decimal;
    list-style-position: inside;
    font-size: 1.2rem;

    overflow-y: auto;
    height: 365px;
  }
}

.clear-history {
  margin-top: auto;
}
</style>