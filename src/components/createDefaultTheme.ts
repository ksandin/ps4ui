import { DefaultTheme } from 'styled-components/macro';

export const createDefaultTheme = (): DefaultTheme => {
  const white = '#fff';
  const black = '#000';
  return {
    unit: '8px',
    colors: {
      white,
      main: white,
      secondary: black
    }
  };
};
