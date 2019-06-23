import * as React from 'react';
import styled, { DefaultTheme } from 'styled-components/macro';
import { useSpatial } from '../../lib/spatial/useSpatial';
import { Content } from '../../state/Content';
import { TypographyProps } from '../Typography';
import { math } from 'polished';
import { GlowingTypography } from '../GlowingTypography';
import { activationTransition } from '../../css/transitions';
import { Row } from '../Row';
import { Collapse } from '../Collapse';

export type SystemMenuItemProps = React.HTMLAttributes<HTMLDivElement> &
  Content & {
    isVisible?: boolean;
    isCollapsed?: boolean;
  };

export const SystemMenuItem: React.FC<SystemMenuItemProps> = ({
  icon: Icon,
  imageUrl,
  name,
  component,
  info: Info,
  isVisible = true,
  isCollapsed,
  ...props
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isActive = useSpatial(ref);
  return (
    <Container ref={ref} isVisible={isVisible} {...props}>
      {Info && (
        <InfoOffset isActive={!isCollapsed}>
          <Collapse x={isCollapsed}>
            <Info />
          </Collapse>
        </InfoOffset>
      )}
      <Body isActive={isActive}>
        {Icon && <Icon />}
        <Text isActive={isActive}>{name}</Text>
      </Body>
    </Container>
  );
};

const Text = styled(GlowingTypography).attrs<TypographyProps>({
  variant: 'h4'
})<{ isActive: boolean }>`
  ${activationTransition('opacity')};
  opacity: ${props => (props.isActive ? 1 : 0)};
  position: absolute;
  bottom: ${props => math(`-${props.theme.unit} * 5`)};
`;

export const itemSize = ({ unit }: DefaultTheme) => math(`${unit} * 12`);

export const itemScale = (isActive: boolean) => (isActive ? 1 : 0.5);

const Container = styled(Row)<{ isVisible?: boolean }>`
  ${activationTransition('opacity')};
  align-items: center;
  opacity: ${props => (props.isVisible ? 1 : 0)};
`;

const Body = styled.div<{ isActive: boolean }>`
  ${activationTransition('transform')};
  position: absolute;
  transform: translate(-50%) scale(${props => itemScale(props.isActive)});
  width: ${props => itemSize(props.theme)};
  align-items: center;
  svg {
    height: ${props => itemSize(props.theme)};
    color: ${props => props.theme.colors.white};
  }
`;

const getInfoOffset = (theme: DefaultTheme) =>
  math(`${itemSize(theme)} + ${theme.unit} * 2`);

const InfoOffset = styled.div<{ isActive: boolean }>`
  ${activationTransition('margin-left')};
  margin-left: ${props => (props.isActive ? getInfoOffset(props.theme) : 0)};
`;
