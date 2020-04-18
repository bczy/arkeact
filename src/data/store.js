import create from 'zustand';
export const [useStore] = create((set) => ({
  count: 0,
  inGame: false,
  getGameState: (state) => state.inGame,
  launchGame: () => set((state) => (state.inGame = true)),
  api: {
    collide(velocity, e) {
      console.log(e, e.contact.impactVelocity, e.contact);
      if (velocity > 4) set((state) => ({ count: state.count + 1 }));
    },
    reset: (welcome) => set((state) => ({ welcome, count: welcome ? state.count : 0 })),
  },
}));