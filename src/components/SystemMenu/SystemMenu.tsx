import * as React from 'react';
import { SystemMenuItem, SystemMenuItemProps } from './SystemMenuItem';
import { Row } from '../Row';
import styled, { css } from 'styled-components/macro';
import { math } from 'polished';
import { useSpatialIndex } from '../../lib/spatial/useSpatialIndex';
import { useRefNormalizer } from '../../hooks/useRefNormalizer';
import { activationTransition } from '../../css/transitions';

export type SystemMenuProps = React.HTMLAttributes<HTMLDivElement> & {
  items?: SystemMenuItemProps[];
};

export const SystemMenu = React.forwardRef<HTMLDivElement, SystemMenuProps>(
  ({ items = [], ...props }, ref) => {
    const isActive = useSpatialIndex(useRefNormalizer(ref)) !== -1;
    return (
      <SystemMenuRow ref={ref} isActive={isActive} {...props}>
        {items.map((itemProps, index) => (
          <SystemMenuItem key={index} {...itemProps} />
        ))}
      </SystemMenuRow>
    );
  }
);

const SystemMenuRow = styled(Row)<{ isActive: boolean }>(
  activationTransition('padding-right'),
  ({ isActive, theme }) => css`
    justify-content: space-between;
    margin-bottom: ${theme.unit};
    padding-left: ${math(`${theme.unit} * ${isActive ? 9 : 0}`)};
    padding-right: ${math(`${theme.unit} * ${isActive ? 9 : 21}`)};
    & > * {
      width: ${math(`${theme.unit} * 8`)};
    }
  `
);
