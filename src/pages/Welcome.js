/** @format */

import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import { gameStore, GAME_STATES } from '../stores/gameStore';
import { Button } from '../components/hud/common/Button';

import background from '../assets/images/game_title.png';

import { useFullScreen } from '../hooks/windowResize';

const BackgroundContainer = styled.div`
	background: url(${background}) no-repeat center center fixed;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	display: flex;
	justify-content: center;
	position: absolute;
	flex-direction: column;
	align-items: center; 
`;
const MenuButton = ({text, gameState, style}) => <Button
big
callback={() => {
	console.log(gameState)
	gameStore.setGameState(gameState);
}}
text={text}
style={style}
/>

export function Welcome() {
	const [size, setSize] = useState(0);
	const backgroundContainer = useRef(null);
	useFullScreen(backgroundContainer, { size, setSize }, false);
	const buttonStyle = {
		height: '5%',
		width: '50%',
		letterSpacing: '',
		transform: 'rotate(-3deg)',
		fontSize: '3rem',
	};
	return (
		<BackgroundContainer ref={backgroundContainer}>
			<MenuButton style={{...buttonStyle,marginTop: '7.5em'}} text="PLAY" gameState={GAME_STATES.LEVEL_CHOICE}/>
			<div style={{marginTop: '2.5em'}}>
				<MenuButton style={{...buttonStyle,fontSize:'2.25em'}} text="SETTINGS" gameState={GAME_STATES.SETTINGS}/>
				<MenuButton style={{...buttonStyle,fontSize:'2.25em'}} text="ABOUT" gameState={GAME_STATES.ABOUT}/>
			</div>
		</BackgroundContainer>
	);
}
