import styled from 'styled-components';

let counter = 0;
const bust = () => `${new Date().getTime()}_${(counter += 1)}`;
const image = () =>
  styled.img.attrs({ src: `https://picsum.photos/300/300?_=${bust()}` })``;

export const apps = [
  { icon: image(), name: 'BowlingBall' },
  { icon: image(), name: 'BreadSlice' },
  { icon: image(), name: 'Broom' },
  { icon: image(), name: 'CandyCane' },
  { icon: image(), name: 'Cat' },
  { icon: image(), name: 'CheckCircle' },
  { icon: image(), name: 'Cloud' },
  { icon: image(), name: 'Coins' },
  { icon: image(), name: 'Comments' },
  { icon: image(), name: 'CompactDisc' },
  { icon: image(), name: 'Settings' }
];
