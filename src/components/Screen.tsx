import * as React from 'react';
import { Dock, DockProps } from './Dock';
import styled from 'styled-components/macro';
import { background } from '../assets/background.glsl';
const Shader = require('shadertoy-react').default;

export type ScreenProps = DockProps;

export const Screen: React.FC<ScreenProps> = ({ children, ...props }) => {
  return (
    <Padding {...props}>
      <Dock>
        <Shader fs={background} />
      </Dock>
      <Dock variant="fill">{children}</Dock>
    </Padding>
  );
};

const Padding = styled(Dock)`
  padding: 4.2% 5%;
`;
