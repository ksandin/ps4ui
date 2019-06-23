import * as React from 'react';
import styled from 'styled-components';
import { useCachedImage } from '../lib/imageCache/useCachedImage';
import { activationTransition } from '../css/transitions';

export type SmartImageProps = React.HTMLAttributes<HTMLDivElement> & {
  src: string;
};

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  children,
  style,
  ...props
}) => {
  const image = useCachedImage(src);
  const isLoaded = !!image.src && image.complete;
  const backgroundImage = isLoaded ? `url(${image.src})` : undefined;

  return (
    <StyledImage
      isVisible={isLoaded}
      style={{ backgroundImage, ...style }}
      {...props}
    >
      {isLoaded ? children : 'Loading!'}
    </StyledImage>
  );
};

const StyledImage = styled.div<{ isVisible: boolean }>`
  ${activationTransition('opacity')};
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  opacity: ${props => (props.isVisible ? 1 : 0)};
`;
