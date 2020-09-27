import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: ${(props) => (props.big ? '5em' : '2.5em')};
  border-radius: ${(props) => (props.big ? '4px' : '2px')};
  font-family: VT323;
  color: ${(props) => (props.enabled ? 'rgba(0,255,0,0.3)' : 'green')};
  border: ${(props) => (props.enabled ? 'rgba(0,255,0,0.3)' : 'green')};
  border-style: solid;
  padding: ${(props) => (props.big ? '0.1em 1em' : '0.5em 1em')};
  transition: 0.5s all ease-out;
  box-shadow: 0.02em 0.02em 0.01em 0.01em;
  width: 4.5em;
  ${(props) =>
    props.enabled &&
    '&:hover { color: rgb(0, 255, 0);border: rgb(0, 255, 0) solid;box-shadow: 0.04em 0.04em 0.02em 0.02em;}'}
`;

export function Button({ callback, text, enabled = true, big = false }) {
  return (
    <div>
      <StyledButton
        big={big}
        enabled={enabled}
        onClick={() => {
          if (enabled) {
            callback();
          }
        }}
      >
        {text}
      </StyledButton>
    </div>
  );
}
