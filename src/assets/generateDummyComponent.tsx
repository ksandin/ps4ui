import {
  ImageSide,
  RowWithStuffAndImage
} from '../components/RowWithStuffAndImage';
import { generateImageUrl } from './generateImageUrl';
import { Typography } from '../components/Typography';
import * as React from 'react';
import { RowsWithStuffAndImages } from '../components/RowsWithStuffAndImages';

export const generateDummyComponent = (
  title: string,
  imageSide?: ImageSide
) => {
  const url = generateImageUrl(800, 300, title);
  return () => (
    <RowWithStuffAndImage imageUrl={url} imageSide={imageSide}>
      <Typography variant="h1">{title}</Typography>
      <Typography variant="h3">Lorem ipsum dolor sit amet.</Typography>
    </RowWithStuffAndImage>
  );
};

export const generateDummyComponent2 = (
  title: string,
  imageSide?: ImageSide
) => {
  const urls = [1, 2, 3].map(count =>
    generateImageUrl(800, 300, title + count)
  );
  return () => <RowsWithStuffAndImages urls={urls} imageSide={imageSide} />;
};

export const generateInfoComponent = () => () => (
  <Typography variant="h4">Lorem ipsum dolor sit amet.</Typography>
);
