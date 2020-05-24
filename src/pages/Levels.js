import React from 'react';
import * as LEVELS from '../data/levels.json';
import { gameStore } from '../store/gameStore';

const Level = ({ levelId }) => {
  return (
    <div>
      <h2>{levelId} - Score: </h2>
      <button
        onClick={() => {
          gameStore.launchLevel(levelId);
        }}
      >
        Play
      </button>
    </div>
  );
};
export const Levels = () => {
  return (
    <>
      <div>
        <h1>LEVELS</h1>
      </div>
      <div>
        {LEVELS.levels.map((level, i) => (
          <Level key={level.id} levelId={i} />
        ))}
      </div>
    </>
  );
};
