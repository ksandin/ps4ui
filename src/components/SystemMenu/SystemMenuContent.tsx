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
    {system && <Typography variant="h1">{system.name}</Typography>}
  </Bounds>
);

const Bounds = styled.div`
  height: ${props => math(`${props.theme.unit} * 77`)};
`;
