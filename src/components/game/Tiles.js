import React, { useEffect, useState } from 'react';
import { Box } from './Box.js';
import * as TILES from '../../data/gameBalanceData.json'
import { levelStore } from '../../stores/levelStore';
import { gameStore } from '../../stores/gameStore';

function Tile(props) {
  return <Box {...props} />;
}

export function Tiles() {
  const [tiles, setTiles] = useState([]);

  const [currentLevel, setCurrentLevel] = useState(gameStore.currentLevel.value);
  useEffect(() => {
    const subs = gameStore.currentLevel.subscribe(setCurrentLevel);
    subs.add(levelStore.tiles.subscribe(setTiles));
    levelStore.buildLevel(currentLevel);
    return () => subs.unsubscribe();
  }, [currentLevel]);

  return tiles.map((brick, i) => (
    <Tile key={i} id={i} position={brick.position} {...TILES.tiles[brick.userDataType]} />
  ));
}
