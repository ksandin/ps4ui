import * as React from 'react';
import { Square, SquareProps } from '../Square';
import styled, { css, DefaultTheme } from 'styled-components/macro';
import { useSpatial } from '../../lib/spatial/useSpatial';
import { Content } from '../../state/Content';
import { math } from 'polished';
import { activationTransition } from '../../css/transitions';
import { Border } from '../Border';
import { Dock } from '../Dock';
import { Typography } from '../Typography';

export type AppMenuItemProps = SquareProps & Content & { activate?: boolean };

const activeClass = 'active';

export const AppMenuItem: React.FC<AppMenuItemProps> = ({
  icon: Icon,
  name,
  action,
  activate,
  ...props
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isActive = useSpatial(ref);
  return (
    <Container
      ref={ref}
      className={isActive ? activeClass : undefined}
      {...props}
    >
      <Body isActive={isActive}>
        <Crop>
          <Image as={Icon} />
          <Bottom>
            <Typography variant="h2">{action}</Typography>
          </Bottom>
        </Crop>
      </Body>
    </Container>
  );
};

const defaultSize = 28;
const activeSize = 45;
const bottomHeight = 9;

export const itemWidth = (theme: DefaultTheme, isActive?: boolean) =>
  math(`${theme.unit} * ${isActive ? activeSize : defaultSize}`);

export const itemHeight = (theme: DefaultTheme, isActive?: boolean) =>
  math(`${theme.unit} * ${isActive ? activeSize + bottomHeight : defaultSize}`);

export const itemGutter = (theme: DefaultTheme, isActive?: boolean) =>
  math(`${theme.unit} * ${isActive ? 3 : 0.5}`);

const Bottom = styled.div`
  background: ${props => props.theme.colors.bright};
  height: ${props => math(`${props.theme.unit} * ${bottomHeight}`)};
  justify-content: center;
  align-items: center;
`;

const Image = styled(Square)`
  width: 100%;
  background: ${props => props.theme.colors.background};
`;

const Container = styled.div(
  activationTransition('margin-left'),
  ({ theme }) => css`
    &.${activeClass} + &:not(.${activeClass}) {
      margin-left: ${itemGutter(theme, true)};
    }
    &:not(.${activeClass}) + &.${activeClass} {
      margin-left: ${itemGutter(theme, true)};
    }
    &:not(.${activeClass}) + &:not(.${activeClass}) {
      margin-left: ${itemGutter(theme, false)};
    }
  `
);

const Body = styled(Border)<{ isActive: boolean }>(
  activationTransition('width', 'height'),
  ({ theme, isActive }) => css`
    width: ${itemWidth(theme, isActive)};
    height: ${itemHeight(theme, isActive)};
  `
);

const Crop = styled(Dock)`
  overflow: hidden;
`;
