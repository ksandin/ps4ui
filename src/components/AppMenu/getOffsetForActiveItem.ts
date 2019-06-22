import { DefaultTheme } from 'styled-components';
import { math } from 'polished';
import { itemGutter, itemWidth } from './AppMenuItem';

export const getOffsetForActiveItem = (theme: DefaultTheme, index: number) => {
  if (index === -1) {
    return 0;
  }
  const normalGutters = math(
    `max(0, ${index - 1}) * ${itemGutter(theme, false)}`
  );
  const largeGutter = index > 0 ? itemGutter(theme, true) : 0;
  return math(
    `-(${index} * ${itemWidth(theme)} + ${normalGutters} + ${largeGutter})`
  );
};
