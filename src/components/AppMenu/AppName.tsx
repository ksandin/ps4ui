import * as React from 'react';
import { Swap, SwapProps } from '../Swap/Swap';
import { Typography } from '../Typography';
import styled, { css } from 'styled-components';
import { activationTransition } from '../../css/transitions';

export type AppNameProps = Omit<SwapProps, 'children'> & {
  children: string;
};

export const AppName: React.FC<AppNameProps> = ({ children, ...props }) => (
  <Bounds styleFactory={swapTransition} swapKey={children} {...props}>
    <Typography variant="h1">{children}</Typography>
  </Bounds>
);

const Bounds = styled(Swap)`
  width: 100%;
  height: 60px;
  justify-content: center;
`;

const swapTransition = (visible: boolean) => css`
  ${activationTransition('opacity', 'transform')};
  opacity: ${visible ? 1 : 0};
  transform: translate3d(0, ${visible ? 0 : '50%'}, 0);
`;
