import { BehaviorSubject } from 'rxjs';
import * as LEVELS from '../data/levels.json';

class LevelStore {
  constructor() {
    if (!LevelStore.instance) {
      LevelStore.instance = this;
      this.tiles = new BehaviorSubject([]);
    }
  }

  buildLevel = (levelId) => {
    this.tiles.next(LEVELS.levels[levelId].layers.flat());
  };

  getLockedLevels(bestscoreValues){
    const levels = LEVELS.levels;
    return [...levels].splice(bestscoreValues.length, levels.length - 1);
  }
}

export const levelStore = new LevelStore();
Object.freeze(LevelStore);
