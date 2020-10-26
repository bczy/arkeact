import * as THREE from 'three';

export const createParticals = (particleCount, ref) => {
	const vertices = []
	for (let p = 0; p < particleCount; p++) {
		const pX = Math.random() * 1.25 - 1.25 + ref.current.position.x + 0.5;
		const pY = Math.random() * 1.25 - 1.25 + ref.current.position.y + 0.5;
		const pZ = ref.current.position.z - 0.5;
		vertices.push(pX, pY, pZ);
	}
	const geometry = new THREE.BufferGeometry();
	geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
	return geometry;
}

export const createMaterial = (color) =>
	new THREE.PointsMaterial({
		color,
		size: 0.9,
		transparent: true,
		depthTest: false,
		sizeAttenuation: true,
		opacity: 0.9,
	});