import * as React from 'react';
import styled from 'styled-components';
import { activationTransition } from '../css/transitions';
import useComponentSize, { ComponentSize } from '@rehooks/component-size';

export type CollapseProps = React.HTMLAttributes<HTMLDivElement> &
  Axes & {
    showOverflow?: boolean;
    contentComponent?: React.ComponentType;
    contentProps?: React.HTMLAttributes<HTMLDivElement>;
  };

export const Collapse = React.forwardRef<HTMLDivElement, CollapseProps>(
  (
    { children, x, y, contentComponent, contentProps, ...props },
    forwardedRef
  ) => {
    const contentRef = React.useRef<HTMLDivElement>(null);
    const size = useComponentSize(contentRef);
    return (
      <Clipper ref={forwardedRef} size={size} axes={{ x, y }} {...props}>
        <Space>
          <Content as={contentComponent} ref={contentRef} {...contentProps}>
            {children}
          </Content>
        </Space>
      </Clipper>
    );
  }
);

type Axes = {
  x?: boolean;
  y?: boolean;
};

type ClipperProps = {
  axes: Axes;
  size: ComponentSize;
  showOverflow?: boolean;
};

const Clipper = styled.div<ClipperProps>`
  ${activationTransition('width', 'height')};
  overflow: ${props => (props.showOverflow ? 'visible' : 'hidden')};
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
