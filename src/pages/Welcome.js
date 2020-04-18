import React from 'react';

import { useStore } from '../data/store';

export function Welcome() {
  const { launchGame } = useStore((state) => state);

  return (
    <div id="welcome" onClick={launchGame} style={{ margin: 'auto' }}>
      Click to start
    </div>
  );
}
