import * as React from 'react';
import { Row } from '../Row';
import { createTransformer } from './createTransformer';
import { useRefNormalizer } from '../../hooks/useRefNormalizer';
import { AppMenuItem, itemGutter, itemWidth } from './AppMenuItem';
import { Content } from '../../state/Content';
import styled, { DefaultTheme, ThemeContext } from 'styled-components';
import { activationTransition } from '../../css/transitions';
import { math } from 'polished';
import { useSpatialIndex } from '../../lib/spatial/useSpatialIndex';

export type AppMenuProps = React.HTMLAttributes<HTMLDivElement> & {
  items?: Content[];
};

export const AppMenu = React.forwardRef<HTMLDivElement, AppMenuProps>(
  ({ items = [], ...props }, ref) => {
    const index = useSpatialIndex(useRefNormalizer(ref));
    const theme = React.useContext(ThemeContext);
    return (
      <SlidingRow
        ref={ref}
        transform={`translate(${getDistanceToActiveItem(theme, index)})`}
        {...props}
      >
        {items.map((itemProps, index) => (
          <AppMenuItem key={index} activate={index === 0} {...itemProps} />
        ))}
      </SlidingRow>
    );
  }
);

const getDistanceToActiveItem = (theme: DefaultTheme, index: number) => {
  if (index === -1) {
    return 0;
  }
  const normalGutters = math(
    `max(0, ${index - 1}) * ${itemGutter(theme, false)}`
  );
  const largeGutter = index > 0 ? itemGutter(theme, true) : 0;
  return math(
    `-(${index} * ${itemWidth(theme)} + ${normalGutters} + ${largeGutter})`
  );
};

const SlidingRow = styled(createTransformer(Row))`
  ${activationTransition('transform')};
  margin-left: ${props => math(`${itemWidth(props.theme)} * 1`)};
`;
