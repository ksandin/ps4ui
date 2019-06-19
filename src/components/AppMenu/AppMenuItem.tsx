import * as React from 'react';
import { Square, SquareContent, SquareProps } from '../Square';
import styled from 'styled-components/macro';
import { StyledIconProps } from 'styled-icons/types';
import { useSpatial } from '../../lib/spatial/useSpatial';

export type AppMenuItemProps = SquareProps & {
  icon: React.ComponentType<StyledIconProps>;
  name: string;
};

export const AppMenuItem: React.FC<AppMenuItemProps> = ({
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
