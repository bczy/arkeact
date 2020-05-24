import React, { useState, useLayoutEffect } from 'react';
import { useSphere } from 'use-cannon';
import { useFrame, useLoader } from 'react-three-fiber';

import { gameStore } from '../../store/gameStore';

import * as THREE from 'three';
import cross from '../../assets/textures/cross.jpg';
export function Ball() {
  const [ballLaunched, setBallLaunched] = useState(false);

  useLayoutEffect(() => {
    const subs = gameStore.ballLaunched.subscribe(setBallLaunched);
    return () => subs.unsubscribe();
  }, []);
  const map = useLoader(THREE.TextureLoader, cross);
  const [ref, api] = useSphere(() => ({
    mass: 1,
    args: 1,
    position: [0, 0, 0],
    onCollide: (e) => {},
  }));
  useFrame((state) => {
    if (!ballLaunched) {
      api.position.set(state.mouse.x * 10, state.mouse.y * 10, 17.6);
      api.velocity.set(0, 0, 0, 1);
    }
  });
  return (
    <mesh castShadow receiveShadow ref={ref}>
      <sphereBufferGeometry attach="geometry" args={[0.5, 64, 64]} />
      <meshStandardMaterial map={map} attach="material" />
    </mesh>
  );
}
