import { windowSizeObserverEffect } from './windowSizeObserverEffect';
import { State } from '../state/State';
import { inputEffect } from './inputEffect';
import { directInputToNavigation } from './directInputToNavigation';

export const appEffects = (state: State) => {
  const stoppers = [
    windowSizeObserverEffect(size => state.ui.setWindowSize(size)),
    inputEffect(input => directInputToNavigation(input, state.spatial))
  ];

  return () => {
    while (stoppers.length) {
      stoppers.pop()!();
    }
  };
};
