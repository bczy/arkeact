import { Subject } from 'rxjs';
export const initialBallCount = 3;

class GameStore {
  constructor() {
    if (!GameStore.instance) {
      console.log('init gamestore...');
      GameStore.instance = this;
      this.balls = new Subject(3);
      this.inGame = new Subject(false);
      this.ballLaunched = new Subject(false);
      this.currentLevel = new Subject(1);
      this.score = new Subject(0);
      this.tiles = new Subject([]);
      this.glitching = new Subject(false);
    }

    return GameStore.instance;
  }
  launchGame = () => {
    this.inGame.next(true);
  };
  launchBall = () => {
    this.ballLaunched.next(true);
  };
  resetBall = () => {
    this.ballLaunched.next(false);
  };
  setGlitching = (value) => this.glitching.next(value);
}

export const gameStore = new GameStore();
Object.freeze(gameStore);
