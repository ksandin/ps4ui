import * as React from 'react';
import { Typography, TypographyProps } from './Typography';
import { useTimer } from '../hooks/useTimer';

export type ClockProps = TypographyProps;

export const Clock: React.FC<ClockProps> = props => {
  const time = useTimer();
  return (
    <Typography variant="h3" {...props}>
      {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
    </Typography>
  );
};
