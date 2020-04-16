import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';

import { Canvas, useFrame } from 'react-three-fiber';
import { Physics, useBox } from 'use-cannon';

import { useStore } from './store';

import { Tiles } from './Tiles';
import { Walls } from './Walls';
import { Ball } from './Ball';

import './styles.css';

function Paddle() {
  // Register box as a physics body with mass
  // Make it a physical object that adheres to gravitation and impact
  const [ref, api] = useBox(() => ({
    type: 'Kinematic',
    args: [1, 1, 0.25],
  }));
  useFrame((state) => {
    // The paddle is kinematic (not subject to gravitation), we move it with the api returned by useBox
    api.position.set(state.mouse.x * 10, state.mouse.y * 10, 0);
  });
  return (
    <mesh ref={ref}>
      <boxGeometry attach="geometry" args={[2, 2, 0.5]} />
      <meshBasicMaterial attach="material" wireframe={true} color="#FF0000" />
    </mesh>
  );
}

export default function App() {
  const inGame = useStore((state) => state.inGame);
  const onClick = useCallback(() => inGame, [inGame]);
  return (
    <div className="main">
      <Canvas shadowMap sRGB camera={{ position: [0, 0, 15] }} onClick={onClick}>
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
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
