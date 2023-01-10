<template>
  <table class="game-field">
    <tr class="game-field__cells"
        v-for="cells in gameField"
        :key="cells.id">
      <td class="game-field__cell"
          :class="{ cross: cell.value == 1, zero: cell.value == -1 }"
          v-for="cell in cells.value"
          :key="cell.id"
          @click="$emit('changeState', cell)">
      </td>
    </tr>
  </table>
</template>

<script>

export default {
  props: {
    gameField: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.game-field {
  border: 1px solid var(--white-text-color);
  width: 300px;
  height: 300px;

  &__cells {}

  &__cell {
    border: 1px solid var(--white-text-color);
    cursor: pointer;
  }

  .cross {
    position: relative;

    &:before,
    &::after {
      content: '';

      position: absolute;
      top: calc(50% - 4px);
      left: 0;

      width: 97px;
      height: 4px;
      background-color: var(--white-text-color);

      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(135deg);
    }
  }

  .zero {
    position: relative;

    &::before,
    &::after {
      content: '';

      position: absolute;
      top: calc(50% - 40%);
      left: calc(50% - 40%);
      width: 80%;
      height: 80%;
      background-color: var(--white-text-color);

      border-radius: 50%;

    }

    &::after {
      background-color: var(--basic-card-bg-color);
      top: calc(50% - 35%);
      left: calc(50% - 35%);
      width: 70%;
      height: 70%;
    }
  }
}
</style>