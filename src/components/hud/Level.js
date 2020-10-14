/** @format */

import React from 'react';
import styled from 'styled-components';

import { gameStore } from '../../stores/gameStore';

import { MenuButton } from './common/Button';

export const LevelContainer = styled.div`
	justify-content: space-evenly;
	grid-row: 1;
	display: flex;
`;

export const LevelLocked = styled.div`
	justify-content: space-evenly;
	grid-row: 1;
	display: flex;
	align-self: center;
`;


export const Level = ({ levelId, unlocked, highscoreValue }) => 
	<LevelContainer>
		<div>
			<h2>Level {levelId + 1}</h2>
			{unlocked && <h3>Highscore: {highscoreValue}</h3>}
		</div>
		{unlocked ? (
			<MenuButton
				text="Play" 
				callback={() => gameStore.launchLevel(levelId)} />
		
		) : (
			<LevelLocked>
				<div>FINISH LEVEL {levelId + 1} TO UNLOCK</div>
			</LevelLocked>
		)}
	</LevelContainer>

