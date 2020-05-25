import React, { useLayoutEffect, useState } from 'react';

import * as LEVELS from '../data/levels.json';
import { gameStore, GAME_STATES } from '../store/gameStore';
import { playerStore } from '../store/playerStore';

import { Button } from '../components/hud/common/Button';

import styled from 'styled-components';
import { Title } from '../components/hud/common/Title';

export const LevelContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 0.5em;
  text-align: left;
`;

export const LevelList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
`;

export const LevelLocked = styled.div`
  position: absolute;
  padding: 0%;
  font-size: 2em;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 4.25% 10%;
  color: rgb(200, 0, 0);
  border: rgb(200, 0, 0) solid;
  transition: 0.5s all ease-out;
  margin-top: -0.2em;
  &:hover {
    padding: 4.25% 10%;
    color: red;
    border: red solid;
  }
`;

const Level = ({ levelId, unlocked, score }) => {
  return (
    <LevelContainer>
      <div>
        <h2>Level {levelId + 1}</h2>
        {unlocked && <h3>Score: {score}</h3>}
      </div>
      <Button
        callback={() => {
          gameStore.launchLevel(levelId);
        }}
        enabled={unlocked}
        text="Play"
      >
        Play
      </Button>
      {unlocked ? '' : <LevelLocked>FINISH LEVEL {levelId} TO UNLOCK</LevelLocked>}
    </LevelContainer>
  );
};

export const Levels = () => {
  const [bestScores, setBestScores] = useState([0]);
  useLayoutEffect(() => {
    const subs = playerStore.bestScores.subscribe(setBestScores);
    return () => subs.unsubscribe();
  }, []);
  return (
    <LevelList>
      <div>
        <Title text="LEVELS" />
      </div>
      <div>
        <div>
          {LEVELS.levels.map((level, i) => (
            <Level key={i} levelId={i} unlocked={!isNaN(bestScores[i])} score={bestScores[i]} />
          ))}
        </div>
      </div>

      <div>
        <Button
          callback={() => {
            gameStore.setGameState(GAME_STATES.WELCOME);
          }}
          enabled
          text="Back"
        />
      </div>
    </LevelList>
  );
};
