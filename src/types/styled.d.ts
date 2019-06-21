import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    unit: string;
    transitions: {
      activate: string;
      deactivate: string;
    };
    colors: {
      main: string;
      secondary: string;
      white: string;
      dark: string;
      bright: string;
      background: string;
    };
  }
}
