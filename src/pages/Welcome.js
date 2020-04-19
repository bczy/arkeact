import React from 'react';

import { useGameStore } from '../data/stores/game';

export function Welcome() {
  const { launchGame } = useGameStore((state) => state);

  return (
    <div id="welcome" onClick={launchGame} style={{ margin: 'auto' }}>
      Click to start
    </div>
  );
}
