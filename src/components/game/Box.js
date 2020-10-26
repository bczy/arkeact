/** @format */

import React, { useEffect, useState } from 'react';

import * as THREE from 'three';
import { useFrame } from 'react-three-fiber';
import { useBox } from 'use-cannon';

import UIFx from 'uifx';

import brick from '../../assets/sounds/brick.mp3';
import wall from '../../assets/sounds/wall.mp3';

import { gameStore } from '../../stores/gameStore';

function createParticals(particleCount, ref) {
	const vertices = []
	for (let p = 0; p < particleCount; p++) {
		const pX = Math.random() * 1.25 - 1.25 + ref.current.position.x + 0.5;
		const pY = Math.random() * 1.25 - 1.25 + ref.current.position.y+ 0.5;
		const pZ = ref.current.position.z - 0.5;
		vertices.push(pX, pY, pZ);
	}
	const geometry = new THREE.BufferGeometry();
	geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
	return geometry;
}
const createMaterial = (color) =>
	new THREE.PointsMaterial({
		color,
		size: 0.9,
		transparent: true,
		depthTest: false,
		sizeAttenuation: true,
		opacity: 0.9,
	});

export function Box({ position, size = [2, 2, 2], strength,
	color,
	fillColor,
	cornerData,
	isRoof,
	isTile,
	scoreValue, id }) {

	const [balls, setBalls] = useState(3);

	let particlesPool = [];

	const isWall = isNaN(strength);
	const isCorner = isNaN(cornerData);
	
	const initialStrength = strength;

	const [ref, api] = useBox(() => {
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
				} else if (isTile) {
					strength--;
					ref.current.children.push(particlesPool[strength])
					if (strength <= 0) {
						api.position.set(-1000, -1000, -100);
						gameStore.increaseScoreValue(scoreValue);
					} else {
						console.log(ref.current)
						ref.current.children[0].material.opacity = strength / initialStrength
					}
				}
			},
		};
	});

	useFrame(() => {
		for (let i = 1 ; i < ref.current.children.length; i++){
			if (ref.current.children[i] && ref.current.children[i].material.opacity > 0) {
				ref.current.children[i].material.opacity -= 0.0075;
				ref.current.children[i].scale.x += 0.05;
				ref.current.children[i].scale.y += 0.05;
			}
		}
	});

	useEffect(() => {
		const subs = gameStore.balls.subscribe(setBalls);
		if (isTile){
			for (let i = 0; i < strength; i++){
				const material = createMaterial(color);
				const geometry = createParticals(75, ref, material);
				const particles = new THREE.Points(geometry, material);
				particles.customRotation = 0;
				particlesPool.push(particles)
			}
		}
		return () => subs.unsubscribe();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	

	let soundAsset = null;
	if (isWall || isCorner) {
		soundAsset = wall;
	} else if (isRoof || isTile) {
		soundAsset = brick;
	}
	const hitSound = new UIFx(soundAsset);
	
	if (isRoof){
		return 	<mesh key={id} ref={ref} />
	}

	return (
		<>
			{isTile ? (
				<mesh key={id} ref={ref} >
					<boxGeometry attach="geometry" args={size} />
					<meshStandardMaterial
						attach="material"
						wireframe={true}
						color={color}
					/>
					<mesh receiveShadow>
						<boxGeometry attach="geometry" args={size.map((i) => i * 0.99)} />
						<meshStandardMaterial attach="material" color={fillColor} />
					</mesh>
				</mesh>
			) : (
				<mesh key={id} ref={ref} receiveShadow >
					<boxGeometry attach="geometry" args={size} receiveShadow />
					<meshStandardMaterial attach="material" receiveShadow color={color} />
				</mesh>
			)}
		</>
	);
}
