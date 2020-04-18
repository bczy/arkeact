import React from 'react';

import * as THREE from 'three';

import { Canvas } from 'react-three-fiber';
import { Physics } from 'use-cannon';

import { Tiles } from '../components/game/Tiles';
import { Walls } from '../components/game/Walls';
import { Ball } from '../components/game/Ball';
import { Paddle } from '../components/game/Paddle';

import { useStore } from '../data/store';

export function Game() {
  const { ballLaunched, launchBall, balls, score } = useStore((state) => state);
  function handleClick() {
    if (!ballLaunched) {
      launchBall();
    }
  }

  return (
    <>
      <div id="canvasContainer" onClick={handleClick}>
        <Canvas
          shadowMap
          sRGB
          camera={{ position: [0, 0, 13] }}
          onCreated={({ gl }) => {
            gl.toneMapping = THREE.ACESFilmicToneMapping;
            gl.outputEncoding = THREE.sRGBEncoding;
          }}
        >
          <directionalLight
            customDistanceMaterial={20}
            intensity={0.5}
            position={[0, 0, 1]}
            angle={Math.PI / 2}
            penumbra={0.2}
            castShadow
          />
          <spotLight
            castShadow
            distance={0}
            intensity={0.3}
            position={[0, 0, 10]}
            angle={-Math.PI}
          />
          <Physics
            iterations={20}
            tolerance={0.0001}
            defaultContactMaterial={{
              friction: 100,
              //TODO: make this dynamic and make a cooldown in collide function
              restitution: 1.05,
            }}
            gravity={[0, 0, 0]}
            allowSleep={false}
          >
            <Walls />
            <Tiles />
            <Paddle />
            <Ball position={[5, 5, -0.6]} />
          </Physics>
        </Canvas>
      </div>
      <div id="hudContainer">
        <p>Score: {score}</p>
        <p>Balls: {balls}</p>
      </div>
    </>
  );
}
