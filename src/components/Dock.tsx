import * as React from 'react';
import styled from 'styled-components';

export type DockProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: DockVariant;
};

export const dockStyles = {
  fill: `
    width: 100%;
    height: 100%;
  `,
  cover: `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `,
  topRight: `
    position: absolute;
    top: 0;
    right: 0;
  `
};

export type DockVariant = keyof typeof dockStyles;

export const Dock = styled.div<DockProps>`
  ${props => dockStyles[props.variant || 'cover']}
`;
