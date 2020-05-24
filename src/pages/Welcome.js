import React, { useEffect } from 'react';

import { gameStore } from '../store/gameStore';
import { useLevelStore } from '../data/stores/level';

import * as LEVELS from '../data/levels/levels.json';

export function Welcome() {
  const { buildLevel } = useLevelStore();

  useEffect(() => {
    buildLevel(LEVELS.levels[0].layers.flat());
  }, [buildLevel]);

  return (
    <div id="welcome" onClick={gameStore.launchGame} style={{ margin: 'auto' }}>
      Click to start
    </div>
  );
}
