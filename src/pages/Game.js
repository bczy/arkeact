import React, { useMemo, useState, useLayoutEffect } from 'react';

import { Canvas } from 'react-three-fiber';
import { Physics } from 'use-cannon';

import { gameStore } from '../store/gameStore';

import { Tiles } from '../components/game/Tiles';
import { Walls } from '../components/game/Walls';
import { Ball } from '../components/game/Ball';
import { Paddle } from '../components/game/Paddle';
import { Lights } from '../components/game/Lights';
import { Effect } from '../components/vfx/Effect';

import { PerspectiveCamera } from 'three';

export function Game() {
  const [balls, setBalls] = useState(3);
  const [ballLaunched, setBallLaunched] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [score, setGameScore] = useState(0);

  useLayoutEffect(() => {
    const subs = gameStore.balls.subscribe(setBalls);
    subs.add(gameStore.currentLevel.subscribe(setCurrentLevel));
    subs.add(gameStore.ballLaunched.subscribe(setBallLaunched));
    subs.add(gameStore.score.subscribe(setGameScore));
    return () => subs.unsubscribe();
  }, []);

  const camera = useMemo(() => {
    const camera = new PerspectiveCamera(45, 1, 1, 57);
    camera.position.set(0, 0, 45);
    return camera;
  }, []);

  function handleClick() {
    if (balls < 0) {
      gameStore.resetGame();
    } else if (!ballLaunched) {
      gameStore.launchBall();
    } else {
      setBalls(balls - 1);
    }
  }

  return (
    <>
      <div id="game" onClick={handleClick}>
        {balls >= 0 ? (
          <div id="canvas">
            <Canvas shadowMap camera={camera}>
              <Lights />
              <Physics
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
          <p>Score: {score}</p>
          <p onClick={gameStore.resetGame}>Click to restart</p>
        </div>
      </div>
    </>
  );
}
