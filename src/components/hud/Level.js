/** @format */

import React from 'react';
import styled from 'styled-components';

import { gameStore } from '../../stores/gameStore';

import { Button } from './common/Button';

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

export const Level = ({ levelId, unlocked, highscoreValue }) => {
	return (
		<div>
			<LevelContainer>
				<div>
					<h2>Level {levelId + 1}</h2>
					{unlocked && <h3>Highscore: {highscoreValue}</h3>}
				</div>
			{unlocked ? (
				<Button
					callback={() => {
						gameStore.launchLevel(levelId);
					}}
					text="Play"
				/>
			) : (
				<LevelLocked>
					<div>FINISH LEVEL {levelId} TO UNLOCK</div>
				</LevelLocked>
			)}
			</LevelContainer>
		</div>
	);
};
