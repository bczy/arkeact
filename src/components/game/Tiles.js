import React from 'react';
import { Box } from './Box.js';
import { BRICKS } from '../../gameBalanceData';

export function Tiles() {
  return (
    <>
      <Box position={[-10, 0, -10]} userData={BRICKS.category.tiles.yellow} />
      <Box position={[-7.5, 0, -10]} userData={BRICKS.category.tiles.yellow} />
      <Box position={[-5, 0, -10]} userData={BRICKS.category.tiles.yellow} />
      <Box position={[-2.5, 0, -10]} userData={BRICKS.category.tiles.yellow} />
      <Box position={[0, 0, -10]} userData={BRICKS.category.tiles.yellow} />
      <Box position={[2.5, 0, -10]} userData={BRICKS.category.tiles.blue} />
      <Box position={[5, 0, -10]} userData={BRICKS.category.tiles.red} />
      <Box position={[7.5, 0, -10]} userData={BRICKS.category.tiles.green} />
      <Box position={[10, 0, -10]} userData={BRICKS.category.tiles.red} />

      <Box position={[-10, 2.5, -10]} userData={BRICKS.category.tiles.red} />
      <Box position={[-7.5, 2.5, -10]} userData={BRICKS.category.tiles.green} />
      <Box position={[-5, 2.5, -10]} userData={BRICKS.category.tiles.red} />
      <Box position={[-2.5, 2.5, -10]} userData={BRICKS.category.tiles.blue} />
      <Box position={[0, 2.5, -10]} userData={BRICKS.category.tiles.green} />
      <Box position={[2.5, 2.5, -10]} userData={BRICKS.category.tiles.blue} />
      <Box position={[5, 2.5, -10]} userData={BRICKS.category.tiles.red} />
      <Box position={[7.5, 2.5, -10]} userData={BRICKS.category.tiles.green} />
      <Box position={[10, 2.5, -10]} userData={BRICKS.category.tiles.red} />

      <Box position={[-10, -2.5, -10]} userData={BRICKS.category.tiles.red} />
      <Box position={[-7.5, -2.5, -10]} userData={BRICKS.category.tiles.green} />
      <Box position={[-5, -2.5, -10]} userData={BRICKS.category.tiles.red} />
      <Box position={[-2.5, -2.5, -10]} userData={BRICKS.category.tiles.blue} />
      <Box position={[0, -2.5, -10]} userData={BRICKS.category.tiles.green} />
      <Box position={[2.5, -2.5, -10]} userData={BRICKS.category.tiles.blue} />
      <Box position={[5, -2.5, -10]} userData={BRICKS.category.tiles.red} />
      <Box position={[7.5, -2.5, -10]} userData={BRICKS.category.tiles.green} />
      <Box position={[10, -2.5, -10]} userData={BRICKS.category.tiles.red} />
    </>
  );
}
