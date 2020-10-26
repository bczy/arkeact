/** @format */
import React, { useEffect } from 'react';

import * as THREE from 'three';
import { useFrame } from 'react-three-fiber';
import { useBox } from 'use-cannon';
import UIFx from 'uifx';

import brick from '../../assets/sounds/brick.mp3';

import { gameStore } from '../../stores/gameStore';
import { createMaterial, createParticals } from '../../utils/particles';

export function Tile({ 
        position, 
        strength,
        color,
        fillColor,
        scoreValue, 
        id, 
        size = [2, 2, 2], 
    }) {

	let particlesPool = [];

	const initialStrength = strength;
	const hitSound = new UIFx(brick);

	const [ref, api] = useBox(() => {
		return {
			type:'Kinematic',
			args: size.map((x) => x / 2),
			position,
			onCollide: () => {
				hitSound.play();
                strength--;
                ref.current.children.push(particlesPool[strength])
                if (strength <= 0) {
                    api.position.set(-1000, -1000, -100);
                    gameStore.increaseScoreValue(scoreValue);
                } else {
                    console.log(ref.current)
                    ref.current.children[0].material.opacity = strength / initialStrength
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
        for (let i = 0; i < strength; i++){
            const material = createMaterial(color);
            const geometry = createParticals(75, ref, material);
            const particles = new THREE.Points(geometry, material);
            particles.customRotation = 0;
            particlesPool.push(particles)
        }
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
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
	);
}
