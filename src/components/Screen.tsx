import * as React from 'react';
import { Dock, DockProps } from './Dock';
import styled from 'styled-components/macro';
import { Background, backgrounds } from './Background';
import { useIndexCycle } from '../hooks/useIndexCycle';
import { Typography } from './Typography';
import { useArrayCycle } from '../hooks/useArrayCycle';

export type ScreenProps = DockProps;

export const Screen: React.FC<ScreenProps> = ({ children, ...props }) => {
  const { index: backgroundIndex, cycle: cycleBackground } = useIndexCycle(
    backgrounds.length
  );
  const { item: opacity, cycle: cycleOpacity } = useArrayCycle([
    1,
    0.5,
    0.25,
    0
  ]);
  return (
    <Padding {...props}>
      <Background index={backgroundIndex} />
      <Dock variant="fill" style={{ opacity }}>
        {children}
      </Dock>
      <Dock variant="bottomRight">
        <button onClick={cycleBackground}>
          <Typography variant="h1">Cycle background</Typography>
        </button>
        <button onClick={cycleOpacity}>
          <Typography variant="h1">Cycle opacity</Typography>
        </button>
      </Dock>
    </Padding>
  );
};

const Padding = styled(Dock)`
  padding: 3% 5%;
`;
