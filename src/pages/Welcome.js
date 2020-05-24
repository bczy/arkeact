import React from 'react';

import { gameStore, GAME_STATES } from '../store/gameStore';

export function Welcome() {
  return (
    <div
      id="welcome"
      onClick={() => {
        gameStore.setGameState(GAME_STATES.LEVEL_CHOICE);
      }}
      style={{ margin: 'auto' }}
    >
      Click to start
    </div>
  );
}
