/** @format */

import React from 'react';

import { gameStore, GAME_STATES } from '../stores/gameStore';
import { levelStore } from '../stores/levelStore';

import { Button } from '../components/hud/common/Button';

export function LevelDebrief() {
	const winned =
		gameStore.nbBrickDestroyed.value + 1 === levelStore.tiles.value.length;
	return (
		<div style={{ margin: 'auto' }}>
			<h2>Level {winned ? 'Cleared' : 'Failed'}</h2>
			<h3>Score: {gameStore.scoreValue.value}</h3>
			<Button
				callback={() => {
					if (!winned) {
						gameStore.resetGame();
						gameStore.setGameState(GAME_STATES.LEVEL_CHOICE);
					} else {
						gameStore.resetGame();
						gameStore.increaseLevelNumber();
						gameStore.setGameState(GAME_STATES.GAME);
					}
				}}
			></Button>
		</div>
	);
}
