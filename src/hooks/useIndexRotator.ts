import * as React from 'react';
import { inputChangeEffect } from '../effects/inputChangeEffect';

export const useIndexRotator = (getMax: () => number) => {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const nextIndex = () => setIndex((index + 1) % getMax());
    return inputChangeEffect(input => input.A && nextIndex());
  }, [index, setIndex, getMax]);
  return index;
};
