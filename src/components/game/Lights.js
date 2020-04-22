import React from 'react';

export function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 0, 10]} intensity={0.5} />
    </>
  );
}
