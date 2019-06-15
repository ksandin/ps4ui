import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { AppState } from '../state/AppState';
import { useObserver } from 'mobx-react-lite';
import { Screen } from '../components/Screen';
import { ThemeProvider } from 'styled-components';
import { Viewport } from '../components/Viewport';
import { Home } from '../components/Home';
import { Reset } from '../components/Reset';

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
        <Viewport>
          <Screen>
            <Home />
          </Screen>
        </Viewport>
      </AppState.Context.Provider>
    </ThemeProvider>
  ))
);
