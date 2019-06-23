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
    <div ref={ref} {...props}>
      <Body isActive={isActive}>
        {Icon && <Icon />}
        <Text isActive={isActive}>{name}</Text>
      </Body>
    </div>
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

export const itemSize = ({ unit }: DefaultTheme) => math(`${unit} * 12`);

export const itemScale = (isActive: boolean) => (isActive ? 1 : 0.5);

const Body = styled.div<{ isActive: boolean }>`
  ${activationTransition('transform')};
  position: absolute;
  transform: translate(-50%, -50%) scale(${props => itemScale(props.isActive)});
  svg {
    width: ${props => itemSize(props.theme)};
    height: ${props => itemSize(props.theme)};
    color: ${props => props.theme.colors.white};
  }
`;
