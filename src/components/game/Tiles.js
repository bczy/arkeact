import React from 'react';
import { Box } from './Box.js';

import { useLevelStore } from '../../data/stores/level';
import { tiles as TILES } from '../../data/gameBalanceData.json';

function Tile({ position, userData }) {
  return <Box position={position} userData={userData} />;
}

export function Tiles() {
  const { getTiles } = useLevelStore();
  return getTiles().map((brick, i) => (
    <Tile key={i} position={brick.position} userData={TILES[brick.userDataType]} />
  ));
}
