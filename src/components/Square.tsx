import * as React from 'react';
import styled from 'styled-components';
import { Dock } from './Dock';

export type SquareProps = React.HTMLAttributes<HTMLDivElement>;

export const Square = React.forwardRef<HTMLDivElement, SquareProps>(
  ({ children, ...props }, ref) => (
    <SquareBounds ref={ref} {...props}>
      <SquareContent>{children}</SquareContent>
    </SquareBounds>
  )
);

export const SquareBounds = styled.div`
  &:after {
    padding-top: 100%;
    content: '';
    display: block;
  }
`;

export const SquareContent = styled(Dock)``;
