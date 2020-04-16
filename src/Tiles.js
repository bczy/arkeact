import React from 'react';
import { Box } from './Box.js';

export function Tiles() {
  return (
    <>
      <Box position={[-10, 0, -10]} userData={{ type: 'tile', color: 'green' }} />
      <Box position={[-7.5, 0, -10]} type="green" />
      <Box position={[-5, 0, -10]} type="red" />
      <Box position={[-2.5, 0, -10]} type="blue" />
      <Box position={[0, 0, -10]} type="green" />
      <Box position={[2.5, 0, -10]} type="blue" />
      <Box position={[5, 0, -10]} type="red" />
      <Box position={[7.5, 0, -10]} type="green" />
      <Box position={[10, 0, -10]} type="red" />

      <Box position={[-10, 2.5, -10]} type="red" />
      <Box position={[-7.5, 2.5, -10]} type="green" />
      <Box position={[-5, 2.5, -10]} type="red" />
      <Box position={[-2.5, 2.5, -10]} type="blue" />
      <Box position={[0, 2.5, -10]} type="green" />
      <Box position={[2.5, 2.5, -10]} type="blue" />
      <Box position={[5, 2.5, -10]} type="red" />
      <Box position={[7.5, 2.5, -10]} type="green" />
      <Box position={[10, 2.5, -10]} type="red" />

      <Box position={[-10, -2.5, -10]} type="red" />
      <Box position={[-7.5, -2.5, -10]} type="green" />
      <Box position={[-5, -2.5, -10]} type="red" />
      <Box position={[-2.5, -2.5, -10]} type="blue" />
      <Box position={[0, -2.5, -10]} type="green" />
      <Box position={[2.5, -2.5, -10]} type="blue" />
      <Box position={[5, -2.5, -10]} type="red" />
      <Box position={[7.5, -2.5, -10]} type="green" />
      <Box position={[10, -2.5, -10]} type="red" />
    </>
  );
}
