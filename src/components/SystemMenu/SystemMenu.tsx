import * as React from 'react';
import { SystemMenuItem, SystemMenuItemProps } from './SystemMenuItem';
import { Row } from '../Row';
import styled from 'styled-components/macro';

export type SystemMenuProps = React.HTMLAttributes<HTMLDivElement> & {
  items?: SystemMenuItemProps[];
};

export const SystemMenu = React.forwardRef<HTMLDivElement, SystemMenuProps>(
  ({ items = [], ...props }, ref) => (
    <SystemMenuRow ref={ref} {...props}>
      {items.map((itemProps, index) => (
        <SystemMenuItem key={index} {...itemProps} />
      ))}
    </SystemMenuRow>
  )
);

const SystemMenuRow = styled(Row)`
  margin-bottom: ${props => props.theme.unit};
  & > * {
    flex: 1;
    &:not(:last-child) {
      margin-right: ${props => props.theme.unit};
    }
  }
`;
