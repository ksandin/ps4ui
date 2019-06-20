import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    unit: string;
    colors: {
      main: string;
      secondary: string;
      white: string;
    };
  }
}
