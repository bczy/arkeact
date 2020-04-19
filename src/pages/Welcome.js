import React, { useEffect } from 'react';

import { useGameStore } from '../data/stores/game';
import { useLevelStore } from '../data/stores/level';

import * as LEVELS from '../data/levels/levels.json';

export function Welcome() {
  const { launchGame } = useGameStore((state) => state);
  const { buildLevel } = useLevelStore();

  useEffect(() => {
    console.log('building level');
    buildLevel(LEVELS.levels[0].layers.flat());
  }, [buildLevel]);

  return (
    <div id="welcome" onClick={launchGame} style={{ margin: 'auto' }}>
      Click to start
    </div>
  );
}
