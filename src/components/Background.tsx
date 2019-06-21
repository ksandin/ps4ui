import * as React from 'react';
import { Dock } from './Dock';
import { background } from '../assets/background.glsl';
const Shader = require('shadertoy-react').default;

export type BackgroundsProps = { index?: number };

const imageStyle = (url: string) => ({
  backgroundImage: `url(${url})`,
  backgroundSize: 'cover',
  backgroundColor: 'pink'
});

export const backgrounds = [
  <Dock>
    <Shader fs={background} />
  </Dock>,
  <Dock style={imageStyle(require('../assets/background-apps.png'))} />,
  <Dock style={imageStyle(require('../assets/background-systems.jpg'))} />
];

export const Background: React.FC<BackgroundsProps> = ({ index = 0 }) =>
  backgrounds[index];
