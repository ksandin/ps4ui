import * as React from 'react';
import { Row } from '../Row';
import { createTransformer } from './createTransformer';
import { useRefNormalizer } from '../../hooks/useRefNormalizer';
import { AppMenuItem, itemHeight, itemWidth } from './AppMenuItem';
import { Content } from '../../state/Content';
import styled, { DefaultTheme, ThemeContext } from 'styled-components';
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
      <Container {...props} ref={ref} transform={`translate(${offset})`}>
        {items.map((itemProps, index) => (
          <AppMenuItem key={index} activate={index === 0} {...itemProps} />
        ))}
      </Container>
    );
  }
);

export const leftMargin = ({ theme }: { theme: DefaultTheme }) =>
  math(`${itemWidth(theme)} * 1`);

export const rowHeight = ({ theme }: { theme: DefaultTheme }) =>
  itemHeight(theme, false);

const Container = styled(createTransformer(Row))`
  ${activationTransition('transform')};
  margin-left: ${leftMargin};
  height: ${rowHeight};
`;
