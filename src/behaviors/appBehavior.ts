import { windowSizeObserverBehavior } from './windowSizeObserverBehavior';
import { AppState } from '../state/AppState';

export const appBehavior = (state: AppState) => {
  const stoppers = [
    windowSizeObserverBehavior(size => state.ui.setWindowSize(size))
  ];

  return () => {
    while (stoppers.length) {
      stoppers.pop()!();
    }
  };
};
