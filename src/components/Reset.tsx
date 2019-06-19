import { createGlobalStyle } from 'styled-components/macro';
import reset from 'styled-reset';
import { shevy } from './Typography';

/**
 * Merges Eric Meyer's CSS Reset and the YOGA standard (https://facebook.github.io/yoga) into one.
 * This normalizes css across all browsers and allows us to follow yoga principles.
 */
export const Reset = createGlobalStyle`
  ${reset}
  body {
    ${JSON.stringify(shevy.body)}
  }
  body * {
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    flex-shrink: 0;
    align-content: flex-start;
    border-width: 0;
    margin: 0;
    padding: 0;
    min-width: 0;
  }
`;
