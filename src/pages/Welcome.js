/** @format */

import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring'; 
import { gameStore, GAME_STATES } from '../subjects/gameStore';
import { MenuButton } from '../components/hud/common/Button';
import background from '../assets/images/game_title.png';

import { useFullScreen } from '../hooks/windowResize';
import { flexCenter } from '../components/hud/constants';

const BackgroundContainer = styled.div`
	background: url(${background}) no-repeat center center fixed;
	background-size: cover;
	${flexCenter}
	position: absolute;
	flex-direction: column;
	align-items: center; 
`;

const SubMenuButtons = styled.div`
	margin-top: 2.5em;
	display: flex;
	justify-content: space-evenly;
	width: 100%;
`

export function Welcome() {
	const [ size, setSize ] = useState(0);
	const [ show ] = useState(false);
	const backgroundContainer = useRef(null);
	useFullScreen(backgroundContainer, { size, setSize }, false);
	
	const transitions = useTransition(show, null, {
		from: {  opacity: 0, display: 'flex',flexDirection: 'column', alignItems: 'center',marginTop: '25%' },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: { duration: 2000 }
		
	})
	return transitions.map(({ key, props }) => 
		<BackgroundContainer ref={backgroundContainer}>
			<animated.div key={key} style={props}>	
				<MenuButton 
					style={{ marginTop: '25%', fontSize: '3.5em'}} 
					text="PLAY" 
					callback={() => gameStore.setGameState(GAME_STATES.LEVEL_CHOICE)}/>
				<SubMenuButtons>
					<MenuButton 
						text="SETTINGS" 
						callback={() => {gameStore.setGameState(GAME_STATES.SETTINGS)}}/>
					<MenuButton 
						text="ABOUT" 
						callback={() => gameStore.setGameState(GAME_STATES.ABOUT)}/>
				</SubMenuButtons>
			</animated.div>
		</BackgroundContainer>
	);
}
