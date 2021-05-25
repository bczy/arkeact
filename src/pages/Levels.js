/** @format */

import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';

import { playerStore } from '../stores/playerStore';

import { Title } from '../components/hud/common/Title';

import { Level } from '../components/hud/Level';
import { levelStore } from '../stores/levelStore';
import { PageContainer } from '../components/hud/common/PageContainer';

const LevelList = styled.div`
	text-align: center;
	height: 65%;
	width: 100%;
`;

const Levels = () => {
	const [bestscoreValues, setBestscoreValues] = useState([0]);
	useLayoutEffect(() => {
		const subs = playerStore.bestscoreValues.subscribe(setBestscoreValues);
		return () => subs.unsubscribe();
	}, []);
	return (
		<PageContainer>
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
							levelId={index + bestscoreValues.length - 1}
							highscoreValue={0}
							unlocked={false}
						/>
					);
				})}
			</LevelList>
		</PageContainer>
	);
};

export default Levels;