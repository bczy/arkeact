import React, { useEffect, useState } from 'react'
import { useThree } from 'react-three-fiber';
import { useBox } from 'use-cannon';

import { gameStore } from '../../subjects/gameStore';

const Roof = () => {
    const [, setLifes] = useState(3);
    const { scene } = useThree();
    useEffect(() => {
		const subs = gameStore.lifes.subscribe(setLifes);
		return () => subs.unsubscribe();
    }, []);
    
    const [ref] = useBox(() => {
        return {
            args: [28, 28, 0.001],
            position: [0, 0, 45],
            onCollide: (e) => {
                if (gameStore.bonusBalls.getValue().length === 0){
                    gameStore.resetBall();
                }
                else{
                    const { userData } = e.body;
                    if (userData.bonusType === 'ball'){
                        scene.remove(e.body)
                        if (gameStore.ballLost && gameStore.bonusBalls.getValue().length === 1){
                            gameStore.resetBall();
                        }
                        else{
                            gameStore.removeBonusBall(userData.id)
                        }
                    }
                    else{
                        e.body.position.set(-1000,-1000,-1000)
                        gameStore.ballLost.next(true)

                    }
                }
            },
        }});
        
    return <mesh ref={ref} userData={{isRoof: true}}/>
}	


export default Roof;
