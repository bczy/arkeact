import React, { useEffect, useState } from 'react';

import { useFrame } from 'react-three-fiber';
import { useSphere } from 'use-cannon';
import { gameStore } from '../../subjects/gameStore';

export function Paddle() {
  const [ref, api] = useSphere(() => ({
    args: 1.3,
    scale: [1, 1, 0.01],
    position: [0, 0, 10],
    sleepSpeedLimit: 4,
  }));

  const [ paddleColor, setPaddleColor ] = useState('#fff')
  const [ ball2dPosition, setBall2dPosition ] = useState({x:0, y:0})
  
  useEffect(()=> {
    gameStore.ball2dPosition.subscribe(setBall2dPosition)
  },[])

  useFrame((state) => {
    const currentMousePosX = state.mouse.x * 10;
    const currentMousePosY = state.mouse.y * 10;
    const diffCurrentPosX = currentMousePosX - ref.current.position.x;
    const diffCurrentPosY = currentMousePosY - ref.current.position.y;
    const diffX = (ball2dPosition.x + 12.5) - (ref.current.position.x + 12.5) 
    const diffY = (ball2dPosition.y + 12.5) - (ref.current.position.y + 12.5) 
    const factor = (1 - Math.abs(diffX + diffY) / 25) * 255 | 0 
    const factor2 = Math.abs(factor - 190) / 55 * 255 | 0
    const color = `rgb(255, ${factor2}, ${factor2})`;
    setPaddleColor(color);

    api.position.set(
      ref.current.position.x + clampMouseMovement(diffCurrentPosX),
      ref.current.position.y + clampMouseMovement(diffCurrentPosY),
      18
    );
  });

  function clampMouseMovement(diffCurrentPos, maxVelocity = 1.5) {
    const isNeg = diffCurrentPos < 0;
    let diffToAddX = 0;
    if (isNeg) {
      diffToAddX = diffCurrentPos < -maxVelocity ? -maxVelocity : diffCurrentPos;
    } else {
      diffToAddX = diffCurrentPos > maxVelocity ? maxVelocity : diffCurrentPos;
    }
    return diffToAddX;
  }
  
  return (
    <>
      <mesh ref={ref} castShadow>
        <boxGeometry attach="geometry" args={[5, 5, 1]} />
        <meshBasicMaterial attach="material" wireframe={true} color={paddleColor} />
      </mesh>
    </>
  );
}
