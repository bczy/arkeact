import React from 'react';
import { useSphere } from 'use-cannon';
import { useFrame } from 'react-three-fiber';
import { useGameStore } from '../../data/stores/game';

export function Ball() {
  const { ballLaunched } = useGameStore((state) => state);

  const [ref, api] = useSphere(() => ({
    mass: 1,
    args: 1,
    position: [0, 0, 0],
  }));
  useFrame((state) => {
    // The paddle is kinematic (not subject to gravitation), we move it with the api returned by useBox
    if (!ballLaunched) {
      api.position.set(state.mouse.x * 10, state.mouse.y * 10, -1.5);
      // Velocity
      api.velocity.set(0, 0, 0, 1);
      api.angularVelocity.set(0, 0, 0, 1);
    }
  });
  return (
    <mesh castShadow receiveShadow ref={ref}>
      <sphereBufferGeometry attach="geometry" args={[0.5, 64, 64]} />
      <meshStandardMaterial attach="material" color="#FFFFFF" />
    </mesh>
  );
}
