/** @format */

import React from 'react';
import styled from 'styled-components';

export const StyledTitle = styled.div`
	h1 {
		margin: 0;
		width: 100%;
		text-align: center;
	}
`;

export function Title({ text }) {
	return (
		<StyledTitle>
			<h1>{text}</h1>
		</StyledTitle>
	);
}
