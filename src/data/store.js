import create from 'zustand';

export const [useStore] = create((set) => ({
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
  addScore: () => {
    set((state) => ({ score: state.score + 1 }));
  },
  retrieveBall: () => {
    set((state) => ({ balls: state.balls - 1, ballLaunched: false }));
  },
  physicApi: {
    collide(userData, e) {
      console.log(e, userData);
    },
  },
}));
