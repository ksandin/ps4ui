import * as React from 'react';
import { Dock, DockProps } from './Dock';
import styled from 'styled-components/macro';
import { Background, backgrounds } from './Background';
import { useIndexRotator } from '../hooks/useIndexRotator';

export type ScreenProps = DockProps;

export const Screen: React.FC<ScreenProps> = ({ children, ...props }) => {
  const index = useIndexRotator(() => backgrounds.length);
  return (
    <Padding {...props}>
      <Background index={index} />
      <Dock variant="fill">{children}</Dock>
    </Padding>
  );
};

const Padding = styled(Dock)`
  padding: 3% 5%;
`;
