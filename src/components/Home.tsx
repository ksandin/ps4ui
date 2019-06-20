import * as React from 'react';
import { Dock } from './Dock';
import { Clock } from './Clock';
import { SystemMenu } from './SystemMenu/SystemMenu';
import { AppMenu } from './AppMenu/AppMenu';
import { StateContext } from '../state/State';
import { useSpatialIndex } from '../lib/spatial/useSpatialIndex';

export const Home = () => {
  const { apps, systems } = React.useContext(StateContext);
  const appMenuRef = React.useRef(null);
  const appIndex = useSpatialIndex(appMenuRef);
  const app = apps[appIndex];

  const systemMenuRef = React.useRef(null);
  const systemIndex = useSpatialIndex(systemMenuRef);
  const system = systems[systemIndex];

  return (
    <>
      {system ? system.name : undefined}
      <SystemMenu ref={systemMenuRef} items={systems} />
      <AppMenu ref={appMenuRef} items={apps} />
      {app ? app.name : undefined}
      <Dock variant="topRight">
        <Clock />
      </Dock>
    </>
  );
};
