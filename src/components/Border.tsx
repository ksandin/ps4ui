import styled from 'styled-components';
import { activationTransition } from '../css/transitions';
import { HTMLAttributes } from 'react';
import { math } from 'polished';

export type BorderProps = HTMLAttributes<HTMLDivElement> & {
  isActive?: boolean;
};

export const Border = styled.div<BorderProps>`
  &:after {
    pointer-events: none;
    ${activationTransition('border-width', 'top', 'right', 'bottom', 'left')};
    ${({ isActive, theme }) => {
      const borderWidth = isActive ? math(`${theme.unit} * 0.75`) : 0;
      const offset = math(`-2px - ${isActive ? borderWidth : 0}`);
      return {
        borderWidth,
        content: '\'\'',
        display: 'block',
        position: 'absolute',
        top: offset,
        right: offset,
        bottom: offset,
        left: offset,
        borderStyle: 'solid',
        borderColor: theme.colors.white,
        boxShadow: `0 0 ${isActive ? 3 : 0}px ${isActive ? 1 : 0}px ${
          theme.colors.secondary
        }`,
        borderRadius: '1px'
      };
    }}
  }
`;
