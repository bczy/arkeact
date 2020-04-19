import React from 'react';

import { useFrame } from 'react-three-fiber';
import { useSphere } from 'use-cannon';

export function Paddle() {
  const [ref, api] = useSphere(() => ({
    args: 1,
  }));
  useFrame((state) => {
    // The paddle is kinematic (not subject to gravitation), we move it with the api returned by useBox
    api.position.set(state.mouse.x * 10, state.mouse.y * 10, 0);
  });
  return (
    <mesh ref={ref} castShadow>
      <boxGeometry attach="geometry" args={[3, 3, 0.5]} />
      <meshBasicMaterial attach="material" wireframe={true} color="#FF0000" />
    </mesh>
  );
}
