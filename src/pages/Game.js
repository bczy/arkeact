import React from 'react';

import { Canvas } from 'react-three-fiber';
import { Physics } from 'use-cannon';

import { Tiles } from '../components/game/Tiles';
import { Walls } from '../components/game/Walls';
import { Ball } from '../components/game/Ball';
import { Paddle } from '../components/game/Paddle';
import { Lights } from '../components/game/Lights';

import { useGameStore } from '../data/stores/game';

export function Game() {
  const { ballLaunched, launchBall, balls, score, resetGame, currentLevel } = useGameStore(
    (state) => state
  );

  function handleClick() {
    if (balls < 0) {
      resetGame();
    } else if (!ballLaunched) {
      launchBall();
    }
  }

  return (
    <div id="game" onClick={handleClick}>
      {balls >= 0 ? (
        <div id="canvas">
          <Canvas shadowMap camera={{ position: [0, 0, 23.5] }}>
            <Lights />
            <Physics
              //TODO: make a component of this
              iterations={20}
              tolerance={0.0001}
              defaultContactMaterial={{
                friction: 100,
                //TODO: make this dynamic and make a cooldown in collide function
                restitution: 1,
              }}
              gravity={[0, 0, 0]}
              allowSleep={false}
            >
              <Walls />
              <Tiles />
              <Paddle />
              <Ball />
            </Physics>
          </Canvas>
        </div>
      ) : (
        <div>
          <p>Game Over</p>
          <p>Click to restart</p>
        </div>
      )}
      <div id="hud">
        <p>Balls: {balls}</p>
        <p>Level: {currentLevel}</p>
        <p onClick={resetGame}>Click to restart</p>
      </div>
    </div>
  );
}
