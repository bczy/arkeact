import create from 'zustand';

export const [useStore] = create((set) => ({
  score: 0,
  balls: 3,
  inGame: false,
  ballLaunched: false,
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
  addScore: () => {
    console.log('muf');
    set((state) => ({ score: state.score + 1 }));
  },
  api: {
    collide(velocity, e) {
      console.log(e, e.contact.impactVelocity, e.contact);
      if (velocity > 4) set((state) => ({ count: state.count + 1 }));
    },
  },
}));
