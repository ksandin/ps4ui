import { DefaultTheme } from 'styled-components/macro';

export const createDefaultTheme = (): DefaultTheme => {
  const white = '#fff';
  const black = '#000';
  return {
    unit: '8px',
    transitions: {
      activate: '0.2s cubic-bezier(.5,.68,.53,.9)',
      deactivate: '0.2s cubic-bezier(.5,.68,.53,.9)'
    },
    colors: {
      white,
      main: white,
      secondary: black
    }
  };
};
