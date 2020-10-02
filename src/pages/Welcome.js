import React from 'react';

import { gameStore, GAME_STATES } from '../stores/gameStore';
import { Button } from '../components/hud/common/Button';
import { Title } from '../components/hud/common/Title';

export function Welcome() {
  return (
    <>
      <div style={{ flexDirection: 'column' }}>
        <div>
          <Title text="ARKEACT" />
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
