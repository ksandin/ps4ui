import * as React from 'react';
import { Content } from '../../state/Content';
import styled, { css, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import { Typography } from '../Typography';
import { activationTransition } from '../../css/transitions';

export type SystemMenuContentProps = {
  system?: Content;
};

export const SystemMenuContent: React.FC<SystemMenuContentProps> = ({
  system
}) => (
  <Style isActive={!!system}>
    {system && <Typography variant="h3">{system.name}</Typography>}
  </Style>
);

const height = (theme: DefaultTheme) => math(`${theme.unit} * 82`);
const Style = styled.div<{ isActive: boolean }>(
  activationTransition('margin-top', 'opacity'),
  ({ isActive, theme }) => css`
    margin-top: ${!isActive ? math(`-${height(theme)}`) : 0};
    opacity: ${isActive ? 1 : 0};
    height: ${height(theme)};
    padding: ${math(`${theme.unit} * 4`)} ${math(`${theme.unit} * 12`)};
  `
);
