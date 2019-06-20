import * as React from 'react';
import { StyledIconProps } from 'styled-icons/types';

export type Content = {
  icon: React.ComponentType<StyledIconProps>;
  name: string;
};
