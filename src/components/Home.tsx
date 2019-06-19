import * as React from 'react';
import { Dock } from './Dock';
import { Clock } from './Clock';
import { SystemMenu } from './SystemMenu/SystemMenu';
import { AppMenu } from './AppMenu/AppMenu';

export const Home = () => (
  <>
    <SystemMenu />
    <AppMenu />
    <Dock variant="topRight">
      <Clock />
    </Dock>
  </>
);
