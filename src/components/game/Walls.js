import React from 'react';
import { Box } from './Box.js';

import * as BRICKS from '../../data/gameBalanceData.json';

export function Walls() {
  return (
    <>
      <Box position={[-12.5, 0, 0]} userData={BRICKS.walls.side} size={[1, 25, 130]} />
      <Box position={[12.5, 0, 0]} userData={BRICKS.walls.side} size={[1, 25, 130]} />
      <Box position={[0, 12.5, 0]} userData={BRICKS.walls.side} size={[25, 1, 130]} />
      <Box position={[0, -12.5, 0]} userData={BRICKS.walls.side} size={[25, 1, 130]} />
      <Box
        position={[0, 0, -12.5]}
        userData={BRICKS.walls.ground}
        size={[25, 25, 1]}
        rotation={Math.PI / 2}
      />
      <Box
        position={[0, 0, 14.5]}
        userData={BRICKS.walls.roof}
        size={[25, 25, 1]}
        rotation={Math.PI / 2}
      />
    </>
  );
}
