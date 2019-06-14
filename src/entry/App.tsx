import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { AppState } from '../state/AppState';
import { useObserver } from 'mobx-react-lite';
import { Themed } from '../components/Themed';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

export type AppProps = {
  state: AppState;
};

/**
 * The root component of the application.
 * Provides all application state and renders current state.
 */
export const App = hot(({ state }: AppProps) =>
  useObserver(() => (
    <ThemeProvider theme={state.theme}>
      <AppState.Context.Provider value={state}>
        <Reset />
        <Themed>Hello World</Themed>
      </AppState.Context.Provider>
    </ThemeProvider>
  ))
);
