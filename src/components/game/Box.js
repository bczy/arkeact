import React, { useLayoutEffect, useState } from 'react';

import * as THREE from 'three';
import { useThree, useFrame } from 'react-three-fiber';
import { useBox } from 'use-cannon';

import UIFx from 'uifx';

import brick from '../../assets/sounds/brick.mp3';
import wall from '../../assets/sounds/wall.mp3';

import { gameStore } from '../../stores/gameStore';

export function Box({ position, size = [2, 2, 2], userData, id }) {
  const [balls, setBalls] = useState(3);

  useLayoutEffect(() => {
    const subs = gameStore.balls.subscribe(setBalls);
    return () => subs.unsubscribe();
  }, []);

  const isWall = isNaN(userData.strength);
  const isCorner = isNaN(userData.isCorner);
  const [particleSystem, setParticleSystem] = useState();

  function buildParticleSystem() {
    // create the particle variables
    const particleCount = 25;
    const particles = new THREE.Geometry();
    const pMaterial = new THREE.PointsMaterial({
      color: userData.color,
      size: 0.9,
      transparent: true,
      depthTest: false,
      sizeAttenuation: true,
      opacity: 0.9,
    });

    // now create the individual particles
    for (let p = 0; p < particleCount; p++) {
      // create a particle with random
      // position values, -250 -> 250
      const pX = Math.random() * 2.5 - 1.25 + ref.current.position.x;
      const pY = Math.random() * 2.5 - 1.25 + ref.current.position.y;
      const pZ = Math.random() * 2.5 - 1.25 + ref.current.position.z;
      const particle = new THREE.Vector3(pX, pY, pZ);
      // add it to the geometry
      particles.vertices.push(particle);
    }

    const ps = new THREE.Points(particles, pMaterial);
    ps.customRotation = Math.random() * 2 - 1;
    scene.add(ps);
    return ps;
  }

  let soundAsset = null;
  if (isWall) {
    soundAsset = wall;
  } else if (!userData.isRoof) {
    soundAsset = brick;
  }

  const hitSound = new UIFx(soundAsset);

  const { scene } = useThree();

  const [ref, api] = useBox(() => {
    return {
      type: isCorner ? 'Static' : 'Kinematic',
      args: size.map((x) => x / 2),
      position,
      userData: userData,
      onCollide: (e) => {
        hitSound.play();
        if (userData.isRoof) {
          gameStore.resetBall();
          gameStore.setGlitching(true);
          setTimeout(() => {
            gameStore.setGlitching(false);
            setBalls(balls - 1);
          }, 300);
        } else if (!isWall) {
          userData.strength--;
          if (userData.strength <= 0) {
            api.position.set(-1000, -1000, -100);
            setParticleSystem(buildParticleSystem());
            gameStore.increaseScore(userData.score);
          }
        }
      },
    };
  });

  useFrame(() => {
    if (particleSystem && particleSystem.material.opacity > 0) {
      particleSystem.material.opacity -= 0.0075;
      particleSystem.scale.x += 0.01;
      particleSystem.scale.y += 0.01;
      particleSystem.rotation.x += particleSystem.customRotation / 50;
    }
  });

  return (<>{
    userData.isTile ? 
      (<mesh key={id} ref={ref} userData={userData}>
        <boxGeometry attach="geometry" args={size} />
        <meshStandardMaterial attach="material" wireframe={true} color={userData.color} />
        <mesh userData={userData}>
          <boxGeometry attach="geometry" args={size.map(i => i *0.99)} />
          <meshStandardMaterial attach="material" color={userData.fillColor}  />
        </mesh>
      </mesh>) : 
      (<mesh key={id} ref={ref} receiveShadow  userData={userData}>
        <boxGeometry attach="geometry" args={size} receiveShadow  />
        <meshStandardMaterial attach="material" receiveShadow color={userData.color} />
      </mesh>)
    }</>)
  ;
}
