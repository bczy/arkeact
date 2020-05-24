import { Subject, BehaviorSubject } from 'rxjs';

export const GAME_STATES = { WELCOME: 0, LEVEL_CHOICE: 1, GAME: 2, LEVEL_DEBRIEF: 3 };
class GameStore {
  constructor() {
    if (!GameStore.instance) {
      GameStore.instance = this;
      this.gameState = new BehaviorSubject(GAME_STATES.WELCOME);
      this.balls = new BehaviorSubject(3);
      this.score = new BehaviorSubject(0);
      this.inGame = new Subject(false);
      this.ballLaunched = new Subject(false);
      this.currentLevel = new BehaviorSubject(1);
      this.glitching = new Subject(false);
    }

    return GameStore.instance;
  }
  setGameState = (gameState) => {
    this.gameState.next(gameState);
  };
  launchLevel = (levelId) => {
    this.currentLevel.next(levelId);
    this.gameState.next(GAME_STATES.GAME);
  };
  launchGame = () => {
    this.resetGame();
    this.inGame.next(true);
  };
  launchBall = () => {
    this.ballLaunched.next(true);
  };
  resetBall = () => {
    if (this.balls.value > 0) {
      this.balls.next(this.balls.value - 1);
      this.ballLaunched.next(false);
    } else {
      this.gameState.next(GAME_STATES.LEVEL_DEBRIEF);
    }
  };
  resetGame = () => {
    this.balls.next(3);
    this.score.next(0);
    this.inGame.next(false);
    this.ballLaunched.next(false);
  };
  setGlitching = (value) => this.glitching.next(value);
  addScore = (score) => this.score.next(this.score.value + score);
}

export const gameStore = new GameStore();
Object.freeze(gameStore);
