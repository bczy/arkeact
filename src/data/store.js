import create from 'zustand';

export const [useStore] = create((set) => ({
  score: 0,
  balls: 0,
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
  api: {
    collide(velocity, e) {
      console.log(e, e.contact.impactVelocity, e.contact);
      if (velocity > 4) set((state) => ({ count: state.count + 1 }));
    },
  },
}));
