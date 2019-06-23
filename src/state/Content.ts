import * as React from 'react';
import { StyledIconProps } from 'styled-icons/types';

export type Content = {
  name: string;
  component: React.ComponentType<
    React.HTMLAttributes<HTMLElement> | StyledIconProps
  >;
};
