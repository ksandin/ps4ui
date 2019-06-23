import * as React from 'react';
import { Dock } from './Dock';
import { Clock } from './Clock';
import { SystemMenu } from './SystemMenu/SystemMenu';
import { AppMenu } from './AppMenu/AppMenu';
import { StateContext } from '../state/State';
import { useSpatialIndex } from '../lib/spatial/useSpatialIndex';
import { SystemMenuContent } from './SystemMenu/SystemMenuContent';
import { AppMenuContent } from './AppMenu/AppMenuContent';

export const Home = () => {
  const { apps, systems } = React.useContext(StateContext);
  const systemMenuRef = React.useRef(null);
  const systemIndex = useSpatialIndex(systemMenuRef);
  const system = systems[systemIndex];

  const appMenuRef = React.useRef(null);
  const appIndex = useSpatialIndex(appMenuRef);
  const app = apps[appIndex];

  return (
    <>
      <SystemMenuContent system={system} />
      <SystemMenu ref={systemMenuRef} items={systems} />
      <AppMenu ref={appMenuRef} items={apps} />
      <AppMenuContent swapKey={app && app.name}>
        {app && app.component && React.createElement(app.component)}
      </AppMenuContent>
      <Dock variant="topRight">
        <Clock />
      </Dock>
    </>
  );
};
