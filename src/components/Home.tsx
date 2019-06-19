import * as React from 'react';
import { Dock } from './Dock';
import { Clock } from './Clock';
import { SystemMenu } from './SystemMenu/SystemMenu';

export const Home = () => (
  <>
    <SystemMenu />
    <SystemMenu />
    <Dock variant="topRight">
      <Clock />
    </Dock>
  </>
);
