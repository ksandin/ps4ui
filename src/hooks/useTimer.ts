import * as React from 'react';
import { timeEffect } from '../effects/timeEffect';

export const useTimer = (interval?: number) => {
  const [time, setTime] = React.useState(new Date());
  React.useEffect(() => timeEffect(setTime, interval), [setTime, interval]);
  return time;
};
