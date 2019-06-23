import { generateImageUrl } from './generateImageUrl';
import { generateDummyComponent } from './generateDummyComponent';

export const apps = [
  {
    imageUrl: generateImageUrl(),
    name: 'BowlingBall',
    action: 'Bowl',
    component: generateDummyComponent('BowlingBall', 'left')
  },
  {
    imageUrl: generateImageUrl(),
    name: 'BreadSlice',
    action: 'Yum',
    component: generateDummyComponent('BreadSlice', 'right')
  },
  {
    imageUrl: generateImageUrl(),
    name: 'Broom',
    action: 'Clean',
    component: generateDummyComponent('Broom', 'left')
  },
  {
    imageUrl: generateImageUrl(),
    name: 'CandyCane',
    action: 'Tasty',
    component: generateDummyComponent('CandyCane', 'right')
  },
  {
    imageUrl: generateImageUrl(),
    name: 'Cat',
    action: 'Meow',
    component: generateDummyComponent('Cat', 'left')
  },
  {
    imageUrl: generateImageUrl(),
    name: 'CheckCircle',
    action: 'Spin',
    component: generateDummyComponent('CheckCircle', 'right')
  },
  {
    imageUrl: generateImageUrl(),
    name: 'Cloud',
    action: 'Floof',
    component: generateDummyComponent('Cloud', 'left')
  },
  {
    imageUrl: generateImageUrl(),
    name: 'Coins',
    action: 'Cashing',
    component: generateDummyComponent('Coins', 'right')
  },
  {
    imageUrl: generateImageUrl(),
    name: 'Comments',
    action: 'Talk',
    component: generateDummyComponent('Comments', 'left')
  },
  {
    imageUrl: generateImageUrl(),
    name: 'CompactDisc',
    action: 'Spin',
    component: generateDummyComponent('CompactDisc', 'right')
  },
  {
    imageUrl: generateImageUrl(),
    name: 'Settings',
    action: 'Open',
    component: generateDummyComponent('Settings', 'left')
  }
];
