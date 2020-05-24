import { BehaviorSubject } from 'rxjs';

class PlayerStore {
  constructor() {
    if (!PlayerStore.instance) {
      PlayerStore.instance = this;
      this.bestScores = new BehaviorSubject([]);
      this.achievements = new BehaviorSubject([]);
    }

    return PlayerStore.instance;
  }
}

export const playerStore = new PlayerStore();
Object.freeze(playerStore);
