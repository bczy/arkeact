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

export function Welcome() {
	const [size, setSize] = useState(0);
	const backgroundContainer = useRef(null);
	useFullScreen(backgroundContainer, { size, setSize }, false);

	return (
		<BackgroundContainer ref={backgroundContainer}>
			<Button
				big
				callback={() => {
					gameStore.setGameState(GAME_STATES.LEVEL_CHOICE);
				}}
				enabled
				text="S TA R T"
				style={{ height: '5%', marginTop: '20%', width: '20%' }}
			/>
		</BackgroundContainer>
	);
}
