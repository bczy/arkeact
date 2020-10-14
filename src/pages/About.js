/** @format */

import React from 'react';
import styled from 'styled-components';

import { PageContainer } from '../components/hud/common/PageContainer';

const AboutContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column; 
    font-size: 1.5em;
`

export const About = () => 
    <PageContainer title={"ABOUT"}>
        <AboutContent>
            <p>This game is a side project started during my confinment.</p>
            <p>Made with react-three-fiber, canonjs, .</p>
            <p>A special thanks to <a href="/#">Mat'</a> for the graphic assets and visual advices!</p>
        </AboutContent>
    </PageContainer>

