import React from 'react';

export function Lights() {
  return (
    <>
      <spotLight
        customDistanceMaterial={200}
        intensity={0.1}
        position={[0, 0, 20]}
        angle={Math.PI / 2}
        penumbra={0.2}
        castShadow
      />
      <spotLight castShadow distance={0} intensity={0.3} position={[0, 0, 10]} angle={-Math.PI} />
    </>
  );
}
