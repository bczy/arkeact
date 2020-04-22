import create from 'zustand';

export const [useGameStore] = create((set) => {
  return {
    score: 0,
    balls: 3,
    inGame: false,
    ballLaunched: false,
    currentLevel: 1,
    launchBall: () => {
      set(() => ({
        ballLaunched: true,
      }));
    },
    launchGame: () => {
      set(() => ({
        inGame: true,
      }));
    },
    resetGame: () => {
      set(() => ({
        balls: 3,
        score: 0,
        inGame: false,
      }));
    },
    restartGame: (state) => {
      state.resetGame();
      state.launchGame();
    },
    addScore: (points) => {
      set((state) => ({ score: state.score + points }));
    },
    retrieveBall: () => {
      set((state) => ({ balls: state.balls - 1, ballLaunched: false }));
    },
    physicApi: {
      collide(userData, e) {
        console.log(e, userData);
      },
    },
  };
});
