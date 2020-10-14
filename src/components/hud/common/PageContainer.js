import React from 'react';
import styled from 'styled-components';
import { gameStore, GAME_STATES } from '../../../stores/gameStore';
import { MenuButton } from './Button';
import { Title } from './Title';

const StyledPageContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	color: #5a55ff;
`;

export const PageContainer = ({title, children}) => 
    <StyledPageContainer>
        <Title text={title} />
        {children}
        <MenuButton
            callback={() => {
                gameStore.setGameState(GAME_STATES.WELCOME);
            }}
            text="Back"
        />
    </StyledPageContainer>