import * as React from 'react';
import styled, { DefaultTheme } from 'styled-components/macro';
import { useSpatial } from '../../lib/spatial/useSpatial';
import { System } from '../../state/System';
import { TypographyProps } from '../Typography';
import { math } from 'polished';
import { GlowingTypography } from '../GlowingTypography';
import { activationTransition } from '../../css/transitions';
import { Collapse } from '../Collapse';
import { Row } from '../Row';

export type SystemMenuItemProps = React.HTMLAttributes<HTMLDivElement> & {
  system: System;
  isVisible?: boolean;
  showInfo?: boolean;
};

export const SystemMenuItem: React.FC<SystemMenuItemProps> = ({
  system: { name, icon: Icon, info: Info },
  isVisible = true,
  showInfo,
  ...props
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isActive = useSpatial(ref);
  return (
    <Container
      ref={ref}
      x={!isVisible}
      showOverflow
      contentComponent={Row}
      contentProps={{ style: { alignItems: 'center' } }}
      {...props}
    >
      <Body isVisible={isVisible} isActive={isActive}>
        {Icon && <Icon />}
        <Text isActive={isActive}>{name}</Text>
      </Body>
      {Info && (
        <Collapse x={!showInfo}>
          <Info />
        </Collapse>
      )}
    </Container>
  );
};

export const itemSize = ({ unit }: DefaultTheme) => math(`${unit} * 12`);

export const itemScale = (isActive: boolean) => (isActive ? 1 : 0.5);

const Container = styled(Collapse)``;

const Body = styled.div<{ isActive: boolean; isVisible: boolean }>`
  ${activationTransition('transform', 'opacity')};
  align-items: center;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transform: scale(${props => itemScale(props.isActive)});
  width: ${props => itemSize(props.theme)};
  svg {
    width: 100%;
    height: ${props => itemSize(props.theme)};
    color: ${props => props.theme.colors.white};
  }
`;

const Text = styled(GlowingTypography).attrs<TypographyProps>({
  variant: 'h4'
})<{ isActive: boolean }>`
  ${activationTransition('opacity')};
  opacity: ${props => (props.isActive ? 1 : 0)};
  position: absolute;
  bottom: ${props => math(`-${props.theme.unit} * 5`)};
`;
