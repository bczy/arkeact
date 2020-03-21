import * as THREE from 'three';
import * as CANNON from 'cannon';
import ReactDOM from 'react-dom';
import React, { useCallback } from 'react';
import { Canvas, useThree, useFrame } from 'react-three-fiber';
import { useCannon, Provider } from './useCannon';
import './styles.css';

const brickTypes = {
  red: {
    color: '#FF0000',
    bonusProbability: 0,
    strength: 1
  },
  green: {
    color: '#00FF00',
    bonusProbability: 0,
    strength: 1
  },
  blue: {
    color: '#0000FF',
    bonusProbability: 0,
    strength: 1
  },
  grey: {
    color: '#CCCCCC',
    bonusProbability: 0,
    strength: 100000
  }
};

function Paddle() {
  // Register box as a physics body with mass
  const ref = useCannon({ mass: 1 }, body => {
    body.addShape(new CANNON.Box(new CANNON.Vec3(2, 2, 0.5)));
    body.position.set(0, 0, 10);
  });

  const { mouse } = useThree();
  useFrame(() => {
    ref.current.position.x = 12.5 * mouse.x;
    ref.current.position.y = 12.5 * mouse.y;
    ref.current.position.z = 5;
  });
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxGeometry attach="geometry" args={[2, 2, 0.5]} />
      <meshBasicMaterial attach="material" wireframe={true} color="#FF0000" />
    </mesh>
  );
}

function Box({ position, type, size = [2, 2, 2] }) {
  // Register box as a physics body with mass
  const ref = useCannon({ mass: 1 }, body => {
    body.addShape(new CANNON.Box(new CANNON.Vec3(1, 1, 1)));
    body.position.set(...position);
  });
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxGeometry attach="geometry" args={size} />
      <meshStandardMaterial attach="material" roughness={0.5} color={brickTypes[type].color} />
    </mesh>
  );
}
function Sphere({ position }) {
  // Register box as a physics body with mass
  const ref = useCannon({ mass: 1 }, body => {
    body.addShape(new CANNON.Sphere(1));
    body.position.set(...position);
  });
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <sphereGeometry attach="geometry" args={[1, 15, 15]} />
      <meshStandardMaterial attach="material" roughness={0.5} color="#FFFFFF" />
    </mesh>
  );
}

export default function App() {
  return (
    <div className="main">
      <Canvas
        shadowMap
        camera={{ position: [0, 0, 15] }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.outputEncoding = THREE.sRGBEncoding;
        }}
      >
        <pointLight position={[-0, -0, 30]} intensity={0.25} />
        <spotLight intensity={0.3} position={[0, 0, -20]} angle={0.2} penumbra={1} castShadow />
        <Provider>
          <Box position={[-12.5, 0, 0]} type="grey" size={[1, 25, 130]} />
          <Box position={[12.5, 0, 0]} type="grey" size={[1, 25, 130]} />
          <Box position={[0, 12.5, 0]} type="grey" size={[25, 1, 130]} />
          <Box position={[0, -12.5, 0]} type="grey" size={[25, 1, 130]} />
          <Box position={[0, 0, -75]} type="grey" size={[25, 25, 1]} />
          <Box position={[-10, 0, -50]} type="red" />
          <Box position={[-7.5, 0, -50]} type="green" />
          <Box position={[-5, 0, -50]} type="red" />
          <Box position={[-2.5, 0, -50]} type="blue" />
          <Box position={[0, 0, -50]} type="green" />
          <Box position={[2.5, 0, -50]} type="blue" />
          <Box position={[5, 0, -50]} type="red" />
          <Box position={[7.5, 0, -50]} type="green" />
          <Box position={[10, 0, -50]} type="red" />

          <Box position={[-10, 2.5, -50]} type="red" />
          <Box position={[-7.5, 2.5, -50]} type="green" />
          <Box position={[-5, 2.5, -50]} type="red" />
          <Box position={[-2.5, 2.5, -50]} type="blue" />
          <Box position={[0, 2.5, -50]} type="green" />
          <Box position={[2.5, 2.5, -50]} type="blue" />
          <Box position={[5, 2.5, -50]} type="red" />
          <Box position={[7.5, 2.5, -50]} type="green" />
          <Box position={[10, 2.5, -50]} type="red" />

          <Box position={[-10, -2.5, -50]} type="red" />
          <Box position={[-7.5, -2.5, -50]} type="green" />
          <Box position={[-5, -2.5, -50]} type="red" />
          <Box position={[-2.5, -2.5, -50]} type="blue" />
          <Box position={[0, -2.5, -50]} type="green" />
          <Box position={[2.5, -2.5, -50]} type="blue" />
          <Box position={[5, -2.5, -50]} type="red" />
          <Box position={[7.5, -2.5, -50]} type="green" />
          <Box position={[10, -2.5, -50]} type="red" />
          <Sphere position={[0, 0, 4]} />
          <Paddle />
        </Provider>
      </Canvas>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
