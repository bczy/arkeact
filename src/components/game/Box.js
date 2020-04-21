import React from 'react';

import { useBox } from 'use-cannon';

import { useGameStore } from '../../data/stores/game';

export function Box({ position, size = [2, 2, 2], userData, id }) {
  const { addScore, retrieveBall } = useGameStore();

  const [ref, api] = useBox(() => ({
    type: 'Kinematic',
    args: size.map((x) => x / 2),
    position,
    userData: userData,
    onCollide: (e) => {
      if (!isNaN(userData.strength)) {
        userData.strength--;
        console.log(userData.strength);
        api.position.set(-1000, -1000, -100);
        addScore();
      } else if (userData.isRoof) {
        retrieveBall();
      }
    },
  }));

  return (
    <mesh key={id} ref={ref} receiveShadow userData={userData}>
      <boxGeometry attach="geometry" args={size} />
      <meshStandardMaterial attach="material" color={userData.color} />
    </mesh>
  );
}
