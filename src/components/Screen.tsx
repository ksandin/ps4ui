import * as React from 'react';
import { Dock, DockProps } from './Dock';
import styled from 'styled-components';

const StyledScreen = styled(Dock)`
  padding: 3% 5%;
  background: skyblue;
`;

export type ScreenProps = DockProps;

export const Screen: React.FC<ScreenProps> = ({ children, ...props }) => (
  <StyledScreen {...props}>
    <Dock variant="fill">{children}</Dock>
  </StyledScreen>
);
