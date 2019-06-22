import * as React from 'react';
import { Row } from '../Row';
import { createTransformer } from './createTransformer';
import { useRefNormalizer } from '../../hooks/useRefNormalizer';
import { AppMenuItem, itemHeight, itemWidth } from './AppMenuItem';
import { Content } from '../../state/Content';
import styled, { ThemeContext } from 'styled-components';
import { activationTransition } from '../../css/transitions';
import { math } from 'polished';
import { useSpatialIndex } from '../../lib/spatial/useSpatialIndex';
import { getOffsetForActiveItem } from './getOffsetForActiveItem';

export type AppMenuProps = React.HTMLAttributes<HTMLDivElement> & {
  items?: Content[];
};

export const AppMenu = React.forwardRef<HTMLDivElement, AppMenuProps>(
  ({ items = [], ...props }, ref) => {
    const index = useSpatialIndex(useRefNormalizer(ref));
    const theme = React.useContext(ThemeContext);
    const offset = getOffsetForActiveItem(theme, index);
    return (
      <SlidingRow ref={ref} transform={`translate(${offset})`} {...props}>
        {items.map((itemProps, index) => (
          <AppMenuItem key={index} activate={index === 0} {...itemProps} />
        ))}
      </SlidingRow>
    );
  }
);

const SlidingRow = styled(createTransformer(Row))`
  ${activationTransition('transform')};
  margin-left: ${props => math(`${itemWidth(props.theme)} * 1`)};
  height: ${props => itemHeight(props.theme, false)};
`;
