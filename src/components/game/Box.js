import React from 'react';

import { useBox } from 'use-cannon';

import { useStore } from '../../data/store';

export function Box({ position, size = [2, 2, 2], userData }, receiveShadow) {
  // Register box as a physics body with mass
  // Make it a physical object that adheres to gravitation and impact
  const { addScore, retrieveBall } = useStore((state) => state);

  const [ref] = useBox(() => ({
    type: 'Kinematic',
    args: size.map((x) => x / 2),
    position,
    userData,
    onCollide: (e) => {
      if (e.body.userData.strength) {
        e.body.userData.strength--;
        addScore();
      } else if (e.body.userData.isRoof) {
        retrieveBall();
      }
      console.log(e.body.userData.strength);
      //physicApi.collide(e.contact.impactVelocity, e);
    },
  }));
  return (
    <mesh ref={ref} receiveShadow={!!receiveShadow} userData={userData}>
      <boxGeometry attach="geometry" args={size} />
      <meshStandardMaterial attach="material" color={userData.color} />
    </mesh>
  );
}
