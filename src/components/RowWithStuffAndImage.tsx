import * as React from 'react';
import styled from 'styled-components';
import { Row, RowProps } from './Row';
import { math } from 'polished';

export type ImageSide = 'right' | 'left';

export type RowWithStuffAndImageProps = RowProps & {
  imageUrl: string;
  imageSide?: ImageSide;
};

export const RowWithStuffAndImage: React.FC<RowWithStuffAndImageProps> = ({
  children,
  imageUrl,
  imageSide = 'right',
  ...props
}) => {
  const content = <Content>{children}</Content>;
  const image = <Image style={{ backgroundImage: `url(${imageUrl})` }} />;
  if (imageSide === 'left') {
    return (
      <Container {...props}>
        {image} {content}
      </Container>
    );
  }
  return (
    <Container {...props}>
      {content} {image}
    </Container>
  );
};

const Container = styled(Row)`
  width: 100%;
  background: ${props => props.theme.colors.bright};
  height: ${props => math(`${props.theme.unit} * 33`)};
`;

const Content = styled.div`
  flex: 1;
  padding: ${props => math(`${props.theme.unit} * 5`)};
`;

const Image = styled.div`
  width: 60%;
  background-size: cover;
  background-position: 50% 50%;
`;
