import * as React from 'react';
import { Square, SquareContent, SquareProps } from '../Square';
import styled from 'styled-components';
import { StyledIconProps } from 'styled-icons/types';

export type SystemMenuItemProps = SquareProps & {
  icon: React.ComponentType<StyledIconProps>;
  name: string;
};

export const SystemMenuItem: React.FC<SystemMenuItemProps> = ({
  icon: Icon,
  ...props
}) => (
  <Bounds {...props}>
    <Icon />
  </Bounds>
);

const Bounds = styled(Square)`
  & ${SquareContent} > svg {
    display: flex;
    flex: 1;
  }
`;
