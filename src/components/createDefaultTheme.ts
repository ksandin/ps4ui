import { DefaultTheme } from 'styled-components/macro';

export const createDefaultTheme = (): DefaultTheme => ({
  unit: '8px',
  colors: {
    main: 'yellow',
    secondary: 'blue'
  }
});
