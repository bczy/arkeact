/** @format */

import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
	cursor: pointer;
	background: transparent;
	font-size: ${(props) => (props.big ? '2em' : '2.5em')};
	border-radius: ${(props) => (props.big ? '4px' : '2px')};
	font-family: lazer84;
	letter-spacing: 0.1rem;
	color: ${(props) => (props.enabled ? '#e6007e' : 'rgba(90,0,49,0.95)')};
	border-style: none;
	padding: ${(props) => (props.big ? '0.1em 1em' : '0.5em 1em')};
	transition: 0.5s all ease-out;
	${(props) => props.enabled && '&:hover { text-shadow: 2px 2px #FFF; }'}
`;

export function Button({
	callback,
	text,
	enabled = true,
	big = false,
	style = {},
}) {
	return (
		<StyledButton
			big={big}
			enabled={enabled}
			onClick={() => {
				if (enabled) {
					callback();
				}
			}}
			style={{ ...style }}
		>
			{text}
		</StyledButton>
	);
}
