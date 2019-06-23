import * as React from 'react';
import { Row } from '../Row';
import { createTransformer } from './createTransformer';
import { useRefNormalizer } from '../../hooks/useRefNormalizer';
import { AppMenuItem, itemGutter, itemHeight, itemWidth } from './AppMenuItem';
import { App } from '../../state/App';
import styled, { DefaultTheme, ThemeContext } from 'styled-components';
import { activationTransition } from '../../css/transitions';
import { math } from 'polished';
import { useSpatialIndex } from '../../lib/spatial/useSpatialIndex';
import { getOffsetForActiveItem } from './getOffsetForActiveItem';
import { AppName } from './AppName';

export type AppMenuProps = React.HTMLAttributes<HTMLDivElement> & {
  items?: App[];
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
          {items.map((app, index) => (
            <AppMenuItem key={index} app={app} />
          ))}
        </Slider>
        <PositionedAppName>{activeItem && activeItem.name}</PositionedAppName>
      </Container>
    );
  }
);

const leftMargin = ({ theme }: { theme: DefaultTheme }) =>
  math(`${itemWidth(theme)} * 1`);

const nameOffsetX = ({ theme }: { theme: DefaultTheme }) =>
  math(`${itemWidth(theme, true)} + ${itemGutter(theme, true)}`);

const Container = styled.div`
  margin-left: ${leftMargin};
  height: ${props => itemHeight(props.theme, true)};
`;

const Slider = styled(createTransformer(Row))`
  ${activationTransition('transform')};
  height: ${props => itemHeight(props.theme)};
`;

const PositionedAppName = styled(AppName)`
  position: absolute;
  bottom: 0;
  left: ${nameOffsetX};
`;
