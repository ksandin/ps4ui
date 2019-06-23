import * as React from 'react';
import styled from 'styled-components';
import { Typography } from '../components/Typography';
import {
  ImageSide,
  RowWithStuffAndImage
} from '../components/RowWithStuffAndImage';

let counter = 0;

const nextCounter = () => (counter += 1).toString();

const imageUrl = (width = 300, height = 300, bust = nextCounter()) =>
  `https://picsum.photos/${width}/${height}?_=${bust}`;

const imageComponent = (width?: number, height?: number, bust?: string) =>
  styled.img.attrs({ src: imageUrl(width, height, bust) })``;

const dummyComponent = (title: string, imageSide?: ImageSide) => {
  const url = imageUrl(800, 300, title);
  return () => (
    <RowWithStuffAndImage imageUrl={url} imageSide={imageSide}>
      <Typography variant="h1">{title}</Typography>
      <Typography variant="h3">Lorem ipsum dolor sit amet.</Typography>
    </RowWithStuffAndImage>
  );
};

export const apps = [
  {
    icon: imageComponent(),
    name: 'BowlingBall',
    action: 'Bowl',
    component: dummyComponent('BowlingBall', 'left')
  },
  {
    icon: imageComponent(),
    name: 'BreadSlice',
    action: 'Yum',
    component: dummyComponent('BreadSlice', 'right')
  },
  {
    icon: imageComponent(),
    name: 'Broom',
    action: 'Clean',
    component: dummyComponent('Broom', 'left')
  },
  {
    icon: imageComponent(),
    name: 'CandyCane',
    action: 'Tasty',
    component: dummyComponent('CandyCane', 'right')
  },
  {
    icon: imageComponent(),
    name: 'Cat',
    action: 'Meow',
    component: dummyComponent('Cat', 'left')
  },
  {
    icon: imageComponent(),
    name: 'CheckCircle',
    action: 'Spin',
    component: dummyComponent('CheckCircle', 'right')
  },
  {
    icon: imageComponent(),
    name: 'Cloud',
    action: 'Floof',
    component: dummyComponent('Cloud', 'left')
  },
  {
    icon: imageComponent(),
    name: 'Coins',
    action: 'Cashing',
    component: dummyComponent('Coins', 'right')
  },
  {
    icon: imageComponent(),
    name: 'Comments',
    action: 'Talk',
    component: dummyComponent('Comments', 'left')
  },
  {
    icon: imageComponent(),
    name: 'CompactDisc',
    action: 'Spin',
    component: dummyComponent('CompactDisc', 'right')
  },
  {
    icon: imageComponent(),
    name: 'Settings',
    action: 'Open',
    component: dummyComponent('Settings', 'left')
  }
];
