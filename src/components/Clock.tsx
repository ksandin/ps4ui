import * as React from 'react';
import { Typography } from './Typography';
import { useObserver } from 'mobx-react-lite';
import { timeBehavior } from '../behaviors/timeBehavior';

export const Clock = () => {
  const [time, setTime] = React.useState(new Date());
  React.useEffect(() => timeBehavior(setTime), []);
  return useObserver(() => (
    <Typography variant="h3">
      {time.getHours()}:{time.getMinutes()}
    </Typography>
  ));
};
