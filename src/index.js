import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';

import { Canvas } from 'react-three-fiber';
import { Physics } from 'use-cannon';

import { useStore } from './data/store';

import { Tiles } from './components/game/Tiles';
import { Walls } from './components/game/Walls';
import { Ball } from './components/game/Ball';
import { Paddle } from './components/game/Paddle';

import './styles.css';

export default function App() {
  const { launchGame, inGame } = useStore();
  console.log(launchGame, inGame);
  const onClick = useCallback(
    (set) => {
      console.log(inGame);
      if (!inGame) launchGame();
    },
    [inGame, launchGame]
  );
  return (
    <div className="main" onClick={onClick}>
      {inGame ? (
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
      ) : (
        <div>Click to start</div>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
