import * as React from 'react';
import { Row } from '../Row';
import { createTransformer } from './createTransformer';
import { useRefNormalizer } from '../../hooks/useRefNormalizer';
import { AppMenuItem, itemGutter, itemHeight, itemWidth } from './AppMenuItem';
import { Content } from '../../state/Content';
import styled, { DefaultTheme, ThemeContext } from 'styled-components';
import { activationTransition } from '../../css/transitions';
import { math } from 'polished';
import { useSpatialIndex } from '../../lib/spatial/useSpatialIndex';
import { getOffsetForActiveItem } from './getOffsetForActiveItem';
import { AppName } from './AppName';

export type AppMenuProps = React.HTMLAttributes<HTMLDivElement> & {
  items?: Content[];
};

export const AppMenu = React.forwardRef<HTMLDivElement, AppMenuProps>(
  ({ items = [], ...props }, ref) => {
    const index = useSpatialIndex(useRefNormalizer(ref));
    const theme = React.useContext(ThemeContext);
    const offset = getOffsetForActiveItem(theme, index);
    const activeItem = items[index];
    return (
      <Container {...props}>
        <Slider ref={ref} transform={`translate(${offset})`}>
          {items.map((itemProps, index) => (
            <AppMenuItem key={index} activate={index === 0} {...itemProps} />
          ))}
        </Slider>
        <PositionedAppName>{activeItem && activeItem.name}</PositionedAppName>
      </Container>
    );
  }
);

const leftMargin = ({ theme }: { theme: DefaultTheme }) =>
  math(`${itemWidth(theme)} * 1`);

const rowHeight = ({ theme }: { theme: DefaultTheme }) =>
  itemHeight(theme, false);

const footerOffsetY = ({ theme }: { theme: DefaultTheme }) =>
  math(`-(${itemHeight(theme, true)} - ${rowHeight({ theme })})`);

const footerOffsetX = ({ theme }: { theme: DefaultTheme }) =>
  math(`${itemWidth(theme, true)} + ${itemGutter(theme, true)}`);

const Container = styled.div`
  margin-left: ${leftMargin};
  height: ${rowHeight};
`;

const Slider = styled(createTransformer(Row))(
  activationTransition('transform')
);

const PositionedAppName = styled(AppName)`
  position: absolute;
  bottom: ${footerOffsetY};
  left: ${footerOffsetX};
`;
