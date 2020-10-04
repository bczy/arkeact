import { BehaviorSubject } from 'rxjs';
import { gameStore } from './gameStore';

class PlayerStore {
  constructor() {
    if (!PlayerStore.instance) {
      PlayerStore.instance = this;
      this.bestscoreValues = new BehaviorSubject([0]);
      this.achievements = new BehaviorSubject([]);
    }

    return PlayerStore.instance;
  }

  //TODO: call
  addHighscoreValue = () => {
    const bestscoreValues = [...this.bestscoreValues.value];
    bestscoreValues[gameStore.currentLevel.value] = gameStore.scoreValue.value;
    bestscoreValues[gameStore.currentLevel.value + 1] = 0;
    this.bestscoreValues.next(bestscoreValues);
    console.log('bestscoreValues', bestscoreValues)
  };
}

export const playerStore = new PlayerStore();
Object.freeze(playerStore);
