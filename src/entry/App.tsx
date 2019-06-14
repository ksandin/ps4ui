import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { AppState } from '../state/AppState';
import { useObserver } from 'mobx-react-lite';

export type AppProps = {
  state: AppState;
};

/**
 * The root component of the application.
 * Provides all application state and renders current state.
 */
export const App = hot(({ state }: AppProps) =>
  useObserver(() => (
    <AppState.Context.Provider value={state}>
      Hello world
    </AppState.Context.Provider>
  ))
);
