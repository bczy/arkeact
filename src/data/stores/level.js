import create from 'zustand';

export const [useLevelStore] = create((set) => ({
  tiles: [],
  buildLevel: (level) => {
    set((state) => ({
      state: { tiles: [] },
    }));
  },
}));
