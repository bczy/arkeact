import React, { useEffect, useRef, useState } from "react"
import { useFrame, useThree } from "react-three-fiber"
import { gameStore } from "../../subjects/gameStore"

function Camera(props) {
	const [ , setGlitching ] = useState(true)
	const [ zooming, setZooming ] = useState(false)
	const ref = useRef()
	const { setDefaultCamera } = useThree()
	
	useEffect(() => { 
		const subs = gameStore.glitching.subscribe(setGlitching);
		setTimeout(() => {gameStore.setGlitching(false)}, 1000)
		setTimeout(() => {setZooming(true)}, 1500)
		setDefaultCamera(ref.current)
		return () => subs.unsubscribe();
	}, [setDefaultCamera])
	
	useFrame(() => {
		if (zooming && ref.current.position.z > 45){
			ref.current.position.z -= 0.75
		} else {
			setZooming(false)
		}
		ref.current.updateMatrixWorld()
	})
	
	return <perspectiveCamera ref={ref} position={[0, 0, 85]} {...props} fov={45} far={157} />
}

export default Camera;