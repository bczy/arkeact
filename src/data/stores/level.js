import create from 'zustand';

export const [useLevelStore] = create((set, get) => ({
  tiles: [],
  getTiles: () => get().tiles,
  removeTile: (position) => {
    set((state) => ({
      tiles: state.tiles.filter((tile) => {
        // Check if all items exist and are in the same order
        const hittedTilePosition = Object.values(position);
        for (let i = 0; i < tile.position.length; i++) {
          if (tile.position[i] !== hittedTilePosition[i]) {
            return true;
          }
        }
        return false;
      }),
    }));
  },
  buildLevel: (tiles) => {
    set(() => ({ tiles: tiles }));
  },
}));
