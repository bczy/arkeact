import React, { useRef, useLayoutEffect } from 'react';
import * as THREE from 'three';
export function Lights() {
  const ref = useRef();
  useLayoutEffect(() => {
    ref.current.shadow.camera = new THREE.OrthographicCamera(-100, 100, 100, -100, 0.5, 100);
    ref.current.shadow.mapSize.width = 2048;
    ref.current.shadow.mapSize.height = 2048;
  }, []); 
  return (
    <>
      <ambientLight intensity={0.75} />
      <directionalLight
        ref={ref}
        position={[0, 0, 25]}
        shadow-camera-near={0.1}
        shadow-camera-far={1500}
        castShadow
      />
    </>
  );
}
