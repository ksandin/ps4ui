import * as React from 'react';
import { StyledIconProps } from 'styled-icons/types';

export type Content = {
  icon?: React.ComponentType<
    React.HTMLAttributes<HTMLElement> | StyledIconProps
  >;
  component?: React.ComponentType<
    React.HTMLAttributes<HTMLElement> | StyledIconProps
  >;
  name: string;
  action?: string;
};
