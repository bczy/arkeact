/** @format */

import React from 'react';
import styled from 'styled-components';

import { gameStore } from '../../stores/gameStore';

import { Button } from './common/Button';

export const LevelContainer = styled.div`
	justify-content: space-evenly;
	grid-row: 1;
	color: green;
	display: flex;
`;

export const LevelLocked = styled.div`
	justify-content: space-evenly;
	grid-row: 1;
	color: green;
	display: flex;
`;

export const Level = ({ levelId, unlocked, highscoreValue }) => {
	return (
		<div>
			{unlocked ? (
				<LevelContainer>
					<div>
						<h2>Level {levelId + 1}</h2>
						{unlocked && <h3>Highscore: {highscoreValue}</h3>}
					</div>
					<Button
						callback={() => {
							gameStore.launchLevel(levelId);
						}}
						text="Play"
					/>
				</LevelContainer>
			) : (
				<LevelLocked>
					<div>FINISH LEVEL {levelId} TO UNLOCK</div>
				</LevelLocked>
			)}
		</div>
	);
};
