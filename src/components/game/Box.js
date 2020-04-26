import React from 'react';

import { useBox } from 'use-cannon';

import { useGameStore } from '../../data/stores/game';

import brick from '../../assets/sounds/brick.mp3';
import wall from '../../assets/sounds/wall.mp3';
import UIFx from 'uifx';

export function Box({ position, size = [2, 2, 2], userData, id }) {
  const { retrieveBall } = useGameStore();

  const isWall = isNaN(userData.strength);
  const isCorner = isNaN(userData.isCorner);
  let soundAsset = null;
  if (isWall) {
    soundAsset = wall;
  } else if (!userData.isRoof) {
    soundAsset = brick;
  }
  const hitSound = new UIFx(soundAsset);

  const [ref, api] = useBox(() => {
    return {
      type: isCorner ? 'Static' : 'Kinematic',
      args: size.map((x) => x / 2),
      position,
      userData: userData,
      onCollide: (e) => {
        hitSound.play();
        if (!isWall) {
          userData.strength--;
          api.position.set(-1000, -1000, -100);
        } else if (userData.isRoof) {
          retrieveBall();
        }
      },
    };
  });

  return (
    <mesh key={id} ref={ref} receiveShadow userData={userData}>
      <boxGeometry attach="geometry" args={size} />
      <meshStandardMaterial attach="material" color={userData.color} />
    </mesh>
  );
}
