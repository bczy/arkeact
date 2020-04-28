import React, { useMemo, useState } from 'react';

import { Canvas } from 'react-three-fiber';
import { Physics } from 'use-cannon';

import { Tiles } from '../components/game/Tiles';
import { Walls } from '../components/game/Walls';
import { Ball } from '../components/game/Ball';
import { Paddle } from '../components/game/Paddle';
import { Lights } from '../components/game/Lights';
import { Effect } from '../components/vfx/Effect';

import { GameContext } from '../data/game-context';
import { useGameStore } from '../data/stores/game';
import { PerspectiveCamera } from 'three';

export function Game() {
  const [glitching, setGlitching] = useState(false);
  const value = { glitching, setGlitching };
  console.log(glitching);
  const { ballLaunched, launchBall, balls, resetGame, currentLevel } = useGameStore(
    (state) => state
  );
  const camera = useMemo(() => {
    const camera = new PerspectiveCamera(45, 1, 1, 57);
    camera.position.set(0, 0, 45);
    return camera;
  }, []);

  function handleClick() {
    if (balls < 0) {
      resetGame();
    } else if (!ballLaunched) {
      launchBall();
      console.log(glitching);
    }
  }

  return (
    <>
      <div id="game" onClick={handleClick}>
        {balls >= 0 ? (
          <div id="canvas">
            <Canvas shadowMap camera={camera}>
              <GameContext.Provider value={value}>
                <Lights />
                <Physics
                  //TODO: make a component of this
                  iterations={20}
                  tolerance={0.0001}
                  defaultContactMaterial={{
                    friction: 0,
                    restitution: 1,
                  }}
                  gravity={[0, 0, 0]}
                  allowSleep={false}
                >
                  <Walls />
                  <Tiles />
                  <Paddle />
                  <Ball />
                  <Effect camera={camera} />
                </Physics>
              </GameContext.Provider>
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
    </>
  );
}
