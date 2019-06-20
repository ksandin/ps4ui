import * as React from 'react';
import { math } from 'polished';
import { Row } from '../Row';
import styled from 'styled-components/macro';
import { createTransformer } from './createTransformer';
import { useRowOffset } from './useRowOffset';
import { useRefNormalizer } from '../../hooks/useRefNormalizer';
import { AppMenuItem } from './AppMenuItem';
import { Content } from '../../state/Content';

export type AppMenuProps = React.HTMLAttributes<HTMLDivElement> & {
  items?: Content[];
};

export const AppMenu = React.forwardRef<HTMLDivElement, AppMenuProps>(
  ({ items = [], ...props }, ref) =>
    useRowOffset(useRefNormalizer(ref), offset => (
      <SlidingAppMenuRow
        ref={ref}
        transform={`translate(${offset}px)`}
        {...props}
      >
        {items.map((itemProps, index) => (
          <AppMenuItem key={index} {...itemProps} />
        ))}
      </SlidingAppMenuRow>
    ))
);

const AppMenuRow = styled(Row)`
  & > * {
    width: ${props => math(`${props.theme.unit} * 50`)};
    &:not(:last-child) {
      margin-right: ${props => props.theme.unit};
    }
  }
`;

const SlidingAppMenuRow = createTransformer(AppMenuRow);
