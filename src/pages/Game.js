import React from 'react';

import { Canvas } from 'react-three-fiber';
import { Physics } from 'use-cannon';

import { Tiles } from '../components/game/Tiles';
import { Walls } from '../components/game/Walls';
import { Ball } from '../components/game/Ball';
import { Paddle } from '../components/game/Paddle';

export function Game() {
  return (
    <Canvas shadowMap sRGB camera={{ position: [0, 0, 15] }}>
      <ambientLight intensity={0.001} />
      <pointLight position={[0, 0, 10]} intensity={0.5} />
      <Physics
        iterations={20}
        tolerance={0.0001}
        defaultContactMaterial={{
          friction: 0,
          restitution: 1.1,
        }}
        gravity={[0, 0, 0]}
        allowSleep={false}
      >
        <Walls />
        <Tiles />
        <Paddle />
        <Ball position={[0, 10, -0.5]} />
      </Physics>
    </Canvas>
  );
}
