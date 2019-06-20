import * as React from 'react';
import { State, StateContext } from './state/State';
import { useObserver } from 'mobx-react-lite';
import { Screen } from './components/Screen';
import { ThemeProvider } from 'styled-components/macro';
import { Viewport } from './components/Viewport/Viewport';
import { Home } from './components/Home';
import { Reset } from './components/Reset';
import { SpatialContext } from './lib/spatial/SpatialContext';

export type AppProps = {
  state: State;
};

/**
 * The root component of the application.
 * Provides all application state and renders current state.
 */
export const Root = ({ state }: AppProps) =>
  useObserver(() => (
    <ThemeProvider theme={state.theme}>
      <SpatialContext.Provider value={state.spatial}>
        <StateContext.Provider value={state}>
          <Reset />
          <Viewport>
            <Screen>
              <Home />
            </Screen>
          </Viewport>
        </StateContext.Provider>
      </SpatialContext.Provider>
    </ThemeProvider>
  ));
