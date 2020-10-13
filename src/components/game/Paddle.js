import React, { useEffect, useState } from 'react';

import { useFrame } from 'react-three-fiber';
import { useSphere } from 'use-cannon';
import { gameStore } from '../../stores/gameStore';

export function Paddle() {
  const [ref, api] = useSphere(() => ({
    args: 1.3,
    scale: [1, 1, 0.01],
    position: [0, 0, 10],
    sleepSpeedLimit: 4, 
    onCollide: (e) => {},
  }));
  const [ paddleColor, setPaddleColor ] = useState('#0a94ab')
  const [ ball2dPosition, setBall2dPosition ] = useState({x:0, y:0})
  useEffect(()=> {
    gameStore.ball2dPosition.subscribe(setBall2dPosition)
  },[])

  useFrame((state) => {
    const currentMousePosX = state.mouse.x * 10;
    const currentMousePosY = state.mouse.y * 10;
    const diffCurrentPosX = currentMousePosX - ref.current.position.x;
    const diffCurrentPosY = currentMousePosY - ref.current.position.y;
    if (ref.current.position.x === ball2dPosition.x){
      setPaddleColor('#0a94ab')
    } else {
      setPaddleColor('#F00')
    }
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
