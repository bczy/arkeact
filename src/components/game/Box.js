import React, { useState } from 'react';

import { useBox } from 'use-cannon';

import { useGameStore } from '../../data/stores/game';

import brick from '../../assets/sounds/brick.mp3';
import wall from '../../assets/sounds/wall.mp3';
import boo from '../../assets/sounds/boo.mp3';

export function Box({ position, size = [2, 2, 2], userData, id }) {
  const { addScore, retrieveBall } = useGameStore();
  const isWall = isNaN(userData.strength);
  const hitSound = new Audio(isWall ? (userData.isRoof ? boo : wall) : brick);
  const [hovered, setHovered] = useState();
  const [ref, api] = useBox(() => ({
    type: 'Kinematic',
    args: size.map((x) => x / 2),
    position,
    userData: userData,
    onCollide: (e) => {
      hitSound.play();
      if (!isWall) {
        userData.strength--;
        api.position.set(-1000, -1000, -100);
        addScore(userData.score);
      } else if (userData.isRoof) {
        retrieveBall();
      }
    },
  }));

  return (
    <mesh
      key={id}
      ref={ref}
      receiveShadow
      userData={userData}
      onPointerMove={(e) => setHovered(e.instanceId)}
      onPointerOut={(e) => setHovered(undefined)}
    >
      <boxGeometry attach="geometry" args={size} />
      <meshStandardMaterial attach="material" color={userData.color} />
    </mesh>
  );
}
