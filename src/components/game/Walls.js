import React from 'react';
import { Box } from './Box.js';

import * as BRICKS from '../../gameBalanceData.json';

export function Walls() {
  return (
    <>
      <Box position={[-12.5, 0, 0]} userData={BRICKS.category.tiles.yellow} size={[1, 25, 130]} />
      <Box position={[12.5, 0, 0]} userData={BRICKS.category.tiles.red} size={[1, 25, 130]} />
      <Box position={[0, 12.5, 0]} userData={BRICKS.category.tiles.blue} size={[25, 1, 130]} />
      <Box position={[0, -12.5, 0]} userData={BRICKS.category.tiles.green} size={[25, 1, 130]} />
      <Box
        position={[0, 0, -12.5]}
        userData={BRICKS.category.tiles.grey}
        size={[25, 25, 1]}
        rotation={Math.PI / 2}
      />
    </>
  );
}
