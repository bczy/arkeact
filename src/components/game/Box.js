/** @format */

import React, { useEffect, useState } from 'react';
import { useBox } from 'use-cannon';
import UIFx from 'uifx';

import wall from '../../assets/sounds/wall.mp3';

import { gameStore } from '../../stores/gameStore';

export function Box({ 
		position, 
		color,
		cornerData,
		isRoof,
		id,
		size = [2, 2, 2], 
	}) {

	const [balls, setBalls] = useState(3);
	
	const hitSound = new UIFx(wall);
	const isCorner = isNaN(cornerData);

	const [ref] = useBox(() => {
		return {
			type: isCorner ? 'Static' : 'Kinematic',
			args: size.map((x) => x / 2),
			position,
			onCollide: () => {
				hitSound.play();
				if (isRoof) {
					gameStore.resetBall();
					gameStore.setGlitching(true);
					setTimeout(() => {
						gameStore.setGlitching(false);
						setBalls(balls - 1);
					}, 300);
				}
			},
		};
	});


	useEffect(() => {
		const subs = gameStore.balls.subscribe(setBalls);
		return () => subs.unsubscribe();
	}, []);
	
	if (isRoof){
		return 	<mesh key={id} ref={ref} />
	}

	return <mesh key={id} ref={ref} receiveShadow >
			<boxGeometry attach="geometry" args={size} receiveShadow />
			<meshStandardMaterial attach="material" receiveShadow color={color} />
		</mesh>
}
