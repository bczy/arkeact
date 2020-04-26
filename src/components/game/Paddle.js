import React from 'react';

import { useFrame } from 'react-three-fiber';
import { useSphere } from 'use-cannon';

export function Paddle() {
  const [ref, api] = useSphere(() => ({
    args: 1.8,
  }));
  function clampMouseMovement(diffCurrentPos, maxVelocity = 1) {
    const isNeg = diffCurrentPos < 0;
    let diffToAddX = 0;
    if (isNeg) {
      diffToAddX = diffCurrentPos < -maxVelocity ? -maxVelocity : diffCurrentPos;
    } else {
      diffToAddX = diffCurrentPos > maxVelocity ? maxVelocity : diffCurrentPos;
    }
    return diffToAddX;
  }
  useFrame((state) => {
    // The paddle is kinematic (not subject to gravitation), we move it with the api returned by useBox
    const currentMousePosX = state.mouse.x * 10;
    const currentMousePosY = state.mouse.y * 10;
    const diffCurrentPosX = currentMousePosX - ref.current.position.x;
    const diffCurrentPosY = currentMousePosY - ref.current.position.y;

    api.position.set(
      ref.current.position.x + clampMouseMovement(diffCurrentPosX),
      ref.current.position.y + clampMouseMovement(diffCurrentPosY),
      10
    );
  });
  return (
    <>
      <mesh ref={ref} castShadow>
        <boxGeometry attach="geometry" args={[4, 4, 1]} />
        <meshBasicMaterial attach="material" wireframe={true} color="#FF0000" />
      </mesh>
    </>
  );
}
