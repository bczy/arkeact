import React from 'react';

import * as THREE from 'three';

import { Canvas } from 'react-three-fiber';
import { Physics } from 'use-cannon';

import { Tiles } from '../components/game/Tiles';
import { Walls } from '../components/game/Walls';
import { Ball } from '../components/game/Ball';
import { Paddle } from '../components/game/Paddle';

export function Game() {
  return (
    <>
      <div id="canvasContainer">
        <Canvas
          shadowMap
          sRGB
          camera={{ position: [0, 0, 10] }}
          onCreated={({ gl }) => {
            gl.toneMapping = THREE.ACESFilmicToneMapping;
            gl.outputEncoding = THREE.sRGBEncoding;
          }}
        >
          <directionalLight
            customDistanceMaterial={20}
            intensity={0.5}
            position={[0, 0, 10]}
            angle={-Math.PI / 2}
            penumbra={0.2}
            castShadow
          />
          <spotLight intensity={0.5} position={[0, 0, 10]} angle={-Math.PI / 2} />
          <Physics
            iterations={20}
            tolerance={0.0001}
            defaultContactMaterial={{
              friction: 0,
              //TODO: make this dynamic and make a cooldown in collide function
              restitution: 1.1,
            }}
            gravity={[0, 0, 0]}
            allowSleep={false}
          >
            <Walls />
            <Tiles />
            <Paddle />
            <Ball position={[5, 5, -0.5]} />
          </Physics>
        </Canvas>
      </div>
      <div id="hudContainer">
        <p>Score: TODO</p>
      </div>
    </>
  );
}
