/** @format */
import React, { useEffect } from 'react';

import { useSphere } from 'use-cannon';

export function Bonus({ position, id}) {
    
	const [ref, api] = useSphere(() => ({
        mass: 1,
        args: 1,
        position,
        fixedRotation: false,
        onCollide: (e) => {
          //console.log('bonus colliding', e)
        },
      }));

    useEffect(() => {
        api.applyImpulse([0,0,10],position);
      },[position,api]);
      
    return <mesh userData={{bonusType: "ball", id}} castShadow receiveShadow ref={ref}>
        <sphereBufferGeometry attach="geometry" args={[0.5, 64, 64]} />
        <meshStandardMaterial attach="material" />
    </mesh>
}
