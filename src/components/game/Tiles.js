import React from 'react';
import { Box } from './Box.js';
import * as LEVELS from '../../data/levels/levels.json';
import { useGameStore } from '../../data/stores/game';
import { tiles } from '../../data/gameBalanceData.json';

const Tile = ({ position, userData }) => <Box position={position} userData={userData} />;

export function Tiles() {
  const { currentLevel } = useGameStore((state) => state);
  return (
    <>
      {LEVELS.levels[currentLevel - 1].layers.map((layer) =>
        layer.map((brick, i) => {
          return <Tile key={i} position={brick.position} userData={tiles[brick.userDataType]} />;
        })
      )}
    </>
  );
}
