import * as React from 'react';
import styled, { DefaultTheme } from 'styled-components/macro';
import { useSpatial } from '../../lib/spatial/useSpatial';
import { Content } from '../../state/Content';
import { TypographyProps } from '../Typography';
import { math } from 'polished';
import { GlowingTypography } from '../GlowingTypography';
import { activationTransition } from '../../css/transitions';

export type SystemMenuItemProps = React.HTMLAttributes<HTMLDivElement> &
  Content;

export const SystemMenuItem: React.FC<SystemMenuItemProps> = ({
  icon: Icon,
  name,
  ...props
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isActive = useSpatial(ref);
  return (
    <Container ref={ref} {...props} isActive={isActive}>
      <Icon />
      <Text isActive={isActive}>{name}</Text>
    </Container>
  );
};

const Text = styled(GlowingTypography).attrs<TypographyProps>({
  variant: 'h4'
})<{ isActive: boolean }>`
  ${activationTransition('opacity')};
  opacity: ${props => (props.isActive ? 1 : 0)};
  margin-top: ${props => math(`${props.theme.unit} * 3`)};
  margin-bottom: 0;
`;

const size = ({ unit }: DefaultTheme) => math(`${unit} * 12`);
const Container = styled.div<{ isActive: boolean }>`
  & {
    ${activationTransition('transform')};
    transform: translate(0, -32%) scale(${props => (props.isActive ? 1 : 0.5)});
    align-items: center;
  }
  svg {
    width: ${props => size(props.theme)};
    height: ${props => size(props.theme)};
    color: ${props => props.theme.colors.white};
  }
`;
