import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';

import { Canvas, useFrame } from 'react-three-fiber';
import { Physics, useSphere, useBox } from 'use-cannon';

import create from 'zustand';

import { Tiles } from './Tiles';
import { Walls } from './Walls';

import './styles.css';

export const [useStore] = create(set => ({
  count: 0,
  inGame: false,
  api: {
    pong(velocity) {
      console.log('touch paddle', velocity);
      if (velocity > 4) set(state => ({ count: state.count + 1 }));
    },
    reset: welcome => set(state => ({ welcome, count: welcome ? state.count : 0 })),
    touch() {
      console.log('touch');
    }
  }
}));

function Ball({ position }) {
  // Make the ball a physics object with a low mass
  const [ref] = useSphere(() => ({
    mass: 1,
    args: 0.5,
    position
  }));
  return (
    <mesh castShadow ref={ref}>
      <sphereBufferGeometry attach="geometry" args={[0.5, 64, 64]} />
      <meshStandardMaterial attach="material" color="#FFFFFF" />
    </mesh>
  );
}

function Paddle() {
  // Register box as a physics body with mass
  // Make it a physical object that adheres to gravitation and impact
  const { pong } = useStore(state => state.api);
  const [ref, api] = useBox(() => ({
    type: 'Kinematic',
    args: [1, 1, 0.25],
    onCollide: e => pong(e.contact.impactVelocity)
  }));
  useFrame(state => {
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
  const inGame = useStore(state => state.inGame);
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
            friction: 0.9,
            restitution: 0.7,
            contactEquationStiffness: 1e7,
            contactEquationRelaxation: 1,
            frictionEquationStiffness: 1e7,
            frictionEquationRelaxation: 2
          }}
          gravity={[0, 0, 0]}
          allowSleep={false}
        >
          <Walls />
          <Tiles />
          <Paddle />
          <Ball position={[0, 10, 0]} />
        </Physics>
      </Canvas>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
