import React, { useState, useCallback } from 'react';

import { useBox } from 'use-cannon';

import { useStore } from '../../data/store';

export function Box({ position, size = [2, 2, 2], userData }) {
  const { addScore, retrieveBall } = useStore((state) => state);

  const [strength, setStrengh] = useState(userData.strength);
  const [collisionBox, setCollisionBox] = useState(size.map((x) => x / 2));
  const [ref] = useBox(() => ({
    type: 'Kinematic',
    args: collisionBox,
    position,
    userData: userData,
    onCollide: (e) => {
      if (strength) {
        setStrengh(strength - 1);
        addScore();
      } else if (e.body.userData.isRoof) {
        retrieveBall();
      }
    },
  }));
  useCallback(() => {
    if (isNaN(strength) || strength > 0) setCollisionBox([0, 0, 0]);
  }, [strength]);

  return (
    <mesh ref={ref} scale={strength} receiveShadow userData={userData}>
      <boxGeometry attach="geometry" args={size} />
      <meshStandardMaterial attach="material" color={userData.color} />
    </mesh>
  );
}
