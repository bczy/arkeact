import React from 'react';
import { useSphere } from 'use-cannon';

export function Ball({ position }) {
  const [ref] = useSphere(() => ({
    mass: 1,
    args: 1,
    position,
  }));
  return (
    <mesh castShadow receiveShadow ref={ref}>
      <sphereBufferGeometry attach="geometry" args={[0.5, 64, 64]} />
      <meshStandardMaterial attach="material" color="#FFFFFF" />
    </mesh>
  );
}
