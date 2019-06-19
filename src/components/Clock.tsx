import * as React from 'react';
import { Typography } from './Typography';
import { timeEffect } from '../effects/timeEffect';

export const Clock = () => {
  const [time, setTime] = React.useState(new Date());
  React.useEffect(() => timeEffect(setTime), []);
  return (
    <Typography variant="h3">
      {time.getHours()}:{time.getMinutes()}
    </Typography>
  );
};
