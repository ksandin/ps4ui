import * as React from 'react';
import styled from 'styled-components';
import { activationTransition } from '../css/transitions';
import useComponentSize, { ComponentSize } from '@rehooks/component-size';

export type CollapseProps = React.HTMLAttributes<HTMLDivElement> & Axes;

export const Collapse: React.FC<CollapseProps> = ({
  children,
  x,
  y,
  ...props
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const size = useComponentSize(ref);
  return (
    <Clipper size={size} axes={{ x, y }} {...props}>
      <Space>
        <Content ref={ref}>{children}</Content>
      </Space>
    </Clipper>
  );
};

type Axes = {
  x?: boolean;
  y?: boolean;
};

type ClipperProps = {
  axes: Axes;
  size: ComponentSize;
};

const Clipper = styled.div<ClipperProps>`
  ${activationTransition('width', 'height')};
  overflow: hidden;
  width: ${({ size, axes }) => (axes.x ? 0 : size.width)}px;
  height: ${({ size, axes }) => (axes.y ? 0 : size.height)}px;
`;

const Space = styled.div`
  position: absolute;
  width: 9999px;
  height: 9999px;
`;

const Content = styled.div`
  position: absolute;
`;
