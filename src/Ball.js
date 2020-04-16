import React from 'react';
import { useSphere } from 'use-cannon';
import { useStore } from './index';

export function Ball({ position }) {
  // Make the ball a physics object with a low mass
  const { collide } = useStore((state) => state.api);

  const [ref] = useSphere(() => ({
    mass: 1,
    args: 0.5,
    position,
    onCollide: (e) => collide(e.contact.impactVelocity, e),
  }));
  return (
    <mesh castShadow ref={ref}>
      <sphereBufferGeometry attach="geometry" args={[0.5, 64, 64]} />
      <meshStandardMaterial attach="material" color="#FFFFFF" />
    </mesh>
  );
}
