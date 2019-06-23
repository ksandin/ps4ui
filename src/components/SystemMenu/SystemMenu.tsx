import * as React from 'react';
import {
  itemScale,
  itemSize,
  SystemMenuItem,
  SystemMenuItemProps
} from './SystemMenuItem';
import { Row, RowProps } from '../Row';
import styled, { css, DefaultTheme } from 'styled-components/macro';
import { math } from 'polished';
import { useSpatialIndex } from '../../lib/spatial/useSpatialIndex';
import { useRefNormalizer } from '../../hooks/useRefNormalizer';
import { activationTransition } from '../../css/transitions';

export type SystemMenuProps = RowProps & {
  items?: SystemMenuItemProps[];
};

export const SystemMenu = React.forwardRef<HTMLDivElement, SystemMenuProps>(
  ({ items = [], ...props }, legacyRef) => {
    const ref = useRefNormalizer(legacyRef);
    const isActive = useSpatialIndex(ref) !== -1;
    return (
      <Container ref={ref} isActive={isActive} {...props}>
        {items.map((itemProps, index) => (
          <SystemMenuItem key={index} {...itemProps} />
        ))}
      </Container>
    );
  }
);

const rowHeight = (theme: DefaultTheme) =>
  math(`${itemSize(theme)} * ${itemScale(false)}`);

const Container = styled(Row)<{ isActive: boolean }>(
  activationTransition('padding-right'),
  ({ isActive, theme }) => css`
    height: ${rowHeight(theme)};
    margin-bottom: ${math(`${theme.unit} * 12`)};
    justify-content: space-between;
    align-items: center;
    margin-left: ${math(`${theme.unit} * ${isActive ? 9 : 0}`)};
    margin-right: ${math(`${theme.unit} * ${isActive ? 9 : 21}`)};
  `
);
