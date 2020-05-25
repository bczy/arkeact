import React from 'react';

import { gameStore, GAME_STATES } from '../store/gameStore';
import { levelStore } from '../store/levelStore';

export function LevelDebrief() {
  const winned = gameStore.nbBrickDestroyed.value + 1 === levelStore.tiles.value.length;
  return (
    <div
      onClick={() => {
        gameStore.setGameState(GAME_STATES.LEVEL_CHOICE);
      }}
      style={{ margin: 'auto' }}
    >
      <h2>Level {winned ? 'Cleared' : 'Failed'}</h2>
      <h3>Score: {gameStore.score.value}</h3>
    </div>
  );
}
