import React from 'react';

import { useBox } from 'use-cannon';

import { useStore } from './store';
export const brickTypes = {
  red: {
    color: '#FF0000',
    bonusProbability: 0,
    strength: 1,
  },
  green: {
    color: '#00FF00',
    bonusProbability: 0,
    strength: 1,
  },
  blue: {
    color: '#0000FF',
    bonusProbability: 0,
    strength: 1,
  },
  yellow: {
    color: '#FFFF00',
    bonusProbability: 0,
    strength: 100000,
  },
  grey: {
    color: '#FF00FF',
    bonusProbability: 0,
    strength: 100000,
  },
};

export function Box({ position, size = [2, 2, 2], userData = { type: 'tile', color: 'blue' } }) {
  // Register box as a physics body with mass
  // Make it a physical object that adheres to gravitation and impact

  const { collide } = useStore((state) => state.api);

  const [ref] = useBox(() => ({
    type: 'Kinematic',
    args: size.map((x) => x / 2),
    position,
    userData,
    onCollide: (e) => collide(e.contact.impactVelocity, e),
  }));
  return (
    <mesh ref={ref} castShadow userData={userData}>
      <boxGeometry attach="geometry" args={size} />
      <meshStandardMaterial attach="material" color={brickTypes[userData.color].color} />
    </mesh>
  );
}
