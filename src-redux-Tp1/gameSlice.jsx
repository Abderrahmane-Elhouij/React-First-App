import { createSlice,configureStore } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    player1Score: 0,
    player2Score: 0,
    isPaused: false,
  },
  reducers: {
    incrementPlayer1Score: (state) => {
      if (!state.isPaused) {
        state.player1Score += 15;
      }
    },
    incrementPlayer2Score: (state) => {
      if (!state.isPaused) {
        state.player2Score += 15;
      }
    },
    togglePause: (state) => {
      state.isPaused = !state.isPaused;
    },
    resetGame: (state) => {
      state.player1Score = 0;
      state.player2Score = 0;
      state.isPaused = false;
    },
  },
});

export const actions = gameSlice.actions;

const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
  }
});

export default store;
