import React from 'react';

export function Lights() {
  return (
    <>
      <ambientLight intensity={0.75} />
      <directionalLight
        position={[0, 0, 10]}
        shadow-camera-near={0.1}
        shadow-camera-far={1500}
        castShadow
      />
    </>
  );
}
