import React from 'react';

import { gameStore, GAME_STATES } from '../store/gameStore';
import { Button } from '../components/hud/Button';
import { Title } from '../components/hud/Title';

export function Welcome() {
  return (
    <>
      <div style={{ flexDirection: 'column' }}>
        <div>
          <Title text="ARKAREACT" />
        </div>
        <div style={{ textAlign: 'center' }}>
          <Button
            big
            callback={() => {
              gameStore.setGameState(GAME_STATES.LEVEL_CHOICE);
            }}
            enabled
            text="Start"
          />
        </div>
      </div>
    </>
  );
}
