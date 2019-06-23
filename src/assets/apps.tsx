import * as React from 'react';
import { Typography } from '../components/Typography';
import {
  ImageSide,
  RowWithStuffAndImage
} from '../components/RowWithStuffAndImage';
import { generateImageUrl } from './generateImageUrl';

const dummyComponent = (title: string, imageSide?: ImageSide) => {
  const url = generateImageUrl(800, 300, title);
  return () => (
    <RowWithStuffAndImage imageUrl={url} imageSide={imageSide}>
      <Typography variant="h1">{title}</Typography>
      <Typography variant="h3">Lorem ipsum dolor sit amet.</Typography>
    </RowWithStuffAndImage>
  );
};

export const apps = [
  {
    imageUrl: generateImageUrl(),
    name: 'BowlingBall',
    action: 'Bowl',
    component: dummyComponent('BowlingBall', 'left')
  },
  {
    imageUrl: generateImageUrl(),
    name: 'BreadSlice',
    action: 'Yum',
    component: dummyComponent('BreadSlice', 'right')
  },
  {
    imageUrl: generateImageUrl(),
    name: 'Broom',
    action: 'Clean',
    component: dummyComponent('Broom', 'left')
  },
  {
    imageUrl: generateImageUrl(),
    name: 'CandyCane',
    action: 'Tasty',
    component: dummyComponent('CandyCane', 'right')
  },
  {
    imageUrl: generateImageUrl(),
    name: 'Cat',
    action: 'Meow',
    component: dummyComponent('Cat', 'left')
  },
  {
    imageUrl: generateImageUrl(),
    name: 'CheckCircle',
    action: 'Spin',
    component: dummyComponent('CheckCircle', 'right')
  },
  {
    imageUrl: generateImageUrl(),
    name: 'Cloud',
    action: 'Floof',
    component: dummyComponent('Cloud', 'left')
  },
  {
    imageUrl: generateImageUrl(),
    name: 'Coins',
    action: 'Cashing',
    component: dummyComponent('Coins', 'right')
  },
  {
    imageUrl: generateImageUrl(),
    name: 'Comments',
    action: 'Talk',
    component: dummyComponent('Comments', 'left')
  },
  {
    imageUrl: generateImageUrl(),
    name: 'CompactDisc',
    action: 'Spin',
    component: dummyComponent('CompactDisc', 'right')
  },
  {
    imageUrl: generateImageUrl(),
    name: 'Settings',
    action: 'Open',
    component: dummyComponent('Settings', 'left')
  }
];
