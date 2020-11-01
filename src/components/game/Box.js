/** @format */

import React from 'react';
import { useBox } from 'use-cannon';
import UIFx from 'uifx';

import wall from '../../assets/sounds/wall.mp3';

export function Box({ 
		position, 
		color,
		cornerData,
		id,
		size = [2, 2, 2], 
	}) {
	
	const hitSound = new UIFx(wall);
	//TODO corner Object
	const isCorner = isNaN(cornerData);

	const [ref] = useBox(() => {
		return {
			type: isCorner ? 'Static' : 'Kinematic',
			args: size,
			position,
			onCollide: (e) => {
				hitSound.play();
			},
		}});

	return <mesh key={id} ref={ref} receiveShadow >
			<boxGeometry attach="geometry" args={size} receiveShadow />
			<meshStandardMaterial attach="material" receiveShadow color={color} />
		</mesh>
}
