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
        position={[-12, -12, -12.5]}
        userData={BRICKS.walls.corner}
        size={[0.25, 0.25, 130]}
        rotation={Math.PI / 2}
      />
      <Box
        position={[-12, 12, -12.5]}
        userData={BRICKS.walls.corner}
        size={[0.25, 0.25, 130]}
        rotation={Math.PI / 2}
      />
      <Box
        position={[12, 12, -12.5]}
        userData={BRICKS.walls.corner}
        size={[0.25, 0.25, 130]}
        rotation={Math.PI / 2}
      />
      <Box
        position={[12, -12, -12.5]}
        userData={BRICKS.walls.corner}
        size={[0.25, 0.25, 130]}
        rotation={Math.PI / 2}
      />
      <Box
        position={[0, 12, -12]}
        userData={BRICKS.walls.corner}
        size={[130, 0.25, 0.25]}
        rotation={Math.PI / 2}
      />
      <Box
        position={[0, -12, -12]}
        userData={BRICKS.walls.corner}
        size={[130, 0.25, 0.25]}
        rotation={Math.PI / 2}
      />
      <Box
        position={[12, 0, -12]}
        userData={BRICKS.walls.corner}
        size={[0.25, 120, 0.25]}
        rotation={Math.PI}
      />
      <Box
        position={[-12, 0, -12]}
        userData={BRICKS.walls.corner}
        size={[0.25, 120, 0.25]}
        rotation={Math.PI}
      />
      <Box
        position={[0, 0, 46]}
        userData={BRICKS.walls.roof}
        size={[24, 24, 0.001]}
        rotation={Math.PI / 2}
      />
    </>
  );
}
