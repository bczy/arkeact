import React, { useMemo, useState, useLayoutEffect, useRef } from 'react';

import { Canvas } from 'react-three-fiber';
import { Physics } from 'use-cannon';

import { gameStore } from '../stores/gameStore';

import { Tiles } from '../components/game/Tiles';
import { Walls } from '../components/game/Walls';
import { Ball } from '../components/game/Ball';
import { Paddle } from '../components/game/Paddle';
import { Lights } from '../components/game/Lights';
import { Effect } from '../components/vfx/Effect';

import { PerspectiveCamera } from 'three';
import { Hud } from '../components/hud/Hud';

export function Game() {
  const [balls, setBalls] = useState(3);
  const [ballLaunched, setBallLaunched] = useState(false);
  const [size, setSize] = useState(0);

  const canvasContainer = useRef(null);

  function useWindowResize() {
    useLayoutEffect(() => {
      function updateSize() {
        if (window.innerHeight > window.innerWidth) {
          setSize(window.width);
          canvasContainer.current.style.width = `${window.innerWidth}px`;
          canvasContainer.current.style.height = `${window.innerWidth}px`;
        } else {
          canvasContainer.current.style.width = `${window.innerHeight}px`;
          canvasContainer.current.style.height = `${window.innerHeight}px`;
          setSize(window.innerHeight);
        }
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  useLayoutEffect(() => {
    const subs = gameStore.balls.subscribe(setBalls);
    subs.add(gameStore.ballLaunched.subscribe(setBallLaunched));
    return () => subs.unsubscribe();
  }, []);

  const camera = useMemo(() => {
    const camera = new PerspectiveCamera(45, 1, 1, 57);
    camera.position.set(0, 0, 45);
    return camera;
  }, []);

  useWindowResize();

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
        <div ref={canvasContainer}>
          <Canvas style={{ width: '100%', height: '100%' }} shadowMap camera={camera}>
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
          <Hud />
        </div>
      </div>
    </>
  );
}
