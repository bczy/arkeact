import { BehaviorSubject } from 'rxjs';
import { gameStore } from './gameStore';

class PlayerStore {
  constructor() {
    if (!PlayerStore.instance) {
      PlayerStore.instance = this;
      this.bestScores = new BehaviorSubject([0]);
      this.achievements = new BehaviorSubject([]);
    }

    return PlayerStore.instance;
  }

  //TODO: call
  addHighScore = () => {
    console.log('bestScores', bestScores)
    const bestScores = [...this.bestScores.value];
    bestScores[gameStore.currentLevel.value] = gameStore.score.value;
    bestScores[gameStore.currentLevel.value + 1] = 0;
    this.bestScores.next(bestScores);
  };
}

export const playerStore = new PlayerStore();
Object.freeze(playerStore);
