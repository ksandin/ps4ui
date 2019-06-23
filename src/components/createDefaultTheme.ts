import { DefaultTheme } from 'styled-components/macro';

export const createDefaultTheme = (): DefaultTheme => {
  const white = '#fff';
  return {
    unit: '8px',
    transitions: {
      activate: '0.25s cubic-bezier(.5,.68,.53,.9)',
      deactivate: '.25s cubic-bezier(.5,.68,.53,.9)'
    },
    colors: {
      white,
      main: white,
      secondary: 'rgb(0, 30, 120)',
      background: 'rgb(30, 80, 150)',
      bright: 'rgba(14, 141, 211, 0.5)',
      dark: 'rgb(0, 30, 120)'
    }
  };
};
