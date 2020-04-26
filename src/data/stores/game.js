import create from 'zustand';

import gameOver from '../../assets/sounds/gameOver.mp3';
import tryAgain from '../../assets/sounds/tryAgain.mp3';

export const [useGameStore] = create((set, get) => {
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
    getRemainingBalls: () => {
      return get(() => {});
    },
    addScore: (points) => {
      set((state) => ({ score: state.score + points }));
    },
    retrieveBall: () => {
      if (get().balls > 0) {
        const tryAgainSound = new Audio(tryAgain);
        tryAgainSound.play();
      } else {
        const gameOverSound = new Audio(gameOver);
        gameOverSound.play();
      }

      set((state) => ({ balls: state.balls - 1, ballLaunched: false }));
    },
    physicApi: {
      collide(userData, e) {
        console.log(e, userData);
      },
    },
  };
});
