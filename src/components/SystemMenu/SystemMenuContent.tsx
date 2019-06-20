import * as React from 'react';
import { Content } from '../../state/Content';
import styled from 'styled-components';
import { math } from 'polished';
import { Typography } from '../Typography';

export type SystemMenuContentProps = {
  system?: Content;
};

export const SystemMenuContent: React.FC<SystemMenuContentProps> = ({
  system
}) => (
  <Bounds>
    {system && <Typography variant="h3">{system.name}</Typography>}
  </Bounds>
);

const Bounds = styled.div`
  height: ${props => math(`${props.theme.unit} * 77`)};
  padding: ${props => math(`${props.theme.unit} * 4`)}
    ${props => math(`${props.theme.unit} * 12`)};
`;
