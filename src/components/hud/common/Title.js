/** @format */

import React from 'react';
import styled from 'styled-components';

export const StyledTitle = styled.div`
	h1 {
		width: 100%;
		text-align: center;
		font-size: 4em;
	}
`;

export function Title({ text }) {
	return (
		<StyledTitle>
			<h1>{text}</h1>
		</StyledTitle>
	);
}
