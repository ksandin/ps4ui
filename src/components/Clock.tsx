import * as React from 'react';
import { Typography, TypographyProps } from './Typography';
import { useTimer } from '../hooks/useTimer';
import styled from 'styled-components';

export type ClockProps = TypographyProps;

export const Clock: React.FC<ClockProps> = props => {
  const time = useTimer();
  return (
    <ClockTypography {...props}>
      {timeString(time.getHours())}:{timeString(time.getMinutes())}
    </ClockTypography>
  );
};

const ClockTypography = styled(Typography).attrs<TypographyProps>({
  variant: 'h3'
})``;

const timeString = (num: number) => num.toString().padStart(2, '0');
