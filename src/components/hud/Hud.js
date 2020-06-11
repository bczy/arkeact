import React, { useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { Button } from './common/Button';

import { gameStore, GAME_STATES } from '../../stores/gameStore';
export const StyledDiv = styled.div`
  position: absolute;
  top: 0;
  margin: 3em 1em 3em -12em;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 1em;
`;

export function Hud({ text }) {
  const [balls, setBalls] = useState(3);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [score, setGameScore] = useState(0);
  useLayoutEffect(() => {
    const subs = gameStore.balls.subscribe(setBalls);
    subs.add(gameStore.currentLevel.subscribe(setCurrentLevel));
    subs.add(gameStore.score.subscribe(setGameScore));
    return () => subs.unsubscribe();
  }, []);
  return (
    <StyledDiv>
      <p>Balls: {balls}</p>
      <p>Level: {currentLevel + 1}</p>
      <p>Score: {score}</p>
      <div>
        <Button
          callback={() => {
            gameStore.resetGame();
            gameStore.setGameState(GAME_STATES.LEVEL_CHOICE);
          }}
          text="Back"
          enabled
        ></Button>
      </div>
    </StyledDiv>
  );
}
