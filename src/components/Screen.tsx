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
  const { item: opacity, cycle: cycleOpacity } = useArrayCycle(opacities);
  return (
    <Padding {...props}>
      <Background index={backgroundIndex} />
      <Dock variant="fill" style={{ opacity }}>
        {children}
      </Dock>
      <Dock variant="bottomRight">
        <Typography variant="h1" onClick={cycleBackground}>
          Cycle background
        </Typography>
        <Typography variant="h1" onClick={cycleOpacity}>
          Cycle opacity
        </Typography>
      </Dock>
    </Padding>
  );
};

const opacities = [0.25, 0.5, 1, 0];

const Padding = styled(Dock)`
  padding: 4.2% 5%;
`;
