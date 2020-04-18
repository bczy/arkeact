import React from 'react';

import { useFrame } from 'react-three-fiber';
import { useBox } from 'use-cannon';

export function Paddle() {
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
