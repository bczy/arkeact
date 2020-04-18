import React from 'react';

import { useBox } from 'use-cannon';

import { useStore } from '../../store';

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
      <meshStandardMaterial attach="material" color={userData.color} />
    </mesh>
  );
}
