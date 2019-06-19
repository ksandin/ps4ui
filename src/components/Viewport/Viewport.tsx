import * as React from 'react';
import { AppState } from '../../state/AppState';
import { useObserver } from 'mobx-react-lite';
import { createViewportStyle } from './createViewportStyle';

export type ViewportProps = React.HTMLAttributes<HTMLDivElement>;

export const Viewport: React.FC<ViewportProps> = ({
  children,
  ...dockProps
}) => {
  const {
    ui: { windowSize }
  } = React.useContext(AppState.Context);
  return useObserver(() => {
    return (
      <div {...dockProps} style={createViewportStyle(windowSize)}>
        {children}
      </div>
    );
  });
};
