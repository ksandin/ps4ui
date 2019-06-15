import * as React from 'react';
import { TypographyTest } from './TypographyTest';
import { Dock } from './Dock';
import { Clock } from './Clock';

export const Home = () => (
  <>
    <TypographyTest />
    <Dock variant="topRight">
      <Clock />
    </Dock>
  </>
);
