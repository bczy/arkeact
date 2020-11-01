import * as THREE from 'three';

export const createParticals = (particleCount, ref, size) => {
	const vertices = []
	
	for (let p = 0; p < particleCount; p++) {
		const pX = Math.random() * size.x - size.x + ref.current.position.x + size.x / 2;
		const pY = Math.random() * size.y - size.y + ref.current.position.y + size.y / 2;
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