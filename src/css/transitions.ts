import { DefaultTheme } from 'styled-components';
import { transitions } from 'polished';

export const activationTransition = (...properties: string[]) => ({
  isActive,
  theme
}: {
  isActive: boolean;
  theme: DefaultTheme;
}) =>
  transitions(
    properties,
    isActive ? theme.transitions.activate : theme.transitions.deactivate
  );
