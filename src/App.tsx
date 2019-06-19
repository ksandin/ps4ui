import * as React from 'react';
import { AppState } from './state/AppState';
import { useObserver } from 'mobx-react-lite';
import { Screen } from './components/Screen';
import { ThemeProvider } from 'styled-components/macro';
import { Viewport } from './components/Viewport/Viewport';
import { Home } from './components/Home';
import { Reset } from './components/Reset';
import { SpatialContext } from './lib/spatial/SpatialContext';

export type AppProps = {
  state: AppState;
};

/**
 * The root component of the application.
 * Provides all application state and renders current state.
 */
export const App = ({ state }: AppProps) =>
  useObserver(() => (
    <ThemeProvider theme={state.theme}>
      <SpatialContext.Provider value={state.spatial}>
        <AppState.Context.Provider value={state}>
          <Reset />
          <Viewport>
            <Screen>
              <Home />
            </Screen>
          </Viewport>
        </AppState.Context.Provider>
      </SpatialContext.Provider>
    </ThemeProvider>
  ));