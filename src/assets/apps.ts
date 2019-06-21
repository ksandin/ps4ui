import styled from 'styled-components';

let counter = 0;
const bust = () => `${new Date().getTime()}_${(counter += 1)}`;
const image = () =>
  styled.img.attrs({ src: `https://picsum.photos/300/300?_=${bust()}` })``;

export const apps = [
  { icon: image(), name: 'BowlingBall', action: 'Bowl' },
  { icon: image(), name: 'BreadSlice', action: 'Yum' },
  { icon: image(), name: 'Broom', action: 'Clean' },
  { icon: image(), name: 'CandyCane', action: 'Tasty' },
  { icon: image(), name: 'Cat', action: 'Meow' },
  { icon: image(), name: 'CheckCircle', action: 'Spin' },
  { icon: image(), name: 'Cloud', action: 'Floof' },
  { icon: image(), name: 'Coins', action: 'Cashing' },
  { icon: image(), name: 'Comments', action: 'Talk' },
  { icon: image(), name: 'CompactDisc', action: 'Spin' },
  { icon: image(), name: 'Settings', action: 'Open' }
];
