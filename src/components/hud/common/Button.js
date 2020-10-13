/** @format */

import React, { useState } from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring'; 

import { flexCenter } from '../constants'

import underline from '../../../assets/images/underline.png';

const StyledButton = styled.button`
	cursor: pointer;
	background: transparent;
	letter-spacing: 0.1rem;
	color: ${(props) => (props.enabled ? '#e6007e' : '#dec99e')};
	border-style: none;
	transition: 0.5s all ease-out;
	opacity: 0.75;
	font-size: 2em;
	align-items: center;
	flex-direction: column;
	${flexCenter}
	${(props) => props.enabled && '&:hover { text-shadow: 2px 2px #dec99f; opacity: 1 }'}
	${(props) => props.enabled && '&:hover img {filter: drop-shadow(0 0 30px rgba(255,255,255,1)); opacity: 1 }'}
`;

const Underline = styled.img`
	opacity: 0.5;
	top: 1.25em;
	${(props) => `width: ${props.textLength * 0.9}em;`}
}
`

export function Button({
	callback,
	text,
	enabled = true,
	style = {},
}) {
	const [ show ] = useState(false)
	const transitions = useTransition(show, null, {
		from: {  opacity: 0, ...flexCenter },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: { duration: 1500 }
		
	})
	return transitions.map(({ key, props }) => 
		<animated.div key={key} style={props}>	
			<StyledButton
				enabled={enabled}
				onClick={() => {
					if (enabled) {
						callback();
					}
				}}
				style={{ ...style }}
			>
				{text}
			{ enabled && <Underline src={underline} textLength={text.length} alt={""} />}
			</StyledButton>
		</animated.div>
	);
}

const buttonStyle = {
	height: '5%',
	width: '15rem',
	border: 'none',
	transform: 'rotate(-3deg)',
	fontSize: '3rem',
	'align-items': 'center',
};

export const MenuButton = ({text, style, callback}) => 
	<Button
		callback={callback}
		text={text}
		style={{...style, buttonStyle}}
	/>;
