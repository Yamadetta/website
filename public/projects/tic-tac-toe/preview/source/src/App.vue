<template>
  <main class="main">
    <h1>Крестики и нолики</h1>
    <h2 v-if="!currentWinner">Ходит: {{ activePlayer }}</h2>
    <h2 v-if="currentWinner">Победитель: {{ currentWinner }} 🎉</h2>
    <basic-card>
      <game-field :gameField="gameField"
                  @changeState="move" />
    </basic-card>

    <basic-button v-if="currentWinner"
                  @click="resetGame"
                  class="new-game-btn w-100">Новая игра</basic-button>
  </main>
  <game-history @clearHistory="clearHistory"
                :gameHistory="gameHistory" />
</template>

<script>
import GameField from '@/components/GameField.vue';
import GameHistory from '@/components/GameHistory.vue';
export default {
  components: {
    GameField, GameHistory
  },
  data() {
    return {
      gameField: [
        {
          id: "cells-0",
          value: [{ id: 'cell-0', value: 0 }, { id: 'cell-1', value: 0 }, { id: 'cell-2', value: 0 },]
        },
        {
          id: "cells-1",
          value: [{ id: 'cell-0', value: 0 }, { id: 'cell-1', value: 0 }, { id: 'cell-2', value: 0 },]
        },
        {
          id: "cells-2",
          value: [{ id: 'cell-0', value: 0 }, { id: 'cell-1', value: 0 }, { id: 'cell-2', value: 0 },]
        }
      ],
      activePlayer: 'крестик', // или нолик
      moveCounter: 0,
      gameHistory: [
        {
          "id": 1673342420208,
          "value": "ничья"
        },
        {
          "id": 1673342429424,
          "value": "крестик"
        },
        {
          "id": 1673342432360,
          "value": "крестик"
        }
      ]
    }
  },

  mounted() {
    let gameHistoryStorage = localStorage.getItem('game-history');
    if (gameHistoryStorage) {
      this.gameHistory = JSON.parse(gameHistoryStorage);
    }
  },
  methods: {
    move(cell) {
      if (this.currentWinner || cell.value != 0) { return }
      if (this.activePlayer === 'крестик') {
        cell.value = 1;
      } else {
        cell.value = -1;
      }
      this.moveCounter++;
      this.togglePlayer();
    },
    togglePlayer() {
      this.activePlayer = this.activePlayer === 'крестик' ? 'нолик' : 'крестик';
    },
    returnWinner() {
      let ySumm = [0, 0, 0];

      for (const cellsLine of this.gameField) {
        let summ = 0;

        for (let i = 0; i < cellsLine.value.length; i++) {
          const cell = cellsLine.value[i];
          summ += cell.value;
          ySumm[i] += cell.value;
        }

        if (summ === 3) {
          return 'крестик';
        } else if (summ === -3) {
          return 'нолик';
        }
      }


      for (const summ of ySumm) {
        if (summ === 3) {
          return 'крестик';
        } else if (summ === -3) {
          return 'нолик';
        }
      }

      if (this.gameField[1].value[1].value != 0) {
        let summ = 0;
        for (let i = 0; i < 3; i++) {
          summ += this.gameField[i].value[i].value;
        }

        if (summ === 3) {
          return 'крестик';
        } else if (summ === -3) {
          return 'нолик';
        }


        summ = 0;
        for (let i = 0; i < 3; i++) {
          summ += this.gameField[i].value[2 - i].value;
        }

        if (summ === 3) {
          return 'крестик';
        } else if (summ === -3) {
          return 'нолик';
        }
      }

      if (this.moveCounter === 9) {
        return 'ничья'
      }

      return undefined;
    },

    resetGame() {
      this.gameField = [
        {
          id: "cells-0",
          value: [{ id: 'cell-0', value: 0 }, { id: 'cell-1', value: 0 }, { id: 'cell-2', value: 0 },]
        },
        {
          id: "cells-1",
          value: [{ id: 'cell-0', value: 0 }, { id: 'cell-1', value: 0 }, { id: 'cell-2', value: 0 },]
        },
        {
          id: "cells-2",
          value: [{ id: 'cell-0', value: 0 }, { id: 'cell-1', value: 0 }, { id: 'cell-2', value: 0 },]
        }
      ];
      this.activePlayer = 'крестик';
      this.moveCounter = 0;

    },
    clearHistory() {
      this.gameHistory = [];
      localStorage.setItem('game-history', JSON.stringify(this.gameHistory));
    }
  },

  computed: {
    currentWinner() {
      return this.returnWinner();
    },
  },

  watch: {
    currentWinner(newVal) {
      if (!newVal) { return }

      this.gameHistory.push({
        id: Date.now(),
        value: newVal
      });

      localStorage.setItem('game-history', JSON.stringify(this.gameHistory));
    },
  },
  setup() {


    return {}
  }
}
</script>

<style lang="scss" >
@import "@/scss/clear.scss";

:root {
  --white-text-color: #dddddd;
  --link-color: #7cd7ff;
  --basic-card-bg-color: #2f244b;
  --basic-card-bg-color-light: #3d2e65;
  --basic-card-bg-color-light-2: #553d7a;
  --basic-card-bg-color-light-3: #7f58a5;
  --basic-card-bg-color-dark: #211837;
  --basic-card-bg-color-dark-transparent: #0d0819e8;

  --header-height: 45px;
}

body {
  background: linear-gradient(166deg, #5055a8 10%, #96355b 50%, #8544a0 76%);
  // background-size: 400% 400%;
  // animation: gradient 10s ease infinite;
  background-repeat: no-repeat;
  min-height: 100vh;

  color: var(--white-text-color);
}


.background {
  min-height: 100vh;
  // opacity: 0.9;
  background-image: repeating-radial-gradient(circle at 0 0, transparent 0, #5055a8 12px),
    repeating-linear-gradient(rgba(0, 255, 235, 0.78), rgba(255, 255, 255, 0));
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

#app {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;

  margin: 0 auto;
  padding: 1rem;

  width: fit-content;
  justify-content: center;

  width: 100%;

}


.main {}

.new-game-btn {
  margin-top: 1rem;
}




::-webkit-scrollbar {
  width: 14px;
  height: 14px;
}

::-webkit-scrollbar-track {
  background-color: #ffffffd4;
}

::-webkit-scrollbar-thumb {
  background-color: #683fa8;

  -webkit-transition: background-color 0.2s linear;
  transition: background-color 0.2s linear;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #8051ca;
}

::-webkit-scrollbar-corner {
  background-color: #333;
}

::selection {
  background: #8800bf;
}
</style>