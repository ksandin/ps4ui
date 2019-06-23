import { ImageSide, RowWithStuffAndImage } from './RowWithStuffAndImage';
import { Typography } from './Typography';
import * as React from 'react';

export type RowsWithStuffAndImagesProps = {
  urls: string[];
  imageSide?: ImageSide;
};

export const RowsWithStuffAndImages: React.FC<RowsWithStuffAndImagesProps> = ({
  urls,
  imageSide
}) => (
  <div style={{ flex: 1, justifyContent: 'space-between', marginBottom: 80 }}>
    {urls.map(url => (
      <RowWithStuffAndImage
        key={url}
        imageUrl={url}
        imageSide={imageSide}
        imageWidth="10%"
        style={{ flex: 1, marginBottom: 8 }}
      >
        <Typography variant="h3">Lorem ipsum dolor sit amet.</Typography>
      </RowWithStuffAndImage>
    ))}
  </div>
);
