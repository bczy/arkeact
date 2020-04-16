import React from 'react';
import { Box } from './Box.js';
export function Walls() {
  return (
    <>
      <Box position={[-12.5, 0, 0]} type="grey" size={[1, 25, 130]} />
      <Box position={[12.5, 0, 0]} type="red" size={[1, 25, 130]} />
      <Box position={[0, 12.5, 0]} type="blue" size={[25, 1, 130]} />
      <Box position={[0, -12.5, 0]} type="green" size={[25, 1, 130]} />
    </>
  );
}
