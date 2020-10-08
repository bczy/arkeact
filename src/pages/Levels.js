/** @format */

import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';

import { gameStore, GAME_STATES } from '../stores/gameStore';
import { playerStore } from '../stores/playerStore';

import { Button } from '../components/hud/common/Button';
import { Title } from '../components/hud/common/Title';

import { Level } from '../components/hud/Level';

export const LevelsChoice = styled.div`
	height: 100%;
`;

export const LevelList = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	text-align: center;
`;

export const Levels = () => {
	const [bestscoreValues, setBestscoreValues] = useState([0]);
	useLayoutEffect(() => {
		const subs = playerStore.bestscoreValues.subscribe(setBestscoreValues);
		return () => subs.unsubscribe();
	}, []);
	return (
		<LevelsChoice>
			<Title text="LEVELS" />
			<LevelList>
				{bestscoreValues.map((_, levelId) => {
					return (
						<Level
							key={levelId}
							levelId={levelId}
							highscoreValue={bestscoreValues[levelId]}
							unlocked={true}
						/>
					);
				})}
				{}
			</LevelList>
			<div style={{ marginTop: '3em' }}>
				<Button
					callback={() => {
						gameStore.setGameState(GAME_STATES.WELCOME);
					}}
					enabled
					text="Back"
				/>
			</div>
		</LevelsChoice>
	);
};
