/** @format */

import React from 'react';
import styled from 'styled-components';

export const StyledTitle = styled.div`
	h1 {
		width: 100%;
		text-align: center;
		font-size: 3.3em;
	}
`;

export function Title({ text }) {
	return (
		<StyledTitle>
			<h1>{text}</h1>
		</StyledTitle>
	);
}
