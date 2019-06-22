import * as React from 'react';
import { Swap, SwapProps } from '../Swap/Swap';
import { Typography } from '../Typography';
import styled, { css, DefaultTheme } from 'styled-components';
import { activationTransition } from '../../css/transitions';
import { math } from 'polished';
import { itemGutter, itemHeight, itemWidth } from './AppMenuItem';
import { leftMargin, rowHeight } from './AppMenu';

export type AppNameProps = Omit<SwapProps, 'children'> & {
  children: string;
};

export const AppName: React.FC<AppNameProps> = ({ children, ...props }) => (
  <Bounds styleFactory={swapTransition} swapKey={children} {...props}>
    <Typography variant="h1">{children}</Typography>
  </Bounds>
);

const height = '60px';

const yOffset = ({ theme }: { theme: DefaultTheme }) =>
  math(`(${itemHeight(theme, true)} - ${rowHeight({ theme })}) - ${height}`);

const xOffset = ({ theme }: { theme: DefaultTheme }) =>
  math(
    `${leftMargin({ theme })} + ${itemWidth(theme, true)} + ${itemGutter(
      theme,
      true
    )}`
  );

const Bounds = styled(Swap)`
  width: 100%;
  height: ${height};
  justify-content: center;
  top: ${yOffset};
  left: ${xOffset};
`;

const swapTransition = (visible: boolean) => css`
  ${activationTransition('opacity', 'transform')};
  opacity: ${visible ? 1 : 0};
  transform: translate3d(0, ${visible ? 0 : '50%'}, 0);
`;
