import { windowSizeObserverBehavior } from './windowSizeObserverBehavior';
import { State } from '../state/State';
import { inputBehavior } from './inputBehavior';
import { directInputToNavigation } from './directInputToNavigation';

export const appBehavior = (state: State) => {
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
