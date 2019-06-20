import * as React from 'react';
import { StateContext } from '../../state/State';
import { useObserver } from 'mobx-react-lite';
import { createViewportStyle } from './createViewportStyle';

export type ViewportProps = React.HTMLAttributes<HTMLDivElement>;

export const Viewport: React.FC<ViewportProps> = ({
  children,
  ...dockProps
}) => {
  const { ui } = React.useContext(StateContext);
  return useObserver(() => (
    <div {...dockProps} style={createViewportStyle(ui.windowSize)}>
      {children}
    </div>
  ));
};
