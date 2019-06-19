import * as React from 'react';
import { Typography } from './Typography';
import { useTimer } from '../hooks/useTimer';

export const Clock = () => {
  const time = useTimer();
  return (
    <Typography variant="h3">
      {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
    </Typography>
  );
};
