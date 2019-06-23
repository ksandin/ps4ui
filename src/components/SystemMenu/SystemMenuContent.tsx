import * as React from 'react';
import { System } from '../../state/System';
import styled, { css, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import { Typography } from '../Typography';
import { activationTransition } from '../../css/transitions';
import { Swap, SwapProps } from '../Swap/Swap';

const height = (theme: DefaultTheme) => math(`${theme.unit} * 82`);

export type SystemMenuContentProps = SwapProps & {
  system?: System;
};

export const SystemMenuContent: React.FC<SystemMenuContentProps> = ({
  system,
  ...props
}) => (
  <Container swapKey={system && system.name} isActive={!!system} {...props}>
    {system && (
      <>
        <Title>{system.name}</Title>
        {system.component && React.createElement(system.component)}
      </>
    )}
  </Container>
);

const Title = styled(Typography).attrs({ variant: 'h3' })`
  margin-bottom: ${props => math(`${props.theme.unit} * 2`)};
`;

const Container = styled(Swap)<{ isActive: boolean }>(
  activationTransition('margin-top', 'opacity'),
  ({ isActive, theme }) => css`
    margin-top: ${!isActive ? math(`-${height(theme)}`) : 0};
    opacity: ${isActive ? 1 : 0};
    height: ${height(theme)};
    padding: ${math(`${theme.unit} * 4`)} ${math(`${theme.unit} * 12`)};
  `
);
