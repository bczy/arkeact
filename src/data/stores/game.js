import create from 'zustand';

import gameOver from '../../assets/sounds/gameOver.mp3';
import tryAgain from '../../assets/sounds/tryAgain.mp3';

export const [useGameStore] = create((set, get) => ({
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
  resetBall: () => set(() => ({ ballLaunched: false })),
  getRemainingBalls: () => {
    return get(() => {});
  },
  addScore: () => {
    set((state) => ({ score: state.score + 1 }));
  },
  retrieveBall: () => {
    if (get().balls > 0) {
      const tryAgainSound = new Audio(tryAgain);
      tryAgainSound.play();
    } else {
      const gameOverSound = new Audio(gameOver);
      gameOverSound.play();
    }

    set((state) => ({ balls: state.balls - 1 }));
  },
}));
