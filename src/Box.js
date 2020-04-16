import React from 'react';

import { useBox } from 'use-cannon';
import { useStore } from './index';

export const brickTypes = {
  red: {
    color: '#FF0000',
    bonusProbability: 0,
    strength: 1
  },
  green: {
    color: '#00FF00',
    bonusProbability: 0,
    strength: 1
  },
  blue: {
    color: '#0000FF',
    bonusProbability: 0,
    strength: 1
  },
  grey: {
    color: '#FF00FF',
    bonusProbability: 0,
    strength: 100000
  }
};

export function Box({ position, type, size = [2, 2, 2] }) {
  // Register box as a physics body with mass
  // Make it a physical object that adheres to gravitation and impact
  const { pong } = useStore(state => state.api);
  const [ref] = useBox(() => ({
    type: 'Kinematic',
    args: size.map(x => x / 2),
    position,
    onCollide: e => pong(e.contact.impactVelocity, e)
  }));
  return (
    <mesh ref={ref} castShadow>
      <boxGeometry attach="geometry" args={size} />
      <meshStandardMaterial attach="material" color={brickTypes[type].color} />
    </mesh>
  );
}
