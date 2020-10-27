/** @format */
import React, { useEffect, useRef } from 'react';

import { useSphere } from 'use-cannon';

export function Bonus({ bonus, position}) {
    
	const [ref, api] = useSphere(() => ({
        mass: 1,
        args: 1,
        position,
        fixedRotation: false,
        onCollide: (e) => {},
      }
      
      ));
    useEffect(() => api.applyImpulse([0,0,10],position))
    return <mesh castShadow receiveShadow ref={ref}>
        <sphereBufferGeometry attach="geometry" args={[0.5, 64, 64]} />
        <meshStandardMaterial attach="material" />
    </mesh>
}
