import { windowSizeObserverBehavior } from './windowSizeObserverBehavior';
import { AppState } from '../state/AppState';
import { inputBehavior } from './inputBehavior';
import { directInputToNavigation } from './directInputToNavigation';

export const appBehavior = (state: AppState) => {
  const stoppers = [
    windowSizeObserverBehavior(size => state.ui.setWindowSize(size)),
    inputBehavior(input => directInputToNavigation(input, state.spatial))
  ];

  return () => {
    while (stoppers.length) {
      stoppers.pop()!();
    }
  };
};
