import * as React from 'react';
import { Square, SquareContent, SquareProps } from '../Square';
import styled from 'styled-components/macro';
import { useSpatial } from '../../lib/spatial/useSpatial';
import { Content } from '../../state/Content';

export type SystemMenuItemProps = SquareProps & Content;

export const SystemMenuItem: React.FC<SystemMenuItemProps> = ({
  icon: Icon,
  ...props
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isActive = useSpatial(ref);
  return (
    <Bounds
      ref={ref}
      {...props}
      style={{ background: isActive ? 'green' : 'red' }}
    >
      <Icon />
    </Bounds>
  );
};

const Bounds = styled(Square)`
  & ${SquareContent} > svg {
    display: flex;
    flex: 1;
  }
`;
