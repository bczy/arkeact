import create from 'zustand';

export const [useLevelStore] = create((set, get) => ({
  tiles: [],
  getTiles: () => get().tiles,
  buildLevel: (tiles) => {
    set(() => ({ tiles: tiles }));
  },
}));
