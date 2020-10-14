/** @format */

import React from 'react';
import styled from 'styled-components';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { PageContainer } from '../components/hud/common/PageContainer';
import { flexCenter } from '../components/hud/constants';

const SettingsContent = styled.div``

const PanelTitle = ({title}) => <h2>{title}</h2>

const StyledSliderContainer = styled.div`
    ${flexCenter};
    align-items:center;
    width: 100%;
`

const SliderContainer = ({label}) => 
    <StyledSliderContainer>
        <h3>{label}</h3>
        <Slider style={{marginLeft: "1em"}}/>
    </StyledSliderContainer>

const StyledSettingsPanel = styled.div`
    ${flexCenter};
    align-items:center;
    flex-direction: column;
    width: 70%;
    margin: auto;
`
const SettingsPanel = ({title,children}) => 
    <StyledSettingsPanel>
        <PanelTitle title={title}/>
        {children}
    </StyledSettingsPanel>

export const Settings = () => 
    <PageContainer title={"SETTINGS"}>
        <SettingsContent>
            <SettingsPanel title={"AUDIO"}>
                <SliderContainer label={'MUSIC'}/>
                <SliderContainer label={'VFX'}/>
            </SettingsPanel>
        </SettingsContent>
    </PageContainer>

