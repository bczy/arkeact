/** @format */

import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';

import { gameStore, GAME_STATES } from '../stores/gameStore';
import { playerStore } from '../stores/playerStore';

import { Button } from '../components/hud/common/Button';
import { Title } from '../components/hud/common/Title';

import { Level } from '../components/hud/Level';
import { levelStore } from '../stores/levelStore';

const LevelsPage = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	color:#2e8693;
	text-shadow: 2px 2px #60f2ff;
`;

const LevelList = styled.div`
	text-align: center;
	height: 65%;
	width: 100%;
`;

export const Levels = () => {
	const [bestscoreValues, setBestscoreValues] = useState([0]);
	useLayoutEffect(() => {
		const subs = playerStore.bestscoreValues.subscribe(setBestscoreValues);
		return () => subs.unsubscribe();
	}, []);
	return (
		<LevelsPage>
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
				{levelStore.getLockedLevels(bestscoreValues).map((_, index) => {
					return (
						<Level
							key={index}
							levelId={index + bestscoreValues.length}
							highscoreValue={0}
							unlocked={false}
						/>
					);
				})}
			</LevelList>
			<Button
				callback={() => {
					gameStore.setGameState(GAME_STATES.WELCOME);
				}}
				enabled
				text="Back"
			/>
			<div style={{ marginTop: '3em' }}></div>
		</LevelsPage>
	);
};
