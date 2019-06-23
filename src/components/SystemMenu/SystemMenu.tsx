import * as React from 'react';
import { itemScale, itemSize, SystemMenuItem } from './SystemMenuItem';
import { Row, RowProps } from '../Row';
import styled, { css, DefaultTheme } from 'styled-components/macro';
import { math } from 'polished';
import { useSpatialIndex } from '../../lib/spatial/useSpatialIndex';
import { useRefNormalizer } from '../../hooks/useRefNormalizer';
import { activationTransition } from '../../css/transitions';
import { System } from '../../state/System';

export type SystemMenuProps = RowProps & {
  items?: System[];
};

export const SystemMenu = React.forwardRef<HTMLDivElement, SystemMenuProps>(
  ({ items = [], ...props }, legacyRef) => {
    const ref = useRefNormalizer(legacyRef);
    const isActive = useSpatialIndex(ref) !== -1;
    return (
      <Container ref={ref} isActive={isActive} {...props}>
        {items.map((system, index) => (
          <SystemMenuItem key={index} isCollapsed={isActive} system={system} />
        ))}
      </Container>
    );
  }
);

const rowHeight = (theme: DefaultTheme) =>
  math(`${itemSize(theme)} * ${itemScale(false)}`);

const Container = styled(Row)<{ isActive: boolean }>(
  activationTransition('margin-right', 'margin-left'),
  ({ isActive, theme }) => css`
    height: ${rowHeight(theme)};
    margin-bottom: ${math(`${theme.unit} * 12`)};
    justify-content: space-between;
    align-items: center;
    margin-top: ${props =>
      math(`-${props.theme.unit}`)}; // HACK should be applied by Home.tsx
    margin-left: ${math(`${theme.unit} * ${isActive ? 9 : 0}`)};
    margin-right: ${math(`${theme.unit} * ${isActive ? 9 : 21}`)};
  `
);
