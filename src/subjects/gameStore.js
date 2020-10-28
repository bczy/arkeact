/** @format */

import { Subject, BehaviorSubject } from 'rxjs';
import { levelStore } from './levelStore';
import { playerStore } from './playerStore';

export const GAME_STATES = {
	WELCOME: 0,
	LEVEL_CHOICE: 1,
	GAME: 2,
	LEVEL_DEBRIEF: 3,
	SETTINGS: 4,
	ABOUT: 5,
};
class GameStore {
	constructor() {
		if (!GameStore.instance) {
			GameStore.instance = this;
			this.gameState = new BehaviorSubject(GAME_STATES.WELCOME);
			this.nbBrickDestroyed = new BehaviorSubject(0);
			this.ball2dPosition = new BehaviorSubject({x:0,y:0});
			this.balls = new BehaviorSubject(3);
			this.scoreValue = new BehaviorSubject(0);
			this.inGame = new Subject(false);
			this.ballLaunched = new Subject(false);
			this.currentLevel = new BehaviorSubject(1);
			this.glitching = new Subject(true);
		}
		return GameStore.instance;
	}
	setGameState = (gameState) => {
		if (gameState === GAME_STATES.LEVEL_CHOICE) {
		}
		this.gameState.next(gameState);
	};
	launchLevel = (levelId) => {
		this.currentLevel.next(levelId);
		this.gameState.next(GAME_STATES.GAME);
	};
	increaseLevelNumber = () => {
		this.currentLevel.next(this.currentLevel.value + 1);
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
		this.nbBrickDestroyed.next(0);
		this.scoreValue.next(0);
		this.inGame.next(false);
		this.ballLaunched.next(false);
	};
	setBall2dPosition = (value) => this.ball2dPosition.next(value);
	setGlitching = (value) => this.glitching.next(value);
	increaseScoreValue = (scoreValue) => {
		this.scoreValue.next(this.scoreValue.value + scoreValue);
		if (this.nbBrickDestroyed.value + 1 === levelStore.tiles.value.length) {
			setTimeout(() => {
				playerStore.addHighscoreValue();
				this.gameState.next(GAME_STATES.LEVEL_DEBRIEF);
			},1000)
		}
		this.nbBrickDestroyed.next(this.nbBrickDestroyed.value + 1);
	};
}

export const gameStore = new GameStore();
Object.freeze(gameStore);
