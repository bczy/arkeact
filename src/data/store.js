import create from 'zustand';
import * as gameBalanceData from './gameBalanceData.json';

export const [useStore] = create((set) => ({
  score: gameBalanceData.game.balls,
  level: gameBalanceData.game.level,
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
    collide(velocity, e) {
      console.log(e, e.contact.impactVelocity, e.contact);
      if (velocity > 4) set((state) => ({ count: state.count + 1 }));
    },
  },
}));
