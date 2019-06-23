import * as React from 'react';
import { StyledIconProps } from 'styled-icons/types';
import { Content } from './Content';

export type System = Content & {
  icon: React.ComponentType<
    React.HTMLAttributes<HTMLElement> | StyledIconProps
  >;
  info?: React.ComponentType<
    React.HTMLAttributes<HTMLElement> | StyledIconProps
  >;
  hideWhenInactive?: boolean;
};
