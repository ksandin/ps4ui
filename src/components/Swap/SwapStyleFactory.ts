import {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps
} from 'styled-components';

export type SwapStyleFactory = (
  visible: boolean
) => FlattenInterpolation<ThemeProps<DefaultTheme>>;
