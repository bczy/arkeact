import React, { useRef, useLayoutEffect, useState, useMemo, useEffect } from 'react';
import { useFrame, useThree, extend } from 'react-three-fiber';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';

import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { FilmPass } from './FilmPass';

import { GlitchPass } from './GlitchPass';

import { gameStore } from '../../subjects/gameStore';

extend({ EffectComposer, RenderPass, UnrealBloomPass, FilmPass, GlitchPass });

export function Effect() {
  const [glitching, setGlitching] = useState(true);
  useLayoutEffect(() => {
    const subs = gameStore.glitching.subscribe(setGlitching);
    return () => subs.unsubscribe();
  }, []);
  const composer = useRef();
  const { scene, gl, size,camera } = useThree();
  const aspect = useMemo(() => new THREE.Vector2(size.width, size.height), [size]);
  useEffect(() => void composer.current.setSize(size.width, size.height), [size]);
  useFrame(() => {
        composer.current.render()},1)
  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" scene={scene} camera={camera} />
      <unrealBloomPass attachArray="passes" args={[aspect, 0.25, 0.2, 0]} />
      <filmPass attachArray="passes" noiseIntensity={0} args={[0.35, 0.6, 1500, false]} />
      <glitchPass attachArray="passes" factor={glitching ? 1 : 0} />
    </effectComposer>
  );
}
